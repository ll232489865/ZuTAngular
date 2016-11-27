import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';
import {HttpModule} from '@angular/http';

import { ZutComponent }   from './zut.component';
import { GuideComponent }   from './guide/guide.component';


import {PropagateListComponent} from './propagate/propagate-list.component';
import {PropagateService} from './propagate/propagate.service';
import {LiveDetailComponent} from './propagate/live-detail.component';

import {Mine} from './mine/mine';//我的
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
        // {
        //   path:'login',
        //   component:LoginPage
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
            component: Mine
        },
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
  ],
    providers: [
    LoginService,
    PropagateService
  ],
  declarations: [ ZutComponent,GuideComponent, PropagateListComponent, LiveDetailComponent,Mine,LoginPage,MyAccountPage,MyAboutPage,MyCoursePage,MyInfoPage,MySettingPage],
  bootstrap:[ZutComponent]
})
export class ZutModule { }
