import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HcauthService } from '../service/hcauth.service';
import { UserLogin } from '../classes/AllClasses';
import { UserServiceService } from '../service/data/user-service.service';

import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  uid = 'uid'
  password = 'password'
  errmessage = "Invalid Credentials"
  invalidLogin = false
  breakpoint: number;

  constructor(private router: Router,
    private authentication: HcauthService,
    private userservice2: UserServiceService) { }
   
  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 800) ? 1 : 2;
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 800) ? 1 : 2;
  }

  handleLogin(){
    console.log('Login processing......')
    console.log(this.uid)
    // console.log('Login processing......')
    // console.log(this.password)
    // if(this.username === 'ayanaksha' && this.password === 'password123'){
    //   this.invalidLogin = false
    //   this.errmessage = 'Login Successful'
    //   this.router.navigate(['register',this.username])
    // }
    // else{
    //   this.invalidLogin = true
    // }

    // RESTORE COMMENTS !!!!!
    console.log('USERNAME' + this.uid)
    console.log('PASSWORD' + this.password)
    console.log(this.authentication.authenticate(this.uid,this.password))
    
    if (this.authentication.authenticate(this.uid,this.password)){
      console.log('In Login Component Backend11....');
      this.invalidLogin = false
      this.errmessage = 'Login Successful'
      // this.router.navigate(['logout',this.empid])
      // this.router.navigateByUrl('httplogout')
    }
    else{
      this.invalidLogin = true
    };

    // var userID1 = new userID;
    // userID1.id = 100;
    // userID1.userId = 1;
    // this.userservice2.userCheck(userID1).subscribe(
    //   data => {
    //     console.log(data)
    //   },
    //   error => {
    //     console.log('Error in Call')
    //   })
  };
}
