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
var ZutFootComponent = (function () {
    function ZutFootComponent() {
    }
    ZutFootComponent.prototype.ngOnInit = function () {
    };
    ZutFootComponent = __decorate([
        core_1.Component({
            selector: 'zut-foot',
            template: "\n      <nav class=\"foot mui-bar mui-bar-tab\">\n        <a id=\"defaultTab\" class=\"mui-tab-item mui-active\" href=\"discovery/discovery_default.html\" style=\"text-decoration:none;\">\n            <span title=\"\u8BBA\u9053\"><img class=\"tap-image\" src=\"../app/source/img/4.png\">\n            <div id=\"dynamic-msg1\" class=\"tap-text\" style=\"margin-top: -4px\">\u8BBA\u9053</div></span>\n        </a>\n        <a class=\"mui-tab-item\" href=\"propagate/propagate_list.html\" style=\"text-decoration:none;\">\n            <span title=\"\u4F20\u9053\"><img class=\"tap-image\" src=\"../app/source/img/3.png\">\n            <div id=\"dynamic-msg2\" class=\"tap-text\" style=\"margin-top: -6px\">\u4F20\u9053</div></span>\n        </a>\n        <a id=\"society\" class=\"mui-tab-item\" href=\"society/society_list.html\" style=\"text-decoration:none;\">\n            <span title=\"\u5B66\u82D1\"><img class=\"tap-image\" src=\"../app/source/img/2.png\">\n                <div id=\"dynamic-msg3\" class=\"tap-text\" style=\"margin-top: -3px\">\u5B66\u82D1</div></span>\n        </a>\n        <a class=\"mui-tab-item\" href=\"wode/wode.html\" style=\"text-decoration:none;\">\n            <span title=\"\u6211\u7684\"><img class=\"tap-image\" src=\"../app/source/img/1.png\">\n            <div id=\"dynamic-msg4\" class=\"tap-text\">\u6211\u7684</div></span>\n        </a>\n    </nav>\n  ",
            styles: ["\n      .tap-image{\n            margin-bottom: -1.8rem;\n            margin-top: -24px;\n            -webkit-transform: scale(0.33,0.33);\n        }\n        \n        .tap-text{\n            color: #999999;\n            margin-top: -5px;\n            font-family: '\u8FF7\u4F60\u7B80\u5317\u9B4F\u6977\u4E66';\n        }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], ZutFootComponent);
    return ZutFootComponent;
}());
exports.ZutFootComponent = ZutFootComponent;
//# sourceMappingURL=zut-foot.component.js.map