module.exports = {
  "content-api": {
    type: "content-api",
    routes: [
      {
        method: "GET",
        path: "/view_estimate",
        handler: "test.view",
        config: {
          auth: false,
        },
      },
    ],
  },
};
