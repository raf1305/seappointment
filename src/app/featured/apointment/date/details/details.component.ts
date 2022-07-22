import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  appointMentsList:any = []
  
  constructor(@Inject(MAT_DIALOG_DATA) public date: {date:Date}) { }

  ngOnInit(): void {
    let appointments = localStorage.getItem('appointments')
    let appointmentsObj = (appointments && JSON.parse(appointments))??[]
    for (let i=0; i<appointmentsObj.length; i++){
      if(this.date.date.toDateString() == appointmentsObj[i].date){
        this.appointMentsList.push(appointmentsObj[i])
      }
    }
  }

}
