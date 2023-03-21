import { Injectable, EventEmitter } from '@angular/core';
import {
  getAuth,
  signOut,
  GoogleAuthProvider,
} from 'firebase/auth';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class authService {
  userData: any;
  user$ = new EventEmitter<string>(); //observable

  constructor(private router: Router, private auth: AngularFireAuth) {
    this.auth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData.displayName));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }

  authGoogle() {
    return this.auth
      .signInWithPopup(new GoogleAuthProvider())
      .then((result) => {
        const user = result.user;
        this.userData = user?.displayName;
        const photoURL = user?.photoURL;
        localStorage.setItem('user', JSON.stringify(user?.displayName));
        this.router.navigate(['chat']); //navegar a chat
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  outGoogle() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        this.router.navigate(['login']);
        console.log('has salido del chat');
      })
      .catch((error) => {
        console.log('algo ha fallado');
      });
  }

}

// NOTAS:
// Esta página de servicios nos permite realizar el logeo de los usuarios con su credencial de Google, mediante firebase
// para ello empleamos la función que hemos creado authGoogle(), mediante el servicio obtenemos los datos del usuario
// para realizar el logout hemos creado la función outGoogle()
