import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Router } from 'express';

@Component({
  selector: 'app-registrieren',
  standalone: true,
  imports: [],
  templateUrl: './registrieren.component.html',
  styleUrl: './registrieren.component.scss'
})
export class RegistrierenComponent {

    /**
   * @fb muss noch inject werden und schauen was genau das macht
   */
  fb = inject(FormBuilder);
  http = inject(HttpClient);
  router = inject(Router);

  form = this.fb,nonNullable.group({
    Username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required]
  })

  onSubmit(): void {
    console.log('Registriert');
  }
}
