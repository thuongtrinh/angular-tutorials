import { Component, OnInit, OnDestroy } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: []
})
export class EditComponent implements OnInit, OnDestroy {

  employee: any;
  _id: number;
  subscription: Subscription;

  constructor(private employeeService: EmployeeService, private activateRoute: ActivatedRoute,
      private router: Router) {
  }

  ngOnInit() {
      this.subscription = this.activateRoute.params.subscribe(params => {
          this._id = params['id'];
      });

      this.employeeService.getSingle(this._id).subscribe((response: any) => {
          this.employee = response;
      }, error => {
          console.log('System error API');
      });
  }

  editEmployee() {
      this.employeeService.update(this._id, this.employee).subscribe(response => {
          if (response) {
              alert('Updated successfully');
              this.router.navigate(['/employees']);
          }
      });
  }

  gotoEmployees() {
      this.router.navigate(['/employees']);
  }

  ngOnDestroy() {
      this.subscription.unsubscribe();
  }

}
