import { Component ,ViewChild,OnChanges,SimpleChange} from '@angular/core';
import { Formshero } from './formshero'; //双向绑定
import {ChatMessage} from './chatMessage'; //发送消息数据类型
import { NavController, NavParams , App } from 'ionic-angular';
import { Chat} from '../chat/chat'
import { Keyboard} from 'ionic-native'

// import { Chat } from '../chat/chat';
@Component({
  selector: 'group-chat',
  templateUrl: 'group-chat.html'
})
export class GroupChat {
    @ViewChild(Chat)
    chat : Chat;
    constructor(public navCtrl: NavController, public navParams: NavParams,public app: App){}
    
    ngOnInit(){
        this.chat.chatroomParent = document.querySelector('.chatroom');
    }
    closeKey(){
        Keyboard.close();
    }
    ngAfterContentInit(){
        // console.log('ngAfterContentInit ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
    }
    ngAfterContentChecked(){
        // console.log('ngAfterContentChecked ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
    }
    ngAfterViewInit(){
        // console.log('ngAfterViewInit ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
        // console.log('4444444444 3 '   + this.chat.chatroomParent);
    }
    ngAfterViewChecked(){
        // console.log('ngAfterViewChecked ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
    }
    ngOnDestroy(){
        // console.log('ngOnDestroy ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
    }
    ngDoCheck(){
        // console.log('ngDoCheck ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
    }
}
