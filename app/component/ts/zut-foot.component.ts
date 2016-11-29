// import { Component , OnInit} from '@angular/core';
// import {Router} from '@angular/router';
// import { Tabs } from './tabs';


// const TABSLIST: Tabs[] = [
//   {
//       iconSrc: '../app/source/img/4.png', 
//       iconSrcOn: '../app/source/img/4.png',
//       lineHref: 'discovery-first',
//       text:'论道'
//   },
//   {
//       iconSrc: '../app/source/img/3.png', 
//       iconSrcOn: '../app/source/img/3.png',
//       lineHref: 'propagate-first',
//       text:'传道'
//   }
//   ,
//   {
//       iconSrc: '../app/source/img/2.png', 
//       iconSrcOn: '../app/source/img/2.png',
//       lineHref: 'society',
//       text:'学苑'
//   }
//   ,
//   {
//       iconSrc: '../app/source/img/1.png',
//       iconSrcOn: '../app/source/img/1.png', 
//       lineHref: 'mine',
//       text:'我的'
//   }
// ];
// @Component({
//   selector: 'zut-foot',
//   templateUrl: '../app/component/html/zut-foot.html',
//   styles:[`
//       .tap-image{
//             margin-bottom: -1.8rem;
//             margin-top: -24px;
//             -webkit-transform: scale(0.33,0.33);
//         }
//         .tap-text{
//             color: #999999;
//             margin-top: -5px;
//             font-family: '迷你简北魏楷书';
//         }
//         .selected .tap-text{ 
//             color:#FEBF38
//         }
//   `]

// })
// export class ZutFootComponent {   
//     constructor(
//     private router: Router
//    ){ }
//     tabLists= TABSLIST;
//     onImage =  [ '../app/source/img/8.png','../app/source/img/7.png','../app/source/img/6.png','../app/source/img/5.png']
//     selectedTabs: Tabs;
//     onSelect(tab: Tabs,index:any): void {
//         for(var i=0 ; i<this.tabLists.length; i ++){
//             this.tabLists[i].iconSrc = this.tabLists[i].iconSrcOn;
//         }
//       this.tabLists[index].iconSrc =  this.onImage[index];
//       this.selectedTabs = tab;
//       this.router.navigate([this.tabLists[index].lineHref]);
      
//     }
//     ngOnInit(){
//         this.tabLists[0].iconSrc =  this.onImage[0];
//     }
// }
//  
import { Component , OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { Tabs } from './tabs';
import { TabsService } from './tabs.service';


@Component({
  selector: 'zut-foot',
  templateUrl: '../app/component/html/zut-foot.html',
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
        .selected .tap-text{ 
            color:#FEBF38
        }
  `]
  ,
  providers: [TabsService]

})
export class ZutFootComponent implements OnInit{   
    constructor(
      private router: Router,
      private tabsService: TabsService
     ){ }
    selectedtabs: Tabs;
    tabLists : Tabs[];
    selectCont;
    onImage =  [ '../app/source/img/8.png','../app/source/img/7.png','../app/source/img/6.png','../app/source/img/5.png']
    getTabs(): void {
      this.tabsService.getTabs().then(tabLists => this.tabLists = tabLists);
      this.selectCont = this.tabsService.tabOnCont;

    }
    
     ngOnInit():void{
      this.getTabs();

     }
     
     onSelect(tab: Tabs,index:any): void {
       
      for(var i=0 ; i<this.tabLists.length; i ++){
          this.tabLists[i].iconSrc = this.tabLists[i].iconSrcOn;
      }
      this.selectedtabs = tab;
      this.tabLists[index].iconSrc =  this.onImage[index];
      this.router.navigate([this.tabLists[index].lineHref]);
      this.selectCont = this.tabsService.tabOnCont = index;
    }
}


