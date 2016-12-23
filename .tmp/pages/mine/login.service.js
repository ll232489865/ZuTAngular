import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/toPromise';
export var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
        this.Url_handshake = 'http://192.168.1.10:9090/zuting_api/handshake';
        this.Url_login = 'http://192.168.1.10:9090/zuting_api/login';
        this.isLoggedIn = false;
        this.str_account = "account";
    }
    LoginService.prototype.login = function (account, password) {
        var _this = this;
        this.handshakeRequest()
            .then(function (model) { return _this.model_handshake = model; });
        console.log(JSON.stringify(this.model_handshake));
        this.http.post(this.Url_login, {})
            .toPromise()
            .then()
            .catch(this.handleError);
        //  var hash = md5_obj.hex_md5("123dafd");
        // console.log(hash);
        // console.log('Device UUID is: ' + Device.device.uuid);
        if (account == password) {
            this.isLoggedIn = true;
        }
        else {
            this.isLoggedIn = false;
        }
    };
    LoginService.prototype.handshakeRequest = function () {
        var params = new URLSearchParams();
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
    LoginService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    LoginService.ctorParameters = [
        { type: Http, },
    ];
    return LoginService;
}());
//# sourceMappingURL=login.service.js.map