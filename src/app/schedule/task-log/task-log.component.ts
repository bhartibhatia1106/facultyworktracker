import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Task {
  id?: number;
  subject: string;
  type: string;
  teacher: string;
  date: string; // yyyy-mm-dd
  time: string;
  status: 'completed' | 'upcoming' | 'pending';
}

@Component({
  selector: 'app-task-log',
  templateUrl: './task-log.component.html',
  styleUrls: ['./task-log.component.css']
})
export class TaskLogComponent implements OnInit {
  tasks: Task[] = [];
  filteredTasks: Task[] = [];
  newTask: Task = {
    subject: '',
    type: '',
    teacher: '',
    date: '',
    time: '',
    status: 'upcoming'
  };
  teachers: string[] = [];
  uniqueSubjects: string[] = [];

  filterSubject = '';
  filterType = '';
  sortBy: 'date' | 'subject' = 'date';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchTasks();
    this.fetchTeachers();
  }

  fetchTasks() {
    this.http.get<Task[]>('http://localhost:3000/tasks').subscribe(data => {
      this.tasks = data;
      this.uniqueSubjects = [...new Set(data.map(t => t.subject))];
      this.applyFilter();
    });
  }

  fetchTeachers() {
    this.http.get<any[]>('http://localhost:3000/teachers').subscribe(data => {
      this.teachers = data.map(t => t.name);
    });
  }

  addTask() {
    this.http.post<Task>('http://localhost:3000/tasks', this.newTask).subscribe(() => {
      this.newTask = {
        subject: '',
        type: '',
        teacher: '',
        date: '',
        time: '',
        status: 'upcoming'
      };
      this.fetchTasks();
    });
  }

  applyFilter() {
    this.filteredTasks = this.tasks
      .filter(task =>
        (!this.filterSubject || task.subject === this.filterSubject) &&
        (!this.filterType || task.type === this.filterType)
      )
      .sort((a, b) =>
        this.sortBy === 'date'
          ? new Date(a.date).getTime() - new Date(b.date).getTime()
          : a.subject.localeCompare(b.subject)
      );
  }

  isOverdue(task: Task): boolean {
    return task.status === 'upcoming' && new Date(task.date) < new Date();
  }

  markAsCompleted(task: Task) {
    const updatedTask = { ...task, status: 'completed' };
    this.http.put(`http://localhost:3000/tasks/${task.id}`, updatedTask).subscribe(() => {
      this.fetchTasks();
    });
  }
}
