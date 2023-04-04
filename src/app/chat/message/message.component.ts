import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll, InfiniteScrollCustomEvent, IonContent } from '@ionic/angular';
import { MessageService } from '../../services/message.service';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Message } from '../../message';
import { PlacesService } from 'src/app/services';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit {

  messages: Message[] = [];
  actualUser = JSON.parse(localStorage.getItem('user')!);
  actualPhoto = JSON.parse(localStorage.getItem('photo')!);
  // location = this.placesService.userLocation;

  mostrar = 10;
  @ViewChild(IonInfiniteScroll)
  infitniteScroll!: IonInfiniteScroll;

  @ViewChild(IonContent)
  content!: IonContent;



  constructor(
    public messageService: MessageService, 
    private db: AngularFireDatabase,
    private placesService: PlacesService
    ) {    
    
    this.messageService.getMensajes().subscribe(m =>
      //con slice le establecemos una copia que mostrará del primero al décimo mensaje
      this.messages = m.reverse().slice(0, this.mostrar)
      .sort(
        (firstObject: Message, secondObject: Message) =>
    	    (firstObject.id > secondObject.id) ? 1 : -1
      )
    );
    
  }



  ngOnInit(){
    // console.log(this.placesService.userLocation);
    
  }

  //content.scrolltobottom(0);



  onIonInfinite() {
    //this.content.scrollToTop(1000);
    //iremos actualizando el contador para añadir de diez en diez
    this.mostrar += 10;
    this.messageService.getMensajes().subscribe(item => {

      setTimeout(() => {
        
        //cuando lleguemos al mismo número de items que de mensajes
        if (item.length === this.messages.length) {
          this.infitniteScroll.disabled = true;
          return;
        }
        
        this.messages = item.reverse().slice(0, this.mostrar);

        this.messages.sort(
          (firstObject: Message, secondObject: Message) =>
            (firstObject.id > secondObject.id) ? 1 : -1
        )
        // this.messages.unshift();
        this.infitniteScroll.complete();
        
        //this.infitniteScroll.disabled = false;
      }, 1000)
    });
    
  }



}
