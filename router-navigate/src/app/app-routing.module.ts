import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { GlobalErrorComponent } from './components/global-error/global-error.component';
import { DashboardLayoutComponent } from './components/dashboard-layout/dashboard-layout.component';
import { AuthGuardService } from './services/auth-guard.service';

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
    path: 'error',
    component: GlobalErrorComponent
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
