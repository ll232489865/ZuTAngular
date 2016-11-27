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
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var app_component_1 = require('./guide/app.component');
var mine_1 = require('./mine/mine'); //我的
var login_service_1 = require('./mine/login.service');
var login_1 = require('./mine/login');
var discovery_1 = require('./discovery/discovery');
var bestList_1 = require('./discovery/bestList');
var discoveryDeatil_1 = require('./discovery/discoveryDeatil');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot([
                    {
                        path: 'mine',
                        component: mine_1.Mine
                    },
                    {
                        path: 'login',
                        component: login_1.LoginPage
                    },
                    {
                        path: '',
                        component: discovery_1.Discovery
                    },
                    {
                        path: 'bestList',
                        component: bestList_1.BestList
                    },
                    {
                        path: 'discoverydetail',
                        component: discoveryDeatil_1.Details
                    }
                ])
            ],
            providers: [
                login_service_1.LoginService
            ],
            declarations: [app_component_1.AppComponent, mine_1.Mine, login_1.LoginPage, discovery_1.Discovery, bestList_1.BestList, discoveryDeatil_1.Details],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map