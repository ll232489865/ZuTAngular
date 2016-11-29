import { Component} from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'zut-head',
  template: `
     <header class="mui-bar mui-bar-nav">
        <h1 class="mui-title" id="title">论道</h1>
    </header>
  `
})
<<<<<<< HEAD
export class ZutHeadComponent{     
   
=======
export class ZutHeadComponent implements OnInit{
   tabsgo():void{
       alert(123);
   }     
   ngOnInit(){

   }
>>>>>>> 7ed7dc5ceea4f5b0604e3e064672c3f5e04bb0b1
}
 