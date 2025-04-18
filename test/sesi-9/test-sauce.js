const {Builder, By, until} = require('selenium-webdriver');
const assert = require('assert');

describe('Google Search', function() {
    let driver;

    /*
    it('Visit Sauce Demo dan cek page title', async function() {
        driver = await new Builder().forBrowser('chrome').build();
        
        await driver.get('https://www.saucedemo.com/');

        await driver.sleep(3000); // Tunggu 2 detik agar halaman sepenuhnya dimuat
        //const title = await driver.getTitle();
        //assert.strictEqual(title, 'Swag Labs');

        await driver.quit();
    });
    */

    it('Sukses Login dan urutkan Produk dari A - Z', async function() {
        //Options = new chrome.Options();
        //driver = await new Builder().forBrowser('chrome').build();
        
        const { Builder } = require('selenium-webdriver');
        const chrome = require('selenium-webdriver/chrome');
        const { ServiceBuilder } = require('selenium-webdriver/chrome');

        let service = new ServiceBuilder(require('chromedriver').path);
        let options = new chrome.Options();

        let driver = new Builder()
            .forBrowser('chrome')
            .setChromeOptions(options)
            .setChromeService(service)
            .build();

        await driver.get('https://www.saucedemo.com/');
        const title = await driver.getTitle();

        //assert memastikan object sama persis
        assert.strictEqual(title, 'Swag Labs');

        // input username dan password
        let username = await driver.findElement(By.id('user-name'));
        let password = await driver.findElement(By.id('password'));
        let loginButton = await driver.findElement(By.id('login-button'));
        await username.sendKeys('standard_user');
        await password.sendKeys('secret_sauce');
        await loginButton.click();

        // Tunggu sampai halaman utama dimuat
        await driver.wait(until.elementLocated(By.className('inventory_list')), 10000);

        /*
        let buttonCart = await driver.wait(
            until.elementLocated(By.className('shopping_cart_link')),
            10000
        );
        
        await driver.wait(until.elementIsVisible(buttonCart), 50000, 'Shopping cart harus tampil');

        */

        //assert : element ada
        //await buttonCart.isDisplayed()

        //assert : text dalam element benar
        let textAppLogo = await driver.findElement(By.className('app_logo'));
        let Logotext = await textAppLogo.getText();
        assert.strictEqual(Logotext, 'Swag Labs');
        console.log('Text Logo:', Logotext);

        await driver.findElement(By.xpath("//option[@value='az']")).click();
        
        let produkSort = driver.findElement(By.className('product_sort_container')).getText();
        console.log('Produk Sort:', produkSort);
        //let produkSort = await driver.findElement(By.className('product_sort_container')).sendKeys('az');
        //let produkSort = await driver.findElement(By.className('product_sort_container')).sendKeys('Name (A to Z)');
        //let produkSortText = await produkSort.getText();
        //assert.strictEqual(produkSortText, 'Name (A to Z)');
        //console.log('Text Sort:', produkSortText);
        //let sortText = await produkSort.getText();
        //assert.strictEqual(sortText, 'Name (A to Z)');
        //console.log('Text Sort:', sortText);

        // Cek apakah berhasil login dengan memeriksa elemen yang ada di halaman utama
        //const inventoryList = await driver.findElement(By.className('inventory_list'));
        //assert.ok(inventoryList, 'Login gagal, inventory list tidak ditemukan!');
        //await driver.sleep(3000); // Tunggu 2 detik agar halaman sepenuhnya dimuat
        await driver.quit();
    



         
    });
    
    /*
    it('Login ke Sauce Demo', async function() {
        
        driver = await new Builder().forBrowser('chrome').build();
        
        await driver.get('https://www.saucedemo.com/');
        
        // Tunggu elemen input username dan password muncul
        const usernameInput = await driver.wait(until.elementLocated(By.id('user-name')), 10000);
        const passwordInput = await driver.wait(until.elementLocated(By.id('password')), 10000);
        
        // Isi username dan password
        await usernameInput.sendKeys('standard_user');
        await passwordInput.sendKeys('secret_sauce');
        
        // Klik tombol login
        const loginButton = await driver.findElement(By.id('login-button'));
        await loginButton.click();
        
        // Tunggu sampai halaman utama dimuat
        await driver.wait(until.elementLocated(By.className('inventory_list')), 10000);
        
        // Cek apakah berhasil login dengan memeriksa elemen yang ada di halaman utama
        const inventoryList = await driver.findElement(By.className('inventory_list'));
        assert.ok(inventoryList, 'Login gagal, inventory list tidak ditemukan!');
    });
    */
});