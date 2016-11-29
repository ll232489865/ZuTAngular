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
var AdvComponent = (function () {
    function AdvComponent(router) {
        this.router = router;
        this.time = null;
        this.dom = null;
        this.cont = 3;
    }
    AdvComponent.prototype.adv = function () {
        this.dom.innerHTML = "跳过" + this.cont + 's';
        this.cont--;
        if (this.cont < 0) {
            clearInterval(this.time);
            this.router.navigate(['/discovery']);
        }
    };
    AdvComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dom = document.getElementById('advtisemente_btn');
        this.time = setInterval(function () {
            _this.adv();
        }, 1000);
    };
    AdvComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'zut-adv',
            templateUrl: 'adv.component.html',
            styleUrls: ['adv.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AdvComponent);
    return AdvComponent;
}());
exports.AdvComponent = AdvComponent;
//# sourceMappingURL=adv.component.js.map