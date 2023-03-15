import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { environment } from 'src/environments/environment';
import { getDatabase } from "@angular/fire/database";
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';

// Initialize Firebase
const app = initializeApp(environment.firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);


@Injectable({
  providedIn: 'root',
})
export class MessageService {

  private mensajesDB: AngularFireList<any>;

  constructor(
    private db: AngularFireDatabase
    ) { 

    this.mensajesDB = this.db.list('/message', (ref:any) =>
      ref.orderByChild('date')
    );
    }

    sendMessage(){
      this.mensajesDB.push({
        user: 'Aran',
        fecha: new Date().toLocaleDateString('es-ES'),
        time: new Date().getHours()+':'+new Date().getMinutes(),
        message: 'Mensaje de prueba2',
      });
    }
}
