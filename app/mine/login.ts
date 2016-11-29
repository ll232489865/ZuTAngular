import { Component ,Input,OnInit} from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router';

import { LoginService }      from './login.service';


import {Location} from '@angular/common';

@Component({
    moduleId:module.id,
    selector: 'my-component',
    templateUrl: 'login.html'
})

export class LoginPage {
    constructor(
     public loginService: LoginService,
     public router: ActivatedRoute,
     public location:Location,
     ){
        // this.ac="首页";
    }

    ngOnInit(): void {
      this.router.params.forEach((params:Params)=>{

      })
}


    _login(account,password){
        this.loginService
        .login(account,password);
        
        if(this.loginService.isLoggedIn) { 
          this.location.back();
        } 
      }
}