import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  items:Product[] = [];
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    // this.cartService.getOrdersById().subscribe( (res:any) =>{
    //   this.items = res;
    // console.log(JSON.stringify(this.items));
    // });
   }
   cancel(){

   }

}
