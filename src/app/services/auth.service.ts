import { Injectable } from '@angular/core';
import { getAuth, signOut, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

const app = initializeApp(environment.firebaseConfig)


@Injectable({
    providedIn: 'root',
  })
  export class authService {
    userData: any;

    constructor(private router: Router, private auth: AngularFireAuth) { 
      this.auth.authState.subscribe((user)=>{
        if(user){
          this.userData = user;
          localStorage.setItem('user', JSON.stringify(this.userData));
          JSON.parse(localStorage.getItem('user')!);
        } else {
          localStorage.setItem('user', 'null');
          JSON.parse(localStorage.getItem('user')!);
        }
      })
    }

    authGoogle(){
        // const provider = new GoogleAuthProvider();
        // const auth = getAuth(app);
        return this.auth.signInWithPopup(new GoogleAuthProvider())
          .then((result) => {
            // const credential = GoogleAuthProvider.credentialFromResult(result);
            // const token = credential?.accessToken;
            const user = result.user;
            this.userData = user?.displayName;
            localStorage.setItem('user', JSON.stringify(user?.displayName))
            
              this.router.navigate(['chat']);
            
          }).catch((error) => {
            window.alert(error)
          });
    }

    outGoogle(){
      const auth = getAuth();
      signOut(auth).then(() => {
        // Sign-out successful.
        this.router.navigate(['login']);
        alert('vas a irte')
      }).catch((error) => {
        // An error happened.
      });
    }

  }

  // NOTAS:
  // Esta página de servicios nos permite realizar el logeo de los usuarios con su credencial de Google, mediante firebase
    // para ello empleamos la función que hemos creado authGoogle(), mediante el servicio obtenemos los datos del usuario 
    // para realizar el logout hemos creado la función outGoogle()