import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private loginService: LoginService, private appComp: AppComponent) {}
  ngOnInit() {}

  public checkLogin(value: any) {
    this.loginService.checkLogin(value);
    if (this.loginService.isLogin()) {
      this.appComp.ngOnInit();
      this.router.navigate(["employees"]);
    }
  }

}
