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
          this.router.navigate(['/discovery-first']);
        }
    }
    ngOnInit(){
        this.dom = document.getElementById('advtisemente_btn')
        this.time = setInterval( () => {
            this.adv()
        },1000)
    }
}