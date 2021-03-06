/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from './home';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/navigation/nav-controller';
import * as import9 from './propagate.service';
import * as import10 from 'ionic-angular/components/popover/popover';
import * as import11 from 'ionic-angular/components/app/app';
import * as import12 from '@angular/core/src/metadata/view';
import * as import13 from '@angular/core/src/linker/component_factory';
import * as import14 from '../../node_modules/ionic-angular/components/toolbar/toolbar.ngfactory';
import * as import15 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import16 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import17 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import18 from '../../node_modules/ionic-angular/components/refresher/refresher.ngfactory';
import * as import19 from '../../node_modules/ionic-angular/components/refresher/refresher-content.ngfactory';
import * as import20 from '../../node_modules/ionic-angular/components/list/list.ngfactory';
import * as import21 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import22 from 'ionic-angular/config/config';
import * as import23 from '@angular/core/src/linker/element_ref';
import * as import24 from 'ionic-angular/navigation/view-controller';
import * as import25 from 'ionic-angular/components/toolbar/toolbar';
import * as import26 from 'ionic-angular/util/keyboard';
import * as import27 from '@angular/core/src/zone/ng_zone';
import * as import28 from 'ionic-angular/components/tabs/tabs';
import * as import29 from 'ionic-angular/gestures/gesture-controller';
import * as import30 from '@angular/core/src/linker/template_ref';
import * as import31 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import32 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import33 from 'ionic-angular/components/navbar/navbar';
import * as import34 from 'ionic-angular/components/refresher/refresher-content';
import * as import35 from 'ionic-angular/components/refresher/refresher';
import * as import36 from '@angular/common/src/directives/ng_for';
import * as import37 from 'ionic-angular/components/list/list';
import * as import38 from 'ionic-angular/components/content/content';
import * as import39 from '@angular/core/src/security';
import * as import40 from '../../node_modules/ionic-angular/components/card/card.ngfactory';
import * as import41 from '../../node_modules/ionic-angular/components/item/item.ngfactory';
import * as import42 from '@angular/core/src/linker/query_list';
import * as import43 from '../../node_modules/ionic-angular/components/badge/badge.ngfactory';
import * as import44 from 'ionic-angular/util/form';
import * as import45 from 'ionic-angular/components/item/item-reorder';
import * as import46 from 'ionic-angular/components/badge/badge';
import * as import47 from 'ionic-angular/components/item/item';
import * as import48 from 'ionic-angular/components/card/card';
export class Wrapper_HomePage {
  context:import0.HomePage;
  changed:boolean;
  constructor(p0:any,p1:any,p2:any,p3:any) {
    this.changed = false;
    this.context = new import0.HomePage(p0,p1,p2,p3);
  }
  detectChangesInternal(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this.changed;
    this.changed = false;
    if (!throwOnChange) { if ((view.numberOfChecks === 0)) { this.context.ngOnInit(); } }
    return changed;
  }
}
var renderType_HomePage_Host:import2.RenderComponentType = (null as any);
class _View_HomePage_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _HomePage_0_4:Wrapper_HomePage;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_HomePage_Host0,renderType_HomePage_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = this.selectOrCreateHostElement('page-home',rootSelector,(null as any));
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_HomePage0(this.viewUtils,this.injector(0),this._appEl_0);
    this._HomePage_0_4 = new Wrapper_HomePage(this.parentInjector.get(import8.NavController),this.parentInjector.get(import9.PropagateService),this.parentInjector.get(import10.PopoverController),this.parentInjector.get(import11.App));
    this._appEl_0.initComponent(this._HomePage_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._HomePage_0_4.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.HomePage) && (0 === requestNodeIndex))) { return this._HomePage_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._HomePage_0_4.detectChangesInternal(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_HomePage_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  if ((renderType_HomePage_Host === (null as any))) { (renderType_HomePage_Host = viewUtils.createRenderComponentType('',0,import12.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_HomePage_Host0(viewUtils,parentInjector,declarationEl);
}
export const HomePageNgFactory:import13.ComponentFactory<import0.HomePage> = new import13.ComponentFactory<import0.HomePage>('page-home',viewFactory_HomePage_Host0,import0.HomePage);
const styles_HomePage:any[] = ([] as any[]);
var renderType_HomePage:import2.RenderComponentType = (null as any);
class _View_HomePage0 extends import1.AppView<import0.HomePage> {
  _el_0:any;
  _Header_0_3:import14.Wrapper_Header;
  _text_1:any;
  _el_2:any;
  /*private*/ _appEl_2:import3.AppElement;
  _Navbar_2_4:import15.Wrapper_Navbar;
  _text_3:any;
  _el_4:any;
  /*private*/ _appEl_4:import3.AppElement;
  _ToolbarTitle_4_4:import16.Wrapper_ToolbarTitle;
  _text_5:any;
  _text_6:any;
  _text_7:any;
  _text_8:any;
  _el_9:any;
  /*private*/ _appEl_9:import3.AppElement;
  _Content_9_4:import17.Wrapper_Content;
  _text_10:any;
  _text_11:any;
  _el_12:any;
  _Refresher_12_3:import18.Wrapper_Refresher;
  _text_13:any;
  _el_14:any;
  /*private*/ _appEl_14:import3.AppElement;
  _RefresherContent_14_4:import19.Wrapper_RefresherContent;
  _text_15:any;
  _text_16:any;
  _el_17:any;
  _List_17_3:import20.Wrapper_List;
  _text_18:any;
  _anchor_19:any;
  /*private*/ _appEl_19:import3.AppElement;
  _TemplateRef_19_5:any;
  _NgFor_19_6:import21.Wrapper_NgFor;
  _text_20:any;
  _text_21:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_HomePage0,renderType_HomePage,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'ion-header',(null as any));
    this._Header_0_3 = new import14.Wrapper_Header(this.parentInjector.get(import22.Config),new import23.ElementRef(this._el_0),this.renderer,this.parentInjector.get(import24.ViewController,(null as any)));
    this._text_1 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'ion-navbar',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','toolbar');
    this._appEl_2 = new import3.AppElement(2,0,this,this._el_2);
    var compView_2:any = import15.viewFactory_Navbar0(this.viewUtils,this.injector(2),this._appEl_2);
    this._Navbar_2_4 = new import15.Wrapper_Navbar(this.parentInjector.get(import11.App),this.parentInjector.get(import24.ViewController,(null as any)),this.parentInjector.get(import8.NavController,(null as any)),this.parentInjector.get(import22.Config),new import23.ElementRef(this._el_2),this.renderer);
    this._appEl_2.initComponent(this._Navbar_2_4.context,([] as any[]),compView_2);
    this._text_3 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._el_4 = this.renderer.createElement((null as any),'ion-title',(null as any));
    this._appEl_4 = new import3.AppElement(4,2,this,this._el_4);
    var compView_4:any = import16.viewFactory_ToolbarTitle0(this.viewUtils,this.injector(4),this._appEl_4);
    this._ToolbarTitle_4_4 = new import16.Wrapper_ToolbarTitle(this.parentInjector.get(import22.Config),new import23.ElementRef(this._el_4),this.renderer,this.parentInjector.get(import25.Toolbar,(null as any)),this._Navbar_2_4.context);
    this._appEl_4.initComponent(this._ToolbarTitle_4_4.context,([] as any[]),compView_4);
    this._text_5 = this.renderer.createText((null as any),'\n      Ionic Blank\n    ',(null as any));
    compView_4.create(this._ToolbarTitle_4_4.context,[([] as any[]).concat([this._text_5])],(null as any));
    this._text_6 = this.renderer.createText((null as any),'\n  ',(null as any));
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
    this._text_8 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this._el_9 = this.renderer.createElement(parentRenderNode,'ion-content',(null as any));
    this._appEl_9 = new import3.AppElement(9,(null as any),this,this._el_9);
    var compView_9:any = import17.viewFactory_Content0(this.viewUtils,this.injector(9),this._appEl_9);
    this._Content_9_4 = new import17.Wrapper_Content(this.parentInjector.get(import22.Config),new import23.ElementRef(this._el_9),this.renderer,this.parentInjector.get(import11.App),this.parentInjector.get(import26.Keyboard),this.parentInjector.get(import27.NgZone),this.parentInjector.get(import24.ViewController,(null as any)),this.parentInjector.get(import28.Tabs,(null as any)));
    this._appEl_9.initComponent(this._Content_9_4.context,([] as any[]),compView_9);
    this._text_10 = this.renderer.createText((null as any),'\n\n  ',(null as any));
    this._text_11 = this.renderer.createText((null as any),'\n  ',(null as any));
    this._el_12 = this.renderer.createElement((null as any),'ion-refresher',(null as any));
    this._Refresher_12_3 = new import18.Wrapper_Refresher(this._Content_9_4.context,this.parentInjector.get(import27.NgZone),this.parentInjector.get(import29.GestureController));
    this._text_13 = this.renderer.createText(this._el_12,'\n    ',(null as any));
    this._el_14 = this.renderer.createElement(this._el_12,'ion-refresher-content',(null as any));
    this._appEl_14 = new import3.AppElement(14,12,this,this._el_14);
    var compView_14:any = import19.viewFactory_RefresherContent0(this.viewUtils,this.injector(14),this._appEl_14);
    this._RefresherContent_14_4 = new import19.Wrapper_RefresherContent(this._Refresher_12_3.context,this.parentInjector.get(import22.Config));
    this._appEl_14.initComponent(this._RefresherContent_14_4.context,([] as any[]),compView_14);
    compView_14.create(this._RefresherContent_14_4.context,([] as any[]),(null as any));
    this._text_15 = this.renderer.createText(this._el_12,'\n  ',(null as any));
    this._text_16 = this.renderer.createText((null as any),'\n  ',(null as any));
    this._el_17 = this.renderer.createElement((null as any),'ion-list',(null as any));
    this._List_17_3 = new import20.Wrapper_List(this.parentInjector.get(import22.Config),new import23.ElementRef(this._el_17),this.renderer,this.parentInjector.get(import29.GestureController));
    this._text_18 = this.renderer.createText(this._el_17,'\n    ',(null as any));
    this._anchor_19 = this.renderer.createTemplateAnchor(this._el_17,(null as any));
    this._appEl_19 = new import3.AppElement(19,17,this,this._anchor_19);
    this._TemplateRef_19_5 = new import30.TemplateRef_(this._appEl_19,viewFactory_HomePage1);
    this._NgFor_19_6 = new import21.Wrapper_NgFor(this._appEl_19.vcRef,this._TemplateRef_19_5,this.parentInjector.get(import31.IterableDiffers),this.ref);
    this._text_20 = this.renderer.createText(this._el_17,'\n  ',(null as any));
    this._text_21 = this.renderer.createText((null as any),'\n',(null as any));
    compView_9.create(this._Content_9_4.context,[
      ([] as any[]),
      ([] as any[]).concat([
        this._text_10,
        this._text_11,
        this._text_16,
        this._el_17,
        this._text_21
      ]
      ),
      ([] as any[]).concat([this._el_12])
    ]
    ,(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_12,'ionRefresh',this.eventHandler(this._handle_ionRefresh_12_0.bind(this)));
    this._expr_4 = import7.UNINITIALIZED;
    this._expr_5 = import7.UNINITIALIZED;
    const subscription_0:any = this._Refresher_12_3.context.ionRefresh.subscribe(this.eventHandler(this._handle_ionRefresh_12_0.bind(this)));
    this._expr_6 = import7.UNINITIALIZED;
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
      this._text_11,
      this._el_12,
      this._text_13,
      this._el_14,
      this._text_15,
      this._text_16,
      this._el_17,
      this._text_18,
      this._anchor_19,
      this._text_20,
      this._text_21
    ]
    ,[disposable_0],[subscription_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import32.ToolbarTitle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 5)))) { return this._ToolbarTitle_4_4.context; }
    if (((token === import33.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 6)))) { return this._Navbar_2_4.context; }
    if (((token === import25.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._Header_0_3.context; }
    if (((token === import34.RefresherContent) && (14 === requestNodeIndex))) { return this._RefresherContent_14_4.context; }
    if (((token === import35.Refresher) && ((12 <= requestNodeIndex) && (requestNodeIndex <= 15)))) { return this._Refresher_12_3.context; }
    if (((token === import30.TemplateRef) && (19 === requestNodeIndex))) { return this._TemplateRef_19_5; }
    if (((token === import36.NgFor) && (19 === requestNodeIndex))) { return this._NgFor_19_6.context; }
    if (((token === import37.List) && ((17 <= requestNodeIndex) && (requestNodeIndex <= 20)))) { return this._List_17_3.context; }
    if (((token === import38.Content) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 21)))) { return this._Content_9_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._Header_0_3.detectChangesInternal(this,this._el_0,throwOnChange);
    this._Navbar_2_4.detectChangesInternal(this,this._el_2,throwOnChange);
    if (this._ToolbarTitle_4_4.detectChangesInternal(this,this._el_4,throwOnChange)) { this._appEl_4.componentView.markAsCheckOnce(); }
    if (this._Content_9_4.detectChangesInternal(this,this._el_9,throwOnChange)) { this._appEl_9.componentView.markAsCheckOnce(); }
    this._Refresher_12_3.detectChangesInternal(this,this._el_12,throwOnChange);
    this._RefresherContent_14_4.detectChangesInternal(this,this._el_14,throwOnChange);
    this._List_17_3.detectChangesInternal(this,this._el_17,throwOnChange);
    const currVal_7:any = this.context.propagateList;
    this._NgFor_19_6.check_ngForOf(currVal_7,throwOnChange,false);
    this._NgFor_19_6.detectChangesInternal(this,this._anchor_19,throwOnChange);
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
    const currVal_4:any = (this._Refresher_12_3.context.state !== 'inactive');
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setElementClass(this._el_12,'refresher-active',currVal_4);
      this._expr_4 = currVal_4;
    }
    const currVal_5:any = this._Refresher_12_3.context._top;
    if (import4.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this.renderer.setElementStyle(this._el_12,'top',((this.viewUtils.sanitizer.sanitize(import39.SecurityContext.STYLE,currVal_5) == (null as any))? (null as any): this.viewUtils.sanitizer.sanitize(import39.SecurityContext.STYLE,currVal_5).toString()));
      this._expr_5 = currVal_5;
    }
    const currVal_6:any = this._RefresherContent_14_4.context.r.state;
    if (import4.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this.renderer.setElementAttribute(this._el_14,'state',((currVal_6 == (null as any))? (null as any): currVal_6.toString()));
      this._expr_6 = currVal_6;
    }
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._Navbar_2_4.context.ngAfterViewInit(); } }
  }
  destroyInternal():void {
    this._Refresher_12_3.context.ngOnDestroy();
    this._Content_9_4.context.ngOnDestroy();
  }
  private _handle_ionRefresh_12_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.doRefresh($event)) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_HomePage0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<import0.HomePage> {
  if ((renderType_HomePage === (null as any))) { (renderType_HomePage = viewUtils.createRenderComponentType('',0,import12.ViewEncapsulation.None,styles_HomePage,{})); }
  return new _View_HomePage0(viewUtils,parentInjector,declarationEl);
}
class _View_HomePage1 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _Card_2_3:import40.Wrapper_Card;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _el_6:any;
  /*private*/ _appEl_6:import3.AppElement;
  _Item_6_4:import41.Wrapper_Item;
  _ItemContent_6_5:import41.Wrapper_ItemContent;
  _query_Label_6_0:import42.QueryList<any>;
  _query_Button_6_1:import42.QueryList<any>;
  _query_Icon_6_2:import42.QueryList<any>;
  _text_7:any;
  _text_8:any;
  _el_9:any;
  _Badge_9_3:import43.Wrapper_Badge;
  _text_10:any;
  _text_11:any;
  _text_12:any;
  _el_13:any;
  _CardContent_13_3:import40.Wrapper_CardContent;
  _text_14:any;
  _el_15:any;
  _CardTitle_15_3:import40.Wrapper_CardTitle;
  _text_16:any;
  _text_17:any;
  _el_18:any;
  /*private*/ _appEl_18:import3.AppElement;
  _Item_18_4:import41.Wrapper_Item;
  _ItemContent_18_5:import41.Wrapper_ItemContent;
  _query_Label_18_0:import42.QueryList<any>;
  _query_Button_18_1:import42.QueryList<any>;
  _query_Icon_18_2:import42.QueryList<any>;
  _text_19:any;
  _el_20:any;
  _Badge_20_3:import43.Wrapper_Badge;
  _text_21:any;
  _text_22:any;
  _text_23:any;
  _el_24:any;
  _text_25:any;
  _text_26:any;
  _text_27:any;
  _text_28:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_5:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_HomePage1,renderType_HomePage,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'li',(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n      ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'ion-card',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','clear-box');
    this._Card_2_3 = new import40.Wrapper_Card(this.parent.parentInjector.get(import22.Config),new import23.ElementRef(this._el_2),this.renderer);
    this._text_3 = this.renderer.createText(this._el_2,'\n\n        ',(null as any));
    this._el_4 = this.renderer.createElement(this._el_2,'img',(null as any));
    this.renderer.setElementAttribute(this._el_4,'class','image-height');
    this._text_5 = this.renderer.createText(this._el_2,'\n\n        ',(null as any));
    this._el_6 = this.renderer.createElement(this._el_2,'ion-item',(null as any));
    this.renderer.setElementAttribute(this._el_6,'class','clean-padding title-size item item-block');
    this._appEl_6 = new import3.AppElement(6,2,this,this._el_6);
    var compView_6:any = import41.viewFactory_Item0(this.viewUtils,this.injector(6),this._appEl_6);
    this._Item_6_4 = new import41.Wrapper_Item(this.parent.parentInjector.get(import44.Form),this.parent.parentInjector.get(import22.Config),new import23.ElementRef(this._el_6),this.renderer,this.parent.parentInjector.get(import45.ItemReorder,(null as any)));
    this._ItemContent_6_5 = new import41.Wrapper_ItemContent();
    this._query_Label_6_0 = new import42.QueryList<any>();
    this._query_Button_6_1 = new import42.QueryList<any>();
    this._query_Icon_6_2 = new import42.QueryList<any>();
    this._appEl_6.initComponent(this._Item_6_4.context,([] as any[]),compView_6);
    this._text_7 = this.renderer.createText((null as any),'\n          ',(null as any));
    this._text_8 = this.renderer.createText((null as any),'',(null as any));
    this._el_9 = this.renderer.createElement((null as any),'ion-badge',(null as any));
    this.renderer.setElementAttribute(this._el_9,'item-right','');
    this._Badge_9_3 = new import43.Wrapper_Badge(this.parent.parentInjector.get(import22.Config),new import23.ElementRef(this._el_9),this.renderer);
    this._text_10 = this.renderer.createText(this._el_9,'分享',(null as any));
    this._text_11 = this.renderer.createText((null as any),'\n        ',(null as any));
    this._query_Label_6_0.reset(([] as any[]));
    this._Item_6_4.context.contentLabel = this._query_Label_6_0.first;
    compView_6.create(this._Item_6_4.context,[
      ([] as any[]),
      ([] as any[]),
      ([] as any[]).concat([
        this._text_7,
        this._text_8,
        this._text_11
      ]
      ),
      ([] as any[]),
      ([] as any[]).concat([this._el_9])
    ]
    ,(null as any));
    this._text_12 = this.renderer.createText(this._el_2,'\n\n        ',(null as any));
    this._el_13 = this.renderer.createElement(this._el_2,'ion-card-content',(null as any));
    this.renderer.setElementAttribute(this._el_13,'class','clean-padding');
    this._CardContent_13_3 = new import40.Wrapper_CardContent(this.parent.parentInjector.get(import22.Config),new import23.ElementRef(this._el_13),this.renderer);
    this._text_14 = this.renderer.createText(this._el_13,'\n          ',(null as any));
    this._el_15 = this.renderer.createElement(this._el_13,'ion-card-title',(null as any));
    this._CardTitle_15_3 = new import40.Wrapper_CardTitle(this.parent.parentInjector.get(import22.Config),new import23.ElementRef(this._el_15),this.renderer);
    this._text_16 = this.renderer.createText(this._el_15,'',(null as any));
    this._text_17 = this.renderer.createText(this._el_13,'\n          ',(null as any));
    this._el_18 = this.renderer.createElement(this._el_13,'ion-item',(null as any));
    this.renderer.setElementAttribute(this._el_18,'class','title-size item item-block');
    this._appEl_18 = new import3.AppElement(18,13,this,this._el_18);
    var compView_18:any = import41.viewFactory_Item0(this.viewUtils,this.injector(18),this._appEl_18);
    this._Item_18_4 = new import41.Wrapper_Item(this.parent.parentInjector.get(import44.Form),this.parent.parentInjector.get(import22.Config),new import23.ElementRef(this._el_18),this.renderer,this.parent.parentInjector.get(import45.ItemReorder,(null as any)));
    this._ItemContent_18_5 = new import41.Wrapper_ItemContent();
    this._query_Label_18_0 = new import42.QueryList<any>();
    this._query_Button_18_1 = new import42.QueryList<any>();
    this._query_Icon_18_2 = new import42.QueryList<any>();
    this._appEl_18.initComponent(this._Item_18_4.context,([] as any[]),compView_18);
    this._text_19 = this.renderer.createText((null as any),'\n            课程介绍：\n            ',(null as any));
    this._el_20 = this.renderer.createElement((null as any),'ion-badge',(null as any));
    this.renderer.setElementAttribute(this._el_20,'item-right','');
    this._Badge_20_3 = new import43.Wrapper_Badge(this.parent.parentInjector.get(import22.Config),new import23.ElementRef(this._el_20),this.renderer);
    this._text_21 = this.renderer.createText(this._el_20,'v',(null as any));
    this._text_22 = this.renderer.createText((null as any),'\n          ',(null as any));
    this._query_Label_18_0.reset(([] as any[]));
    this._Item_18_4.context.contentLabel = this._query_Label_18_0.first;
    compView_18.create(this._Item_18_4.context,[
      ([] as any[]),
      ([] as any[]),
      ([] as any[]).concat([
        this._text_19,
        this._text_22
      ]
      ),
      ([] as any[]),
      ([] as any[]).concat([this._el_20])
    ]
    ,(null as any));
    this._text_23 = this.renderer.createText(this._el_13,'\n          ',(null as any));
    this._el_24 = this.renderer.createElement(this._el_13,'p',(null as any));
    this.renderer.setElementAttribute(this._el_24,'class','box-line');
    this._text_25 = this.renderer.createText(this._el_24,'',(null as any));
    this._text_26 = this.renderer.createText(this._el_13,'\n        ',(null as any));
    this._text_27 = this.renderer.createText(this._el_2,'\n      ',(null as any));
    this._text_28 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_9,'click',this.eventHandler(this._handle_click_9_0.bind(this)));
    this._expr_3 = import7.UNINITIALIZED;
    var disposable_1:Function = this.renderer.listen(this._el_20,'click',this.eventHandler(this._handle_click_20_0.bind(this)));
    this._expr_5 = import7.UNINITIALIZED;
    this.init(([] as any[]).concat([this._el_0]),[
      this._el_0,
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
      this._text_12,
      this._el_13,
      this._text_14,
      this._el_15,
      this._text_16,
      this._text_17,
      this._el_18,
      this._text_19,
      this._el_20,
      this._text_21,
      this._text_22,
      this._text_23,
      this._el_24,
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
    if (((token === import46.Badge) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 10)))) { return this._Badge_9_3.context; }
    if (((token === import47.Item) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 11)))) { return this._Item_6_4.context; }
    if (((token === import47.ItemContent) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 11)))) { return this._ItemContent_6_5.context; }
    if (((token === import48.CardTitle) && ((15 <= requestNodeIndex) && (requestNodeIndex <= 16)))) { return this._CardTitle_15_3.context; }
    if (((token === import46.Badge) && ((20 <= requestNodeIndex) && (requestNodeIndex <= 21)))) { return this._Badge_20_3.context; }
    if (((token === import47.Item) && ((18 <= requestNodeIndex) && (requestNodeIndex <= 22)))) { return this._Item_18_4.context; }
    if (((token === import47.ItemContent) && ((18 <= requestNodeIndex) && (requestNodeIndex <= 22)))) { return this._ItemContent_18_5.context; }
    if (((token === import48.CardContent) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 26)))) { return this._CardContent_13_3.context; }
    if (((token === import48.Card) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 27)))) { return this._Card_2_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._Card_2_3.detectChangesInternal(this,this._el_2,throwOnChange);
    if (this._Item_6_4.detectChangesInternal(this,this._el_6,throwOnChange)) { this._appEl_6.componentView.markAsCheckOnce(); }
    this._ItemContent_6_5.detectChangesInternal(this,this._el_6,throwOnChange);
    this._Badge_9_3.detectChangesInternal(this,this._el_9,throwOnChange);
    this._CardContent_13_3.detectChangesInternal(this,this._el_13,throwOnChange);
    this._CardTitle_15_3.detectChangesInternal(this,this._el_15,throwOnChange);
    if (this._Item_18_4.detectChangesInternal(this,this._el_18,throwOnChange)) { this._appEl_18.componentView.markAsCheckOnce(); }
    this._ItemContent_18_5.detectChangesInternal(this,this._el_18,throwOnChange);
    this._Badge_20_3.detectChangesInternal(this,this._el_20,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    if (!throwOnChange) {
      if (this._query_Button_6_1.dirty) {
        this._query_Button_6_1.reset(([] as any[]));
        this._Item_6_4.context._buttons = this._query_Button_6_1;
        this._query_Button_6_1.notifyOnChanges();
      }
      if (this._query_Icon_6_2.dirty) {
        this._query_Icon_6_2.reset(([] as any[]));
        this._Item_6_4.context._icons = this._query_Icon_6_2;
        this._query_Icon_6_2.notifyOnChanges();
      }
      if (this._query_Button_18_1.dirty) {
        this._query_Button_18_1.reset(([] as any[]));
        this._Item_18_4.context._buttons = this._query_Button_18_1;
        this._query_Button_18_1.notifyOnChanges();
      }
      if (this._query_Icon_18_2.dirty) {
        this._query_Icon_18_2.reset(([] as any[]));
        this._Item_18_4.context._icons = this._query_Icon_18_2;
        this._query_Icon_18_2.notifyOnChanges();
      }
      if ((this.numberOfChecks === 0)) { this._Item_6_4.context.ngAfterContentInit(); }
      if ((this.numberOfChecks === 0)) { this._Item_18_4.context.ngAfterContentInit(); }
    }
    const currVal_0:any = import4.interpolate(1,'',this.context.$implicit.livePicUrl,'');
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setElementProperty(this._el_4,'src',this.viewUtils.sanitizer.sanitize(import39.SecurityContext.URL,currVal_0));
      this._expr_0 = currVal_0;
    }
    const currVal_1:any = import4.interpolate(1,'\n          ',this.context.$implicit.liveNm,'\n          ');
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setText(this._text_8,currVal_1);
      this._expr_1 = currVal_1;
    }
    const currVal_3:any = import4.interpolate(1,'\n            ',this.context.$implicit.tchr,'\n          ');
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setText(this._text_16,currVal_3);
      this._expr_3 = currVal_3;
    }
    const currVal_5:any = import4.interpolate(1,'\n            ',this.context.$implicit.liveIntr,'\n          ');
    if (import4.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this.renderer.setText(this._text_25,currVal_5);
      this._expr_5 = currVal_5;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_click_9_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.context.onShareClick(this.context.$implicit)) !== false);
    return (true && pd_0);
  }
  private _handle_click_20_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.context.onShareClick(this.context.$implicit)) !== false);
    return (true && pd_0);
  }
}
function viewFactory_HomePage1(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  return new _View_HomePage1(viewUtils,parentInjector,declarationEl);
}