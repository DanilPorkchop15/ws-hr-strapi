/**
 * task-link controller
 */

import { factories } from "@strapi/strapi";
import { v4 as uuidv4 } from "uuid";

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

      await strapi.entityService.update("api::task-link.task-link", taskLink.id, {
        data: {
          isValid: false
        }
      })

      return taskLink;
    },
    async create(ctx) {
      const uuid = uuidv4();
      const { data } = ctx.request.body;
      const result = await strapi.entityService.create("api::task-link.task-link", {
        data : {
          ...data,
          uuid,
          isValid: true
        }
      })
      const sanitizedResults = await this.sanitizeOutput(result, ctx);

      return this.transformResponse(sanitizedResults);
    }
  }),
);