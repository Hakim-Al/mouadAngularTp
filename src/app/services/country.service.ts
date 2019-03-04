import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CountryService {

  constructor(private _http: HttpClient) {
   }

   getCountry() {
     return this._http.get('https://restcountries.eu/rest/v2/all');
   }

   getCountryByName(str: string) {
     return this._http.get('https://restcountries.eu/rest/v2/name/' + str);
   }
}
