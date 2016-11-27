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
var zut_component_1 = require('./zut.component');
var guide_component_1 = require('./guide/guide.component');
var adv_component_1 = require('./advertisement/adv.component');
var propagate_first_component_1 = require('./propagate/propagate-first.component');
<<<<<<< HEAD
var mine_1 = require('./mine/mine'); //我的
var login_service_1 = require('./mine/login.service');
var login_1 = require('./mine/login');
var zut_head_component_1 = require('./component/ts/zut-head.component');
var zut_foot_component_1 = require('./component/ts/zut-foot.component');
var propagate_list_component_1 = require('./propagate/propagate-list.component');
var propagate_service_1 = require('./propagate/propagate.service');
var live_detail_component_1 = require('./propagate/live-detail.component');
=======
var propagate_list_component_1 = require('./propagate/propagate-list.component');
var propagate_service_1 = require('./propagate/propagate.service');
var live_detail_component_1 = require('./propagate/live-detail.component');
var mine_1 = require('./mine/mine'); //我的
var login_service_1 = require('./mine/login.service');
var login_1 = require('./mine/login');
var myaccount_1 = require('./mine/myaccountF/myaccount');
var mycourse_1 = require('./mine/mycourseF/mycourse');
var mysetting_1 = require('./mine/mysettingF/mysetting');
var myabout_1 = require('./mine/myaboutF/myabout');
var myinfo_1 = require('./mine/myinfoF/myinfo');
>>>>>>> b6787e037be985382f464f9f8e5c7fb567b683cf
var ZutModule = (function () {
    function ZutModule() {
    }
    ZutModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule,
                router_1.RouterModule.forRoot([
                    // {
                    //     path: '',
                    //     component: GuideComponent
                    // },
                    // {
                    //     path:'',
                    //     component: PropagateListComponent
                    // },{
                    //     path:'live/:id',
                    //     component:LiveDetailComponent
                    // }
                    {
                        path: '',
                        component: mine_1.Mine
                    },
                    {
<<<<<<< HEAD
                        path: '',
                        component: propagate_list_component_1.PropagateListComponent
                    }, {
                        path: 'live/:id',
                        component: live_detail_component_1.LiveDetailComponent
                    },
                    {
=======
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
>>>>>>> b6787e037be985382f464f9f8e5c7fb567b683cf
                        path: 'adv',
                        component: adv_component_1.AdvComponent
                    },
                    {
                        path: 'propagate-first',
                        component: propagate_first_component_1.PropagateFirstComponent
                    }
                ])
            ],
            providers: [
                login_service_1.LoginService,
                propagate_service_1.PropagateService
            ],
<<<<<<< HEAD
            declarations: [zut_component_1.ZutComponent, mine_1.Mine, login_1.LoginPage, guide_component_1.GuideComponent, adv_component_1.AdvComponent, propagate_first_component_1.PropagateFirstComponent, zut_head_component_1.ZutHeadComponent, zut_foot_component_1.ZutFootComponent],
=======
            declarations: [zut_component_1.ZutComponent, guide_component_1.GuideComponent, propagate_list_component_1.PropagateListComponent, live_detail_component_1.LiveDetailComponent, mine_1.Mine, login_1.LoginPage, myaccount_1.MyAccountPage, myabout_1.MyAboutPage, mycourse_1.MyCoursePage, myinfo_1.MyInfoPage, mysetting_1.MySettingPage],
>>>>>>> b6787e037be985382f464f9f8e5c7fb567b683cf
            bootstrap: [zut_component_1.ZutComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], ZutModule);
    return ZutModule;
}());
exports.ZutModule = ZutModule;
//# sourceMappingURL=zut.module.js.map