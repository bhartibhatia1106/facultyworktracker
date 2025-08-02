import { Component } from '@angular/core';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent {
  selectedTheme: string = 'light';

  applyTheme() {
    document.body.className = ''; // Clear previous theme
    document.body.classList.add(this.selectedTheme); // Add new theme
  }
}
