import { Component, OnInit } from '@angular/core';
// import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule, MatSnackBar} from '@angular/material';
import { UserServiceService } from 'src/app/service/data/user-service.service';
import { FileUploadModule, FileUploader } from 'ng2-file-upload';
import { eventDataService } from 'src/app/service/data/event-data.service';
import { userRegistration, pocketCreate, UserLogin } from 'src/app/classes/AllClasses';
import { ExcelService } from 'src/app/service/data/excel.service';
// import * as XLSX from 'ts-xlsx';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-poc-dash',
  templateUrl: './poc-dash.component.html',
  // template: '<app-eventreg #eventreg></app-eventreg><app-poc-dash (radiogroup.change)="app-poc-dash.onSelectionChange(pocket)"></app-poc-dash>',
  styleUrls: ['./poc-dash.component.css']
})
export class PocDashComponent implements OnInit {
  uid: any;
  fileToUpload: File = null;
  data: any = [{
    PocketName: 'fgfgfgfgfgg',
    PocketID: 0,
    Status: ' ',
    PocketType: ' ',
    AccountNo: ' ',
    CreationDate: ' ',
    EndDate: ' ',
    TargetBalance: 0,
    PeriodicPremium: 0,
    Frequency: ' ',
    AccumulatedBalance: 0,
    MutationTS: ' '
    }];
    // eid: 'e102',
    // ename: 'ram',
    // esal: 2000
    // },{
    // eid: 'e103',
    // ename: 'rajesh',
    // esal: 3000
    // }];
  userData: UserLogin;
  responseMsg: any;
  // events: eventCreate[];
  // events: Array<eventCreate> = [];
  pockets:pocketCreate;
  selectedPocket:pocketCreate;
  newEvent: pocketCreate[];
  teststring: string; /* test */
  // message : string;

  constructor(private fileUploadService: UserServiceService,
              private getUserDataService: eventDataService,
              private userAPIService: UserServiceService,
              private excelService: ExcelService,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
    console.log('Getting User Details');
    this.userData = this.getUserDataService.getUserData();
    // this.getUserDataService.currentMessage.subscribe(
    //   message => {this.message = message;
    //   console.log('messge is'+ this.message)}
    //   );
    console.log(this.userData.uid);
    console.log(this.userData.password);
    console.log(this.userData.role);
    console.log(this.userData.location);
    this.getAllEventsByPOC();
  }

  uploader: FileUploader = new FileUploader({ url: "api/your_upload", removeAfterUpload: false, autoUpload: true });
  
  exportAsXLSX():void {
    this.excelService.exportAsExcelFile(this.data, 'sample');
 }
 arrayBuffer:any;
 file:File;
 jsonData: any;
 incomingfile(event) 
   {
   this.file= event.target.files[0]; 
   }
 
  Upload() {
        let fileReader = new FileReader();
          fileReader.onload = (e) => {
              this.arrayBuffer = fileReader.result;
              var data = new Uint8Array(this.arrayBuffer);
              var arr = new Array();
              for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
              var bstr = arr.join("");
              var workbook = XLSX.read(bstr, {type:"binary"});
              var first_sheet_name = workbook.SheetNames[0];
              var worksheet = workbook.Sheets[first_sheet_name];
              console.log(XLSX.utils.sheet_to_json(worksheet,{raw:true}));
              this.newEvent = XLSX.utils.sheet_to_json(worksheet,{raw:true});
              console.log('new Event' + this.newEvent);
              this.openSnackBar('File has been uploaded');
              this.handleBulkEventRegistration();
          }
          fileReader.readAsArrayBuffer(this.file);
        //  console.log('file data'+this.file)
        //  console.log('eventID'+ this.jsonData['eventID'])
          
 }
  // uploader: FileUploader = new FileUploader({ url: "api/your_upload", removeAfterUpload: false, autoUpload: true });
  getAllEventsByPOC(){
    console.log('Getting all Events By POC......')
    // console.log('BUID' + this.userData.buid)
    // console.log('EMPID' + this.userData.empid)
    // console.log('EMPNAME' + this.userData.empname)
    // console.log('PASSWORD' + this.userData.password)
    // console.log('PROJID' + this.userData.projId)
    // console.log('ROLE' + this.userData.role)
    // console.log('USEREMAILID' + this.userData.userEmailId)
    console.log('Data to be passed as input....' + this.userData)
    var newUser = new UserLogin;
    // newUser.buid = this.userData.buid;
    // newUser.empid = this.userData.empid;
    // newUser.empname = this.userData.empname;
    // newUser.id = 25;
    // newUser.password = this.userData.password;
    // newUser.projId = this.userData.projId;
    // newUser.role = this.userData.role;
    // newUser.userEmailId = this.userData.userEmailId;
    newUser = this.userData;
  //   this.userAPIService.getPocketByAccount(newUser).subscribe(
  //     // response => this.handleSuccessfulRequest(response),
  //     response => {
  //       console.log('Response is ' + '' + response);
  //       // this.events = response.jsonData;
  //       this.events = response
  //       this.data = this.events
  //       console.log('Events'+this.events);
  //     }, 
  //     // data => {
  //     //   console.log('Response is ' + '' + data)
  //     //   this.events = data;
  //     // },
  //     error => this.handleErrorResponse(error)     
  // )
  this.data = {PocketID:1,PocketName:'abc',Status:'Active',PocketType:'A1',AccountNo:'123',CreationDate:'12/12/2018',EndDate:'12/12/2024',
              TargetBalance:10000,PeriodicPremium:100,Frequency:'Monthly',AccumulatedBalance:1500,MutationTS:'12/12/1222'};
  this.pockets = [{PocketID:1,PocketName:'abc',Status:'Active',PocketType:'A1',AccountNo:'123',CreationDate:'12/12/2018',EndDate:'12/12/2024',
              TargetBalance:10000,PeriodicPremium:100,Frequency:'Monthly',AccumulatedBalance:'1500',MutationTS:'12/12/1222'},
              {PocketID:2,PocketName:'abc123',Status:'Active',PocketType:'A1',AccountNo:'123',CreationDate:'12/12/2018',EndDate:'12/12/2024',
              TargetBalance:10000,PeriodicPremium:200,Frequency:'Monthly',AccumulatedBalance:'1500',MutationTS:'12/12/1222'},
              {PocketID:4,PocketName:'abdddc',Status:'Active',PocketType:'A1',AccountNo:'123',CreationDate:'12/12/2018',EndDate:'12/12/2024',
              TargetBalance:10000,PeriodicPremium:300,Frequency:'Monthly',AccumulatedBalance:'1500',MutationTS:'12/12/1222'},
              {PocketID:5,PocketName:'abdddc',Status:'Active',PocketType:'A1',AccountNo:'123',CreationDate:'12/12/2018',EndDate:'12/12/2024',
              TargetBalance:10000,PeriodicPremium:300,Frequency:'Monthly',AccumulatedBalance:'1500',MutationTS:'12/12/1222'},
              {PocketID:6,PocketName:'abdddc',Status:'Active',PocketType:'A1',AccountNo:'123',CreationDate:'12/12/2018',EndDate:'12/12/2024',
              TargetBalance:10000,PeriodicPremium:300,Frequency:'Monthly',AccumulatedBalance:'1500',MutationTS:'12/12/1222'},
              {PocketID:7,PocketName:'abdddc',Status:'Active',PocketType:'A1',AccountNo:'123',CreationDate:'12/12/2018',EndDate:'12/12/2024',
              TargetBalance:10000,PeriodicPremium:300,Frequency:'Monthly',AccumulatedBalance:'1500',MutationTS:'12/12/1222'},
              {PocketID:8,PocketName:'abdddc',Status:'Active',PocketType:'A1',AccountNo:'123',CreationDate:'12/12/2018',EndDate:'12/12/2024',
              TargetBalance:10000,PeriodicPremium:300,Frequency:'Monthly',AccumulatedBalance:'1500',MutationTS:'12/12/1222'},
              {PocketID:9,PocketName:'abdddc',Status:'Active',PocketType:'A1',AccountNo:'123',CreationDate:'12/12/2018',EndDate:'12/12/2024',
              TargetBalance:10000,PeriodicPremium:300,Frequency:'Monthly',AccumulatedBalance:'1500',MutationTS:'12/12/1222'},
              {PocketID:10,PocketName:'abdddc',Status:'Active',PocketType:'A1',AccountNo:'123',CreationDate:'12/12/2018',EndDate:'12/12/2024',
              TargetBalance:10000,PeriodicPremium:300,Frequency:'Monthly',AccumulatedBalance:'1500',MutationTS:'12/12/1222'},
              {PocketID:11,PocketName:'abdddc',Status:'Active',PocketType:'A1',AccountNo:'123',CreationDate:'12/12/2018',EndDate:'12/12/2024',
              TargetBalance:10000,PeriodicPremium:300,Frequency:'Monthly',AccumulatedBalance:'1500',MutationTS:'12/12/1222'},
              {PocketID:12,PocketName:'abdddc',Status:'Active',PocketType:'A1',AccountNo:'123',CreationDate:'12/12/2018',EndDate:'12/12/2024',
              TargetBalance:10000,PeriodicPremium:300,Frequency:'Monthly',AccumulatedBalance:'1500',MutationTS:'12/12/1222'},
              {PocketID:13,PocketName:'abdddc',Status:'Active',PocketType:'A1',AccountNo:'123',CreationDate:'12/12/2018',EndDate:'12/12/2024',
              TargetBalance:10000,PeriodicPremium:300,Frequency:'Monthly',AccumulatedBalance:'1500',MutationTS:'12/12/1222'},
              {PocketID:14,PocketName:'abdddc',Status:'Active',PocketType:'A1',AccountNo:'123',CreationDate:'12/12/2018',EndDate:'12/12/2024',
              TargetBalance:10000,PeriodicPremium:300,Frequency:'Monthly',AccumulatedBalance:'1500',MutationTS:'12/12/1222'},
              {PocketID:15,PocketName:'abdddc',Status:'Active',PocketType:'A1',AccountNo:'123',CreationDate:'12/12/2018',EndDate:'12/12/2024',
              TargetBalance:10000,PeriodicPremium:300,Frequency:'Monthly',AccumulatedBalance:'1500',MutationTS:'12/12/1222'},
              ];            
};

onSelectionChange(pocket){
  console.log('hello in selection change');
  this.selectedPocket = [pocket];
  this.data = pocket;
  console.log('chosen pocket'+ this.selectedPocket.PocketID);
}
  
  handleBulkEventRegistration(){
      console.log('Event Registration processing......')
      // console.log('activityType' + this.activityType)
      // console.log('boardingPoints' + this.boardingPoints)
      // console.log('category' + this.category)
      // console.log('council' + this.council)
      // console.log('dropPoints' + this.dropPoints)
      // console.log('endTime' + this.endTime)
      // console.log('eventDate' + this.eventDate)
      // console.log('eventDesc' + this.eventDesc)
      // console.log('eventID' + this.eventID)
      // console.log('eventName' + this.eventName)
      // console.log('livesTouched' + this.livesTouched)
      // console.log('location' + this.location)
      // console.log('pocID' + this.pocID)
      // console.log('pocName' + this.pocName)
      // console.log('startTime' + this.startTime)
      // console.log('status' + this.status)
      // console.log('venueAddress' + this.venueAddress)
      // console.log('volunteersReq' + this.volunteersReq)
      console.log('before looping......');
      console.log('newEvent' + this.newEvent);
      for(let key in this.newEvent){
        // newEvent.activityType = this.activityType;
        // newEvent.boardingPoints = this.boardingPoints;
        // newEvent.category = this.category;
        // newEvent.council = this.council;
        // newEvent.dropPoints = this.dropPoints;
        // newEvent.endTime = this.endTime;
        // newEvent.eventDate = this.eventDate;
        // newEvent.eventDesc = this.eventDesc;
        // newEvent.eventID = this.eventID;
        // newEvent.eventName = this.eventName;
        // newEvent.location = this.location;
        // newEvent.pocID = this.pocID;
        // newEvent.pocName = this.pocName;
        // newEvent.startTime = this.startTime;
        // newEvent.status = this.status;
        // newEvent.venueAddress = this.venueAddress;
        // newEvent.volunteersReq = this.volunteersReq;
        console.log('evenData' + this.newEvent[key]);
        this.userAPIService.registerEvent(this.newEvent[key]).subscribe(
          // response => this.handleSuccessfulRequest(response),
          response => {console.log('Response from Bulk Upload is ' + '' + response)
          this.openSnackBar('Events have been created')
          location.reload();/* Reloads the whole page */}, 
          error => {
            this.handleErrorResponse(error)}     
        );
      }
  
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
