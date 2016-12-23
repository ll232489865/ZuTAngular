import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { LiveService } from './live.service';
import { LiveDetail } from './live-detail';
import { LoginService } from '../mine/login.service';
export var ContactPage = (function () {
    function ContactPage(navCtrl, liveService, params, app, loginService) {
        this.navCtrl = navCtrl;
        this.liveService = liveService;
        this.params = params;
        this.app = app;
        this.loginService = loginService;
        // this.item = params.data.item;
        // this.loginCheck = 'hello';
        console.log('-----console----' + this.loginCheck);
    }
    ContactPage.prototype.ngOnInit = function () {
        // console.log("------OnInit------");
        this.getLiveList();
    };
    ContactPage.prototype.getLiveList = function () {
        var _this = this;
        this.liveService
            .getPropagates()
            .then(function (liveInfo) {
            _this.liveInfo = liveInfo;
        });
    };
    ContactPage.prototype.ngDoCheck = function () {
        console.log("---1---ngDoCheck------");
    };
    ContactPage.prototype.ngAfterViewChecked = function () {
        console.log("---2---ngAfterViewChecked------" + this.loginCheck);
    };
    ContactPage.prototype.ngAfterContentChecked = function () {
        console.log("----3--ngAfterContentChecked------");
        this.loginStatus = this.loginService.isLoggedIn;
    };
    ContactPage.prototype.onLoginClick = function () {
        alert("--4--onLoginClick----");
    };
    ContactPage.prototype.openNavDetailsPage = function (item) {
        this.app.getRootNav().push(LiveDetail, { item: item });
    };
    ContactPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-contact',
                    templateUrl: 'contact.html'
                },] },
    ];
    /** @nocollapse */
    ContactPage.ctorParameters = [
        { type: NavController, },
        { type: LiveService, },
        { type: NavParams, },
        { type: App, },
        { type: LoginService, },
    ];
    return ContactPage;
}());
//# sourceMappingURL=contact.js.map