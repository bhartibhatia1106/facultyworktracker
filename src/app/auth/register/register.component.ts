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
  dob: any;
  contact: any;
  http: any;

  constructor(private router: Router) {}

  onRegister(form: NgForm) {
  if (form.invalid || this.password.length < 8) return;

  const newUser = {
    name: this.name.trim(),
    email: this.email.trim().toLowerCase(),
    password: this.password.trim(),
    contact: this.contact.trim(),
    dob: this.dob
  };

  this.http.post("http://localhost:3000/users", newUser)
    .subscribe(() => {
      alert("Registered successfully!");
      this.router.navigate(['/login']);
    });
}
}
