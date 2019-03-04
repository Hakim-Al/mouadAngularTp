import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/produit';
import { isNullOrUndefined } from 'util';
import { TestPipePipe } from '../test-pipe.pipe';
import { OcServiceService } from '../services/oc-service.service';


@Component({
  selector: 'app-product-list-compoenent',
  templateUrl: './product-list-compoenent.component.html',
  styleUrls: ['./product-list-compoenent.component.css']
})
export class ProductListCompoenentComponent implements OnInit {

  constructor(private _OcService: OcServiceService) {

  }
  @Input() produits: Array<Product>;
  isReverse = true;
  lastUpdate  = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

  ngOnInit() {
  }

  getElements(filter: string) {
    if ( isNullOrUndefined(filter)) {
      return this.produits;
    }
    return this.produits.filter((p) => p.description.includes(filter) || p.nom.includes(filter));
  }

  sort(str: string) {
    if (str === 'nom') {
       this.produits.sort((a, b) => (b.nom).localeCompare(a.nom));
    } else if (str === 'descr') {
       this.produits.sort((a, b) => (a.description).localeCompare(b.description));
    } else if (str === 'price') {
      this.produits.sort((a, b) => {
        if ( a.prix > b.prix ) {
          return 1;
        } else if ( a.prix < b.prix ) {
          return -1;
        }
        return 0;
      });
    }
    if (this.isReverse) {
      this.produits.reverse();
    }
    this.isReverse = !this.isReverse;
  }
}
