import { Component ,Input,SimpleChange} from '@angular/core';
import { NavController } from 'ionic-angular';
import { Formshero } from './formshero'; //双向绑定
import { ChatMessage} from './chatMessage'; //发送消息数据类型
import { Keyboard , Camera} from 'ionic-native';


@Component({
  selector: 'chat-component',
  templateUrl:'chat.html'
})

export class Chat {
    constructor(public navCtrl: NavController) {}
    ionViewDidLoad() {
      console.log('Hello ChatPage Page');
    }
    //那个容器装载聊天内容
    chatroomParent: any;
    //聊天信息数据类型
    chatMessage :ChatMessage[];
    //默认的参数设置
    messageDefault = {
      nikeName : '18218021822',
      messageType : 'text',
      messageContent : 'hahaha',
      sentTime:'2016-12-18 15:10:16',
      direction:'right'
    }
    //ngSwitch 的类型选择
    chatChoice = 'text'
    //聊天按钮与照相机按钮的显示切换
    chatText = false;
    chatVideo = true;

    //聊天输入与语音按钮显示切换
    chatTextBtn = false;
    chatVideoBtn = true;

    //设置一个input对象，用来存储input输入框
    inputHtml:HTMLElement;

    //设置一个value 用来存储输入框的取值
    value = '';
    //leftIcon
    leftIcon = "ios-mic-outline";
    //fontSizeBoolean
    fontSizeBoolean = false;
    boardHeight = 0;
    contentHeight :string; 
    ngOnInit(){
        this.contentHeight = window.screen.height- this.chatroomParent.getBoundingClientRect().top -50 -44  - this.boardHeight + 'px';
        var that = this;
        window.addEventListener('native.keyboardshow', this.keyboardShowHandler);
    }
    changeLog: string[] = [];
    ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
      console.log('~~~~~~~~~~~~~OnChanges~~~~~~~~~~~~~~~~~~');
      let log: string[] = [];
      for (let propName in changes) {  
        let changedProp = changes[propName];
        let from = JSON.stringify(changedProp.previousValue);
        let to =   JSON.stringify(changedProp.currentValue);
        log.push( `${propName} changed from ${from} to ${to}`);
      }
      console.log(this.changeLog.push(log.join(', ')));
    }
    keyboardShowHandler(e){
        // setTimeout(function(){document.getElementById('msg-text').focus()},200)
        // document.getElementById('footbar').style.position = 'static';
        document.getElementById('footbar').style.bottom = e.keyboardHeight + 'px';
        // alert(window.innerHeight);
        this.boardHeight = e.keyboardHeight;
        // alert(this.leftIcon);
        //e 可以得到键盘弹出来的高度
        // alert(e.keyboardHeight);
        
        // this.contentHeight = window.screen.height- this.chatroomParent.getBoundingClientRect().top -50 -44  - this.keyboardHeight + 'px';
    }
    //设置设置聊天容器高度
    setHeight(el) {
      let h = window.screen.height- el.getBoundingClientRect().top -50   - this.boardHeight + 'px';
      // this.chatroomParent.style.height = window.screen.height- el.getBoundingClientRect().top -50   - this.keyboardHeight + 'px';
      // alert("22222"  + this.keyboardHeight )
      // alert('window.innerHeight '  + window.innerHeight );
      // alert('window.screen.height'  + window.screen.height );
      // alert('el.getBoundingClientRect().top '  + el.getBoundingClientRect().top);
      let styles = {
        'height': h
      };
      // alert(h);
      return styles;
    }
    //设置显示CLASS
    update(value: string) { 
        this.value = value; 
    }
    //设置邮编按钮样式
    setInfoModule(){
      let classes =  {
        'mui-icon-camera': this.chatVideo,
        'mui-icon-paperplane': this.chatText
      };
      Keyboard.onKeyboardHide()

    //   Camera.getPicture(options).then((imageData) => {
    // document.getElementById('textCamera').setAttribute('src', imageData);
    // }, (err) => {
    //   alert(err)
    // });
      return classes;
    }
    //设置输入框光标状态
    setInputFocus(input){
        this.value = input.value;
        if(input.value.replace(/\s/g,'')!=='') {
            this.fontSizeBoolean = true;
            this.chatText = true;
            this.chatVideo = false;
        }else{
            this.chatText = false;
            this.chatVideo = true;
            this.fontSizeBoolean = false;
        }
    }
    //输入框输入时候事件
    onInput(input){
        //input.style.color ="red";
        this.setInputFocus(input); 

    }
    //输入框失去焦点事件
    setBlur(input){
        this.inputHtml = input;
        this.setInputFocus(input);
    }
    //左边按钮点击事件
    setTextVedio(el){
      let classes =  {
        'mui-icon-compose ': this.chatTextBtn,
        'mui-icon-mic': this.chatVideoBtn
      };
      return classes;
    }
    // setFocus(el){
    //   el.focus();
    //   setTimeout(function(){
    //     // alert(el +  "123" )
    //     el.focus();
    //     // Keyboard.show();
    //   },2000);
    // }

    /*******发送消息******/
    //点击左侧按钮
    clickFooterRight(el){
        this.leftIcon == "ios-mic-outline" ? this.leftIcon = "ios-create-outline" : this.leftIcon = "ios-mic-outline";
        
        this.chatChoice == 'vedio' ? this.chatChoice = 'text' : this.chatChoice = 'vedio';
    }
    //点击右边按钮
    clickFooterLeft(el):void{
        if(el.classList.contains('mui-icon-paperplane')){
            this.inputHtml.focus();
            this.senMessage(
              extend(this.messageDefault,{
                    nikeName : '18218021822',
                    messageContent : this.value,
                    sentTime:(new Date()).getTime().toString(),
                })
             )
            //console.log(document.querySelector('.foot_area').style.)

            //document.querySelector('.foot_area').style.background =""
            // document.getElementById('footbar').style.bottom = '0';
            this.value = '';

        }else{
            let options = {
              quality: 80,
              sourceType: Camera.PictureSourceType.CAMERA,
              allowEdit: false,
              encodingType: Camera.EncodingType.JPEG,
              saveToPhotoAlbum: false,
              targetWidth : 250,
              targetHeight : 250
            };
            Camera.getPicture(options).then((imageData) => {
            this.senMessage(
              extend(this.messageDefault,{
                  nikeName : '18218021822',
                  messageContent : this.value,
                  sentTime:(new Date()).getTime().toString(),
                  direction:'left',
                  messageType :'image',
                  imgSrc :imageData
              })
            )  
          }, (err) => {
            alert(err)
          });
        }
    }
    //发送消息
    senMessage(obj){
        if(!this.chatMessage){

          this.chatMessage = [
            obj
          ]
        }else{
          this.chatMessage.push(obj);
          console.log(this.chatMessage);
          setTimeout(()=>{
            //this = Chat ; 
            this.chatroomParent.scrollTop = this.chatroomParent.scrollHeight;
          },100)
          // setTimeout(
          //   function(){
          //     //this = window ;
          //     this.chatroomParent.scrollTop = this.chatroomParent.scrollHeight;
          // },100)
        }

    }
    sentVideo(){

    }

}
let extend = function(destination, source) {
  let newObj = {};
  for (var property in destination) {
      newObj[property] = destination[property];
  }
  for (var property in source) {
      newObj[property] = source[property];
  }
  return newObj;
}
