import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
export var MyAccountPage = (function () {
    function MyAccountPage(NavController) {
        this.NavController = NavController;
        // this.ac="首页";
    }
    // ac:any;
    MyAccountPage.decorators = [
        { type: Component, args: [{
                    selector: 'my-component',
                    templateUrl: 'myaccount.html'
                },] },
    ];
    /** @nocollapse */
    MyAccountPage.ctorParameters = [
        { type: NavController, },
    ];
    return MyAccountPage;
}());
//# sourceMappingURL=myaccount.js.map