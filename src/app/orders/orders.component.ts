import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

import { OrderService } from '../services/order.service'
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  items: Product[] = [];
  userId: any
  orders:any
  
  
  constructor(private OrderService: OrderService) { }



  ngOnInit(): void {
    this.OrderService.getAllOrders().subscribe((res: any) => {
      this.orders = res;
     

    });
    // this.OrderService.getOrdersById().subscribe( (res:any) =>{
    //   this.items = res;
    //   this.orders = this.items;
    //   console.log(this.orders)
    // });


  }


  cancel() {
    // this.OrderService.updateOrder().subscribe( (res:any) =>{
    //   this.items = res;
    //   this.orders = this.items;

    // });

  }

}
