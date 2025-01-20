import { Component, inject } from '@angular/core'; // Basis für die Erstellung einer Angular-Komponente
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'; // Werkzeuge für reaktive Formulare und Validierung
import { AuthService } from '../auth.service'; // Authentifizierungsservice, um die Registrierung zu handhaben
import { Router } from '@angular/router';

/**
 * Dekorator, der die Metadaten für die `RegistrierenComponent` definiert.
 */
@Component({
  selector: 'app-registrieren', // Identifiziert die Komponente in HTM
  standalone: true, // Gibt an, dass die Komponente unabhängig von anderen Modulen verwendet werden kann
  imports: [ReactiveFormsModule], // Importiert das Modul für reaktive Formulare
  templateUrl: './registrieren.component.html', // Pfad zur HTML-Datei der Komponente
  styleUrl: './registrieren.component.scss' // Pfad zur SCSS-Styling-Datei der Komponente
})
export class RegistrierenComponent {

  fb = inject(FormBuilder); // Zum Erstellen von Formularen.
  router = inject(Router); // Zum Navigieren nach Registrierung.
  authService = inject(AuthService); // Authentifizierungshandling.

  /**
   * Reaktives Formular mit den Feldern `Username`, `email` und `password`.
   * Alle Felder sind als erforderlich markiert (Validators.required).
   */
  form = this.fb.nonNullable.group({
    Username: ['', Validators.required],
    Email: ['', Validators.required],
    Password: ['', Validators.required],
  });

  /**
   * Methode, die aufgerufen wird, wenn das Formular abgesendet wird.
   * Aktuell wird nur eine Nachricht in der Konsole ausgegeben.
   */
  onSubmit(): void {
    const rawForm = this.form.getRawValue();
    this.authService.register(rawForm.Email, rawForm.Username , rawForm.Password).subscribe(() => {
      this.router.navigateByUrl('/');
    })
  }
}
