module.exports = {
  routes: [
    {
      method: "GET",
      path: "/user-fields",
      handler: "userfields.getFields",
      config: {
        policies: [],
        auth: false,
      },
    },
  ],
};
