import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkSchedulesComponent } from './work-schedules/work-schedules.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TaskLogComponent } from './task-log/task-log.component';




@NgModule({
  declarations: [
    WorkSchedulesComponent,
    TaskLogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ]
})
export class ScheduleModule { }
