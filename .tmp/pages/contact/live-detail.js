import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
export var LiveDetail = (function () {
    function LiveDetail(params) {
        this.params = params;
        this.item = params.data.item;
    }
    LiveDetail.decorators = [
        { type: Component, args: [{
                    selector: 'page-live',
                    templateUrl: 'live-detail.html'
                },] },
    ];
    /** @nocollapse */
    LiveDetail.ctorParameters = [
        { type: NavParams, },
    ];
    return LiveDetail;
}());
//# sourceMappingURL=live-detail.js.map