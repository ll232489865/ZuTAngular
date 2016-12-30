import { Injectable } from '@angular/core';
import { Http, URLSearchParams, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/toPromise';
import { Storage } from '@ionic/storage';
import { Istudy } from 'ionic-native';
export var LoginService = (function () {
    function LoginService(http, storage) {
        this.http = http;
        this.storage = storage;
        this.Url_handshake = 'http://192.168.1.10:9090/zuting_api/handshake';
        this.Url_login = 'http://192.168.1.10:9090/zuting_api/login';
        this.Url_accountInfo = 'http://192.168.1.10:9090/zuting_api/account/info';
        //	accountInfo:{url:env.apiURL + '/account/info',type:"get",path:'/account/info'},
        this.isLoggedIn = false;
    }
    //登录
    LoginService.prototype.login = function (account, passwordv, callBack) {
        var _this = this;
        var str_random = Math.random().toString();
        this.handshakeRequest(str_random)
            .then(function (model) {
            _this.model_handshake = model;
            //greeting:'clientGreeting+&+serverGreeting
            var verifyParams = { serverGreeting: str_random + "&" + _this.model_handshake.serverGreeting, serverSign: _this.model_handshake.serverSign };
            Istudy.verify(verifyParams).then(function (succ) {
                if (succ) {
                    var str_handshakeCodeRandom = Math.random().toString();
                    var str_handshakeparams = _this.model_handshake.serverGreeting + "&" + str_handshakeCodeRandom;
                    Istudy.encrypt(str_handshakeparams)
                        .then(function (result) {
                        _this.storage.get("DEVICE_ID")
                            .then(function (val) {
                            Istudy.generateMd5(passwordv)
                                .then(function (passwordMd5) {
                                var passwordCode = passwordMd5 + "&" + _this.model_handshake.serverGreeting;
                                Istudy.encrypt(passwordCode)
                                    .then(function (pass) {
                                    var params = "mobile=" + account + "&password=" + encodeURIComponent(pass) + "&handshakeCode=" + encodeURIComponent(result) + "&appSrc=" + "STUDENT" + "&deviceID=" + val;
                                    var headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
                                    var options = new RequestOptions({ headers: headers });
                                    _this.http.post(_this.Url_login, params, options)
                                        .toPromise()
                                        .then(function (res) {
                                        if (res.json().resultCode == 0) {
                                            _this.isLoggedIn = true;
                                            callBack(res.json().result);
                                        }
                                        else {
                                            console.log(res.json().resultCode);
                                        }
                                    })
                                        .catch(_this.handleError);
                                });
                            });
                        });
                    });
                }
            });
        });
    };
    //获取 handshake
    LoginService.prototype.handshakeRequest = function (str_random) {
        var params = new URLSearchParams();
        params.set("greeting", str_random);
        return this.http.get(this.Url_handshake, { search: params })
            .toPromise()
            .then(function (response) {
            // {
            //console.log(JSON.stringify(response.json()));
            return (response.json().result);
        })
            .catch(this.handleError);
    };
    //获取 用户信息
    LoginService.prototype.getAccountInfo = function (callBack) {
        var _this = this;
        this.getSession().then(function (session) {
            console.log("session" + JSON.stringify(session));
            if (session) {
                Istudy.getHeader({ session: session, path: "/account/info", headers: {}, params: {} })
                    .then(function (head) {
                    var headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
                    var options = new RequestOptions({ headers: head });
                    _this.http.get(_this.Url_accountInfo, options)
                        .toPromise()
                        .then(function (result) {
                        callBack(result.json().result);
                    })
                        .catch(_this.handleError);
                });
            }
        });
    };
    //获取 session 登录后的信息  请求头
    LoginService.prototype.getSession = function () {
        return this.storage.get("SESSION")
            .then(function (result) {
            return result;
        });
    };
    //登出
    LoginService.prototype.logout = function () {
        this.isLoggedIn = false;
        this.storage.remove("SESSION");
    };
    LoginService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    LoginService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    LoginService.ctorParameters = [
        { type: Http, },
        { type: Storage, },
    ];
    return LoginService;
}());
//# sourceMappingURL=login.service.js.map