import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class LoginService {
  isLoggedIn: boolean = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  str_account:string="account";

  login(account,password): Observable<boolean> {
      if(account==password) {
          // code...
              return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
      }else{
          return Observable.of(true).delay(1000).do(val => this.isLoggedIn = false);
      }
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/