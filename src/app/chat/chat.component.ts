import { Component, OnInit } from '@angular/core';
import { authService } from '../services/auth.service';
import { MessageService } from '../services/message.service';
import { FormBuilder, FormControl } from '@angular/forms';
import { Message } from '../message';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatPage implements OnInit {

  message = new FormControl('');
  msgSend: string = '';

  constructor(
    private authService: authService, 
    private messageService: MessageService,
  ){ 
    //this.messageService.getMensajes().subscribe(m => this.message = m);
  }

  ngOnInit() {}

  outGoogle(){
    this.authService.outGoogle();
  }

  // sendMessage(){
  //   this.messageService.sendMessage()
  //   console.log('enviado');
    
  // }

  addMessage(): void{
    this.messageService.addMessage(this.msgSend);
    console.log('enviado');
  }
}
