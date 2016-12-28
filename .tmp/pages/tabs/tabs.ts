import { Component, ViewChild } from '@angular/core';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';

import { MinePage } from '../mine/mine';

import { Discovery } from '../about/discovery';

import { NavParams, Tabs } from 'ionic-angular'


@Component({
  templateUrl: 'tabs.html'
})


export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page

  tab1Root: any = HomePage;
  tab2Root: any = Discovery;
  tab3Root: any = ContactPage;
  tab4Root: any = MinePage;

  tabCurrent: any = 999;

  @ViewChild(Tabs) tabs: Tabs;
  constructor(public params: NavParams) {

    console.log('-----tabsPage-----' + this.params.get('userParams'));

    if (this.params.get('userParams')) {
      this.tabCurrent = this.params.get('userParams');
    }


  }



  ionViewDidEnter() {
    if (this.tabCurrent != 999) {
      this.tabs.select(this.tabCurrent);
      this.tabCurrent =999;
    }
  }


  onClassClick() {
    console.log("------onClassClickonClassClick------");
  }

}
