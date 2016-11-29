import { Component ,OnInit} from '@angular/core';
import {Router} from '@angular/router';
// import {}
declare var slider;


@Component({
  moduleId:module.id,
  selector: 'zut-adv',
  templateUrl: 'adv.component.html',
  styleUrls: [ 'adv.component.css' ]
})
export class AdvComponent implements OnInit{
    time = null;
    dom = null;
    cont = 3;
    constructor(
      private router: Router
    ){ }
    adv():void{
        this.dom.innerHTML = "跳过" + this.cont + 's';
        this.cont --;
        if(this.cont < 0) {
          clearInterval(this.time);
<<<<<<< HEAD
          // this.router.navigate(['/propagate-first']);
          this.router.navigate(['/discovery']);
=======
          this.router.navigate(['/discovery-first']);
>>>>>>> 7ed7dc5ceea4f5b0604e3e064672c3f5e04bb0b1
        }
    }
    ngOnInit(){
        this.dom = document.getElementById('advtisemente_btn')
        this.time = setInterval( () => {
            this.adv()
        },1000)
    }
}