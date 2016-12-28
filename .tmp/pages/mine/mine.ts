import { Component, OnInit, AfterContentChecked, Compiler, AfterViewInit } from '@angular/core';

import { ViewController, NavController, App, ModalController } from 'ionic-angular';

import { Storage } from "@ionic/storage"

//自定义插件
import { Istudy } from 'ionic-native'

import { LoginPage } from './login';
import { LoginService } from './login.service';

import { MyAccountPage } from './myaccountF/myaccount';
import { MyAboutPage } from './myaboutF/myabout';
import { MyCoursePage } from './mycourseF/mycourse';
import { MySettingPage } from './mysettingF/mysetting';
import { MyInfoPage } from './myinfoF/myinfo';


@Component({
  selector: 'page_mine',
  templateUrl: 'mine.html'

})

export class MinePage implements OnInit, AfterContentChecked, AfterViewInit {

  //AfterViewInit,AfterViewChecked,DoCheck,OnDestroy,AfterContentInit
  message: string;
  loginStatus: boolean;
  loginAccount: string;
  loginImg: string = "source/img/logo.png";
  age: number;
  deviceId: string = "DEVICE_ID";


  constructor(
    public loginService: LoginService,
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public app: App,
    public modalCtrl: ModalController,
    public _clearCache: Compiler,
    public storage: Storage
  ) {
  }


  _enterLogin(_num) {
    if (_num == 4) {
      // this.navCtrl.push(MyAboutPage);
      this.app.getRootNav().push(MyAboutPage);
    } else {

      if (this.loginService.isLoggedIn) {
        // code...
        switch (_num) {
          case 1:
            // code...
            // this.navCtrl.push(MyAccountPage);
            this.app.getRootNav().push(MyAccountPage);

            break;
          case 2:
            // this.navCtrl.push(MyCoursePage);
            this.app.getRootNav().push(MyCoursePage);

            break;
          case 3:
            // this.navCtrl.push(MySettingPage);
            this.app.getRootNav().push(MySettingPage);

            break;

        }
      } else {
        this.app.getRootNav().push(LoginPage);
      }
    }
  }


  _enterInfo() {
    if (this.loginService.isLoggedIn) {
      // this.navCtrl.push(MyInfoPage);
      this.app.getRootNav().push(MyInfoPage);
    }
  }


  logout() {
    this.loginService.logout();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  ngAfterContentChecked(): void {
  }

  ionViewWillEnter() {

    console.log("-------------------------------------ionViewWillEnter");

    let _self = this;

    if (this.loginService.isLoggedIn) {
      this.loginService.getAccountInfo(callBack)
    } else {
      this.loginImg = "source/img/logo.png";
    }

    function callBack(result) {
      _self.storage.get("ACCOUNTINFO").then(value => {

        if (JSON.stringify(result) == JSON.stringify(value)) {
          console.log("somesomesomesomesomesome");

        } else {
          console.log("diffdiffdiffdiffdiffdiffdiffdiffdiffdiffdiff");

          _self.loginStatus = _self.loginService.isLoggedIn;

          _self.storage.set("ACCOUNTINFO", result);

          _self.loginImg = _self.loginService.isLoggedIn ? result.avatar : "source/img/logo.png";

          _self.loginAccount = result.nicknm
        }
      });
      // 9999999999{"uuid":"a88121420d3d4e3383b65311e21334eb","nicknm":"白菜","gndr":0,"avatar":"http://oaa4szy4p.bkt.clouddn.com/FhyK08sdUwkl71bnBldyNGVN-HnP","rongyunToken":"2xxsm1gRsgvXb7PYgmgXz8O5+C6ckYlUzJczja0eV/fEwT2alkUXQhz6F2TdTcc6ETFdE8o1uaup75AdGRLX13qGCwVyvaEKdnG1bfZBz54VErwbhRmBZrzXWBYiN10MHGCAan28C20="}
    }
  }

  ionViewDidLoad() {
    console.log("-------------------------------------ionViewDidLoad");
    this.storage.get(this.deviceId)
      .then(result => {//获取 DeviceInfo

        if (!result) {
          Istudy.getDeviceInfo().then(result => {
            this.storage.set(this.deviceId, result.devId);
          });
        }
      })
  }

  ionViewDidEnter() {

  }


}
