import { Component ,Input} from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';



@Component({
    moduleId:module.id,
    selector: 'my-component',
    templateUrl: 'myinfo.html'
})
export class MyInfoPage {
    constructor(
     public router: Router,
     public location:Location
     ){
        // this.ac="首页";
    }
    // ac:any;


}