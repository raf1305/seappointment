import { LocalStorageDataService } from './../../service/local-storage-data.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent implements OnInit {
  registerForm!: FormGroup;
  timeArray: number[] = Array.from({length: 24}, (_, i) => i + 0)
  constructor(public dialogRef: MatDialogRef<CreateAppointmentComponent>,
          private localData:LocalStorageDataService) { }

  ngOnInit(): void {

    let currentDate = new Date()
    console.log(currentDate.getHours())
    console.log(currentDate.getDate())
    this.registerForm = new FormGroup(
      {        
        firstName: new FormControl(null, [
          Validators.required,
          Validators.maxLength(40),
        ]),
        lastName: new FormControl(null, [
          Validators.required,
          Validators.maxLength(40),
        ]),
        email: new FormControl(null, [Validators.required, Validators.email]),
        gender: new FormControl('male'),
        age: new FormControl(null, [Validators.maxLength(40)]),
        date: new FormControl(currentDate,Validators.required),
        time: new FormControl(currentDate.getHours(),Validators.required)
      })
  }
  onSubmit(){
    if (this.registerForm.valid){
      this.saveOnLocalStorage()
      this.dialogRef.close()
    }
  }

  saveOnLocalStorage(){
    let firstName = this.registerForm.controls['firstName'].value
    let lastName = this.registerForm.controls['lastName'].value
    let email = this.registerForm.controls['email'].value
    let age = this.registerForm.controls['age'].value
    let gender = this.registerForm.controls['gender'].value
    let date = this.registerForm.controls['date'].value
    let time = this.registerForm.controls['time'].value
    let dateObject = new Date(+date.getFullYear(), +date.getMonth(),+date.getDate(),+time)

    let appointmentsObj = localStorage.getItem('appointments')
    let appointmentsObj_ = (appointmentsObj && JSON.parse(appointmentsObj))??[]
    appointmentsObj_.push(
      {
        'firstName':firstName,
        'lastName':lastName,
        'email':email,
        'gender':gender,
        'age':age,
        'date':date.toDateString(),
        'time':time,
        'dateObject':dateObject.toString()
      }
    )
    localStorage.setItem('appointments',JSON.stringify(appointmentsObj_))
    this.localData.createAppointment(JSON.stringify(appointmentsObj_));

  }
}
