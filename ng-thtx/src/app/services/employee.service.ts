import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl = "http://5ad9a2c854db9a0014e49280.mockapi.io/api/employees";

  constructor(private _http: Http) {}

  getList(): Observable<any>{
    var a= this._http.get(this.apiUrl).map(response => response.json());
    console.log(a);
    return a;
  }

  search(keyword:String): Observable<any> {
    return this._http.get(this.apiUrl + "?search=" + keyword).map(response => response.json());
  }

  addNew(data: any): Observable<any> {
    return this._http.post(this.apiUrl, data).map(response => response.json());
  }

  getSingle(_id: number): Observable<any> {
    return this._http.get(this.apiUrl + "/" + _id).map(response => response.json());
  }

  delete(_id: number): Observable<any> {
    return this._http.delete(this.apiUrl + "/" + _id).map(response => response.json());
  }

  update(_id: number, data: any): Observable<any> {
    return this._http.put(this.apiUrl + "/" + _id, data).map(response => response.json());
  }

}
