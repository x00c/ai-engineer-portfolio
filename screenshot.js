const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('https://yuri-wg-portfolio.pages.dev/', { waitUntil: 'networkidle2' });
  await page.screenshot({ path: 'yuri.png' });
  await browser.close();
})();
