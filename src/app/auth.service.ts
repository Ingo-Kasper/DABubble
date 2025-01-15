import { inject, Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { response } from 'express';
import { updateProfile } from 'firebase/auth';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  firebaseAuth = inject(Auth);

  register(
    email: string, 
    username: string, 
    password:string)
    : Observable<void> {
    const promise = createUserWithEmailAndPassword(
      this.firebaseAuth, 
      email, 
      password,
    ).then((response) =>
      updateProfile(response.user, { displayName: username }),
    );

    return from(promise);
  }

  constructor() { }
}
