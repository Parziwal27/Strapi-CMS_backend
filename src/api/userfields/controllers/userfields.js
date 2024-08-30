"use strict";

module.exports = {
  async getFields(ctx) {
    try {
      const fields = ["username", "email", "password", "age"];
      const userFields = await strapi
        .query("plugin::users-permissions.user")
        .findMany({
          select: fields,
        });

      ctx.body = {
        fields: fields,
        data: userFields,
      };
    } catch (err) {
      ctx.body = err;
    }
  },
};
