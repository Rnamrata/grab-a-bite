import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModalComponent } from './login-modal/login-modal.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [LoginModalComponent],
  exports: [
    LoginModalComponent
  ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class LoginModule { }
