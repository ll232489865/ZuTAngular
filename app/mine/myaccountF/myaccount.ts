import { Component ,Input} from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';



@Component({
    moduleId:module.id,
    selector: 'my-component',
    templateUrl: 'myaccount.html'
})
export class MyAccountPage {
    constructor(
     public router: Router,
     public location:Location
     ){
        // this.ac="首页";
    }
    // ac:any;


}