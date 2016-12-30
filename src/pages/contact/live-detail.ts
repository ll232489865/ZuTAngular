import { Component, OnInit } from '@angular/core';

import { NavController, NavParams} from 'ionic-angular';
@Component({
  selector: 'page-live',
  templateUrl: 'live-detail.html'
})

export class LiveDetail{

    item;
    constructor(private params: NavParams){

        this.item = params.data.item;
    }
}