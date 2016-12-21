import { Component} from '@angular/core';

import { NavController } from 'ionic-angular';

import { LoginService }      from '../login.service';

@Component({
    selector: 'my-component',
    templateUrl: 'mysetting.html'
})
export class MySettingPage {
    constructor(
     public loginService: LoginService,
     public navCtrl: NavController
     ){
        // this.ac="首页";
    }
    // ac:any;

    _quitApp(){
        this.loginService.logout();

        this.navCtrl.pop();
    }
}