// File: config/plugins.js

module.exports = {
  documentation: {
    enabled: true,
    config: {
      openapi: "3.0.0",
      info: {
        version: "1.0.0",
        title: "DOCUMENTATION",
        description: "A detailed documentation of your Strapi API",
        termsOfService: "YOUR_TERMS_OF_SERVICE_URL",
        contact: {
          name: "TEAM",
          email: "contact-email@something.io",
          url: "mywebsite.io",
        },
        license: {
          name: "Apache 2.0",
          url: "https://www.apache.org/licenses/LICENSE-2.0.html",
        },
      },
      "x-strapi-config": {
        // Add any Strapi-specific configurations here
        path: "/documentation",
        plugins: ["email", "upload", "users-permissions"],
      },
    },
  },
};
