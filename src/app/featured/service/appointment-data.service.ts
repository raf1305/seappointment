import { LocalStorageDataService } from './local-storage-data.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppointmentDataService {
  appointMentsList:any = []
  constructor(private localData:LocalStorageDataService) { 
  }

  getAppointmentList(date: Date){
    this.appointMentsList = [];
    let appointments = this.localData.appointmentsObj
    let appointmentsObj = (appointments && JSON.parse(appointments.toString()))??[]
    for (let i=0; i<appointmentsObj.length; i++){
      if(date.toDateString() == appointmentsObj[i].date){
        this.appointMentsList.push(appointmentsObj[i])
      }
    }
    this.appointMentsList.sort((a:any,b:any)=>a.time - b.time)
    return this.appointMentsList
  }
}
