import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink],
  templateUrl: './error.component.html',
  styleUrl: './error.component.css',
})
export class ErrorComponent {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }
}
