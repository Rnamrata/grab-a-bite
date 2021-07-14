import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../service/authentication.service';
import {Router} from '@angular/router';
import {ShowHideService} from 'ngx-show-hide-password';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {

  loggedIn = false;
  userName: any;
  isHidden = true;

  constructor(
    public authService: AuthenticationService,
    private router: Router,
    private showHideService: ShowHideService
  ) {
    this.showHideService
      .getObservable('password1')
      .subscribe(show => {
        this.isHidden = !show;
      });
  }

  ngOnInit(): void {
  }

  loginAsUser(): void {
    this.loggedIn = true;
    this.authService.user.userName = this.userName;
    this.authService.loggedIn = this.loggedIn;
    this.redirect();
  }

  loginAsGuest(): void {
    this.loggedIn = this.authService.loginAsGuest();
    this.redirect();
  }

  redirect(): void {
    console.log(this.loggedIn);
    if (this.loggedIn) {
      this.router.navigate(['home']);
    }
    else {
      this.router.navigate(['login']);
    }
  }
}
