import { Component, OnInit } from '@angular/core';
import { authService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginPage implements OnInit {

  constructor(private authService: authService) { }

  ngOnInit() {}

  authGoogle(){
    this.authService.authGoogle();
  }

}
