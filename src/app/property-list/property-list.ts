import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyCardComponent } from '../property/property-card/property-card.component';
import { HttpClient,  } from '@angular/common/http';

@Component({
  selector: 'app-property-list',
  standalone : true,
  imports: [
    CommonModule, 
    PropertyCardComponent, 
    ],
  templateUrl: './property-list.html',
  styleUrls: ['./property-list.css']
})

export class PropertyListComponent implements OnInit{
  properties: any[] = [];

  constructor (private http:HttpClient) {

  }

  ngOnInit(): void {
    this.http.get<any[]>('properties.json')
    .subscribe(data => {
      this.properties = data;
      console.log(data);
  });
  }
}
