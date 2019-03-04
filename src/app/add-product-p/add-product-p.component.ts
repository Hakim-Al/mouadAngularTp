import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/produit';
import { OcServiceService } from '../services/oc-service.service';

@Component({
  selector: 'app-add-product-p',
  templateUrl: './add-product-p.component.html',
  styleUrls: ['./add-product-p.component.css']
})
export class AddProductPComponent implements OnInit {

  produits = new Array<Product>();

  ngOnInit() {
    this.produits.push(new Product('p1', 'desc1', 1000));
    this.produits.push(new Product('p2', 'desc2', 40));
    this.produits.push(new Product('p3', 'desc3', 8));
    this.produits.push(new Product('p4', 'desc4', 48));
  }
  onSubmit(p: Product) {
    this.produits.push(p);
  }
}
