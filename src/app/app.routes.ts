import { Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillComponent } from './skill/skill.component';
import { ProjectComponent } from './project/project.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'skill', component: SkillComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: ErrorComponent },
];
