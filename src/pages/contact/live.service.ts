import {Injectable} from '@angular/core';
import {Http, URLSearchParams, RequestOptions, Headers } from '@angular/http';
import { NavController,NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage'


import 'rxjs/add/operator/toPromise';

import {HTTP} from 'ionic-native';
import {LiveInfo} from './live-info';
// import {LiveInfo} from './live-info';
//plugin
import { Istudy } from 'ionic-native';
// let params=new URLSearchParams();
// params.set("token","1590afcc98c1464ea1f71b9bd13d848f");

let headers = new Headers();

headers.set("token", "1590afcc98c1464ea1f71b9bd13d848f");


@Injectable()
export class LiveService {
    private propagateUrl = 'http://192.168.1.10:9090/zuting_api/studygroup/list';

    loginCheck:string;
    constructor(private http: Http,public storage: Storage) {}

    getPropagates(): Promise<LiveInfo []> {
            return this.http.get(this.propagateUrl, {headers: headers})
                .toPromise()
                .then(response => response.json().result as LiveInfo[])
                .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
    getListInfo(callBack) {
        this.getSession().then(session => {  
        console.log("session" + JSON.stringify(session));
        if (session) {
          Istudy.getHeader({ session: session, path: "/studygroup/list", headers: {}, params: {} })
            .then(head => {
              let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
              let options = new RequestOptions({ headers: head });
              this.http.get(this.propagateUrl, options)
                .toPromise()
                .then(result => {
                    callBack(result.json().result as LiveInfo[])
                })
                .catch(this.handleError);
            })
        }
      });
  }
  getSession(): Promise<any> {
    return this.storage.get("SESSION")
      .then(result => {
        if(result){
            return result
        }
      });
  }
    checkLogin() {
        if (this.loginCheck) {
            this.loginCheck = '';
        } else {
            this.loginCheck = 'hello';
        }
    }
}
// {"timestamp":new Date().getTime(),"checksum":"dcdb3449fbdb46e94577bd080b04ef4e","checksum-headers":"
// [\"timestamp\",\"token\"]","token":"55c5e27560a646e3b6217f31f44d1922"}