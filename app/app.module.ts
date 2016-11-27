import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';

import { AppComponent }   from './guide/app.component';

import {Mine} from './mine/mine';//我的
import { LoginService }      from './mine/login.service';

import {LoginPage} from './mine/login';

import {Discovery} from './discovery/discovery';
import {BestList} from './discovery/bestList';
import {Details} from './discovery/discoveryDeatil';

@NgModule({
  imports:      [ BrowserModule,
    RouterModule.forRoot([
        {
            path: 'mine',
            component: Mine
        },
        {
          path:'login',
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
        }
    ])
  ],
    providers: [
    LoginService
  ],
  declarations: [ AppComponent,Mine,LoginPage,Discovery,BestList,Details],
  bootstrap:[AppComponent]
})
export class AppModule { }
