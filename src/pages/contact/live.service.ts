import {Injectable} from '@angular/core';
import {Headers, Http, URLSearchParams} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {HTTP} from 'ionic-native';
import {LiveInfo} from './live-info';

// let params=new URLSearchParams();
// params.set("token","1590afcc98c1464ea1f71b9bd13d848f");

let headers = new Headers();
headers.set("token", "1590afcc98c1464ea1f71b9bd13d848f");


@Injectable()
export class LiveService {
    private propagateUrl = 'http://192.168.1.10:9090/zuting_api/studygroup/list';

    loginCheck:string;
    constructor(private http: Http) {}

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


    checkLogin() {
        if (this.loginCheck) {
            this.loginCheck = '';
        } else {
            this.loginCheck = 'hello';
        }
    }
}