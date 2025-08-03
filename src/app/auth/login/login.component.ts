import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onLogin(form: NgForm) {
    if (form.invalid || this.password.length < 8) {
      alert('Please enter a valid email and password (minimum 8 characters).');
      return;
    }

    // ✅ Replace with your actual working email & password
    const validEmail = 'bhartibhatia1106@gmail.com';
    const validPassword = '12345678';

    if (this.email === validEmail && this.password === validPassword) {
      alert('Login successful!');
      this.router.navigate(['/dashboard']);
    } else {
      alert('Invalid email or password!');
    }
  }
}