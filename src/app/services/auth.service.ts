import { Injectable, EventEmitter } from '@angular/core';
import {
  getAuth,
  signOut,
  GoogleAuthProvider,
} from 'firebase/auth';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Geolocation } from '@capacitor/geolocation';


@Injectable({
  providedIn: 'root',
})
export class authService {
  userData: any;
  //userPhoto: any;
  user$ = new EventEmitter<string>(); //observable

  // const printCurrentPosition = async () => {
  //   const coordinates = await Geolocation.getCurrentPosition();
  
  //   console.log('Current position:', coordinates);
  // };

  constructor(private router: Router, private auth: AngularFireAuth) {
    //comprobamos que hay cambios del usuario
    this.auth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        //this.userPhoto = user.photoURL;
        localStorage.setItem('user', JSON.stringify(this.userData.displayName));
        JSON.parse(localStorage.getItem('user')!);
        JSON.parse(localStorage.getItem('photo')!);
      } else {
        localStorage.setItem('user', 'null');
        localStorage.setItem('photo', 'null');
        JSON.parse(localStorage.getItem('user')!);
        JSON.parse(localStorage.getItem('photo')!);
      }
    });
  }

  authGoogle() {
    return this.auth
      .signInWithPopup(new GoogleAuthProvider())
      .then((result) => {
        const user = result.user;
        this.userData = user?.displayName;
        //const photo = user?.photoURL;
        //alert(photo);
        localStorage.setItem('user', JSON.stringify(user?.displayName));
        localStorage.setItem('photo', JSON.stringify(user?.photoURL));
        this.router.navigate(['chat']); //navegar a chat
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  outGoogle() {
    const auth = getAuth();
    localStorage.clear();
    signOut(auth)
      .then(() => {
        localStorage.removeItem('user');
        localStorage.clear();
        this.router.navigate(['login']);
        console.log('has salido del chat');
      })
      .catch((error) => {
        console.log('algo ha fallado');
      });
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== 'null' ? true : false;
  }


}

// NOTAS:
// Esta página de servicios nos permite realizar el logeo de los usuarios con su credencial de Google, mediante firebase
// para ello empleamos la función que hemos creado authGoogle(), mediante el servicio obtenemos los datos del usuario
// para realizar el logout hemos creado la función outGoogle()
