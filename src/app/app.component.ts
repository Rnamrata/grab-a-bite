import { Component } from '@angular/core';
import {AuthenticationService} from '../service/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'grab-a-bite';

  constructor(
    public authService: AuthenticationService
  ) {
  }
}
