import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { environment } from 'src/environments/environment';
import { getDatabase } from "@angular/fire/database";
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Message } from '../message';
import { map, Observable } from 'rxjs';


// Initialize Firebase
const app = initializeApp(environment.firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);


@Injectable({
  providedIn: 'root',
})
export class MessageService {

  private mensajesDB: AngularFireList<Message>;
      //conversacion: Message[] = [];


  constructor(
    private db: AngularFireDatabase
    ) { 

    this.mensajesDB = this.db.list('/message', (ref) =>
      ref.orderByChild('date')
    );

    console.log(this.mensajesDB);

    }

    addMessage(msg: string, userData:string){
      this.mensajesDB.push({
        text: msg,
        user: userData,
        id:  new Date().getTime(),
        fecha: new Date().toLocaleDateString('es-ES'),
        time: new Date().toLocaleTimeString('es-ES'),
      })
    }

    getMensajes(): Observable<Message[]> {
      return this.mensajesDB.snapshotChanges().pipe(
        map((changes) =>
          changes.map((c) => this.getUserFromPayload(c.payload))
        )
      );
    }

    getUserFromPayload(payload: any): Message{
      return {
        $key: payload.key,
        ...payload.val(),
      };
    }

    
}
