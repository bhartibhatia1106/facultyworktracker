import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  profileForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      name: [''],
      email: [''],
      department: [''],
      role: [''],
      mobile: ['']
    });
  }

  onSubmit() {
    console.log(this.profileForm.value);
  }


  profile = {
    name: '',
    email: '',
    department: ''
  };


}
