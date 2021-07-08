import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  products = [
    {
      name: 'Brownie',
      tag: 'Brownie',
      price: 20,
      inCart: 0,
    },
    {
      name: 'Burger',
      tag: 'Burger',
      price: 35,
      inCart: 0,
    },
    {
      name: 'Pizza',
      tag: 'Pizza',
      price: 40,
      inCart: 0,
    },
    {
      name: 'IceCream',
      tag: 'IceCream',
      price: 15,
      inCart: 0,
    },
  ];

  getAllProducts() {
    return this.products;
  }
}
