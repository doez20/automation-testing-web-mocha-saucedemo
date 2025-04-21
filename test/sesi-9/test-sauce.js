const {Builder, By, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const { ServiceBuilder } = require('selenium-webdriver/chrome');
const assert = require('assert');

describe('Google Search', function() {
    let service = new ServiceBuilder(require('chromedriver').path);
    let options = new chrome.Options();

    let driver = new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .setChromeService(service)
        .build();
    

    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
        console.log("ini ngeprint di dalem hook before");
    });


    it('Sukses Login dan urutkan Produk dari A - Z', async function() {
        

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
        
        //await driver.quit();
    



         
    });
    

    after(async function() {
        await driver.quit();
        console.log("ini ngeprint di dalem hook after");
    });


});