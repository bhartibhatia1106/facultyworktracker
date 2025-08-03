import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { TaskLogComponent } from './schedule/task-log/task-log.component';
import { WorkSchedulesComponent } from './schedule/work-schedules/work-schedules.component';
import { ProfileComponent } from './settings/profile/profile.component';
import { TeachersComponent } from './faculty/teachers/teachers.component';
import { TrDetailsComponent } from './faculty/tr-details/tr-details.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'task', component: TaskLogComponent },
      { path: 'work-schedules', component: WorkSchedulesComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'teachers', component: TeachersComponent },
      { path: 'teachers/:id', component: TrDetailsComponent }
    ]
  },
  { path: 'logout', component: LogoutComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
