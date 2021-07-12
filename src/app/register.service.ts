import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  users:any = [
    {id:1, name:'Admin', email:'admin@gmail.com', password:'admin', role:'ADMIN'},
    {id:2, name:'Renga', email:'r@gmail.com', password:'user', role:'USER'},
  ];
  constructor() { }


 async register(user:any){
   this.users.push(user);
   console.log(this.users)
 }


 async login(username:string, password:string){
   console.log(this.users)
   let user = this.users.find((obj:any)=> obj.email == username && obj.password == password);
   if(user == null){
      throw new Error("Invalid Login Credentials");
   }
   return user;
 }
}
