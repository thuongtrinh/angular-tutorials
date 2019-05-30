import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: []
})
export class AddNewComponent implements OnInit {

  employee: any;
  _id: number;

  constructor(private employeeService: EmployeeService, private activateRoute: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    this.employee = {};
  }

  addEmployee() {
    this.employeeService.addNew(this.employee).subscribe(response => {
        if (response) {
            alert("Added new successfully");
            this.router.navigate(['/employees']);
        }
    });
  }

  gotoEmployees() {
      this.router.navigate(['/employees']);
  }
}
