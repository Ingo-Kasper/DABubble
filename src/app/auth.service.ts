import { inject, Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { updateProfile } from 'firebase/auth';
import { from, Observable } from 'rxjs';

/**
 * AuthService ist für die Verwaltung der Benutzeranmeldung und -registrierung zuständig.
 * Er stellt Methoden bereit, um sich mit Firebase zu authentifizieren.
 */
@Injectable({
  providedIn: 'root'  // Der Service wird in der gesamten Anwendung verfügbar gemacht.
})
export class AuthService {

  /**
   * Firebase Auth-Dienst, der für Authentifizierungsoperationen verwendet wird.
   */
  firebaseAuth = inject(Auth);

  /**
   * Diese Methode registriert einen neuen Benutzer mit der angegebenen E-Mail-Adresse,
   * dem Benutzernamen und dem Passwort.
   * 
   * Sie verwendet Firebase's `createUserWithEmailAndPassword`-Funktion, um den Benutzer zu erstellen,
   * und `updateProfile`, um den Benutzernamen zu setzen.
   * 
   * @param email - Die E-Mail-Adresse des neuen Benutzers.
   * @param username - Der Benutzername, der dem neuen Benutzer zugewiesen wird.
   * @param password - Das Passwort des neuen Benutzers.
   * @returns Observable<void> - Ein Observable, das auf die erfolgreiche Erstellung des Benutzers wartet.
   */
  register(
    email: string, 
    username: string, 
    password: string
  ): Observable<void> {

    // Erzeugt einen neuen Benutzer mit E-Mail und Passwort und setzt den Benutzernamen.
    const promise = createUserWithEmailAndPassword(
      this.firebaseAuth, 
      email, 
      password,
    ).then((response) =>
      // Setzt den Benutzernamen des neuen Benutzers.
      updateProfile(response.user, { displayName: username }),
    );

    // Wandelt das Promise in ein Observable um und gibt es zurück.
    return from(promise);
  }

  constructor() { }
}
