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
var login_service_1 = require('./login.service');
var common_1 = require('@angular/common');
var LoginPage = (function () {
    function LoginPage(loginService, router, location) {
        this.loginService = loginService;
        this.router = router;
        this.location = location;
        // this.ac="首页";
    }
    LoginPage.prototype.ngOnInit = function () {
        this.router.params.forEach(function (params) {
        });
    };
    LoginPage.prototype._login = function (account, password) {
        this.loginService
            .login(account, password);
        if (this.loginService.isLoggedIn) {
            this.location.back();
        }
    };
    LoginPage = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-component',
            templateUrl: 'login.html'
        }), 
        __metadata('design:paramtypes', [login_service_1.LoginService, router_1.ActivatedRoute, common_1.Location])
    ], LoginPage);
    return LoginPage;
}());
exports.LoginPage = LoginPage;
//# sourceMappingURL=login.js.map