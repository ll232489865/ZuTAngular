import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';

import { AppComponent }   from './guide/app.component';

import {Mine} from './mine/mine';//我的
import { LoginService }      from './mine/login.service';

import {Discovery} from './discovery/discovery';
import {BestList} from './discovery/bestList';
import {Details} from './discovery/discoveryDeatil';
import {LoginPage} from './mine/login'
import {MyAccountPage} from './mine/myaccountF/myaccount'
import {MyCoursePage} from './mine/mycourseF/mycourse'
import {MySettingPage} from './mine/mysettingF/mysetting'
import {MyAboutPage} from './mine/myaboutF/myabout'
import {MyInfoPage} from './mine/myinfoF/myinfo'

@NgModule({
  imports:      [ BrowserModule,
    RouterModule.forRoot([
        {
            path: 'mine',
            component: Mine
        },
        {
          path:'loginpage',
          component:LoginPage
        },
        {
          path:'',
          component:Discovery
        },
        {
          path:'bestList',
          component:BestList
        },
        {
          path:'discoverydetail',
          component:Details
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
  ],
    providers: [
    LoginService
  ],
  declarations: [ AppComponent,Mine,LoginPage,MyAccountPage,MyCoursePage,MySettingPage,MyAboutPage,MyInfoPage,Discovery,BestList,Details],
  bootstrap:[AppComponent]
})
export class AppModule { }
