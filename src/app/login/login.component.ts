import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {RegisterService} from '../register.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private service:RegisterService, private route:Router) { }
  username:any
  password:any
  Registerservice:any
  ngOnInit(): void {
    
  }



  submit(){
    
    this.service.login(this.username,this.password).then((res)=>{
      localStorage.setItem("LOGGED_IN_USER", JSON.stringify(res));
      this.route.navigate(["/home"]);;
    }).catch(err=>{
      console.error(err);
      alert(err.message);
    });
   
  }


}
