import { Component ,Input} from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

import { LoginService }      from '../login.service';

@Component({
    moduleId:module.id,
    selector: 'my-component',
    templateUrl: 'mysetting.html'
})
export class MySettingPage {
    constructor(
     public router: Router,
     public location:Location,
     public loginService: LoginService,
     ){
        // this.ac="首页";
    }
    // ac:any;

    _quitApp(){
        this.loginService.logout();

        this.location.back();
    }



}