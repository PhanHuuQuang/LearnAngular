import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { listButtonNavigate } from './menu.constants';
import { NgFor } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NgFor],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit {
  public currentLocation?: string;
  public listButtonNavigate = listButtonNavigate;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.currentLocation = event.url.slice(1);
      });
  }

  clickNavigate(navigate: string) {
    this.currentLocation = navigate;
    this.router.navigate([navigate]);
  }
}
