import { Component ,Input} from '@angular/core';
import {Router} from '@angular/router';
@Component({
	moduleId:module.id,
	selector:"my-component",
	templateUrl:"discovery.html"
})

export class Discovery{
	constructor(private _router:Router){}

	_imgs=["./app/source/img/icon_ru@3x.png","./app/source/img/icon_shi@3x.png","./app/source/img/icon_dao@3x.png"];
	
}
