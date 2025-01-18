import { HttpClient } from '@angular/common/http'; // Ermöglicht HTTP-Anfragen
import { Component, inject } from '@angular/core'; // Basis für die Erstellung einer Angular-Komponente
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'; // Werkzeuge für reaktive Formulare und Validierung
import { Router } from 'express'; // Router zur Navigation zwischen Seiten
import { AuthService } from '../auth.service'; // Authentifizierungsservice, um die Registrierung zu handhaben

/**
 * Dekorator, der die Metadaten für die `RegistrierenComponent` definiert.
 */
@Component({
  selector: 'app-registrieren', // Der CSS-Selektor, mit dem die Komponente in HTML referenziert wird
  standalone: true, // Gibt an, dass die Komponente unabhängig von anderen Modulen verwendet werden kann
  imports: [ReactiveFormsModule], // Importiert das Modul für reaktive Formulare
  templateUrl: './registrieren.component.html', // Pfad zur HTML-Datei der Komponente
  styleUrl: './registrieren.component.scss' // Pfad zur SCSS-Styling-Datei der Komponente
})
export class RegistrierenComponent {
  /**
   * Instanz des FormBuilder, um Formulare dynamisch zu erstellen.
   */
  fb = inject(FormBuilder);

  /**
   * Instanz des HttpClient, um HTTP-Anfragen zu stellen.
   */
  http = inject(HttpClient);

  /**
   * Instanz des AuthService, um Registrierungsvorgänge durchzuführen.
   */
  authService = inject(AuthService);

  /**
   * Instanz des Routers, um nach erfolgreicher Registrierung zu einer anderen Seite zu navigieren.
   */
  router = inject(Router);

  /**
   * Reaktives Formular mit den Feldern `Username`, `email` und `password`.
   * Alle Felder sind als erforderlich markiert (Validators.required).
   */
  form = this.fb.nonNullable.group({
    Username: ['', Validators.required], // Feld für den Benutzernamen
    email: ['', Validators.required], // Feld für die E-Mail-Adresse
    password: ['', Validators.required] // Feld für das Passwort
  });

  /**
   * Methode, die aufgerufen wird, wenn das Formular abgesendet wird.
   * Aktuell wird nur eine Nachricht in der Konsole ausgegeben.
   */
  onSubmit(): void {
    console.log('Registriert'); // Gibt eine Meldung aus, wenn das Formular abgesendet wird
    // Hier könnte die Logik hinzugefügt werden, um die Benutzerdaten an den Server zu senden.
  }
}
