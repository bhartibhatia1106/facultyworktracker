import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loginUser(user: { name: string; email: string; }) {
    throw new Error('Method not implemented.');
  }
  title = 'facultyworktracker';
   showHeader = true;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const url = event.urlAfterRedirects;
        this.showHeader = !(url === '/login' || url === '/register');
      }
    });
  }

  isLoginOrRegisterPage(): boolean {
    const url = this.router.url;
    return url === '/login' || url === '/register';
  }
}
