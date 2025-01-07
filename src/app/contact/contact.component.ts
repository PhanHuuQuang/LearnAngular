import { Component } from '@angular/core';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faGithub,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FontAwesomeModule, NgFor],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  public linkIcon = [faFacebook, faGithub, faInstagram, faTwitter];

  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }
}
