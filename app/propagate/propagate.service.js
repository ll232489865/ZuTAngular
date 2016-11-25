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
//用来获取数据
var PropagateService = (function () {
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
    PropagateService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PropagateService);
    return PropagateService;
}());
exports.PropagateService = PropagateService;
//# sourceMappingURL=propagate.service.js.map