import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartData } from 'chart.js';
import { HttpClient } from '@angular/common/http';

interface Task {
  id: number | string;
  subject: string;
  type: string;
  teacher: string;
  date: string;
  time: string;
  status: 'completed' | 'upcoming' | 'pending';
  hours: number;
}

interface TeacherSalary {
  teacher: string;
  subject: string;
  totalHours: number;
  salary: number;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  counts = { completed: 0, pending: 0, upcoming: 0 };
  tasks: Task[] = [];

  chartMode: 'productivity' | 'screentime' = 'productivity';
  chartData: ChartData<'bar'> = {
    labels: [],
    datasets: [{ label: '', data: [], backgroundColor: '' }]
  };

  chartOptions: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: { display: true },
      title: { display: true, text: 'Task Insights' }
    }
  };

  teacherSalaries: TeacherSalary[] = [];
  readonly HOURLY_RATE = 500;

  // Weekly completion rate percentage for USP
  weeklyCompletionRate: number = 0;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Task[]>('http://localhost:3000/tasks').subscribe(data => {
      this.tasks = data;
      this.calculateCounts();
      this.calculateWeeklySummary();
      this.updateChart();
      this.calculateSalaries();
    });
  }

  calculateCounts(): void {
    this.counts = {
      completed: this.tasks.filter(t => t.status === 'completed').length,
      pending: this.tasks.filter(t => t.status === 'pending').length,
      upcoming: this.tasks.filter(t => t.status === 'upcoming').length
    };
  }

  updateChart(): void {
    const subjectMap = new Map<string, { completed: number; total: number }>();
    this.tasks.forEach(task => {
      const entry = subjectMap.get(task.subject) ?? { completed: 0, total: 0 };
      if (task.status === 'completed') entry.completed++;
      entry.total++;
      subjectMap.set(task.subject, entry);
    });

    this.chartData = {
      labels: Array.from(subjectMap.keys()),
      datasets: [{
        label: this.chartMode === 'productivity' ? 'Completed Tasks' : 'Total Tasks',
        data: Array.from(subjectMap.values()).map(v =>
          this.chartMode === 'productivity' ? v.completed : v.total
        ),
        backgroundColor: this.chartMode === 'productivity'
          ? 'rgba(75, 192, 192, 0.6)'
          : 'rgba(255, 99, 132, 0.6)'
      }]
    };
  }

  calculateWeeklySummary(): void {
    const start = this.getStartOfCurrentWeek();
    const recent = this.tasks.filter(t => new Date(t.date) >= start);

    const completedTasks = recent.filter(t => t.status === 'completed').length;
    const totalTasks = recent.length;

    this.weeklyCompletionRate = totalTasks ? (completedTasks / totalTasks) * 100 : 0;
  }

  getStartOfCurrentWeek(): Date {
    const now = new Date();
    const day = now.getDay();
    const diff = now.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(now.setDate(diff));
  }

  calculateSalaries(): void {
    const salaryMap = new Map<string, number>();
    const grouped: TeacherSalary[] = [];

    this.tasks.forEach(task => {
      if (task.hours && task.teacher && task.subject) {
        const key = `${task.teacher}_${task.subject}`;
        const current = salaryMap.get(key) || 0;
        salaryMap.set(key, current + task.hours);
      }
    });

    for (const [key, hours] of salaryMap.entries()) {
      const [teacher, subject] = key.split('_');
      grouped.push({
        teacher,
        subject,
        totalHours: hours,
        salary: hours * this.HOURLY_RATE
      });
    }

    this.teacherSalaries = grouped;
  }
}
