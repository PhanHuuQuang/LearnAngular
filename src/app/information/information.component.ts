import { Component } from '@angular/core';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import {
  inforTitleList,
  projectList,
  projectTableTitle,
} from './information.constants';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-information',
  standalone: true,
  imports: [FontAwesomeModule, NgFor, NgIf],
  templateUrl: './information.component.html',
  styleUrl: './information.component.css',
})
export class InformationComponent {
  inforTitleList = inforTitleList;
  projectList = projectList;
  projectTableTitle = projectTableTitle;

  openProjectId: number;

  constructor(library: FaIconLibrary) {
    this.openProjectId = 0;
    library.addIconPacks(fas);
  }

  openProjectInfor(projectId: number) {
    if (projectId === this.openProjectId) {
      return (this.openProjectId = 0);
    }
    return (this.openProjectId = projectId);
  }
}
