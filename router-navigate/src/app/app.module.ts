import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

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
import { TeamComponent } from './components/team/team.component';
import { RequestsComponent } from './http-interceptors/requests/requests.component';
import { RouterModule } from '@angular/router';
import { httpInterceptorProviders } from './http-interceptors';
import { AjaxBusyIndicatorDirective } from './http-interceptors/ajaxBusyInterceptor/ajax-busy-indicator.directive';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    SharedModule.forRoot(),
    // InMemoryWebApiModule.forRoot(UserData),
    ToastrModule.forRoot()
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    GlobalErrorComponent,

    DashboardLayoutComponent,
    LogoutComponent,
    CityComponent,
    CityListComponent,
    TeamComponent,
    RequestsComponent,
    AjaxBusyIndicatorDirective
  ],
  providers: [
    GlobalErrorHandlerService, { provide: ErrorHandler, useClass: GlobalErrorHandlerService },
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
