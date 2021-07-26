import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../product.model';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class CartService {
  API_URL = environment.API_URL;
  constructor(private http: HttpClient) { }


  addOrders(order: any) {
    console.log(order)
    let url = `${this.API_URL}/v1/orders`
    return this.http.post(url, order
    );
  }
  getAllUsers() {
    let url = `${this.API_URL}/v1/users`
    return this.http.get(url);
  }




  placeholder = [];
  cartItems = new BehaviorSubject([])





  addItem(product: Product) {
    console.log(product);
    const items = this.getCartData();

    let index = items.findIndex((item: any) => {
      return item._id === product._id
    });

    if (index != -1) {
      let existingProduct = items[index];
      existingProduct.qty++;

      items[index] = existingProduct;
    }
    else {
      product.qty = 1;


      items.push(product);
    }
    this.setCartData(items);


  }

  setCartData(data: any) {
    localStorage.setItem('cart', JSON.stringify(data));
    this.cartItems.next(this.getCartData());
  }
  getCartData() {
    let itemsStr = localStorage.getItem('cart');
    return itemsStr != null ? JSON.parse(itemsStr) : [];
  }
}
