import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-pipes',
  templateUrl: './comp-pipes.component.html',
  styleUrls: ['./comp-pipes.component.css']
})

export class CompPipesComponent implements OnInit {

  title = "Hello, My name is ThuongTX";
  collection:string[] = ['a','b','c','d'];

  constructor() { }

  ngOnInit() {
  }

}
