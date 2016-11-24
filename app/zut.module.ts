import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';

import { ZutComponent }   from './zut.component';
import { GuideComponent }   from './guide/guide.component';
import {Mine} from './mine/mine';//我的
import { LoginService }      from './mine/login.service';
import {LoginPage} from './mine/login'

@NgModule({
  imports:      [ BrowserModule,
    RouterModule.forRoot([
        {
            path: '',
            component: GuideComponent
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
  declarations: [ ZutComponent,Mine,LoginPage,GuideComponent],
  bootstrap:[ZutComponent]
})
export class ZutModule { }
