import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthServiceService } from '../../../services/auth-service.service';

@Component({
  selector: 'app-user-login',
  standalone: true,
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
  imports: [ReactiveFormsModule, CommonModule]
})
export class UserLoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthServiceService
  ) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  get email() {
    return this.loginForm.get('email') as FormControl;
  }

  get password() {
    return this.loginForm.get('password') as FormControl;
  }

  onLogin() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const { email, password } = this.loginForm.value;
    this.authService.login(email, password).subscribe(
      (response) => {
        console.log('Successful login');
        alert('Login successful!');
        this.router.navigate(['/']);
      },
      (error) => {
        console.log('Invalid credentials', error);
        alert('Login failed: Invalid email or password');
      }
    );
  }

}