import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { ThemeComponent } from './theme/theme.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProfileComponent,
    ThemeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class SettingsModule { }
