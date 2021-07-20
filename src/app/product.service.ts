import { Injectable } from '@angular/core';
import { Product } from './product.model';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

//private products: Product[] = [
  // new Product(
  //   1,
  //   'Brownie',
  //   25,
  //   1,
  //   ["https://celebratingsweets.com/wp-content/uploads/2019/02/Homemade-Brownies-1-5.jpg"]

  // ),
  //   new Product(
  //     2,
  //     'Burger',
  //     30,
  //     1,
  //     ["https://content.jdmagicbox.com/comp/chengalpattu/i7/9999pxx44.xx44.200323212749.c9i7/catalogue/burger-king-guduvanchery-chengalpattu-burger-joints-1yb9je7uek.jpg"]
  //   ),
  //   new Product(
  //     3,
  //     'Pizza',
  //     40,
  //     1,
  //     ["https://static.toiimg.com/thumb/53110049.cms?width=1200&height=900"]
  //   ),
  //   new Product(
  //     4,
  //     'ice cream',
  //     10,
  //     1,
  //     ["https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/easiest-ever-fruit-and-coconut-ice-cream-1589550075.jpg"]
  //   ),
  // ]

  API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}
getProducts(){
  let url = `${this.API_URL}/v1/products`
  return this.http.get(url);
}



// products = [
//   {
//     name: 'Brownie',
//     tag: 'Brownie',
//     price: 20,
//     inCart: 0,
//   },
//   {
//     name: 'Burger',
//     tag: 'Burger',
//     price: 35,
//     inCart: 0,
//   },
//   {
//     name: 'Pizza',
//     tag: 'Pizza',
//     price: 40,
//     inCart: 0,
//   },
//   {
//     name: 'IceCream',
//     tag: 'IceCream',
//     price: 15,
//     inCart: 0,
//   },
// ];

// getAllProducts() {
//   return this.products;
// }

}
