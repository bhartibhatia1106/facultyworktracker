import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeachersComponent } from './teachers/teachers.component';
import { FormsModule } from '@angular/forms';
import { TrDetailsComponent } from './tr-details/tr-details.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TeachersComponent,
    TrDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class FacultyModule { }
