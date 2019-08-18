import { Component, OnInit } from '@angular/core';
import { eventDataService } from '../service/data/event-data.service';

export class event{
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public targetDate: Date,
    public isCompleted: boolean 
  ){

  }
}

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css']
})
export class VolunteerComponent implements OnInit {

  // events={
  //   id: 1,
  //   name: 'Kasba School'
  // }
  // events=[
  // {id : 1, name : 'kasba school'},
  //   {id : 2, name : 'kasba school1'},
  //   {id : 3, name : 'kasba school2'},
  //   {id : 4, name : 'kasba school3'},
  //   {id : 5, name : 'kasba school4'},
  //   {id : 6, name : 'kasba school5'},
  //   {id : 7, name : 'kasba school6'},
  //   {id : 8, name : 'kasba school7'}
  // ] 
  events:event[];
  // =[
  //   new event(1,'Teach Children','Help class VI students with computer education',new Date(),'Kasba New Vidyalaya')
  //   ,new event(2,'Teach Children','Help class VI students with computer education',new Date(),'Kasba New Vidyalaya')
  //   ,new event(3,'Teach Children','Help class VI students with computer education',new Date(),'Kasba New Vidyalaya')
  //   ,new event(4,'Teach Children','Help class VI students with computer education',new Date(),'Kasba New Vidyalaya')
  //   ,new event(5,'Teach Children','Help class VI students with computer education',new Date(),'Kasba New Vidyalaya')
  // ]
    
  constructor(
    private EventDataService:eventDataService
  ) { }

  ngOnInit() {
    this.EventDataService.retrieveAllEvents('ayanaksha').subscribe(
      response => {
        console.log(response);
        this.events = response;
      }
    )
  }

}
