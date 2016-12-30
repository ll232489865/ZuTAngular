/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from './myabout';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '../../../node_modules/ionic-angular/components/toolbar/toolbar.ngfactory';
import * as import11 from '../../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import12 from '../../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import13 from '../../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import14 from 'ionic-angular/config/config';
import * as import15 from '@angular/core/src/linker/element_ref';
import * as import16 from 'ionic-angular/navigation/view-controller';
import * as import17 from 'ionic-angular/components/app/app';
import * as import18 from 'ionic-angular/navigation/nav-controller';
import * as import19 from 'ionic-angular/components/toolbar/toolbar';
import * as import20 from 'ionic-angular/util/keyboard';
import * as import21 from '@angular/core/src/zone/ng_zone';
import * as import22 from 'ionic-angular/components/tabs/tabs';
import * as import23 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import24 from 'ionic-angular/components/navbar/navbar';
import * as import25 from 'ionic-angular/components/content/content';
export class Wrapper_MyAboutPage {
  context:import0.MyAboutPage;
  changed:boolean;
  constructor() {
    this.changed = false;
    this.context = new import0.MyAboutPage();
  }
  detectChangesInternal(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this.changed;
    this.changed = false;
    return changed;
  }
}
var renderType_MyAboutPage_Host:import2.RenderComponentType = (null as any);
class _View_MyAboutPage_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _MyAboutPage_0_4:Wrapper_MyAboutPage;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_MyAboutPage_Host0,renderType_MyAboutPage_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = this.selectOrCreateHostElement('my-component',rootSelector,(null as any));
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_MyAboutPage0(this.viewUtils,this.injector(0),this._appEl_0);
    this._MyAboutPage_0_4 = new Wrapper_MyAboutPage();
    this._appEl_0.initComponent(this._MyAboutPage_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._MyAboutPage_0_4.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.MyAboutPage) && (0 === requestNodeIndex))) { return this._MyAboutPage_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._MyAboutPage_0_4.detectChangesInternal(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_MyAboutPage_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  if ((renderType_MyAboutPage_Host === (null as any))) { (renderType_MyAboutPage_Host = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_MyAboutPage_Host0(viewUtils,parentInjector,declarationEl);
}
export const MyAboutPageNgFactory:import9.ComponentFactory<import0.MyAboutPage> = new import9.ComponentFactory<import0.MyAboutPage>('my-component',viewFactory_MyAboutPage_Host0,import0.MyAboutPage);
const styles_MyAboutPage:any[] = ['.aboutlogo[_ngcontent-%COMP%]{\n            width: 25%;\n            margin: 10% 0 6% 0;\n        }\n        .copyright[_ngcontent-%COMP%]{\n            position:fixed;\n            bottom:1.5rem;\n            left:20%;\n            \n            \n            \n        }'];
var renderType_MyAboutPage:import2.RenderComponentType = (null as any);
class _View_MyAboutPage0 extends import1.AppView<import0.MyAboutPage> {
  _text_0:any;
  _text_1:any;
  _el_2:any;
  _Header_2_3:import10.Wrapper_Header;
  _text_3:any;
  _el_4:any;
  /*private*/ _appEl_4:import3.AppElement;
  _Navbar_4_4:import11.Wrapper_Navbar;
  _text_5:any;
  _el_6:any;
  /*private*/ _appEl_6:import3.AppElement;
  _ToolbarTitle_6_4:import12.Wrapper_ToolbarTitle;
  _text_7:any;
  _text_8:any;
  _text_9:any;
  _text_10:any;
  _el_11:any;
  /*private*/ _appEl_11:import3.AppElement;
  _Content_11_4:import13.Wrapper_Content;
  _text_12:any;
  _el_13:any;
  _text_14:any;
  _el_15:any;
  _text_16:any;
  _el_17:any;
  _text_18:any;
  _el_19:any;
  _text_20:any;
  _el_21:any;
  _text_22:any;
  _text_23:any;
  _el_24:any;
  _text_25:any;
  _el_26:any;
  _text_27:any;
  _el_28:any;
  _text_29:any;
  _el_30:any;
  _text_31:any;
  _el_32:any;
  _el_33:any;
  _text_34:any;
  _text_35:any;
  _text_36:any;
  _el_37:any;
  _text_38:any;
  _text_39:any;
  _text_40:any;
  _el_41:any;
  _text_42:any;
  _el_43:any;
  _text_44:any;
  _el_45:any;
  _text_46:any;
  _el_47:any;
  _el_48:any;
  _text_49:any;
  _text_50:any;
  _text_51:any;
  _el_52:any;
  _text_53:any;
  _text_54:any;
  _text_55:any;
  _el_56:any;
  _text_57:any;
  _el_58:any;
  _text_59:any;
  _el_60:any;
  _text_61:any;
  _el_62:any;
  _text_63:any;
  _text_64:any;
  _text_65:any;
  _el_66:any;
  _text_67:any;
  _text_68:any;
  _text_69:any;
  _text_70:any;
  _text_71:any;
  _text_72:any;
  _el_73:any;
  _text_74:any;
  _text_75:any;
  _text_76:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_MyAboutPage0,renderType_MyAboutPage,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'    ',(null as any));
    this._text_1 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this._el_2 = this.renderer.createElement(parentRenderNode,'ion-header',(null as any));
    this._Header_2_3 = new import10.Wrapper_Header(this.parentInjector.get(import14.Config),new import15.ElementRef(this._el_2),this.renderer,this.parentInjector.get(import16.ViewController,(null as any)));
    this._text_3 = this.renderer.createText(this._el_2,'\n  ',(null as any));
    this._el_4 = this.renderer.createElement(this._el_2,'ion-navbar',(null as any));
    this.renderer.setElementAttribute(this._el_4,'class','toolbar');
    this._appEl_4 = new import3.AppElement(4,2,this,this._el_4);
    var compView_4:any = import11.viewFactory_Navbar0(this.viewUtils,this.injector(4),this._appEl_4);
    this._Navbar_4_4 = new import11.Wrapper_Navbar(this.parentInjector.get(import17.App),this.parentInjector.get(import16.ViewController,(null as any)),this.parentInjector.get(import18.NavController,(null as any)),this.parentInjector.get(import14.Config),new import15.ElementRef(this._el_4),this.renderer);
    this._appEl_4.initComponent(this._Navbar_4_4.context,([] as any[]),compView_4);
    this._text_5 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._el_6 = this.renderer.createElement((null as any),'ion-title',(null as any));
    this._appEl_6 = new import3.AppElement(6,4,this,this._el_6);
    var compView_6:any = import12.viewFactory_ToolbarTitle0(this.viewUtils,this.injector(6),this._appEl_6);
    this._ToolbarTitle_6_4 = new import12.Wrapper_ToolbarTitle(this.parentInjector.get(import14.Config),new import15.ElementRef(this._el_6),this.renderer,this.parentInjector.get(import19.Toolbar,(null as any)),this._Navbar_4_4.context);
    this._appEl_6.initComponent(this._ToolbarTitle_6_4.context,([] as any[]),compView_6);
    this._text_7 = this.renderer.createText((null as any),'\n      账户\n    ',(null as any));
    compView_6.create(this._ToolbarTitle_6_4.context,[([] as any[]).concat([this._text_7])],(null as any));
    this._text_8 = this.renderer.createText((null as any),'\n  ',(null as any));
    compView_4.create(this._Navbar_4_4.context,[
      ([] as any[]),
      ([] as any[]),
      ([] as any[]),
      ([] as any[]).concat([
        this._text_5,
        this._el_6,
        this._text_8
      ]
      )
    ]
    ,(null as any));
    this._text_9 = this.renderer.createText(this._el_2,'\n',(null as any));
    this._text_10 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this._el_11 = this.renderer.createElement(parentRenderNode,'ion-content',(null as any));
    this._appEl_11 = new import3.AppElement(11,(null as any),this,this._el_11);
    var compView_11:any = import13.viewFactory_Content0(this.viewUtils,this.injector(11),this._appEl_11);
    this._Content_11_4 = new import13.Wrapper_Content(this.parentInjector.get(import14.Config),new import15.ElementRef(this._el_11),this.renderer,this.parentInjector.get(import17.App),this.parentInjector.get(import20.Keyboard),this.parentInjector.get(import21.NgZone),this.parentInjector.get(import16.ViewController,(null as any)),this.parentInjector.get(import22.Tabs,(null as any)));
    this._appEl_11.initComponent(this._Content_11_4.context,([] as any[]),compView_11);
    this._text_12 = this.renderer.createText((null as any),'\n\n\n',(null as any));
    this._el_13 = this.renderer.createElement((null as any),'div',(null as any));
    this.renderer.setElementAttribute(this._el_13,'class','mui-content bgwh');
    this._text_14 = this.renderer.createText(this._el_13,'\n    ',(null as any));
    this._el_15 = this.renderer.createElement(this._el_13,'div',(null as any));
    this.renderer.setElementAttribute(this._el_15,'class','Line');
    this._text_16 = this.renderer.createText(this._el_13,'\n    ',(null as any));
    this._el_17 = this.renderer.createElement(this._el_13,'div',(null as any));
    this.renderer.setElementAttribute(this._el_17,'class','pct95 auto');
    this._text_18 = this.renderer.createText(this._el_17,'\n        ',(null as any));
    this._el_19 = this.renderer.createElement(this._el_17,'div',(null as any));
    this.renderer.setElementAttribute(this._el_19,'style','text-align:center;');
    this._text_20 = this.renderer.createText(this._el_19,'\n            ',(null as any));
    this._el_21 = this.renderer.createElement(this._el_19,'img',(null as any));
    this.renderer.setElementAttribute(this._el_21,'class','aboutlogo');
    this.renderer.setElementAttribute(this._el_21,'src','source/img/aboutlogo.png');
    this._text_22 = this.renderer.createText(this._el_19,'\n        ',(null as any));
    this._text_23 = this.renderer.createText(this._el_17,'\n        ',(null as any));
    this._el_24 = this.renderer.createElement(this._el_17,'ul',(null as any));
    this.renderer.setElementAttribute(this._el_24,'class','mui-table-view');
    this._text_25 = this.renderer.createText(this._el_24,'\n            ',(null as any));
    this._el_26 = this.renderer.createElement(this._el_24,'li',(null as any));
    this.renderer.setElementAttribute(this._el_26,'class','mui-table-view-cell');
    this._text_27 = this.renderer.createText(this._el_26,'\n                ',(null as any));
    this._el_28 = this.renderer.createElement(this._el_26,'div',(null as any));
    this.renderer.setElementAttribute(this._el_28,'class','List_abs List_control');
    this.renderer.setElementAttribute(this._el_28,'style','margin-top: .7rem;');
    this._text_29 = this.renderer.createText(this._el_28,'\n                    ',(null as any));
    this._el_30 = this.renderer.createElement(this._el_28,'div',(null as any));
    this.renderer.setElementAttribute(this._el_30,'class','g9');
    this._text_31 = this.renderer.createText(this._el_30,'\n                        ',(null as any));
    this._el_32 = this.renderer.createElement(this._el_30,'div',(null as any));
    this.renderer.setElementAttribute(this._el_32,'class','tr res_input');
    this.renderer.setElementAttribute(this._el_32,'style','margin-right: 10px;');
    this._el_33 = this.renderer.createElement(this._el_32,'span',(null as any));
    this.renderer.setElementAttribute(this._el_33,'class','tr res_input');
    this.renderer.setElementAttribute(this._el_33,'id','appversion');
    this._text_34 = this.renderer.createText(this._el_30,'\n                    ',(null as any));
    this._text_35 = this.renderer.createText(this._el_28,'\n                ',(null as any));
    this._text_36 = this.renderer.createText(this._el_26,'\n                ',(null as any));
    this._el_37 = this.renderer.createElement(this._el_26,'div',(null as any));
    this.renderer.setElementAttribute(this._el_37,'class','mui-navigate');
    this.renderer.setElementAttribute(this._el_37,'style','margin-left: 10px;');
    this._text_38 = this.renderer.createText(this._el_37,'APP版本',(null as any));
    this._text_39 = this.renderer.createText(this._el_26,'\n            ',(null as any));
    this._text_40 = this.renderer.createText(this._el_24,'\n            ',(null as any));
    this._el_41 = this.renderer.createElement(this._el_24,'li',(null as any));
    this.renderer.setElementAttribute(this._el_41,'class','mui-table-view-cell');
    this._text_42 = this.renderer.createText(this._el_41,'\n                ',(null as any));
    this._el_43 = this.renderer.createElement(this._el_41,'div',(null as any));
    this.renderer.setElementAttribute(this._el_43,'class','List_abs List_control');
    this.renderer.setElementAttribute(this._el_43,'style','margin-top: .7rem;');
    this._text_44 = this.renderer.createText(this._el_43,'\n                    ',(null as any));
    this._el_45 = this.renderer.createElement(this._el_43,'div',(null as any));
    this.renderer.setElementAttribute(this._el_45,'class','g9');
    this._text_46 = this.renderer.createText(this._el_45,'\n                        ',(null as any));
    this._el_47 = this.renderer.createElement(this._el_45,'div',(null as any));
    this.renderer.setElementAttribute(this._el_47,'class','tr res_input');
    this.renderer.setElementAttribute(this._el_47,'style','margin-right: 10px;');
    this._el_48 = this.renderer.createElement(this._el_47,'span',(null as any));
    this.renderer.setElementAttribute(this._el_48,'class','tr res_input');
    this.renderer.setElementAttribute(this._el_48,'id','h5version');
    this._text_49 = this.renderer.createText(this._el_45,'\n                    ',(null as any));
    this._text_50 = this.renderer.createText(this._el_43,'\n                ',(null as any));
    this._text_51 = this.renderer.createText(this._el_41,'\n                ',(null as any));
    this._el_52 = this.renderer.createElement(this._el_41,'div',(null as any));
    this.renderer.setElementAttribute(this._el_52,'class','mui-navigate');
    this.renderer.setElementAttribute(this._el_52,'style','margin-left: 10px;');
    this._text_53 = this.renderer.createText(this._el_52,'HTML5版本',(null as any));
    this._text_54 = this.renderer.createText(this._el_41,'\n            ',(null as any));
    this._text_55 = this.renderer.createText(this._el_24,'\n            ',(null as any));
    this._el_56 = this.renderer.createElement(this._el_24,'li',(null as any));
    this.renderer.setElementAttribute(this._el_56,'class','mui-table-view-cell');
    this.renderer.setElementAttribute(this._el_56,'id','serviceprotocol');
    this._text_57 = this.renderer.createText(this._el_56,'\n                ',(null as any));
    this._el_58 = this.renderer.createElement(this._el_56,'div',(null as any));
    this.renderer.setElementAttribute(this._el_58,'class','List_abs List_control');
    this.renderer.setElementAttribute(this._el_58,'style','margin-top: .7rem;');
    this._text_59 = this.renderer.createText(this._el_58,'\n                    ',(null as any));
    this._el_60 = this.renderer.createElement(this._el_58,'div',(null as any));
    this.renderer.setElementAttribute(this._el_60,'class','g9');
    this._text_61 = this.renderer.createText(this._el_60,'\n                        ',(null as any));
    this._el_62 = this.renderer.createElement(this._el_60,'div',(null as any));
    this.renderer.setElementAttribute(this._el_62,'class','tr res_input');
    this.renderer.setElementAttribute(this._el_62,'style','margin-right: 10px;');
    this._text_63 = this.renderer.createText(this._el_60,'\n                    ',(null as any));
    this._text_64 = this.renderer.createText(this._el_58,'\n                ',(null as any));
    this._text_65 = this.renderer.createText(this._el_56,'\n                ',(null as any));
    this._el_66 = this.renderer.createElement(this._el_56,'div',(null as any));
    this.renderer.setElementAttribute(this._el_66,'class','mui-navigate-right');
    this.renderer.setElementAttribute(this._el_66,'style','margin-left: 10px;');
    this._text_67 = this.renderer.createText(this._el_66,'服务使用协议',(null as any));
    this._text_68 = this.renderer.createText(this._el_56,'\n            ',(null as any));
    this._text_69 = this.renderer.createText(this._el_24,'\n        ',(null as any));
    this._text_70 = this.renderer.createText(this._el_17,'\n    ',(null as any));
    this._text_71 = this.renderer.createText(this._el_13,'\n',(null as any));
    this._text_72 = this.renderer.createText((null as any),'\n',(null as any));
    this._el_73 = this.renderer.createElement((null as any),'div',(null as any));
    this.renderer.setElementAttribute(this._el_73,'class','copyright');
    this._text_74 = this.renderer.createText(this._el_73,'上海归宗文化传播有限公司 版权所有',(null as any));
    this._text_75 = this.renderer.createText((null as any),'\n\n',(null as any));
    compView_11.create(this._Content_11_4.context,[
      ([] as any[]),
      ([] as any[]).concat([
        this._text_12,
        this._el_13,
        this._text_72,
        this._el_73,
        this._text_75
      ]
      ),
      ([] as any[])
    ]
    ,(null as any));
    this._text_76 = this.renderer.createText(parentRenderNode,'\n\n\n',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    this.init(([] as any[]),[
      this._text_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._text_8,
      this._text_9,
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
      this._el_21,
      this._text_22,
      this._text_23,
      this._el_24,
      this._text_25,
      this._el_26,
      this._text_27,
      this._el_28,
      this._text_29,
      this._el_30,
      this._text_31,
      this._el_32,
      this._el_33,
      this._text_34,
      this._text_35,
      this._text_36,
      this._el_37,
      this._text_38,
      this._text_39,
      this._text_40,
      this._el_41,
      this._text_42,
      this._el_43,
      this._text_44,
      this._el_45,
      this._text_46,
      this._el_47,
      this._el_48,
      this._text_49,
      this._text_50,
      this._text_51,
      this._el_52,
      this._text_53,
      this._text_54,
      this._text_55,
      this._el_56,
      this._text_57,
      this._el_58,
      this._text_59,
      this._el_60,
      this._text_61,
      this._el_62,
      this._text_63,
      this._text_64,
      this._text_65,
      this._el_66,
      this._text_67,
      this._text_68,
      this._text_69,
      this._text_70,
      this._text_71,
      this._text_72,
      this._el_73,
      this._text_74,
      this._text_75,
      this._text_76
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import23.ToolbarTitle) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._ToolbarTitle_6_4.context; }
    if (((token === import24.Navbar) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 8)))) { return this._Navbar_4_4.context; }
    if (((token === import19.Header) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 9)))) { return this._Header_2_3.context; }
    if (((token === import25.Content) && ((11 <= requestNodeIndex) && (requestNodeIndex <= 75)))) { return this._Content_11_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._Header_2_3.detectChangesInternal(this,this._el_2,throwOnChange);
    this._Navbar_4_4.detectChangesInternal(this,this._el_4,throwOnChange);
    if (this._ToolbarTitle_6_4.detectChangesInternal(this,this._el_6,throwOnChange)) { this._appEl_6.componentView.markAsCheckOnce(); }
    if (this._Content_11_4.detectChangesInternal(this,this._el_11,throwOnChange)) { this._appEl_11.componentView.markAsCheckOnce(); }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:any = this._Navbar_4_4.context._hidden;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setElementProperty(this._el_4,'hidden',currVal_0);
      this._expr_0 = currVal_0;
    }
    const currVal_1:any = this._Navbar_4_4.context._sbPadding;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementClass(this._el_4,'statusbar-padding',currVal_1);
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = this._Content_11_4.context._sbPadding;
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setElementClass(this._el_11,'statusbar-padding',currVal_2);
      this._expr_2 = currVal_2;
    }
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._Navbar_4_4.context.ngAfterViewInit(); } }
  }
  destroyInternal():void {
    this._Content_11_4.context.ngOnDestroy();
  }
}
export function viewFactory_MyAboutPage0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<import0.MyAboutPage> {
  if ((renderType_MyAboutPage === (null as any))) { (renderType_MyAboutPage = viewUtils.createRenderComponentType('',0,import8.ViewEncapsulation.Emulated,styles_MyAboutPage,{})); }
  return new _View_MyAboutPage0(viewUtils,parentInjector,declarationEl);
}