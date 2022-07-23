import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-apointment',
  templateUrl: './apointment.component.html',
  styleUrls: ['./apointment.component.css']
})
export class ApointmentComponent implements OnInit {
  year = [2021,2022,2023]
  months = ['January','February','March','April','May','June','July','August','September','October','November','December']
  days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
  dates: Date[]= []
  tableDates: Date[][]= []
  selectedYear = new Date().getFullYear();
  selectedMonth = new Date().getMonth()
  currentDay = new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate())
  paramsubs: any;

  constructor(public dialog: MatDialog,
              private activatedRoute: ActivatedRoute,
              private router: Router

    ) {
      this.paramsubs = this.activatedRoute.params.subscribe((params: Params) => {
        this.selectedMonth = +this.activatedRoute.snapshot.params['month']-1
        this.getDaysInMonth()
      });
     }

  ngOnInit(): void {
    this.getDaysInMonth()
  }

  getDaysInMonth() {
    let date = new Date(this.selectedYear, this.selectedMonth, 1);
    let dates = [];
    while (date.getMonth() == this.selectedMonth) {
      dates.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    this.dates = dates
    this.appendEmptyDates(dates)
    this.convertDates()

  }

  //generating matrix of dates to show in table
  appendEmptyDates(dates: Date[]){
    let startDay = dates[0].getDay()
    for (let i=0; i < startDay; i++){
      dates.unshift(new Date(0))
    }
    
    let endDay = dates[this.dates.length-1].getDay()
    for (let i=endDay; i < 6; i++){
      dates.push(new Date(0))
    }
  }

  convertDates(){
    let dateTable = []
    let tempDate = []
    for (let i=0; i<this.dates.length; i++){
      tempDate.push(this.dates[i])
      if ((i+1)%7 == 0 ){
        dateTable.push(tempDate)
        tempDate = []
      }
    }
    this.tableDates = dateTable
  }

  onMonthChange(month: number){
    this.router.navigate(['appointment',month+1])
  }

  onYearChange(){
    this.getDaysInMonth()
  }

  createAppointment() {
    const dialogRef = this.dialog.open(CreateAppointmentComponent);
    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
