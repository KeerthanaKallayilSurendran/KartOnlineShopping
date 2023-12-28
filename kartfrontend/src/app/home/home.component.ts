import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { homeHeaderComponent } from '../home-header/homeheader.component';
import { productNavBarComponent } from '../product-navbar/productnavbar.component';



@Component({
  selector: 'app-home',
  standalone: true,
  //   providers: [homeService],
  imports: [CommonModule, RouterOutlet, RouterLink, homeHeaderComponent, productNavBarComponent, MatButtonModule, MatCardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}