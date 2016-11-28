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
//我的
var mine_1 = require('./mine/mine');
var login_service_1 = require('./mine/login.service');
var login_1 = require('./mine/login');
//头部以及底部
var zut_head_component_1 = require('./component/ts/zut-head.component');
var zut_foot_component_1 = require('./component/ts/zut-foot.component');
//论道
var discovery_first_component_1 = require('./discovery/discovery-first.component');
//学社列表
var socilety_list_component_1 = require('./society/socilety-list.component');
var ZutModule = (function () {
    function ZutModule() {
    }
    ZutModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule,
                router_1.RouterModule.forRoot([
                    {
                        path: '',
                        component: guide_component_1.GuideComponent // 引导
                    },
                    {
                        path: 'login',
                        component: login_1.LoginPage //登录
                    },
                    {
                        path: 'mine',
                        component: mine_1.Mine //登录
                    },
                    {
                        path: '',
                        component: propagate_list_component_1.PropagateListComponent //传道列表
                    }, {
                        path: 'live/:id',
                        component: live_detail_component_1.LiveDetailComponent //传道的直播页面
                    },
                    {
                        path: 'adv',
                        component: adv_component_1.AdvComponent //广告
                    },
                    {
                        path: 'propagate-first',
                        component: propagate_first_component_1.PropagateFirstComponent //传道首页
                    },
                    {
                        path: 'society',
                        component: socilety_list_component_1.SociletyListComponent //学社列表首页
                    },
                    {
                        path: 'discovery-first',
                        component: discovery_first_component_1.DiscoveryFirstComponent //论道首页
                    }
                ])
            ],
            providers: [
                login_service_1.LoginService,
                propagate_service_1.PropagateService
            ],
            declarations: [zut_component_1.ZutComponent, mine_1.Mine, login_1.LoginPage, guide_component_1.GuideComponent, adv_component_1.AdvComponent, propagate_first_component_1.PropagateFirstComponent, zut_head_component_1.ZutHeadComponent, zut_foot_component_1.ZutFootComponent, propagate_list_component_1.PropagateListComponent, live_detail_component_1.LiveDetailComponent, socilety_list_component_1.SociletyListComponent, discovery_first_component_1.DiscoveryFirstComponent],
            bootstrap: [zut_component_1.ZutComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], ZutModule);
    return ZutModule;
}());
exports.ZutModule = ZutModule;
//# sourceMappingURL=zut.module.js.map