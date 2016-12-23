import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { ContactPage } from '../contact/contact';
import { MinePage } from '../mine/mine';
import { Discovery } from '../about/discovery';
export var TabsPage = (function () {
    function TabsPage() {
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.tab1Root = HomePage;
        this.tab2Root = Discovery;
        this.tab3Root = ContactPage;
        this.tab4Root = MinePage;
    }
    TabsPage.prototype.onClassClick = function () {
        console.log("------onClassClickonClassClick------");
    };
    TabsPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'tabs.html'
                },] },
    ];
    /** @nocollapse */
    TabsPage.ctorParameters = [];
    return TabsPage;
}());
//# sourceMappingURL=tabs.js.map