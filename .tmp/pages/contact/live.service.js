import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
// let params=new URLSearchParams();
// params.set("token","1590afcc98c1464ea1f71b9bd13d848f");
var headers = new Headers();
headers.set("token", "1590afcc98c1464ea1f71b9bd13d848f");
export var LiveService = (function () {
    function LiveService(http) {
        this.http = http;
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
    ];
    return LiveService;
}());
//# sourceMappingURL=live.service.js.map