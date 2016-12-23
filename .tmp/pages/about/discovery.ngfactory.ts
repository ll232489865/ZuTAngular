/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from './discovery';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/components/app/app';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from '../../node_modules/ionic-angular/components/toolbar/toolbar.ngfactory';
import * as import12 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import13 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import14 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import15 from '../../node_modules/ionic-angular/components/slides/slides.ngfactory';
import * as import16 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import17 from '../../node_modules/ionic-angular/components/card/card.ngfactory';
import * as import18 from 'ionic-angular/config/config';
import * as import19 from '@angular/core/src/linker/element_ref';
import * as import20 from 'ionic-angular/navigation/view-controller';
import * as import21 from 'ionic-angular/navigation/nav-controller';
import * as import22 from 'ionic-angular/components/toolbar/toolbar';
import * as import23 from 'ionic-angular/util/keyboard';
import * as import24 from '@angular/core/src/zone/ng_zone';
import * as import25 from 'ionic-angular/components/tabs/tabs';
import * as import26 from '@angular/core/src/linker/template_ref';
import * as import27 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import28 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import29 from 'ionic-angular/components/navbar/navbar';
import * as import30 from '@angular/common/src/directives/ng_for';
import * as import31 from 'ionic-angular/components/slides/slides';
import * as import32 from 'ionic-angular/components/card/card';
import * as import33 from 'ionic-angular/components/content/content';
import * as import34 from '@angular/core/src/security';
export class Wrapper_Discovery {
  context:import0.Discovery;
  changed:boolean;
  constructor(p0:any) {
    this.changed = false;
    this.context = new import0.Discovery(p0);
  }
  detectChangesInternal(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this.changed;
    this.changed = false;
    return changed;
  }
}
var renderType_Discovery_Host:import2.RenderComponentType = (null as any);
class _View_Discovery_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _Discovery_0_4:Wrapper_Discovery;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_Discovery_Host0,renderType_Discovery_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = this.selectOrCreateHostElement('page-discovery',rootSelector,(null as any));
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_Discovery0(this.viewUtils,this.injector(0),this._appEl_0);
    this._Discovery_0_4 = new Wrapper_Discovery(this.parentInjector.get(import8.App));
    this._appEl_0.initComponent(this._Discovery_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._Discovery_0_4.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.Discovery) && (0 === requestNodeIndex))) { return this._Discovery_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._Discovery_0_4.detectChangesInternal(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_Discovery_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  if ((renderType_Discovery_Host === (null as any))) { (renderType_Discovery_Host = viewUtils.createRenderComponentType('',0,import9.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_Discovery_Host0(viewUtils,parentInjector,declarationEl);
}
export const DiscoveryNgFactory:import10.ComponentFactory<import0.Discovery> = new import10.ComponentFactory<import0.Discovery>('page-discovery',viewFactory_Discovery_Host0,import0.Discovery);
const styles_Discovery:any[] = ([] as any[]);
var renderType_Discovery:import2.RenderComponentType = (null as any);
class _View_Discovery0 extends import1.AppView<import0.Discovery> {
  _el_0:any;
  _Header_0_3:import11.Wrapper_Header;
  _text_1:any;
  _el_2:any;
  /*private*/ _appEl_2:import3.AppElement;
  _Navbar_2_4:import12.Wrapper_Navbar;
  _text_3:any;
  _el_4:any;
  /*private*/ _appEl_4:import3.AppElement;
  _ToolbarTitle_4_4:import13.Wrapper_ToolbarTitle;
  _text_5:any;
  _text_6:any;
  _text_7:any;
  _text_8:any;
  _el_9:any;
  /*private*/ _appEl_9:import3.AppElement;
  _Content_9_4:import14.Wrapper_Content;
  _text_10:any;
  _el_11:any;
  _text_12:any;
  _el_13:any;
  /*private*/ _appEl_13:import3.AppElement;
  _Slides_13_4:import15.Wrapper_Slides;
  _text_14:any;
  _anchor_15:any;
  /*private*/ _appEl_15:import3.AppElement;
  _TemplateRef_15_5:any;
  _NgFor_15_6:import16.Wrapper_NgFor;
  _text_16:any;
  _el_17:any;
  /*private*/ _appEl_17:import3.AppElement;
  _Slide_17_4:import15.Wrapper_Slide;
  _text_18:any;
  _el_19:any;
  _text_20:any;
  _text_21:any;
  _text_22:any;
  _text_23:any;
  _text_24:any;
  _el_25:any;
  _text_26:any;
  _anchor_27:any;
  /*private*/ _appEl_27:import3.AppElement;
  _TemplateRef_27_5:any;
  _NgFor_27_6:import16.Wrapper_NgFor;
  _text_28:any;
  _text_29:any;
  _el_30:any;
  _text_31:any;
  _el_32:any;
  _text_33:any;
  _el_34:any;
  _Card_34_3:import17.Wrapper_Card;
  _text_35:any;
  _el_36:any;
  _text_37:any;
  _el_38:any;
  _CardContent_38_3:import17.Wrapper_CardContent;
  _text_39:any;
  _text_40:any;
  _el_41:any;
  _text_42:any;
  _text_43:any;
  _text_44:any;
  _text_45:any;
  _text_46:any;
  _el_47:any;
  _text_48:any;
  _el_49:any;
  _Card_49_3:import17.Wrapper_Card;
  _text_50:any;
  _el_51:any;
  _text_52:any;
  _el_53:any;
  _CardContent_53_3:import17.Wrapper_CardContent;
  _text_54:any;
  _text_55:any;
  _el_56:any;
  _text_57:any;
  _text_58:any;
  _text_59:any;
  _text_60:any;
  _text_61:any;
  _text_62:any;
  _text_63:any;
  _text_64:any;
  _text_65:any;
  _text_66:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_Discovery0,renderType_Discovery,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'ion-header',(null as any));
    this._Header_0_3 = new import11.Wrapper_Header(this.parentInjector.get(import18.Config),new import19.ElementRef(this._el_0),this.renderer,this.parentInjector.get(import20.ViewController,(null as any)));
    this._text_1 = this.renderer.createText(this._el_0,'\n	',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'ion-navbar',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','toolbar');
    this._appEl_2 = new import3.AppElement(2,0,this,this._el_2);
    var compView_2:any = import12.viewFactory_Navbar0(this.viewUtils,this.injector(2),this._appEl_2);
    this._Navbar_2_4 = new import12.Wrapper_Navbar(this.parentInjector.get(import8.App),this.parentInjector.get(import20.ViewController,(null as any)),this.parentInjector.get(import21.NavController,(null as any)),this.parentInjector.get(import18.Config),new import19.ElementRef(this._el_2),this.renderer);
    this._appEl_2.initComponent(this._Navbar_2_4.context,([] as any[]),compView_2);
    this._text_3 = this.renderer.createText((null as any),'\n		',(null as any));
    this._el_4 = this.renderer.createElement((null as any),'ion-title',(null as any));
    this._appEl_4 = new import3.AppElement(4,2,this,this._el_4);
    var compView_4:any = import13.viewFactory_ToolbarTitle0(this.viewUtils,this.injector(4),this._appEl_4);
    this._ToolbarTitle_4_4 = new import13.Wrapper_ToolbarTitle(this.parentInjector.get(import18.Config),new import19.ElementRef(this._el_4),this.renderer,this.parentInjector.get(import22.Toolbar,(null as any)),this._Navbar_2_4.context);
    this._appEl_4.initComponent(this._ToolbarTitle_4_4.context,([] as any[]),compView_4);
    this._text_5 = this.renderer.createText((null as any),'\n			Ionic Blank\n		',(null as any));
    compView_4.create(this._ToolbarTitle_4_4.context,[([] as any[]).concat([this._text_5])],(null as any));
    this._text_6 = this.renderer.createText((null as any),'\n	',(null as any));
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
    this.renderer.setElementAttribute(this._el_9,'class','tutorial-page');
    this._appEl_9 = new import3.AppElement(9,(null as any),this,this._el_9);
    var compView_9:any = import14.viewFactory_Content0(this.viewUtils,this.injector(9),this._appEl_9);
    this._Content_9_4 = new import14.Wrapper_Content(this.parentInjector.get(import18.Config),new import19.ElementRef(this._el_9),this.renderer,this.parentInjector.get(import8.App),this.parentInjector.get(import23.Keyboard),this.parentInjector.get(import24.NgZone),this.parentInjector.get(import20.ViewController,(null as any)),this.parentInjector.get(import25.Tabs,(null as any)));
    this._appEl_9.initComponent(this._Content_9_4.context,([] as any[]),compView_9);
    this._text_10 = this.renderer.createText((null as any),'\n',(null as any));
    this._el_11 = this.renderer.createElement((null as any),'div',(null as any));
    this.renderer.setElementAttribute(this._el_11,'style','height: 165px');
    this._text_12 = this.renderer.createText(this._el_11,'\n	',(null as any));
    this._el_13 = this.renderer.createElement(this._el_11,'ion-slides',(null as any));
    this.renderer.setElementAttribute(this._el_13,'pager','');
    this._appEl_13 = new import3.AppElement(13,11,this,this._el_13);
    var compView_13:any = import15.viewFactory_Slides0(this.viewUtils,this.injector(13),this._appEl_13);
    this._Slides_13_4 = new import15.Wrapper_Slides(this.parentInjector.get(import18.Config),new import19.ElementRef(this._el_13),this.renderer);
    this._appEl_13.initComponent(this._Slides_13_4.context,([] as any[]),compView_13);
    this._text_14 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._anchor_15 = this.renderer.createTemplateAnchor((null as any),(null as any));
    this._appEl_15 = new import3.AppElement(15,13,this,this._anchor_15);
    this._TemplateRef_15_5 = new import26.TemplateRef_(this._appEl_15,viewFactory_Discovery1);
    this._NgFor_15_6 = new import16.Wrapper_NgFor(this._appEl_15.vcRef,this._TemplateRef_15_5,this.parentInjector.get(import27.IterableDiffers),this.ref);
    this._text_16 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._el_17 = this.renderer.createElement((null as any),'ion-slide',(null as any));
    this._appEl_17 = new import3.AppElement(17,13,this,this._el_17);
    var compView_17:any = import15.viewFactory_Slide0(this.viewUtils,this.injector(17),this._appEl_17);
    this._Slide_17_4 = new import15.Wrapper_Slide(new import19.ElementRef(this._el_17),this._Slides_13_4.context);
    this._appEl_17.initComponent(this._Slide_17_4.context,([] as any[]),compView_17);
    this._text_18 = this.renderer.createText((null as any),'\n      ',(null as any));
    this._el_19 = this.renderer.createElement((null as any),'img',(null as any));
    this.renderer.setElementAttribute(this._el_19,'class','slide-image');
    this.renderer.setElementAttribute(this._el_19,'src','assets/img/titles.jpg');
    this._text_20 = this.renderer.createText((null as any),'\n    ',(null as any));
      compView_17.create(this._Slide_17_4.context,[([] as any[]).concat([
        this._text_18,
        this._el_19,
        this._text_20
      ]
    )],(null as any));
    this._text_21 = this.renderer.createText((null as any),'\n  ',(null as any));
      compView_13.create(this._Slides_13_4.context,[([] as any[]).concat([
        this._text_14,
        this._appEl_15,
        this._text_16,
        this._el_17,
        this._text_21
      ]
    )],(null as any));
    this._text_22 = this.renderer.createText(this._el_11,'\n',(null as any));
    this._text_23 = this.renderer.createText((null as any),'\n\n',(null as any));
    this._text_24 = this.renderer.createText((null as any),' \n\n',(null as any));
    this._el_25 = this.renderer.createElement((null as any),'div',(null as any));
    this.renderer.setElementAttribute(this._el_25,'style','width: 100%;display: inline-flex;');
    this._text_26 = this.renderer.createText(this._el_25,'\n	',(null as any));
    this._anchor_27 = this.renderer.createTemplateAnchor(this._el_25,(null as any));
    this._appEl_27 = new import3.AppElement(27,25,this,this._anchor_27);
    this._TemplateRef_27_5 = new import26.TemplateRef_(this._appEl_27,viewFactory_Discovery2);
    this._NgFor_27_6 = new import16.Wrapper_NgFor(this._appEl_27.vcRef,this._TemplateRef_27_5,this.parentInjector.get(import27.IterableDiffers),this.ref);
    this._text_28 = this.renderer.createText(this._el_25,'\n',(null as any));
    this._text_29 = this.renderer.createText((null as any),'\n\n',(null as any));
    this._el_30 = this.renderer.createElement((null as any),'div',(null as any));
    this.renderer.setElementAttribute(this._el_30,'style','display: inline-flex;');
    this._text_31 = this.renderer.createText(this._el_30,'\n	',(null as any));
    this._el_32 = this.renderer.createElement(this._el_30,'div',(null as any));
    this.renderer.setElementAttribute(this._el_32,'style','width: 50%');
    this._text_33 = this.renderer.createText(this._el_32,'\n		',(null as any));
    this._el_34 = this.renderer.createElement(this._el_32,'ion-card',(null as any));
    this._Card_34_3 = new import17.Wrapper_Card(this.parentInjector.get(import18.Config),new import19.ElementRef(this._el_34),this.renderer);
    this._text_35 = this.renderer.createText(this._el_34,'\n		  ',(null as any));
    this._el_36 = this.renderer.createElement(this._el_34,'img',(null as any));
    this.renderer.setElementAttribute(this._el_36,'src','assets/img/advance-card-alaska.jpg');
    this._text_37 = this.renderer.createText(this._el_34,'\n		  ',(null as any));
    this._el_38 = this.renderer.createElement(this._el_34,'ion-card-content',(null as any));
    this._CardContent_38_3 = new import17.Wrapper_CardContent(this.parentInjector.get(import18.Config),new import19.ElementRef(this._el_38),this.renderer);
    this._text_39 = this.renderer.createText(this._el_38,'\n		    ',(null as any));
    this._text_40 = this.renderer.createText(this._el_38,'\n		    ',(null as any));
    this._el_41 = this.renderer.createElement(this._el_38,'p',(null as any));
    this.renderer.setElementAttribute(this._el_41,'style','padding:0 0');
    this._text_42 = this.renderer.createText(this._el_41,'\n		      第1章内容详情\n		    ',(null as any));
    this._text_43 = this.renderer.createText(this._el_38,'\n		  ',(null as any));
    this._text_44 = this.renderer.createText(this._el_34,'\n		',(null as any));
    this._text_45 = this.renderer.createText(this._el_32,'\n	',(null as any));
    this._text_46 = this.renderer.createText(this._el_30,'\n	',(null as any));
    this._el_47 = this.renderer.createElement(this._el_30,'div',(null as any));
    this.renderer.setElementAttribute(this._el_47,'style','width: 50%');
    this._text_48 = this.renderer.createText(this._el_47,'\n		',(null as any));
    this._el_49 = this.renderer.createElement(this._el_47,'ion-card',(null as any));
    this._Card_49_3 = new import17.Wrapper_Card(this.parentInjector.get(import18.Config),new import19.ElementRef(this._el_49),this.renderer);
    this._text_50 = this.renderer.createText(this._el_49,'\n		  ',(null as any));
    this._el_51 = this.renderer.createElement(this._el_49,'img',(null as any));
    this.renderer.setElementAttribute(this._el_51,'src','assets/img/advance-card-alaska.jpg');
    this._text_52 = this.renderer.createText(this._el_49,'\n		  ',(null as any));
    this._el_53 = this.renderer.createElement(this._el_49,'ion-card-content',(null as any));
    this._CardContent_53_3 = new import17.Wrapper_CardContent(this.parentInjector.get(import18.Config),new import19.ElementRef(this._el_53),this.renderer);
    this._text_54 = this.renderer.createText(this._el_53,'\n		    ',(null as any));
    this._text_55 = this.renderer.createText(this._el_53,'\n		    ',(null as any));
    this._el_56 = this.renderer.createElement(this._el_53,'p',(null as any));
    this.renderer.setElementAttribute(this._el_56,'style','padding:0 0');
    this._text_57 = this.renderer.createText(this._el_56,'\n		      第2章内容详情\n		    ',(null as any));
    this._text_58 = this.renderer.createText(this._el_53,'\n		  ',(null as any));
    this._text_59 = this.renderer.createText(this._el_49,'\n		',(null as any));
    this._text_60 = this.renderer.createText(this._el_47,'\n\n	',(null as any));
    this._text_61 = this.renderer.createText(this._el_30,'\n',(null as any));
    this._text_62 = this.renderer.createText((null as any),'\n\n\n\n\n\n\n',(null as any));
    this._text_63 = this.renderer.createText((null as any),'\n\n',(null as any));
    this._text_64 = this.renderer.createText((null as any),'\n',(null as any));
    this._text_65 = this.renderer.createText((null as any),'\n\n    \n\n	',(null as any));
    this._text_66 = this.renderer.createText((null as any),'\n\n',(null as any));
    compView_9.create(this._Content_9_4.context,[
      ([] as any[]),
      ([] as any[]).concat([
        this._text_10,
        this._el_11,
        this._text_23,
        this._text_24,
        this._el_25,
        this._text_29,
        this._el_30,
        this._text_62,
        this._text_63,
        this._text_64,
        this._text_65,
        this._text_66
      ]
      ),
      ([] as any[])
    ]
    ,(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_36,'click',this.eventHandler(this._handle_click_36_0.bind(this)));
    var disposable_1:Function = this.renderer.listen(this._el_51,'click',this.eventHandler(this._handle_click_51_0.bind(this)));
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
      this._anchor_15,
      this._text_16,
      this._el_17,
      this._text_18,
      this._el_19,
      this._text_20,
      this._text_21,
      this._text_22,
      this._text_23,
      this._text_24,
      this._el_25,
      this._text_26,
      this._anchor_27,
      this._text_28,
      this._text_29,
      this._el_30,
      this._text_31,
      this._el_32,
      this._text_33,
      this._el_34,
      this._text_35,
      this._el_36,
      this._text_37,
      this._el_38,
      this._text_39,
      this._text_40,
      this._el_41,
      this._text_42,
      this._text_43,
      this._text_44,
      this._text_45,
      this._text_46,
      this._el_47,
      this._text_48,
      this._el_49,
      this._text_50,
      this._el_51,
      this._text_52,
      this._el_53,
      this._text_54,
      this._text_55,
      this._el_56,
      this._text_57,
      this._text_58,
      this._text_59,
      this._text_60,
      this._text_61,
      this._text_62,
      this._text_63,
      this._text_64,
      this._text_65,
      this._text_66
    ]
    ,[
      disposable_0,
      disposable_1
    ]
    ,([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import28.ToolbarTitle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 5)))) { return this._ToolbarTitle_4_4.context; }
    if (((token === import29.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 6)))) { return this._Navbar_2_4.context; }
    if (((token === import22.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._Header_0_3.context; }
    if (((token === import26.TemplateRef) && (15 === requestNodeIndex))) { return this._TemplateRef_15_5; }
    if (((token === import30.NgFor) && (15 === requestNodeIndex))) { return this._NgFor_15_6.context; }
    if (((token === import31.Slide) && ((17 <= requestNodeIndex) && (requestNodeIndex <= 20)))) { return this._Slide_17_4.context; }
    if (((token === import31.Slides) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 21)))) { return this._Slides_13_4.context; }
    if (((token === import26.TemplateRef) && (27 === requestNodeIndex))) { return this._TemplateRef_27_5; }
    if (((token === import30.NgFor) && (27 === requestNodeIndex))) { return this._NgFor_27_6.context; }
    if (((token === import32.CardContent) && ((38 <= requestNodeIndex) && (requestNodeIndex <= 43)))) { return this._CardContent_38_3.context; }
    if (((token === import32.Card) && ((34 <= requestNodeIndex) && (requestNodeIndex <= 44)))) { return this._Card_34_3.context; }
    if (((token === import32.CardContent) && ((53 <= requestNodeIndex) && (requestNodeIndex <= 58)))) { return this._CardContent_53_3.context; }
    if (((token === import32.Card) && ((49 <= requestNodeIndex) && (requestNodeIndex <= 59)))) { return this._Card_49_3.context; }
    if (((token === import33.Content) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 66)))) { return this._Content_9_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._Header_0_3.detectChangesInternal(this,this._el_0,throwOnChange);
    this._Navbar_2_4.detectChangesInternal(this,this._el_2,throwOnChange);
    if (this._ToolbarTitle_4_4.detectChangesInternal(this,this._el_4,throwOnChange)) { this._appEl_4.componentView.markAsCheckOnce(); }
    if (this._Content_9_4.detectChangesInternal(this,this._el_9,throwOnChange)) { this._appEl_9.componentView.markAsCheckOnce(); }
    const currVal_3:any = '';
    this._Slides_13_4.check_pager(currVal_3,throwOnChange,false);
    if (this._Slides_13_4.detectChangesInternal(this,this._el_13,throwOnChange)) { this._appEl_13.componentView.markAsCheckOnce(); }
    const currVal_4:any = this.context.slides;
    this._NgFor_15_6.check_ngForOf(currVal_4,throwOnChange,false);
    this._NgFor_15_6.detectChangesInternal(this,this._anchor_15,throwOnChange);
    if (this._Slide_17_4.detectChangesInternal(this,this._el_17,throwOnChange)) { this._appEl_17.componentView.markAsCheckOnce(); }
    const currVal_5:any = this.context._imgs;
    this._NgFor_27_6.check_ngForOf(currVal_5,throwOnChange,false);
    this._NgFor_27_6.detectChangesInternal(this,this._anchor_27,throwOnChange);
    this._Card_34_3.detectChangesInternal(this,this._el_34,throwOnChange);
    this._CardContent_38_3.detectChangesInternal(this,this._el_38,throwOnChange);
    this._Card_49_3.detectChangesInternal(this,this._el_49,throwOnChange);
    this._CardContent_53_3.detectChangesInternal(this,this._el_53,throwOnChange);
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
    this._Slide_17_4.context.ngOnDestroy();
    this._Content_9_4.context.ngOnDestroy();
  }
  private _handle_click_36_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.firstClick()) !== false);
    return (true && pd_0);
  }
  private _handle_click_51_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.firstClick()) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_Discovery0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<import0.Discovery> {
  if ((renderType_Discovery === (null as any))) { (renderType_Discovery = viewUtils.createRenderComponentType('',0,import9.ViewEncapsulation.None,styles_Discovery,{})); }
  return new _View_Discovery0(viewUtils,parentInjector,declarationEl);
}
class _View_Discovery1 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _Slide_0_4:import15.Wrapper_Slide;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _el_6:any;
  _text_7:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_Discovery1,renderType_Discovery,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'ion-slide',(null as any));
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = import15.viewFactory_Slide0(this.viewUtils,this.injector(0),this._appEl_0);
    this._Slide_0_4 = new import15.Wrapper_Slide(new import19.ElementRef(this._el_0),(<_View_Discovery0>this.parent)._Slides_13_4.context);
    this._appEl_0.initComponent(this._Slide_0_4.context,([] as any[]),compView_0);
    this._text_1 = this.renderer.createText((null as any),'\n      ',(null as any));
    this._el_2 = this.renderer.createElement((null as any),'img',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','slide-image');
    this._text_3 = this.renderer.createText((null as any),'\n      ',(null as any));
    this._el_4 = this.renderer.createElement((null as any),'h2',(null as any));
    this.renderer.setElementAttribute(this._el_4,'class','slide-title');
    this._text_5 = this.renderer.createText((null as any),'\n      ',(null as any));
    this._el_6 = this.renderer.createElement((null as any),'p',(null as any));
    this._text_7 = this.renderer.createText((null as any),'\n    ',(null as any));
      compView_0.create(this._Slide_0_4.context,[([] as any[]).concat([
        this._text_1,
        this._el_2,
        this._text_3,
        this._el_4,
        this._text_5,
        this._el_6,
        this._text_7
      ]
    )],(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    this.init(([] as any[]).concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._el_6,
      this._text_7
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import31.Slide) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._Slide_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (this._Slide_0_4.detectChangesInternal(this,this._el_0,throwOnChange)) { this._appEl_0.componentView.markAsCheckOnce(); }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:any = this.context.$implicit.image;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setElementProperty(this._el_2,'src',this.viewUtils.sanitizer.sanitize(import34.SecurityContext.URL,currVal_0));
      this._expr_0 = currVal_0;
    }
    const currVal_1:any = this.context.$implicit.title;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementProperty(this._el_4,'innerHTML',this.viewUtils.sanitizer.sanitize(import34.SecurityContext.HTML,currVal_1));
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = this.context.$implicit.description;
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setElementProperty(this._el_6,'innerHTML',this.viewUtils.sanitizer.sanitize(import34.SecurityContext.HTML,currVal_2));
      this._expr_2 = currVal_2;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._Slide_0_4.context.ngOnDestroy();
  }
}
function viewFactory_Discovery1(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  return new _View_Discovery1(viewUtils,parentInjector,declarationEl);
}
class _View_Discovery2 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _Card_2_3:import17.Wrapper_Card;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _text_6:any;
  /*private*/ _expr_1:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_Discovery2,renderType_Discovery,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'div',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','Grid_3');
    this.renderer.setElementAttribute(this._el_0,'style','padding: 0 0;margin-left: 1.5rem;');
    this._text_1 = this.renderer.createText(this._el_0,'\n		',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'ion-card',(null as any));
    this._Card_2_3 = new import17.Wrapper_Card(this.parent.parentInjector.get(import18.Config),new import19.ElementRef(this._el_2),this.renderer);
    this._text_3 = this.renderer.createText(this._el_2,'\n		  ',(null as any));
    this._el_4 = this.renderer.createElement(this._el_2,'img',(null as any));
    this.renderer.setElementAttribute(this._el_4,'class','img_RSD');
    this.renderer.setElementAttribute(this._el_4,'id','img_rsdClick');
    this._text_5 = this.renderer.createText(this._el_2,'\n		',(null as any));
    this._text_6 = this.renderer.createText(this._el_0,'\n	',(null as any));
    this._expr_1 = import7.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_4,'click',this.eventHandler(this._handle_click_4_0.bind(this)));
    this.init(([] as any[]).concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._text_6
    ]
    ,[disposable_0],([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import32.Card) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 5)))) { return this._Card_2_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._Card_2_3.detectChangesInternal(this,this._el_2,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_1:any = import4.interpolate(1,'',this.context.$implicit,' ');
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementProperty(this._el_4,'src',this.viewUtils.sanitizer.sanitize(import34.SecurityContext.URL,currVal_1));
      this._expr_1 = currVal_1;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_click_4_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.context.rsdClick()) !== false);
    return (true && pd_0);
  }
}
function viewFactory_Discovery2(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  return new _View_Discovery2(viewUtils,parentInjector,declarationEl);
}