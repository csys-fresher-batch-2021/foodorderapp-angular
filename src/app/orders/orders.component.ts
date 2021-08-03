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
  Body: any




  constructor(private OrderService: OrderService, private service: RegisterService, private route: ActivatedRoute) { }



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
      console.log(this.details)


      for (let i = 0; i < this.details.length; i++) {
        this.details._id = this.details[i]._id
      }
      for (let i = 0; i < this.details.length; i++) {
        this.details._rev = this.details[i]._rev
      }


    });


  }


  cancel() {
    let newObj = this.details.filter((ele: any) => {
      ele.status = "CANCELLED";
    });
    console.log(newObj)

    this.OrderService.updateMyOrders(this.details._id, this.details._rev, this.details).subscribe((res: any) => {
      this.items = res;
      console.log(this.items)

    });

  }

}
