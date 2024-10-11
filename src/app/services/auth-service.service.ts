import { Injectable } from '@angular/core';
import { AuthConfig } from 'angular-oauth2-oidc';
import { OAuthService, OAuthEvent } from 'angular-oauth2-oidc';
import { environment } from '../../environments/environment';


export const authCodeFlowConfig: AuthConfig = {
  issuer: environment.issuer,
  redirectUri: window.location.origin + '/callback',
  clientId: environment.clientId,
  responseType: 'token id_token',
  logoutUrl: window.location.origin,
  scope: 'openid profile email read:profile',
  showDebugInformation: true,
  skipIssuerCheck: true,
  silentRefreshRedirectUri: window.location.origin,
  useSilentRefresh: true,
  customQueryParams: {
    audience: environment.audience ,
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
  }
  logout(): void {

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
