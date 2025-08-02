import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
 name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private router: Router) {}

  onRegister(form: NgForm) {
    if (form.invalid || this.password !== this.confirmPassword) {
      alert('Please fix errors before submitting.');
      return;
    }

    // Demo behavior: simulate registration
    alert('Registration successful!');
    this.router.navigate(['/login']); // route to login after registration
  }
}
