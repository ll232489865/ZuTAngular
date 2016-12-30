import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { Chat } from '../chat/chat';
import { Keyboard } from 'ionic-native';
// import { Chat } from '../chat/chat';
export var GroupChat = (function () {
    function GroupChat(navCtrl, navParams, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
    }
    GroupChat.prototype.ngOnInit = function () {
        this.chat.chatroomParent = document.querySelector('.chatroom');
    };
    GroupChat.prototype.closeKey = function () {
        Keyboard.close();
    };
    GroupChat.prototype.ngAfterContentInit = function () {
        // console.log('ngAfterContentInit ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
    };
    GroupChat.prototype.ngAfterContentChecked = function () {
        // console.log('ngAfterContentChecked ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
    };
    GroupChat.prototype.ngAfterViewInit = function () {
        // console.log('ngAfterViewInit ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
        // console.log('4444444444 3 '   + this.chat.chatroomParent);
    };
    GroupChat.prototype.ngAfterViewChecked = function () {
        // console.log('ngAfterViewChecked ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
    };
    GroupChat.prototype.ngOnDestroy = function () {
        // console.log('ngOnDestroy ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
    };
    GroupChat.prototype.ngDoCheck = function () {
        // console.log('ngDoCheck ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
    };
    GroupChat.decorators = [
        { type: Component, args: [{
                    selector: 'group-chat',
                    templateUrl: 'group-chat.html'
                },] },
    ];
    /** @nocollapse */
    GroupChat.ctorParameters = [
        { type: NavController, },
        { type: NavParams, },
        { type: App, },
    ];
    GroupChat.propDecorators = {
        'chat': [{ type: ViewChild, args: [Chat,] },],
    };
    return GroupChat;
}());
//# sourceMappingURL=group-chat.js.map