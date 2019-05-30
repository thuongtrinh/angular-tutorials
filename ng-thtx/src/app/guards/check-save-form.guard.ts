import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { DetailComponent } from '../components/employee/detail.component';

@Injectable({
  providedIn: 'root'
})
export class CheckSaveFormGuard implements CanDeactivate<DetailComponent> {
  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  //   return true;
  // }

  canDeactivate(component: DetailComponent){
    alert('You can not leave this page without saving data');
    return false;
  }

}
