import { Component ,OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { ZutFootComponent }   from '../component/ts/zut-foot.component';
import { ZutHeadComponent }   from '../component/ts/zut-head.component';

@Component({
  selector: 'propagate-first',
  template: `
      <zut-head></zut-head>
      <zut-foot></zut-foot>
  `
})
export class PropagateFirstComponent implements OnInit{     

   ngOnInit(){
       
   }
}
 