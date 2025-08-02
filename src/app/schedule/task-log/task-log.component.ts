import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


interface Task {
  id?:number;
  subject: string;
  type: string;
  teacher:string;
  date: string; // ISO format (yyyy-mm-dd)
  time:string;
  status: 'completed' | 'upcoming'  | 'pending';
}

@Component({
  selector: 'app-task-log',
  templateUrl: './task-log.component.html',
  styleUrls: ['./task-log.component.css']
})
export class TaskLogComponent implements OnInit {
  tasks:Task[] = [];
  filteredTasks:Task[] = [];
  newTask:Task = {
    subject:'',
    type:'',
    teacher:'',
    date:'',
    time:'',
    status:'upcoming'
  };
  teachers:string[]=[];

  filterSubject: string = '';
  filterType: string = '';

  sortBy: 'date' | 'subject' = 'date';
  

  constructor(private http:HttpClient){

  }

  uniqueSubjects: string[] = [];

  fetchTasks() {
    this.http.get<Task[]>('http://localhost:3000/tasks').subscribe(data => {
      this.tasks = data;
      this.uniqueSubjects = [...new Set(data.map(t => t.subject))]; // Set removes duplicates
      this.applyFilter();
  });
}

  fetchTeachers(){
    this.http.get<any[]>('http://localhost:3000/teachers').subscribe(data=> {
      this.teachers = data.map(t=>t.name)
    });
  }

  ngOnInit(){
    this.fetchTasks();
    this.fetchTeachers();
  }

  addTask(){
     this.http.post<Task>('http://localhost:3000/tasks', this.newTask).subscribe(() => {
      // Clear form fields after successful save
      this.newTask = {
        subject: '',
        type: '',
        teacher: '',
        date: '',
        time: '',
        status: 'upcoming'
      };
      this.fetchTasks(); // Refresh task list
    });
  }

   applyFilter() {
    this.filteredTasks = this.tasks
      .filter(task =>
        // Check subject and type filters
        (!this.filterSubject || task.subject === this.filterSubject) &&
        (!this.filterType || task.type === this.filterType)
      )
      .sort((a, b) => {
        // Sort by date or subject based on selected option
        return this.sortBy === 'date'
          ? new Date(a.date).getTime() - new Date(b.date).getTime()
          : a.subject.localeCompare(b.subject);
      });
  }

  // 🚨 Check if task is overdue based on today's date
  isOverdue(task: Task): boolean {
    return task.status === 'upcoming' && new Date(task.date) < new Date();
  }
}
