// establecemos una variable que apunta a la biblioteca puppeteer
const puppeteer = require('puppeteer')

// inicio de script del test automático 
describe('Mi primer test en puppeter', () => {

    // Objetivo del script
    it ('Debe de abrir y cerrar el navegador', async () => {

        // creando una variable browser
        const browser = await puppeteer.launch({
            headless:false
        })

        // se abre una nueva página en la varible browser
        const page = await browser.newPage()

        // indica la url a donde debe ir la variable page
        await page.goto('https://dcodingames.com')
        
        // establecer un delay (pausa)
        await new Promise((resolve) => setTimeout(resolve, 5000))

        // recagar página
        await page.reload()

        // ir a otro sitio
        await page.goto('https://github.com')

        // navegación a página anterior
        await page.goBack()
        await new Promise((resolve) => setTimeout(resolve, 3000))

        // navegar hacia adelante
        await page.goForward()

        // abrir otra página en otra pestaña
        const page2 = await browser.newPage()
        await page2.goto('https://youtube.com')
        await new Promise((resolve) => setTimeout(resolve, 2000))

        // cerrar el navegador
        await browser.close()

    }, 40000)
})