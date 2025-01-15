import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Router } from 'express';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  /**
   * @fb muss noch inject werden und schauen was genau das macht
   */
  fb = inject(FormBuilder);
  http = inject(HttpClient);
  router = inject(Router);

  form =this.fb.nonNullable.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  onSubmit() {
    console.log('submit');
  }
}
