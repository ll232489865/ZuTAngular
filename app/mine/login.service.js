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
require('rxjs/add/observable/of');
require('rxjs/add/operator/do');
require('rxjs/add/operator/delay');
require('rxjs/add/operator/toPromise');
var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
        this.Url_handshake = 'http://192.168.1.10:9090/zuting_api/handshake';
        this.Url_login = 'http://192.168.1.10:9090/zuting_api/login';
        this.isLoggedIn = false;
        this.str_account = "account";
    }
    // login(account,password): Promise<PropagateInfo []> {
    LoginService.prototype.login = function (account, password) {
        var _this = this;
        this.handshakeRequest()
            .then(function (model) { return _this.model_handshake = model; });
        console.log(JSON.stringify(this.model_handshake));
        this.http.post(this.Url_login, {})
            .toPromise()
            .then()
            .catch(this.handleError);
        if (account == password) {
            this.isLoggedIn = true;
        }
        else {
            this.isLoggedIn = false;
        }
    };
    LoginService.prototype.handshakeRequest = function () {
        var params = new http_1.URLSearchParams();
        params.set("greeting", "1");
        return this.http.get(this.Url_handshake, { search: params })
            .toPromise()
            .then(function (response) {
            // {
            // console.log(JSON.stringify(response.json()));
            return response.json().result;
        })
            .catch(this.handleError);
    };
    LoginService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    LoginService.prototype.logout = function () {
        this.isLoggedIn = false;
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