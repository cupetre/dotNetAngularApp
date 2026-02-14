import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, Validator, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from '../../../services/auth-service.service';
import { User } from '../../../model/user';
import * as alertify from 'alertifyjs';
import { AlertifyServiceService } from '../../../services/alertify-service.service';

@Component({
  selector: 'app-user-register',
  standalone: true,
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
  imports: [ReactiveFormsModule,
    CommonModule,
    FormsModule
  ]
})

export class UserRegisterComponent implements OnInit {

  registrationForm!: FormGroup;
  user: User | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private authService: AuthServiceService,
    private alertify: AlertifyServiceService
  ) {}

  ngOnInit() {
    /* this.registrationForm = new FormGroup({
      userName: new FormControl('Mark', Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl(null, [Validators.required]),
      mobile: new FormControl(null, [Validators.required, Validators.maxLength(30)])
    }, { validators: this.passwordMatchingValidator });*/
    this.createRegisterationForm();
  };

  createRegisterationForm() {
    this.registrationForm = this.fb.group({
      userName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      confirmPassword: [null, Validators.required],
      mobile: [null, [Validators.required, Validators.maxLength(30)]]
    }, { validators: this.passwordMatchingValidator });
    };

  passwordMatchingValidator: ValidatorFn = (
    control: AbstractControl
  ): ValidationErrors | null => {
    const password = control.get('password')?.value; 
    const confirmPassword = control.get('confirmPassword')?.value;

    if (!password || !confirmPassword) {
      return null;
    }

    return password === confirmPassword ? null : {notMatched : true} ;
  };

  userData(): User {
    return this.user = {
      userName: this.userName.value,
      email: this.email.value,
      password: this.password.value,
      mobile: this.mobile.value
    }
  }

  get userName() {
    return this.registrationForm.get('userName') as FormControl;
  }

  get email() {
    return this.registrationForm.get('email') as FormControl;
  }

  get password() {
    return this.registrationForm.get('password') as FormControl;
  }

  get confirmPassword() {
    return this.registrationForm.get('confirmPassword') as FormControl;
  }

  get mobile() {
    return this.registrationForm.get('mobile') as FormControl;
  }

  onSubmit() {
    if (this.registrationForm.invalid) {
      this.registrationForm.markAllAsTouched();
      alertify.error('Please correct the errors in the form.');
      return;
    } 

    const { email, password } = this.registrationForm.value;
    this.authService.register(email, password).subscribe(
      (response) => {
        this.registrationForm.reset();
        alertify.success('Registration Successful! Please login.');
        this.router.navigate(['/user-login']);
      },
      (error) => {
        console.log('Registration error', error);
        alertify.error('Registration failed: ' + (error.error?.message || 'Unknown error'));
      }
    );
  }  
}