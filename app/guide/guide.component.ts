import { Component ,OnInit} from '@angular/core';
import {Router} from '@angular/router';
declare var slider;


@Component({
  moduleId:module.id,
  selector: 'zut-guide',
  templateUrl: 'guide.component.html',
  styleUrls: [ 'guide.component.css' ]
})
export class GuideComponent implements OnInit{     
    constructor(
    private router: Router
   ){ }
    ngOnInit(){
        slider.init(
            document.getElementById('slider'),
            document.getElementById('absText'),
            document.querySelectorAll('#slider li'),
            document.querySelector('.m-slider'),
            document.getElementById('icons')
        );
    }
    goAdv() : void{
       this.router.navigate(['/adv']);
    }
}
 