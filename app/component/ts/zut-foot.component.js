// import { Component , OnInit} from '@angular/core';
// import {Router} from '@angular/router';
// import { Tabs } from './tabs';
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
// const TABSLIST: Tabs[] = [
//   {
//       iconSrc: '../app/source/img/4.png', 
//       iconSrcOn: '../app/source/img/4.png',
//       lineHref: 'discovery-first',
//       text:'论道'
//   },
//   {
//       iconSrc: '../app/source/img/3.png', 
//       iconSrcOn: '../app/source/img/3.png',
//       lineHref: 'propagate-first',
//       text:'传道'
//   }
//   ,
//   {
//       iconSrc: '../app/source/img/2.png', 
//       iconSrcOn: '../app/source/img/2.png',
//       lineHref: 'society',
//       text:'学苑'
//   }
//   ,
//   {
//       iconSrc: '../app/source/img/1.png',
//       iconSrcOn: '../app/source/img/1.png', 
//       lineHref: 'mine',
//       text:'我的'
//   }
// ];
// @Component({
//   selector: 'zut-foot',
//   templateUrl: '../app/component/html/zut-foot.html',
//   styles:[`
//       .tap-image{
//             margin-bottom: -1.8rem;
//             margin-top: -24px;
//             -webkit-transform: scale(0.33,0.33);
//         }
//         .tap-text{
//             color: #999999;
//             margin-top: -5px;
//             font-family: '迷你简北魏楷书';
//         }
//         .selected .tap-text{ 
//             color:#FEBF38
//         }
//   `]
// })
// export class ZutFootComponent {   
//     constructor(
//     private router: Router
//    ){ }
//     tabLists= TABSLIST;
//     onImage =  [ '../app/source/img/8.png','../app/source/img/7.png','../app/source/img/6.png','../app/source/img/5.png']
//     selectedTabs: Tabs;
//     onSelect(tab: Tabs,index:any): void {
//         for(var i=0 ; i<this.tabLists.length; i ++){
//             this.tabLists[i].iconSrc = this.tabLists[i].iconSrcOn;
//         }
//       this.tabLists[index].iconSrc =  this.onImage[index];
//       this.selectedTabs = tab;
//       this.router.navigate([this.tabLists[index].lineHref]);
//     }
//     ngOnInit(){
//         this.tabLists[0].iconSrc =  this.onImage[0];
//     }
// }
//  
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var tabs_service_1 = require('./tabs.service');
var ZutFootComponent = (function () {
    function ZutFootComponent(router, tabsService) {
        this.router = router;
        this.tabsService = tabsService;
        this.onImage = ['../app/source/img/8.png', '../app/source/img/7.png', '../app/source/img/6.png', '../app/source/img/5.png'];
    }
    ZutFootComponent.prototype.getTabs = function () {
        var _this = this;
        this.tabsService.getTabs().then(function (tabLists) { return _this.tabLists = tabLists; });
        this.selectCont = this.tabsService.tabOnCont;
    };
    ZutFootComponent.prototype.ngOnInit = function () {
        this.getTabs();
    };
    ZutFootComponent.prototype.onSelect = function (tab, index) {
        for (var i = 0; i < this.tabLists.length; i++) {
            this.tabLists[i].iconSrc = this.tabLists[i].iconSrcOn;
        }
        this.selectedtabs = tab;
        this.tabLists[index].iconSrc = this.onImage[index];
        this.router.navigate([this.tabLists[index].lineHref]);
        this.selectCont = this.tabsService.tabOnCont = index;
    };
    ZutFootComponent = __decorate([
        core_1.Component({
            selector: 'zut-foot',
            templateUrl: '../app/component/html/zut-foot.html',
            styles: ["\n      .tap-image{\n            margin-bottom: -1.8rem;\n            margin-top: -24px;\n            -webkit-transform: scale(0.33,0.33);\n        }\n        .tap-text{\n            color: #999999;\n            margin-top: -5px;\n            font-family: '\u8FF7\u4F60\u7B80\u5317\u9B4F\u6977\u4E66';\n        }\n        .selected .tap-text{ \n            color:#FEBF38\n        }\n  "],
            providers: [tabs_service_1.TabsService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, tabs_service_1.TabsService])
    ], ZutFootComponent);
    return ZutFootComponent;
}());
exports.ZutFootComponent = ZutFootComponent;
//# sourceMappingURL=zut-foot.component.js.map