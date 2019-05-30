import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  _isLoggedIn:boolean = false;

  constructor() { }

  setLogin(isLogin:boolean){
    this._isLoggedIn = isLogin;
  }

  isLogin():boolean{
    return this._isLoggedIn;
  }

  checkLogin(value:any){
    if(value.username === 'admin' && value.password === '123'){
      this.setLogin(true);
    }
  }
}
