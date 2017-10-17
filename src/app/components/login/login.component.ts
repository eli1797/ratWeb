import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string;
  password:string;

  constructor(public afAuth: AngularFireAuth) {
  }

  setEmail(email) {
      console.log(email);
      this.email = email;
  }

  setPassword(password) {
      //totally secure ;)
      console.log(password);
      this.password = password;
  }

  login() {
      if (this.email != null || this.email != "") {
          if (this.password != null || this.password != "") {
            this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password);
          } else {
              alert("Password cannot be null or empty. Try again please");
          }
      } else {
          alert("Email cannot be null or empty. Try again please.")
      }
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  ngOnInit() {
  }

}
