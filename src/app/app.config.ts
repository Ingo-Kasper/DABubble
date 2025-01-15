import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideFirebaseApp, initializeApp  } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD0sL9Yy4C9phaBc8FXOxcJb2SmEa3OkLo",
  authDomain: "dabubble-projekt-von-kasper.firebaseapp.com",
  projectId: "dabubble-projekt-von-kasper",
  storageBucket: "dabubble-projekt-von-kasper.firebasestorage.app",
  messagingSenderId: "264595788933",
  appId: "1:264595788933:web:97aada3641ca4a1b4c05ec"
};

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideClientHydration(),
  importProvidersFrom([
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth())
  ]),
],
};
