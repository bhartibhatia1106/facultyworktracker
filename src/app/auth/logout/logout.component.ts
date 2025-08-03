import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
    const confirmLogout = confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      this.performLogout();
    } else {
      // Navigate back to dashboard or home if cancel is clicked
      this.router.navigate(['/home']);
    }
  }

  performLogout(): void {
    // Clear auth tokens/session/localStorage if used
    localStorage.clear();

    // Redirect to login page
    this.router.navigate(['/auth/login']);
  }
}
