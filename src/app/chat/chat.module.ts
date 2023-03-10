import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ChatRoutingModule } from './chat-routing.module';
import { ChatPage } from './chat.component';



@NgModule({
  declarations: [ChatPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatRoutingModule
  ]
})
export class ChatModule { }