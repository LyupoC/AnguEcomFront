import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth-service.service';

// Import the AuthService type from the SDK

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }
  login(): void {

    this.auth.login();
  }
  logout(): void {

    this.auth.logout();
  }

  isUserLoggedIn() {

    return this.auth.isUserLoggedIn();
  }

}
