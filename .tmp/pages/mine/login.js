import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { Location } from '@angular/common';
import { ViewController, NavController } from 'ionic-angular';
export var LoginPage = (function () {
    function LoginPage(loginService, location, viewCtrl, navCtrl) {
        this.loginService = loginService;
        this.location = location;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
    }
    LoginPage.prototype._login = function (account, password) {
        this.loginService
            .login(account, password);
        if (this.loginService.isLoggedIn) {
            this.navCtrl.pop();
        }
    };
    LoginPage.decorators = [
        { type: Component, args: [{
                    selector: 'my-component',
                    templateUrl: 'login.html'
                },] },
    ];
    /** @nocollapse */
    LoginPage.ctorParameters = [
        { type: LoginService, },
        { type: Location, },
        { type: ViewController, },
        { type: NavController, },
    ];
    return LoginPage;
}());
//# sourceMappingURL=login.js.map