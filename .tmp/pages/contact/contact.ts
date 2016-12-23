import { Component, OnInit, DoCheck,AfterContentChecked,AfterViewChecked, ViewChild } from '@angular/core';

import { NavController, NavParams , App} from 'ionic-angular';

import {LiveService} from './live.service';
import {LiveInfo} from './live-info';
import {LiveDetail} from './live-detail';

import { LoginService } from '../mine/login.service';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage implements OnInit, DoCheck, 
              AfterContentChecked, AfterViewChecked{

  liveInfo: LiveInfo[];
  item;
  loginCheck:string;
  private htmlElement:HTMLElement;
  loginStatus;

  constructor(public navCtrl: NavController,
    private liveService:LiveService,
    private params: NavParams,
    private app: App,
    private loginService: LoginService) {
      // this.item = params.data.item;
      // this.loginCheck = 'hello';
      console.log('-----console----' + this.loginCheck);
  }

  ngOnInit():void {
    // console.log("------OnInit------");
    this.getLiveList();
  }

  getLiveList() {
        this.liveService
            .getPropagates()
            .then(liveInfo => {
              this.liveInfo = liveInfo});

  }

  ngDoCheck():void{
      console.log("---1---ngDoCheck------");
  }

  ngAfterViewChecked():void{
    console.log("---2---ngAfterViewChecked------"+this.loginCheck);
    
  }

  ngAfterContentChecked():void {
    console.log("----3--ngAfterContentChecked------");
    this.loginStatus = this.loginService.isLoggedIn;
  }

  onLoginClick() {
    alert("--4--onLoginClick----");
  }


  openNavDetailsPage(item) {

    this.app.getRootNav().push(LiveDetail, { item: item });
  }

}
