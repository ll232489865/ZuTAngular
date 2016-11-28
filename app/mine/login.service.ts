import { Injectable } from '@angular/core';
import {Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {PropagateInfo} from '../propagate/propagate-info'



import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class LoginService {
  isLoggedIn: boolean = false;
  _imgUrl:string;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  str_account:string="account";

  login(account,password): Observable<boolean> {
      if(account==password) {
          // code...
              return Observable.of(true).delay(1000).do(val => 
                  {this.isLoggedIn = true;
                      this._imgUrl = "./app/source/img/5.png"}
                     );
      }else{
          return Observable.of(true).delay(1000).do(val => this.isLoggedIn = false);
      }
  }

  logout(): void {
    this.isLoggedIn = false;
  }


    private propagateUrl = 'http://192.168.1.10:9090/zuting_api/live/public/list';

    constructor(private http: Http) {}

    _login(): Promise<PropagateInfo []> {
      return this.http.get(this.propagateUrl)
                .toPromise()
                .then(response => response.json().result as PropagateInfo[])
                .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

}



/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/