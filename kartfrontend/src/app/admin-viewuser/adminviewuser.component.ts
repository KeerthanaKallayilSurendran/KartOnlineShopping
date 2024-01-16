import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';




@Component({
  selector: 'app-adminviewuser',
  standalone: true,
  //   providers: [homeService],
  imports: [CommonModule, RouterOutlet, RouterLink,],
  templateUrl: './adminviewuser.component.html',
  styleUrl: './adminviewuser.component.scss'
})
export class AdminViewUserComponent {

}