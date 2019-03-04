import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from '../../models/produit';

@Component({
  selector: 'app-add-product-componenet',
  templateUrl: './add-product-componenet.component.html',
  styleUrls: ['./add-product-componenet.component.css']
})
export class AddProductComponenetComponent implements OnInit {

  @Output() sendProduct = new EventEmitter<Product>();
  product: Product;
  constructor() {
    this.product = {
      description: ' ',
      nom : '',
      prix: 0
    };
   }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    this.product = new Product(f.value['nom'], f.value['descr'], f.value['prix']);
    this.sendProduct.emit(this.product);
  }

}
