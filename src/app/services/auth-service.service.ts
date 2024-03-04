import { Injectable } from '@angular/core';
import { AuthConfig } from 'angular-oauth2-oidc';
import { OAuthService, OAuthEvent } from 'angular-oauth2-oidc';



export const authCodeFlowConfig: AuthConfig = {
  issuer: 'https://dev-iwm1hr4ywzqlodpw.us.auth0.com/',
  redirectUri: window.location.origin + '/callback',
  clientId: 'EEhKnXxSMBYDLCjwlfOl33wRDxSGwecD',
  responseType: 'token id_token',
  logoutUrl: window.location.origin,
  scope: 'openid profile email read:profile',
  showDebugInformation: true,
  skipIssuerCheck: true,
  silentRefreshRedirectUri: window.location.origin,
  useSilentRefresh: true,
  customQueryParams: {
    audience: 'http://localhost:8080',
    max_age:0
  },
};


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private oauth: OAuthService) {

    this.oauth.configure(authCodeFlowConfig);
    this.oauth.loadDiscoveryDocumentAndTryLogin();
    this.oauth.setupAutomaticSilentRefresh();

  }
  login(): void {
    this.oauth.initLoginFlow();
    console.log("access token : " , this.oauth.getAccessToken());
  }
  logout(): void {
    console.log("logout");
    this.oauth.logOut();
    this.oauth.events.subscribe((event) => {
      if (event instanceof OAuthEvent && event.type === 'logout') {
        
        console.log('User has been logged out.');
      }
    });

  }
  handleLoginCallback() {
    

  }

  isUserLoggedIn() {
    return this.oauth.getIdentityClaims() !== null;
  }
}
