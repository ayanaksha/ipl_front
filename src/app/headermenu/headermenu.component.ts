import { Component, OnInit } from '@angular/core';
import { HcauthService } from '../service/hcauth.service';

@Component({
  selector: 'app-headermenu',
  templateUrl: './headermenu.component.html',
  styleUrls: ['./headermenu.component.css']
})
export class HeadermenuComponent implements OnInit {
  // isUserLoggedIn : boolean= false;
  constructor(private authentication: HcauthService) { }

  ngOnInit() {
    // this.isUserLoggedIn = this.authentication.isUserLoggedIn();
  }

}
