import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';




@Component({
  selector: 'app-adminviewproduct',
  standalone: true,
  //   providers: [homeService],
  imports: [CommonModule, RouterOutlet, RouterLink,],
  templateUrl: './adminviewproduct.component.html',
  styleUrl: './adminviewproduct.component.scss'
})
export class AdminViewProductComponent {

}