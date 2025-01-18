import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server'; // Unterstützt serverseitiges Rendering (SSR)

// Importiert die allgemeine Konfiguration der Anwendung aus einer separaten Datei
import { appConfig } from './app.config';

// Definiert spezifische Konfigurationen für die serverseitige Anwendung
const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering() // Fügt Anbieter für serverseitiges Rendering hinzu
  ]
};

// Kombiniert die allgemeine Anwendungskonfiguration mit der serverseitigen Konfiguration
export const config = mergeApplicationConfig(appConfig, serverConfig);
