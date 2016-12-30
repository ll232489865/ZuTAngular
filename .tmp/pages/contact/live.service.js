import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/toPromise';
import { Istudy } from 'ionic-native';
// let params=new URLSearchParams();
// params.set("token","1590afcc98c1464ea1f71b9bd13d848f");
var headers = new Headers();
headers.set("token", "1590afcc98c1464ea1f71b9bd13d848f");
export var LiveService = (function () {
    function LiveService(http, storage) {
        this.http = http;
        this.storage = storage;
        this.propagateUrl = 'http://192.168.1.10:9090/zuting_api/studygroup/list';
    }
    LiveService.prototype.getPropagates = function () {
        return this.http.get(this.propagateUrl, { headers: headers })
            .toPromise()
            .then(function (response) { return response.json().result; })
            .catch(this.handleError);
    };
    LiveService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    LiveService.prototype.getListInfo = function (callBack) {
        var _this = this;
        this.getSession().then(function (session) {
            console.log("session" + JSON.stringify(session));
            if (session) {
                Istudy.getHeader({ session: session, path: "/studygroup/list", headers: {}, params: {} })
                    .then(function (head) {
                    var headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
                    var options = new RequestOptions({ headers: head });
                    _this.http.get(_this.propagateUrl, options)
                        .toPromise()
                        .then(function (result) {
                        callBack(result.json().result);
                    })
                        .catch(_this.handleError);
                });
            }
        });
    };
    LiveService.prototype.getSession = function () {
        return this.storage.get("SESSION")
            .then(function (result) {
            if (result) {
                return result;
            }
        });
    };
    LiveService.prototype.checkLogin = function () {
        if (this.loginCheck) {
            this.loginCheck = '';
        }
        else {
            this.loginCheck = 'hello';
        }
    };
    LiveService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    LiveService.ctorParameters = [
        { type: Http, },
        { type: Storage, },
    ];
    return LiveService;
}());
//# sourceMappingURL=live.service.js.map