import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mat-steper',
  templateUrl: './mat-steper.component.html',
  styleUrls: ['./mat-steper.component.css']
})
export class MatSteperComponent implements OnInit {
stepper: any;
  secondFormGroup!:FormGroup
  firstFormGroup!:FormGroup
  isEditable:boolean=true
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
   

    this.firstFormGroup=this.fb.group({
      'firstCtrl': new FormControl("")
    })

    this.secondFormGroup = this.fb.group({
      'secondCtrl': new FormControl("")
    })
    
  }
 
}
