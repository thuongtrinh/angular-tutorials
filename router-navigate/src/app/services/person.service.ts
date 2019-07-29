import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Person } from '../models/person.model';
import { map } from 'rxjs/operators';

const PERSONS = [
  new Person(1, 'Smith1', 'Varanasi', '0978776555'),
  new Person(2, 'Smith2', 'Ayodhya', '0967855447'),
  new Person(3, 'Smith3', 'Mathura', '0122345643')
];

const personList$ = of(PERSONS);
const personListPromise = Promise.resolve(PERSONS);

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  url = '/api/person';

  constructor(private http: HttpClient) {}

  addPerson(person: Person): Observable<Person>{
    return this.http.post<Person>(this.url, person);
  }

  getPersons(): Observable<Person[]> {
    return personList$;
  }

  getPerson(id: string): Promise<Person>{
    const idCover = parseInt(id);
    return personListPromise.then(persons => persons.find(person => person.personId === idCover));
  }

  updatePerson(person: Person): Observable<Person> {
    console.log('Person updating...');
    return this.getPersons().pipe(map(persons => {
      let personObj = persons.find(obj => obj.personId === person.personId);
      personObj = person;
      return personObj;
    }));
  }
}
