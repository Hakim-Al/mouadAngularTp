import { Component, OnInit } from '@angular/core';
import { Country} from '../../models/country';
import { CountryService } from '../services/country.service';
import { isNullOrUndefined } from 'util';
import { WebApi1Service } from '../services/web-api1.service';
@Component({
  selector: 'app-coutries',
  templateUrl: './coutries.component.html',
  styleUrls: ['./coutries.component.css']
})
export class CoutriesComponent implements OnInit {

  countries: Array<Country>;
  customers: Array<Customer>;
  constructor(public _countriesService: CountryService, public _webapiservice: WebApi1Service) { }

  ngOnInit() {
    this.getAll();

  }

  getAll() {
        this._countriesService.getCountry().subscribe((data: Array<Country>) => {
      this.countries = [];
    for ( let i = 0; i < data.length; i++) {
      this.countries.push(new Country(data[i].capital, data[i].flag, data[i].name, data[i].population, data[i].region));
    }
  });

  // les proprietés doivent debuter en miniscule !
  this._webapiservice.getAllCustomer().subscribe((data: Array<Customer>) => {
    this.customers = [];
  for ( let i = 0; i < data.length; i++) {
    this.customers.push(new Customer(data[i].id, data[i].firstName, data[i].lastName));
  }
   console.log(this.customers[0].firstName + ';' + this.customers[0].lastName);
});

  }
  search(str: string) {
    if ( str === '' || str === null || str === 'undefined') {
      this.getAll();
    }
    this._countriesService.getCountryByName(str).subscribe((data: Array<Country>) => {
      this.countries = [];
    for ( let i = 0; i < data.length; i++) {
      this.countries.push(new Country(data[i].capital, data[i].flag, data[i].name, data[i].population, data[i].region));
    }
  });

}

}

export class Customer {
  constructor(public id: number, public firstName: string, public lastName: string) {}
}
