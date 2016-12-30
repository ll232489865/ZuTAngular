import { Component } from '@angular/core';
import { ActionSheetController } from 'ionic-angular'
import { Camera } from 'ionic-native';
import { ImagePicker } from 'ionic-native';



@Component({
    selector: 'my-component',
    templateUrl: 'myinfo.html'
})
export class MyInfoPage {
  public base64Image: string;
    constructor(
    public actionsheetCtrl: ActionSheetController
  ) { }
    
    //更改头像
    changePortrait(){
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
                destinationType : Camera.DestinationType.DATA_URL,
                sourceType : Camera.PictureSourceType.CAMERA,
                allowEdit : true,
                encodingType: Camera.EncodingType.JPEG,
                targetWidth: 300,
                targetHeight: 300,
                saveToPhotoAlbum: false
             }).then((imageData) => {
                // imageData is either a base64 encoded string or a file URI
                // If it's base64:
                let base64Image = "data:image/jpeg;base64," + imageData;
                alert(base64Image);                
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
                for (var i = 0; i < results.length; i++) {
                    console.log('Image URI: ' + results[i]);
                    alert('Image URI: ' + results[i]);
                }
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

}