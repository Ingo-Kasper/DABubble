import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';  // Importiert die Routen für die Anwendung.
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';

/**
 * Firebase-Konfigurationsobjekt.
 * Hier werden die Verbindungsdetails zur Firebase-Datenbank und Authentifizierung definiert.
 * Die Werte wie apiKey und authDomain stammen von deinem Firebase-Projekt.
 */
const firebaseConfig = {
  apiKey: "AIzaSyD0sL9Yy4C9phaBc8FXOxcJb2SmEa3OkLo",
  authDomain: "dabubble-projekt-von-kasper.firebaseapp.com",
  projectId: "dabubble-projekt-von-kasper",
  storageBucket: "dabubble-projekt-von-kasper.firebasestorage.app",
  messagingSenderId: "264595788933",
  appId: "1:264595788933:web:97aada3641ca4a1b4c05ec",
};

/**
 * Die Konfiguration für die Angular-Anwendung.
 * Hier werden verschiedene Module und Dienste initialisiert und bereitgestellt.
 */
export const appConfig: ApplicationConfig = {
  providers: [
    /**
     * Stellt die Zonenerkennungsmechanismen bereit und ermöglicht Event-Coalescing (Verbundene Ereignisse zusammenfassen).
     */
    provideZoneChangeDetection({ eventCoalescing: true }),

    /**
     * Fügt den Router hinzu, der für das Routing in der Anwendung verantwortlich ist.
     * Die `routes` werden importiert, um die Navigationsstruktur der Anwendung zu definieren.
     */
    provideRouter(routes),

    /**
     * Stellt die Möglichkeit bereit, Client-Hydration durchzuführen.
     * Dies sorgt dafür, dass Angular den DOM nach dem Server-Side Rendering korrekt wiederherstellt.
     */
    provideClientHydration(),

    /**
     * Stellt Firebase bereit, indem die Firebase-App mit den Konfigurationsdaten initialisiert wird.
     */
    provideFirebaseApp(() => initializeApp(firebaseConfig)),

    /**
     * Stellt den Authentifizierungsdienst von Firebase bereit, der für die Benutzeranmeldung und -registrierung zuständig ist.
     * Mit `getAuth()` wird die Authentifizierungsinstanz erstellt.
     */
    provideAuth(() => getAuth()),
  ],
};
