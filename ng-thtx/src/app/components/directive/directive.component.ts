import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})

export class DirectiveComponent implements OnInit {

  public title = "This Structual Directive Component";
  public display = true;
  public color = "white";
  public arrCountry:any[] = ["Vietnam", 22, "Lao"]
  public cOne = true;
  public cTwo = true;

  public clickToggle() {
      this.cOne = !this.cOne;
      this.cTwo = !this.cTwo;
  }

  public font = "italic";
  public size = 30;

  constructor() { }

  ngOnInit() {
  }

}
