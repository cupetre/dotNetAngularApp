import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Iproperty } from '../model/iproperty';
import { HousingService } from '../services/housing.service';

@Component({
  selector: 'app-add-property',
  standalone: true,
  templateUrl: './add-property.component.html',
  imports: [CommonModule,
    FormsModule, ReactiveFormsModule],
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  cityList: any[] = [];

  currentTab: number = 0 ;
  required = false;
  minlength = 5;

  bhkOptions = [1,2,3,4,5];
  propertyTypes = ['House','Apartment','Duplex'];
  furnishTypes = ['Furnished','Semi-Furnished','Unfurnished']

  property: Iproperty = {
    id: 0,
    SellRent: 1,
    Name: '',
    Type: '',
    Price: 0,
    BHK: 0,
    FurnishingType: '',
    Image: 'default.png',
    Street: '',
    City: 'Select City',
    Zipcode: '',
    RTM: 0,
    DateStart: '',
    DateEnd: '',
    Description: ''
  }

  @ViewChild('Form') addPropertyForm!: NgForm;

  constructor(private router:Router,
    private housingService: HousingService
  ) { }

  ngOnInit() {
    this.housingService.getAllCities().subscribe( data => {
      this.cityList = data;
      console.log(data);
    })
  }

  onPhotoSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      this.property = { ...this.property, Image: reader.result as string };
    };

    reader.readAsDataURL(file);
  }

  nextTab() {
    if( this.currentTab < 3 ) this.currentTab++;
  }

  prevTab() {
    if ( this.currentTab > 0 ) this.currentTab--;
  }

  onBack() {
    this.router.navigate(['/']);
  }

  OnSubmit(Form : NgForm) {
    if (Form.valid) {
      this.housingService.addProperty(this.property);
      this.router.navigate(['/']);
    }
  }

  isCurrentTabValid(): boolean {
    switch (this.currentTab) {
      case 0:return this.addPropertyForm.controls['basicInfo']?.valid || false;
      case 1:return this.addPropertyForm.controls['priceInfo']?.valid || false;
      case 2:return this.addPropertyForm.controls['addressInfo']?.valid || false;
      case 3:return this.addPropertyForm.controls['otherInfo']?.valid || false;
      case 4:return this.addPropertyForm.controls['photoInfo']?.valid || false;
      default:return false;
    }
  }

}
