'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('estimate-generator')
      .service('myService')
      .getWelcomeMessage();
  },
};
