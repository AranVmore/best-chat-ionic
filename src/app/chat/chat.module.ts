import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ChatRoutingModule } from './chat-routing.module';
import { ChatPage } from './chat.component';
import { MessageComponent } from './message/message.component';



@NgModule({
  declarations: [ChatPage, MessageComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatRoutingModule,
  ],
  exports: [ChatPage]
})
export class ChatModule { }