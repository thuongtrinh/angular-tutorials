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
import { MsgComponent } from './components/city/msg/msg.component';
import { MsgCountryComponent } from './components/city/msg-country/msg-country.component';
import { AliasComponent } from './components/city/alias/alias.component';
import { CaseComponent } from './components/city/case/case.component';
import { TextsizeComponent } from './components/city/textsize/textsize.component';
import { UppercaseComponent } from './components/city/uppercase/uppercase.component';
import { SelectboxComponent } from './components/city/selectbox/selectbox.component';
import { EmpTagComponent } from './components/city/emp-tag/emp-tag.component';
import { CustomDirectivesComponent } from './components/custom-directives/custom-directives.component';
import { RedDirective } from './components/custom-directives/directives/red.directive';
import { ThemeDirective } from './components/custom-directives/directives/theme.directive';
import { TextSizeDirective } from './components/custom-directives/directives/text-size.directive';
import { ColorInputDirective } from './components/custom-directives/directives/color-input.directive';
import { CustomThemeDirective } from './components/custom-directives/directives/custom-theme.directive';
import { DynamicColorDirective } from './components/custom-directives/directives/dynamic-color.directive';
import { MouseDirective } from './components/custom-directives/directives/mouse.directive';
import { CpDelayDirective } from './components/custom-directives/directives/cp-delay.directive';
import { CpIfDirective } from './components/custom-directives/directives/cp-if.directive';
import { CpLoopDirective } from './components/custom-directives/directives/cp-loop.directive';
import { NgifThenElseComponent } from './components/custom-directives/ngif-then-else/ngif-then-else.component';
import { PersonService } from './services/person.service';
import { ViewchildComponent } from './components/viewchild/viewchild.component';
import { NumberComponent } from './components/viewchild/number/number.component';
import { NumberParentComponent } from './components/viewchild/number-parent/number-parent.component';
import { CpcolorParentComponent } from './components/viewchild/cpcolor-parent/cpcolor-parent.component';
import { CpcolorDirective } from './components/viewchild/cpcolor-parent/cpcolor.directive';
import { CpthemeComponent } from './components/viewchild/cptheme/cptheme.component';
import { BookDirective } from './components/viewchild/directives/book.directive';
import { WriterComponent } from './components/viewchild/writer/writer.component';
import { FavouriteBooksComponent } from './components/viewchild/favourite-books/favourite-books.component';
import { FavouriteCitiesComponent } from './components/viewchild/favourite-cities/favourite-cities.component';
import { FavouriteFriendsComponent } from './components/viewchild/favourite-friends/favourite-friends.component';
import { City2Component } from './components/viewchild/city2/city2.component';
import { FriendComponent } from './components/viewchild/friend/friend.component';
import { Address2Component } from './components/viewchild/address2/address2.component';
import { VcDemo1Component } from './components/viewchild/vc-demo1/vc-demo1.component';
import { VcDemo2Component } from './components/viewchild/vc-demo2/vc-demo2.component';
import { VcDemo3Component } from './components/viewchild/vc-demo3/vc-demo3.component';
import { MessageDirective } from './components/viewchild/directives/message.directive';
import { Writer2Component } from './components/viewchild/writer2/writer2.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { CustomPipeComponent } from './components/pipes/custom-pipe/custom-pipe.component';
import { WelcomePipe } from './components/pipes/define/welcome.pipe';
import { StrformatPipe } from './components/pipes/define/strformat.pipe';
import { DivisionPipe } from './components/pipes/define/division.pipe';
import { MyjsonPipe } from './components/pipes/define/myjson.pipe';
import { MyuppercaseonePipe } from './components/pipes/define/myuppercaseone.pipe';
import { MyuppercasetwoPipe } from './components/pipes/define/myuppercasetwo.pipe';
import { CompanytwoPipe } from './components/pipes/define/companytwo.pipe';
import { CompanyonePipe } from './components/pipes/define/companyone.pipe';
import { RepeatPipe } from './components/pipes/define/repeat.pipe';

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
    AjaxBusyIndicatorDirective,
    MsgComponent,
    MsgCountryComponent,
    AliasComponent,
    CaseComponent,
    TextsizeComponent,
    UppercaseComponent,
    SelectboxComponent,
    EmpTagComponent,
    CustomDirectivesComponent,
    RedDirective,
    ThemeDirective,
    TextSizeDirective,
    ColorInputDirective,
    CustomThemeDirective,
    DynamicColorDirective,
    MouseDirective,
    CpDelayDirective,
    CpIfDirective,
    CpLoopDirective,
    NgifThenElseComponent,
    ViewchildComponent,
    NumberComponent,
    NumberParentComponent,
    CpcolorDirective,
    CpcolorParentComponent,
    CpthemeComponent,
    BookDirective,
    WriterComponent,
    FavouriteBooksComponent,
    FavouriteCitiesComponent,
    FavouriteFriendsComponent,
    City2Component,
    FriendComponent,
    Address2Component,
    VcDemo1Component,
    VcDemo2Component,
    VcDemo3Component,
    MessageDirective,
    Writer2Component,
    PipesComponent,
    CustomPipeComponent,
    WelcomePipe,
    StrformatPipe,
    DivisionPipe,
    MyjsonPipe,
    MyuppercaseonePipe,
    MyuppercasetwoPipe,
    CompanytwoPipe,
    CompanyonePipe,
    RepeatPipe,
  ],
  providers: [
    GlobalErrorHandlerService, { provide: ErrorHandler, useClass: GlobalErrorHandlerService },
    httpInterceptorProviders,
    PersonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
