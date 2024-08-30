"use strict";

module.exports = {
  async getFields(ctx) {
    try {
      const fields = ["identifier", "password"];
      ctx.body = {
        fields: fields,
      };
    } catch (err) {
      ctx.status = 500;
      ctx.body = { error: "An error occurred while fetching fields" };
    }
  },

  async validateUserFields(ctx) {
    try {
      const { identifier, password, email } = ctx.request.body;

      console.log("Received request body:", { identifier, password, email });

      // Check if required fields are provided
      if (!identifier || !password) {
        ctx.status = 400;
        ctx.body = { error: "Missing required fields" };
        return;
      }

      // Find the user by identifier
      const user = await strapi
        .query("plugin::users-permissions.user")
        .findOne({
          where: { username: identifier },
        });

      console.log("Found user:", user);

      // If no user found, return an error
      if (!user) {
        ctx.status = 404;
        ctx.body = { error: "User not found" };
        return;
      }

      // Check email only if it's provided in the request
      if (email && user.email !== email) {
        ctx.status = 400;
        ctx.body = { error: "Email does not match" };
        return;
      }

      // Validate password
      const validPassword = await strapi.plugins[
        "users-permissions"
      ].services.user.validatePassword(password, user.password);

      if (!validPassword) {
        ctx.status = 400;
        ctx.body = { error: "Invalid password" };
        return;
      }

      // If all checks pass, return success
      ctx.body = {
        success: true,
        message: "All fields validated successfully",
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
        },
      };
    } catch (err) {
      console.error("Error in validateUserFields:", err);
      ctx.status = 500;
      ctx.body = {
        error: "An error occurred while validating fields",
        details: err.message,
      };
    }
  },
};
