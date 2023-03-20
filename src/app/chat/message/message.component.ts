import { Component, } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Message } from '../../message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent{

  //messages: string = [];
  messages: Message[] = [];
  actualUser = JSON.parse(localStorage.getItem('user')!);


  constructor(public messageService: MessageService, private db: AngularFireDatabase) {
    this.messageService.getMensajes().subscribe(m => this.messages = m);
    
  }
   


}
