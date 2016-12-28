/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from './mysetting';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '../login.service';
import * as import9 from 'ionic-angular/navigation/nav-controller';
import * as import10 from '@angular/core/src/metadata/view';
import * as import11 from '@angular/core/src/linker/component_factory';
import * as import12 from '../../../node_modules/ionic-angular/components/toolbar/toolbar.ngfactory';
import * as import13 from '../../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import14 from '../../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import15 from '../../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import16 from 'ionic-angular/config/config';
import * as import17 from '@angular/core/src/linker/element_ref';
import * as import18 from 'ionic-angular/navigation/view-controller';
import * as import19 from 'ionic-angular/components/app/app';
import * as import20 from 'ionic-angular/components/toolbar/toolbar';
import * as import21 from 'ionic-angular/util/keyboard';
import * as import22 from '@angular/core/src/zone/ng_zone';
import * as import23 from 'ionic-angular/components/tabs/tabs';
import * as import24 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import25 from 'ionic-angular/components/navbar/navbar';
import * as import26 from 'ionic-angular/components/content/content';
export class Wrapper_MySettingPage {
  context:import0.MySettingPage;
  changed:boolean;
  constructor(p0:any,p1:any) {
    this.changed = false;
    this.context = new import0.MySettingPage(p0,p1);
  }
  detectChangesInternal(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this.changed;
    this.changed = false;
    return changed;
  }
}
var renderType_MySettingPage_Host:import2.RenderComponentType = (null as any);
class _View_MySettingPage_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _MySettingPage_0_4:Wrapper_MySettingPage;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_MySettingPage_Host0,renderType_MySettingPage_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = this.selectOrCreateHostElement('my-component',rootSelector,(null as any));
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_MySettingPage0(this.viewUtils,this.injector(0),this._appEl_0);
    this._MySettingPage_0_4 = new Wrapper_MySettingPage(this.parentInjector.get(import8.LoginService),this.parentInjector.get(import9.NavController));
    this._appEl_0.initComponent(this._MySettingPage_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._MySettingPage_0_4.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.MySettingPage) && (0 === requestNodeIndex))) { return this._MySettingPage_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._MySettingPage_0_4.detectChangesInternal(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_MySettingPage_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  if ((renderType_MySettingPage_Host === (null as any))) { (renderType_MySettingPage_Host = viewUtils.createRenderComponentType('',0,import10.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_MySettingPage_Host0(viewUtils,parentInjector,declarationEl);
}
export const MySettingPageNgFactory:import11.ComponentFactory<import0.MySettingPage> = new import11.ComponentFactory<import0.MySettingPage>('my-component',viewFactory_MySettingPage_Host0,import0.MySettingPage);
const styles_MySettingPage:any[] = ([] as any[]);
var renderType_MySettingPage:import2.RenderComponentType = (null as any);
class _View_MySettingPage0 extends import1.AppView<import0.MySettingPage> {
  _text_0:any;
  _el_1:any;
  _Header_1_3:import12.Wrapper_Header;
  _text_2:any;
  _el_3:any;
  /*private*/ _appEl_3:import3.AppElement;
  _Navbar_3_4:import13.Wrapper_Navbar;
  _text_4:any;
  _el_5:any;
  /*private*/ _appEl_5:import3.AppElement;
  _ToolbarTitle_5_4:import14.Wrapper_ToolbarTitle;
  _text_6:any;
  _text_7:any;
  _text_8:any;
  _text_9:any;
  _el_10:any;
  /*private*/ _appEl_10:import3.AppElement;
  _Content_10_4:import15.Wrapper_Content;
  _text_11:any;
  _el_12:any;
  _text_13:any;
  _el_14:any;
  _text_15:any;
  _el_16:any;
  _text_17:any;
  _el_18:any;
  _text_19:any;
  _el_20:any;
  _text_21:any;
  _el_22:any;
  _text_23:any;
  _text_24:any;
  _text_25:any;
  _el_26:any;
  _text_27:any;
  _el_28:any;
  _text_29:any;
  _text_30:any;
  _text_31:any;
  _text_32:any;
  _text_33:any;
  _text_34:any;
  _el_35:any;
  _text_36:any;
  _el_37:any;
  _text_38:any;
  _text_39:any;
  _text_40:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_MySettingPage0,renderType_MySettingPage,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'  ',(null as any));
    this._el_1 = this.renderer.createElement(parentRenderNode,'ion-header',(null as any));
    this._Header_1_3 = new import12.Wrapper_Header(this.parentInjector.get(import16.Config),new import17.ElementRef(this._el_1),this.renderer,this.parentInjector.get(import18.ViewController,(null as any)));
    this._text_2 = this.renderer.createText(this._el_1,'\n  ',(null as any));
    this._el_3 = this.renderer.createElement(this._el_1,'ion-navbar',(null as any));
    this.renderer.setElementAttribute(this._el_3,'class','toolbar');
    this._appEl_3 = new import3.AppElement(3,1,this,this._el_3);
    var compView_3:any = import13.viewFactory_Navbar0(this.viewUtils,this.injector(3),this._appEl_3);
    this._Navbar_3_4 = new import13.Wrapper_Navbar(this.parentInjector.get(import19.App),this.parentInjector.get(import18.ViewController,(null as any)),this.parentInjector.get(import9.NavController,(null as any)),this.parentInjector.get(import16.Config),new import17.ElementRef(this._el_3),this.renderer);
    this._appEl_3.initComponent(this._Navbar_3_4.context,([] as any[]),compView_3);
    this._text_4 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._el_5 = this.renderer.createElement((null as any),'ion-title',(null as any));
    this._appEl_5 = new import3.AppElement(5,3,this,this._el_5);
    var compView_5:any = import14.viewFactory_ToolbarTitle0(this.viewUtils,this.injector(5),this._appEl_5);
    this._ToolbarTitle_5_4 = new import14.Wrapper_ToolbarTitle(this.parentInjector.get(import16.Config),new import17.ElementRef(this._el_5),this.renderer,this.parentInjector.get(import20.Toolbar,(null as any)),this._Navbar_3_4.context);
    this._appEl_5.initComponent(this._ToolbarTitle_5_4.context,([] as any[]),compView_5);
    this._text_6 = this.renderer.createText((null as any),'\n      账户\n    ',(null as any));
    compView_5.create(this._ToolbarTitle_5_4.context,[([] as any[]).concat([this._text_6])],(null as any));
    this._text_7 = this.renderer.createText((null as any),'\n  ',(null as any));
    compView_3.create(this._Navbar_3_4.context,[
      ([] as any[]),
      ([] as any[]),
      ([] as any[]),
      ([] as any[]).concat([
        this._text_4,
        this._el_5,
        this._text_7
      ]
      )
    ]
    ,(null as any));
    this._text_8 = this.renderer.createText(this._el_1,'\n',(null as any));
    this._text_9 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this._el_10 = this.renderer.createElement(parentRenderNode,'ion-content',(null as any));
    this._appEl_10 = new import3.AppElement(10,(null as any),this,this._el_10);
    var compView_10:any = import15.viewFactory_Content0(this.viewUtils,this.injector(10),this._appEl_10);
    this._Content_10_4 = new import15.Wrapper_Content(this.parentInjector.get(import16.Config),new import17.ElementRef(this._el_10),this.renderer,this.parentInjector.get(import19.App),this.parentInjector.get(import21.Keyboard),this.parentInjector.get(import22.NgZone),this.parentInjector.get(import18.ViewController,(null as any)),this.parentInjector.get(import23.Tabs,(null as any)));
    this._appEl_10.initComponent(this._Content_10_4.context,([] as any[]),compView_10);
    this._text_11 = this.renderer.createText((null as any),'\n\n\n        ',(null as any));
    this._el_12 = this.renderer.createElement((null as any),'div',(null as any));
    this.renderer.setElementAttribute(this._el_12,'class','mui-content bgwh');
    this._text_13 = this.renderer.createText(this._el_12,'\n            ',(null as any));
    this._el_14 = this.renderer.createElement(this._el_12,'div',(null as any));
    this.renderer.setElementAttribute(this._el_14,'class','Line');
    this._text_15 = this.renderer.createText(this._el_12,'\n            ',(null as any));
    this._el_16 = this.renderer.createElement(this._el_12,'div',(null as any));
    this.renderer.setElementAttribute(this._el_16,'class','pct95 auto');
    this._text_17 = this.renderer.createText(this._el_16,'\n                ',(null as any));
    this._el_18 = this.renderer.createElement(this._el_16,'ul',(null as any));
    this.renderer.setElementAttribute(this._el_18,'class','mui-table-view');
    this._text_19 = this.renderer.createText(this._el_18,'\n                    ',(null as any));
    this._el_20 = this.renderer.createElement(this._el_18,'li',(null as any));
    this.renderer.setElementAttribute(this._el_20,'class','mui-table-view-cell');
    this._text_21 = this.renderer.createText(this._el_20,'\n                        ',(null as any));
    this._el_22 = this.renderer.createElement(this._el_20,'a',(null as any));
    this.renderer.setElementAttribute(this._el_22,'class','mui-navigate-right');
    this.renderer.setElementAttribute(this._el_22,'id','profile');
    this.renderer.setElementAttribute(this._el_22,'style','padding-left: 10px;');
    this._text_23 = this.renderer.createText(this._el_22,'\n                            个人资料\n                        ',(null as any));
    this._text_24 = this.renderer.createText(this._el_20,'\n                    ',(null as any));
    this._text_25 = this.renderer.createText(this._el_18,'\n                    ',(null as any));
    this._el_26 = this.renderer.createElement(this._el_18,'li',(null as any));
    this.renderer.setElementAttribute(this._el_26,'class','mui-table-view-cell');
    this._text_27 = this.renderer.createText(this._el_26,'\n                        ',(null as any));
    this._el_28 = this.renderer.createElement(this._el_26,'a',(null as any));
    this.renderer.setElementAttribute(this._el_28,'class','mui-navigate-right');
    this.renderer.setElementAttribute(this._el_28,'id','feedback');
    this.renderer.setElementAttribute(this._el_28,'style','padding-left: 10px;');
    this._text_29 = this.renderer.createText(this._el_28,'\n                        反馈建议\n                        ',(null as any));
    this._text_30 = this.renderer.createText(this._el_26,'\n                    ',(null as any));
    this._text_31 = this.renderer.createText(this._el_18,'\n                ',(null as any));
    this._text_32 = this.renderer.createText(this._el_16,'\n            ',(null as any));
    this._text_33 = this.renderer.createText(this._el_12,'\n            \n        ',(null as any));
    this._text_34 = this.renderer.createText((null as any),'\n        ',(null as any));
    this._el_35 = this.renderer.createElement((null as any),'div',(null as any));
    this.renderer.setElementAttribute(this._el_35,'style','position: absolute; left: 0; bottom: 50px; width: 80%; margin-left: 10%; text-align: center;');
    this._text_36 = this.renderer.createText(this._el_35,'\n            ',(null as any));
    this._el_37 = this.renderer.createElement(this._el_35,'span',(null as any));
    this.renderer.setElementAttribute(this._el_37,'class','Btn Btn_middle Btn_white Btn_radiusI');
    this.renderer.setElementAttribute(this._el_37,'id','quit_app');
    this.renderer.setElementAttribute(this._el_37,'tappable','');
    this._text_38 = this.renderer.createText(this._el_37,'退出登录',(null as any));
    this._text_39 = this.renderer.createText(this._el_35,'\n        ',(null as any));
    this._text_40 = this.renderer.createText((null as any),'\n\n',(null as any));
    compView_10.create(this._Content_10_4.context,[
      ([] as any[]),
      ([] as any[]).concat([
        this._text_11,
        this._el_12,
        this._text_34,
        this._el_35,
        this._text_40
      ]
      ),
      ([] as any[])
    ]
    ,(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_37,'click',this.eventHandler(this._handle_click_37_0.bind(this)));
    this.init(([] as any[]),[
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._text_7,
      this._text_8,
      this._text_9,
      this._el_10,
      this._text_11,
      this._el_12,
      this._text_13,
      this._el_14,
      this._text_15,
      this._el_16,
      this._text_17,
      this._el_18,
      this._text_19,
      this._el_20,
      this._text_21,
      this._el_22,
      this._text_23,
      this._text_24,
      this._text_25,
      this._el_26,
      this._text_27,
      this._el_28,
      this._text_29,
      this._text_30,
      this._text_31,
      this._text_32,
      this._text_33,
      this._text_34,
      this._el_35,
      this._text_36,
      this._el_37,
      this._text_38,
      this._text_39,
      this._text_40
    ]
    ,[disposable_0],([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import24.ToolbarTitle) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 6)))) { return this._ToolbarTitle_5_4.context; }
    if (((token === import25.Navbar) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._Navbar_3_4.context; }
    if (((token === import20.Header) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 8)))) { return this._Header_1_3.context; }
    if (((token === import26.Content) && ((10 <= requestNodeIndex) && (requestNodeIndex <= 40)))) { return this._Content_10_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._Header_1_3.detectChangesInternal(this,this._el_1,throwOnChange);
    this._Navbar_3_4.detectChangesInternal(this,this._el_3,throwOnChange);
    if (this._ToolbarTitle_5_4.detectChangesInternal(this,this._el_5,throwOnChange)) { this._appEl_5.componentView.markAsCheckOnce(); }
    if (this._Content_10_4.detectChangesInternal(this,this._el_10,throwOnChange)) { this._appEl_10.componentView.markAsCheckOnce(); }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:any = this._Navbar_3_4.context._hidden;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setElementProperty(this._el_3,'hidden',currVal_0);
      this._expr_0 = currVal_0;
    }
    const currVal_1:any = this._Navbar_3_4.context._sbPadding;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementClass(this._el_3,'statusbar-padding',currVal_1);
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = this._Content_10_4.context._sbPadding;
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setElementClass(this._el_10,'statusbar-padding',currVal_2);
      this._expr_2 = currVal_2;
    }
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._Navbar_3_4.context.ngAfterViewInit(); } }
  }
  destroyInternal():void {
    this._Content_10_4.context.ngOnDestroy();
  }
  private _handle_click_37_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context._quitApp()) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_MySettingPage0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<import0.MySettingPage> {
  if ((renderType_MySettingPage === (null as any))) { (renderType_MySettingPage = viewUtils.createRenderComponentType('',0,import10.ViewEncapsulation.None,styles_MySettingPage,{})); }
  return new _View_MySettingPage0(viewUtils,parentInjector,declarationEl);
}