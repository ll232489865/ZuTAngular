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
var ZutHeadComponent = (function () {
    function ZutHeadComponent() {
    }
    ZutHeadComponent.prototype.ngOnInit = function () {
    };
    ZutHeadComponent = __decorate([
        core_1.Component({
            selector: 'zut-head',
            template: "\n      <header class=\"mui-bar mui-bar-nav\">\n        <h1 class=\"mui-title\" id=\"title\">\u8BBA\u9053</h1>\n    </header>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], ZutHeadComponent);
    return ZutHeadComponent;
}());
exports.ZutHeadComponent = ZutHeadComponent;
//# sourceMappingURL=zut-head.component.js.map