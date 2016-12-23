import { Component } from '@angular/core';
import { ActionSheetController } from 'ionic-angular';
import { Camera } from 'ionic-native';
import { ImagePicker } from 'ionic-native';
export var MyInfoPage = (function () {
    function MyInfoPage(
        // public platform: iOS,
        actionsheetCtrl) {
        this.actionsheetCtrl = actionsheetCtrl;
    }
    //更改头像
    MyInfoPage.prototype.changePortrait = function () {
        var actionSheet = this.actionsheetCtrl.create({
            title: '修改头像',
            cssClass: 'action-sheets-basic-page',
            buttons: [
                {
                    text: '相机',
                    role: 'Camera',
                    //   icon: !this.platform.is('ios') ? 'trash' : null,
                    handler: function () {
                        // alert("点击相机");
                        Camera.getPicture().then(function (imageData) {
                            // imageData is either a base64 encoded string or a file URI
                            // If it's base64:
                            var base64Image = 'data:image/jpeg;base64,' + imageData;
                            alert(base64Image);
                        }, function (err) {
                            // Handle error
                            alert("打开相机失败了");
                        });
                    }
                },
                {
                    text: '从手机相册选择',
                    //   icon: !this.platform.is('ios') ? 'share' : null,
                    handler: function () {
                        // alert("选择图片");
                        ImagePicker.getPictures({}).then(function (results) {
                            for (var i = 0; i < results.length; i++) {
                                console.log('Image URI: ' + results[i]);
                                alert('Image URI: ' + results[i]);
                            }
                        }, function (err) {
                            alert("选择图片失败");
                        });
                    }
                },
                {
                    text: '取消',
                    role: 'cancel',
                    handler: function () {
                    }
                }
            ]
        });
        actionSheet.present();
    };
    MyInfoPage.decorators = [
        { type: Component, args: [{
                    selector: 'my-component',
                    templateUrl: 'myinfo.html'
                },] },
    ];
    /** @nocollapse */
    MyInfoPage.ctorParameters = [
        { type: ActionSheetController, },
    ];
    return MyInfoPage;
}());
//# sourceMappingURL=myinfo.js.map