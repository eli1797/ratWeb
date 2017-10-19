import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { Router } from "@angular/router";
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {

  authState: any = null;
  userRef: AngularFireObject<any>;

  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase, private router:Router) {

          this.afAuth.authState.subscribe((auth) => {
            this.authState = auth
          });
  }

  // Returns true if user is logged in
  get authenticated(): boolean {
      return this.authState !== null;
  }

    //// Email/Password Auth ////
  emailSignUp(email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  emailLogin(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  // Sends email allowing user to reset password
  resetPassword(email: string) {
    const fbAuth = firebase.auth();

    return fbAuth.sendPasswordResetEmail(email)
      .then(() => console.log('email sent'))
      .catch((error) => console.log(error))
  }


  //// Sign Out ////
  signOut(): void {
    this.afAuth.auth.signOut();
    //navigate home
    this.router.navigate(['/'])
  }


}
