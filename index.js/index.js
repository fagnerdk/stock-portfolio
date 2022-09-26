const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.youtube.com/watch?v=4W55nFDyIrc');
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();
 