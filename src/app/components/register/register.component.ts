import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email:string;
  password:string;

  constructor(public authS: AuthService, public router: Router) {}

  ngOnInit() {}

  setEmail(email) {
      this.email = email;
  }

  setPassword(password) {
      //totally secure ;)
      this.password = password;
  }

  register(){
      if (this.email != null || this.email != "") {
          if (this.password != null || this.password != "") {
            console.log("Registration Attempt");
            this.authS.emailSignUp(this.email, this.password);
          } else {
              alert("Password cannot be null or empty. Try again please");
          }
      } else {
          alert("Email cannot be null or empty. Try again please.")
      }
  }

}
