import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-tutorial",
  templateUrl: "./tutorial.component.html",
  styleUrls: ["./tutorial.component.css"]
})

export class TutorialComponent implements OnInit {
  constructor(private  router : Router) {}

  ngOnInit() {}

  public gotoMyself() {
    this.router.navigate(["tutorial"]); // redirect by typescript (not redirectTo)
  }
}
