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
    this.Registerservice = this.service.registerDetails;
  }



  submit(){
    console.log
    if(this.Registerservice.username==this.username && this.Registerservice.password==this.password){
      this.route.navigate(["/home"])
    }else{
      console.log(false)
    }
   
  }


}
