import { Injectable } from '@angular/core';
import { getAuth, signOut, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from "firebase/app";

import { environment } from 'src/environments/environment';
import { Router, RouterModule } from '@angular/router';

const app = initializeApp(environment.firebaseConfig)

@Injectable({
    providedIn: 'root',
  })
  export class authService {
  
    constructor(private router: Router) { }

    authGoogle(){
        const provider = new GoogleAuthProvider();
        const auth = getAuth(app);
        signInWithPopup(auth, provider)
          .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential?.accessToken;
            console.log(credential);
            console.log(token);
            // The signed-in user info.
            const user = result.user;
            console.log(user.email);
            this.router.navigate(['/chat']);
              
            // IdP data available using getAdditionalUserInfo(result)
            // ...
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
          });
    }

    outGoogle(){
      const auth = getAuth();
      signOut(auth).then(() => {
        // Sign-out successful.
        this.router.navigate(['/login']);
        alert('vas a irte')
      }).catch((error) => {
        // An error happened.
      });
    }

  }