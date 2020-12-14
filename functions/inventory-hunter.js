const chromium = require('chrome-aws-lambda')

exports.handler = async (event, context) => {
  const pageToScrape = 'https://penner.me/using-nvm-to-enforce-node-versions/'
  let selector = '.dgtalV'

  const browser = await chromium.puppeteer.launch({
    executablePath: await chromium.executablePath,
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    headless: chromium.headless,
  })

  const page = await browser.newPage()

  await page.goto(pageToScrape)

  let title = page.title()

  await browser.close()

  return {
    statusCode: 200,
    body: title,
  }
}
