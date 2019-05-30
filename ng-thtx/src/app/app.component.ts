import { Component } from '@angular/core';
import { LoginService } from './services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ng-thtx';
  loginPage:boolean;

  image = "https://imgraovat.vnecdn.net/images/300_180/2018/04/18/133cdc86933b80a5eda3ddc77cdf5813.jpeg";
  textName = "Welcome TXT";
  applyClass = true;
  blueColor = false;
  hiddenDiv = true;
  contentButton = "Display all component";


  numberAgree = 0;
  numberDegree = 0;
  names = ['Mr.A', 'Mr.B', 'Mr.C'];

  constructor(private loginService:LoginService, private router:Router){
  }

  ngOnInit(){
    this.loginPage = this.loginService.isLogin();
  }

}
