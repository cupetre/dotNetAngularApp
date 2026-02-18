import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HousingService } from '../services/housing.service';
import { Iproperty } from '../model/iproperty';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css'],
  imports: [CommonModule],
  
})
export class PropertyDetailComponent implements OnInit {

  public propertyId!: number;
  public property?: Iproperty;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private housingService: HousingService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {

      this.propertyId = +params['id'];

      this.housingService.getPropertyById(this.propertyId)
        .subscribe(data => {
          this.property = data;

          console.log(this.propertyId, data);

          if ( !this.property ) {
            this.router.navigate(['/']); // if it doesnt exist go back
          }
        });
    });

  }

  onSelectedNext() {
    this.router.navigate(['detail-property/' + this.propertyId + 1]);
  }

  backToMain() {
    this.router.navigate(['/']);
  }

}
