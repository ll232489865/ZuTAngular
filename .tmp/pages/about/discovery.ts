import { Component, Input } from '@angular/core';
import { Slides } from 'ionic-angular';
import { NavController,App } from 'ionic-angular';
import {BestList} from './bestList';
import {Details} from './discoveryDeatil'


@Component({
	selector: "page-discovery",
  templateUrl: "discovery.html"
})
export class Discovery {

	constructor(
		public app:App
		){

	}
	//儒释道点击方法
	rsdClick() {
    // if (this.loginService.isLoggedIn) {
      this.app.getRootNav().push(BestList);
    // }
  }
	firstClick(){

		this.app.getRootNav().push(Details);
	}

	_imgs = ["assets/img/icon_ru@3x.png", "assets/img/icon_shi@3x.png", "assets/img/icon_dao@3x.png"];
  slides = [
    {
      // title: "Welcome to the Docs!",
      // description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
      image: "assets/img/titles.jpg",
    },
    {
      // title: "What is Ionic?",
      // description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "assets/img/1.png",
    },
    {
      // title: "What is Ionic Cloud?",
      // description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "assets/img/2.png",
    }
  ];
}
