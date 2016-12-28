import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { Storage } from '@ionic/storage';
import { LoginService } from '../pages/mine/login.service';
import { PropagateService } from '../pages/home/propagate.service';
import { ThirdShare } from '../pages/third_share/third-share';
import { Discovery } from '../pages/about/discovery';
import { LiveService } from '../pages/contact/live.service';
import { LiveDetail } from '../pages/contact/live-detail';
import { MinePage } from '../pages/mine/mine';
import { LoginPage } from '../pages/mine/login';
import { MyAccountPage } from '../pages/mine/myaccountF/myaccount';
import { MyAboutPage } from '../pages/mine/myaboutF/myabout';
import { MyCoursePage } from '../pages/mine/mycourseF/mycourse';
import { MyInfoPage } from '../pages/mine/myinfoF/myinfo';
import { MySettingPage } from '../pages/mine/mysettingF/mysetting';
import { BestList } from '../pages/about/bestList';
import { Details } from '../pages/about/discoveryDeatil';
import { UnlessDirective } from '../providers/unless.directive';
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        MyApp,
                        AboutPage,
                        ContactPage,
                        HomePage,
                        TabsPage,
                        ThirdShare,
                        Discovery,
                        LiveDetail,
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
                    providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler },
                        PropagateService, LiveService, LoginService, Storage]
                },] },
    ];
    /** @nocollapse */
    AppModule.ctorParameters = [];
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map