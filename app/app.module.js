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
var myaccount_1 = require('./mine/myaccountF/myaccount');
var mycourse_1 = require('./mine/mycourseF/mycourse');
var mysetting_1 = require('./mine/mysettingF/mysetting');
var myabout_1 = require('./mine/myaboutF/myabout');
var myinfo_1 = require('./mine/myinfoF/myinfo');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot([
                    {
                        path: '',
                        component: mine_1.Mine
                    },
                    {
                        path: 'loginpage',
                        component: login_1.LoginPage
                    },
                    {
                        path: 'myaccountpage',
                        component: myaccount_1.MyAccountPage
                    },
                    {
                        path: 'mycoursepage',
                        component: mycourse_1.MyCoursePage
                    },
                    {
                        path: 'mysettingpage',
                        component: mysetting_1.MySettingPage
                    },
                    {
                        path: 'myaboutpage',
                        component: myabout_1.MyAboutPage
                    },
                    {
                        path: 'myinfopage',
                        component: myinfo_1.MyInfoPage
                    }
                ])
            ],
            providers: [
                login_service_1.LoginService
            ],
            declarations: [app_component_1.AppComponent, mine_1.Mine, login_1.LoginPage, myaccount_1.MyAccountPage, mycourse_1.MyCoursePage, mysetting_1.MySettingPage, myabout_1.MyAboutPage, myinfo_1.MyInfoPage],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map