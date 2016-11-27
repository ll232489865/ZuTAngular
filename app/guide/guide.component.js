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
var GuideComponent = (function () {
    function GuideComponent(router) {
        this.router = router;
    }
    GuideComponent.prototype.ngOnInit = function () {
        slider.init(document.getElementById('slider'), document.getElementById('absText'), document.querySelectorAll('#slider li'), document.querySelector('.m-slider'), document.getElementById('icons'));
    };
    GuideComponent.prototype.goAdv = function () {
        this.router.navigate(['/adv']);
    };
    GuideComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'zut-guide',
            templateUrl: 'guide.component.html',
            styleUrls: ['guide.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], GuideComponent);
    return GuideComponent;
}());
exports.GuideComponent = GuideComponent;
//# sourceMappingURL=guide.component.js.map