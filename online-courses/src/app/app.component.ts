import { Component } from '@angular/core';
import {headerComponent } from '../components/header/header.component';
import { Router, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [headerComponent, RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'online-courses';

  constructor(private router: Router){}
   ngOnInit(){
    this.router.navigate(['/home'])
   }
}
