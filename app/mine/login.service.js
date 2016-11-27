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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/observable/of');
require('rxjs/add/operator/do');
require('rxjs/add/operator/delay');
var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
        this.isLoggedIn = false;
        this.str_account = "account";
        this.propagateUrl = 'http://192.168.1.10:9090/zuting_api/live/public/list';
    }
    LoginService.prototype.login = function (account, password) {
        var _this = this;
        if (account == password) {
            // code...
            return Observable_1.Observable.of(true).delay(1000).do(function (val) {
                _this.isLoggedIn = true;
                _this._imgUrl = "./app/source/img/5.png";
            });
        }
        else {
            return Observable_1.Observable.of(true).delay(1000).do(function (val) { return _this.isLoggedIn = false; });
        }
    };
    LoginService.prototype.logout = function () {
        this.isLoggedIn = false;
    };
    LoginService.prototype._login = function () {
        return this.http.get(this.propagateUrl)
            .toPromise()
            .then(function (response) { return response.json().result; })
            .catch(this.handleError);
    };
    LoginService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    LoginService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=login.service.js.map