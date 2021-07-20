import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product.model';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class CartService {
  API_URL = environment.API_URL;
  constructor(private http: HttpClient) { }


  // addOrders(data:any){
  //   let headers = new HttpHeaders();
  //   headers = headers.set("Content-Type","application/json;charset=utf=8");
  //   let url = `${this.API_URL}/v1/orders`
  //   this.http.post(url,data,{headers:headers}).subscribe((res)=>{
  //     console.log(res)
  //   })
  // }

  addOrders(order:any){
    console.log(order)
    let url = `${this.API_URL}/v1/orders`
    return this.http.post(url,order
    );
  }
  getOrdersById(id:number){
    let url = `${this.API_URL}/v1/orders/search?userId=${id}`
    return this.http.get(url);
  }
  updateOrder(id:number){
    let url = `${this.API_URL}/v1/orders/${id}`
    return this.http.get(url)
  }
  

    // const ls = this.getCartData();
    //   if(ls)this.cartItems.next(ls)
  
  
  placeholder = [];
  cartItems = new BehaviorSubject([])

  // constructor() {
  //   const ls = this.getCartData();
  //   if(ls)this.cartItems.next(ls)
  //  }

 
  

  addItem(product:Product){
    console.log(product);
    const items = this.getCartData();

    let index =  items.findIndex((item:any)=>{return item._id === product._id
      });
      
      if(index != -1){
        let existingProduct = items[index];
        existingProduct.qty++;
       
        items[index] = existingProduct;        
      }   
  else{
    product.qty= 1;
    
    
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
