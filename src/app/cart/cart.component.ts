import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { CartService } from '../cart.service';
import { validate } from 'json-schema';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: Product[] = [];
  total: number = 0;

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.items = this.cartService.getCartData();

    if (this.items) this.getTotal(this.items);

  }



  onDelete(i: number) {
    this.items.splice(i, 1);
    this.cartService.setCartData(this.items);
    this.getTotal(this.items)

  }


  validateInput(event: any, i: number) {
    const qty = +event.target.value;
    if (qty < 1) {
      event.target.value = this.items[i].qty;
      return;
    }

    this.QtyUpdated(qty, i)

  }
  private QtyUpdated(qty: number, i: number) {
    this.items[i].qty = qty;
    this.cartService.setCartData(this.items)
    this.getTotal(this.items)
  }


  getTotal(data: any) {
    let subs = 0;
    for (const item of data)
      subs += item.price * item.qty;
    this.total = subs;
  }




  addOrder() {
    // let data
    // let newItems
    // for (let i = 0; i < this.items.length; i++) {
    //   data = this.items[i];
    //   console.log(data)

      // this.cartService.addOrders(this.items).subscribe(res => {
      //   console.log(res)
      // }, err => {
      //   console.log(err.message)
      // });
      this.cartService.addOrders(this.items).subscribe(res => {
        console.log(res)
      })
    }

    // console.log(data)

    // this.cartService.addOrders(data).subscribe(res => {
    //   console.log(res)
    // }, err => {
    //   console.log(err.message)
    // });

  }