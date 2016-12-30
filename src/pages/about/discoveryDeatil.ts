import {Component} from '@angular/core';
import {Qiniu} from 'ionic-native';
@Component({
	// moduleId:module.id,
	selector:"my-component",
	templateUrl:"discoveryDeatil.html"
})

export class Details{

	uploadImage(){

		Qiniu.uploadImage().then(Qiniu=>{
			  alert("七牛");
		})
	}
}