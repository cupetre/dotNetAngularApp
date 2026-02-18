import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyCardComponent } from '../property-card/property-card.component';
import { HousingService } from '../services/housing.service';
import { ActivatedRoute } from '@angular/router';
import { FilterPipe } from "../Pipes/filter.pipe";
import { SortPipe } from "../Pipes/sort.pipe";
import { Iproperty } from '../model/iproperty';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-property-list',
  standalone : true,
  imports: [
    CommonModule,
    PropertyCardComponent,
    FilterPipe,
    SortPipe,
    FormsModule
],
  templateUrl: './property-list.html',
  styleUrls: ['./property-list.css']
})

export class PropertyListComponent implements OnInit{

  SellRent = 1;
  properties: Array<Iproperty> = [];

  //for filter and sort
  bhkOptions = [1,2,3,4,5];
  propertyTypes = ['House','Apartment','Duplex'];
  furnishTypes = ['Furnished','Semi-Furnished','Unfurnished'];

  selectedType = '';
  selectedFurnish = '';
  selectedBHK: number = 0;
  sortField = '';
  sortDirection = '';

  constructor (
    private housingService: HousingService, 
    private route:ActivatedRoute
  ) {

  }

  resetFilters() {
    this.selectedType = '';
    this.selectedFurnish = '';
    this.selectedBHK = 0;
    this.sortField = '';
    this.sortDirection = 'asc';
  };

  ngOnInit(): void {

  this.route.url.subscribe(url => {

    if (url.toString().includes('rent')) {
      this.SellRent = 2;
    } else {
      this.SellRent = 1;
    }

    this.housingService.getAllProperties(this.SellRent)
      .subscribe(data => {
        this.properties = data;
      });

  });

}

}
