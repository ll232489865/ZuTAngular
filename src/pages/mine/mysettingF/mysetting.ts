import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { LoginService } from '../login.service';

import { TabsPage } from '../../tabs/tabs'


@Component({
    selector: 'my-component',
    templateUrl: 'mysetting.html'
})
export class MySettingPage {
    constructor(
        public loginService: LoginService,
        public navCtrl: NavController
    ) {

    }

    _quitApp() {
        this.loginService.logout();

        // this.navCtrl.pop();
        this.navCtrl.setRoot(TabsPage, { userParams: 3 });

    }
}