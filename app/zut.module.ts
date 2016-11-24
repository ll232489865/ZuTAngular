import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';

import { AppComponent }   from './guide/zut.component';

import {Mine} from './mine/mine';//我的
import { LoginService }      from './mine/login.service';

import {LoginPage} from './mine/login'

@NgModule({
  imports:      [ BrowserModule,
    RouterModule.forRoot([
        {
            path: '',
            component: Mine
        },
        {
          path:'login',
          component:LoginPage
        }
    ])
  ],
    providers: [
    LoginService
  ],
  declarations: [ AppComponent,Mine,LoginPage],
  bootstrap:[AppComponent]
})
export class AppModule { }
