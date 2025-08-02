import { Component } from '@angular/core';

@Component({
  selector: 'app-work-schedules',
  templateUrl: './work-schedules.component.html',
  styleUrls: ['./work-schedules.component.css']
})
export class WorkSchedulesComponent {
  days: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  timeSlots: string[] = [
    '9:00 AM - 10:00 AM', '10:00 AM - 11:00 AM', '11:00 AM - 12:00 PM', '12:00 PM - 1:00 PM',
    '1:00 PM - 2:00 PM', '2:00 PM - 3:00 PM', '3:00 PM - 4:00 PM'
  ];

  // Fixed type: time is now a string
  schedule: {
    [day: string]: {
      [time: string]: { subject: string,}
    }
  } = {
    Monday: {
      '9:00 AM - 10:00 AM': { subject: 'Maths Lecture' },
      '10:00 AM - 11:00 AM': { subject: 'DSA Lecture' },
      '11:00 AM - 12:00 PM': { subject: 'DBMS Lecture' },
      '12:00 PM - 1:00 PM': {subject: 'BREAK'},
      '1:00 PM - 2:00 PM':{subject: 'DSA LAB'},
      '2:00 PM - 3:00 PM':{subject: 'DSA LAB'},
      '3:00 PM - 4:00 PM':{subject: 'CNC Lecture'},
  },
  Tuesday: {
      '9:00 AM - 10:00 AM': { subject: 'DSA Lecture' },
      '10:00 AM - 11:00 AM': { subject: 'CNC Lecture' },
      '11:00 AM - 12:00 PM': { subject: 'MATHS Lecture' },
      '12:00 PM - 1:00 PM': {subject: 'BREAK'},
      '1:00 PM - 2:00 PM':{subject: 'DBMS LAB'},
      '2:00 PM - 3:00 PM':{subject: 'DBMS LAB'},
      
  },
  Wednesday: {
      '9:00 AM - 10:00 AM': { subject: 'Maths Lecture' },
      '10:00 AM - 11:00 AM': { subject: 'Maths Lecture' },
      '11:00 AM - 12:00 PM': { subject: 'DBMS Lecture' },
      '12:00 PM - 1:00 PM': {subject: 'BREAK'},
      
  },
  Thursday: {
      '9:00 AM - 10:00 AM': { subject: 'CNC Lecture' },
      '10:00 AM - 11:00 AM': { subject: 'CNC Lecture' },
      '11:00 AM - 12:00 PM': { subject: 'DBMS Lecture' },
      '12:00 PM - 1:00 PM': {subject: 'BREAK'},
      '1:00 PM - 2:00 PM':{subject: 'MATHS Lecture'},
      '2:00 PM - 3:00 PM':{subject: 'DSA Lecture'},
      
  },
  Friday: {
      '9:00 AM - 10:00 AM': { subject: 'CNC LAB' },
      '10:00 AM - 11:00 AM': { subject: 'CNC LAB' },
      '11:00 AM - 12:00 PM': { subject: 'DBMS Lecture' },
      '12:00 PM - 1:00 PM': {subject: 'BREAK'},
      '1:00 PM - 2:00 PM':{subject: 'DSA Lecture'},
      '2:00 PM - 3:00 PM':{subject: 'CNC Lecture'},
  },
}
}