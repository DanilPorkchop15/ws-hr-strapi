import type { Core } from '@strapi/strapi';
import { v4 as uuidv4 } from 'uuid';

const controller = ({ strapi }: { strapi: Core.Strapi }) => ({
  async generateLink(ctx) {
    const { specialty } = ctx.request.body;

    const [activeTasks] = await strapi.db.query('api::task.task').findWithCount({
      where: { specialty, isActive: true },
      populate: ['taskLinks'],
    });

    if (activeTasks.length === 0) {
      return ctx.badRequest('Нет активных заданий для этой специальности');
    }

    const randomTask = activeTasks[Math.floor(Math.random() * activeTasks.length)];

    const newUUID = uuidv4();

    await strapi.db.query('api::task-link.task-link').create({
      data: {
        uuid: newUUID,
        task: randomTask.id,
        isValid: true,
      },
    });

    const link = `${ctx.request.origin}/tasks/${newUUID}`;
    return ctx.send({ link });
  },

  async validateLink(ctx) {
    const { uuid } = ctx.params;

    const taskLink = await strapi.db.query('api::task-link.task-link').findOne({
      where: { uuid, isValid: true },
      populate: ['task'],
    });

    if (!taskLink) {
      return ctx.badRequest('Ссылка недействительна или уже использована');
    }

    await strapi.db.query('api::task-link.task-link').update({
      where: { id: taskLink.id },
      data: { isValid: false },
    });

    return ctx.send({ task: taskLink.task });
  },
});

export default controller;
