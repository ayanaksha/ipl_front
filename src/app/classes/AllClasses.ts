/* POST /login */
export class UserLogin {
    uid: Number;
    password: string;
    role: string;
    location: string;
}

// /* POST /api/v1/online-sales-service/allEventRegistration */
// /*---- NOT WORKING*/

/* POST /online-sales-service/createEvent */
export class eventCreate 
{
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
  }

//   export class eventCreateBulk
// //   [
//     {
//       activityType:  string;
//       boardingPoints:  string;
//       category:  string;
//       council:  string;
//       dropPoints:  string;
//       endTime:  string;
//       eventDate:  string;
//       eventDesc:  string;
//       eventID: number;
//       eventName:  string;
//       livesTouched:  string;
//       location:  string;
//       pocID: number;
//       pocName:  string;
//       startTime:  string;
//       status:  string;
//       venueAddress:  string;
//       volunteersReq: string;
//     }
// //   ]

//   /* POST /api/v1/online-sales-service/eventRegistrationForUser */
//   export class eventRegistrationUserProj
//   {
//     buid:  string;
//     empid: number;
//     empname:  string;
//     id: number;
//     password:  string;
//     projId: number;
//     role:  string;
//     userEmailId: string;
//   }

//   /* POST /api/v1/online-sales-service/eventcreatedByPOC */
//   export class eventCreationPOC
//   {
//     buid:  string;
//     empid: number;
//     empname:  string;
//     id: number;
//     password:  string;
//     projId: number;
//     role:  string;
//     userEmailId: string;
//   }

//   /* POST /api/v1/online-sales-service/eventsEnroledByEmployee */
//   export class eventRegistrationBeneficiary
//   {
//     beneficiaryName:  string;
//     empID: number;
//     eventDate:  string;
//     eventID: number;
//     eventLocation:  string;
//     eventName:  string;
//     status: string;
//   }

//   /* POST /api/v1/online-sales-service/eventsQueued */
//   export class eventRegistrationQueue
//   {
//     beneficiaryName:  string;
//     empID: number;
//     eventDate:  string;
//     eventID: number;
//     eventLocation:  string;
//     eventName:  string;
//     status: string;
//   }

  /* POST /api/v1/online-sales-service/registerForAnEvent */
  export class eventRegistrationUser
  {
    beneficiaryName:  string;
    buid:  string;
    councilName:  string;
    empID: number;
    empName:  string;
    empProjId: number;
    eventDate:  string;
    eventDesc:  string;
    eventID: number;
    eventLocation:  string;
    eventName:  string;
    id: number;
    status: string;
  }

  export class eventsRegisteredByVolunteers{
    id: number;
    eventID: number;
    empID: number;
    empName: String;
    eventLocation: String;
    beneficiaryName: String;
    councilName: String;
    eventName: String;
    eventDesc: String;
    eventDate: String;
    buid: String;
    empProjId: number;
    status: String;
  }

  /* POST /api/v1/online-sales-service/registerUser */
  export class userRegistration
  {
    buid:  string;
    empid: number;
    empname:  string;
    id: number;
    password:  string;
    projId: number;
    role:  string;
    userEmailId: string;
  }

//   /* POST /api/v1/online-sales-service/volunteerEnrolment */
//   export class volunteerPereBeneficiary
//   {
//     beneficiaryName:  string;
//     empID: number;
//     eventDate:  string;
//     eventID: number;
//     eventLocation:  string;
//     eventName:  string;
//     status: string;
//   }