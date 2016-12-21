import { Component, OnInit } from '@angular/core';

import { NavController, PopoverController } from 'ionic-angular';

import {PropagateService} from './propagate.service';
import {PropagateInfo} from './propagate-info';
import {ThirdShare} from '../third_share/third-share';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  propagateList: PropagateInfo[];

  constructor(public navCtrl: NavController,
  private propagateService: PropagateService,
  public popoverCtrl: PopoverController) {

  }

  ngOnInit():void {
    this.getPropagateList();
  }

  getPropagateList() {
        this.propagateService
            .getPropagates()
            .then(propagateList => this.propagateList = propagateList);
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  itemSelected(item: string) {
    alert("-----item:" + item);
  }

  onShareClick(item: string) {
    // alert("-----onShareClick:" + JSON.stringify(item));

    let popover = this.popoverCtrl.create(ThirdShare);
    popover.present();
  }

  onLogForm() {
    
  }

}
