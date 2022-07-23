import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppointmentDataService {
  appointMentsList:any = []
  constructor() { }

  getAppointmentList(date: Date){
    this.appointMentsList = [];
    let appointments = localStorage.getItem('appointments')
    let appointmentsObj = (appointments && JSON.parse(appointments))??[]
    for (let i=0; i<appointmentsObj.length; i++){
      if(date.toDateString() == appointmentsObj[i].date){
        this.appointMentsList.push(appointmentsObj[i])
      }
    }
    this.appointMentsList.sort((a:any,b:any)=>a.time - b.time)
    return this.appointMentsList
  }
}
