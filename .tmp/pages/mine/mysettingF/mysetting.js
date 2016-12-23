import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginService } from '../login.service';
export var MySettingPage = (function () {
    function MySettingPage(loginService, navCtrl) {
        this.loginService = loginService;
        this.navCtrl = navCtrl;
        // this.ac="首页";
    }
    // ac:any;
    MySettingPage.prototype._quitApp = function () {
        this.loginService.logout();
        this.navCtrl.pop();
    };
    MySettingPage.decorators = [
        { type: Component, args: [{
                    selector: 'my-component',
                    templateUrl: 'mysetting.html'
                },] },
    ];
    /** @nocollapse */
    MySettingPage.ctorParameters = [
        { type: LoginService, },
        { type: NavController, },
    ];
    return MySettingPage;
}());
//# sourceMappingURL=mysetting.js.map