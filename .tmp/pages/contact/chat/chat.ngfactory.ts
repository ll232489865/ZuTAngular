/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from './chat';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/navigation/nav-controller';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from '../../../node_modules/ionic-angular/components/toolbar/toolbar.ngfactory';
import * as import12 from '../../../node_modules/@angular/common/src/directives/ng_class.ngfactory';
import * as import13 from '../../../node_modules/ionic-angular/components/icon/icon.ngfactory';
import * as import14 from '../../../node_modules/@angular/common/src/directives/ng_switch.ngfactory';
import * as import15 from '@angular/core/src/linker/template_ref';
import * as import16 from 'ionic-angular/config/config';
import * as import17 from '@angular/core/src/linker/element_ref';
import * as import18 from 'ionic-angular/navigation/view-controller';
import * as import19 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import20 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import21 from '@angular/common/src/directives/ng_class';
import * as import22 from 'ionic-angular/components/icon/icon';
import * as import23 from '@angular/common/src/directives/ng_switch';
import * as import24 from 'ionic-angular/components/toolbar/toolbar';
import * as import25 from '@angular/core/src/security';
import * as import26 from '../../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import27 from '../../../node_modules/ionic-angular/components/menu/menu-toggle.ngfactory';
import * as import28 from '../../../node_modules/ionic-angular/components/toolbar/toolbar-item.ngfactory';
import * as import29 from '@angular/core/src/linker/query_list';
import * as import30 from '../../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import31 from 'ionic-angular/components/app/app';
import * as import32 from 'ionic-angular/components/menu/menu-controller';
import * as import33 from 'ionic-angular/components/menu/menu-toggle';
import * as import34 from 'ionic-angular/components/toolbar/toolbar-item';
import * as import35 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import36 from 'ionic-angular/components/navbar/navbar';
import * as import37 from '../../../node_modules/@angular/forms/src/directives/default_value_accessor.ngfactory';
import * as import38 from '../../../node_modules/@angular/forms/src/directives/ng_model.ngfactory';
import * as import39 from '../../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import40 from '@angular/forms/src/directives/default_value_accessor';
import * as import41 from '@angular/forms/src/directives/control_value_accessor';
import * as import42 from '@angular/forms/src/directives/ng_model';
import * as import43 from '@angular/forms/src/directives/ng_control';
import * as import44 from '@angular/forms/src/directives/ng_control_status';
export class Wrapper_Chat {
  context:import0.Chat;
  changed:boolean;
  changes:{[key: string]:any};
  constructor(p0:any) {
    this.changed = false;
    this.changes = {};
    this.context = new import0.Chat(p0);
  }
  detectChangesInternal(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this.changed;
    this.changed = false;
    if (!throwOnChange) {
      if (changed) {
        this.context.ngOnChanges(this.changes);
        this.changes = {};
      }
      if ((view.numberOfChecks === 0)) { this.context.ngOnInit(); }
    }
    return changed;
  }
}
var renderType_Chat_Host:import2.RenderComponentType = (null as any);
class _View_Chat_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _Chat_0_4:Wrapper_Chat;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_Chat_Host0,renderType_Chat_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = this.selectOrCreateHostElement('chat-component',rootSelector,(null as any));
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_Chat0(this.viewUtils,this.injector(0),this._appEl_0);
    this._Chat_0_4 = new Wrapper_Chat(this.parentInjector.get(import8.NavController));
    this._appEl_0.initComponent(this._Chat_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._Chat_0_4.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.Chat) && (0 === requestNodeIndex))) { return this._Chat_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._Chat_0_4.detectChangesInternal(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_Chat_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  if ((renderType_Chat_Host === (null as any))) { (renderType_Chat_Host = viewUtils.createRenderComponentType('',0,import9.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_Chat_Host0(viewUtils,parentInjector,declarationEl);
}
export const ChatNgFactory:import10.ComponentFactory<import0.Chat> = new import10.ComponentFactory<import0.Chat>('chat-component',viewFactory_Chat_Host0,import0.Chat);
const styles_Chat:any[] = ([] as any[]);
var renderType_Chat:import2.RenderComponentType = (null as any);
class _View_Chat0 extends import1.AppView<import0.Chat> {
  _anchor_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _TemplateRef_0_4:any;
  _text_1:any;
  _el_2:any;
  _Footer_2_3:import11.Wrapper_Footer;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _el_6:any;
  _text_7:any;
  _text_8:any;
  _el_9:any;
  _NgClass_9_3:import12.Wrapper_NgClass;
  _Icon_9_4:import13.Wrapper_Icon;
  _text_10:any;
  _text_11:any;
  _el_12:any;
  _NgSwitch_12_3:import14.Wrapper_NgSwitch;
  _text_13:any;
  _anchor_14:any;
  /*private*/ _appEl_14:import3.AppElement;
  _TemplateRef_14_5:any;
  _NgSwitchCase_14_6:import14.Wrapper_NgSwitchCase;
  _text_15:any;
  _text_16:any;
  _anchor_17:any;
  /*private*/ _appEl_17:import3.AppElement;
  _TemplateRef_17_5:any;
  _NgSwitchCase_17_6:import14.Wrapper_NgSwitchCase;
  _text_18:any;
  _text_19:any;
  _el_20:any;
  _text_21:any;
  _text_22:any;
  _el_23:any;
  _Icon_23_3:import13.Wrapper_Icon;
  _text_24:any;
  _text_25:any;
  _text_26:any;
  _text_27:any;
  _text_28:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_12:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_Chat0,renderType_Chat,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._anchor_0 = this.renderer.createTemplateAnchor(parentRenderNode,(null as any));
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._anchor_0);
    this._TemplateRef_0_4 = new import15.TemplateRef_(this._appEl_0,viewFactory_Chat1);
    this._text_1 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this._el_2 = this.renderer.createElement(parentRenderNode,'ion-footer',(null as any));
    this.renderer.setElementAttribute(this._el_2,'id','footbar');
    this._Footer_2_3 = new import11.Wrapper_Footer(this.parentInjector.get(import16.Config),new import17.ElementRef(this._el_2),this.renderer,this.parentInjector.get(import18.ViewController,(null as any)));
    this._text_3 = this.renderer.createText(this._el_2,'\n  ',(null as any));
    this._el_4 = this.renderer.createElement(this._el_2,'footer',(null as any));
    this.renderer.setElementAttribute(this._el_4,'class','foot_area');
    this._text_5 = this.renderer.createText(this._el_4,'\n      ',(null as any));
    this._el_6 = this.renderer.createElement(this._el_4,'div',(null as any));
    this.renderer.setElementAttribute(this._el_6,'class','footer-left');
    this.renderer.setElementAttribute(this._el_6,'id','footer-left');
    this._text_7 = this.renderer.createText(this._el_6,'\n          ',(null as any));
    this._text_8 = this.renderer.createText(this._el_6,'\n          ',(null as any));
    this._el_9 = this.renderer.createElement(this._el_6,'ion-icon',(null as any));
    this.renderer.setElementAttribute(this._el_9,'ios','ios-camera-outline');
    this.renderer.setElementAttribute(this._el_9,'md','md-camera');
    this.renderer.setElementAttribute(this._el_9,'role','img');
    this._NgClass_9_3 = new import12.Wrapper_NgClass(this.parentInjector.get(import19.IterableDiffers),this.parentInjector.get(import20.KeyValueDiffers),new import17.ElementRef(this._el_9),this.renderer);
    this._Icon_9_4 = new import13.Wrapper_Icon(this.parentInjector.get(import16.Config),new import17.ElementRef(this._el_9),this.renderer);
    this._text_10 = this.renderer.createText(this._el_6,'\n      ',(null as any));
    this._text_11 = this.renderer.createText(this._el_4,'\n      ',(null as any));
    this._el_12 = this.renderer.createElement(this._el_4,'div',(null as any));
    this.renderer.setElementAttribute(this._el_12,'class','footer-center');
    this._NgSwitch_12_3 = new import14.Wrapper_NgSwitch();
    this._text_13 = this.renderer.createText(this._el_12,'\n          ',(null as any));
    this._anchor_14 = this.renderer.createTemplateAnchor(this._el_12,(null as any));
    this._appEl_14 = new import3.AppElement(14,12,this,this._anchor_14);
    this._TemplateRef_14_5 = new import15.TemplateRef_(this._appEl_14,viewFactory_Chat2);
    this._NgSwitchCase_14_6 = new import14.Wrapper_NgSwitchCase(this._appEl_14.vcRef,this._TemplateRef_14_5,this._NgSwitch_12_3.context);
    this._text_15 = this.renderer.createText(this._el_12,' \n          ',(null as any));
    this._text_16 = this.renderer.createText(this._el_12,'\n          ',(null as any));
    this._anchor_17 = this.renderer.createTemplateAnchor(this._el_12,(null as any));
    this._appEl_17 = new import3.AppElement(17,12,this,this._anchor_17);
    this._TemplateRef_17_5 = new import15.TemplateRef_(this._appEl_17,viewFactory_Chat3);
    this._NgSwitchCase_17_6 = new import14.Wrapper_NgSwitchCase(this._appEl_17.vcRef,this._TemplateRef_17_5,this._NgSwitch_12_3.context);
    this._text_18 = this.renderer.createText(this._el_12,'\n      ',(null as any));
    this._text_19 = this.renderer.createText(this._el_4,'\n      ',(null as any));
    this._el_20 = this.renderer.createElement(this._el_4,'span',(null as any));
    this.renderer.setElementAttribute(this._el_20,'class','footer-right');
    this._text_21 = this.renderer.createText(this._el_20,'\n          ',(null as any));
    this._text_22 = this.renderer.createText(this._el_20,'\n\n          ',(null as any));
    this._el_23 = this.renderer.createElement(this._el_20,'ion-icon',(null as any));
    this.renderer.setElementAttribute(this._el_23,'id','msg-type');
    this.renderer.setElementAttribute(this._el_23,'md','md-mic');
    this.renderer.setElementAttribute(this._el_23,'role','img');
    this.renderer.setElementAttribute(this._el_23,'style','font-size: 2.4rem;');
    this._Icon_23_3 = new import13.Wrapper_Icon(this.parentInjector.get(import16.Config),new import17.ElementRef(this._el_23),this.renderer);
    this._text_24 = this.renderer.createText(this._el_20,' \n          ',(null as any));
    this._text_25 = this.renderer.createText(this._el_20,'\n      ',(null as any));
    this._text_26 = this.renderer.createText(this._el_4,'\n  ',(null as any));
    this._text_27 = this.renderer.createText(this._el_2,'\n',(null as any));
    this._text_28 = this.renderer.createText(parentRenderNode,'\n\n\n',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_6,'click',this.eventHandler(this._handle_click_6_0.bind(this)));
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_5 = import7.UNINITIALIZED;
    var disposable_1:Function = this.renderer.listen(this._el_20,'click',this.eventHandler(this._handle_click_20_0.bind(this)));
    this._expr_12 = import7.UNINITIALIZED;
    this.init(([] as any[]),[
      this._anchor_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._text_11,
      this._el_12,
      this._text_13,
      this._anchor_14,
      this._text_15,
      this._text_16,
      this._anchor_17,
      this._text_18,
      this._text_19,
      this._el_20,
      this._text_21,
      this._text_22,
      this._el_23,
      this._text_24,
      this._text_25,
      this._text_26,
      this._text_27,
      this._text_28
    ]
    ,[
      disposable_0,
      disposable_1
    ]
    ,([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import15.TemplateRef) && (0 === requestNodeIndex))) { return this._TemplateRef_0_4; }
    if (((token === import21.NgClass) && (9 === requestNodeIndex))) { return this._NgClass_9_3.context; }
    if (((token === import22.Icon) && (9 === requestNodeIndex))) { return this._Icon_9_4.context; }
    if (((token === import15.TemplateRef) && (14 === requestNodeIndex))) { return this._TemplateRef_14_5; }
    if (((token === import23.NgSwitchCase) && (14 === requestNodeIndex))) { return this._NgSwitchCase_14_6.context; }
    if (((token === import15.TemplateRef) && (17 === requestNodeIndex))) { return this._TemplateRef_17_5; }
    if (((token === import23.NgSwitchCase) && (17 === requestNodeIndex))) { return this._NgSwitchCase_17_6.context; }
    if (((token === import23.NgSwitch) && ((12 <= requestNodeIndex) && (requestNodeIndex <= 18)))) { return this._NgSwitch_12_3.context; }
    if (((token === import22.Icon) && (23 === requestNodeIndex))) { return this._Icon_23_3.context; }
    if (((token === import24.Footer) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 27)))) { return this._Footer_2_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._Footer_2_3.detectChangesInternal(this,this._el_2,throwOnChange);
    const currVal_2:any = this.context.setInfoModule();
    this._NgClass_9_3.check_ngClass(currVal_2,throwOnChange,false);
    this._NgClass_9_3.detectChangesInternal(this,this._el_9,throwOnChange);
    const currVal_3:any = 'ios-camera-outline';
    this._Icon_9_4.check_ios(currVal_3,throwOnChange,false);
    const currVal_4:any = 'md-camera';
    this._Icon_9_4.check_md(currVal_4,throwOnChange,false);
    this._Icon_9_4.detectChangesInternal(this,this._el_9,throwOnChange);
    const currVal_6:any = this.context.chatChoice;
    this._NgSwitch_12_3.check_ngSwitch(currVal_6,throwOnChange,false);
    this._NgSwitch_12_3.detectChangesInternal(this,this._el_12,throwOnChange);
    const currVal_7:any = 'text';
    this._NgSwitchCase_14_6.check_ngSwitchCase(currVal_7,throwOnChange,false);
    this._NgSwitchCase_14_6.detectChangesInternal(this,this._anchor_14,throwOnChange);
    const currVal_8:any = 'vedio';
    this._NgSwitchCase_17_6.check_ngSwitchCase(currVal_8,throwOnChange,false);
    this._NgSwitchCase_17_6.detectChangesInternal(this,this._anchor_17,throwOnChange);
    const currVal_10:any = this.context.leftIcon;
    this._Icon_23_3.check_ios(currVal_10,throwOnChange,false);
    const currVal_11:any = 'md-mic';
    this._Icon_23_3.check_md(currVal_11,throwOnChange,false);
    this._Icon_23_3.detectChangesInternal(this,this._el_23,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_1:any = (this.context.fontSizeBoolean? '16px': '3rem');
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementStyle(this._el_9,'font-size',((this.viewUtils.sanitizer.sanitize(import25.SecurityContext.STYLE,currVal_1) == (null as any))? (null as any): this.viewUtils.sanitizer.sanitize(import25.SecurityContext.STYLE,currVal_1).toString()));
      this._expr_1 = currVal_1;
    }
    const currVal_5:any = this._Icon_9_4.context._hidden;
    if (import4.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this.renderer.setElementClass(this._el_9,'hide',currVal_5);
      this._expr_5 = currVal_5;
    }
    const currVal_12:any = this._Icon_23_3.context._hidden;
    if (import4.checkBinding(throwOnChange,this._expr_12,currVal_12)) {
      this.renderer.setElementClass(this._el_23,'hide',currVal_12);
      this._expr_12 = currVal_12;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._Icon_9_4.context.ngOnDestroy();
    this._Icon_23_3.context.ngOnDestroy();
  }
  private _handle_click_6_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.clickFooterLeft(this._el_9)) !== false);
    return (true && pd_0);
  }
  private _handle_click_20_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.clickFooterRight(this._el_23)) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_Chat0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<import0.Chat> {
  if ((renderType_Chat === (null as any))) { (renderType_Chat = viewUtils.createRenderComponentType('',0,import9.ViewEncapsulation.None,styles_Chat,{})); }
  return new _View_Chat0(viewUtils,parentInjector,declarationEl);
}
class _View_Chat1 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _Navbar_0_4:import26.Wrapper_Navbar;
  _text_1:any;
  _el_2:any;
  _MenuToggle_2_3:import27.Wrapper_MenuToggle;
  _ToolbarItem_2_4:import28.Wrapper_ToolbarItem;
  _query_Button_2_0:import29.QueryList<any>;
  _text_3:any;
  _el_4:any;
  _Icon_4_3:import13.Wrapper_Icon;
  _text_5:any;
  _text_6:any;
  _el_7:any;
  /*private*/ _appEl_7:import3.AppElement;
  _ToolbarTitle_7_4:import30.Wrapper_ToolbarTitle;
  _text_8:any;
  _text_9:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_6:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_Chat1,renderType_Chat,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'ion-navbar',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','toolbar');
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = import26.viewFactory_Navbar0(this.viewUtils,this.injector(0),this._appEl_0);
    this._Navbar_0_4 = new import26.Wrapper_Navbar(this.parentInjector.get(import31.App),this.parentInjector.get(import18.ViewController,(null as any)),this.parentInjector.get(import8.NavController,(null as any)),this.parentInjector.get(import16.Config),new import17.ElementRef(this._el_0),this.renderer);
    this._appEl_0.initComponent(this._Navbar_0_4.context,([] as any[]),compView_0);
    this._text_1 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._el_2 = this.renderer.createElement((null as any),'button',(null as any));
    this.renderer.setElementAttribute(this._el_2,'menuToggle','');
    this._MenuToggle_2_3 = new import27.Wrapper_MenuToggle(this.parentInjector.get(import32.MenuController),new import17.ElementRef(this._el_2),this.parentInjector.get(import18.ViewController,(null as any)),this._Navbar_0_4.context);
    this._ToolbarItem_2_4 = new import28.Wrapper_ToolbarItem(this.parentInjector.get(import16.Config),new import17.ElementRef(this._el_2),this.renderer,this.parentInjector.get(import24.Toolbar,(null as any)),this._Navbar_0_4.context);
    this._query_Button_2_0 = new import29.QueryList<any>();
    this._text_3 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._el_4 = this.renderer.createElement(this._el_2,'ion-icon',(null as any));
    this.renderer.setElementAttribute(this._el_4,'name','menu');
    this.renderer.setElementAttribute(this._el_4,'role','img');
    this._Icon_4_3 = new import13.Wrapper_Icon(this.parentInjector.get(import16.Config),new import17.ElementRef(this._el_4),this.renderer);
    this._text_5 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._text_6 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._el_7 = this.renderer.createElement((null as any),'ion-title',(null as any));
    this._appEl_7 = new import3.AppElement(7,0,this,this._el_7);
    var compView_7:any = import30.viewFactory_ToolbarTitle0(this.viewUtils,this.injector(7),this._appEl_7);
    this._ToolbarTitle_7_4 = new import30.Wrapper_ToolbarTitle(this.parentInjector.get(import16.Config),new import17.ElementRef(this._el_7),this.renderer,this.parentInjector.get(import24.Toolbar,(null as any)),this._Navbar_0_4.context);
    this._appEl_7.initComponent(this._ToolbarTitle_7_4.context,([] as any[]),compView_7);
    this._text_8 = this.renderer.createText((null as any),'Chat',(null as any));
    compView_7.create(this._ToolbarTitle_7_4.context,[([] as any[]).concat([this._text_8])],(null as any));
    this._text_9 = this.renderer.createText((null as any),'\n',(null as any));
    compView_0.create(this._Navbar_0_4.context,[
      ([] as any[]).concat([this._el_2]),
      ([] as any[]),
      ([] as any[]),
      ([] as any[]).concat([
        this._text_1,
        this._text_6,
        this._el_7,
        this._text_9
      ]
      )
    ]
    ,(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_2,'click',this.eventHandler(this._handle_click_2_0.bind(this)));
    this._expr_4 = import7.UNINITIALIZED;
    this._expr_6 = import7.UNINITIALIZED;
    this.init(([] as any[]).concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._text_6,
      this._el_7,
      this._text_8,
      this._text_9
    ]
    ,[disposable_0],([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import22.Icon) && (4 === requestNodeIndex))) { return this._Icon_4_3.context; }
    if (((token === import33.MenuToggle) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 5)))) { return this._MenuToggle_2_3.context; }
    if (((token === import34.ToolbarItem) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 5)))) { return this._ToolbarItem_2_4.context; }
    if (((token === import35.ToolbarTitle) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 8)))) { return this._ToolbarTitle_7_4.context; }
    if (((token === import36.Navbar) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 9)))) { return this._Navbar_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._Navbar_0_4.detectChangesInternal(this,this._el_0,throwOnChange);
    const currVal_3:any = '';
    this._MenuToggle_2_3.check_menuToggle(currVal_3,throwOnChange,false);
    this._MenuToggle_2_3.detectChangesInternal(this,this._el_2,throwOnChange);
    this._ToolbarItem_2_4.detectChangesInternal(this,this._el_2,throwOnChange);
    const currVal_5:any = 'menu';
    this._Icon_4_3.check_name(currVal_5,throwOnChange,false);
    this._Icon_4_3.detectChangesInternal(this,this._el_4,throwOnChange);
    if (this._ToolbarTitle_7_4.detectChangesInternal(this,this._el_7,throwOnChange)) { this._appEl_7.componentView.markAsCheckOnce(); }
    this.detectContentChildrenChanges(throwOnChange);
    if (!throwOnChange) { if (this._query_Button_2_0.dirty) {
      this._query_Button_2_0.reset(([] as any[]));
      this._ToolbarItem_2_4.context._buttons = this._query_Button_2_0;
      this._query_Button_2_0.notifyOnChanges();
    } }
    const currVal_0:any = this._Navbar_0_4.context._hidden;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setElementProperty(this._el_0,'hidden',currVal_0);
      this._expr_0 = currVal_0;
    }
    const currVal_1:any = this._Navbar_0_4.context._sbPadding;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementClass(this._el_0,'statusbar-padding',currVal_1);
      this._expr_1 = currVal_1;
    }
    const currVal_4:any = this._MenuToggle_2_3.context.isHidden;
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setElementProperty(this._el_2,'hidden',currVal_4);
      this._expr_4 = currVal_4;
    }
    const currVal_6:any = this._Icon_4_3.context._hidden;
    if (import4.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this.renderer.setElementClass(this._el_4,'hide',currVal_6);
      this._expr_6 = currVal_6;
    }
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._Navbar_0_4.context.ngAfterViewInit(); } }
  }
  destroyInternal():void {
    this._Icon_4_3.context.ngOnDestroy();
  }
  private _handle_click_2_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._MenuToggle_2_3.context.toggle()) !== false);
    return (true && pd_0);
  }
}
function viewFactory_Chat1(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  return new _View_Chat1(viewUtils,parentInjector,declarationEl);
}
class _View_Chat2 extends import1.AppView<any> {
  _el_0:any;
  _DefaultValueAccessor_0_3:import37.Wrapper_DefaultValueAccessor;
  _NG_VALUE_ACCESSOR_0_4:any[];
  _NgModel_0_5:import38.Wrapper_NgModel;
  _NgControl_0_6:any;
  _NgControlStatus_0_7:import39.Wrapper_NgControlStatus;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  /*private*/ _expr_8:any;
  /*private*/ _expr_9:any;
  /*private*/ _expr_10:any;
  /*private*/ _expr_11:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_Chat2,renderType_Chat,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'textarea',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','input-text');
    this.renderer.setElementAttribute(this._el_0,'id','msg-text');
    this.renderer.setElementAttribute(this._el_0,'type','text');
    this._DefaultValueAccessor_0_3 = new import37.Wrapper_DefaultValueAccessor(this.renderer,new import17.ElementRef(this._el_0));
    this._NG_VALUE_ACCESSOR_0_4 = [this._DefaultValueAccessor_0_3.context];
    this._NgModel_0_5 = new import38.Wrapper_NgModel((null as any),(null as any),(null as any),this._NG_VALUE_ACCESSOR_0_4);
    this._NgControl_0_6 = this._NgModel_0_5.context;
    this._NgControlStatus_0_7 = new import39.Wrapper_NgControlStatus(this._NgControl_0_6);
    var disposable_0:Function = this.renderer.listen(this._el_0,'input',this.eventHandler(this._handle_input_0_0.bind(this)));
    var disposable_1:Function = this.renderer.listen(this._el_0,'ngModelChange',this.eventHandler(this._handle_ngModelChange_0_1.bind(this)));
    var disposable_2:Function = this.renderer.listen(this._el_0,'blur',this.eventHandler(this._handle_blur_0_2.bind(this)));
    const subscription_0:any = this._NgModel_0_5.context.update.subscribe(this.eventHandler(this._handle_ngModelChange_0_1.bind(this)));
    this._expr_6 = import7.UNINITIALIZED;
    this._expr_7 = import7.UNINITIALIZED;
    this._expr_8 = import7.UNINITIALIZED;
    this._expr_9 = import7.UNINITIALIZED;
    this._expr_10 = import7.UNINITIALIZED;
    this._expr_11 = import7.UNINITIALIZED;
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],[
      disposable_0,
      disposable_1,
      disposable_2
    ]
    ,[subscription_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import40.DefaultValueAccessor) && (0 === requestNodeIndex))) { return this._DefaultValueAccessor_0_3.context; }
    if (((token === import41.NG_VALUE_ACCESSOR) && (0 === requestNodeIndex))) { return this._NG_VALUE_ACCESSOR_0_4; }
    if (((token === import42.NgModel) && (0 === requestNodeIndex))) { return this._NgModel_0_5.context; }
    if (((token === import43.NgControl) && (0 === requestNodeIndex))) { return this._NgControl_0_6; }
    if (((token === import44.NgControlStatus) && (0 === requestNodeIndex))) { return this._NgControlStatus_0_7.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._DefaultValueAccessor_0_3.detectChangesInternal(this,this._el_0,throwOnChange);
    const currVal_5:any = this.parent.context.value;
    this._NgModel_0_5.check_model(currVal_5,throwOnChange,false);
    this._NgModel_0_5.detectChangesInternal(this,this._el_0,throwOnChange);
    this._NgControlStatus_0_7.detectChangesInternal(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_6:any = this._NgControlStatus_0_7.context.ngClassUntouched;
    if (import4.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this.renderer.setElementClass(this._el_0,'ng-untouched',currVal_6);
      this._expr_6 = currVal_6;
    }
    const currVal_7:any = this._NgControlStatus_0_7.context.ngClassTouched;
    if (import4.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      this.renderer.setElementClass(this._el_0,'ng-touched',currVal_7);
      this._expr_7 = currVal_7;
    }
    const currVal_8:any = this._NgControlStatus_0_7.context.ngClassPristine;
    if (import4.checkBinding(throwOnChange,this._expr_8,currVal_8)) {
      this.renderer.setElementClass(this._el_0,'ng-pristine',currVal_8);
      this._expr_8 = currVal_8;
    }
    const currVal_9:any = this._NgControlStatus_0_7.context.ngClassDirty;
    if (import4.checkBinding(throwOnChange,this._expr_9,currVal_9)) {
      this.renderer.setElementClass(this._el_0,'ng-dirty',currVal_9);
      this._expr_9 = currVal_9;
    }
    const currVal_10:any = this._NgControlStatus_0_7.context.ngClassValid;
    if (import4.checkBinding(throwOnChange,this._expr_10,currVal_10)) {
      this.renderer.setElementClass(this._el_0,'ng-valid',currVal_10);
      this._expr_10 = currVal_10;
    }
    const currVal_11:any = this._NgControlStatus_0_7.context.ngClassInvalid;
    if (import4.checkBinding(throwOnChange,this._expr_11,currVal_11)) {
      this.renderer.setElementClass(this._el_0,'ng-invalid',currVal_11);
      this._expr_11 = currVal_11;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._NgModel_0_5.context.ngOnDestroy();
  }
  private _handle_input_0_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.context.onInput(this._el_0)) !== false);
    const pd_1:any = ((<any>this._DefaultValueAccessor_0_3.context.onChange($event.target.value)) !== false);
    return ((true && pd_0) && pd_1);
  }
  private _handle_ngModelChange_0_1($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>(this.parent.context.value = $event)) !== false);
    return (true && pd_0);
  }
  private _handle_blur_0_2($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.context.setBlur(this._el_0)) !== false);
    const pd_1:any = ((<any>this._DefaultValueAccessor_0_3.context.onTouched()) !== false);
    return ((true && pd_0) && pd_1);
  }
}
function viewFactory_Chat2(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  return new _View_Chat2(viewUtils,parentInjector,declarationEl);
}
class _View_Chat3 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_Chat3,renderType_Chat,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'button',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','input-sound');
    this.renderer.setElementAttribute(this._el_0,'id','msg-sound');
    this.renderer.setElementAttribute(this._el_0,'type','button');
    this._text_1 = this.renderer.createText(this._el_0,'按住说话',(null as any));
    this.init(([] as any[]).concat([this._el_0]),[
      this._el_0,
      this._text_1
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
}
function viewFactory_Chat3(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  return new _View_Chat3(viewUtils,parentInjector,declarationEl);
}