import { Component, } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent{


  constructor(public messageService: MessageService, private db: AngularFireDatabase) {
    
  }
   


}
