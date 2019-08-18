import { Component, OnInit } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import { eventCreate } from 'src/app/classes/AllClasses';
import { UserServiceService } from 'src/app/service/data/user-service.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-eventreg',
  templateUrl: './eventreg.component.html',
  styleUrls: ['./eventreg.component.css']
})
export class EventregComponent implements OnInit {
  /* internal usage variables */
  responseMsg: String;

  /* Class Usage Variables */
  activityType: string;
  boardingPoints: string;
  category: string;
  council: string;
  dropPoints: string;
  endTime: string;
  eventDate: string;
  eventDesc: string;
  eventID: number;
  eventName: string;
  livesTouched: string;
  location: string;
  pocID: number;
  pocName: string;
  startTime: string;
  status: string;
  venueAddress: string;
  volunteersReq: string;

  constructor(private route: ActivatedRoute,
              private userAPIService: UserServiceService,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  handleEventRegistration(){
    console.log('Event Registration processing......')
    console.log('activityType' + this.activityType)
    console.log('boardingPoints' + this.boardingPoints)
    console.log('category' + this.category)
    console.log('council' + this.council)
    console.log('dropPoints' + this.dropPoints)
    console.log('endTime' + this.endTime)
    console.log('eventDate' + this.eventDate)
    console.log('eventDesc' + this.eventDesc)
    console.log('eventID' + this.eventID)
    console.log('eventName' + this.eventName)
    console.log('livesTouched' + this.livesTouched)
    console.log('location' + this.location)
    console.log('pocID' + this.pocID)
    console.log('pocName' + this.pocName)
    console.log('startTime' + this.startTime)
    console.log('status' + this.status)
    console.log('venueAddress' + this.venueAddress)
    console.log('volunteersReq' + this.volunteersReq)

    var newEvent = new eventCreate;
    newEvent.activityType = this.activityType;
    newEvent.boardingPoints = this.boardingPoints;
    newEvent.category = this.category;
    newEvent.council = this.council;
    newEvent.dropPoints = this.dropPoints;
    newEvent.endTime = this.endTime;
    newEvent.eventDate = this.eventDate;
    newEvent.eventDesc = this.eventDesc;
    newEvent.eventID = this.eventID;
    newEvent.eventName = this.eventName;
    newEvent.location = this.location;
    newEvent.pocID = this.pocID;
    newEvent.pocName = this.pocName;
    newEvent.startTime = this.startTime;
    newEvent.status = this.status;
    newEvent.venueAddress = this.venueAddress;
    newEvent.volunteersReq = this.volunteersReq;

    this.userAPIService.registerEvent(newEvent).subscribe(
      // response => this.handleSuccessfulRequest(response),
      response => {console.log('Response is ' + '' + response)
      this.openSnackBar('Registration Completed');}, 
      error => {this.handleErrorResponse(error)
        this.openSnackBar('Registration Completed');}     
    );

  }

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
