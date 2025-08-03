import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';
import { Router, RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgChartsModule,
    RouterModule
  ],
  exports:[DashboardComponent]
})
export class HomeModule { }
