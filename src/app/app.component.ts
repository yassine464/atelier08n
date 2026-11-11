import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit() {
    const isloggedin = localStorage.getItem('isloggedIn');
    const loggedUser = localStorage.getItem('loggedUser');
    if (isloggedin != 'true' || !loggedUser)
      this.router.navigate(['/login']);
    else
      this.authService.setLoggedUserFromLocalStorage(loggedUser);
  }

  onLogout() {
    this.authService.logout();
  }
}
