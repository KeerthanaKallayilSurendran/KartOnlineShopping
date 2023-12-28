import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-homeheader',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './homeheader.component.html',
  styleUrl: './homeheader.component.scss'
})
export class homeHeaderComponent {

}
