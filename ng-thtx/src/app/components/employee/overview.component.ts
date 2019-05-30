import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-overview",
  templateUrl: "./overview.component.html",
  styleUrls: []
})
export class OverviewComponent implements OnInit, OnDestroy {

  parentRouterId: number;
  subscription: Subscription;

  constructor(private activetedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.subscription = this.activetedRoute.parent.params.subscribe(params => {
      this.parentRouterId = params["id"];
      // alert("Parent id:" + this.parentRouterId);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
