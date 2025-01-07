import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgOptimizedImage, CommonModule, NgIf, NgClass } from '@angular/common';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgOptimizedImage,
    CommonModule,
    NgIf,
    NgClass,
    MenuComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  openDetailInforState = false; // State to manage the information component visibility

  // Method to toggle state based on the event emitted by CardComponent
  handleToggleDetail(state: boolean) {
    this.openDetailInforState = state;
  }

  handleScrollNavigate(event: unknown) {
    console.log(event);
  }
}
