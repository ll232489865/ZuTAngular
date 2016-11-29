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
var http_1 = require('@angular/http');
//入口
var zut_component_1 = require('./zut.component');
//引导
var guide_component_1 = require('./guide/guide.component');
//广告
var adv_component_1 = require('./advertisement/adv.component');
//传道
var propagate_first_component_1 = require('./propagate/propagate-first.component');
var propagate_list_component_1 = require('./propagate/propagate-list.component');
var propagate_service_1 = require('./propagate/propagate.service');
var live_detail_component_1 = require('./propagate/live-detail.component');
//头部以及底部
var zut_head_component_1 = require('./component/ts/zut-head.component');
var zut_foot_component_1 = require('./component/ts/zut-foot.component');
/*我的*/
var mine_1 = require('./mine/mine');
var login_service_1 = require('./mine/login.service');
var login_1 = require('./mine/login');
var myaccount_1 = require('./mine/myaccountF/myaccount');
var mycourse_1 = require('./mine/mycourseF/mycourse');
var mysetting_1 = require('./mine/mysettingF/mysetting');
var myabout_1 = require('./mine/myaboutF/myabout');
var myinfo_1 = require('./mine/myinfoF/myinfo');
var discovery_1 = require('./discovery/discovery');
var bestList_1 = require('./discovery/bestList');
var discoveryDeatil_1 = require('./discovery/discoveryDeatil');
var ZutModule = (function () {
    function ZutModule() {
    }
    ZutModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule,
                router_1.RouterModule.forRoot([
                    {
                        path: '',
                        component: guide_component_1.GuideComponent
                    },
                    {
                        path: 'mine',
                        component: mine_1.Mine //登录
                    },
                    {
                        path: 'adv',
                        component: adv_component_1.AdvComponent //登录
                    },
                    {
                        path: 'propagate-list',
                        component: propagate_list_component_1.PropagateListComponent //传道列表
                    },
                    {
                        path: 'live/:id',
                        component: live_detail_component_1.LiveDetailComponent //传道的直播页面
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
                    },
                    {
                        path: 'adv',
                        component: adv_component_1.AdvComponent
                    },
                    {
                        path: 'propagate-first',
                        component: propagate_first_component_1.PropagateFirstComponent
                    },
                    {
                        path: 'discovery',
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
                login_service_1.LoginService,
                propagate_service_1.PropagateService
            ],
            declarations: [zut_component_1.ZutComponent, discovery_1.Discovery, bestList_1.BestList, discoveryDeatil_1.Details, guide_component_1.GuideComponent, zut_head_component_1.ZutHeadComponent, zut_foot_component_1.ZutFootComponent, adv_component_1.AdvComponent, propagate_first_component_1.PropagateFirstComponent, propagate_list_component_1.PropagateListComponent, live_detail_component_1.LiveDetailComponent, mine_1.Mine, login_1.LoginPage, myaccount_1.MyAccountPage, myabout_1.MyAboutPage, mycourse_1.MyCoursePage, myinfo_1.MyInfoPage, mysetting_1.MySettingPage],
            bootstrap: [zut_component_1.ZutComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], ZutModule);
    return ZutModule;
}());
exports.ZutModule = ZutModule;
//# sourceMappingURL=zut.module.js.map