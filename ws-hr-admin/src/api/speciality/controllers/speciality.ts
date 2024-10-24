/**
 * speciality controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::speciality.speciality', ({ strapi }) => ({
  async find(ctx) {
    const { data, meta } = await super.find(ctx);

    const populatedSpecialities = await strapi.entityService.findMany('api::speciality.speciality', {
      ...ctx.query,
      populate: {
        tasks: true,
      },
    });

    return { data: populatedSpecialities, meta };
  },
}));
