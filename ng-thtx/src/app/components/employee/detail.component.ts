import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { EmployeeService } from 'src/app/services/employee.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: []
})
export class DetailComponent implements OnInit, OnDestroy {

  employee:any;
  _id:number;
  subscription:Subscription;

    constructor(private employeeService: EmployeeService, private activateRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.subscription = this.activateRoute.params.subscribe(params => {
            this._id = params['id'];
        });

        this.employeeService.getSingle(this._id).subscribe((response:any) => {
            this.employee = response;
        }, error => {
            console.log("System error API");
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
