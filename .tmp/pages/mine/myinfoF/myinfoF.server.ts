import { Injectable } from '@angular/core';
import { Http, URLSearchParams, RequestOptions, Headers } from '@angular/http';
import { Qiniu } from 'ionic-native';

@Injectable()
export class MyinfoServer {

  private Url_qiniu = 'http://192.168.1.10:9090/zuting_api/qiniu/getToken';
  private Url_update = 'http://192.168.1.10:9090/zuting_api/account/update';
  constructor(
    public http: Http,
    
  ) { }


  qiniuImage(fileUrl,Callback){
      this.http.get(this.Url_qiniu)
      .toPromise()
      .then(
      response =>{
        // console.log("66666666666666"+JSON.stringify(response.json().resultCode));
        if (response.json().resultCode==0)
        {
            var Argus = {
				    	token: response.json().result.token,
					    urlPath: fileUrl,
                    picCfg :{
                        maxHeight :300,
                        maxWidth : 300,
                    }
				};

                Qiniu.uploadImage(Argus).then(result=>{
                    
Callback(result);

                    // "source/img/5.png"



// var params = "mobile=" + account + "&password=" + encodeURIComponent(pass) + "&handshakeCode=" + encodeURIComponent(result) + "&appSrc=" + "STUDENT" + "&deviceID=" + val;

                            // let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
                            // let options = new RequestOptions({ headers: headers });

                            // this.http.post(this.Url_update, params, options)
                            //   .toPromise()
                            //   .then(res => {

                            //     if (res.json().resultCode == 0) {
                            //       // this.isLoggedIn = true;
                            //       // callBack(res.json().result as model_loginResult);

                            //     } else {
                            //       console.log(res.json().resultCode);
                            //     }
                            //   })
                            //   .catch(this.handleError);



                })

        }
      }

      )
      .catch(this.handleError);
  }


  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }




  
}