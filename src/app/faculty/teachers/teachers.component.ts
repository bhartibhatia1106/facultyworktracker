import { Component } from '@angular/core';

interface Teacher {
  name: string;
  email: string;
  phone: string;
  department: string;
  subjects: string[];
  status: 'Active' | 'Inactive';
}

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent {
  teachers: Teacher[] = [
    {
      name: 'Dr. Ritu Sharma',
      email: 'ritusharma@college.edu',
      phone: '+91-9876543210',
      department: 'Computer Science',
      subjects: ['DBMS', 'Operating Systems'],
      status: 'Active'
    },
    {
      name: 'Prof. Manish Verma',
      email: 'manishv@college.edu',
      phone: '+91 99184 32710',
      department: 'AI & Data Science',
      subjects: ['DBMS', 'Ethical Hacking'],
      status: 'Active'
    },
    {
      name: 'Ms. Sneha Kulkarni',
      email: 'sneha.kulkarni@college.edu',
      phone: '+91 97821 44309',
      department: 'Information Technology',
      subjects: ['DSA', 'Networks'],
      status: 'Active'
    },
     {
      name: 'Mr. Arjun Patel',
      email: 'arjunp@college.edu',
      phone: '+91 98456 11022',
      department: 'Electronics And Telecommunication',
      subjects: ['Computer Networks', 'IOT'],
      status: 'Active'
    },
    {
      name: 'Ms. Tanvi Deshmukh',
      email: 'tanvid@college.edu',
      phone: '+91 98988 23455',
      department: 'Computer Science',
      subjects: ['Web development', 'Mobile app Development'],
      status: 'Active'
    }
  ];

  selectedIndex: number | null = null;

  toggleDetails(index: number) {
    this.selectedIndex = this.selectedIndex === index ? null : index;
  }
}
