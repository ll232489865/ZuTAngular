"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var login_service_1 = require('../login.service');
var MySettingPage = (function () {
    function MySettingPage(router, location, loginService) {
        this.router = router;
        this.location = location;
        this.loginService = loginService;
        // this.ac="首页";
    }
    // ac:any;
    MySettingPage.prototype._quitApp = function () {
        this.loginService.logout();
        this.location.back();
    };
    MySettingPage = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-component',
            templateUrl: 'mysetting.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, common_1.Location, login_service_1.LoginService])
    ], MySettingPage);
    return MySettingPage;
}());
exports.MySettingPage = MySettingPage;
//# sourceMappingURL=mysetting.js.map