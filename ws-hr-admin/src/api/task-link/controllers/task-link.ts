/**
 * task-link controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::task-link.task-link",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { id } = ctx.params;

      const taskLink = await strapi.db
        .query("api::task-link.task-link")
        .findOne({
          where: { uuid: id, isValid: true },
          populate: ["task"],
        });

      if (!taskLink) {
        return ctx.badRequest("Ссылка недействительна или уже использована");
      }

      return taskLink;
    },

    async update(ctx) {
      const { id } = ctx.params;

      const taskLink = await strapi.db
        .query("api::task-link.task-link")
        .findOne({
          where: { uuid: id },
          populate: ["task"],
        });

      if (!taskLink) {
        return ctx.badRequest("Ссылка недействительна или уже использована");
      }

      return await strapi.db.query("api::task-link.task-link").update({
        where: { uuid: id },
        data: { isValid: false },
      });
    },
  }),
);