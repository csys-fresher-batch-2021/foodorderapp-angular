import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { RegisterService } from '../services/register.service'
import { OrderService } from '../services/order.service'
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  items: Product[] = [];
  userID: any
  orders: any
  ordered: any
  User: any
  details: any



  constructor(private OrderService: OrderService, private service: RegisterService,private route : ActivatedRoute) { }



  ngOnInit(): void {
    this.OrderService.getAllOrders().subscribe((res: any) => {
      this.orders = res;
      console.log(this.orders)

    });
    this.User = JSON.parse(localStorage.getItem("LOGGED_IN_USER") || '{}');
    console.log(this.User._id)
    this.userID = this.User._id

    this.OrderService.getOrdersById(this.userID).subscribe((res: any) => {
      this.details = res;
      console.log(this.details._id)

    });


  }


  // cancel() {
    
  //   this.OrderService.updateMyOrders(this.route.snapshot.params.id).subscribe( (res:any) =>{
  //     this.items = res;
  //    console.log(this.items)

  //   });

  // }

}
