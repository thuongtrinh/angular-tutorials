import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {

  msg: string;

  constructor() { }

  ngOnInit() {
  }

  onFormSubmit(userForm: NgForm) {
    console.log(userForm.value);
    console.log('Name:' + userForm.controls['name'].value);
    console.log('City:' + userForm.controls['city'].value);
    console.log('Form Valid:' + userForm.valid);
    console.log('Form Submitted:' + userForm.submitted);
  }

  resetUserForm(userForm: NgForm) {
    userForm.resetForm();
  }
}
