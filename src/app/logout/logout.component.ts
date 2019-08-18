import { Component, OnInit } from '@angular/core';
import { HcauthService } from '../service/hcauth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  constructor(private authentication: HcauthService) { }

  ngOnInit() {
    this.authentication.logout();
  }

}
