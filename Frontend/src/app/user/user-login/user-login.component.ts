import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private auth: AuthService,
    private alert: AlertifyService,
    private router: Router) { }

  ngOnInit() {
  }

  onLogin(loginForm: NgForm) {
    console.log(loginForm.value);
    const token = this.auth.authUser(loginForm.value);
    if (token) {
      localStorage.setItem('token', token.userName);
      this.router.navigate(['/']);
      this.alert.success("Login Successful");
    } else { this.alert.error("User id and password is wrong"); }
  }
}
