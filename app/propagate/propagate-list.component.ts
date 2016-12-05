import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {PropagateInfo} from './propagate-Info';
import {PropagateService} from './propagate.service';

@Component ({
    moduleId:module.id,
    selector: 'propagate-list',
    templateUrl: `propagate.list.component.html`,
    styleUrls:[`propagate-list.component.css`] 
})

export class PropagateListComponent implements OnInit{

    propagateList: PropagateInfo[];

    constructor(
        private propagateService: PropagateService,
        private router: Router
    ) {}

    //获取数据
    ngOnInit(): void{
        this.getPropagateList();
    }

    getPropagateList() {
        this.propagateService
            .getPropagates()
            .then(propagateList => this.propagateList = propagateList);
    }

    onPropagateDetail(propagate: PropagateInfo) {
        console.log("----onPropagateDetail------" +  propagate.id);
        this.router.navigate(['/live', propagate.id]);
    }

    onShareClick() {
        console.log("----onShareClick------" + this.propagateList);
    }
}