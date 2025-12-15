import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-property-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})

export class PropertyCardComponent {
  @Input() property: any;
}