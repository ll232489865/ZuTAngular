import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Qiniu } from 'ionic-native';
export var MyinfoServer = (function () {
    function MyinfoServer(http) {
        this.http = http;
        this.Url_qiniu = 'http://192.168.1.10:9090/zuting_api/qiniu/getToken';
        this.Url_update = 'http://192.168.1.10:9090/zuting_api/account/update';
    }
    MyinfoServer.prototype.qiniuImage = function (fileUrl, Callback) {
        this.http.get(this.Url_qiniu)
            .toPromise()
            .then(function (response) {
            // console.log("66666666666666"+JSON.stringify(response.json().resultCode));
            if (response.json().resultCode == 0) {
                var Argus = {
                    token: response.json().result.token,
                    urlPath: fileUrl,
                    picCfg: {
                        maxHeight: 300,
                        maxWidth: 300,
                    }
                };
                Qiniu.uploadImage(Argus).then(function (result) {
                    Callback(result);
                    // "source/img/5.png"
                    // var params = "mobile=" + account + "&password=" + encodeURIComponent(pass) + "&handshakeCode=" + encodeURIComponent(result) + "&appSrc=" + "STUDENT" + "&deviceID=" + val;
                    // let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
                    // let options = new RequestOptions({ headers: headers });
                    // this.http.post(this.Url_update, params, options)
                    //   .toPromise()
                    //   .then(res => {
                    //     if (res.json().resultCode == 0) {
                    //       // this.isLoggedIn = true;
                    //       // callBack(res.json().result as model_loginResult);
                    //     } else {
                    //       console.log(res.json().resultCode);
                    //     }
                    //   })
                    //   .catch(this.handleError);
                });
            }
        })
            .catch(this.handleError);
    };
    MyinfoServer.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    MyinfoServer.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    MyinfoServer.ctorParameters = [
        { type: Http, },
    ];
    return MyinfoServer;
}());
//# sourceMappingURL=myinfoF.server.js.map