import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';

import { ZutComponent }   from './zut.component';
import { GuideComponent }   from './guide/guide.component';
import { AdvComponent }   from './advertisement/adv.component';
import { PropagateFirstComponent }   from './propagate/propagate-first.component';
import {Mine} from './mine/mine';//我的
import { LoginService }      from './mine/login.service';
import {LoginPage} from './mine/login';
import { ZutHeadComponent }   from './component/ts/zut-head.component';
import { ZutFootComponent }   from './component/ts/zut-foot.component';

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
        ,
        {
            path: 'adv',
            component: AdvComponent
        }
        ,
        {
            path: 'propagate-first',
            component: PropagateFirstComponent
        }
    ])
  ],
    providers: [
    LoginService
  ],
  declarations: [ ZutComponent,Mine,LoginPage,GuideComponent,AdvComponent,PropagateFirstComponent,ZutHeadComponent,ZutFootComponent],
  bootstrap:[ZutComponent]
})
export class ZutModule { }
