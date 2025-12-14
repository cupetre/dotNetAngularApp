import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyCardComponent } from '../property/property-card/property-card.component';
import { HousingService } from '../services/housing.service';
import { iProperty } from '../iProperty';

@Component({
  selector: 'app-property-list',
  standalone : true,
  imports: [
    CommonModule, 
    PropertyCardComponent
    ],
  templateUrl: './property-list.html',
  styleUrls: ['./property-list.css']
})

export class PropertyListComponent implements OnInit{
  
  properties: Array<iProperty> = [];

  constructor (private housingService: HousingService) {

  }

  ngOnInit(): void {
    this.housingService.getAllProperties().subscribe(
       data => {
        this.properties = data;
        console.log(data);
       }
    )
  };
}
