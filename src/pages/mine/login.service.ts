import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

import 'rxjs/add/operator/toPromise';

//model
import { LoginHandshakeModel } from './login-model'

import { Device } from 'ionic-native';

//md5
declare var md5_obj;


@Injectable()
export class LoginService {
  private Url_handshake = 'http://192.168.1.10:9090/zuting_api/handshake';
  private Url_login = 'http://192.168.1.10:9090/zuting_api/login';

  isLoggedIn: boolean = false;
  str_account: string = "account";

  model_handshake: LoginHandshakeModel;

  constructor(private http: Http) { }

  login(account, password) {

    this.handshakeRequest()
      .then(model => this.model_handshake = model);

    console.log(JSON.stringify(this.model_handshake));

    this.http.post(this.Url_login, {})
      .toPromise()
      .then()
      .catch(this.handleError);


//  var hash = md5_obj.hex_md5("123dafd");


// console.log(hash);


// console.log('Device UUID is: ' + Device.device.uuid);



    if (account == password) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }



  handshakeRequest(): Promise<LoginHandshakeModel> {

    let params = new URLSearchParams();
    params.set("greeting", "1");

    return this.http.get(this.Url_handshake, { search: params })
      .toPromise()
      .then(response =>
        // {
        // console.log(JSON.stringify(response.json()));
        response.json().result as LoginHandshakeModel
      // }
      )
      .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
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