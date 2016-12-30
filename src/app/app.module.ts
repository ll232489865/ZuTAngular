import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { Storage } from '@ionic/storage';
import { GroupChat } from '../pages/contact/group-chat/group-chat';
import { Chat } from '../pages/contact/chat/chat';


//server
import { LoginService } from '../pages/mine/login.service';
import { MyinfoServer } from '../pages/mine/myinfoF/myinfoF.server';
//home
import {PropagateInfo} from '../pages/home/propagate-info';
import {PropagateService} from '../pages/home/propagate.service';
import {ThirdShare} from '../pages/third_share/third-share';
import {Discovery} from '../pages/about/discovery';

//class
import {LiveService} from '../pages/contact/live.service';
import {LiveDetail} from '../pages/contact/live-detail';

//mine
import { MinePage } from '../pages/mine/mine'
import { LoginPage } from '../pages/mine/login'
import { MyAccountPage } from '../pages/mine/myaccountF/myaccount'
import { MyAboutPage } from '../pages/mine/myaboutF/myabout'
import { MyCoursePage } from '../pages/mine/mycourseF/mycourse'
import { MyInfoPage } from '../pages/mine/myinfoF/myinfo'
import { MySettingPage } from '../pages/mine/mysettingF/mysetting'

//about
import {BestList} from '../pages/about/bestList';
import {Details} from '../pages/about/discoveryDeatil';


import {UnlessDirective} from '../providers/unless.directive'

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ThirdShare,
    Discovery,
    LiveDetail,
    GroupChat,
    Chat,

    MinePage,
    LoginPage,
    MyAccountPage,
    MyAboutPage,
    MyCoursePage,
    MyInfoPage,
    MySettingPage,
    
    BestList,
    Details,


    UnlessDirective


  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ThirdShare,
    Discovery,
    LiveDetail,
    GroupChat,
    Chat,

    MinePage,
    LoginPage,
    MyAccountPage,
    MyAboutPage,
    MyCoursePage,
    MyInfoPage,
    MySettingPage,

    BestList,
    Details
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},
  PropagateService,LiveService,LoginService,MyinfoServer,Storage]
})
export class AppModule {}
