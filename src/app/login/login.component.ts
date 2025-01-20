import { Component, inject } from '@angular/core'; // Basis für die Erstellung einer Angular-Komponente
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'; // Werkzeuge für reaktive Formulare

/** 
 * Dekorator, der die Metadaten für die `LoginComponent` definiert.
 */
@Component({
  selector: 'app-login', // Der CSS-Selektor, mit dem die Komponente in HTML referenziert wird
  standalone: true, // Gibt an, dass die Komponente keine anderen Module benötigt
  imports: [ReactiveFormsModule], // Importiert das Modul für reaktive Formulare
  templateUrl: './login.component.html', // Pfad zur HTML-Datei der Komponente
  styleUrl: './login.component.scss', // Pfad zur SCSS-Styling-Datei der Komponente
})
export class LoginComponent {
  /**
   * Instanz des FormBuilder, um Formulare dynamisch zu erstellen.
   */
  fb = inject(FormBuilder);

  // http = inject(HttpClient);
  // router = inject(Router);

  /**
   * Reaktives Formular mit den Feldern `email` und `password`.
   * Beide Felder sind erforderlich (Validators.required).
   */
  form = this.fb.nonNullable.group({
    Email: ['', Validators.required], // E-Mail-Feld mit Validierung
    Password: ['', Validators.required], // Passwort-Feld mit Validierung
  });

  /**
   * Methode, die aufgerufen wird, wenn das Formular abgesendet wird.
   * Aktuell wird nur eine Nachricht in der Konsole ausgegeben.
   */
  onSubmit(): void {
    console.log('submit'); // Gibt eine Meldung aus, wenn das Formular abgesendet wird
  }
}
