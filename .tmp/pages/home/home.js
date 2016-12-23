import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
import { PropagateService } from './propagate.service';
import { ThirdShare } from '../third_share/third-share';
export var HomePage = (function () {
    function HomePage(navCtrl, propagateService, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.propagateService = propagateService;
        this.popoverCtrl = popoverCtrl;
    }
    HomePage.prototype.ngOnInit = function () {
        this.getPropagateList();
    };
    HomePage.prototype.getPropagateList = function () {
        var _this = this;
        this.propagateService
            .getPropagates()
            .then(function (propagateList) { return _this.propagateList = propagateList; });
    };
    HomePage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    HomePage.prototype.itemSelected = function (item) {
        alert("-----item:" + item);
    };
    HomePage.prototype.onShareClick = function (item) {
        // alert("-----onShareClick:" + JSON.stringify(item));
        var popover = this.popoverCtrl.create(ThirdShare);
        popover.present();
    };
    HomePage.prototype.onLogForm = function () {
    };
    HomePage.decorators = [
        { type: Component, args: [{
                    selector: 'page-home',
                    templateUrl: 'home.html'
                },] },
    ];
    /** @nocollapse */
    HomePage.ctorParameters = [
        { type: NavController, },
        { type: PropagateService, },
        { type: PopoverController, },
    ];
    return HomePage;
}());
//# sourceMappingURL=home.js.map