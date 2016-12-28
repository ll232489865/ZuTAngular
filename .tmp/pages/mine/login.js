import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { LoginService } from './login.service';
import { TabsPage } from '../tabs/tabs';
export var LoginPage = (function () {
    function LoginPage(loginService, navCtrl, storage) {
        this.loginService = loginService;
        this.navCtrl = navCtrl;
        this.storage = storage;
    }
    LoginPage.prototype._login = function (account, password) {
        this.loginService.login(account, password, callBack);
        var _self = this;
        function callBack(result) {
            _self.storage.set("SESSION", result);
            if (_self.loginService.isLoggedIn) {
                // _self.navCtrl.pop();
                _self.navCtrl.setRoot(TabsPage, { userParams: 3 });
            }
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
        { type: NavController, },
        { type: Storage, },
    ];
    return LoginPage;
}());
//# sourceMappingURL=login.js.map