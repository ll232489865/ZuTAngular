/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from './bestList';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '../../node_modules/ionic-angular/components/toolbar/toolbar.ngfactory';
import * as import11 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import12 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import13 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import14 from '../../node_modules/ionic-angular/components/card/card.ngfactory';
import * as import15 from 'ionic-angular/config/config';
import * as import16 from '@angular/core/src/linker/element_ref';
import * as import17 from 'ionic-angular/navigation/view-controller';
import * as import18 from 'ionic-angular/components/app/app';
import * as import19 from 'ionic-angular/navigation/nav-controller';
import * as import20 from 'ionic-angular/components/toolbar/toolbar';
import * as import21 from 'ionic-angular/util/keyboard';
import * as import22 from '@angular/core/src/zone/ng_zone';
import * as import23 from 'ionic-angular/components/tabs/tabs';
import * as import24 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import25 from 'ionic-angular/components/navbar/navbar';
import * as import26 from 'ionic-angular/components/card/card';
import * as import27 from 'ionic-angular/components/content/content';
export class Wrapper_BestList {
  context:import0.BestList;
  changed:boolean;
  constructor() {
    this.changed = false;
    this.context = new import0.BestList();
  }
  detectChangesInternal(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this.changed;
    this.changed = false;
    return changed;
  }
}
var renderType_BestList_Host:import2.RenderComponentType = (null as any);
class _View_BestList_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _BestList_0_4:Wrapper_BestList;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_BestList_Host0,renderType_BestList_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = this.selectOrCreateHostElement('my-component',rootSelector,(null as any));
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_BestList0(this.viewUtils,this.injector(0),this._appEl_0);
    this._BestList_0_4 = new Wrapper_BestList();
    this._appEl_0.initComponent(this._BestList_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._BestList_0_4.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.BestList) && (0 === requestNodeIndex))) { return this._BestList_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._BestList_0_4.detectChangesInternal(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_BestList_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  if ((renderType_BestList_Host === (null as any))) { (renderType_BestList_Host = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_BestList_Host0(viewUtils,parentInjector,declarationEl);
}
export const BestListNgFactory:import9.ComponentFactory<import0.BestList> = new import9.ComponentFactory<import0.BestList>('my-component',viewFactory_BestList_Host0,import0.BestList);
const styles_BestList:any[] = ([] as any[]);
var renderType_BestList:import2.RenderComponentType = (null as any);
class _View_BestList0 extends import1.AppView<import0.BestList> {
  _el_0:any;
  _Header_0_3:import10.Wrapper_Header;
  _text_1:any;
  _el_2:any;
  /*private*/ _appEl_2:import3.AppElement;
  _Navbar_2_4:import11.Wrapper_Navbar;
  _text_3:any;
  _el_4:any;
  /*private*/ _appEl_4:import3.AppElement;
  _ToolbarTitle_4_4:import12.Wrapper_ToolbarTitle;
  _text_5:any;
  _text_6:any;
  _text_7:any;
  _text_8:any;
  _el_9:any;
  /*private*/ _appEl_9:import3.AppElement;
  _Content_9_4:import13.Wrapper_Content;
  _text_10:any;
  _el_11:any;
  _text_12:any;
  _el_13:any;
  _Card_13_3:import14.Wrapper_Card;
  _text_14:any;
  _el_15:any;
  _text_16:any;
  _el_17:any;
  _CardContent_17_3:import14.Wrapper_CardContent;
  _text_18:any;
  _el_19:any;
  _CardTitle_19_3:import14.Wrapper_CardTitle;
  _text_20:any;
  _text_21:any;
  _el_22:any;
  _text_23:any;
  _text_24:any;
  _text_25:any;
  _text_26:any;
  _el_27:any;
  _Card_27_3:import14.Wrapper_Card;
  _text_28:any;
  _el_29:any;
  _text_30:any;
  _el_31:any;
  _CardContent_31_3:import14.Wrapper_CardContent;
  _text_32:any;
  _el_33:any;
  _CardTitle_33_3:import14.Wrapper_CardTitle;
  _text_34:any;
  _text_35:any;
  _el_36:any;
  _text_37:any;
  _text_38:any;
  _text_39:any;
  _text_40:any;
  _text_41:any;
  _text_42:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_BestList0,renderType_BestList,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'ion-header',(null as any));
    this._Header_0_3 = new import10.Wrapper_Header(this.parentInjector.get(import15.Config),new import16.ElementRef(this._el_0),this.renderer,this.parentInjector.get(import17.ViewController,(null as any)));
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'ion-navbar',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','toolbar');
    this._appEl_2 = new import3.AppElement(2,0,this,this._el_2);
    var compView_2:any = import11.viewFactory_Navbar0(this.viewUtils,this.injector(2),this._appEl_2);
    this._Navbar_2_4 = new import11.Wrapper_Navbar(this.parentInjector.get(import18.App),this.parentInjector.get(import17.ViewController,(null as any)),this.parentInjector.get(import19.NavController,(null as any)),this.parentInjector.get(import15.Config),new import16.ElementRef(this._el_2),this.renderer);
    this._appEl_2.initComponent(this._Navbar_2_4.context,([] as any[]),compView_2);
    this._text_3 = this.renderer.createText((null as any),'\n        ',(null as any));
    this._el_4 = this.renderer.createElement((null as any),'ion-title',(null as any));
    this._appEl_4 = new import3.AppElement(4,2,this,this._el_4);
    var compView_4:any = import12.viewFactory_ToolbarTitle0(this.viewUtils,this.injector(4),this._appEl_4);
    this._ToolbarTitle_4_4 = new import12.Wrapper_ToolbarTitle(this.parentInjector.get(import15.Config),new import16.ElementRef(this._el_4),this.renderer,this.parentInjector.get(import20.Toolbar,(null as any)),this._Navbar_2_4.context);
    this._appEl_4.initComponent(this._ToolbarTitle_4_4.context,([] as any[]),compView_4);
    this._text_5 = this.renderer.createText((null as any),'\n            快讯详情\n        ',(null as any));
    compView_4.create(this._ToolbarTitle_4_4.context,[([] as any[]).concat([this._text_5])],(null as any));
    this._text_6 = this.renderer.createText((null as any),'\n    ',(null as any));
    compView_2.create(this._Navbar_2_4.context,[
      ([] as any[]),
      ([] as any[]),
      ([] as any[]),
      ([] as any[]).concat([
        this._text_3,
        this._el_4,
        this._text_6
      ]
      )
    ]
    ,(null as any));
    this._text_7 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._text_8 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_9 = this.renderer.createElement(parentRenderNode,'ion-content',(null as any));
    this._appEl_9 = new import3.AppElement(9,(null as any),this,this._el_9);
    var compView_9:any = import13.viewFactory_Content0(this.viewUtils,this.injector(9),this._appEl_9);
    this._Content_9_4 = new import13.Wrapper_Content(this.parentInjector.get(import15.Config),new import16.ElementRef(this._el_9),this.renderer,this.parentInjector.get(import18.App),this.parentInjector.get(import21.Keyboard),this.parentInjector.get(import22.NgZone),this.parentInjector.get(import17.ViewController,(null as any)),this.parentInjector.get(import23.Tabs,(null as any)));
    this._appEl_9.initComponent(this._Content_9_4.context,([] as any[]),compView_9);
    this._text_10 = this.renderer.createText((null as any),'\n\n    ',(null as any));
    this._el_11 = this.renderer.createElement((null as any),'div',(null as any));
    this.renderer.setElementAttribute(this._el_11,'style','width: 100%;height: 50%;padding: 10px');
    this._text_12 = this.renderer.createText(this._el_11,'\n        ',(null as any));
    this._el_13 = this.renderer.createElement(this._el_11,'ion-card',(null as any));
    this._Card_13_3 = new import14.Wrapper_Card(this.parentInjector.get(import15.Config),new import16.ElementRef(this._el_13),this.renderer);
    this._text_14 = this.renderer.createText(this._el_13,'\n          ',(null as any));
    this._el_15 = this.renderer.createElement(this._el_13,'img',(null as any));
    this.renderer.setElementAttribute(this._el_15,'src','assets/img/titles.jpg');
    this._text_16 = this.renderer.createText(this._el_13,'\n          ',(null as any));
    this._el_17 = this.renderer.createElement(this._el_13,'ion-card-content',(null as any));
    this._CardContent_17_3 = new import14.Wrapper_CardContent(this.parentInjector.get(import15.Config),new import16.ElementRef(this._el_17),this.renderer);
    this._text_18 = this.renderer.createText(this._el_17,'\n            ',(null as any));
    this._el_19 = this.renderer.createElement(this._el_17,'ion-card-title',(null as any));
    this._CardTitle_19_3 = new import14.Wrapper_CardTitle(this.parentInjector.get(import15.Config),new import16.ElementRef(this._el_19),this.renderer);
    this._text_20 = this.renderer.createText(this._el_19,'\n              Nine Inch Nails Live\n              ',(null as any));
    this._text_21 = this.renderer.createText(this._el_17,'\n              ',(null as any));
    this._el_22 = this.renderer.createElement(this._el_17,'p',(null as any));
    this.renderer.setElementAttribute(this._el_22,'style','padding:0 0');
    this._text_23 = this.renderer.createText(this._el_22,'\n              A toolbar is a generic bar that can be used in an app as a header, sub-header, footer, or even sub-footer. Since\n            ',(null as any));
    this._text_24 = this.renderer.createText(this._el_17,'\n          ',(null as any));
    this._text_25 = this.renderer.createText(this._el_13,'\n        ',(null as any));
    this._text_26 = this.renderer.createText(this._el_11,'\n        ',(null as any));
    this._el_27 = this.renderer.createElement(this._el_11,'ion-card',(null as any));
    this._Card_27_3 = new import14.Wrapper_Card(this.parentInjector.get(import15.Config),new import16.ElementRef(this._el_27),this.renderer);
    this._text_28 = this.renderer.createText(this._el_27,'\n          ',(null as any));
    this._el_29 = this.renderer.createElement(this._el_27,'img',(null as any));
    this.renderer.setElementAttribute(this._el_29,'src','assets/img/1.png');
    this._text_30 = this.renderer.createText(this._el_27,'\n          ',(null as any));
    this._el_31 = this.renderer.createElement(this._el_27,'ion-card-content',(null as any));
    this._CardContent_31_3 = new import14.Wrapper_CardContent(this.parentInjector.get(import15.Config),new import16.ElementRef(this._el_31),this.renderer);
    this._text_32 = this.renderer.createText(this._el_31,'\n            ',(null as any));
    this._el_33 = this.renderer.createElement(this._el_31,'ion-card-title',(null as any));
    this._CardTitle_33_3 = new import14.Wrapper_CardTitle(this.parentInjector.get(import15.Config),new import16.ElementRef(this._el_33),this.renderer);
    this._text_34 = this.renderer.createText(this._el_33,'\n              Gender Issues \n              ',(null as any));
    this._text_35 = this.renderer.createText(this._el_31,'\n              ',(null as any));
    this._el_36 = this.renderer.createElement(this._el_31,'p',(null as any));
    this.renderer.setElementAttribute(this._el_36,'style','padding:0 0');
    this._text_37 = this.renderer.createText(this._el_36,'\n              how many toolbars you have in your page, they will be displayed correctly and ion-content will adjust accordingly.\n            ',(null as any));
    this._text_38 = this.renderer.createText(this._el_31,'\n          ',(null as any));
    this._text_39 = this.renderer.createText(this._el_27,'\n        ',(null as any));
    this._text_40 = this.renderer.createText(this._el_11,'\n\n    ',(null as any));
    this._text_41 = this.renderer.createText((null as any),'\n',(null as any));
    compView_9.create(this._Content_9_4.context,[
      ([] as any[]),
      ([] as any[]).concat([
        this._text_10,
        this._el_11,
        this._text_41
      ]
      ),
      ([] as any[])
    ]
    ,(null as any));
    this._text_42 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    this.init(([] as any[]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._text_6,
      this._text_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._el_11,
      this._text_12,
      this._el_13,
      this._text_14,
      this._el_15,
      this._text_16,
      this._el_17,
      this._text_18,
      this._el_19,
      this._text_20,
      this._text_21,
      this._el_22,
      this._text_23,
      this._text_24,
      this._text_25,
      this._text_26,
      this._el_27,
      this._text_28,
      this._el_29,
      this._text_30,
      this._el_31,
      this._text_32,
      this._el_33,
      this._text_34,
      this._text_35,
      this._el_36,
      this._text_37,
      this._text_38,
      this._text_39,
      this._text_40,
      this._text_41,
      this._text_42
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import24.ToolbarTitle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 5)))) { return this._ToolbarTitle_4_4.context; }
    if (((token === import25.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 6)))) { return this._Navbar_2_4.context; }
    if (((token === import20.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._Header_0_3.context; }
    if (((token === import26.CardTitle) && ((19 <= requestNodeIndex) && (requestNodeIndex <= 20)))) { return this._CardTitle_19_3.context; }
    if (((token === import26.CardContent) && ((17 <= requestNodeIndex) && (requestNodeIndex <= 24)))) { return this._CardContent_17_3.context; }
    if (((token === import26.Card) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 25)))) { return this._Card_13_3.context; }
    if (((token === import26.CardTitle) && ((33 <= requestNodeIndex) && (requestNodeIndex <= 34)))) { return this._CardTitle_33_3.context; }
    if (((token === import26.CardContent) && ((31 <= requestNodeIndex) && (requestNodeIndex <= 38)))) { return this._CardContent_31_3.context; }
    if (((token === import26.Card) && ((27 <= requestNodeIndex) && (requestNodeIndex <= 39)))) { return this._Card_27_3.context; }
    if (((token === import27.Content) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 41)))) { return this._Content_9_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._Header_0_3.detectChangesInternal(this,this._el_0,throwOnChange);
    this._Navbar_2_4.detectChangesInternal(this,this._el_2,throwOnChange);
    if (this._ToolbarTitle_4_4.detectChangesInternal(this,this._el_4,throwOnChange)) { this._appEl_4.componentView.markAsCheckOnce(); }
    if (this._Content_9_4.detectChangesInternal(this,this._el_9,throwOnChange)) { this._appEl_9.componentView.markAsCheckOnce(); }
    this._Card_13_3.detectChangesInternal(this,this._el_13,throwOnChange);
    this._CardContent_17_3.detectChangesInternal(this,this._el_17,throwOnChange);
    this._CardTitle_19_3.detectChangesInternal(this,this._el_19,throwOnChange);
    this._Card_27_3.detectChangesInternal(this,this._el_27,throwOnChange);
    this._CardContent_31_3.detectChangesInternal(this,this._el_31,throwOnChange);
    this._CardTitle_33_3.detectChangesInternal(this,this._el_33,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:any = this._Navbar_2_4.context._hidden;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setElementProperty(this._el_2,'hidden',currVal_0);
      this._expr_0 = currVal_0;
    }
    const currVal_1:any = this._Navbar_2_4.context._sbPadding;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementClass(this._el_2,'statusbar-padding',currVal_1);
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = this._Content_9_4.context._sbPadding;
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setElementClass(this._el_9,'statusbar-padding',currVal_2);
      this._expr_2 = currVal_2;
    }
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._Navbar_2_4.context.ngAfterViewInit(); } }
  }
  destroyInternal():void {
    this._Content_9_4.context.ngOnDestroy();
  }
}
export function viewFactory_BestList0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<import0.BestList> {
  if ((renderType_BestList === (null as any))) { (renderType_BestList = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,styles_BestList,{})); }
  return new _View_BestList0(viewUtils,parentInjector,declarationEl);
}