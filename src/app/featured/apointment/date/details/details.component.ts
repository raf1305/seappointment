import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppointmentDataService } from 'src/app/featured/service/appointment-data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  appointMentsList:any = []
  
  constructor(@Inject(MAT_DIALOG_DATA) public date: {date:Date},
  private appointmentsService:AppointmentDataService) { }

  ngOnInit(): void {
    this.appointMentsList = this.appointmentsService.getAppointmentList(this.date.date)
  }

}
