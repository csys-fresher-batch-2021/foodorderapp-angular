import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
products:Product[] = [];
  constructor(private productService:ProductService,  private cartService: CartService) { }

  name = "";

  searchProducts: Product[] = [];

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    console.log(JSON.stringify(this.products));
    this.searchProducts = this.products;
  } 
  addToCart(product:Product){
    this.cartService.addItem(product)
 
  }
  Search(){
    alert(this.name);
    this.searchProducts = this.products.filter(res=>  res.name.toLocaleLowerCase().includes(this.name.toLocaleLowerCase()));
    
  } 
}
