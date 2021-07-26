import { ArrayType } from '@angular/compiler/src/output/output_ast';

export interface Product {
    _id:number;
    name:string;
    price:number;
    qty:number;
    imageUrl:string;
    total:number;
    userId:string;
    orderitems:any;
}