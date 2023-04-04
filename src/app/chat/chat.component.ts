import { Component, OnInit, EventEmitter } from '@angular/core';
import { authService } from '../services/auth.service';
import { MessageService } from '../services/message.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Message } from '../message';
import { PlacesService } from '../services';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatPage implements OnInit {

  //datos = new FormControl('');
  msgSend: string = '';
  currentUser: string = '';
  actualUser = JSON.parse(localStorage.getItem('user')!);
  actualPhoto = JSON.parse(localStorage.getItem('photo')!);


  constructor(
    private authService: authService, 
    private messageService: MessageService,
    private placesService: PlacesService
  ){ 
  }

  ngOnInit() {
    this.authService.user$.subscribe( texto => { this.currentUser = texto; console.log(texto);
     } )

     
  }

  get isUserLocationReady(){
    return this.placesService.isUserLocationReady;
  }

  outGoogle(){
    localStorage.clear();
    this.authService.outGoogle();
  } 

  addMessage(): void{
    this.currentUser = JSON.parse(localStorage.getItem('user')!);
    this.messageService.addMessage(this.msgSend, this.currentUser);
    this.msgSend = '';
  }
}
