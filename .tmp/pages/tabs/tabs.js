import { Component, ViewChild } from '@angular/core';
import { HomePage } from '../home/home';
import { ContactPage } from '../contact/contact';
import { MinePage } from '../mine/mine';
import { Discovery } from '../about/discovery';
import { NavParams, Tabs } from 'ionic-angular';
export var TabsPage = (function () {
    function TabsPage(params) {
        this.params = params;
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.tab1Root = HomePage;
        this.tab2Root = Discovery;
        this.tab3Root = ContactPage;
        this.tab4Root = MinePage;
        this.tabCurrent = 999;
        console.log('-----tabsPage-----' + this.params.get('userParams'));
        if (this.params.get('userParams')) {
            this.tabCurrent = this.params.get('userParams');
        }
    }
    TabsPage.prototype.ionViewDidEnter = function () {
        console.log('-----didEnter' + this.tabCurrent);
        if (this.tabCurrent != 999) {
            this.tabs.select(this.tabCurrent);
            this.tabCurrent = 999;
        }
    };
    TabsPage.prototype.onClassClick = function () {
        console.log("------onClassClickonClassClick------");
    };
    TabsPage.decorators = [
        { type: Component, args: [{
                    templateUrl: 'tabs.html'
                },] },
    ];
    /** @nocollapse */
    TabsPage.ctorParameters = [
        { type: NavParams, },
    ];
    TabsPage.propDecorators = {
        'tabs': [{ type: ViewChild, args: [Tabs,] },],
    };
    return TabsPage;
}());
//# sourceMappingURL=tabs.js.map