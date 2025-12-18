import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-property',
  standalone: true,
  templateUrl: './add-property.component.html',
  imports: [CommonModule,
    FormsModule
  ],
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  @ViewChild('Form') addPropertyForm!: NgForm;
  required = 'true';
  minlength = 5;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  onBack() {
    this.router.navigate(['/']);
  }

  OnSubmit(Form : NgForm) { 
    console.log("works fine");
    console.log(this.addPropertyForm);
  }

}
