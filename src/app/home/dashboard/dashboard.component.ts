import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartData } from 'chart.js';
import { HttpClient } from '@angular/common/http';

interface Task {
  subject: string;
  status: 'completed' | 'upcoming' | 'pending';
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  tasks: Task[] = [];

  chartMode: 'productivity' | 'screentime' = 'productivity';

  chartData: ChartData<'bar'> = {
    labels: [],
    datasets: [
      {
        label: 'Loading...',
        data: [],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      }
    ]
  };

  chartOptions: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: { display: true },
      title: {
        display: true,
        text: 'Task Insights'
      }
    }
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Task[]>('http://localhost:3000/tasks').subscribe(data => {
      this.tasks = data;
      this.updateChart();
    });
  }

  updateChart(): void {
    const subjectMap = new Map<string, { completed: number; total: number }>();

    this.tasks.forEach(task => {
      if (!subjectMap.has(task.subject)) {
        subjectMap.set(task.subject, { completed: 0, total: 0 });
      }
      const current = subjectMap.get(task.subject)!;
      if (task.status === 'completed') {
        current.completed++;
      }
      current.total++;
    });

    const labels = Array.from(subjectMap.keys());
    const data = Array.from(subjectMap.values()).map(val =>
      this.chartMode === 'productivity' ? val.completed : val.total
    );

    this.chartData = {
      labels: labels,
      datasets: [{
        label: this.chartMode === 'productivity' ? 'Completed Tasks' : 'Total Tasks (Screen Time)',
        data: data,
        backgroundColor: this.chartMode === 'productivity'
          ? 'rgba(75, 192, 192, 0.6)'
          : 'rgba(255, 99, 132, 0.6)',
      }]
    };
  }
}
