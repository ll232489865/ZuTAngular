import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';
import {HttpModule} from '@angular/http';

//入口
import { ZutComponent }   from './zut.component';
//引导
import { GuideComponent }   from './guide/guide.component';
//广告
import { AdvComponent }   from './advertisement/adv.component';
//传道
import { PropagateFirstComponent }   from './propagate/propagate-first.component';

import {PropagateListComponent} from './propagate/propagate-list.component';
import {PropagateService} from './propagate/propagate.service';
import {LiveDetailComponent} from './propagate/live-detail.component';

//头部以及底部
import { ZutHeadComponent }   from './component/ts/zut-head.component';
import { ZutFootComponent }   from './component/ts/zut-foot.component';

//论道
import {DiscoveryFirstComponent} from './discovery/discovery-first.component';
//学社列表
import {SociletyListComponent} from './society/socilety-list.component';


/*我的*/
import {Mine} from './mine/mine';
import { LoginService }      from './mine/login.service';

import {LoginPage} from './mine/login'
import {MyAccountPage} from './mine/myaccountF/myaccount'
import {MyCoursePage} from './mine/mycourseF/mycourse'
import {MySettingPage} from './mine/mysettingF/mysetting'
import {MyAboutPage} from './mine/myaboutF/myabout'
import {MyInfoPage} from './mine/myinfoF/myinfo'



@NgModule({
  imports:      [ BrowserModule, HttpModule,
    RouterModule.forRoot([

        {
            path: '',
            component: GuideComponent   // 引导
        },
        {
            path: 'discovery-first',
            component: DiscoveryFirstComponent   // 论道
        },
         {
            path: 'socilety-list',
            component: SociletyListComponent   // 学社
        },
        {
          path:'login',
          component:LoginPage   //登录
        },
        {
          path:'mine',
          component:Mine   //登录
        },
        {
          path:'adv',
          component:AdvComponent   //登录
        },
        {
            path:'propagate-list',
            component: PropagateListComponent  //传道列表
        },
        {
            path:'live/:id',
            component:LiveDetailComponent   //传道的直播页面
          }
          ,
        {
          path:'loginpage',
          component:LoginPage
        },
        {
          path:'myaccountpage',
          component:MyAccountPage
        },
        {
          path:'mycoursepage',
          component:MyCoursePage
        },
        {
          path:'mysettingpage',
          component:MySettingPage
        },
        {
          path:'myaboutpage',
          component:MyAboutPage
        },
        {
          path:'myinfopage',
          component:MyInfoPage
         }
         ])
    ]
    ,
      providers: [
    LoginService,
    PropagateService
  ],
  declarations: [ ZutComponent,GuideComponent,SociletyListComponent,ZutHeadComponent, ZutFootComponent,PropagateListComponent, LiveDetailComponent,Mine,LoginPage,MyAccountPage,MyAboutPage,MyCoursePage,DiscoveryFirstComponent,MyInfoPage,MySettingPage,AdvComponent,PropagateFirstComponent],
  bootstrap:[ZutComponent]
})
export class ZutModule { }

