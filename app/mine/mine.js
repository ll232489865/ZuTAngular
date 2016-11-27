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
var Mine = (function () {
    function Mine(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.loginStatus = this.loginService.isLoggedIn;
        this.loginAccount = this.loginService.str_account;
        this.loginHeadImg = this.loginService._imgUrl;
        this.setMessage();
    }
    Mine.prototype._enterLogin = function (_num) {
        if (this.loginService.isLoggedIn) {
            // code...
            switch (_num) {
                case 1:
                    // code...
                    this.router.navigateByUrl('/myaccountpage');
                    break;
                case 2:
                    this.router.navigateByUrl('/mycoursepage');
                    break;
                case 3:
                    this.router.navigateByUrl('/mysettingpage');
                    break;
                case 4:
                    this.router.navigateByUrl('/myaboutpage');
                    break;
            }
        }
        else {
            // this.router.navigateByUrl('/loginpage')
            this.router.navigate(['/loginpage', { id: 1, name: 222 }]);
        }
    };
    Mine.prototype._enterInfo = function () {
        if (this.loginService.isLoggedIn) {
            this.router.navigateByUrl('/myinfopage');
        }
    };
    Mine.prototype.setMessage = function () {
        this.message = 'Logged ' + (this.loginService.isLoggedIn ? 'in' : 'out');
    };
    Mine.prototype.login = function () {
        var _this = this;
        this.message = 'Trying to log in ...';
        this.loginService.login("a", "b").subscribe(function () {
            _this.setMessage();
            if (_this.loginService.isLoggedIn) {
                // Get the redirect URL from our auth service
                // If no redirect has been set, use the default
                var redirect = _this.loginService.redirectUrl ? _this.loginService.redirectUrl : '/admin';
            }
        });
    };
    Mine.prototype.logout = function () {
        this.loginService.logout();
        this.setMessage();
    };
    Mine = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-component',
            templateUrl: 'mine.html'
        }), 
        __metadata('design:paramtypes', [login_service_1.LoginService, router_1.Router])
    ], Mine);
    return Mine;
}());
exports.Mine = Mine;
//# sourceMappingURL=mine.js.map