import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Keyboard, Camera } from 'ionic-native';
export var Chat = (function () {
    function Chat(navCtrl) {
        this.navCtrl = navCtrl;
        //默认的参数设置
        this.messageDefault = {
            nikeName: '18218021822',
            messageType: 'text',
            messageContent: 'hahaha',
            sentTime: '2016-12-18 15:10:16',
            direction: 'right'
        };
        //ngSwitch 的类型选择
        this.chatChoice = 'text';
        //聊天按钮与照相机按钮的显示切换
        this.chatText = false;
        this.chatVideo = true;
        //聊天输入与语音按钮显示切换
        this.chatTextBtn = false;
        this.chatVideoBtn = true;
        //设置一个value 用来存储输入框的取值
        this.value = '';
        //leftIcon
        this.leftIcon = "ios-mic-outline";
        //fontSizeBoolean
        this.fontSizeBoolean = false;
        this.boardHeight = 0;
        this.changeLog = [];
    }
    Chat.prototype.ionViewDidLoad = function () {
        console.log('Hello ChatPage Page');
    };
    Chat.prototype.ngOnInit = function () {
        this.contentHeight = window.screen.height - this.chatroomParent.getBoundingClientRect().top - 50 - 44 - this.boardHeight + 'px';
        var that = this;
        window.addEventListener('native.keyboardshow', this.keyboardShowHandler);
    };
    Chat.prototype.ngOnChanges = function (changes) {
        console.log('~~~~~~~~~~~~~OnChanges~~~~~~~~~~~~~~~~~~');
        var log = [];
        for (var propName in changes) {
            var changedProp = changes[propName];
            var from = JSON.stringify(changedProp.previousValue);
            var to = JSON.stringify(changedProp.currentValue);
            log.push(propName + " changed from " + from + " to " + to);
        }
        console.log(this.changeLog.push(log.join(', ')));
    };
    Chat.prototype.keyboardShowHandler = function (e) {
        // setTimeout(function(){document.getElementById('msg-text').focus()},200)
        // document.getElementById('footbar').style.position = 'static';
        document.getElementById('footbar').style.bottom = e.keyboardHeight + 'px';
        // alert(window.innerHeight);
        this.boardHeight = e.keyboardHeight;
        // alert(this.leftIcon);
        //e 可以得到键盘弹出来的高度
        // alert(e.keyboardHeight);
        // this.contentHeight = window.screen.height- this.chatroomParent.getBoundingClientRect().top -50 -44  - this.keyboardHeight + 'px';
    };
    //设置设置聊天容器高度
    Chat.prototype.setHeight = function (el) {
        var h = window.screen.height - el.getBoundingClientRect().top - 50 - this.boardHeight + 'px';
        // this.chatroomParent.style.height = window.screen.height- el.getBoundingClientRect().top -50   - this.keyboardHeight + 'px';
        // alert("22222"  + this.keyboardHeight )
        // alert('window.innerHeight '  + window.innerHeight );
        // alert('window.screen.height'  + window.screen.height );
        // alert('el.getBoundingClientRect().top '  + el.getBoundingClientRect().top);
        var styles = {
            'height': h
        };
        // alert(h);
        return styles;
    };
    //设置显示CLASS
    Chat.prototype.update = function (value) {
        this.value = value;
    };
    //设置邮编按钮样式
    Chat.prototype.setInfoModule = function () {
        var classes = {
            'mui-icon-camera': this.chatVideo,
            'mui-icon-paperplane': this.chatText
        };
        Keyboard.onKeyboardHide();
        //   Camera.getPicture(options).then((imageData) => {
        // document.getElementById('textCamera').setAttribute('src', imageData);
        // }, (err) => {
        //   alert(err)
        // });
        return classes;
    };
    //设置输入框光标状态
    Chat.prototype.setInputFocus = function (input) {
        this.value = input.value;
        if (input.value.replace(/\s/g, '') !== '') {
            this.fontSizeBoolean = true;
            this.chatText = true;
            this.chatVideo = false;
        }
        else {
            this.chatText = false;
            this.chatVideo = true;
            this.fontSizeBoolean = false;
        }
    };
    //输入框输入时候事件
    Chat.prototype.onInput = function (input) {
        //input.style.color ="red";
        this.setInputFocus(input);
    };
    //输入框失去焦点事件
    Chat.prototype.setBlur = function (input) {
        this.inputHtml = input;
        this.setInputFocus(input);
    };
    //左边按钮点击事件
    Chat.prototype.setTextVedio = function (el) {
        var classes = {
            'mui-icon-compose ': this.chatTextBtn,
            'mui-icon-mic': this.chatVideoBtn
        };
        return classes;
    };
    // setFocus(el){
    //   el.focus();
    //   setTimeout(function(){
    //     // alert(el +  "123" )
    //     el.focus();
    //     // Keyboard.show();
    //   },2000);
    // }
    /*******发送消息******/
    //点击左侧按钮
    Chat.prototype.clickFooterRight = function (el) {
        this.leftIcon == "ios-mic-outline" ? this.leftIcon = "ios-create-outline" : this.leftIcon = "ios-mic-outline";
        this.chatChoice == 'vedio' ? this.chatChoice = 'text' : this.chatChoice = 'vedio';
    };
    //点击右边按钮
    Chat.prototype.clickFooterLeft = function (el) {
        var _this = this;
        if (el.classList.contains('mui-icon-paperplane')) {
            this.inputHtml.focus();
            this.senMessage(extend(this.messageDefault, {
                nikeName: '18218021822',
                messageContent: this.value,
                sentTime: (new Date()).getTime().toString(),
            }));
            //console.log(document.querySelector('.foot_area').style.)
            //document.querySelector('.foot_area').style.background =""
            // document.getElementById('footbar').style.bottom = '0';
            this.value = '';
        }
        else {
            var options = {
                quality: 80,
                sourceType: Camera.PictureSourceType.CAMERA,
                allowEdit: false,
                encodingType: Camera.EncodingType.JPEG,
                saveToPhotoAlbum: false,
                targetWidth: 250,
                targetHeight: 250
            };
            Camera.getPicture(options).then(function (imageData) {
                _this.senMessage(extend(_this.messageDefault, {
                    nikeName: '18218021822',
                    messageContent: _this.value,
                    sentTime: (new Date()).getTime().toString(),
                    direction: 'left',
                    messageType: 'image',
                    imgSrc: imageData
                }));
            }, function (err) {
                alert(err);
            });
        }
    };
    //发送消息
    Chat.prototype.senMessage = function (obj) {
        var _this = this;
        if (!this.chatMessage) {
            this.chatMessage = [
                obj
            ];
        }
        else {
            this.chatMessage.push(obj);
            console.log(this.chatMessage);
            setTimeout(function () {
                //this = Chat ; 
                _this.chatroomParent.scrollTop = _this.chatroomParent.scrollHeight;
            }, 100);
        }
    };
    Chat.prototype.sentVideo = function () {
    };
    Chat.decorators = [
        { type: Component, args: [{
                    selector: 'chat-component',
                    templateUrl: 'chat.html'
                },] },
    ];
    /** @nocollapse */
    Chat.ctorParameters = [
        { type: NavController, },
    ];
    return Chat;
}());
var extend = function (destination, source) {
    var newObj = {};
    for (var property in destination) {
        newObj[property] = destination[property];
    }
    for (var property in source) {
        newObj[property] = source[property];
    }
    return newObj;
};
//# sourceMappingURL=chat.js.map