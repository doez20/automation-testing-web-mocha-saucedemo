//import {By} from 'selenium-webdriver';
const {By} = require('selenium-webdriver');

class PageLogin{
    
    static get username() { return By.id('user-name'); }
    static get password() { return By.id('password'); }
    static get loginButton() { return By.id('login-button'); }


    /*
    static username() { By.id('user-name'); }
    static  password() { By.id('password'); }
    static loginButton() { By.id('login-button'); }
    */
}

module.exports = PageLogin;
