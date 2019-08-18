import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import { Component, OnInit } from '@angular/core';
// import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule, MatSnackBar} from '@angular/material';
import { UserServiceService } from 'src/app/service/data/user-service.service';
import { FileUploadModule, FileUploader } from 'ng2-file-upload';
import { eventDataService } from 'src/app/service/data/event-data.service';
import { userRegistration, eventCreate, eventRegistrationUser, eventsRegisteredByVolunteers } from 'src/app/classes/AllClasses';
import { Router } from '@angular/router';

@Component({
  selector: 'app-volunteer-dash',
  templateUrl: './volunteer-dash.component.html',
  styleUrls: ['./volunteer-dash.component.css']
})
export class VolunteerDashComponent implements OnInit {
  empid: any;
  fileToUpload: File = null;
  userData: userRegistration;
  responseMsg: any;
  jsonData: any;
  // events: eventCreate[];
  // events: Array<eventCreate> = [];
  events:eventCreate[];
  newRegistrationResponse: eventRegistrationUser;
  eventsRegisteredByUser: eventsRegisteredByVolunteers;

  constructor(private fileUploadService: UserServiceService,
              private getUserDataService: eventDataService,
              private userAPIService: UserServiceService,
              private router: Router,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
    console.log('Getting User Details');
    var userDataVolunteerDash = new userRegistration();
    this.userData = this.getUserDataService.getUserData();
    console.log(this.userData.buid);
    console.log(this.userData.empid);
    console.log(this.userData.empname);
    console.log(this.userData.projId);
    console.log(this.userData.role);
    console.log(this.userData.userEmailId);
    this.getAllEvents();
    this.getAllEventsByVolunteer();
  }

  getAllEvents(){
    console.log('Getting all Events By POC......')
    // console.log('BUID' + this.userData.buid)
    // console.log('EMPID' + this.userData.empid)
    // console.log('EMPNAME' + this.userData.empname)
    // console.log('PASSWORD' + this.userData.password)
    // console.log('PROJID' + this.userData.projId)
    // console.log('ROLE' + this.userData.role)
    // console.log('USEREMAILID' + this.userData.userEmailId)
    console.log('Data to be passed as input....' + this.userData)
    var newUser = new userRegistration;
    // newUser.buid = this.userData.buid;
    // newUser.empid = this.userData.empid;
    // newUser.empname = this.userData.empname;
    // newUser.id = 25;
    // newUser.password = this.userData.password;
    // newUser.projId = this.userData.projId;
    // newUser.role = this.userData.role;
    // newUser.userEmailId = this.userData.userEmailId;
    newUser = this.userData;
    this.userAPIService.getAllEvents(newUser).subscribe(
      // response => this.handleSuccessfulRequest(response),
      response => {
        console.log('Response for register event...' + '' + response);
        // this.events = response.jsonData;
        this.events = response
        console.log('Events'+this.events);
      }, 
      // data => {
      //   console.log('Response is ' + '' + data)
      //   this.events = data;
      // },
      error => this.handleErrorResponse(error)     
    )};

    getAllEventsByVolunteer(){
      console.log('Getting all Events By POC......')
      // console.log('BUID' + this.userData.buid)
      // console.log('EMPID' + this.userData.empid)
      // console.log('EMPNAME' + this.userData.empname)
      // console.log('PASSWORD' + this.userData.password)
      // console.log('PROJID' + this.userData.projId)
      // console.log('ROLE' + this.userData.role)
      // console.log('USEREMAILID' + this.userData.userEmailId)
      console.log('Data to be passed as input....' + this.userData)
      var newUser = new userRegistration;
      // newUser.buid = this.userData.buid;
      // newUser.empid = this.userData.empid;
      // newUser.empname = this.userData.empname;
      // newUser.id = 25;
      // newUser.password = this.userData.password;
      // newUser.projId = this.userData.projId;
      // newUser.role = this.userData.role;
      // newUser.userEmailId = this.userData.userEmailId;
      newUser = this.userData;
      this.userAPIService.getAllEventsByVolunteer(newUser).subscribe(
        // response => this.handleSuccessfulRequest(response),
        response => {
          console.log('Response is ' + '' + response);
          // this.events = response.jsonData;
          this.eventsRegisteredByUser = response
          console.log('Events'+this.eventsRegisteredByUser);
        }, 
        // data => {
        //   console.log('Response is ' + '' + data)
        //   this.events = data;
        // },
        error => this.handleErrorResponse(error)     
      )};

  registerForEvent(eventID,eventDate,eventDesc,eventLocation){
    console.log('Event Identified',this.events)
    console.log('Event Identified',eventID)
    var newRegistration = new eventRegistrationUser;
    newRegistration.eventID = eventID;
    newRegistration.eventDate = eventDate;
    newRegistration.eventDesc = eventDesc;
    newRegistration.eventLocation = eventLocation;
    newRegistration.empID = this.userData.empid;
    newRegistration.empName = this.userData.empname;
    newRegistration.empProjId = this.userData.projId;

    this.userAPIService.registerForAnEvent(newRegistration).subscribe(
      // response => this.handleSuccessfulRequest(response),
      response => {
        console.log('Response for register event...' + '' + response);
        // this.events = response.jsonData;
        this.newRegistrationResponse = response
        console.log('Events'+this.newRegistrationResponse);
        console.log('EmpID before redirect'+ this.userData.empid)
        this.openSnackBar('Registered successfully for Event !!!');
        // this.router.navigate(['volunteerdash',this.userData.empid])
        location.reload();/* Reloads the whole page */
      }, 
      // data => {
      //   console.log('Response is ' + '' + data)
      //   this.events = data;
      // },
      error => this.handleErrorResponse(error)     
    
    )};

  openSnackBar(resp:string) {
    this.snackBar.open(resp, 'X', {
      duration: 3000
    });
  }
    
  handleSuccessfulRequest(response){
    // console.log(response);
    // console.log(response.message);
    this.responseMsg = response.message;
  }

  handleErrorResponse(error){
    // console.log(response);
    // console.log(response.message);
    this.responseMsg = error.error.message;
  }

}
