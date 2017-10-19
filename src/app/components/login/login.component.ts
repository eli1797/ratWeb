import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string;
  password:string;

  constructor(public auth: AuthService,
              private router: Router) { }

  setEmail(email) {
      this.email = email;
  }

  setPassword(password) {
      //totally secure ;)
      if (this.password !== null || this.password !== "") {
        this.password = password;
      } else {
        alert("Password cannot be null or empty");
      }
  }

  login() {
    /*
    NOT sure if alert boxes work
    @TODO
    */
      if (this.email !== null || this.email !== "") {
          if (this.password !== null || this.password !== "") {
            console.log("login attempt");
            this.auth.emailLogin(this.email, this.password);
          } else {
              alert("Password cannot be null or empty. Try again please");
          }
      } else {
          alert("Email cannot be null or empty. Try again please.")
      }
  }

  logout() {
    this.auth.signOut();
  }

  ngOnInit() {
  }

}
