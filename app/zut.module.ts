import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';
import {HttpModule} from '@angular/http';

import { ZutComponent }   from './zut.component';
import { GuideComponent }   from './guide/guide.component';
import { AdvComponent }   from './advertisement/adv.component';
import { PropagateFirstComponent }   from './propagate/propagate-first.component';
import {Mine} from './mine/mine';//我的
import { LoginService }      from './mine/login.service';
import {LoginPage} from './mine/login';
import { ZutHeadComponent }   from './component/ts/zut-head.component';
import { ZutFootComponent }   from './component/ts/zut-foot.component';

import {PropagateListComponent} from './propagate/propagate-list.component';
import {PropagateService} from './propagate/propagate.service';
import {LiveDetailComponent} from './propagate/live-detail.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule,
    RouterModule.forRoot([
        // {
        //     path: '',
        //     component: GuideComponent
        // },
        {
          path:'login',
          component:LoginPage
        },
        {
            path:'',
            component: PropagateListComponent
        },{
            path:'live/:id',
            component:LiveDetailComponent
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
    LoginService,
    PropagateService
  ],
<<<<<<< HEAD
  declarations: [ ZutComponent,Mine,LoginPage,GuideComponent,AdvComponent,PropagateFirstComponent,ZutHeadComponent,ZutFootComponent],
=======
  declarations: [ ZutComponent,Mine,LoginPage,GuideComponent, PropagateListComponent, LiveDetailComponent],
>>>>>>> 16f6adc3576abe93d8d4913c2f2de6820f2d8be6
  bootstrap:[ZutComponent]
})
export class ZutModule { }
