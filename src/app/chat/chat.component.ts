import { Component, OnInit, EventEmitter } from '@angular/core';
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
  //userData: string = 'Aran';
  currentUser: string = '';
  actualUser = JSON.parse(localStorage.getItem('user')!);

  constructor(
    private authService: authService, 
    private messageService: MessageService,
  ){ 
  }

  ngOnInit() {
    this.authService.user$.subscribe( texto => { this.currentUser = texto; console.log(texto);
     } )
  }

  outGoogle(){
    this.authService.outGoogle();
  } 

  addMessage(): void{
    this.currentUser = JSON.parse(localStorage.getItem('user')!);
    this.messageService.addMessage(this.msgSend, this.currentUser);
  }
}
