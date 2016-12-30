import { Component } from '@angular/core';
import { ActionSheetController } from 'ionic-angular';
import { Camera } from 'ionic-native';
import { ImagePicker } from 'ionic-native';
import { MyinfoServer } from './myinfoF.server';
@Component({
    selector: 'my-component',
    templateUrl: 'myinfo.html'
})
export class MyInfoPage {
    public base64Image: string;
     loadImage = "source/img/5.png";

    constructor(
        public myinfoserver:MyinfoServer,
        public actionsheetCtrl: ActionSheetController,
     ){}
    //上传图片
  uploadImage(){
        
      let actionSheet = this.actionsheetCtrl.create({
      title: '修改头像',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: '相机',
          role: 'Camera',
        //   icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            // alert("点击相机");
            
             Camera.getPicture({
                quality : 75,
                destinationType : Camera.DestinationType.FILE_URI,
                sourceType : Camera.PictureSourceType.CAMERA,
                allowEdit : false,//可编辑
                encodingType: Camera.EncodingType.JPEG,
                targetWidth: 300,
                targetHeight: 300,
                saveToPhotoAlbum: false
             }).then((fileUrl) => {               
                this.myinfoserver.qiniuImage(fileUrl,(results) =>{
                  this.loadImage = results;
                });

                // alert(fileUrl);                
                }, (err) => {
                // Handle error
                alert("ERROR -> " + JSON.stringify(err));
                });

          }
        },
        {
          text: '从手机相册选择',
        //   icon: !this.platform.is('ios') ? 'share' : null,
          handler: () => {
            // alert("选择图片");
              ImagePicker.getPictures({}).then((results) => {
                // for (var i = 0; i < results.length; i++) {
                //     console.log('Image URI: ' + results[i]);
                //     alert('Image URI: ' + results[i]);
                // }
                // this.myinfoserver.qiniuImage(results[0],this.Callback);
                this.myinfoserver.qiniuImage(results[0],(results) =>{
                  this.loadImage = results;
                });
                }, (err) => { 
                    alert("选择图片失败");
                });


          }
        },
        {
          text: '取消',
          role: 'cancel', // will always sort to be on the bottom
          handler: () => {
          }
        }
      ]
    });
    actionSheet.present();
    }
    
    

    ionViewDidload(){
      this.loadImage = "source/img/5.png";
      
    }


}