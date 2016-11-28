import { Component} from '@angular/core';
import {Router} from '@angular/router';
import { ZutFootComponent }   from '../component/ts/zut-foot.component';
import { ZutHeadComponent }   from '../component/ts/zut-head.component';

@Component({
  selector: 'propagate-first',
  template: `
      <zut-head></zut-head>
       <div class="mui-content">
              <h3>
                 propagate-first
              </h3>
          </div>
      <zut-foot></zut-foot>
  `
})
export class PropagateFirstComponent{     
}
 