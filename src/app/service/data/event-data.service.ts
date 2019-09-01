import { Injectable } from '@angular/core';
import { event } from 'src/app/volunteer/volunteer.component';
import { HttpClient } from '@angular/common/http';
import { UserLogin } from 'src/app/classes/AllClasses';
import { CookieService } from 'ngx-cookie-service';
// import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
// @Injectable()
export class eventDataService {

  buid:  string;
  empid: number;
  empname:  string;
  id: number;
  password:  string;
  projId: number;
  role:  string;
  userEmailId: string;
  userData: UserLogin;
  cookieValue = 'UNKNOWN';
  // messageSource: any;
  // currentMessage: any;

  // /* Behaviour Subject Implmentation*/
  // private messageSource = new BehaviorSubject('default message');
  // currentMessage = this.messageSource.asObservable();

  constructor(
    private http:HttpClient,
    private cookieService: CookieService
  ) { }
  
  // /* Behaviour Subject Implementation */
  // changeMessage(message: string) {
  //   this.messageSource.next(message)
  // }

  retrieveAllEvents(username){
    return this.http.get<event[]>(`http://localhost:8080/users/${username}}/events`)
    // console.log("Execute Hello World Bean Service ....... ");
  }

  storeUserData($userData: UserLogin){
    // var userData = new userRegistration;
    this.userData = $userData;

    console.log('Data being passed....');
    console.log(this.userData.uid);
    console.log(this.userData.password);
    console.log(this.userData.role);
    console.log(this.userData.location);

    localStorage.setItem( 'uid', String(this.userData.uid) );
    
    

    // this.cookieService.set( 'buid', this.userData.buid );
    // this.cookieService.set( 'empid', String(this.userData.empid) );
    // this.cookieService.set( 'empname', this.userData.empname );
    // this.cookieService.set( 'id', String(this.userData.id) );
    // this.cookieService.set( 'password', this.userData.password );
    // this.cookieService.set( 'projId', String(this.userData.projId) );
    // this.cookieService.set( 'role', this.userData.role );
    // this.cookieService.set( 'userEmailId', this.userData.userEmailId );
  }

  getUserData():any{
    // userDatalocal: userRegistration;
    console.log('Data being returned.....');
    // this.userData.buid = this.cookieService.get( 'buid');
    // this.userData.empid = Number(this.cookieService.get( 'empid'));
    // this.userData.empname = this.cookieService.get( 'empname');
    // this.userData.id = Number(this.cookieService.get( 'id'));
    // // this.userData.password = this.cookieService.get( 'password');
    // this.userData.projId = Number(this.cookieService.get( 'projId'));
    // this.userData.role = this.cookieService.get( 'role');
    // this.userData.userEmailId = this.cookieService.get( 'userEmailId');
    var userDataLocal = new UserLogin();
    userDataLocal.uid = Number(localStorage.getItem( 'uid'));
    userDataLocal.password = localStorage.getItem( 'password');
    userDataLocal.location = localStorage.getItem( 'location');
    userDataLocal.role = localStorage.getItem( 'role');
    // this.userData.password = localStorage.getItem( 'password');
    console.log(userDataLocal.uid);
    
    // return this.userData;
    return userDataLocal;
  }
  
  
  // storeUserData($userData: userRegistration){
  //   // var userData = new userRegistration;
  //   this.userData = $userData;
  //   var messageSource = new BehaviorSubject('default message');
  //   this.currentMessage = this.messageSource.asObservable();
  //   console.log('Data being passed....');
  //   console.log(this.userData.buid);
  //   console.log(this.userData.empid);
  //   console.log(this.userData.empname);
  //   console.log(this.userData.projId);
  // }

  // getUserData():any{
  //   console.log('Data being returned.....');
  //   console.log(this.userData.buid);
  //   console.log(this.userData.empid);
  //   console.log(this.userData.empname);
  //   console.log(this.userData.projId);
  //   return this.userData;
  // }
  
}
