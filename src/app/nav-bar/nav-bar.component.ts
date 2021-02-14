import { Component, OnInit } from '@angular/core';
import {Router, NavigationEnd, Event as NavigationEvent,} from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  hideNavBar = false;
  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
    this.checkRoute();
  }

  checkRoute(): void {
    this.router.events.subscribe(
      (event: NavigationEvent) => {
        if (event instanceof NavigationEnd) {
          if (this.router.url.includes('/login')) {
            this.hideNavBar = true;
          }
          else {
            this.hideNavBar = false;
          }
        }
      }
    );
  }
  goToHome(): void {
    this.router.navigate(['/home']);
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }
}
