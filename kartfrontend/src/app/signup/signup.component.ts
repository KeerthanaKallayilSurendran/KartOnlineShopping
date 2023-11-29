import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, ReactiveFormsModule, Validator } from "@angular/forms";
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import { Validators } from "@angular/forms";
import { CommonModule } from "@angular/common";

interface Gender {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-signup',
  standalone: true,
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  imports: [MatButtonModule, MatInputModule, MatFormFieldModule, FormsModule, MatSelectModule, MatIconModule, ReactiveFormsModule, CommonModule]
})
export class SignupComponent implements OnInit{

  reactiveForm: FormGroup;
  
  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      username: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20)
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      mobile: new FormControl(null,[
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10)
      ]),
      gender: new FormControl(null,[
        Validators.required
      ]),
      password: new FormControl(null,[
        Validators.required,
        // Validators.pattern(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])$/)
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&-+=])([a-zA-Z\d@#$%^&-+=]{8,25})$/
        )
      ]),
      userconfirmpassword: new FormControl(null,[
        Validators.required
      ])
    })
  }

  genders: Gender[] = [
    {value: 'female', viewValue: 'Female'},
    {value: 'male', viewValue: 'Male'}
  ];
  hide = true;

  onFormSubmitted(){
    console.log(this.reactiveForm.value);
  }
}


