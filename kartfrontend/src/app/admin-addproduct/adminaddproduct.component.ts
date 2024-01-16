import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';




@Component({
  selector: 'app-adminaddproduct',
  standalone: true,
  //   providers: [homeService],
  imports: [CommonModule, RouterOutlet, RouterLink,],
  templateUrl: './adminaddproduct.component.html',
  styleUrl: './adminaddproduct.component.scss'
})
export class AdminAddProductComponent {

}