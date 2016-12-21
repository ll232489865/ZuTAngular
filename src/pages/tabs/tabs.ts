import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';

import {MinePage} from '../mine/mine';

import {Discovery} from '../about/discovery';

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

  constructor() {

  }

  onClassClick() {
    console.log("------onClassClickonClassClick------");
  }
}
