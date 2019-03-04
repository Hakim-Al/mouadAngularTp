import { Component, OnInit } from '@angular/core';
import { Product } from '../models/produit';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(private router: Router) {

  }
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
