import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: []
})
export class LogoutComponent implements OnInit {

  loggedInUser: User;

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.loggedInUser = this.authService.getLoggedInUser();
  }

  logout() {
    this.authService.logoutUser();
    this.loggedInUser = null;
    console.log('Do logout');
    this.router.navigate([ '/login' ]);
  }
}
