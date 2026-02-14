import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyCardComponent } from '../property/property-card/property-card.component';
import { HousingService } from '../services/housing.service';
import { Ipropertybase } from '../model/ipropertybase';
import { ActivatedRoute } from '@angular/router';

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

  SellRent = 1;
  properties: Array<Ipropertybase> = [];

  constructor (private housingService: HousingService, 
    private route:ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    if ( this.route.snapshot.url.toString().includes('rent')) {
      this.SellRent = 2;
    }
    this.housingService.getAllProperties(this.SellRent).subscribe(
       data => {
        this.properties = data;
        console.log(data);
        console.log(this.route.snapshot.url.toString());
       }, error => {
        console.log('httperror');
       }
    )
  };
}
