import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './settings/profile/profile.component';
import { ThemeComponent } from './settings/theme/theme.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { WorkSchedulesComponent } from './schedule/work-schedules/work-schedules.component';
import { TaskLogComponent } from './schedule/task-log/task-log.component';

const routes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "work-schedules",
    component: WorkSchedulesComponent
  },
  {
    path: "task",
    component: TaskLogComponent
  },
  {
    path: "profile",
    component: ProfileComponent
  },
  {
    path: "theme",
    component: ThemeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
