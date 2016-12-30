import { Component, Compiler } from '@angular/core';
import { ViewController, NavController, App, ModalController } from 'ionic-angular';
import { Storage } from "@ionic/storage";
import { Istudy } from 'ionic-native';
import { LoginPage } from './login';
import { LoginService } from './login.service';
import { MyAccountPage } from './myaccountF/myaccount';
import { MyAboutPage } from './myaboutF/myabout';
import { MyCoursePage } from './mycourseF/mycourse';
import { MySettingPage } from './mysettingF/mysetting';
import { MyInfoPage } from './myinfoF/myinfo';
export var MinePage = (function () {
    function MinePage(loginService, navCtrl, viewCtrl, app, modalCtrl, _clearCache, storage) {
        this.loginService = loginService;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.app = app;
        this.modalCtrl = modalCtrl;
        this._clearCache = _clearCache;
        this.storage = storage;
    }
    MinePage.prototype._enterLogin = function (_num) {
        if (_num == 4) {
            // this.navCtrl.push(MyAboutPage);
            this.app.getRootNav().push(MyAboutPage);
        }
        else {
            if (this.loginService.isLoggedIn) {
                // code...
                switch (_num) {
                    case 1:
                        // code...
                        // this.navCtrl.push(MyAccountPage);
                        this.app.getRootNav().push(MyAccountPage);
                        break;
                    case 2:
                        // this.navCtrl.push(MyCoursePage);
                        this.app.getRootNav().push(MyCoursePage);
                        break;
                    case 3:
                        // this.navCtrl.push(MySettingPage);
                        this.app.getRootNav().push(MySettingPage);
                        break;
                }
            }
            else {
                this.app.getRootNav().push(LoginPage);
            }
        }
    };
    MinePage.prototype._enterInfo = function () {
        if (this.loginService.isLoggedIn) {
            // this.navCtrl.push(MyInfoPage);
            this.app.getRootNav().push(MyInfoPage);
        }
    };
    MinePage.prototype.logout = function () {
        this.loginService.logout();
    };
    MinePage.prototype.ngOnInit = function () {
        var _this = this;
        this.loginImg = "source/img/logo.png";
        Istudy.getDeviceInfo().then(function (result) {
            _this.deviceId = "DEVICE_ID";
            _this.storage.set(_this.deviceId, result.devId);
        });
    };
    MinePage.prototype.ngAfterViewInit = function () {
        if (this.loginService.isLoggedIn) {
            this.loginService.getAccountInfo(callBack);
        }
        var _self = this;
        function callBack(result) {
            _self.loginStatus = _self.loginService.isLoggedIn;
            _self.loginImg = _self.loginService.isLoggedIn ? result.avatar : "source/img/logo.png";
            _self.loginAccount = result.nicknm;
            // 9999999999{"uuid":"a88121420d3d4e3383b65311e21334eb","nicknm":"白菜","gndr":0,"avatar":"http://oaa4szy4p.bkt.clouddn.com/FhyK08sdUwkl71bnBldyNGVN-HnP","rongyunToken":"2xxsm1gRsgvXb7PYgmgXz8O5+C6ckYlUzJczja0eV/fEwT2alkUXQhz6F2TdTcc6ETFdE8o1uaup75AdGRLX13qGCwVyvaEKdnG1bfZBz54VErwbhRmBZrzXWBYiN10MHGCAan28C20="}
        }
    };
    MinePage.prototype.ngAfterContentChecked = function () {
    };
    MinePage.decorators = [
        { type: Component, args: [{
                    selector: 'page_mine',
                    templateUrl: 'mine.html'
                },] },
    ];
    /** @nocollapse */
    MinePage.ctorParameters = [
        { type: LoginService, },
        { type: NavController, },
        { type: ViewController, },
        { type: App, },
        { type: ModalController, },
        { type: Compiler, },
        { type: Storage, },
    ];
    return MinePage;
}());
//# sourceMappingURL=mine.js.map