import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ErrorComponent } from './error/error.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { StatsComponent } from './stats/stats.component';
import { VolunteerDashComponent } from 'src/app/volunteer-dash/volunteer-dash.component';
import { PocDashComponent } from 'src/app/poc-dash/poc-dash.component';
import { NoPreloading } from '@angular/router';
import { PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path:'', component: LoginComponent }
  ,{ path:'login', component: LoginComponent }
  ,{ path:'login/:name', component: LoginComponent }
  ,{ path:'register/:name', component: RegisterComponent, canActivate:[RouteGuardService] }
  ,{ path:'volunteer', component: VolunteerComponent, canActivate:[RouteGuardService] }
  ,{ path:'volunteerdash', component: VolunteerDashComponent, canActivate:[RouteGuardService]   }
  ,{ path:'volunteerdash/:name', component: VolunteerDashComponent, canActivate:[RouteGuardService]  }
  ,{ path:'pocdash', component: PocDashComponent, canActivate:[RouteGuardService] }
  ,{ path:'pocdash/:name', component: PocDashComponent, canActivate:[RouteGuardService]   }
  ,{ path:'logout', component: LogoutComponent, canActivate:[RouteGuardService]}
  ,{ path:'bar-chart', component: StatsComponent } 
  // ,{ path:'**', component: ErrorComponent, canActivate:[RouteGuardService] }
  ,{ path:'**', component: StatsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // imports: [RouterModule.forRoot(routes,{
  //   onSameUrlNavigation: 'reload'
  // })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules  })