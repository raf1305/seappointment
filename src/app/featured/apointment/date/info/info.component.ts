import { Component, Input, OnInit } from '@angular/core';
import { AppointmentDataService } from 'src/app/featured/service/appointment-data.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  @Input() date:Date = new Date()
  appointMentsList:any = []
  constructor(private appointmentsService:AppointmentDataService) { }

  ngOnInit(): void {
    this.appointMentsList = this.appointmentsService.getAppointmentList(this.date)
  }
}
