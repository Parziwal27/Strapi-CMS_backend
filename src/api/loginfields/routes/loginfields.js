module.exports = {
  routes: [
    {
      method: "GET",
      path: "/login-fields",
      handler: "loginfields.getFields",
      config: {
        policies: [],
        auth: false,
      },
    },
    {
      method: "POST",
      path: "/validate-user",
      handler: "loginfields.validateUserFields",
      config: {
        policies: [],
        auth: false,
      },
    },
  ],
};
