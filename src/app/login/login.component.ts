import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private service: RegisterService, private route: Router) { }
  username: any
  password: any
  logindetails: any

  ngOnInit(): void {

  }
  submit() {

    this.service.login(this.username, this.password).subscribe((res) => {
      console.log(res);
      let user:any = res;
      this.logindetails = res;
      localStorage.setItem("LOGGED_IN_USER", JSON.stringify(user));
      
      console.log(user)
      if(user.role ==="admin"){
        this.route.navigateByUrl('home')
      }else{
        this.route.navigateByUrl('home')
      }



      // this.logindetails.forEach((user:any)=>{
      //   if(this.username==user.email && this.password==user.password){
      //     this.route.navigateByUrl('home')
      //   }else{
      //     alert("invealid useranem")

    },err=>{
      console.log(err);
      alert("Invalid Login Credentials");
    })

  }

}

