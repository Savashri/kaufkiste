# Kaufkiste

Kaufkiste ist ein mobiler PWA-Prototyp fuer einen gemeinsam nutzbaren Einkaufszettel. Die App laeuft ohne eigene Anmeldung und ohne eigenen Server. Daten koennen als JSON-Datei importiert und exportiert werden, damit sie ueber iCloud, Dropbox oder Google Drive geteilt werden koennen.

## Funktionen

- Einkaufszettel anlegen und bearbeiten
- Standardmodus nach dem Anlegen: Planen
- Artikel aus dem Portfolio aktivieren
- Mengen im Zettel und Portfolio pflegen
- Zuletzt genutzte Menge im Portfolio speichern
- Einkaufsmodus mit kompakter mobiler Ansicht
- Gekauft markierte Artikel werden deaktiviert und verschwinden aus der Einkaufsliste
- Reihenfolge per Drag and Drop im Zettel und Portfolio anpassen
- Reihenfolgestatistik fuer typische Einkaufs- und Aktivierungspositionen
- Import und Export der JSON-Daten in den Einstellungen
- JSON-Leselink fuer direkte JSON-Dateien, Dropbox-Links und Google-Links
- JSON-Schreiblink fuer beschreibbare Endpunkte wie Google Apps Script oder Webhooks
- Deutsch und Englisch, weitere Sprachen leicht erweiterbar
- PWA-Unterstuetzung mit Manifest, Icons und Service Worker

## Lokal starten

Dieses Projekt ist eine statische App. Zum lokalen Testen reicht ein einfacher Webserver:

```bash
python3 -m http.server 8765
```

Danach ist die App unter `http://localhost:8765` erreichbar.

Fuer die Installation als PWA auf einem iPhone muss die App ueber HTTPS bereitgestellt werden. Lokales `file://` oder normales HTTP reicht fuer den Service Worker auf iOS nicht aus.

## Dateien

- `index.html`: Struktur der App
- `styles.css`: Mobile-first Layout und Design
- `app.js`: Anwendungslogik, Datenmodell, Import/Export und Drag and Drop
- `manifest.webmanifest`: PWA-Metadaten
- `sw.js`: Service Worker fuer Offline-Caching
- `icons/`: App-Icons

## Datenhaltung

Die App speichert lokal im Browser und kann den kompletten Datenstand als JSON exportieren. Diese JSON-Datei kann in einem synchronisierten Ordner liegen, zum Beispiel in iCloud, Dropbox oder Google Drive, und von mehreren Personen importiert/exportiert werden.

Zusaetzlich kann in den Einstellungen ein JSON-Leselink hinterlegt werden. Direkte JSON-URLs funktionieren, wenn der Anbieter den Zugriff aus dem Browser erlaubt. Dropbox-Freigabelinks und typische Google-Drive-/Google-Docs-Links werden in Download-Links umgewandelt; Google kann direkte Browser-Zugriffe je nach Freigabe und CORS-Regeln trotzdem blockieren.

Fuer echtes Speichern zu Google kann die Vorlage `docs/google-apps-script-storage.gs` als Google Apps Script Web App genutzt werden. Die `/exec`-URL wird in Kaufkiste als Lese- und Schreiblink eingetragen.
