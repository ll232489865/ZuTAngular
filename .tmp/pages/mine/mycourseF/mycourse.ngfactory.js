/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from './mycourse';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
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
export var Wrapper_MyCoursePage = (function () {
    function Wrapper_MyCoursePage() {
        this.changed = false;
        this.context = new import0.MyCoursePage();
    }
    Wrapper_MyCoursePage.prototype.detectChangesInternal = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    };
    return Wrapper_MyCoursePage;
}());
var renderType_MyCoursePage_Host = null;
var _View_MyCoursePage_Host0 = (function (_super) {
    __extends(_View_MyCoursePage_Host0, _super);
    function _View_MyCoursePage_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_MyCoursePage_Host0, renderType_MyCoursePage_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_MyCoursePage_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('my-component', rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_MyCoursePage0(this.viewUtils, this.injector(0), this._appEl_0);
        this._MyCoursePage_0_4 = new Wrapper_MyCoursePage();
        this._appEl_0.initComponent(this._MyCoursePage_0_4.context, [], compView_0);
        compView_0.create(this._MyCoursePage_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_MyCoursePage_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.MyCoursePage) && (0 === requestNodeIndex))) {
            return this._MyCoursePage_0_4.context;
        }
        return notFoundResult;
    };
    _View_MyCoursePage_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._MyCoursePage_0_4.detectChangesInternal(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_MyCoursePage_Host0;
}(import1.AppView));
function viewFactory_MyCoursePage_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_MyCoursePage_Host === null)) {
        (renderType_MyCoursePage_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_MyCoursePage_Host0(viewUtils, parentInjector, declarationEl);
}
export var MyCoursePageNgFactory = new import9.ComponentFactory('my-component', viewFactory_MyCoursePage_Host0, import0.MyCoursePage);
var styles_MyCoursePage = ['.orange_round[_ngcontent-%COMP%]{\n            background: #ff9100;\n            color: white;\n            border-radius: 0.2rem;\n            font-size: 0.8rem;\n            padding: 0.1rem 0;\n            width: 5rem;\n            display: inline-block;\n            line-height: normal;\n            text-align: center;\n        }\n        img[_ngcontent-%COMP%]{\n            height: 6rem;\n            width: 8.8rem;\n            border-radius: 0.3rem;\n        }\n        .mui-table-view[_ngcontent-%COMP%]{\n            line-height: normal;\n            max-width: none;\n            height: auto;\n            padding: 0 1rem;\n        }\n        .mui-table-view-cell[_ngcontent-%COMP%]{\n            padding: 1.25rem 0;\n        }\n        .mui-table-view[_ngcontent-%COMP%]   .mui-media-object.mui-pull-left[_ngcontent-%COMP%]{\n            margin-right: 1rem;\n        }\n        .mui-table-view[_ngcontent-%COMP%]   .mui-media-object[_ngcontent-%COMP%] {\n            line-height: normal;\n            max-width: none;\n            height: 6rem;\n        }\n        .title[_ngcontent-%COMP%]{\n            font-family: \'方正清刻本悦宋简体\';\n            font-size: 1.1rem;\n            color: #2d2d2d;\n        }\n        .abstract[_ngcontent-%COMP%]{\n            font-size: 1.0rem;\n            color: #999;\n            line-height: 2.5rem;\n         }\n        .cost[_ngcontent-%COMP%]{\n            font-family: \'方正清刻本悦宋简体\';\n            font-size: .9rem;\n            color: #ff9100;\n            line-height: 3rem;\n         }\n         .pct100H[_ngcontent-%COMP%]{\n            height: 100%;   \n         }\n         .pct33H[_ngcontent-%COMP%]{\n            height: 33%;    \n         }\n         .mui-table-view[_ngcontent-%COMP%]   .mui-media-body[_ngcontent-%COMP%]{\n            height: 6rem;\n            padding: .1rem 0;\n         }'];
var renderType_MyCoursePage = null;
var _View_MyCoursePage0 = (function (_super) {
    __extends(_View_MyCoursePage0, _super);
    function _View_MyCoursePage0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_MyCoursePage0, renderType_MyCoursePage, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_MyCoursePage0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '    ', null);
        this._text_1 = this.renderer.createText(parentRenderNode, '  \n\n', null);
        this._el_2 = this.renderer.createElement(parentRenderNode, 'ion-header', null);
        this._Header_2_3 = new import10.Wrapper_Header(this.parentInjector.get(import14.Config), new import15.ElementRef(this._el_2), this.renderer, this.parentInjector.get(import16.ViewController, null));
        this._text_3 = this.renderer.createText(this._el_2, '\n  ', null);
        this._el_4 = this.renderer.createElement(this._el_2, 'ion-navbar', null);
        this.renderer.setElementAttribute(this._el_4, 'class', 'toolbar');
        this._appEl_4 = new import3.AppElement(4, 2, this, this._el_4);
        var compView_4 = import11.viewFactory_Navbar0(this.viewUtils, this.injector(4), this._appEl_4);
        this._Navbar_4_4 = new import11.Wrapper_Navbar(this.parentInjector.get(import17.App), this.parentInjector.get(import16.ViewController, null), this.parentInjector.get(import18.NavController, null), this.parentInjector.get(import14.Config), new import15.ElementRef(this._el_4), this.renderer);
        this._appEl_4.initComponent(this._Navbar_4_4.context, [], compView_4);
        this._text_5 = this.renderer.createText(null, '\n    ', null);
        this._el_6 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_6 = new import3.AppElement(6, 4, this, this._el_6);
        var compView_6 = import12.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(6), this._appEl_6);
        this._ToolbarTitle_6_4 = new import12.Wrapper_ToolbarTitle(this.parentInjector.get(import14.Config), new import15.ElementRef(this._el_6), this.renderer, this.parentInjector.get(import19.Toolbar, null), this._Navbar_4_4.context);
        this._appEl_6.initComponent(this._ToolbarTitle_6_4.context, [], compView_6);
        this._text_7 = this.renderer.createText(null, '\n      账户\n    ', null);
        compView_6.create(this._ToolbarTitle_6_4.context, [[].concat([this._text_7])], null);
        this._text_8 = this.renderer.createText(null, '\n  ', null);
        compView_4.create(this._Navbar_4_4.context, [
            [],
            [],
            [],
            [].concat([
                this._text_5,
                this._el_6,
                this._text_8
            ])
        ], null);
        this._text_9 = this.renderer.createText(this._el_2, '\n', null);
        this._text_10 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_11 = this.renderer.createElement(parentRenderNode, 'ion-content', null);
        this._appEl_11 = new import3.AppElement(11, null, this, this._el_11);
        var compView_11 = import13.viewFactory_Content0(this.viewUtils, this.injector(11), this._appEl_11);
        this._Content_11_4 = new import13.Wrapper_Content(this.parentInjector.get(import14.Config), new import15.ElementRef(this._el_11), this.renderer, this.parentInjector.get(import17.App), this.parentInjector.get(import20.Keyboard), this.parentInjector.get(import21.NgZone), this.parentInjector.get(import16.ViewController, null), this.parentInjector.get(import22.Tabs, null));
        this._appEl_11.initComponent(this._Content_11_4.context, [], compView_11);
        this._text_12 = this.renderer.createText(null, '\n\n\n    ', null);
        this._el_13 = this.renderer.createElement(null, 'div', null);
        this.renderer.setElementAttribute(this._el_13, 'class', 'mui-content bgwh');
        this.renderer.setElementAttribute(this._el_13, 'style', 'position:absolute; width:100%; height:100%;');
        this._text_14 = this.renderer.createText(this._el_13, '\n        ', null);
        this._el_15 = this.renderer.createElement(this._el_13, 'div', null);
        this.renderer.setElementAttribute(this._el_15, 'id', 'bg');
        this.renderer.setElementAttribute(this._el_15, 'style', 'margin: auto;margin-top: 30%; background:url(source/img/1_02.png) no-repeat; height: 315px; width: 133px;height: 100%; background-size:contain; display: none;');
        this._text_16 = this.renderer.createText(this._el_13, '\n        ', null);
        this._text_17 = this.renderer.createText(this._el_13, '\n        ', null);
        this._el_18 = this.renderer.createElement(this._el_13, 'ul', null);
        this.renderer.setElementAttribute(this._el_18, 'class', 'mui-table-view mt0 Lc_middle');
        this.renderer.setElementAttribute(this._el_18, 'id', 'list');
        this._text_19 = this.renderer.createText(this._el_18, '\n           ', null);
        this._el_20 = this.renderer.createElement(this._el_18, 'li', null);
        this.renderer.setElementAttribute(this._el_20, 'class', 'mui-table-view-cell mui-media');
        this._text_21 = this.renderer.createText(this._el_20, '\n                ', null);
        this._el_22 = this.renderer.createElement(this._el_20, 'img', null);
        this.renderer.setElementAttribute(this._el_22, 'class', 'mui-media-object mui-pull-left');
        this.renderer.setElementAttribute(this._el_22, 'src', 'source/img/1_02.png');
        this._text_23 = this.renderer.createText(this._el_20, '\n                ', null);
        this._el_24 = this.renderer.createElement(this._el_20, 'div', null);
        this.renderer.setElementAttribute(this._el_24, 'class', 'mui-media-body');
        this._text_25 = this.renderer.createText(this._el_24, '\n                    ', null);
        this._el_26 = this.renderer.createElement(this._el_24, 'div', null);
        this.renderer.setElementAttribute(this._el_26, 'class', 'pct33H');
        this._text_27 = this.renderer.createText(this._el_26, '\n                        ', null);
        this._el_28 = this.renderer.createElement(this._el_26, 'span', null);
        this.renderer.setElementAttribute(this._el_28, 'class', 'title');
        this._text_29 = this.renderer.createText(this._el_28, '大觉悟家庭', null);
        this._text_30 = this.renderer.createText(this._el_26, '\n                        ', null);
        this._el_31 = this.renderer.createElement(this._el_26, 'div', null);
        this.renderer.setElementAttribute(this._el_31, 'class', 'r');
        this._text_32 = this.renderer.createText(this._el_31, '\n                            ', null);
        this._el_33 = this.renderer.createElement(this._el_31, 'span', null);
        this.renderer.setElementAttribute(this._el_33, 'class', 'orange_round');
        this._text_34 = this.renderer.createText(this._el_33, '进行中', null);
        this._text_35 = this.renderer.createText(this._el_31, '\n                        ', null);
        this._text_36 = this.renderer.createText(this._el_26, '\n                    ', null);
        this._text_37 = this.renderer.createText(this._el_24, '\n                    ', null);
        this._el_38 = this.renderer.createElement(this._el_24, 'div', null);
        this.renderer.setElementAttribute(this._el_38, 'class', 'abstract pct33H mui-ellipsis');
        this._text_39 = this.renderer.createText(this._el_38, '能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？', null);
        this._text_40 = this.renderer.createText(this._el_24, '\n                    ', null);
        this._el_41 = this.renderer.createElement(this._el_24, 'div', null);
        this.renderer.setElementAttribute(this._el_41, 'class', 'cost pct33H');
        this._text_42 = this.renderer.createText(this._el_41, '￥900.00', null);
        this._text_43 = this.renderer.createText(this._el_24, '\n                    \n                ', null);
        this._text_44 = this.renderer.createText(this._el_20, '\n            ', null);
        this._text_45 = this.renderer.createText(this._el_18, '\n        ', null);
        this._text_46 = this.renderer.createText(this._el_13, '\n    ', null);
        this._text_47 = this.renderer.createText(null, '\n\n    ', null);
        compView_11.create(this._Content_11_4.context, [
            [],
            [].concat([
                this._text_12,
                this._el_13,
                this._text_47
            ]),
            []
        ], null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this.init([], [
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
            this._text_17,
            this._el_18,
            this._text_19,
            this._el_20,
            this._text_21,
            this._el_22,
            this._text_23,
            this._el_24,
            this._text_25,
            this._el_26,
            this._text_27,
            this._el_28,
            this._text_29,
            this._text_30,
            this._el_31,
            this._text_32,
            this._el_33,
            this._text_34,
            this._text_35,
            this._text_36,
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
            this._text_47
        ], [], []);
        return null;
    };
    _View_MyCoursePage0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import23.ToolbarTitle) && ((6 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._ToolbarTitle_6_4.context;
        }
        if (((token === import24.Navbar) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 8)))) {
            return this._Navbar_4_4.context;
        }
        if (((token === import19.Header) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 9)))) {
            return this._Header_2_3.context;
        }
        if (((token === import25.Content) && ((11 <= requestNodeIndex) && (requestNodeIndex <= 47)))) {
            return this._Content_11_4.context;
        }
        return notFoundResult;
    };
    _View_MyCoursePage0.prototype.detectChangesInternal = function (throwOnChange) {
        this._Header_2_3.detectChangesInternal(this, this._el_2, throwOnChange);
        this._Navbar_4_4.detectChangesInternal(this, this._el_4, throwOnChange);
        if (this._ToolbarTitle_6_4.detectChangesInternal(this, this._el_6, throwOnChange)) {
            this._appEl_6.componentView.markAsCheckOnce();
        }
        if (this._Content_11_4.detectChangesInternal(this, this._el_11, throwOnChange)) {
            this._appEl_11.componentView.markAsCheckOnce();
        }
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_0 = this._Navbar_4_4.context._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setElementProperty(this._el_4, 'hidden', currVal_0);
            this._expr_0 = currVal_0;
        }
        var currVal_1 = this._Navbar_4_4.context._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementClass(this._el_4, 'statusbar-padding', currVal_1);
            this._expr_1 = currVal_1;
        }
        var currVal_2 = this._Content_11_4.context._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setElementClass(this._el_11, 'statusbar-padding', currVal_2);
            this._expr_2 = currVal_2;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Navbar_4_4.context.ngAfterViewInit();
            }
        }
    };
    _View_MyCoursePage0.prototype.destroyInternal = function () {
        this._Content_11_4.context.ngOnDestroy();
    };
    return _View_MyCoursePage0;
}(import1.AppView));
export function viewFactory_MyCoursePage0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_MyCoursePage === null)) {
        (renderType_MyCoursePage = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.Emulated, styles_MyCoursePage, {}));
    }
    return new _View_MyCoursePage0(viewUtils, parentInjector, declarationEl);
}
//# sourceMappingURL=mycourse.ngfactory.js.map