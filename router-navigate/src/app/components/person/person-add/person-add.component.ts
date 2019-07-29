import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person-add',
  templateUrl: './person-add.component.html',
  styleUrls: ['./person-add.component.scss']
})
export class PersonAddComponent implements OnInit {
  personForm = new FormGroup({
    name: new FormControl(),
    city: new FormControl(),
    mobile: new FormControl()
  });

  constructor(private personService: PersonService) {}

  ngOnInit() {}

  onFormSubmit() {
    let person = this.personForm.value;
    this.personService.addPerson(person).subscribe(data => console.log(data));
  }
}
