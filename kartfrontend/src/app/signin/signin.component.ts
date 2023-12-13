import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet, RouterLink } from '@angular/router';
import { SiginService } from './signin.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-signin',
  standalone: true,
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss',
  providers: [SiginService],
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
  ],
})
export class SigninComponent {
  
  loginForm: FormGroup;

  constructor(private signinService: SiginService, private router: Router) {}

ngOnInit(): void {
  this.loginForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required])
  })
}
  
  hide = true;

  onFormLoginSubmitted() {
    const values = this.loginForm.value
    this.signinService.connect(values).subscribe({
      next: (data) => {
        console.log(data, 53)
        if (data.message) alert(data.message);
        if(data.success){
          this.router.navigate(['/home'])
        }else{
          this.router.navigate(['/signin'])
        }
      },
      error: (err) => {
        alert(err)
      }
    })
  }

}
