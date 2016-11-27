import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { Location }               from '@angular/common';

@Component ({
    selector: 'live-detail',
    template : `
        <div>
            <span>Big Video</span>
            <button (click)="onBack()">Back</button>
        </div>
    `
})


export class LiveDetailComponent implements OnInit{

    constructor(
        private location: Location
    ) {}

    ngOnInit() {

    }

    onBack() {
        this.location.back();
    }
}