import { NgIf } from '@angular/common';
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgIf],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() openDetailInforState = false; // State passed from the parent
  @Output() toggleDetail = new EventEmitter<boolean>(); // Emit event when clicked

  private router = inject(Router);

  clickDetailInformation() {
    // this.toggleDetail.emit(true); // Emit true to show the information component
    this.router.navigate(['information']);
  }

  closeDetailInformation() {
    // this.toggleDetail.emit(false); // Emit false to hide the information component
  }

  clickMore() {
    return alert('Under construction');
  }
}
