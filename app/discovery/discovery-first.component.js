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
var DiscoveryFirstComponent = (function () {
    function DiscoveryFirstComponent() {
    }
    DiscoveryFirstComponent = __decorate([
        core_1.Component({
            selector: 'discovery-list',
            template: "\n        <zut-head></zut-head>\n          <div class=\"mui-content\">\n              <h3>\n                 discovery first\n              </h3>\n          </div>\n          <zut-foot></zut-foot>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], DiscoveryFirstComponent);
    return DiscoveryFirstComponent;
}());
exports.DiscoveryFirstComponent = DiscoveryFirstComponent;
//# sourceMappingURL=discovery-first.component.js.map