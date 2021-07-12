import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
product:Product [] = [];
name:any

  constructor() { }

  ngOnInit(): void {
  
  }
 Search(){
   this.product = this.product.filter(res=>{
   return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
   })
 } 

}
