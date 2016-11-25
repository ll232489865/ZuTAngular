import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';
import {HttpModule} from '@angular/http';

import { ZutComponent }   from './zut.component';
import { GuideComponent }   from './guide/guide.component';
import {Mine} from './mine/mine';//我的
import { LoginService }      from './mine/login.service';
import {LoginPage} from './mine/login'

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
    ])
  ],
    providers: [
    LoginService,
    PropagateService
  ],
  declarations: [ ZutComponent,Mine,LoginPage,GuideComponent, PropagateListComponent, LiveDetailComponent],
  bootstrap:[ZutComponent]
})
export class ZutModule { }
