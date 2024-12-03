const puppeteer = require('puppeteer')

// inicio de script del test automático 
describe('Mi primer test en puppeter', () => {

    // Objetivo del script
    it ('Interactuando con elementos', async () => {
        const browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null
        })
        const page = await browser.newPage()
        await page.goto('https://demo.guru99.com/test/simple_context_menu.html')

        // click derecho
        await page.click('#authentication > span', {button: 'right', delay: 1000})
        await browser.close()

    }, 50000)

})