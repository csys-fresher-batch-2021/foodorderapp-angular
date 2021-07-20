import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,FormArray} from '@angular/forms';
import {RegisterService} from '../register.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  userform:any
  username:any
  password:any
  registerDetails:any
  constructor(private service:RegisterService,private router:Router) { 

   this.userform = new FormGroup ({
     "username" : new FormControl(),
     "email" : new FormControl(),
     "phone" : new FormControl(),
     "password" : new FormControl()
   })

  }
  Login(){
    console.log(this.userform.value)
    this.service.addUser(this.userform.value).subscribe(res=>{

      this.router.navigateByUrl('login');
    });
    
  }


  ngOnInit(): void {
  }
}
