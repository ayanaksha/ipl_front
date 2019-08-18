import { Injectable } from '@angular/core';
import { event } from 'src/app/volunteer/volunteer.component';
import { HttpClient } from '@angular/common/http';
import { userRegistration } from 'src/app/classes/AllClasses';
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
  userData: userRegistration;
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

  storeUserData($userData: userRegistration){
    // var userData = new userRegistration;
    this.userData = $userData;

    console.log('Data being passed....');
    console.log(this.userData.buid);
    console.log(this.userData.empid);
    console.log(this.userData.empname);
    console.log(this.userData.projId);

    localStorage.setItem( 'buid', this.userData.buid );
    localStorage.setItem( 'empid', String(this.userData.empid) );
    localStorage.setItem( 'empname', this.userData.empname );
    localStorage.setItem( 'id', String(this.userData.id) );
    localStorage.setItem( 'password', this.userData.password );
    localStorage.setItem( 'projId', String(this.userData.projId) );
    localStorage.setItem( 'role', this.userData.role );
    localStorage.setItem( 'userEmailId', this.userData.userEmailId );

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
    var userDataLocal = new userRegistration();
    userDataLocal.buid = localStorage.getItem( 'buid');
    userDataLocal.empid = Number(localStorage.getItem( 'empid'));
    userDataLocal.empname = localStorage.getItem( 'empname');
    userDataLocal.id = Number(localStorage.getItem( 'id'));
    // this.userData.password = localStorage.getItem( 'password');
    userDataLocal.projId = Number(localStorage.getItem( 'projId'));
    userDataLocal.role = localStorage.getItem( 'role');
    userDataLocal.userEmailId = localStorage.getItem( 'userEmailId');
    console.log(userDataLocal.buid);
    console.log(userDataLocal.empid);
    console.log(userDataLocal.empname);
    console.log(userDataLocal.projId);
    
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
