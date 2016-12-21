import { Component } from '@angular/core';

import { LoginService } from './login.service';

import { Location } from '@angular/common';

import { ViewController, NavController } from 'ionic-angular';


@Component({
    selector: 'my-component',
    templateUrl: 'login.html'
})

export class LoginPage {
    constructor(
        public loginService: LoginService,
        public location: Location,
        public viewCtrl: ViewController,
        public navCtrl: NavController
    ) { }



    _login(account, password) {
        this.loginService
            .login(account, password);

        if (this.loginService.isLoggedIn) {

            this.navCtrl.pop();

            //   this.viewCtrl.dismiss();
        }
    }
}