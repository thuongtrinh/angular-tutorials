import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { StudentComponent } from './components/student/student.component';
import { CompRelationComponent } from './components/comp-relation/comp-relation.component';
import { CompPipesComponent } from './components/comp-pipes/comp-pipes.component';
import { ExponentialPipe } from './components/comp-pipes/exponential.pipe';
import { LoginComponent } from './components/login/login.component';
import { FormTempComponent } from './components/form-temp/form-temp.component';
import { TutorialComponent } from './components/tutorial/tutorial.component';
import { appRoutes } from './app.routes';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeeService } from './services/employee.service';
import { AddNewComponent } from './components/employee/add-new.component';
import { DetailComponent } from './components/employee/detail.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { OverviewComponent } from './components/employee/overview.component';
import { ProjectsComponent } from './components/employee/projects.component';
import { LoginService } from './services/login.service';
import { EditComponent } from './components/employee/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectiveComponent,
    StudentComponent,
    CompRelationComponent,
    CompPipesComponent,
    ExponentialPipe,
    LoginComponent,
    FormTempComponent,
    TutorialComponent,
    EmployeeComponent,
    AddNewComponent,
    DetailComponent,
    OverviewComponent,
    ProjectsComponent,
    NotFoundComponent,
    EditComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, appRoutes
  ],
  providers: [EmployeeService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
