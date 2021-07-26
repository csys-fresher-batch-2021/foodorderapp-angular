import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { CartService } from '../services/cart.service';
import { validate } from 'json-schema';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: Product[] = []
  total: number = 0;
  userDetails: any
  id: any;
  orderitems: any



  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {

    this.items = this.cartService.getCartData();
    console.log(this.items)
    if (this.items) this.getTotal(this.items);
    this.cartService.getAllUsers().subscribe((res: any) => {
      this.userDetails = res;
      console.log(this.userDetails)
      const newUser = this.userDetails.map((newDatas: any) => {
        this.id = newDatas._id
        console.log(this.id)
      })
    });

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





  // addOrder() {
  //   let data
  //   let newItems
  //   for (let i = 0; i < this.items.length; i++) {
  //     data = this.items[i];
  //     console.log(data)
  //     const {_id, ...updatedObject} = data;
  // this.cartService.addOrders(updatedObject).subscribe(res => {
  //   console.log(res)
  //     }, err => {
  //       console.log(err.message)
  //     });

  //     // console.log(data)


  //   addOrder() {
  // const data: Product[] = this.items
  // const newData = data.map((user) => {
  //       return Object.assign(user, { total: this.total }, { status: "ORDERED" },{userId:this.id})
  //     });
  //     console.log(newData)
  //     const newColumns = newData.map( item => {
  //       const { _id: value, ...rest } = item;
  //       return { value, ...rest }
  //      }
  //     );

  //     console.log( newColumns );
  //     const allMeals = Object.assign({}, newColumns);
  //     this.cartService.addOrders(allMeals).subscribe(res => {
  //       this.router.navigateByUrl('orders')
  //   })
  // }

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

    const allOrders = Object.assign([newArrayDataOfOjbect], { total: this.total }, { status: "ORDERED" }, { userId: this.id }, { orderedDate: new Date })
    allOrders.splice(0, allOrders.length)
    const allMeals = Object.assign({}, allOrders);
    const allOrderedItems = Object.assign(allMeals, { orderitems: newArrayDataOfOjbect })
    console.log(allOrderedItems)


    this.cartService.addOrders(allOrderedItems).subscribe(res => {
      this.router.navigateByUrl('orders')
    })
  }


}
