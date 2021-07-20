import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  API_URL = environment.API_URL;
  
  constructor(private http: HttpClient) { }
  getAllUsers(){
    let url = `${this.API_URL}/v1/users`
    return this.http.get(url);
  }
  addUser(data:any){
    let url = `${this.API_URL}/v1/users`
    return this.http.post(url,data
    );
  }

  login(email:string,password:string){
    let data = {email: email, password: password};
    let url = `${this.API_URL}/v1/auth/login`
    return this.http.post(url,data    );
  }

//  async register(user:any){
//    this.users.push(user);
//    console.log(this.users)
//  }


//  login(username:string, password:string){
//    console.log(this.users)
//    let user = this.users.find((obj:any)=> obj.email == username && obj.password == password);
//    if(user == null){
//       throw new Error("Invalid Login Credentials");
//    }
//    return user;
//  }
}
