import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeachersComponent } from './teachers/teachers.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TeachersComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class FacultyModule { }
