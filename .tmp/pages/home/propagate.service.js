import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
export var PropagateService = (function () {
    function PropagateService(http) {
        this.http = http;
        this.propagateUrl = 'http://192.168.1.10:9090/zuting_api/live/public/list';
    }
    PropagateService.prototype.getPropagates = function () {
        return this.http.get(this.propagateUrl)
            .toPromise()
            .then(function (response) { return response.json().result; })
            .catch(this.handleError);
    };
    PropagateService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    PropagateService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    PropagateService.ctorParameters = [
        { type: Http, },
    ];
    return PropagateService;
}());
//# sourceMappingURL=propagate.service.js.map