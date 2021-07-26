import { Injectable } from '@angular/core';
import { Product } from '../product.model';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {



  API_URL = environment.API_URL;

  constructor(private http: HttpClient) { }
  getProducts() {
    let url = `${this.API_URL}/v1/products`
    return this.http.get(url);
  }




}
