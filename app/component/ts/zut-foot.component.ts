import { Component ,OnInit} from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'zut-foot',
  template: `
      <nav class="foot mui-bar mui-bar-tab">
        <a id="defaultTab" class="mui-tab-item mui-active" href="discovery/discovery_default.html" style="text-decoration:none;">
            <span title="论道"><img class="tap-image" src="../app/source/img/4.png">
            <div id="dynamic-msg1" class="tap-text" style="margin-top: -4px">论道</div></span>
        </a>
        <a class="mui-tab-item" href="propagate/propagate_list.html" style="text-decoration:none;">
            <span title="传道"><img class="tap-image" src="../app/source/img/3.png">
            <div id="dynamic-msg2" class="tap-text" style="margin-top: -6px">传道</div></span>
        </a>
        <a id="society" class="mui-tab-item" href="society/society_list.html" style="text-decoration:none;">
            <span title="学苑"><img class="tap-image" src="../app/source/img/2.png">
                <div id="dynamic-msg3" class="tap-text" style="margin-top: -3px">学苑</div></span>
        </a>
        <a class="mui-tab-item" href="wode/wode.html" style="text-decoration:none;">
            <span title="我的"><img class="tap-image" src="../app/source/img/1.png">
            <div id="dynamic-msg4" class="tap-text">我的</div></span>
        </a>
    </nav>
  `
  ,
  styles:[`
      .tap-image{
            margin-bottom: -1.8rem;
            margin-top: -24px;
            -webkit-transform: scale(0.33,0.33);
        }
        
        .tap-text{
            color: #999999;
            margin-top: -5px;
            font-family: '迷你简北魏楷书';
        }
  `]
})
export class ZutFootComponent implements OnInit{     
   ngOnInit(){

   }
}
 