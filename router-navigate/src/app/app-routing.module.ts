import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { GlobalErrorComponent } from './components/global-error/global-error.component';
import { DashboardLayoutComponent } from './components/dashboard-layout/dashboard-layout.component';
import { AuthGuardService } from './services/auth-guard.service';
import { CityComponent } from './components/city/city.component';
import { CityListComponent } from './components/city/city-list/city-list.component';
import { TeamComponent } from './components/team/team.component';
import { RequestsComponent } from './http-interceptors/requests/requests.component';
import { CustomDirectivesComponent } from './components/custom-directives/custom-directives.component';
import { ViewchildComponent } from './components/viewchild/viewchild.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { CustomPipeComponent } from './components/pipes/custom-pipe/custom-pipe.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'country',
    loadChildren: './components/country/country.module#CountryModule'
  },
  {
    path: 'person',
    loadChildren: './components/person/person.module#PersonModule'
  },
  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    canActivate: [ AuthGuardService ],
    children: [
      {
        path: 'address',
        loadChildren: './components/address/address.module#AddressModule',
        canLoad: [ AuthGuardService ]
      },
      {
        path: 'admin',
        loadChildren: './components/admin/admin.module#AdminModule',
        canLoad: [ AuthGuardService ]
      },
      {
        path: 'article',
        loadChildren: './components/article/article.module#ArticleModule',
        canLoad: [ AuthGuardService ]
      }
    ]
  },
  {
    path: 'book',
    loadChildren: './components/book/book.module#BookModule'
  },
  {
    path: 'user',
    loadChildren: './components/user/user.module#UserModule'
  },
  {
    path: 'city-add',
    component: CityComponent
  },
  {
    path: 'city-list',
    component: CityListComponent
  },
  {
    path: 'team',
    component: TeamComponent
  },
  {
    path: 'requests',
    component: RequestsComponent
  },
  {
    path: 'custom-directive',
    component: CustomDirectivesComponent
  },
  {
    path: 'viewchild',
    component: ViewchildComponent
  },
  {
    path: 'error',
    component: GlobalErrorComponent
  },
  {
    path: 'pipes',
    component: PipesComponent
  },
  {
    path: 'pipes/custom-async-pipe',
    component: CustomPipeComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
