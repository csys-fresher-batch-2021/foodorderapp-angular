import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  constructor(private productService: ProductService, private cartService: CartService) { }

  name = "";

  searchProducts: Product[] = [];

  ngOnInit(): void {
    this.productService.getProducts().subscribe((res: any) => {
      this.products = res;
      console.log(JSON.stringify(this.products));
      console.log(this.products)
      this.searchProducts = this.products;
      console.log(this.searchProducts)
    });
  }
  addToCart(product: Product) {
    console.log(product)
    this.cartService.addItem(product)

  }
  Search() {
    
    this.searchProducts = this.products.filter((res: any) => res.name.toLocaleLowerCase().includes(this.name.toLocaleLowerCase()));

  }
}
