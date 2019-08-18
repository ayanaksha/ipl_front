import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts' ;
import { FileUploadModule } from 'ng2-file-upload';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ErrorComponent } from './error/error.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { HeadermenuComponent } from './headermenu/headermenu.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { HttpClientModule } from '@angular/common/http';
import { StatsComponent } from './stats/stats.component';
import { EventDashComponent } from './event-dash/event-dash.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatDialogModule, MatDividerModule, MatTableModule, MatProgressSpinnerModule,
         MatInputModule, MatTabsModule, MatOptionModule, MatSelectModule, MatGridListModule, 
         MatCardModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';
import { MatSnackBarModule } from '@angular/material/snack-bar';   
import { CookieService } from 'ngx-cookie-service';      
import { LayoutModule } from '@angular/cdk/layout';
import { TestComponent } from './test/test.component';
import { VolunteerDashComponent } from './volunteer-dash/volunteer-dash.component';
import { PocDashComponent } from './poc-dash/poc-dash.component';
import { EventregComponent } from './eventreg/eventreg.component';
import { Stats2Component } from './stats2/stats2.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ErrorComponent,
    VolunteerComponent,
    HeadermenuComponent,
    FooterComponent,
    LogoutComponent,
    StatsComponent,
    EventDashComponent,
    TestComponent,
    VolunteerDashComponent,
    PocDashComponent,
    EventregComponent,
    Stats2Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule, 
    MatInputModule,
    MatOptionModule, 
    MatSelectModule,
    MatTabsModule,
    MatDividerModule,
    MatToolbarModule,
    MatButtonModule, 
    MatCardModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    FileUploadModule,
    MatProgressSpinnerModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ChartsModule,
    MatGridListModule,
    LayoutModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
