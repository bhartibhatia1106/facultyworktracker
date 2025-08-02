import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';


import { SettingsModule } from './settings/settings.module';
import { TaskLogComponent } from './schedule/task-log/task-log.component';
import { FormsModule } from '@angular/forms';
import { ScheduleModule } from './schedule/schedule.module';
import { FacultyModule } from './faculty/faculty.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AuthModule,
    SharedModule,
    SettingsModule,
    ScheduleModule,
    FacultyModule,
    HomeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
