import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HeaderComponent } from './shared/header/header.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { TaskLogComponent } from './schedule/task-log/task-log.component';
import { WorkSchedulesComponent } from './schedule/work-schedules/work-schedules.component';
import { ProfileComponent } from './settings/profile/profile.component';
import { ThemeComponent } from './settings/theme/theme.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';



const routes: Routes = [
  // Redirect base path to login first
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // Auth routes
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // Main layout routes
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'task', component: TaskLogComponent },
      { path: 'work-schedules', component: WorkSchedulesComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'theme', component: ThemeComponent },
      // more routes as needed
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
