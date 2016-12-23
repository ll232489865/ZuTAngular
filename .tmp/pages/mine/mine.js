import { Component, ElementRef, Compiler } from '@angular/core';
import { ViewController, NavController, App, ModalController } from 'ionic-angular';
import { LoginPage } from './login';
import { LoginService } from './login.service';
import { MyAccountPage } from './myaccountF/myaccount';
import { MyAboutPage } from './myaboutF/myabout';
import { MyCoursePage } from './mycourseF/mycourse';
import { MySettingPage } from './mysettingF/mysetting';
import { MyInfoPage } from './myinfoF/myinfo';
export var MinePage = (function () {
    function MinePage(loginService, navCtrl, viewCtrl, app, modalCtrl, el, _clearCache) {
        this.loginService = loginService;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.app = app;
        this.modalCtrl = modalCtrl;
        this._clearCache = _clearCache;
        this.el = el.nativeElement;
    }
    // updateLeft() {
    //   var a = this.el.ownerDocument.querySelector('.app-root').innerHTML;
    //   console.log(this.el.ownerDocument.getElementById('xxx') instanceof HTMLSpanElement);
    // }
    MinePage.prototype._enterLogin = function (_num) {
        console.log(this.loginService.isLoggedIn);
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
        console.log("-ngOnInit------" + this.loginService.isLoggedIn);
        this.loginImg = "source/img/logo.png";
    };
    MinePage.prototype.ngDoCheck = function () {
        console.log("--ngDoCheck------" + this.loginService.isLoggedIn);
    };
    MinePage.prototype.ngAfterContentInit = function () {
        // this.updateLeft();
        console.log("---ngAfterContentInit------" + this.loginService.isLoggedIn);
    };
    MinePage.prototype.ngAfterContentChecked = function () {
        console.log("----ngAfterContentChecked------" + this.loginService.isLoggedIn);
        this.loginStatus = this.loginService.isLoggedIn;
        this.loginAccount = this.loginService.str_account;
        this.loginImg = this.loginService.isLoggedIn ? "source/img/5.png" : "source/img/logo.png";
    };
    MinePage.prototype.ngAfterViewInit = function () {
        console.log("------ngAfterViewInit------" + this.loginService.isLoggedIn);
    };
    MinePage.prototype.ngAfterViewChecked = function () {
        console.log("------ngAfterViewInit------" + this.loginService.isLoggedIn);
    };
    MinePage.prototype.ngOnDestroy = function () {
        console.log("-------ngOnDestroy------" + this.loginService.isLoggedIn);
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
        { type: ElementRef, },
        { type: Compiler, },
    ];
    return MinePage;
}());
//# sourceMappingURL=mine.js.map