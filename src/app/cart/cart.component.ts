import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { CartService } from '../services/cart.service';
import { validate } from 'json-schema';
import { Router } from '@angular/router';
import { RegisterService } from '../services/register.service'


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: Product[] = []
  total: number = 0;
  id: any;
  orderitems: any
  newUserId: any
  user: any





  constructor(private cartService: CartService, private router: Router, private service: RegisterService) { }

  ngOnInit(): void {

    this.items = this.cartService.getCartData();
    console.log(this.items)
    if (this.items) this.getTotal(this.items);

    this.user = JSON.parse(localStorage.getItem("LOGGED_IN_USER") || '{}');
    console.log(this.user)
    this.newUserId = this.user._id
    console.log(this.user._id)
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
    // console.log(subs)
  }

  addOrder() {
    const data: Product[] = this.items
    const newData = data.map((user) => {
      const { _id: productId, ...rest } = user;
      return { productId, ...rest }
      var newArrayDataOfOjbect = Object.values(user)


    });
    let orderitems;
    let useroders
    var newArrayDataOfOjbect = Object.values(newData)
    console.log(newArrayDataOfOjbect)

    const allOrders = Object.assign([newArrayDataOfOjbect], { total: this.total }, { status: "ORDERED" }, { userId: this.newUserId }, { orderedDate: new Date })
    allOrders.splice(0, allOrders.length)
    const allMeals = Object.assign({}, allOrders);
    const allOrderedItems = Object.assign(allMeals, { orderitems: newArrayDataOfOjbect })
    console.log(allOrderedItems)


    this.cartService.addOrders(allOrderedItems).subscribe(res => {
      this.router.navigateByUrl('orders')
    })
  }


}
