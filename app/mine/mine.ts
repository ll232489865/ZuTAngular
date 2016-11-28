import { Component ,Input} from '@angular/core';
import {Router} from '@angular/router';

import { LoginService }      from './login.service';


@Component({
    moduleId:module.id,
    selector: 'my-component',
    templateUrl: 'mine.html'
})


export class Mine {
  message: string;

  constructor(public loginService: LoginService, public router: Router) {
  }

  loginStatus=this.loginService.isLoggedIn;

  loginAccount=this.loginService.str_account;

  _enterLogin(_num) {

    if(this.loginService.isLoggedIn) {
      // code...
      switch (_num) {
        case 1:
          // code...
          this.router.navigateByUrl('/myaccountpage')
        break;
        case 2:
                  this.router.navigateByUrl('/mycoursepage')

        break;
        case 3:
                  this.router.navigateByUrl('/mysettingpage')

        break;
        case 4:
                  this.router.navigateByUrl('/myaboutpage')

        break;
      }
    }else{
          this.router.navigateByUrl('/loginpage')

          // this.router.navigate(['/loginpage',{id:1,name:222}])
    }

    }

    _enterInfo(){
      if(this.loginService.isLoggedIn) {
        this.router.navigateByUrl('/myinfopage')
      }
    }


  logout() {
    this.loginService.logout();
  }
}