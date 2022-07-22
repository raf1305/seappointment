import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApointmentComponent } from './apointment/apointment.component';
import { DateComponent } from './apointment/date/date.component';
import { InfoComponent } from './apointment/date/info/info.component';
import { DetailsComponent } from './apointment/date/details/details.component';
import { CreateAppointmentComponent } from './apointment/create-appointment/create-appointment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    ApointmentComponent,
    DateComponent,
    InfoComponent,
    DetailsComponent,
    CreateAppointmentComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[
    ApointmentComponent
  ],
  // entryComponents: [
  //   CreateAppointmentComponent
  // ]
})
export class FeaturedModule { }
