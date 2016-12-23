import { Component } from '@angular/core';
import { App } from 'ionic-angular';
import { BestList } from './bestList';
import { Details } from './discoveryDeatil';
export var Discovery = (function () {
    function Discovery(app) {
        this.app = app;
        this._imgs = ["assets/img/icon_ru@3x.png", "assets/img/icon_shi@3x.png", "assets/img/icon_dao@3x.png"];
        this.slides = [
            {
                // title: "Welcome to the Docs!",
                // description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
                image: "assets/img/titles.jpg",
            },
            {
                // title: "What is Ionic?",
                // description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
                image: "assets/img/1.png",
            },
            {
                // title: "What is Ionic Cloud?",
                // description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
                image: "assets/img/2.png",
            }
        ];
    }
    //儒释道点击方法
    Discovery.prototype.rsdClick = function () {
        // if (this.loginService.isLoggedIn) {
        this.app.getRootNav().push(BestList);
        // }
    };
    Discovery.prototype.firstClick = function () {
        this.app.getRootNav().push(Details);
    };
    Discovery.decorators = [
        { type: Component, args: [{
                    selector: "page-discovery",
                    templateUrl: "discovery.html"
                },] },
    ];
    /** @nocollapse */
    Discovery.ctorParameters = [
        { type: App, },
    ];
    return Discovery;
}());
//# sourceMappingURL=discovery.js.map