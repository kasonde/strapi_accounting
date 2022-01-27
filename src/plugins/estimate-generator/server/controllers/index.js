"use strict";
const puppeteer = require("puppeteer");

const generatePDF = async (html = "") => {
  // create the browser instance of puppeteer
  const browser = await puppeteer.launch();
  // create the page in the browser
  const page = await browser.newPage();

  // set the content of the page
  await page.setContent(html);

  // create a buffer to store the pdf
  const pdfBuffer = await page.pdf();

  // close the page you're using.
  await page.close();
  // close the browser
  await browser.close();

  return pdfBuffer;
};

module.exports = {
  test: ({ strapi }) => ({
    async view(ctx) {
      ctx.body = "wow";
    },
  }),
};
