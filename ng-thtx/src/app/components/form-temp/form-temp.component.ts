import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-form-temp",
  templateUrl: "./form-temp.component.html",
  styleUrls: ["./form-temp.component.css"]
})

export class FormTempComponent implements OnInit {

  title = "Template Driver Forms";
  cities = [
    { Id: "", Name: "--" },
    { Id: 1, Name: "Ha Noi" },
    { Id: 2, Name: "Da Nang" },
    { Id: 3, Name: "Sai Gon" }
  ];

  constructor() {}

  ngOnInit() {}

  public onSubmitUser(value: any) {
    console.log(value);
  }

}
