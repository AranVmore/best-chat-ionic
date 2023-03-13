import { Component, OnInit } from '@angular/core';
import { authService } from '../services/auth.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatPage implements OnInit {

  constructor(private authService: authService) { }

  ngOnInit() {}

  outGoogle(){
    this.authService.outGoogle();
  }
}
