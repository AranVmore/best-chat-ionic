import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { LoginRoutingModule } from './home-routing.module';
import { LoginPage } from './login.component';



@NgModule({
  declarations: [LoginPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
