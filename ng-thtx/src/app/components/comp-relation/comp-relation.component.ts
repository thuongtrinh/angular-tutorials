import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-comp-relation',
  templateUrl: './comp-relation.component.html',
  styleUrls: ['./comp-relation.component.css']
})
export class CompRelationComponent implements OnInit {

  @Input() name: string; // khai bao mot biet input
  @Output() vote = new EventEmitter<boolean>();

  public title = 'Relation between components';
  public voted: boolean = false;

  public doVoted(agree: boolean) {
    this.voted = !this.voted;
    this.vote.emit(agree);
  }

  setName(name: string) {
    this.name = name;
  }

  private changeNameDetail() {
    this.name = 'Technical Detail';
  }

  constructor() {}

  ngOnInit() {}
}
