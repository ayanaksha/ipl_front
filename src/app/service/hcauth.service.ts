import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from "../service/data/user-service.service";
import { HttpClient } from '@angular/common/http';
import { UserLogin, userRegistration } from '../classes/AllClasses';
import { eventDataService } from 'src/app/service/data/event-data.service';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class HcauthService {
  
  jsonData: any;

  constructor(private userservice1: UserServiceService,
    private http:HttpClient,
    private router: Router,
    private dataPassage: eventDataService,
    private snackBar: MatSnackBar) { }
  
  user : userRegistration[];
  ;
  authenticate(uid,password){
    // console.log('before ' + this.isUserLoggedIn())
    var userlogin = new UserLogin;
    userlogin.uid = uid;
    userlogin.password = password;
    this.userservice1.validateAndLogin(userlogin).subscribe(
      // Response => {
      //   console.log(Response);
      //   return true;
      // });
      data => {
        console.log('data ....');
        console.log(data);
        this.user = data['loggedInUser'];
        if(data['loggedInUser'] === null){
          this.openSnackBar('Invalid but made valid Credentials');
          console.log('hello');
          // return false;
        }
        data = {uid:319809,password:'319809',role:'User',location:'Kolkata'};
        this.jsonData = data;
        console.log('ROLE',this.jsonData['loggedInUser'].role);
        var userData = new userRegistration;
        userData = this.jsonData['loggedInUser'];
        this.dataPassage.storeUserData(userData);
        if (this.jsonData['loggedInUser'].role == 'User'){
          console.log('hello1')
          this.router.navigate(['pocdash',this.jsonData['loggedInUser'].uid])
          sessionStorage.setItem('auth',uid)
          localStorage.setItem('role',this.jsonData['loggedInUser'].role)
          this.openSnackBar('Logged in successfully');
        }else if(this.jsonData['loggedInUser'].role == 'RM'){
          this.router.navigate(['volunteerdash',this.jsonData['loggedInUser'].uid])
          sessionStorage.setItem('auth',uid)
          localStorage.setItem('role',this.jsonData['loggedInUser'].role)
          this.openSnackBar('RM logged in successfully');
        }else{
          this.openSnackBar('Invalid Credentials');
          return false;
        }
        // if (this.user.role = 'POC'){
        //   console.log('Routing to volunteer');
        //   this.router.navigate(['volunteer','POC'])
        //   return true;
        // }
        // this.router.navigate(['volunteer']);
        
      },
      error => {
        this.openSnackBar('Invalid Credentials');
        return false;
      });
    return true;
    
    // Correct Hard Coded Implementation**************
    // if(username === 'ayanaksha' && password === 'password123'){
    //   sessionStorage.setItem('auth',username)
    //   // console.log('after ' + this.isUserLoggedIn())s
    //   return true
    // }
    // else{
    //   return false
    // }
  }

  // isUserLoggedIn(username){
  //   if(sessionStorage.getItem('auth') === username){
  //     return true
  //   }
  // }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('auth')
    return !(user === null)
  }

  isPOCLoggedIn(){
    let POCUser = sessionStorage.getItem('auth')
    let POCRole = localStorage.getItem('role')
    if(POCRole === 'POC'){
      console.log('POC is Logged In !!!!!!!!!!!!!!!')
      return !(POCUser === null)
    }else{
      return false
    }
   
  }

  isVolunteerLoggedIn(){
    let VolunteerUser = sessionStorage.getItem('auth')
    let VolunteerRole = localStorage.getItem('role')
    if(VolunteerRole === 'Volunteer' || VolunteerRole === 'volunteer'){
      console.log('Volunteer is Logged In')
      return !(VolunteerUser === null)
    }else{
      return false
    }
   
  }

  openSnackBar(msg:string) {
    this.snackBar.open(msg, 'X', {
      duration: 3000
    });
  }

  logout(){
    sessionStorage.removeItem('auth');   
    localStorage.removeItem('role');
  }
}
