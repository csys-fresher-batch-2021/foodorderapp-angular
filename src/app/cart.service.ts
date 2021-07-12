import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product.model';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  placeholder = [];
  cartItems = new BehaviorSubject([])

  constructor() {
    const ls = this.getCartData();
    if(ls)this.cartItems.next(ls)
   }

  addItem(product:Product){
    const items = this.getCartData();

    let index =  items.findIndex((item:any)=>{return item.id === product.id
      });
      if(index != -1){
        let existingProduct = items[index];
        existingProduct.qty++;
        items[index] = existingProduct;        
      }   
  else{
    items.push(product);    
  }
  this.setCartData(items);
    
   
 }

 setCartData(data:any){
   localStorage.setItem('cart',JSON.stringify(data));
   this.cartItems.next(this.getCartData());
 }
 getCartData(){
   let itemsStr = localStorage.getItem('cart');
   return itemsStr != null ? JSON.parse(itemsStr) : [];
 }
}
