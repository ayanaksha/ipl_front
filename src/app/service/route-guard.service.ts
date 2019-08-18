import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HcauthService } from './hcauth.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  constructor(private authentication: HcauthService, private router: Router ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.authentication.isUserLoggedIn()){
      return true;
    }
    else{
      this.router.navigate(['login']);
      return false; 
    }
  };
}
