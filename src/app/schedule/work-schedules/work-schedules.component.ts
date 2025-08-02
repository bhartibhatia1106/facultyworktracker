import { Component } from '@angular/core';

@Component({
  selector: 'app-work-schedules',
  templateUrl: './work-schedules.component.html',
  styleUrls: ['./work-schedules.component.css']
})
export class WorkSchedulesComponent {
  days: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  timeSlots: string[] = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
  ];

  // Sample schedule data
  schedule: {
    [day: string]: {
      [time: string]: { subject: string, type: string }
    }
  } = {
    Monday: {
      '9:00 AM': { subject: 'Math', type: 'Lecture' },
      '11:00 AM': { subject: 'Physics', type: 'Practical' }
    },
    Tuesday: {
      '10:00 AM': { subject: 'Chemistry', type: 'Lecture' },
      '2:00 PM': { subject: 'Staff Meeting', type: 'Meeting' }
    },
    Wednesday: {
      '1:00 PM': { subject: 'Computer', type: 'Lecture' }
    }
  };
}
