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
import { TeachersComponent } from './faculty/teachers/teachers.component';



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
  },
  {
    path:'login',
    component: LoginComponent

  },
  {
    path:'register',
    component: RegisterComponent

  },
  
   {
    path:'header',
    component: HeaderComponent

  },
  { path: '', 
    redirectTo: 'login', 
    pathMatch: 'full' },
     {
    path: "teachers",
    component: TeachersComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
