import { Component, Input, OnInit } from '@angular/core';
import { AppointmentDataService } from 'src/app/featured/service/appointment-data.service';
import { LocalStorageDataService } from 'src/app/featured/service/local-storage-data.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  @Input() date:Date = new Date()
  appointMentsList:any = []
  constructor(private appointmentsService:AppointmentDataService,
    private localData:LocalStorageDataService) { 
    this.localData.dataChange.subscribe((d:any)=>{
      this.appointMentsList = this.appointmentsService.getAppointmentList(this.date)
    })
  }
  ngOnInit(): void {
    this.appointMentsList = this.appointmentsService.getAppointmentList(this.date)
  }
}
