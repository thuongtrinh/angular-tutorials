import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { AuthService } from '../services/auth.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ LoginComponent ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    SharedModule
  ],
  providers: [ AuthService ]
})
export class AuthModule {
}
