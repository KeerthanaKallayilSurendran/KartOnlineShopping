import { Component } from "@angular/core";
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-signin',
  standalone: true,
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss',
  imports: [MatButtonModule, MatInputModule, MatFormFieldModule, FormsModule, MatIconModule]
})
export class SigninComponent {
  hide = true;
}

