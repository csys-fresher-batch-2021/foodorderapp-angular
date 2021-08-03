import { Injectable } from '@angular/core';
import { Product } from '../product.model';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  API_URL = environment.API_URL;
  constructor(private http: HttpClient) { }

  getOrdersById(id: any) {
    console.log(id)
    let url = `${this.API_URL}/v1/orders/search?userId=${id}`;
    console.log(url)
    return this.http.get(url);
    
  }
  getAllOrders() {
    let url = `${this.API_URL}/v1/orders`
    return this.http.get(url);
  }
  
 updateMyOrders(id:any,rev:any,body:any){
   console.log(body)
  let url = `${this.API_URL}/v1/orders/${id}?rev=${rev}` ;
  return this.http.patch(url,body);
 }



}
