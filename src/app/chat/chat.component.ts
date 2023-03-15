import { Component, OnInit } from '@angular/core';
import { authService } from '../services/auth.service';
import { FormBuilder } from '@angular/forms';
import { MessageService } from '../services/message.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatPage implements OnInit {

  checkoutForm;

  constructor(
    private authService: authService, 
    private formBuilder: FormBuilder,
    private messageService: MessageService
  ) { 
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  ngOnInit() {}

  outGoogle(){
    this.authService.outGoogle();
  }

  sendMessage(){
    this.messageService.sendMessage()
    console.log('enviado');
    
  }
}
