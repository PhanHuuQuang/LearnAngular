import { Component } from '@angular/core';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }

  clickDownloadMyCV() {
    alert('Not impliment yet');
  }

  clickExploreMore() {
    alert('Not impliment yet');
  }
}
