import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface Teacher {
  id: number;
  name: string;
  subject: string;
  available: boolean;
}

@Component({
  selector: 'app-tr-details',
  templateUrl: './tr-details.component.html',
  styleUrls: ['./tr-details.component.css']
})
export class TrDetailsComponent implements OnInit {
  teacher: Teacher | null = null;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
  console.log('Fetching ID:', id);
  this.http.get<Teacher>(`http://localhost:3000/teachers/${id}`).subscribe({
    next: (data) => {
      console.log('Teacher Data:', data);
      this.teacher = data;
    },
    error: () => {
      console.error('Teacher not found');
    }
  });
}
    }
  }
