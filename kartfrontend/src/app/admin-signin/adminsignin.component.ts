import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet, RouterLink } from '@angular/router';
import { AdminSiginService } from './adminsignin.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { SignupHeaderComponent } from '../signup-header/signup-header.component';



@Component({
  selector: 'app-adminsignin',
  standalone: true,
  templateUrl: './adminsignin.component.html',
  styleUrl: './adminsignin.component.scss',
  providers: [AdminSiginService],
  imports: [
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule,
    RouterOutlet,
    RouterLink,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    SignupHeaderComponent
  ],
})


export class adminSigninComponent {

  loginForm: FormGroup;

  constructor(private AdminSiginService: AdminSiginService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required])
    })
  }

  hide = true;

  onFormLoginSubmitted() {
    const values = this.loginForm.value
    this.AdminSiginService.connect(values).subscribe({
      next: (data) => {
        console.log(data, 53)
        if (data.message) alert(data.message);
        if (data.success) {
          this.router.navigate(['/adminhome'])
        } else {
          this.router.navigate(['/admin'])
        }
      },
      error: (err) => {
        alert(err)
      }
    })
  }
}
