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
    this.setMessage();
  }

  loginStatus=this.loginService.isLoggedIn;

  loginAccount=this.loginService.str_account;

  loginHeadImg=this.loginService._imgUrl;

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
          // this.router.navigateByUrl('/loginpage')

          this.router.navigate(['/loginpage',{id:1,name:222}])
    }

    }

    _enterInfo(){
      if(this.loginService.isLoggedIn) {
        this.router.navigateByUrl('/myinfopage')
      }
    }





  setMessage() {
    this.message = 'Logged ' + (this.loginService.isLoggedIn ? 'in' : 'out');
  }

  login() {
    this.message = 'Trying to log in ...';

    this.loginService.login("a","b").subscribe(() => {
      this.setMessage();
      if (this.loginService.isLoggedIn) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        let redirect = this.loginService.redirectUrl ? this.loginService.redirectUrl : '/admin';

        // Set our navigation extras object
        // that passes on our global query params and fragment


        // let navigationExtras: NavigationExtras = {
        //   preserveQueryParams: true,
        //   preserveFragment: true
        // };

        // // Redirect the user
        // this.router.navigate([redirect], navigationExtras);
      }
    });
  }

  logout() {
    this.loginService.logout();
    this.setMessage();
  }
}