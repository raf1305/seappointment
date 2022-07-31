import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageDataService {
  appointmentsObj:string|null = '';
  dataChange: Subject<any> = new Subject<any>();

  constructor() {
    setTimeout(()=>{
      let data = localStorage.getItem('appointments');
      this.createAppointment(data)
    },1000)
    this.dataChange.subscribe((data:any)=>{
      this.appointmentsObj = data
    })
   }


  getData(){
    return this.appointmentsObj
  }

  createAppointment(data:any){
    this.dataChange.next(data)
  }
}
