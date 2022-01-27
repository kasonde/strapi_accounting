module.exports = {
  "content-api": {
    type: "content-api",
    routes: [
      {
        method: "GET",
        path: "/test_route",
        handler: "test.index",
        config: {
          auth: false,
        },
      },
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
