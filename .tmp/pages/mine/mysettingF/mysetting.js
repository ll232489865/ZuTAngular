import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginService } from '../login.service';
import { TabsPage } from '../../tabs/tabs';
export var MySettingPage = (function () {
    function MySettingPage(loginService, navCtrl) {
        this.loginService = loginService;
        this.navCtrl = navCtrl;
    }
    MySettingPage.prototype._quitApp = function () {
        this.loginService.logout();
        // this.navCtrl.pop();
        this.navCtrl.setRoot(TabsPage, { userParams: 3 });
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