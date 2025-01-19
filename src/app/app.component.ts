import { Component } from '@angular/core'; // Basis-Dekorator für Angular-Komponenten
import { RouterLink, RouterOutlet } from '@angular/router'; // Erlaubt das Einbinden von Routeninhalten in die Komponente

@Component({
  selector: 'app-root', // Der HTML-Tag, der diese Komponente repräsentiert
  standalone: true, // Standalone-Komponenten benötigen kein Angular-Modul (ab Angular 14 möglich)
  imports: [RouterOutlet, RouterLink], // Importiert zusätzliche Angular-Module für diese Komponente, hier RouterOutlet für Routing
  templateUrl: './app.component.html', // Verweist auf die HTML-Vorlage der Komponente
  styleUrl: './app.component.scss' // Verweist auf die CSS-Datei der Komponente
})

export class AppComponent {
  // Titel der Anwendung, kann in der Komponente oder im Template verwendet werden
  title = 'DABubble';

  // Methode zum Logout
  logout() {
    // Wird ausgeführt, wenn der Benutzer auf den Logout-Bereich klickt
    console.log('Benutzer wurde ausgeloggt'); // Gibt "logout" in der Konsole aus
  }
}
