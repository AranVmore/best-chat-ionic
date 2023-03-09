import { Injectable } from '@angular/core';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";

import { environment } from 'src/environments/environment';

const app = initializeApp(environment.firebaseConfig)

@Injectable({
    providedIn: 'root',
  })
  export class authService {
  
    constructor() { }

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
            console.log(user);
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

  }