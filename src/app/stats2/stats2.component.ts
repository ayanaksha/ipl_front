import { Component, OnInit } from '@angular/core';
import { userRegistration } from 'src/app/classes/AllClasses';
import { UserServiceService } from 'src/app/service/data/user-service.service';
import { eventDataService } from 'src/app/service/data/event-data.service';

@Component({
  selector: 'app-stats2',
  templateUrl: './stats2.component.html',
  styleUrls: ['./stats2.component.css']
})
export class Stats2Component implements OnInit {
  responseMsg: any;
  eventIDTemp: number[][];
  userData: userRegistration;

  public statsLabels = [];
  public statsChartType1 = 'bar';
  public statsLegends = true;
  
  public arr = [];
  public arr1 = [];
  public statsData = [];

  constructor(private userAPIService: UserServiceService,
              private getUserDataService: eventDataService) { }

  ngOnInit() {
    console.log('Getting User Details');
    this.userData = this.getUserDataService.getUserData();
    this.getAllEvents();
  }
  getAllEvents(){
    console.log('Getting all Registered Events ......')
    
    this.userAPIService.getAllRegisteredEvents().subscribe(
      // response => {
      //   console.log('Response is ' + '' + response);
      //   // this.events = response['eventID'];
      //   // console.log('Events'+this.events);
      //   this.chartData = response as any[]      }, 
      data => {
          // this.statsData = data as any [];	 // FILL THE CHART ARRAY WITH DATA.

          // this.arr = []
          // this.arr1 = []
          for(let key in data){
           console.log('key' + key); 
           if(data.hasOwnProperty(key)){

            //  console.log('ProjID 1' + this.userData.projId);
            //  console.log('ProjID 2' + data[key]['empProjId']);
             if(data[key]['empProjId'] == this.userData.projId){
               // Search eventID in existing array if found increase the count by 1
               this.searchEventID(data[key]['eventID'])
            }
           }
          }
          console.log('array data.....');
          console.log(this.arr);
          this.statsData = [{data: this.arr, label: 'No of Volunteers per event' }]
          this.statsLabels = this.arr1
          // this.statsData = [{data: ["10","15","30","40","68"/*,85,97*/], label: 'Series A'}]
      },
      error => this.handleErrorResponse(error)     
  )};

  searchEventID(eventID:number){
    console.log('Event Data Aggregation :::::::::::');
    console.log('eventID'+eventID);
    console.log('EventData....'+this.eventIDTemp[0][0])
    if(this.eventIDTemp[0][0] == 0){
      this.eventIDTemp[0][0] = 1;
     }
    for(let row in this.eventIDTemp){
      console.log('check key1' + row);
      for(let col in this.eventIDTemp[row]){
        console.log('check key2' + col);
        console.log('eventIDData'+this.eventIDTemp[row][col]);
        if(this.eventIDTemp[row][col] == eventID){
          this.eventIDTemp[row][col] =  this.eventIDTemp[row][col] + 1;
        }//else{
        //   this.eventIDTemp[row][col] = 1;
        // }
      }
    }
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
