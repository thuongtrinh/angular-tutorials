import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PersonService } from 'src/app/services/person.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.scss']
})
export class PersonEditComponent implements OnInit {
  person: Person;
  personForm: FormGroup;
  isUpdating = false;

  constructor(
    private personService: PersonService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private dialogService: DialogService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap
      .pipe(
        map(params => params.get('person-id')),
        switchMap(id => this.personService.getPerson(id))
      )
      .subscribe(person => {
        this.person = person;
        this.createForm(person);
      });
  }

  createForm(person: Person) {
    this.personForm = this.formBuilder.group({
      personId: person.personId,
      name: person.name,
      city: person.city,
      mobile: person.mobile
    });
  }

  onFormSubmit() {
    this.isUpdating = true;
    this.person.name = this.personForm.get('name').value;
    this.person.city = this.personForm.get('city').value;
    this.person.mobile = this.personForm.get('mobile').value;
    this.personService
      .updatePerson(this.person)
      .subscribe(() =>
        this.router.navigate(['/person/list'], {
          relativeTo: this.activatedRoute
        })
      );
  }

  canDeactivate(): Observable<boolean> | boolean {
    if (this.isUpdating && this.personForm.dirty) {
      this.isUpdating = false;
      return this.dialogService.confirm('Discard changes for Person?');
    }

    return true;
  }
}
