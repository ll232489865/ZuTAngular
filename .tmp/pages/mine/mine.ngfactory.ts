/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from './mine';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from './login.service';
import * as import9 from 'ionic-angular/navigation/nav-controller';
import * as import10 from 'ionic-angular/navigation/view-controller';
import * as import11 from 'ionic-angular/components/app/app';
import * as import12 from 'ionic-angular/components/modal/modal';
import * as import13 from '@angular/core/src/linker/element_ref';
import * as import14 from '@angular/core/src/linker/compiler';
import * as import15 from '@angular/core/src/metadata/view';
import * as import16 from '@angular/core/src/linker/component_factory';
import * as import17 from '../../node_modules/ionic-angular/components/toolbar/toolbar.ngfactory';
import * as import18 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import19 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import20 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import21 from '../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import22 from 'ionic-angular/config/config';
import * as import23 from 'ionic-angular/components/toolbar/toolbar';
import * as import24 from 'ionic-angular/util/keyboard';
import * as import25 from '@angular/core/src/zone/ng_zone';
import * as import26 from 'ionic-angular/components/tabs/tabs';
import * as import27 from '@angular/core/src/linker/template_ref';
import * as import28 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import29 from 'ionic-angular/components/navbar/navbar';
import * as import30 from '@angular/common/src/directives/ng_if';
import * as import31 from 'ionic-angular/components/content/content';
import * as import32 from '@angular/core/src/security';
export class Wrapper_MinePage {
  context:import0.MinePage;
  changed:boolean;
  constructor(p0:any,p1:any,p2:any,p3:any,p4:any,p5:any,p6:any) {
    this.changed = false;
    this.context = new import0.MinePage(p0,p1,p2,p3,p4,p5,p6);
  }
  detectChangesInternal(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this.changed;
    this.changed = false;
    if (!throwOnChange) {
      if ((view.numberOfChecks === 0)) { this.context.ngOnInit(); }
      this.context.ngDoCheck();
    }
    return changed;
  }
}
var renderType_MinePage_Host:import2.RenderComponentType = (null as any);
class _View_MinePage_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _MinePage_0_4:Wrapper_MinePage;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_MinePage_Host0,renderType_MinePage_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = this.selectOrCreateHostElement('page_mine',rootSelector,(null as any));
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_MinePage0(this.viewUtils,this.injector(0),this._appEl_0);
    this._MinePage_0_4 = new Wrapper_MinePage(this.parentInjector.get(import8.LoginService),this.parentInjector.get(import9.NavController),this.parentInjector.get(import10.ViewController),this.parentInjector.get(import11.App),this.parentInjector.get(import12.ModalController),new import13.ElementRef(this._el_0),this.parentInjector.get(import14.Compiler));
    this._appEl_0.initComponent(this._MinePage_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._MinePage_0_4.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.MinePage) && (0 === requestNodeIndex))) { return this._MinePage_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._MinePage_0_4.detectChangesInternal(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    if (!throwOnChange) {
      if ((this.numberOfChecks === 0)) { this._MinePage_0_4.context.ngAfterContentInit(); }
      this._MinePage_0_4.context.ngAfterContentChecked();
    }
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) {
      if ((this.numberOfChecks === 0)) { this._MinePage_0_4.context.ngAfterViewInit(); }
      this._MinePage_0_4.context.ngAfterViewChecked();
    }
  }
  destroyInternal():void {
    this._MinePage_0_4.context.ngOnDestroy();
  }
}
function viewFactory_MinePage_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  if ((renderType_MinePage_Host === (null as any))) { (renderType_MinePage_Host = viewUtils.createRenderComponentType('',0,import15.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_MinePage_Host0(viewUtils,parentInjector,declarationEl);
}
export const MinePageNgFactory:import16.ComponentFactory<import0.MinePage> = new import16.ComponentFactory<import0.MinePage>('page_mine',viewFactory_MinePage_Host0,import0.MinePage);
const styles_MinePage:any[] = ([] as any[]);
var renderType_MinePage:import2.RenderComponentType = (null as any);
class _View_MinePage0 extends import1.AppView<import0.MinePage> {
  _el_0:any;
  _Header_0_3:import17.Wrapper_Header;
  _text_1:any;
  _el_2:any;
  /*private*/ _appEl_2:import3.AppElement;
  _Navbar_2_4:import18.Wrapper_Navbar;
  _text_3:any;
  _el_4:any;
  /*private*/ _appEl_4:import3.AppElement;
  _ToolbarTitle_4_4:import19.Wrapper_ToolbarTitle;
  _text_5:any;
  _text_6:any;
  _text_7:any;
  _text_8:any;
  _el_9:any;
  /*private*/ _appEl_9:import3.AppElement;
  _Content_9_4:import20.Wrapper_Content;
  _text_10:any;
  _el_11:any;
  _text_12:any;
  _el_13:any;
  _text_14:any;
  _el_15:any;
  _text_16:any;
  _el_17:any;
  _text_18:any;
  _text_19:any;
  _el_20:any;
  _text_21:any;
  _anchor_22:any;
  /*private*/ _appEl_22:import3.AppElement;
  _TemplateRef_22_5:any;
  _NgIf_22_6:import21.Wrapper_NgIf;
  _text_23:any;
  _anchor_24:any;
  /*private*/ _appEl_24:import3.AppElement;
  _TemplateRef_24_5:any;
  _NgIf_24_6:import21.Wrapper_NgIf;
  _text_25:any;
  _text_26:any;
  _text_27:any;
  _el_28:any;
  _text_29:any;
  _el_30:any;
  _text_31:any;
  _el_32:any;
  _text_33:any;
  _el_34:any;
  _text_35:any;
  _text_36:any;
  _el_37:any;
  _text_38:any;
  _el_39:any;
  _text_40:any;
  _text_41:any;
  _el_42:any;
  _text_43:any;
  _text_44:any;
  _text_45:any;
  _el_46:any;
  _text_47:any;
  _el_48:any;
  _text_49:any;
  _el_50:any;
  _text_51:any;
  _text_52:any;
  _el_53:any;
  _text_54:any;
  _el_55:any;
  _text_56:any;
  _text_57:any;
  _text_58:any;
  _text_59:any;
  _text_60:any;
  _el_61:any;
  _text_62:any;
  _el_63:any;
  _text_64:any;
  _el_65:any;
  _text_66:any;
  _el_67:any;
  _text_68:any;
  _text_69:any;
  _el_70:any;
  _text_71:any;
  _el_72:any;
  _text_73:any;
  _text_74:any;
  _el_75:any;
  _text_76:any;
  _text_77:any;
  _text_78:any;
  _el_79:any;
  _text_80:any;
  _el_81:any;
  _text_82:any;
  _el_83:any;
  _text_84:any;
  _text_85:any;
  _el_86:any;
  _text_87:any;
  _el_88:any;
  _text_89:any;
  _text_90:any;
  _text_91:any;
  _text_92:any;
  _text_93:any;
  _text_94:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_4:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_MinePage0,renderType_MinePage,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'ion-header',(null as any));
    this._Header_0_3 = new import17.Wrapper_Header(this.parentInjector.get(import22.Config),new import13.ElementRef(this._el_0),this.renderer,this.parentInjector.get(import10.ViewController,(null as any)));
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'ion-navbar',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','toolbar');
    this._appEl_2 = new import3.AppElement(2,0,this,this._el_2);
    var compView_2:any = import18.viewFactory_Navbar0(this.viewUtils,this.injector(2),this._appEl_2);
    this._Navbar_2_4 = new import18.Wrapper_Navbar(this.parentInjector.get(import11.App),this.parentInjector.get(import10.ViewController,(null as any)),this.parentInjector.get(import9.NavController,(null as any)),this.parentInjector.get(import22.Config),new import13.ElementRef(this._el_2),this.renderer);
    this._appEl_2.initComponent(this._Navbar_2_4.context,([] as any[]),compView_2);
    this._text_3 = this.renderer.createText((null as any),'\n        ',(null as any));
    this._el_4 = this.renderer.createElement((null as any),'ion-title',(null as any));
    this._appEl_4 = new import3.AppElement(4,2,this,this._el_4);
    var compView_4:any = import19.viewFactory_ToolbarTitle0(this.viewUtils,this.injector(4),this._appEl_4);
    this._ToolbarTitle_4_4 = new import19.Wrapper_ToolbarTitle(this.parentInjector.get(import22.Config),new import13.ElementRef(this._el_4),this.renderer,this.parentInjector.get(import23.Toolbar,(null as any)),this._Navbar_2_4.context);
    this._appEl_4.initComponent(this._ToolbarTitle_4_4.context,([] as any[]),compView_4);
    this._text_5 = this.renderer.createText((null as any),'\n            我的\n        ',(null as any));
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
    this._text_8 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this._el_9 = this.renderer.createElement(parentRenderNode,'ion-content',(null as any));
    this._appEl_9 = new import3.AppElement(9,(null as any),this,this._el_9);
    var compView_9:any = import20.viewFactory_Content0(this.viewUtils,this.injector(9),this._appEl_9);
    this._Content_9_4 = new import20.Wrapper_Content(this.parentInjector.get(import22.Config),new import13.ElementRef(this._el_9),this.renderer,this.parentInjector.get(import11.App),this.parentInjector.get(import24.Keyboard),this.parentInjector.get(import25.NgZone),this.parentInjector.get(import10.ViewController,(null as any)),this.parentInjector.get(import26.Tabs,(null as any)));
    this._appEl_9.initComponent(this._Content_9_4.context,([] as any[]),compView_9);
    this._text_10 = this.renderer.createText((null as any),'\n\n    ',(null as any));
    this._el_11 = this.renderer.createElement((null as any),'div',(null as any));
    this.renderer.setElementAttribute(this._el_11,'class','mui-content');
    this._text_12 = this.renderer.createText(this._el_11,'\n\n        ',(null as any));
    this._el_13 = this.renderer.createElement(this._el_11,'div',(null as any));
    this.renderer.setElementAttribute(this._el_13,'class','login_banner');
    this.renderer.setElementAttribute(this._el_13,'style','background: url(source/img/titles.jpg); background-size:100% 100%; position: relative; height: 150px');
    this._text_14 = this.renderer.createText(this._el_13,'\n            ',(null as any));
    this._el_15 = this.renderer.createElement(this._el_13,'div',(null as any));
    this.renderer.setElementAttribute(this._el_15,'class','tc');
    this._text_16 = this.renderer.createText(this._el_15,'\n                ',(null as any));
    this._el_17 = this.renderer.createElement(this._el_15,'img',(null as any));
    this.renderer.setElementAttribute(this._el_17,'alt','');
    this.renderer.setElementAttribute(this._el_17,'class','hotpost');
    this.renderer.setElementAttribute(this._el_17,'height','50');
    this.renderer.setElementAttribute(this._el_17,'id','login_picture');
    this.renderer.setElementAttribute(this._el_17,'style','margin-top:3rem; border-radius: 25px;');
    this.renderer.setElementAttribute(this._el_17,'width','50');
    this._text_18 = this.renderer.createText(this._el_15,'\n            ',(null as any));
    this._text_19 = this.renderer.createText(this._el_13,'\n\n            ',(null as any));
    this._el_20 = this.renderer.createElement(this._el_13,'div',(null as any));
    this.renderer.setElementAttribute(this._el_20,'class','login_bn_info');
    this.renderer.setElementAttribute(this._el_20,'id','login_bn_info');
    this._text_21 = this.renderer.createText(this._el_20,'\n                ',(null as any));
    this._anchor_22 = this.renderer.createTemplateAnchor(this._el_20,(null as any));
    this._appEl_22 = new import3.AppElement(22,20,this,this._anchor_22);
    this._TemplateRef_22_5 = new import27.TemplateRef_(this._appEl_22,viewFactory_MinePage1);
    this._NgIf_22_6 = new import21.Wrapper_NgIf(this._appEl_22.vcRef,this._TemplateRef_22_5);
    this._text_23 = this.renderer.createText(this._el_20,'\n                ',(null as any));
    this._anchor_24 = this.renderer.createTemplateAnchor(this._el_20,(null as any));
    this._appEl_24 = new import3.AppElement(24,20,this,this._anchor_24);
    this._TemplateRef_24_5 = new import27.TemplateRef_(this._appEl_24,viewFactory_MinePage2);
    this._NgIf_24_6 = new import21.Wrapper_NgIf(this._appEl_24.vcRef,this._TemplateRef_24_5);
    this._text_25 = this.renderer.createText(this._el_20,'\n\n            ',(null as any));
    this._text_26 = this.renderer.createText(this._el_13,'\n        ',(null as any));
    this._text_27 = this.renderer.createText(this._el_11,'\n        ',(null as any));
    this._el_28 = this.renderer.createElement(this._el_11,'div',(null as any));
    this.renderer.setElementAttribute(this._el_28,'class','List_area');
    this._text_29 = this.renderer.createText(this._el_28,'\n            ',(null as any));
    this._el_30 = this.renderer.createElement(this._el_28,'div',(null as any));
    this.renderer.setElementAttribute(this._el_30,'class','fix List_box');
    this.renderer.setElementAttribute(this._el_30,'id','my_balance');
    this._text_31 = this.renderer.createText(this._el_30,'\n                ',(null as any));
    this._el_32 = this.renderer.createElement(this._el_30,'div',(null as any));
    this.renderer.setElementAttribute(this._el_32,'class','List_l');
    this._text_33 = this.renderer.createText(this._el_32,'\n                    ',(null as any));
    this._el_34 = this.renderer.createElement(this._el_32,'span',(null as any));
    this.renderer.setElementAttribute(this._el_34,'class','u2 u211');
    this._text_35 = this.renderer.createText(this._el_32,'\n                ',(null as any));
    this._text_36 = this.renderer.createText(this._el_30,'\n                ',(null as any));
    this._el_37 = this.renderer.createElement(this._el_30,'div',(null as any));
    this.renderer.setElementAttribute(this._el_37,'class','List_r');
    this._text_38 = this.renderer.createText(this._el_37,'\n                    ',(null as any));
    this._el_39 = this.renderer.createElement(this._el_37,'div',(null as any));
    this.renderer.setElementAttribute(this._el_39,'class','List_title');
    this._text_40 = this.renderer.createText(this._el_39,'\n                        我的账户\n                    ',(null as any));
    this._text_41 = this.renderer.createText(this._el_37,'\n                    ',(null as any));
    this._el_42 = this.renderer.createElement(this._el_37,'div',(null as any));
    this.renderer.setElementAttribute(this._el_42,'class','Line');
    this._text_43 = this.renderer.createText(this._el_37,'\n                ',(null as any));
    this._text_44 = this.renderer.createText(this._el_30,'\n            ',(null as any));
    this._text_45 = this.renderer.createText(this._el_28,'\n            ',(null as any));
    this._el_46 = this.renderer.createElement(this._el_28,'div',(null as any));
    this.renderer.setElementAttribute(this._el_46,'class','fix List_box');
    this.renderer.setElementAttribute(this._el_46,'id','my_courses');
    this._text_47 = this.renderer.createText(this._el_46,'\n                ',(null as any));
    this._el_48 = this.renderer.createElement(this._el_46,'div',(null as any));
    this.renderer.setElementAttribute(this._el_48,'class','List_l');
    this._text_49 = this.renderer.createText(this._el_48,'\n                    ',(null as any));
    this._el_50 = this.renderer.createElement(this._el_48,'span',(null as any));
    this.renderer.setElementAttribute(this._el_50,'class','u2 u221');
    this._text_51 = this.renderer.createText(this._el_48,'\n                ',(null as any));
    this._text_52 = this.renderer.createText(this._el_46,'\n                ',(null as any));
    this._el_53 = this.renderer.createElement(this._el_46,'div',(null as any));
    this.renderer.setElementAttribute(this._el_53,'class','List_r');
    this._text_54 = this.renderer.createText(this._el_53,'\n                    ',(null as any));
    this._el_55 = this.renderer.createElement(this._el_53,'div',(null as any));
    this.renderer.setElementAttribute(this._el_55,'class','List_title');
    this._text_56 = this.renderer.createText(this._el_55,'\n                        我的课程\n                    ',(null as any));
    this._text_57 = this.renderer.createText(this._el_53,'\n                ',(null as any));
    this._text_58 = this.renderer.createText(this._el_46,'\n            ',(null as any));
    this._text_59 = this.renderer.createText(this._el_28,'\n        ',(null as any));
    this._text_60 = this.renderer.createText(this._el_11,'\n        ',(null as any));
    this._el_61 = this.renderer.createElement(this._el_11,'div',(null as any));
    this.renderer.setElementAttribute(this._el_61,'class','List_area mt10');
    this._text_62 = this.renderer.createText(this._el_61,'\n            ',(null as any));
    this._el_63 = this.renderer.createElement(this._el_61,'div',(null as any));
    this.renderer.setElementAttribute(this._el_63,'class','fix List_box');
    this.renderer.setElementAttribute(this._el_63,'id','setting');
    this._text_64 = this.renderer.createText(this._el_63,'\n                ',(null as any));
    this._el_65 = this.renderer.createElement(this._el_63,'div',(null as any));
    this.renderer.setElementAttribute(this._el_65,'class','List_l');
    this._text_66 = this.renderer.createText(this._el_65,'\n                    ',(null as any));
    this._el_67 = this.renderer.createElement(this._el_65,'span',(null as any));
    this.renderer.setElementAttribute(this._el_67,'class','u2 u231');
    this._text_68 = this.renderer.createText(this._el_65,'\n                ',(null as any));
    this._text_69 = this.renderer.createText(this._el_63,'\n                ',(null as any));
    this._el_70 = this.renderer.createElement(this._el_63,'div',(null as any));
    this.renderer.setElementAttribute(this._el_70,'class','List_r');
    this._text_71 = this.renderer.createText(this._el_70,'\n                    ',(null as any));
    this._el_72 = this.renderer.createElement(this._el_70,'div',(null as any));
    this.renderer.setElementAttribute(this._el_72,'class','List_title');
    this._text_73 = this.renderer.createText(this._el_72,'\n                        设置\n                    ',(null as any));
    this._text_74 = this.renderer.createText(this._el_70,'\n                    ',(null as any));
    this._el_75 = this.renderer.createElement(this._el_70,'div',(null as any));
    this.renderer.setElementAttribute(this._el_75,'class','Line');
    this._text_76 = this.renderer.createText(this._el_70,'\n                ',(null as any));
    this._text_77 = this.renderer.createText(this._el_63,'\n            ',(null as any));
    this._text_78 = this.renderer.createText(this._el_61,'\n            ',(null as any));
    this._el_79 = this.renderer.createElement(this._el_61,'div',(null as any));
    this.renderer.setElementAttribute(this._el_79,'class','fix List_box');
    this.renderer.setElementAttribute(this._el_79,'id','about');
    this._text_80 = this.renderer.createText(this._el_79,'\n                ',(null as any));
    this._el_81 = this.renderer.createElement(this._el_79,'div',(null as any));
    this.renderer.setElementAttribute(this._el_81,'class','List_l');
    this._text_82 = this.renderer.createText(this._el_81,'\n                    ',(null as any));
    this._el_83 = this.renderer.createElement(this._el_81,'span',(null as any));
    this.renderer.setElementAttribute(this._el_83,'class','u2 u241');
    this._text_84 = this.renderer.createText(this._el_81,'\n                ',(null as any));
    this._text_85 = this.renderer.createText(this._el_79,'\n                ',(null as any));
    this._el_86 = this.renderer.createElement(this._el_79,'div',(null as any));
    this.renderer.setElementAttribute(this._el_86,'class','List_r');
    this._text_87 = this.renderer.createText(this._el_86,'\n                    ',(null as any));
    this._el_88 = this.renderer.createElement(this._el_86,'div',(null as any));
    this.renderer.setElementAttribute(this._el_88,'class','List_title');
    this._text_89 = this.renderer.createText(this._el_88,'\n                        关于\n                    ',(null as any));
    this._text_90 = this.renderer.createText(this._el_86,'\n                ',(null as any));
    this._text_91 = this.renderer.createText(this._el_79,'\n            ',(null as any));
    this._text_92 = this.renderer.createText(this._el_61,'\n        ',(null as any));
    this._text_93 = this.renderer.createText(this._el_11,'\n    ',(null as any));
    this._text_94 = this.renderer.createText((null as any),'\n',(null as any));
    compView_9.create(this._Content_9_4.context,[
      ([] as any[]),
      ([] as any[]).concat([
        this._text_10,
        this._el_11,
        this._text_94
      ]
      ),
      ([] as any[])
    ]
    ,(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    this._expr_4 = import7.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_17,'click',this.eventHandler(this._handle_click_17_0.bind(this)));
    var disposable_1:Function = this.renderer.listen(this._el_30,'click',this.eventHandler(this._handle_click_30_0.bind(this)));
    var disposable_2:Function = this.renderer.listen(this._el_46,'click',this.eventHandler(this._handle_click_46_0.bind(this)));
    var disposable_3:Function = this.renderer.listen(this._el_63,'click',this.eventHandler(this._handle_click_63_0.bind(this)));
    var disposable_4:Function = this.renderer.listen(this._el_79,'click',this.eventHandler(this._handle_click_79_0.bind(this)));
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
      this._text_19,
      this._el_20,
      this._text_21,
      this._anchor_22,
      this._text_23,
      this._anchor_24,
      this._text_25,
      this._text_26,
      this._text_27,
      this._el_28,
      this._text_29,
      this._el_30,
      this._text_31,
      this._el_32,
      this._text_33,
      this._el_34,
      this._text_35,
      this._text_36,
      this._el_37,
      this._text_38,
      this._el_39,
      this._text_40,
      this._text_41,
      this._el_42,
      this._text_43,
      this._text_44,
      this._text_45,
      this._el_46,
      this._text_47,
      this._el_48,
      this._text_49,
      this._el_50,
      this._text_51,
      this._text_52,
      this._el_53,
      this._text_54,
      this._el_55,
      this._text_56,
      this._text_57,
      this._text_58,
      this._text_59,
      this._text_60,
      this._el_61,
      this._text_62,
      this._el_63,
      this._text_64,
      this._el_65,
      this._text_66,
      this._el_67,
      this._text_68,
      this._text_69,
      this._el_70,
      this._text_71,
      this._el_72,
      this._text_73,
      this._text_74,
      this._el_75,
      this._text_76,
      this._text_77,
      this._text_78,
      this._el_79,
      this._text_80,
      this._el_81,
      this._text_82,
      this._el_83,
      this._text_84,
      this._text_85,
      this._el_86,
      this._text_87,
      this._el_88,
      this._text_89,
      this._text_90,
      this._text_91,
      this._text_92,
      this._text_93,
      this._text_94
    ]
    ,[
      disposable_0,
      disposable_1,
      disposable_2,
      disposable_3,
      disposable_4
    ]
    ,([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import28.ToolbarTitle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 5)))) { return this._ToolbarTitle_4_4.context; }
    if (((token === import29.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 6)))) { return this._Navbar_2_4.context; }
    if (((token === import23.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._Header_0_3.context; }
    if (((token === import27.TemplateRef) && (22 === requestNodeIndex))) { return this._TemplateRef_22_5; }
    if (((token === import30.NgIf) && (22 === requestNodeIndex))) { return this._NgIf_22_6.context; }
    if (((token === import27.TemplateRef) && (24 === requestNodeIndex))) { return this._TemplateRef_24_5; }
    if (((token === import30.NgIf) && (24 === requestNodeIndex))) { return this._NgIf_24_6.context; }
    if (((token === import31.Content) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 94)))) { return this._Content_9_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._Header_0_3.detectChangesInternal(this,this._el_0,throwOnChange);
    this._Navbar_2_4.detectChangesInternal(this,this._el_2,throwOnChange);
    if (this._ToolbarTitle_4_4.detectChangesInternal(this,this._el_4,throwOnChange)) { this._appEl_4.componentView.markAsCheckOnce(); }
    if (this._Content_9_4.detectChangesInternal(this,this._el_9,throwOnChange)) { this._appEl_9.componentView.markAsCheckOnce(); }
    const currVal_5:any = this.context.loginStatus;
    this._NgIf_22_6.check_ngIf(currVal_5,throwOnChange,false);
    this._NgIf_22_6.detectChangesInternal(this,this._anchor_22,throwOnChange);
    const currVal_6:boolean = !this.context.loginStatus;
    this._NgIf_24_6.check_ngIf(currVal_6,throwOnChange,false);
    this._NgIf_24_6.detectChangesInternal(this,this._anchor_24,throwOnChange);
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
    const currVal_4:any = import4.interpolate(1,'',this.context.loginImg,'');
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setElementProperty(this._el_17,'src',this.viewUtils.sanitizer.sanitize(import32.SecurityContext.URL,currVal_4));
      this._expr_4 = currVal_4;
    }
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._Navbar_2_4.context.ngAfterViewInit(); } }
  }
  destroyInternal():void {
    this._Content_9_4.context.ngOnDestroy();
  }
  private _handle_click_17_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context._enterInfo()) !== false);
    return (true && pd_0);
  }
  private _handle_click_30_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context._enterLogin(1)) !== false);
    return (true && pd_0);
  }
  private _handle_click_46_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context._enterLogin(2)) !== false);
    return (true && pd_0);
  }
  private _handle_click_63_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context._enterLogin(3)) !== false);
    return (true && pd_0);
  }
  private _handle_click_79_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context._enterLogin(4)) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_MinePage0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<import0.MinePage> {
  if ((renderType_MinePage === (null as any))) { (renderType_MinePage = viewUtils.createRenderComponentType('',0,import15.ViewEncapsulation.None,styles_MinePage,{})); }
  return new _View_MinePage0(viewUtils,parentInjector,declarationEl);
}
class _View_MinePage1 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  /*private*/ _expr_1:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_MinePage1,renderType_MinePage,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'span',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','login_txt');
    this._text_1 = this.renderer.createText(this._el_0,'',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'br',(null as any));
    this._text_3 = this.renderer.createText(this._el_0,'三人行,必有我师\'',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_0,'click',this.eventHandler(this._handle_click_0_0.bind(this)));
    this._expr_1 = import7.UNINITIALIZED;
    this.init(([] as any[]).concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3
    ]
    ,[disposable_0],([] as any[]));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_1:any = import4.interpolate(1,' 您好，',this.parent.context.loginAccount,'');
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setText(this._text_1,currVal_1);
      this._expr_1 = currVal_1;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_click_0_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.context._enterInfo()) !== false);
    return (true && pd_0);
  }
}
function viewFactory_MinePage1(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  return new _View_MinePage1(viewUtils,parentInjector,declarationEl);
}
class _View_MinePage2 extends import1.AppView<any> {
  _el_0:any;
  _text_1:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_MinePage2,renderType_MinePage,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'span',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','login_btn');
    this._text_1 = this.renderer.createText(this._el_0,'登录   /   注册',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_0,'click',this.eventHandler(this._handle_click_0_0.bind(this)));
    this.init(([] as any[]).concat([this._el_0]),[
      this._el_0,
      this._text_1
    ]
    ,[disposable_0],([] as any[]));
    return (null as any);
  }
  private _handle_click_0_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.context._enterLogin(0)) !== false);
    return (true && pd_0);
  }
}
function viewFactory_MinePage2(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  return new _View_MinePage2(viewUtils,parentInjector,declarationEl);
}