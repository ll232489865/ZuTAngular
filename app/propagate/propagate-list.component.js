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
var propagate_service_1 = require('./propagate.service');
var PropagateListComponent = (function () {
    function PropagateListComponent(propagateService, router) {
        this.propagateService = propagateService;
        this.router = router;
    }
    //获取数据
    PropagateListComponent.prototype.ngOnInit = function () {
        this.getPropagateList();
    };
    PropagateListComponent.prototype.getPropagateList = function () {
        var _this = this;
        this.propagateService
            .getPropagates()
            .then(function (propagateList) { return _this.propagateList = propagateList; });
    };
    PropagateListComponent.prototype.onPropagateDetail = function (propagate) {
        console.log("----onPropagateDetail------" + propagate.id);
        this.router.navigate(['/live', propagate.id]);
    };
    PropagateListComponent.prototype.onShareClick = function () {
        console.log("----onShareClick------" + this.propagateList);
    };
    PropagateListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'propagate-list',
            templateUrl: "propagate.list.component.html",
            styleUrls: ["propagate-list.component.css"]
        }), 
        __metadata('design:paramtypes', [propagate_service_1.PropagateService, router_1.Router])
    ], PropagateListComponent);
    return PropagateListComponent;
}());
exports.PropagateListComponent = PropagateListComponent;
//# sourceMappingURL=propagate-list.component.js.map