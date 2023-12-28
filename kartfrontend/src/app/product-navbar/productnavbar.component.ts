import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-productnav',
  standalone: true,
  //   providers: [homeService],
  imports: [CommonModule, RouterOutlet, RouterLink, MatMenuModule, MatButtonModule],
  templateUrl: './productnavbar.component.html',
  styleUrl: './productnavbar.component.scss'
})
export class productNavBarComponent {

}