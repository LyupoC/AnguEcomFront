import { Component, OnInit } from '@angular/core';
import { OAuthService, OAuthEvent } from 'angular-oauth2-oidc';


@Component({
  selector: 'app-login-callback',
  template: '<div>Processing login...</div>',
  styleUrls: ['./login-callback.component.css']
})
export class LoginCallbackComponent implements OnInit {
  token: string | undefined;

  constructor(private auth: OAuthService) {
    
  }

  ngOnInit() {
    console.log(this.auth.hasValidAccessToken());


    this.auth.events.subscribe((event) => {
      if (event instanceof OAuthEvent && event.type === 'token_received') {
        this.token = this.auth.getAccessToken();
        console.log("token:", this.token);

        console.log(this.auth.getIdentityClaims()['given_name']);
      }
    });
  }

  hasToken(): boolean {
    return this.auth.hasValidAccessToken();
  }
}
