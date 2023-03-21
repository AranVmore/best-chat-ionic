import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll, InfiniteScrollCustomEvent  } from '@ionic/angular';
import { MessageService } from '../../services/message.service';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Message } from '../../message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit{

  messages: Message[] = [];
  actualUser = JSON.parse(localStorage.getItem('user')!);
  offset = 0;
  topemns = 10;
  @ViewChild(IonInfiniteScroll)
    infitniteScroll!: IonInfiniteScroll;

  constructor(public messageService: MessageService, private db: AngularFireDatabase) {
    this.messageService.getMensajes().subscribe(m => this.messages = m);
  }

   
  ngOnInit() {
    
  }


  onIonInfinite(){
      this.messageService.getMensajes().subscribe(item => {

    setTimeout(() => {
      if(item.length === this.messages.length){
        this.infitniteScroll.disabled = true;
        console.log(item.length + 'asdf' + this.messages.length);
        
        return;
      }

      this.messages = item;
      this.infitniteScroll.complete();
    }, 1000)


  
  });
  }


}

// onIonInfinite() {


//   this.messageService.getMensajes().subscribe(item => {

//     setTimeout(() => {
//       if(item.length === this.messages.length){
//         this.infitniteScroll.disabled = true;
//         console.log(item.length + 'asdf' + this.messages.length);
        
//         return;
//       }

//       this.messages = item;
//       this.infitniteScroll.complete();
//     }, 1000)


  
//   });


  // setTimeout(() => {
  //   console.log('done');

  //   this.infitniteScroll.complete();

  //   if(this.messages.length == 15){
  //     this.infitniteScroll.disabled = true;
  //   }
    
  // }, 500)


  // const infiniteScroll = document.getElementById('infinite-scroll');

  // infiniteScroll.addEventListener('ionInfinite', function(event) {
  //   setTimeout(function() {
  //     console.log('Done');
  //     event.target.complete();
  
  //     // App logic to determine if all data is loaded
  //     // and disable the infinite scroll
  //     if (data.length == 1000) {
  //       event.target.disabled = true;
  //     }
  //   }, 500);
  // });
  
  // function toggleInfiniteScroll() {
  //   infiniteScroll.disabled = !infiniteScroll.disabled;
  // }



  // setTimeout(() => {
//   let contador = this.messages.length;

//   if (contador > 10){
//     this.infitniteScroll.disabled = true;
//   }

//   const addItems = Array(2);
//   this.messages.push(...addItems);
//   alert('hay:' + contador );
//   this.infitniteScroll.complete();
// }, 1000);







  // this.messageService.getMensajes().subscribe(item => {

  //   setTimeout(() => {
  //     if(item.length === this.messages.length){
  //       this.infitniteScroll.disabled = true;
  //       console.log(item.length + 'asdf' + this.messages.length);
        
  //       return;
  //     }

  //     this.messages = item;
  //     this.infitniteScroll.complete();
  //   }, 1000)


  
  // });


  // this.offset = this.messages.length;
  // console.log(this.offset);

  // if (cargar){
  //   this.offset +=25;
  // }

  // this.messageService.getMensajes().subscribe(item => {
  //   console.log('result', item.length);
    
  //   this.messages = [...this.messages, ...item];

  //   if(item.length === this.messages.length){
  //     this.infitniteScroll.disabled = true;
  //     return;
  //   }
  //   this.messages = item;
  //   this.infitniteScroll.complete();
  
  // });
  

  // setTimeout(() => {
  //   let contador = this.messages.length;
  //   const addItems = Array(2);
  //   this.messages.push(...addItems);
  //   alert('hay:' + contador );
  //   ev.target.complete();
  // }, 1500);

   // this.generateItems();
  // setTimeout(() => {
  //   this.infitniteScroll.complete();
  // }, 1000);

  // this.messageService.getMensajes().subscribe(item => {
  //   console.log('result', item);

  //   setTimeout(() => {
  //   if(item.length === this.messages.length){
  //     this.infitniteScroll.disabled = true;
  //     return;
  //   }

    

  //   this.messages = item;
  //   this.infitniteScroll.complete();
  // }, 1000);
  // })

// setTimeout(() => {
//   let contador = this.messages.length;
//   const addItems = Array(2);
//   this.messages.push(...addItems);
//   alert('hay:' + contador );
//   ev.target.complete();
// }, 1500);
//}

