import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { OAuthService } from 'angular-oauth2-oidc';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {

  constructor(private oauthService: OAuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log(this.oauthService.hasValidAccessToken());
    if (this.oauthService.hasValidAccessToken()) {
  
      const accessToken = this.oauthService.getAccessToken();
      console.log(accessToken);
      const authReq = request.clone({
        setHeaders: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return next.handle(authReq);
    }
    return next.handle(request);
  }
}
