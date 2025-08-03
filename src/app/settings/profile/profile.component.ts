import { Component, OnInit } from '@angular/core';

interface UserProfile {
  id?: number;
  name: string;
  email: string;
  password: string;
  contact: string;
  dob: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: UserProfile = {
    name: '',
    email: '',
    password: '',
    contact: '',
    dob: ''
  };

  ngOnInit(): void {
    const stored = localStorage.getItem('currentUser');
    if (stored) {
      this.profile = JSON.parse(stored);
    // } else {
    //   alert('No user logged in.');
    //   // You could redirect to login here if desired.
    // }
}
  }

  saveProfile(): void {
    localStorage.setItem('currentUser', JSON.stringify(this.profile));
    alert('Profile updated successfully!');
    // Optionally: send updates to your backend using HttpClient.put(...)
  }
}
