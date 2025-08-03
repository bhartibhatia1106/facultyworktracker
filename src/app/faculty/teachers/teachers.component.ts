import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Teacher {
  id: number;
  name: string;
  subject: string;
  available: boolean;
  email: string;
  phone: string;
  department: string;
}

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {
  teachers: Teacher[] = [];
  filteredTeachers: Teacher[] = [];
  subjects: string[] = [];
  selectedSubject: string = 'all';
  selectedTeacher: Teacher | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Teacher[]>('http://localhost:3000/teachers').subscribe(data => {
      this.teachers = data;
      this.subjects = Array.from(new Set(data.map(t => t.subject)));
      this.filterTeachers();
    });
  }

  filterTeachers(): void {
    this.filteredTeachers =
      this.selectedSubject === 'all'
        ? this.teachers
        : this.teachers.filter(t => t.subject === this.selectedSubject);
    this.selectedTeacher = null; // reset detail view on filter
  }

  showDetails(teacher: Teacher): void {
    this.selectedTeacher = teacher;
  }

  backToList(): void {
    this.selectedTeacher = null;
  }
}
