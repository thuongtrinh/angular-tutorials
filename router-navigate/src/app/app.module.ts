import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
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

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    GlobalErrorComponent,

    DashboardLayoutComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule.forRoot()
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
