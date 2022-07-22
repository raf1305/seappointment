import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  @Input() date:Date = new Date()
  appointMentsList:any = []
  constructor() { }

  ngOnInit(): void {
    this.getAppointmentList()
  }

  getAppointmentList(){
    let appointments = localStorage.getItem('appointments')
    let appointmentsObj = (appointments && JSON.parse(appointments))??[]
    for (let i=0; i<appointmentsObj.length; i++){
      if(this.date.toDateString() == appointmentsObj[i].date){
        this.appointMentsList.push(appointmentsObj[i])
      }
    }
  }
}
