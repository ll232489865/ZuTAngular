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
import {Discovery} from './discovery/discovery'
import {BestList} from './discovery/bestList';
import {Details} from './discovery/discoveryDeatil';




@NgModule({
  imports:      [ BrowserModule, HttpModule,
    RouterModule.forRoot([

        {
            path: '',
<<<<<<< HEAD
            component: GuideComponent
=======
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
>>>>>>> 7ed7dc5ceea4f5b0604e3e064672c3f5e04bb0b1
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
<<<<<<< HEAD
        }
        ,
        {
            path: 'adv',
            component: AdvComponent
        }
        ,
        {
            path: 'propagate-first',
            component: PropagateFirstComponent
        },
        {
            path: 'discovery',
            component: Discovery
        },
        {
          path:'bestList',
          component:BestList
        },
        {
          path:'discoverydetail',
          component:Details
        }
    ])
  ],
    providers: [
    LoginService,
    PropagateService
  ],

  declarations: [ ZutComponent,Discovery,BestList,Details,GuideComponent,ZutHeadComponent,ZutFootComponent,AdvComponent,PropagateFirstComponent, PropagateListComponent, LiveDetailComponent,Mine,LoginPage,MyAccountPage,MyAboutPage,MyCoursePage,MyInfoPage,MySettingPage],
=======
         }
         ])
    ]
    ,
      providers: [
    LoginService,
    PropagateService
  ],
  declarations: [ ZutComponent,GuideComponent,SociletyListComponent,ZutHeadComponent, ZutFootComponent,PropagateListComponent, LiveDetailComponent,Mine,LoginPage,MyAccountPage,MyAboutPage,MyCoursePage,DiscoveryFirstComponent,MyInfoPage,MySettingPage,AdvComponent,PropagateFirstComponent],
>>>>>>> 7ed7dc5ceea4f5b0604e3e064672c3f5e04bb0b1
  bootstrap:[ZutComponent]
})
export class ZutModule { }

