import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { LiveService } from './live.service';
import { LiveDetail } from './live-detail';
import { LoginService } from '../mine/login.service';
import { GroupChat } from './group-chat/group-chat';
import { Camera } from 'ionic-native';
// declare var echarts
// import echarts from 'echarts';
// let aaa = require('../../../node_modules/echarts/echarts');
// import  echarts  from 'echarts';
//测试promise
// import 'rxjs/add/operator/toPromise';
// import {PropagateService} from '../home/propagate.service';
// import {PropagateInfo} from '../home/propagate-info';
export var ContactPage = (function () {
    function ContactPage(navCtrl, liveService, params, app, loginService) {
        this.navCtrl = navCtrl;
        this.liveService = liveService;
        this.params = params;
        this.app = app;
        this.loginService = loginService;
        this.propagateList = [];
        console.log('-----console----' + this.loginCheck);
    }
    ContactPage.prototype.goCHatUi = function (item) {
        // this.app.getRootNav().push(GroupChat);
        this.app.getRootNav().push(GroupChat);
    };
    ContactPage.prototype.ngOnInit = function () {
        this.getLiveList();
    };
    ContactPage.prototype.textCamera = function () {
        var options = {
            quality: 80,
            sourceType: Camera.PictureSourceType.CAMERA,
            allowEdit: false,
            encodingType: Camera.EncodingType.JPEG,
            saveToPhotoAlbum: false,
            targetWidth: 250,
            targetHeight: 250
        };
        Camera.getPicture(options).then(function (imageData) {
            document.getElementById('textCamera').setAttribute('src', imageData);
        }, function (err) {
            alert(err);
        });
    };
    ContactPage.prototype.getLiveList = function () {
        var _this = this;
        // this.liveService.getPropagates().then(liveInfo => {this.liveInfo = liveInfo});
        this.liveService.getListInfo(function (result) { _this.liveInfo = result; });
    };
    ContactPage.prototype.ngDoCheck = function () {
        // console.log("---1---ngDoCheck------");
    };
    ContactPage.prototype.ngAfterViewChecked = function () {
        // console.log("---2---ngAfterViewChecked------"+this.loginCheck);
    };
    ContactPage.prototype.ngAfterContentChecked = function () {
        this.loginStatus = this.loginService.isLoggedIn;
    };
    ContactPage.prototype.onLoginClick = function () {
        // console.log("--4--onLoginClick----");
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