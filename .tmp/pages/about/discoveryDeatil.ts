import {Component} from '@angular/core';
import { Camera } from 'ionic-native';
import { ImagePicker } from 'ionic-native';
@Component({
	// moduleId:module.id,
	selector:"my-component",
	templateUrl:"discoveryDeatil.html"
})

export class Details{

	clickCamera(){
		
			Camera.getPicture().then((imageData) => {
		// imageData is either a base64 encoded string or a file URI
		// If it's base64:
		alert("打开相机成功了");
		// let base64Image = 'data:image/jpeg;base64,' + imageData;
		}, (err) => {
		// Handle error
		alert("打开相机失败了");
		});

	}



	imagePicker(){
		ImagePicker.getPictures({}).then((results) => {
		for (var i = 0; i < results.length; i++) {
			console.log('Image URI: ' + results[i]);
			alert('Image URI: ' + results[i]);
		}
		}, (err) => { 
			alert("选择图片失败");
		});
	}




}
