import { Component, OnInit, DoCheck,AfterContentChecked,AfterViewChecked, ViewChild } from '@angular/core';

import { NavController, NavParams , App} from 'ionic-angular';

import {LiveService} from './live.service';
import {LiveInfo} from './live-info';
import {LiveDetail} from './live-detail';

import { LoginService } from '../mine/login.service';
import { GroupChat } from './group-chat/group-chat';
import { Camera } from 'ionic-native';
// declare var echarts
// import echarts from 'echarts';
// let aaa = require('../../../node_modules/echarts/echarts');
// import  echarts  from 'echarts';
//测试promise
// import 'rxjs/add/operator/toPromise';
// import {PropagateService} from '../home/propagate.service';
// import {PropagateInfo} from '../home/propagate-info';

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
    private loginService: LoginService
    // private propagateService: PropagateService
    ) {
      console.log('-----console----' + this.loginCheck);
  }
  propagateList = [];
  goCHatUi(item){
    // this.app.getRootNav().push(GroupChat);
    this.app.getRootNav().push(GroupChat);
  }
  ngOnInit():void {
    this.getLiveList();
  }
  textCamera(){
    let options = {
        quality: 80,
        sourceType: Camera.PictureSourceType.CAMERA,
        allowEdit: false,
        encodingType: Camera.EncodingType.JPEG,
        saveToPhotoAlbum: false,
        targetWidth : 250,
        targetHeight : 250
      };
    Camera.getPicture(options).then((imageData) => {
    document.getElementById('textCamera').setAttribute('src', imageData);
    }, (err) => {
      alert(err)
    });
  }
  getLiveList() {
    // this.liveService.getPropagates().then(liveInfo => {this.liveInfo = liveInfo});
    this.liveService.getListInfo( result=>{ this.liveInfo = result});
  }
  
 
  ngDoCheck():void{
      // console.log("---1---ngDoCheck------");
  }

  ngAfterViewChecked():void{
    // console.log("---2---ngAfterViewChecked------"+this.loginCheck);
    
  }

  ngAfterContentChecked():void {
    this.loginStatus = this.loginService.isLoggedIn;
  }

  onLoginClick() {
    // console.log("--4--onLoginClick----");
  }
  openNavDetailsPage(item) {
    this.app.getRootNav().push(LiveDetail, { item: item });
  }
}

