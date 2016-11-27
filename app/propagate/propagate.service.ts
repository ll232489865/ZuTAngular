import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {PropagateInfo} from './propagate-info'

//用来获取数据
@Injectable()
export class PropagateService {
    private propagateUrl = 'http://192.168.1.10:9090/zuting_api/live/public/list';

    constructor(private http: Http) {}

    getPropagates(): Promise<PropagateInfo []> {
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