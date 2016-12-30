import { Component } from '@angular/core';
import { ActionSheetController } from 'ionic-angular';
import { Camera } from 'ionic-native';
import { ImagePicker } from 'ionic-native';
import { MyinfoServer } from './myinfoF.server';
export var MyInfoPage = (function () {
    function MyInfoPage(myinfoserver, actionsheetCtrl) {
        this.myinfoserver = myinfoserver;
        this.actionsheetCtrl = actionsheetCtrl;
        this.loadImage = "source/img/5.png";
    }
    //上传图片
    MyInfoPage.prototype.uploadImage = function () {
        var _this = this;
        var actionSheet = this.actionsheetCtrl.create({
            title: '修改头像',
            cssClass: 'action-sheets-basic-page',
            buttons: [
                {
                    text: '相机',
                    role: 'Camera',
                    handler: function () {
                        // alert("点击相机");
                        Camera.getPicture({
                            quality: 75,
                            destinationType: Camera.DestinationType.FILE_URI,
                            sourceType: Camera.PictureSourceType.CAMERA,
                            allowEdit: false,
                            encodingType: Camera.EncodingType.JPEG,
                            targetWidth: 300,
                            targetHeight: 300,
                            saveToPhotoAlbum: false
                        }).then(function (fileUrl) {
                            _this.myinfoserver.qiniuImage(fileUrl, function (results) {
                                _this.loadImage = results;
                            });
                            // alert(fileUrl);                
                        }, function (err) {
                            // Handle error
                            alert("ERROR -> " + JSON.stringify(err));
                        });
                    }
                },
                {
                    text: '从手机相册选择',
                    //   icon: !this.platform.is('ios') ? 'share' : null,
                    handler: function () {
                        // alert("选择图片");
                        ImagePicker.getPictures({}).then(function (results) {
                            // for (var i = 0; i < results.length; i++) {
                            //     console.log('Image URI: ' + results[i]);
                            //     alert('Image URI: ' + results[i]);
                            // }
                            // this.myinfoserver.qiniuImage(results[0],this.Callback);
                            _this.myinfoserver.qiniuImage(results[0], function (results) {
                                _this.loadImage = results;
                            });
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
    MyInfoPage.prototype.ionViewDidload = function () {
        this.loadImage = "source/img/5.png";
    };
    MyInfoPage.decorators = [
        { type: Component, args: [{
                    selector: 'my-component',
                    templateUrl: 'myinfo.html'
                },] },
    ];
    /** @nocollapse */
    MyInfoPage.ctorParameters = [
        { type: MyinfoServer, },
        { type: ActionSheetController, },
    ];
    return MyInfoPage;
}());
//# sourceMappingURL=myinfo.js.map