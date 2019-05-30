import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class CheckLoginGuard implements CanActivate {

  constructor(private loginService:LoginService){
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      let login = this.loginService.isLogin();
      if(!login){
        alert('You must login to show this page');
      }
      return login;
  }

}
