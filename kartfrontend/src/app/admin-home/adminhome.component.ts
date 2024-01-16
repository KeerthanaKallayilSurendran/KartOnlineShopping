import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';




@Component({
  selector: 'app-adminhome',
  standalone: true,
  //   providers: [homeService],
  imports: [CommonModule, RouterOutlet, RouterLink, MatButtonModule, MatCardModule],
  templateUrl: './adminhome.component.html',
  styleUrl: './adminhome.component.scss'
})
export class AdminHomeComponent {

}