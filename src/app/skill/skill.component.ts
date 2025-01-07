import { NgFor, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
// import { fas } from '@fortawesome/free-solid-svg-icons';
import {
  faAngular,
  fab,
  faCss3,
  faHtml5,
  faJava,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [FontAwesomeModule, NgFor, NgStyle],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.css',
})
export class SkillComponent {
  faHtml5 = faHtml5;
  faCss3 = faCss3;
  faJs = faJsSquare;
  faAngular = faAngular;
  faReact = faReact;
  faJava = faJava;

  skillList = [
    { icon: this.faHtml5, color: 'orangered', width: '100px' },
    { icon: this.faCss3, color: 'blue' },
    { icon: this.faJs, color: 'yellow' },
    { icon: this.faJava, color: '' },
    { icon: this.faAngular, color: 'red' },
    { icon: this.faReact, color: 'lightblue' },
  ];

  constructor(library: FaIconLibrary) {
    // library.addIconPacks(fas);
    library.addIconPacks(fab);
  }
}
