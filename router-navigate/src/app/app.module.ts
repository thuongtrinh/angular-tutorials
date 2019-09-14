import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { GlobalErrorComponent } from './components/global-error/global-error.component';
import { GlobalErrorHandlerService } from './services/global-error-handler.service';
import { DashboardLayoutComponent } from './components/dashboard-layout/dashboard-layout.component';
import { AuthModule } from './authentication/auth.module';
import { LogoutComponent } from './authentication/logout/logout.component';
import { SharedModule } from './shared/shared.module';
import { CityComponent } from './components/city/city.component';
import { CityListComponent } from './components/city/city-list/city-list.component';
import { UserComponent } from './components/user/user.component';
import { TeamComponent } from './components/team/team.component';
import { UserReactiveFormComponent } from './components/user/user-reactive-form/user-reactive-form.component';
import { CustomMinDirective } from './custom-validators/custom-min-directive';
import { CustomMaxDirective } from './custom-validators/custom-max-directive';
import { ExistingUsernameValidatorDirective } from './custom-validators/existing-username-validator';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TestData } from './components/Data/test-data';
import { ExistingEmailValidatorDirective } from './custom-validators/existing-email-validator';
import { ExistingMobileValidatorDirective } from './custom-validators/existing-mobile-validator';
import { BlackListedMobileNumberValidatorDirective } from './custom-validators/blacklisted-mobilenumber-validator';
import { PwdCannotSameUserValidatorDirective } from './custom-validators/pwd-cannot-same-user-validator';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule.forRoot(),
    InMemoryWebApiModule.forRoot(TestData)
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    GlobalErrorComponent,

    DashboardLayoutComponent,
    LogoutComponent,
    CityComponent,
    CityListComponent,
    UserComponent,
    TeamComponent,
    UserReactiveFormComponent,
    CustomMinDirective,
    CustomMaxDirective,
    ExistingUsernameValidatorDirective,
    ExistingEmailValidatorDirective,
    ExistingMobileValidatorDirective,
    BlackListedMobileNumberValidatorDirective,
    PwdCannotSameUserValidatorDirective
  ],
  providers: [
    GlobalErrorHandlerService,
    {
      provide: ErrorHandler, useClass: GlobalErrorHandlerService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

