import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  register(){
    alert("Register Clicked");
    //window.location.href="login";//avoid
    //this.router.navigate(['login']);
    this.router.navigateByUrl('login');
  }

}
