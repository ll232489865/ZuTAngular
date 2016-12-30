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
import * as import0 from './discoveryDeatil';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from '../../node_modules/ionic-angular/components/toolbar/toolbar.ngfactory';
import * as import11 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import12 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import13 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import14 from '../../node_modules/ionic-angular/components/item/item.ngfactory';
import * as import15 from '@angular/core/src/linker/query_list';
import * as import16 from '../../node_modules/ionic-angular/components/label/label.ngfactory';
import * as import17 from '../../node_modules/ionic-angular/components/button/button.ngfactory';
import * as import18 from 'ionic-angular/config/config';
import * as import19 from '@angular/core/src/linker/element_ref';
import * as import20 from 'ionic-angular/navigation/view-controller';
import * as import21 from 'ionic-angular/components/app/app';
import * as import22 from 'ionic-angular/navigation/nav-controller';
import * as import23 from 'ionic-angular/components/toolbar/toolbar';
import * as import24 from 'ionic-angular/util/keyboard';
import * as import25 from '@angular/core/src/zone/ng_zone';
import * as import26 from 'ionic-angular/components/tabs/tabs';
import * as import27 from 'ionic-angular/util/form';
import * as import28 from 'ionic-angular/components/item/item-reorder';
import * as import29 from 'ionic-angular/components/navbar/navbar';
import * as import30 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import31 from 'ionic-angular/components/label/label';
import * as import32 from 'ionic-angular/components/item/item';
import * as import33 from 'ionic-angular/components/button/button';
import * as import34 from 'ionic-angular/components/content/content';
export var Wrapper_Details = (function () {
    function Wrapper_Details() {
        this.changed = false;
        this.context = new import0.Details();
    }
    Wrapper_Details.prototype.detectChangesInternal = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    };
    return Wrapper_Details;
}());
var renderType_Details_Host = null;
var _View_Details_Host0 = (function (_super) {
    __extends(_View_Details_Host0, _super);
    function _View_Details_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_Details_Host0, renderType_Details_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_Details_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('my-component', rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_Details0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Details_0_4 = new Wrapper_Details();
        this._appEl_0.initComponent(this._Details_0_4.context, [], compView_0);
        compView_0.create(this._Details_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_Details_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.Details) && (0 === requestNodeIndex))) {
            return this._Details_0_4.context;
        }
        return notFoundResult;
    };
    _View_Details_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._Details_0_4.detectChangesInternal(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_Details_Host0;
}(import1.AppView));
function viewFactory_Details_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_Details_Host === null)) {
        (renderType_Details_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_Details_Host0(viewUtils, parentInjector, declarationEl);
}
export var DetailsNgFactory = new import9.ComponentFactory('my-component', viewFactory_Details_Host0, import0.Details);
var styles_Details = [];
var renderType_Details = null;
var _View_Details0 = (function (_super) {
    __extends(_View_Details0, _super);
    function _View_Details0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_Details0, renderType_Details, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_Details0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'ion-header', null);
        this._Header_0_3 = new import10.Wrapper_Header(this.parentInjector.get(import18.Config), new import19.ElementRef(this._el_0), this.renderer, this.parentInjector.get(import20.ViewController, null));
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'ion-navbar', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'toolbar');
        this._appEl_2 = new import3.AppElement(2, 0, this, this._el_2);
        var compView_2 = import11.viewFactory_Navbar0(this.viewUtils, this.injector(2), this._appEl_2);
        this._Navbar_2_4 = new import11.Wrapper_Navbar(this.parentInjector.get(import21.App), this.parentInjector.get(import20.ViewController, null), this.parentInjector.get(import22.NavController, null), this.parentInjector.get(import18.Config), new import19.ElementRef(this._el_2), this.renderer);
        this._appEl_2.initComponent(this._Navbar_2_4.context, [], compView_2);
        this._text_3 = this.renderer.createText(null, '\n        ', null);
        this._el_4 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_4 = new import3.AppElement(4, 2, this, this._el_4);
        var compView_4 = import12.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(4), this._appEl_4);
        this._ToolbarTitle_4_4 = new import12.Wrapper_ToolbarTitle(this.parentInjector.get(import18.Config), new import19.ElementRef(this._el_4), this.renderer, this.parentInjector.get(import23.Toolbar, null), this._Navbar_2_4.context);
        this._appEl_4.initComponent(this._ToolbarTitle_4_4.context, [], compView_4);
        this._text_5 = this.renderer.createText(null, '\n            精选详情\n        ', null);
        compView_4.create(this._ToolbarTitle_4_4.context, [[].concat([this._text_5])], null);
        this._text_6 = this.renderer.createText(null, '\n    ', null);
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
        this._text_8 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_9 = this.renderer.createElement(parentRenderNode, 'ion-content', null);
        this._appEl_9 = new import3.AppElement(9, null, this, this._el_9);
        var compView_9 = import13.viewFactory_Content0(this.viewUtils, this.injector(9), this._appEl_9);
        this._Content_9_4 = new import13.Wrapper_Content(this.parentInjector.get(import18.Config), new import19.ElementRef(this._el_9), this.renderer, this.parentInjector.get(import21.App), this.parentInjector.get(import24.Keyboard), this.parentInjector.get(import25.NgZone), this.parentInjector.get(import20.ViewController, null), this.parentInjector.get(import26.Tabs, null));
        this._appEl_9.initComponent(this._Content_9_4.context, [], compView_9);
        this._text_10 = this.renderer.createText(null, '\n	', null);
        this._el_11 = this.renderer.createElement(null, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_11, 'class', 'item item-block');
        this._appEl_11 = new import3.AppElement(11, 9, this, this._el_11);
        var compView_11 = import14.viewFactory_Item0(this.viewUtils, this.injector(11), this._appEl_11);
        this._Item_11_4 = new import14.Wrapper_Item(this.parentInjector.get(import27.Form), this.parentInjector.get(import18.Config), new import19.ElementRef(this._el_11), this.renderer, this.parentInjector.get(import28.ItemReorder, null));
        this._ItemContent_11_5 = new import14.Wrapper_ItemContent();
        this._query_Label_11_0 = new import15.QueryList();
        this._query_Button_11_1 = new import15.QueryList();
        this._query_Icon_11_2 = new import15.QueryList();
        this._appEl_11.initComponent(this._Item_11_4.context, [], compView_11);
        this._text_12 = this.renderer.createText(null, '\n		', null);
        this._el_13 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_13 = new import3.AppElement(13, 11, this, this._el_13);
        var compView_13 = import12.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(13), this._appEl_13);
        this._ToolbarTitle_13_4 = new import12.Wrapper_ToolbarTitle(this.parentInjector.get(import18.Config), new import19.ElementRef(this._el_13), this.renderer, this.parentInjector.get(import23.Toolbar, null), this.parentInjector.get(import29.Navbar, null));
        this._appEl_13.initComponent(this._ToolbarTitle_13_4.context, [], compView_13);
        this._text_14 = this.renderer.createText(null, '精选详情', null);
        compView_13.create(this._ToolbarTitle_13_4.context, [[].concat([this._text_14])], null);
        this._text_15 = this.renderer.createText(null, '\n		\n		', null);
        this._el_16 = this.renderer.createElement(null, 'ion-label', null);
        this.renderer.setElementAttribute(this._el_16, 'style', 'white-space: normal;');
        this._Label_16_3 = new import16.Wrapper_Label(this.parentInjector.get(import18.Config), new import19.ElementRef(this._el_16), this.renderer, null, null, null, null);
        this._text_17 = this.renderer.createText(this._el_16, '\n			Sliding items can be swiped to the left or right to reveal a hidden set of buttons. To use a sliding item, add an ion-item-sliding component inside of an ion-list component. Next, add ancomponent inside of the sliding item to contain the buttons.\n\n		', null);
        this._text_18 = this.renderer.createText(null, '\n	', null);
        this._query_Label_11_0.reset([this._Label_16_3.context]);
        this._Item_11_4.context.contentLabel = this._query_Label_11_0.first;
        compView_11.create(this._Item_11_4.context, [
            [],
            [].concat([this._el_16]),
            [].concat([
                this._text_12,
                this._el_13,
                this._text_15,
                this._text_18
            ]),
            [],
            []
        ], null);
        this._text_19 = this.renderer.createText(null, '\n	', null);
        this._el_20 = this.renderer.createElement(null, 'ion-item', null);
        this.renderer.setElementAttribute(this._el_20, 'class', 'item item-block');
        this._appEl_20 = new import3.AppElement(20, 9, this, this._el_20);
        var compView_20 = import14.viewFactory_Item0(this.viewUtils, this.injector(20), this._appEl_20);
        this._Item_20_4 = new import14.Wrapper_Item(this.parentInjector.get(import27.Form), this.parentInjector.get(import18.Config), new import19.ElementRef(this._el_20), this.renderer, this.parentInjector.get(import28.ItemReorder, null));
        this._ItemContent_20_5 = new import14.Wrapper_ItemContent();
        this._query_Label_20_0 = new import15.QueryList();
        this._query_Button_20_1 = new import15.QueryList();
        this._query_Icon_20_2 = new import15.QueryList();
        this._appEl_20.initComponent(this._Item_20_4.context, [], compView_20);
        this._text_21 = this.renderer.createText(null, '\n		', null);
        this._el_22 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_22, 'ion-button', '');
        this.renderer.setElementAttribute(this._el_22, 'round', '');
        this._appEl_22 = new import3.AppElement(22, 20, this, this._el_22);
        var compView_22 = import17.viewFactory_Button0(this.viewUtils, this.injector(22), this._appEl_22);
        this._Button_22_4 = new import17.Wrapper_Button(null, '', this.parentInjector.get(import18.Config), new import19.ElementRef(this._el_22), this.renderer);
        this._appEl_22.initComponent(this._Button_22_4.context, [], compView_22);
        this._text_23 = this.renderer.createText(null, 'uploadImage', null);
        compView_22.create(this._Button_22_4.context, [[].concat([this._text_23])], null);
        this._text_24 = this.renderer.createText(null, '\n	', null);
        this._query_Label_20_0.reset([]);
        this._Item_20_4.context.contentLabel = this._query_Label_20_0.first;
        compView_20.create(this._Item_20_4.context, [
            [],
            [],
            [].concat([
                this._text_21,
                this._el_22,
                this._text_24
            ]),
            [],
            []
        ], null);
        this._text_25 = this.renderer.createText(null, '\n', null);
        compView_9.create(this._Content_9_4.context, [
            [],
            [].concat([
                this._text_10,
                this._el_11,
                this._text_19,
                this._el_20,
                this._text_25
            ]),
            []
        ], null);
        this._text_26 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_22, 'click', this.eventHandler(this._handle_click_22_0.bind(this)));
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
            this._el_11,
            this._text_12,
            this._el_13,
            this._text_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._text_18,
            this._text_19,
            this._el_20,
            this._text_21,
            this._el_22,
            this._text_23,
            this._text_24,
            this._text_25,
            this._text_26
        ], [disposable_0], []);
        return null;
    };
    _View_Details0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import30.ToolbarTitle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 5)))) {
            return this._ToolbarTitle_4_4.context;
        }
        if (((token === import29.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 6)))) {
            return this._Navbar_2_4.context;
        }
        if (((token === import23.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._Header_0_3.context;
        }
        if (((token === import30.ToolbarTitle) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 14)))) {
            return this._ToolbarTitle_13_4.context;
        }
        if (((token === import31.Label) && ((16 <= requestNodeIndex) && (requestNodeIndex <= 17)))) {
            return this._Label_16_3.context;
        }
        if (((token === import32.Item) && ((11 <= requestNodeIndex) && (requestNodeIndex <= 18)))) {
            return this._Item_11_4.context;
        }
        if (((token === import32.ItemContent) && ((11 <= requestNodeIndex) && (requestNodeIndex <= 18)))) {
            return this._ItemContent_11_5.context;
        }
        if (((token === import33.Button) && ((22 <= requestNodeIndex) && (requestNodeIndex <= 23)))) {
            return this._Button_22_4.context;
        }
        if (((token === import32.Item) && ((20 <= requestNodeIndex) && (requestNodeIndex <= 24)))) {
            return this._Item_20_4.context;
        }
        if (((token === import32.ItemContent) && ((20 <= requestNodeIndex) && (requestNodeIndex <= 24)))) {
            return this._ItemContent_20_5.context;
        }
        if (((token === import34.Content) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 25)))) {
            return this._Content_9_4.context;
        }
        return notFoundResult;
    };
    _View_Details0.prototype.detectChangesInternal = function (throwOnChange) {
        this._Header_0_3.detectChangesInternal(this, this._el_0, throwOnChange);
        this._Navbar_2_4.detectChangesInternal(this, this._el_2, throwOnChange);
        if (this._ToolbarTitle_4_4.detectChangesInternal(this, this._el_4, throwOnChange)) {
            this._appEl_4.componentView.markAsCheckOnce();
        }
        if (this._Content_9_4.detectChangesInternal(this, this._el_9, throwOnChange)) {
            this._appEl_9.componentView.markAsCheckOnce();
        }
        if (this._Item_11_4.detectChangesInternal(this, this._el_11, throwOnChange)) {
            this._appEl_11.componentView.markAsCheckOnce();
        }
        this._ItemContent_11_5.detectChangesInternal(this, this._el_11, throwOnChange);
        if (this._ToolbarTitle_13_4.detectChangesInternal(this, this._el_13, throwOnChange)) {
            this._appEl_13.componentView.markAsCheckOnce();
        }
        this._Label_16_3.detectChangesInternal(this, this._el_16, throwOnChange);
        if (this._Item_20_4.detectChangesInternal(this, this._el_20, throwOnChange)) {
            this._appEl_20.componentView.markAsCheckOnce();
        }
        this._ItemContent_20_5.detectChangesInternal(this, this._el_20, throwOnChange);
        var currVal_4 = '';
        this._Button_22_4.check_round(currVal_4, throwOnChange, false);
        if (this._Button_22_4.detectChangesInternal(this, this._el_22, throwOnChange)) {
            this._appEl_22.componentView.markAsCheckOnce();
        }
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_Button_11_1.dirty) {
                this._query_Button_11_1.reset([]);
                this._Item_11_4.context._buttons = this._query_Button_11_1;
                this._query_Button_11_1.notifyOnChanges();
            }
            if (this._query_Icon_11_2.dirty) {
                this._query_Icon_11_2.reset([]);
                this._Item_11_4.context._icons = this._query_Icon_11_2;
                this._query_Icon_11_2.notifyOnChanges();
            }
            if (this._query_Button_20_1.dirty) {
                this._query_Button_20_1.reset([this._Button_22_4.context]);
                this._Item_20_4.context._buttons = this._query_Button_20_1;
                this._query_Button_20_1.notifyOnChanges();
            }
            if (this._query_Icon_20_2.dirty) {
                this._query_Icon_20_2.reset([]);
                this._Item_20_4.context._icons = this._query_Icon_20_2;
                this._query_Icon_20_2.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_11_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_22_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Item_20_4.context.ngAfterContentInit();
            }
        }
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
    _View_Details0.prototype.destroyInternal = function () {
        this._Content_9_4.context.ngOnDestroy();
    };
    _View_Details0.prototype._handle_click_22_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.uploadImage() !== false);
        return (true && pd_0);
    };
    return _View_Details0;
}(import1.AppView));
export function viewFactory_Details0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_Details === null)) {
        (renderType_Details = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, styles_Details, {}));
    }
    return new _View_Details0(viewUtils, parentInjector, declarationEl);
}
//# sourceMappingURL=discoveryDeatil.ngfactory.js.map