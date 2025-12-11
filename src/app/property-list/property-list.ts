import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyCardComponent } from '../property/property-card/property-card.component';

@Component({
  selector: 'app-property-list',
  standalone: true,
  imports: [CommonModule, PropertyCardComponent],  // needed for *ngFor and child component
  templateUrl: './property-list.html',
  styleUrls: ['./property-list.css']
})
export class PropertyListComponent {
  properties = [
    { id: 1, Type: "House1", Price: 1200, Name: "Plafon" },
    { id: 2, Type: "House2", Price: 1200, Name: "Plafon" },
    { id: 3, Type: "House3", Price: 1200, Name: "Plafon" },
    { id: 4, Type: "House4", Price: 1200, Name: "Plafon" },
    { id: 2, Type: "House2", Price: 1200, Name: "Plafon" },
    { id: 3, Type: "House3", Price: 1200, Name: "Plafon" },
    { id: 4, Type: "House4", Price: 1200, Name: "Plafon" },
    { id: 2, Type: "House2", Price: 1200, Name: "Plafon" },
    { id: 3, Type: "House3", Price: 1200, Name: "Plafon" },
    { id: 4, Type: "House4", Price: 1200, Name: "Plafon" }
  ];
}
