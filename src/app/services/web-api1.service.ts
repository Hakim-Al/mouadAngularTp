import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class WebApi1Service {

  constructor(private _http: HttpClient) { }

  getAllCustomer() {
    return this._http.get('http://localhost:49563/api/Customer');
  }

}
