import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetailsComponent } from './details/details.component';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  @Input()
  get date(): Date { return this._date; }
  set date(date: Date) {
    if (date.getTime() == new Date(0).getTime()){
      this.invalidDate = true
    }
    this._date = date
  }
  public _date = new Date(0);
  currentDate: Number = 0;
  invalidDate: boolean = false;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.currentDate = this._date?.getDate()
  }

  showDetails(){
    const dialogRef = this.dialog.open(DetailsComponent,{
      data: {date: this._date}
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }
}

