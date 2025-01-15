import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from 'express';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registrieren',
  standalone: true,
  imports: [],
  templateUrl: './registrieren.component.html',
  styleUrl: './registrieren.component.scss'
})
export class RegistrierenComponent {

  fb = inject(FormBuilder);
  http = inject(HttpClient);
  authService = inject(AuthService)
  router = inject(Router);

  form = this.fb.nonNullable.group({
    Username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  onSubmit(): void {
    console.log('Registriert');
  }
}
