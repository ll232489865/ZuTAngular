import { Component, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy, ElementRef, Compiler } from '@angular/core';

import { ViewController, NavController, App, ModalController } from 'ionic-angular';

import { LoginPage } from './login';
import { LoginService } from './login.service';

import { MyAccountPage } from './myaccountF/myaccount'
import { MyAboutPage } from './myaboutF/myabout'
import { MyCoursePage } from './mycourseF/mycourse'
import { MySettingPage } from './mysettingF/mysetting'
import { MyInfoPage } from './myinfoF/myinfo'


@Component({
  selector: 'page_mine',
  templateUrl: 'mine.html'

})

export class MinePage implements  OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy {
  message: string;
  private el: HTMLElement;
  loginStatus: boolean;
  loginAccount: string;
  loginImg: string;
  constructor(
    public loginService: LoginService,
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public app: App,
    public modalCtrl: ModalController,
    el: ElementRef,
    public _clearCache: Compiler
  ) {
    this.el = el.nativeElement;
  }


  // updateLeft() {
  //   var a = this.el.ownerDocument.querySelector('.app-root').innerHTML;

  //   console.log(this.el.ownerDocument.getElementById('xxx') instanceof HTMLSpanElement);
  // }

  _enterLogin(_num) {

    console.log(this.loginService.isLoggedIn);

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
    console.log("-ngOnInit------" + this.loginService.isLoggedIn);

    this.loginImg = "source/img/logo.png";

  }

  ngDoCheck(): void {
    console.log("--ngDoCheck------" + this.loginService.isLoggedIn);
  }

  ngAfterContentInit(): void {
    // this.updateLeft();
    console.log("---ngAfterContentInit------" + this.loginService.isLoggedIn);
  }

  ngAfterContentChecked(): void {
    console.log("----ngAfterContentChecked------" + this.loginService.isLoggedIn);

    this.loginStatus = this.loginService.isLoggedIn;
    this.loginAccount = this.loginService.str_account;

    this.loginImg = this.loginService.isLoggedIn ? "source/img/5.png" : "source/img/logo.png";
  }

  ngAfterViewInit(): void {
    console.log("------ngAfterViewInit------" + this.loginService.isLoggedIn);

  }

  ngAfterViewChecked(): void {
    console.log("------ngAfterViewInit------" + this.loginService.isLoggedIn);

  }

  ngOnDestroy(): void {
    console.log("-------ngOnDestroy------" + this.loginService.isLoggedIn);
  }

}


// ionViewDidLoad() {
  //   console.log('ionViewDidLoad');
  // }

  // ionViewWillEnter() {
  //   console.log('ionViewWillEnter');

  // }

  // ionViewDidEnter() {
  //   console.log('ionViewDidEnter');

  // }

  // ionViewWillLeave() {
  //   console.log('ionViewWillLeave');

  // }


  // ionViewDidLeave() {
  //   console.log('ionViewDidLeave');

  // }

  // ionViewWillUnload() {
  //   console.log('ionViewWillUnload');

  // }

  // ionViewDidUnload() {
  //   console.log('ionViewDidUnload');

  // }