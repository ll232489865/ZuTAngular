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
import * as import0 from './contact';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/navigation/nav-controller';
import * as import9 from './live.service';
import * as import10 from 'ionic-angular/navigation/nav-params';
import * as import11 from 'ionic-angular/components/app/app';
import * as import12 from '../mine/login.service';
import * as import13 from '@angular/core/src/metadata/view';
import * as import14 from '@angular/core/src/linker/component_factory';
import * as import15 from '../../node_modules/ionic-angular/components/toolbar/toolbar.ngfactory';
import * as import16 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import17 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import18 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import19 from '../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import20 from 'ionic-angular/config/config';
import * as import21 from '@angular/core/src/linker/element_ref';
import * as import22 from 'ionic-angular/navigation/view-controller';
import * as import23 from 'ionic-angular/components/toolbar/toolbar';
import * as import24 from 'ionic-angular/util/keyboard';
import * as import25 from '@angular/core/src/zone/ng_zone';
import * as import26 from 'ionic-angular/components/tabs/tabs';
import * as import27 from '@angular/core/src/linker/template_ref';
import * as import28 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import29 from 'ionic-angular/components/navbar/navbar';
import * as import30 from '@angular/common/src/directives/ng_if';
import * as import31 from 'ionic-angular/components/content/content';
import * as import32 from '../../node_modules/ionic-angular/components/item/item.ngfactory';
import * as import33 from '@angular/core/src/linker/query_list';
import * as import34 from 'ionic-angular/util/form';
import * as import35 from 'ionic-angular/components/item/item-reorder';
import * as import36 from 'ionic-angular/components/item/item';
import * as import37 from '../../node_modules/ionic-angular/components/list/list.ngfactory';
import * as import38 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import39 from 'ionic-angular/gestures/gesture-controller';
import * as import40 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import41 from '@angular/common/src/directives/ng_for';
import * as import42 from 'ionic-angular/components/list/list';
import * as import43 from '../../node_modules/ionic-angular/components/avatar/avatar.ngfactory';
import * as import44 from 'ionic-angular/components/avatar/avatar';
import * as import45 from '@angular/core/src/security';
export var Wrapper_ContactPage = (function () {
    function Wrapper_ContactPage(p0, p1, p2, p3, p4) {
        this.changed = false;
        this.context = new import0.ContactPage(p0, p1, p2, p3, p4);
    }
    Wrapper_ContactPage.prototype.detectChangesInternal = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
            this.context.ngDoCheck();
        }
        return changed;
    };
    return Wrapper_ContactPage;
}());
var renderType_ContactPage_Host = null;
var _View_ContactPage_Host0 = (function (_super) {
    __extends(_View_ContactPage_Host0, _super);
    function _View_ContactPage_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ContactPage_Host0, renderType_ContactPage_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ContactPage_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('page-contact', rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_ContactPage0(this.viewUtils, this.injector(0), this._appEl_0);
        this._ContactPage_0_4 = new Wrapper_ContactPage(this.parentInjector.get(import8.NavController), this.parentInjector.get(import9.LiveService), this.parentInjector.get(import10.NavParams), this.parentInjector.get(import11.App), this.parentInjector.get(import12.LoginService));
        this._appEl_0.initComponent(this._ContactPage_0_4.context, [], compView_0);
        compView_0.create(this._ContactPage_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_ContactPage_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.ContactPage) && (0 === requestNodeIndex))) {
            return this._ContactPage_0_4.context;
        }
        return notFoundResult;
    };
    _View_ContactPage_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._ContactPage_0_4.detectChangesInternal(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            this._ContactPage_0_4.context.ngAfterContentChecked();
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            this._ContactPage_0_4.context.ngAfterViewChecked();
        }
    };
    return _View_ContactPage_Host0;
}(import1.AppView));
function viewFactory_ContactPage_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ContactPage_Host === null)) {
        (renderType_ContactPage_Host = viewUtils.createRenderComponentType('', 0, import13.ViewEncapsulation.None, [], {}));
    }
    return new _View_ContactPage_Host0(viewUtils, parentInjector, declarationEl);
}
export var ContactPageNgFactory = new import14.ComponentFactory('page-contact', viewFactory_ContactPage_Host0, import0.ContactPage);
var styles_ContactPage = [];
var renderType_ContactPage = null;
var _View_ContactPage0 = (function (_super) {
    __extends(_View_ContactPage0, _super);
    function _View_ContactPage0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ContactPage0, renderType_ContactPage, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ContactPage0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'ion-header', null);
        this._Header_0_3 = new import15.Wrapper_Header(this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_0), this.renderer, this.parentInjector.get(import22.ViewController, null));
        this._text_1 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'ion-navbar', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'toolbar');
        this._appEl_2 = new import3.AppElement(2, 0, this, this._el_2);
        var compView_2 = import16.viewFactory_Navbar0(this.viewUtils, this.injector(2), this._appEl_2);
        this._Navbar_2_4 = new import16.Wrapper_Navbar(this.parentInjector.get(import11.App), this.parentInjector.get(import22.ViewController, null), this.parentInjector.get(import8.NavController, null), this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_2), this.renderer);
        this._appEl_2.initComponent(this._Navbar_2_4.context, [], compView_2);
        this._text_3 = this.renderer.createText(null, '\n    ', null);
        this._el_4 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_4 = new import3.AppElement(4, 2, this, this._el_4);
        var compView_4 = import17.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(4), this._appEl_4);
        this._ToolbarTitle_4_4 = new import17.Wrapper_ToolbarTitle(this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_4), this.renderer, this.parentInjector.get(import23.Toolbar, null), this._Navbar_2_4.context);
        this._appEl_4.initComponent(this._ToolbarTitle_4_4.context, [], compView_4);
        this._text_5 = this.renderer.createText(null, '\n      Contact\n    ', null);
        compView_4.create(this._ToolbarTitle_4_4.context, [[].concat([this._text_5])], null);
        this._text_6 = this.renderer.createText(null, '\n  ', null);
        compView_2.create(this._Navbar_2_4.context, [
            [],
            [],
            [],
            [].concat([
                this._text_3,
                this._el_4,
                this._text_6
            ])
        ], null);
        this._text_7 = this.renderer.createText(this._el_0, '\n', null);
        this._text_8 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_9 = this.renderer.createElement(parentRenderNode, 'ion-content', null);
        this._appEl_9 = new import3.AppElement(9, null, this, this._el_9);
        var compView_9 = import18.viewFactory_Content0(this.viewUtils, this.injector(9), this._appEl_9);
        this._Content_9_4 = new import18.Wrapper_Content(this.parentInjector.get(import20.Config), new import21.ElementRef(this._el_9), this.renderer, this.parentInjector.get(import11.App), this.parentInjector.get(import24.Keyboard), this.parentInjector.get(import25.NgZone), this.parentInjector.get(import22.ViewController, null), this.parentInjector.get(import26.Tabs, null));
        this._appEl_9.initComponent(this._Content_9_4.context, [], compView_9);
        this._text_10 = this.renderer.createText(null, '\n\n  ', null);
        this._anchor_11 = this.renderer.createTemplateAnchor(null, null);
        this._appEl_11 = new import3.AppElement(11, 9, this, this._anchor_11);
        this._TemplateRef_11_5 = new import27.TemplateRef_(this._appEl_11, viewFactory_ContactPage1);
        this._NgIf_11_6 = new import19.Wrapper_NgIf(this._appEl_11.vcRef, this._TemplateRef_11_5);
        this._text_12 = this.renderer.createText(null, '\n\n  ', null);
        this._anchor_13 = this.renderer.createTemplateAnchor(null, null);
        this._appEl_13 = new import3.AppElement(13, 9, this, this._anchor_13);
        this._TemplateRef_13_5 = new import27.TemplateRef_(this._appEl_13, viewFactory_ContactPage2);
        this._NgIf_13_6 = new import19.Wrapper_NgIf(this._appEl_13.vcRef, this._TemplateRef_13_5);
        this._text_14 = this.renderer.createText(null, '\n\n  ', null);
        this._anchor_15 = this.renderer.createTemplateAnchor(null, null);
        this._appEl_15 = new import3.AppElement(15, 9, this, this._anchor_15);
        this._TemplateRef_15_5 = new import27.TemplateRef_(this._appEl_15, viewFactory_ContactPage3);
        this._NgIf_15_6 = new import19.Wrapper_NgIf(this._appEl_15.vcRef, this._TemplateRef_15_5);
        this._text_16 = this.renderer.createText(null, '\n', null);
        compView_9.create(this._Content_9_4.context, [
            [],
            [].concat([
                this._text_10,
                this._appEl_11,
                this._text_12,
                this._appEl_13,
                this._text_14,
                this._appEl_15,
                this._text_16
            ]),
            []
        ], null);
        this._text_17 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this.init([], [
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
            this._anchor_11,
            this._text_12,
            this._anchor_13,
            this._text_14,
            this._anchor_15,
            this._text_16,
            this._text_17
        ], [], []);
        return null;
    };
    _View_ContactPage0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import28.ToolbarTitle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 5)))) {
            return this._ToolbarTitle_4_4.context;
        }
        if (((token === import29.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 6)))) {
            return this._Navbar_2_4.context;
        }
        if (((token === import23.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._Header_0_3.context;
        }
        if (((token === import27.TemplateRef) && (11 === requestNodeIndex))) {
            return this._TemplateRef_11_5;
        }
        if (((token === import30.NgIf) && (11 === requestNodeIndex))) {
            return this._NgIf_11_6.context;
        }
        if (((token === import27.TemplateRef) && (13 === requestNodeIndex))) {
            return this._TemplateRef_13_5;
        }
        if (((token === import30.NgIf) && (13 === requestNodeIndex))) {
            return this._NgIf_13_6.context;
        }
        if (((token === import27.TemplateRef) && (15 === requestNodeIndex))) {
            return this._TemplateRef_15_5;
        }
        if (((token === import30.NgIf) && (15 === requestNodeIndex))) {
            return this._NgIf_15_6.context;
        }
        if (((token === import31.Content) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 16)))) {
            return this._Content_9_4.context;
        }
        return notFoundResult;
    };
    _View_ContactPage0.prototype.detectChangesInternal = function (throwOnChange) {
        this._Header_0_3.detectChangesInternal(this, this._el_0, throwOnChange);
        this._Navbar_2_4.detectChangesInternal(this, this._el_2, throwOnChange);
        if (this._ToolbarTitle_4_4.detectChangesInternal(this, this._el_4, throwOnChange)) {
            this._appEl_4.componentView.markAsCheckOnce();
        }
        if (this._Content_9_4.detectChangesInternal(this, this._el_9, throwOnChange)) {
            this._appEl_9.componentView.markAsCheckOnce();
        }
        var currVal_3 = this.context.loginStatus;
        this._NgIf_11_6.check_ngIf(currVal_3, throwOnChange, false);
        this._NgIf_11_6.detectChangesInternal(this, this._anchor_11, throwOnChange);
        var currVal_4 = !this.context.loginStatus;
        this._NgIf_13_6.check_ngIf(currVal_4, throwOnChange, false);
        this._NgIf_13_6.detectChangesInternal(this, this._anchor_13, throwOnChange);
        var currVal_5 = ((!this.context.loginStatus && this.context.liveInfo) && (this.context.liveInfo.length > 0));
        this._NgIf_15_6.check_ngIf(currVal_5, throwOnChange, false);
        this._NgIf_15_6.detectChangesInternal(this, this._anchor_15, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        var currVal_0 = this._Navbar_2_4.context._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setElementProperty(this._el_2, 'hidden', currVal_0);
            this._expr_0 = currVal_0;
        }
        var currVal_1 = this._Navbar_2_4.context._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementClass(this._el_2, 'statusbar-padding', currVal_1);
            this._expr_1 = currVal_1;
        }
        var currVal_2 = this._Content_9_4.context._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setElementClass(this._el_9, 'statusbar-padding', currVal_2);
            this._expr_2 = currVal_2;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Navbar_2_4.context.ngAfterViewInit();
            }
        }
    };
    _View_ContactPage0.prototype.destroyInternal = function () {
        this._Content_9_4.context.ngOnDestroy();
    };
    return _View_ContactPage0;
}(import1.AppView));
export function viewFactory_ContactPage0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ContactPage === null)) {
        (renderType_ContactPage = viewUtils.createRenderComponentType('', 0, import13.ViewEncapsulation.None, styles_ContactPage, {}));
    }
    return new _View_ContactPage0(viewUtils, parentInjector, declarationEl);
}
var _View_ContactPage1 = (function (_super) {
    __extends(_View_ContactPage1, _super);
    function _View_ContactPage1(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ContactPage1, renderType_ContactPage, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ContactPage1.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'item-center item item-block');
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = import32.viewFactory_Item0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Item_0_4 = new import32.Wrapper_Item(this.parent.parentInjector.get(import34.Form), this.parent.parentInjector.get(import20.Config), new import21.ElementRef(this._el_0), this.renderer, this.parent.parentInjector.get(import35.ItemReorder, null));
        this._ItemContent_0_5 = new import32.Wrapper_ItemContent();
        this._query_Label_0_0 = new import33.QueryList();
        this._query_Button_0_1 = new import33.QueryList();
        this._query_Icon_0_2 = new import33.QueryList();
        this._appEl_0.initComponent(this._Item_0_4.context, [], compView_0);
        this._text_1 = this.renderer.createText(null, '\n    已登陆，无数据？\n  ', null);
        this._query_Label_0_0.reset([]);
        this._Item_0_4.context.contentLabel = this._query_Label_0_0.first;
        compView_0.create(this._Item_0_4.context, [
            [],
            [],
            [].concat([this._text_1]),
            [],
            []
        ], null);
        var disposable_0 = this.renderer.listen(this._el_0, 'click', this.eventHandler(this._handle_click_0_0.bind(this)));
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [disposable_0], []);
        return null;
    };
    _View_ContactPage1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import36.Item) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) {
            return this._Item_0_4.context;
        }
        if (((token === import36.ItemContent) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) {
            return this._ItemContent_0_5.context;
        }
        return notFoundResult;
    };
    _View_ContactPage1.prototype.detectChangesInternal = function (throwOnChange) {
        if (this._Item_0_4.detectChangesInternal(this, this._el_0, throwOnChange)) {
            this._appEl_0.componentView.markAsCheckOnce();
        }
        this._ItemContent_0_5.detectChangesInternal(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_Button_0_1.dirty) {
                this._query_Button_0_1.reset([]);
                this._Item_0_4.context._buttons = this._query_Button_0_1;
                this._query_Button_0_1.notifyOnChanges();
            }
            if (this._query_Icon_0_2.dirty) {
                this._query_Icon_0_2.reset([]);
                this._Item_0_4.context._icons = this._query_Icon_0_2;
                this._query_Icon_0_2.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_0_4.context.ngAfterContentInit();
            }
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_ContactPage1.prototype._handle_click_0_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.parent.context.onLoginClick() !== false);
        return (true && pd_0);
    };
    return _View_ContactPage1;
}(import1.AppView));
function viewFactory_ContactPage1(viewUtils, parentInjector, declarationEl) {
    return new _View_ContactPage1(viewUtils, parentInjector, declarationEl);
}
var _View_ContactPage2 = (function (_super) {
    __extends(_View_ContactPage2, _super);
    function _View_ContactPage2(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ContactPage2, renderType_ContactPage, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ContactPage2.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'item item-block');
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = import32.viewFactory_Item0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Item_0_4 = new import32.Wrapper_Item(this.parent.parentInjector.get(import34.Form), this.parent.parentInjector.get(import20.Config), new import21.ElementRef(this._el_0), this.renderer, this.parent.parentInjector.get(import35.ItemReorder, null));
        this._ItemContent_0_5 = new import32.Wrapper_ItemContent();
        this._query_Label_0_0 = new import33.QueryList();
        this._query_Button_0_1 = new import33.QueryList();
        this._query_Icon_0_2 = new import33.QueryList();
        this._appEl_0.initComponent(this._Item_0_4.context, [], compView_0);
        this._text_1 = this.renderer.createText(null, '\n    先登录\n  ', null);
        this._query_Label_0_0.reset([]);
        this._Item_0_4.context.contentLabel = this._query_Label_0_0.first;
        compView_0.create(this._Item_0_4.context, [
            [],
            [],
            [].concat([this._text_1]),
            [],
            []
        ], null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [], []);
        return null;
    };
    _View_ContactPage2.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import36.Item) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) {
            return this._Item_0_4.context;
        }
        if (((token === import36.ItemContent) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) {
            return this._ItemContent_0_5.context;
        }
        return notFoundResult;
    };
    _View_ContactPage2.prototype.detectChangesInternal = function (throwOnChange) {
        if (this._Item_0_4.detectChangesInternal(this, this._el_0, throwOnChange)) {
            this._appEl_0.componentView.markAsCheckOnce();
        }
        this._ItemContent_0_5.detectChangesInternal(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_Button_0_1.dirty) {
                this._query_Button_0_1.reset([]);
                this._Item_0_4.context._buttons = this._query_Button_0_1;
                this._query_Button_0_1.notifyOnChanges();
            }
            if (this._query_Icon_0_2.dirty) {
                this._query_Icon_0_2.reset([]);
                this._Item_0_4.context._icons = this._query_Icon_0_2;
                this._query_Icon_0_2.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_0_4.context.ngAfterContentInit();
            }
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_ContactPage2;
}(import1.AppView));
function viewFactory_ContactPage2(viewUtils, parentInjector, declarationEl) {
    return new _View_ContactPage2(viewUtils, parentInjector, declarationEl);
}
var _View_ContactPage3 = (function (_super) {
    __extends(_View_ContactPage3, _super);
    function _View_ContactPage3(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ContactPage3, renderType_ContactPage, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ContactPage3.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'ion-list', null);
        this._List_0_3 = new import37.Wrapper_List(this.parent.parentInjector.get(import20.Config), new import21.ElementRef(this._el_0), this.renderer, this.parent.parentInjector.get(import39.GestureController));
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._appEl_2 = new import3.AppElement(2, 0, this, this._anchor_2);
        this._TemplateRef_2_5 = new import27.TemplateRef_(this._appEl_2, viewFactory_ContactPage4);
        this._NgFor_2_6 = new import38.Wrapper_NgFor(this._appEl_2.vcRef, this._TemplateRef_2_5, this.parent.parentInjector.get(import40.IterableDiffers), this.parent.ref);
        this._text_3 = this.renderer.createText(this._el_0, '\n  ', null);
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._anchor_2,
            this._text_3
        ], [], []);
        return null;
    };
    _View_ContactPage3.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import27.TemplateRef) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === import41.NgFor) && (2 === requestNodeIndex))) {
            return this._NgFor_2_6.context;
        }
        if (((token === import42.List) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 3)))) {
            return this._List_0_3.context;
        }
        return notFoundResult;
    };
    _View_ContactPage3.prototype.detectChangesInternal = function (throwOnChange) {
        this._List_0_3.detectChangesInternal(this, this._el_0, throwOnChange);
        var currVal_0 = this.parent.context.liveInfo;
        this._NgFor_2_6.check_ngForOf(currVal_0, throwOnChange, false);
        this._NgFor_2_6.detectChangesInternal(this, this._anchor_2, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_ContactPage3;
}(import1.AppView));
function viewFactory_ContactPage3(viewUtils, parentInjector, declarationEl) {
    return new _View_ContactPage3(viewUtils, parentInjector, declarationEl);
}
var _View_ContactPage4 = (function (_super) {
    __extends(_View_ContactPage4, _super);
    function _View_ContactPage4(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_ContactPage4, renderType_ContactPage, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_ContactPage4.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'li', null);
        this._text_1 = this.renderer.createText(this._el_0, '\n      \n      ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'item item-block');
        this._appEl_2 = new import3.AppElement(2, 0, this, this._el_2);
        var compView_2 = import32.viewFactory_Item0(this.viewUtils, this.injector(2), this._appEl_2);
        this._Item_2_4 = new import32.Wrapper_Item(this.parent.parent.parentInjector.get(import34.Form), this.parent.parent.parentInjector.get(import20.Config), new import21.ElementRef(this._el_2), this.renderer, this.parent.parent.parentInjector.get(import35.ItemReorder, null));
        this._ItemContent_2_5 = new import32.Wrapper_ItemContent();
        this._query_Label_2_0 = new import33.QueryList();
        this._query_Button_2_1 = new import33.QueryList();
        this._query_Icon_2_2 = new import33.QueryList();
        this._appEl_2.initComponent(this._Item_2_4.context, [], compView_2);
        this._text_3 = this.renderer.createText(null, '\n      ', null);
        this._el_4 = this.renderer.createElement(null, 'ion-avatar', null);
        this.renderer.setElementAttribute(this._el_4, 'item-left', '');
        this._Avatar_4_3 = new import43.Wrapper_Avatar();
        this._text_5 = this.renderer.createText(this._el_4, '\n        ', null);
        this._el_6 = this.renderer.createElement(this._el_4, 'img', null);
        this._text_7 = this.renderer.createText(this._el_4, '\n      ', null);
        this._text_8 = this.renderer.createText(null, '\n      ', null);
        this._el_9 = this.renderer.createElement(null, 'h2', null);
        this._text_10 = this.renderer.createText(this._el_9, '', null);
        this._text_11 = this.renderer.createText(null, '\n      ', null);
        this._el_12 = this.renderer.createElement(null, 'h3', null);
        this._text_13 = this.renderer.createText(this._el_12, 'Don\'t Know What To Do!', null);
        this._text_14 = this.renderer.createText(null, '\n      ', null);
        this._el_15 = this.renderer.createElement(null, 'p', null);
        this._text_16 = this.renderer.createText(this._el_15, 'I\'ve had a pretty messed up day. If we just...', null);
        this._text_17 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_2_0.reset([]);
        this._Item_2_4.context.contentLabel = this._query_Label_2_0.first;
        compView_2.create(this._Item_2_4.context, [
            [].concat([this._el_4]),
            [],
            [].concat([
                this._text_3,
                this._text_8,
                this._el_9,
                this._text_11,
                this._el_12,
                this._text_14,
                this._el_15,
                this._text_17
            ]),
            [],
            []
        ], null);
        this._text_18 = this.renderer.createText(this._el_0, '\n    ', null);
        var disposable_0 = this.renderer.listen(this._el_2, 'click', this.eventHandler(this._handle_click_2_0.bind(this)));
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
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
            this._el_12,
            this._text_13,
            this._text_14,
            this._el_15,
            this._text_16,
            this._text_17,
            this._text_18
        ], [disposable_0], []);
        return null;
    };
    _View_ContactPage4.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import44.Avatar) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._Avatar_4_3.context;
        }
        if (((token === import36.Item) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 17)))) {
            return this._Item_2_4.context;
        }
        if (((token === import36.ItemContent) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 17)))) {
            return this._ItemContent_2_5.context;
        }
        return notFoundResult;
    };
    _View_ContactPage4.prototype.detectChangesInternal = function (throwOnChange) {
        if (this._Item_2_4.detectChangesInternal(this, this._el_2, throwOnChange)) {
            this._appEl_2.componentView.markAsCheckOnce();
        }
        this._ItemContent_2_5.detectChangesInternal(this, this._el_2, throwOnChange);
        this._Avatar_4_3.detectChangesInternal(this, this._el_4, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_Button_2_1.dirty) {
                this._query_Button_2_1.reset([]);
                this._Item_2_4.context._buttons = this._query_Button_2_1;
                this._query_Button_2_1.notifyOnChanges();
            }
            if (this._query_Icon_2_2.dirty) {
                this._query_Icon_2_2.reset([]);
                this._Item_2_4.context._icons = this._query_Icon_2_2;
                this._query_Icon_2_2.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_2_4.context.ngAfterContentInit();
            }
        }
        var currVal_1 = import4.interpolate(1, '', this.context.$implicit.grpAvatarUrl, '');
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementProperty(this._el_6, 'src', this.viewUtils.sanitizer.sanitize(import45.SecurityContext.URL, currVal_1));
            this._expr_1 = currVal_1;
        }
        var currVal_2 = import4.interpolate(1, '', this.context.$implicit.grpNm, '');
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_10, currVal_2);
            this._expr_2 = currVal_2;
        }
        this.detectViewChildrenChanges(throwOnChange);
    };
    _View_ContactPage4.prototype._handle_click_2_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.parent.parent.context.openNavDetailsPage(this.context.$implicit) !== false);
        return (true && pd_0);
    };
    return _View_ContactPage4;
}(import1.AppView));
function viewFactory_ContactPage4(viewUtils, parentInjector, declarationEl) {
    return new _View_ContactPage4(viewUtils, parentInjector, declarationEl);
}
//# sourceMappingURL=contact.ngfactory.js.map