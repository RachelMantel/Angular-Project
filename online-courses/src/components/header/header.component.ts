import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { Router, RouterLink, } from '@angular/router';
import { UserService } from '../../service/user/user.service';
import { User } from '../../models/user.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatMenuModule,MatButtonModule, MatIconModule, MatToolbarModule,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class headerComponent implements OnInit {
  login: boolean = false;
  currentUser: User | null = null;
  private subscriptions: Subscription = new Subscription();

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit() {

    this.subscriptions.add(
      this.userService.user.subscribe(user => {
        this.currentUser = user;
      })
    );

    this.subscriptions.add(
      this.userService.isConnected$.subscribe(connected => {
        this.login = connected;
      })
    );
  }


  signIn() {
    this.router.navigate(['/sign-in']);
  }

  signUp() {
    this.router.navigate(['/sign-up']);
  }
}
