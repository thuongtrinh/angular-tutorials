import { RouterModule, Routes } from '@angular/router';
import { DirectiveComponent } from './components/directive/directive.component';
import { TutorialComponent } from './components/tutorial/tutorial.component';
import { FormTempComponent } from './components/form-temp/form-temp.component';
import { LoginComponent } from './components/login/login.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { AddNewComponent } from './components/employee/add-new.component';
import { DetailComponent } from './components/employee/detail.component';
import { OverviewComponent } from './components/employee/overview.component';
import { ProjectsComponent } from './components/employee/projects.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CheckLoginGuard } from './guards/check-login.guard';
import { CheckSaveFormGuard } from './guards/check-save-form.guard';
import { EditComponent } from './components/employee/edit.component';

const routing: Routes = [
  { path: '', component: LoginComponent },
  { path: 'tutorial', component: TutorialComponent},
  { path: 'directive', component: DirectiveComponent},
  { path: 'formtemp', component: FormTempComponent},
  { path: 'login', component: LoginComponent},
  { path: 'employees', component: EmployeeComponent/**, canActivate:[CheckLoginGuard]*/},
  { path: 'employee-add', component: AddNewComponent},
  { path: 'employee-detail/:id', component: DetailComponent/**, canDeactivate:[CheckSaveFormGuard]*/,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },  // Định nghĩa vào trang chủ sẽ redirect tới trang employees
      { path: 'overview', component: OverviewComponent },
      { path: 'projects', component: ProjectsComponent }
    ]
  },
  { path: 'employee-edit/:id', component: EditComponent },
  { path: '**', component: NotFoundComponent }

  // { path: '', redirectTo:'employees', pathMatch:'full' },
  // Định nghĩa vào trang chủ sẽ redirect tới trang employees
  // { path: 'employees', component: EmployeeComponent, canActivate:[CheckLoginGuard] },
  // { path: 'login', component: LoginComponent },

  // {
  //   path: 'employee-detail/:id', component: EmployeeDetailComponent, canDeactivate:[CheckSaveFormGuard],
  //   children: [
  //     { path: '', redirectTo: 'overview', pathMatch: "full" },
  //     { path: 'overview', component: EmployeeOverviewComponent }
  //   ]
  // },

  // { path: 'employee-edit/:id', component: EmployeeEditComponent },
  // { path: 'employee-add', component: EmployeeAddComponent },
  // { path: '**', component: NotFoundComponent }

];

export const appRoutes = RouterModule.forRoot(routing);
