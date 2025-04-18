const {Builder, By, until} = require('selenium-webdriver');
const assert = require('assert');

describe('Google Search', function() {
    let driver;

    it('Visit Sauce Demo dan cek page title', async function() {
        driver = await new Builder().forBrowser('chrome').build();
        
        await driver.get('https://www.saucedemo.com/');

        await driver.sleep(3000); // Tunggu 2 detik agar halaman sepenuhnya dimuat
        const title = await driver.getTitle();
        assert.strictEqual(title, 'Swag Labs');

        //await driver.quit();
    });




});