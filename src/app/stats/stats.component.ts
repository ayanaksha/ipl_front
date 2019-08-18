import { Component, OnInit } from '@angular/core';
import { userRegistration, eventCreate } from '../classes/AllClasses';
import { UserServiceService } from '../service/data/user-service.service';
import { ArrayType } from '@angular/compiler';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})

export class StatsComponent implements OnInit {
  // empid: any;
  // fileToUpload: File = null;
  responseMsg: any;
  userData: userRegistration;
  // events:eventCreate[];
  // events: string[];
  events: object[];
  
  public statsOptions = {
    scaleShowVerticalLines: false,
    responsive: false
  };

  // public lineChartOptions: any = {
  //   responsive: true,
  //   scales : {
  //     yAxes: [{
  //       ticks: {
  //         max : 60,
  //         min : 0,
  //       }
  //     }],
  //     xAxes: [{
  //       min: '2018-01-29 10:08:00', // how to? 
  //     //  max: '2018-01-29 10:48:00', // how to?
  //       type: 'time',
  //       time: {        
  //         unit: 'minute',
  //         unitStepSize: 10,
  //         displayFormats: {
  //           'second': 'HH:mm:ss',
  //           'minute': 'HH:mm:ss',
  //           'hour': 'HH:mm',
  //         },
  //       },
  //       }],
  //   },
  // };

  public statsLabels = [/*'2006','2007','2008','2009','2010','2011','2012'*/];
  // public statsLabels = ['Live Events'];
  // public statsChartType1 = 'line';
  public statsChartType1 = 'bar';
  // public statsChartType1 = 'pie';
  public statsLegends = true;
  
  // public statsData = [
  //   // {data: [10,15,30,40,68,85,97], label: 'Series A' },
  //   {data: [12,25,58/*,60,68,85,97*/], label: 'Series B' }
  // ]
  public arr = [];
  public arr1 = [];
  public statsData = [
    // {data: ["10","15","30","40","68"/*,85,97*/], label: 'Series A' },
    // {data: ["25", "28", "89", "50", "50"]}
    // {data: this.arr, label: 'Series B' }
  ]
 
  // public statsData:any = [
  //   { 
  //       data: []
  //   }
  // ];

  // public statsData = [
  //   {data: [10], label: 'Series A' }
  // ]

  constructor(private userAPIService: UserServiceService) { }

  ngOnInit() {
    this.getAllEvents();
    console.log('chartData::' + this.statsData);
  }

  getAllEvents(){
    console.log('Getting all Events By POC......')
    console.log('Data to be passed as input....' + this.userData)
    var newUser = new userRegistration;
    newUser = this.userData;
    this.userAPIService.getAllEvents(newUser).subscribe(
      // response => {
      //   console.log('Response is ' + '' + response);
      //   // this.events = response['eventID'];
      //   // console.log('Events'+this.events);
      //   this.chartData = response as any[]      }, 
      data => {
          // this.statsData = data as any [];	 // FILL THE CHART ARRAY WITH DATA.

          this.arr = []
          this.arr1 = []
          for(let key in data){
           console.log('key' + key); 
           if(data.hasOwnProperty(key)){
             this.arr.push(data[key]['volunteersReq']);
             this.arr1.push(data[key]['eventID']);
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
