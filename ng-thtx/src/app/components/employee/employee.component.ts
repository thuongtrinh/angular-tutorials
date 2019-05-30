import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "src/app/services/employee.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.css"]
})
export class EmployeeComponent implements OnInit {

  title = 'This Angular Employee component apply Service';
  employees: any[];
  pages: number[];
  currentPage: number;
  keyword: String;

  constructor(
    private employeeService: EmployeeService,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activateRoute.queryParams.subscribe(params => {
      this.currentPage = params["pageNumber"] || 1;
    });

    this.loadData();
    this.pages = [1, 2, 3, 4, 5];
  }

  loadData() {
    this.employeeService.getList().subscribe(
      (response: any) => {
        this.employees = response;
      }, error => {
        console.log("System error API");
      }
    );
  }

  search(){
    this.employeeService.search(this.keyword).subscribe((response:any) => {
        this.employees  =response;
        console.log(response);
    }, error => {
        console.log(error);
    });
  }

  deleteEmployee(id: number){
    let confirmDelete = confirm('Are you sure to delete this employee?');
    if(confirmDelete) {
      this.employeeService.delete(id).subscribe(response => {
        if (response) {
            alert('Deleted successfully');
            this.loadData();
        }
      });
    }
  }

}
