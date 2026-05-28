# Projektdokumentation - Outfitr

## Inhaltsverzeichnis

1. [Ausgangslage](#1-ausgangslage)
2. [Lösungsidee](#2-lösungsidee)
3. [Vorgehen & Artefakte](#3-vorgehen--artefakte)
   - [3.1 Understand & Define](#31-understand--define)
   - [3.2 Sketch](#32-sketch)
   - [3.3 Decide](#33-decide)
   - [3.4 Prototype](#34-prototype)
   - [3.5 Validate](#35-validate)
4. [Erweiterungen](#4-erweiterungen)
5. [Projektorganisation](#5-projektorganisation)
6. [KI-Deklaration](#6-ki-deklaration)
7. [Anhang](#7-anhang)

## 1. Ausgangslage

Im Alltag besitzen viele Menschen eine grosse Anzahl an Kleidungsstücken, haben jedoch trotzdem Schwierigkeiten, schnell passende Outfits zusammenzustellen. Besonders im hektischen Alltag führt dies häufig zu Unsicherheit, Entscheidungsstress und Zeitverlust. Zusätzlich fehlt oft der Überblick über den eigenen Kleiderschrank, wodurch vorhandene Kleidung ineffizient genutzt wird.

Digitale Lösungen im Bereich Kleiderverwaltung fokussieren sich häufig hauptsächlich auf die Organisation von Kleidung, bieten jedoch nur eingeschränkte Unterstützung bei der eigentlichen Outfit-Auswahl. Moderne Anwendungen mit KI-Ansätzen liefern zwar teilweise Outfit-Vorschläge, diese wirken jedoch oft wenig personalisiert oder nicht ausreichend alltagstauglich.

Das Projekt „Outfitr“ verfolgt deshalb das Ziel, eine moderne und benutzerfreundliche Webapplikation zu entwickeln, welche Nutzerinnen und Nutzer bei der Verwaltung ihres digitalen Kleiderschranks sowie bei der schnellen Erstellung passender Outfit-Kombinationen unterstützt.

- **Problem:**  
  Viele Menschen haben Schwierigkeiten, passende Outfits aus ihrer vorhandenen Kleidung zusammenzustellen. Eine grosse Auswahl an Kleidungsstücken führt häufig zu Entscheidungsstress, Unsicherheit und ineffizienter Nutzung der vorhandenen Kleidung. Zusätzlich fehlt oft eine übersichtliche digitale Organisation des eigenen Kleiderschranks.

- **Ziele:**
  - Digitale Verwaltung des eigenen Kleiderschranks ermöglichen
  - Übersicht über vorhandene Kleidung schaffen
  - Schnelle Outfit-Kombinationen generieren
  - Benutzerfreundliche und moderne Bedienung bieten
  - Lieblings-Outfits speichern und organisieren
  - Die Outfit-Auswahl im Alltag vereinfachen

- **Primäre Zielgruppe:**  
  Die primäre Zielgruppe besteht aus Studierenden, jungen Erwachsenen sowie berufstätigen Personen mit wenig Zeit, die ihren Kleidungsstil einfacher organisieren und schneller passende Outfit-Kombinationen finden möchten.

- **Weitere Stakeholder:**  
  Weitere Stakeholder sind potenzielle zukünftige Nutzerinnen und Nutzer der Anwendung sowie Personen mit Interesse an digitalen Lifestyle- und Organisationslösungen.

## 2. Lösungsidee

Die Lösungsidee von „Outfitr“ besteht aus einer modernen Webapplikation, welche Nutzerinnen und Nutzer bei der digitalen Organisation ihres Kleiderschranks sowie bei der Erstellung passender Outfit-Kombinationen unterstützt. Ziel ist es, den Prozess der Outfit-Auswahl im Alltag einfacher, schneller und übersichtlicher zu gestalten.

Die Anwendung ermöglicht es, Kleidungsstücke mit Informationen wie Kategorie, Farbe, Stil und Bild zu erfassen und zentral zu verwalten. Basierend auf den gespeicherten Kleidungsstücken können mithilfe eines Outfit-Generators passende Outfit-Kombinationen erstellt werden. Zusätzlich können generierte Outfits gespeichert und als Favoriten markiert werden.

Ein besonderer Fokus lag auf einer einfachen Bedienung, einer übersichtlichen Navigation sowie einem modernen und minimalistischen Design. Die Anwendung wurde bewusst so gestaltet, dass wichtige Funktionen schnell erreichbar sind und Benutzerinnen und Benutzer möglichst wenig Aufwand bei der Verwaltung ihrer Kleidung haben.

- **Kernfunktionalität:**
  - Registrierung und Login mit Benutzeraccount
  - Verwaltung eines digitalen Kleiderschranks
  - Hochladen und Bearbeiten von Kleidungsstücken
  - Filterung nach Kategorien, Farben und Stilrichtungen
  - Outfit-Generator zur Erstellung passender Kombinationen
  - Speicherung generierter Outfits
  - Favoriten-System für Lieblings-Outfits
  - Unterstützung von Accessoires
  - Dark Mode für unterschiedliche Nutzungsumgebungen

- **Annahmen:**
  - Nutzerinnen und Nutzer möchten schneller passende Outfits finden
  - Eine digitale Organisation erleichtert den Überblick über vorhandene Kleidung
  - Personalisierte Outfit-Vorschläge erhöhen den Nutzen der Anwendung
  - Ein modernes und minimalistisches Design verbessert die Benutzererfahrung

- **Abgrenzung:**  
  Die Anwendung stellt keinen vollständigen KI-Stylisten dar und bietet keine professionelle Modeberatung. Ebenfalls nicht Bestandteil des Projekts sind Social-Funktionen, Shopping-Integrationen, mobile Apps oder automatische Bilderkennung von Kleidung.

## 3. Vorgehen & Artefakte

Die Entwicklung von Outfitr erfolgte iterativ anhand der im Unterricht behandelten Design-Thinking-Phasen. Ziel war es, schrittweise einen funktionalen und benutzerfreundlichen Prototypen für die digitale Verwaltung und Kombination von Kleidung zu entwickeln. Die einzelnen Phasen bauten dabei aufeinander auf und wurden mehrfach überarbeitet.

---

### 3.1 Understand & Define

## Zielgruppenverständnis

Zu Beginn des Projekts wurde untersucht, welche Probleme Personen im Alltag mit ihrer Kleidung und Outfitwahl haben. Dabei zeigte sich insbesondere, dass viele Nutzer:innen:

- den Überblick über ihre Kleidung verlieren
- Outfit-Kombinationen spontan schwierig finden
- selten getragene Kleidung vergessen
- ihre Kleidung nicht strukturiert organisieren können

Die Zielgruppe besteht primär aus modeinteressierten Personen zwischen 18 und 35 Jahren, die ihren Kleiderschrank digital verwalten möchten und Inspiration für Outfit-Kombinationen suchen.

Zusätzlich wurden bestehende Lösungen analysiert. Viele vorhandene Apps fokussieren sich entweder stark auf Social Media oder bieten nur einfache Kleiderschrankfunktionen ohne intelligente Outfit-Kombinationen.

## Wesentliche Erkenntnisse

- Nutzer:innen wünschen eine einfache und übersichtliche Bedienung
- Die Outfit-Erstellung soll schnell und intuitiv funktionieren
- Ein modernes und minimalistisches Design erhöht die Benutzerfreundlichkeit
- Die Verwaltung von Kleidung muss visuell verständlich sein
- Favoriten und gespeicherte Outfits sollen getrennt organisiert werden
- Dark Mode wurde von mehreren Testpersonen als wichtig wahrgenommen

---

### 3.2 Sketch

## Variantenüberblick

In der Sketch-Phase wurden verschiedene Ideen für Navigation, Layout und Seitenstruktur entwickelt. Dabei wurden unterschiedliche Varianten für:

- Dashboard-Aufbau
- Navigation
- Outfit-Generator
- Karten-Design
- Filterfunktionen

skizziert und verglichen.

Ein Fokus lag auf einer möglichst klaren Benutzerführung und einer modernen Fashion-Ästhetik.

## Skizzen

Die ersten Ideen wurden zunächst als einfache Wireframes und anschliessend als klickbarer Figma-Prototyp umgesetzt. Dabei wurden unterschiedliche Varianten für die Platzierung von Navigationselementen, Filtern und Outfitkarten getestet.

Das erste klickbare Mockup wurde in Figma erstellt und diente zur frühen Visualisierung der Benutzeroberfläche sowie der Navigationsstruktur.

Figma-Prototyp:  
https://www.figma.com/proto/oPUdm8AdTCGR2CFPVoNsk1/Untitled

---

### 3.3 Decide

## Gewählte Variante & Begründung

Nach dem Vergleich verschiedener Layouts wurde eine Sidebar-Navigation mit klar getrennten Bereichen gewählt. Diese Variante überzeugte insbesondere durch:

- einfache Orientierung
- gute Erweiterbarkeit
- moderne Optik
- klare Trennung der Funktionen

Zusätzlich wurde ein minimalistisches UI mit grossen Karten und viel Weissraum gewählt, um die Bedienung möglichst angenehm und übersichtlich zu gestalten.

## End-to-End-Ablauf

Der Hauptworkflow der Anwendung besteht aus folgenden Schritten:

1. Registrierung oder Login
2. Kleidungsstücke hochladen
3. Kleidung filtern und verwalten
4. Outfit generieren
5. Outfit speichern
6. Outfit als Favorit markieren
7. Favoriten separat verwalten

Die Benutzerführung wurde bewusst einfach gehalten, damit zentrale Funktionen schnell erreichbar sind.

## Mockup

Das finale Mockup wurde in Figma erstellt und diente als Grundlage für die technische Umsetzung.

Figma-Link:  
https://www.figma.com/proto/oPUdm8AdTCGR2CFPVoNsk1/Untitled

---

### 3.4 Prototype

#### 3.4.1 Entwurf (Design)

### Informationsarchitektur

Die Anwendung wurde in mehrere Hauptbereiche unterteilt:

- Home / Dashboard
- Wardrobe
- Generator
- Outfits
- Favoriten
- Profil/Login

Die Navigation erfolgt über eine Sidebar, wodurch alle wichtigen Bereiche jederzeit erreichbar sind.

### User Interface Design

Das Design von Outfitr orientiert sich an modernen Fashion- und Lifestyle-Webseiten. Ziel war eine minimalistische und hochwertige Benutzeroberfläche.

Verwendet wurden:

- grosse Kartenlayouts
- klare Typografie
- dezente Schatten und Rundungen
- reduzierte Farbpalette
- konsistente Buttons und Eingabefelder

Für die Anwendung wurden sowohl ein Light Mode als auch ein Dark Mode umgesetzt.

---

## Farbpalette

Die Farbpalette basiert auf neutralen Beige-, Braun- und Off-White-Tönen, um einen modernen und eleganten Fashion-Look zu erzeugen. Für den Light Mode und Dark Mode wurden bewusst ähnliche Farbtöne verwendet, damit die visuelle Identität der Anwendung konsistent bleibt.

### Light Mode

| Zweck              | HEX     |
| ------------------ | ------- |
| Hintergrund        | #F7F5F2 |
| Primärfarbe        | #4A3434 |
| Sekundärfarbe      | #6A4B4B |
| Akzentfarbe        | #E5DDD5 |
| Zusatzfarbe        | #6F6A64 |
| Dunkle Akzentfarbe | #1F1B16 |

![Light Mode Farbpalette](doc/images/farbpalette-ligth.jpeg)

Abbildung X: Farbpalette des Light Modes

---

### Dark Mode

| Zweck             | HEX     |
| ----------------- | ------- |
| Hintergrund       | #111010 |
| Primärfläche      | #1D1717 |
| Sekundärfläche    | #261E1E |
| Primärfarbe       | #4A3838 |
| Akzentfarbe       | #A1866F |
| Helle Akzentfarbe | #D8C7BC |
| Text Hell         | #FFF8F2 |
| Zusatzfarbe       | #E2C3AF |

![Dark Mode Farbpalette](doc/images/farbpalette-dark.jpeg)

Abbildung X: Farbpalette des Dark Modes

---

### Designentscheidungen

Wichtige Designentscheidungen:

- Sidebar statt Top-Navigation für bessere Übersicht
- grosse Karten für bessere visuelle Darstellung
- Dark Mode für moderne Benutzererfahrung
- Trennung zwischen Outfits und Favoriten
- Icons statt Textsymbole für bessere Verständlichkeit
- responsive Gestaltung für verschiedene Bildschirmgrössen

---

#### 3.4.2 Umsetzung (Technik)

### Technologie-Stack

Für die Umsetzung wurden folgende Technologien verwendet:

- SvelteKit
- JavaScript
- HTML / CSS
- Supabase
- Netlify

### Tooling

Verwendete Tools:

- Visual Studio Code
- GitHub
- Netlify
- Figma
- Supabase
- Chrome DevTools

### Struktur & Komponenten

Die Anwendung wurde komponentenbasiert aufgebaut.

Wichtige Seiten und Komponenten:

- Dashboard
- Wardrobe
- Outfit Generator
- Outfit Cards
- Favoriten
- Login / Registrierung
- Sidebar Navigation
- User Dropdown
- Dark Mode Toggle

Die Struktur wurde so gewählt, dass Komponenten mehrfach verwendet werden können.

### Daten & Schnittstellen

Die Daten werden in Supabase gespeichert.

Dabei werden unter anderem gespeichert:

- Benutzerkonten
- Kleidungsstücke
- Outfit-Kombinationen
- Favoriten
- Bildpfade

Bilder werden über Supabase Storage verwaltet.

Die Kommunikation erfolgt über die Supabase-API.

### Deployment

Die Anwendung wurde über Netlify deployed.

Deployment-URL:  
https://outfitr-app.netlify.app/

### Besondere Entscheidungen

Während der Umsetzung wurden mehrere Vereinfachungen vorgenommen:

- Fokus auf Kernfunktionen statt vollständiger Produktumfang
- lokale Zustandsverwaltung statt komplexes State-Management
- einfache Outfitlogik statt KI-basierter Empfehlung
- Accessoires als optionale Ergänzung statt Pflichtbestandteil

Diese Entscheidungen ermöglichten eine stabile und übersichtliche Umsetzung innerhalb des Projektumfangs.

---

### 3.5 Validate

## URL der getesteten Version

https://outfitr-app.netlify.app/

## Ziele der Prüfung

Mit der Evaluation sollten insbesondere folgende Fragen beantwortet werden:

- Ist die Navigation verständlich?
- Können Nutzer:innen intuitiv Outfits generieren?
- Ist die Trennung zwischen Outfits und Favoriten nachvollziehbar?
- Werden wichtige Funktionen schnell gefunden?
- Ist das Design übersichtlich und angenehm?
- Funktioniert der Dark Mode verständlich?

## Vorgehen

Die Tests wurden moderiert durchgeführt.

Die Testpersonen erhielten konkrete Aufgaben und wurden während der Nutzung beobachtet. Zusätzlich wurden Rückfragen gestellt und Beobachtungen dokumentiert.

Die Tests fanden lokal auf einem Notebook statt.

## Stichprobe

Die Tests wurden mit mehreren Personen aus dem privaten Umfeld durchgeführt.

Die Testpersonen waren zwischen 20 und 30 Jahre alt und verfügten über unterschiedliche technische Kenntnisse.

## Aufgaben / Szenarien

Die Testpersonen mussten unter anderem folgende Aufgaben lösen:

1. Registrierung und Login durchführen
2. Neues Kleidungsstück hinzufügen
3. Kleidung filtern
4. Outfit generieren
5. Outfit speichern
6. Outfit als Favorit markieren
7. Favoriten wiederfinden
8. Dark Mode aktivieren

## Kennzahlen & Beobachtungen

Beobachtete Erkenntnisse:

- Navigation wurde schnell verstanden
- Dashboard wurde positiv bewertet
- Die Outfit-Seite war anfangs teilweise verwirrend
- Favoriten wurden zunächst nicht klar erkannt
- Der Dark Mode hatte anfangs Kontrastprobleme
- Die Upload-Funktion wurde als einfach bewertet

## Zusammenfassung der Resultate

Die Evaluation zeigte, dass die grundlegenden Funktionen verständlich und benutzerfreundlich umgesetzt wurden. Besonders positiv bewertet wurden das moderne Design und die einfache Navigation. Gleichzeitig wurde sichtbar, dass die Struktur der Outfitverwaltung verbessert werden musste.

## Abgeleitete Verbesserungen

Folgende Verbesserungen wurden priorisiert:

1. Trennung zwischen Outfits und Favoriten
2. Verbesserung des Dark-Mode-Kontrasts
3. Sichtbarere Icons und Buttons
4. Optimierung der Dropdown-Navigation
5. Verbesserte Rückmeldungen bei Aktionen
6. Ergänzung optionaler Accessoires

## 4. Erweiterungen

### 4.1 Dark Mode

- **Beschreibung & Nutzen:**  
  Für Outfitr wurde zusätzlich zum normalen Light Mode ein vollständiger Dark Mode umgesetzt. Nutzer:innen können zwischen den beiden Modi wechseln. Dadurch wird die Anwendung moderner, angenehmer für die Augen und individueller nutzbar.

- **Wo umgesetzt:**
  - **Frontend:** CSS-Anpassungen für Light- und Dark-Mode in mehreren Seiten und Komponenten
  - **Frontend:** Dark-Mode-Toggle im User-Menü integriert
  - **State Management:** Speicherung des gewählten Themes im Browser mittels Local Storage

- **Referenz:**
  - Beschreibung des Designs in Kapitel 3.4.1
  - Farbpaletten des Light- und Dark-Modes in Kapitel 3.4.1

- **Aus Evaluation abgeleitet?:**  
  Ja. Während der Evaluation wurden Kontrastprobleme und Schwierigkeiten bei der Lesbarkeit im Dark Mode festgestellt und anschliessend verbessert.

---

### 4.2 Favoriten-System

- **Beschreibung & Nutzen:**  
  Die Anwendung wurde um ein separates Favoriten-System erweitert. Nutzer:innen können gespeicherte Outfits zusätzlich als Favoriten markieren. Dadurch werden Lieblings-Outfits klar von normalen gespeicherten Outfits getrennt.

- **Wo umgesetzt:**
  - **Frontend:** Herz-Icon in der Outfit-Verwaltung
  - **Frontend:** Eigene Favoriten-Seite mit separater Darstellung
  - **Datenverwaltung:** Speicherung des Favoriten-Status bei Outfits

- **Referenz:**
  - Beschreibung der Informationsarchitektur in Kapitel 3.4.1
  - Evaluationserkenntnisse in Kapitel 3.5

- **Aus Evaluation abgeleitet?:**  
  Ja. Testpersonen fanden die ursprüngliche Outfit-Seite teilweise verwirrend, weshalb Favoriten separat organisiert wurden.

---

### 4.3 Accessoires als optionale Ergänzung

- **Beschreibung & Nutzen:**  
  Der Outfit-Generator wurde erweitert, sodass zusätzlich optionale Accessoires wie Schmuck, Gürtel oder Sonnenbrillen berücksichtigt werden können. Accessoires sind kein Pflichtbestandteil eines Outfits, können jedoch passende Kombinationen ergänzen.

- **Wo umgesetzt:**
  - **Frontend:** Erweiterung der Kategorien und Darstellung
  - **Logik:** Anpassung der Outfit-Generierung für optionale Accessoires
  - **Datenstruktur:** Speicherung zusätzlicher Kleidungsarten

- **Referenz:**
  - Outfit-Generator in Kapitel 3.4.1
  - Workflow-Beschreibung in Kapitel 3.3

- **Aus Evaluation abgeleitet?:**  
  Teilweise. Die Erweiterung entstand aus dem Wunsch, Outfits realistischer und vollständiger darzustellen.

---

### 4.4 Verbesserte Benutzerführung

- **Beschreibung & Nutzen:**  
  Mehrere kleinere Verbesserungen wurden umgesetzt, um die Benutzerführung verständlicher zu machen. Dazu gehören sichtbare Icons, bessere Kontraste, Dropdown-Verbesserungen und zusätzliche Rückmeldungen bei Aktionen.

- **Wo umgesetzt:**
  - **Frontend:** Optimierung von Buttons, Icons und Dropdown-Menüs
  - **Frontend:** Verbesserte Fehlermeldungen und visuelle Rückmeldungen
  - **Design:** Anpassung der Kontraste im Dark Mode

- **Referenz:**
  - Evaluationsergebnisse in Kapitel 3.5
  - Designentscheidungen in Kapitel 3.4.1

- **Aus Evaluation abgeleitet?:**  
  Ja. Mehrere dieser Anpassungen entstanden direkt aus Beobachtungen während der Tests.

---

### 4.5 Deployment der Anwendung

- **Beschreibung & Nutzen:**  
  Die Anwendung wurde öffentlich über Netlify deployed. Dadurch konnte der Prototyp realistisch getestet und auf verschiedenen Geräten verwendet werden.

- **Wo umgesetzt:**
  - **Deployment:** Netlify
  - **Versionsverwaltung:** GitHub Repository mit automatischem Build-Prozess

- **Referenz:**
  - Deployment-Link in Kapitel 3.4.2
  - Validierung in Kapitel 3.5

- **Aus Evaluation abgeleitet?:**  
  Nein. Das Deployment war notwendig, um die Anwendung online verfügbar zu machen.

## 5. Projektorganisation

### 5.1 Repository & Struktur

Für die Entwicklung wurde GitHub als zentrales Repository verwendet. Der gesamte Quellcode, die Versionsverwaltung sowie das Deployment basieren auf diesem Repository.

GitHub Repository:  
https://github.com/simicjasna/outfitr

Die Projektstruktur wurde modular aufgebaut, damit Komponenten übersichtlich organisiert und wiederverwendet werden können.

### Projektstruktur

```text
outfitr/
│
├── src/
│   ├── lib/                 # Wiederverwendbare Komponenten & Utilities
│   ├── routes/              # Alle Seiten und SvelteKit-Routen
│   ├── app.html             # HTML-Template
│   └── app.css              # Globale Styles
│
├── static/                  # Bilder, Icons und statische Dateien
│
├── supabase/                # Datenbank- und Storage-Konfiguration
│
├── package.json             # Projektabhängigkeiten
├── svelte.config.js         # SvelteKit-Konfiguration
├── vite.config.js           # Vite-Konfiguration
└── README.md                # Projektdokumentation
```

Die Struktur wurde bewusst einfach und übersichtlich gehalten, damit Erweiterungen leichter umgesetzt werden können.

---

### 5.2 Issue-Management

Die Entwicklung erfolgte iterativ und schrittweise. Grössere Aufgaben wurden in kleinere Teilaufgaben aufgeteilt und nacheinander umgesetzt.

Während der Entwicklung wurden insbesondere folgende Bereiche kontinuierlich verbessert:

- Navigation
- Outfit-Logik
- Dark Mode
- Favoriten-System
- Benutzerführung
- Responsive Design
- Upload-Workflow
- Kontrast und Lesbarkeit im Dark Mode

Usability-Probleme aus den Tests wurden dokumentiert und anschliessend priorisiert verbessert.

Zusätzlich wurden Probleme direkt während der Entwicklung getestet und korrigiert, beispielsweise:

- fehlerhafte Navigation
- Probleme beim Bild-Upload
- unübersichtliche Buttons
- fehlende Fehlermeldungen
- unklare Benutzerführung bei Outfits und Favoriten

---

### 5.3 Commit-Praxis

Für die Versionsverwaltung wurde Git verwendet. Änderungen wurden regelmässig mit sprechenden Commit-Nachrichten dokumentiert.

Beispiele für verwendete Commit-Arten:

- `add dark mode`
- `fix upload issue`
- `improve dashboard layout`
- `add favorites page`
- `update outfit generator`
- `improve wardrobe usability`

Durch die regelmässigen Commits konnten Änderungen nachvollziehbar dokumentiert und Fehler einfacher zurückverfolgt werden.

Zusätzlich wurde GitHub mit Netlify verbunden, wodurch neue Versionen der Anwendung direkt deployed werden konnten.

Deployment URL:  
https://outfitr-app.netlify.app/

## 6. KI-Deklaration

### 6.1 KI-Tools

### Eingesetzte Tools

| Tool           | Version / Variante | Zweck                                                                                     |
| -------------- | ------------------ | ----------------------------------------------------------------------------------------- |
| ChatGPT        | GPT-5.5            | Unterstützung bei Dokumentation, CSS, Debugging, Architekturideen und SvelteKit-Problemen |
| GitHub Copilot | –                  | Inline-Codevorschläge und Autovervollständigung im Editor                                 |
| Claude         | Claude Sonnet      | Teilweise Unterstützung bei Formulierungen und Strukturideen                              |

### Zweck & Umfang

Die KI-Tools wurden während des Projekts unterstützend eingesetzt, insbesondere bei technischen Problemen, der Strukturierung der Dokumentation sowie bei UI- und CSS-Anpassungen.

Folgende Bereiche wurden mit KI-Unterstützung umgesetzt:

- Unterstützung bei der Entwicklung mit SvelteKit
- CSS-Optimierungen für Light- und Dark-Mode
- Verbesserung von Kontrast, Responsiveness und Benutzerführung
- Unterstützung bei der Fehleranalyse und beim Debugging
- Vorschläge für Komponentenstruktur und Routing
- Unterstützung bei der Dokumentation und Formulierung einzelner Kapitel
- Unterstützung bei der Vorbereitung der Usability-Evaluation

Teilweise KI-unterstützt entstanden insbesondere:

- Dark-Mode-Implementierung
- Dropdown- und Navigationslogik
- Outfit- und Favoritenstruktur
- Upload- und Formularlogik
- Teile der Dokumentationsstruktur
- CSS-Optimierungen und Layout-Anpassungen

### Eigene Leistung (Abgrenzung)

Die gesamte Projektidee, das Konzept sowie die funktionale Umsetzung wurden eigenständig entwickelt.

Eigenständig erarbeitet wurden insbesondere:

- Die Idee der Anwendung „Outfitr“
- Die Konzeption der Features
- Die gesamte Benutzerführung
- Die Gestaltung des Interface Designs
- Die Farbpalette und Designentscheidungen
- Die Struktur der Anwendung
- Die Datenmodellierung
- Die Auswahl und Integration der Technologien
- Die Umsetzung der Kernfunktionen
- Das Testing und die Evaluation
- Die finale Überarbeitung aller Inhalte

KI-generierte Vorschläge wurden nie ungeprüft übernommen. Sämtliche Vorschläge wurden getestet, angepasst und an die Anforderungen des Projekts angepasst.

---

### 6.2 Prompt-Vorgehen

Der Einsatz von KI erfolgte iterativ und problemorientiert. Typischerweise wurde zuerst das bestehende Problem oder der aktuelle Code beschrieben und anschliessend gezielt nach Lösungsvorschlägen gefragt.

Das Vorgehen bestand meistens aus folgenden Schritten:

1. Beschreibung des Problems oder der gewünschten Funktion
2. Bereitstellen von bestehendem Code oder Screenshots
3. Generierung von Lösungsvorschlägen durch KI
4. Testen der vorgeschlagenen Lösung im Projekt
5. Anpassung und Überarbeitung der Resultate

Beispiele für typische Aufgabenstellungen:

- Verbesserung des Dark Modes
- Debugging von SvelteKit-Fehlern
- Optimierung von CSS und Responsiveness
- Verbesserung der Benutzerführung
- Unterstützung bei der Dokumentationsstruktur
- Formulierung technischer Beschreibungen

Für die Dokumentation wurden zunächst eigene Stichpunkte und Inhalte vorbereitet. Anschliessend wurden diese mit Hilfe von KI sprachlich überarbeitet und strukturiert formuliert.

Bei der Nutzung der KI wurde darauf geachtet, keine urheberrechtlich problematischen Inhalte zu übernehmen. Verwendete Bilder, Icons und Logos stammen aus eigenen oder frei nutzbaren Quellen.

---

### 6.3 Reflexion

Der Einsatz von KI war während des Projekts besonders hilfreich bei technischen Problemen, repetitiven Aufgaben sowie bei der sprachlichen Ausarbeitung der Dokumentation.

### Nutzen

Die KI-Unterstützung ermöglichte insbesondere:

- schnellere Fehlersuche
- effizientere CSS-Anpassungen
- Unterstützung bei komplexeren SvelteKit-Problemen
- schnellere Iterationen im UI-Design
- Unterstützung bei der Strukturierung der Dokumentation

Vor allem bei der Umsetzung des Dark Modes, der Navigation sowie der Responsiveness konnte viel Zeit eingespart werden.

### Grenzen

Trotz der Unterstützung mussten viele Vorschläge angepasst oder korrigiert werden. Teilweise waren generierte Lösungen nicht direkt kompatibel mit der verwendeten SvelteKit- oder Svelte-Version.

Auch Designentscheidungen, Benutzerführung und Architektur konnten nicht vollständig an KI delegiert werden, da hierfür ein eigenes Verständnis des Projekts notwendig war.

### Risiken & Qualitätssicherung

Alle KI-generierten Inhalte wurden manuell überprüft und getestet. Fehlerhafte oder unpassende Vorschläge wurden angepasst oder verworfen.

Besonders bei folgenden Bereichen wurde auf zusätzliche Kontrolle geachtet:

- Formularlogik
- Routing
- Datenverwaltung
- Upload-Funktionalitäten
- Benutzerführung
- Dark-Mode-Kontrast

Die finale Verantwortung für Code, Design und Dokumentation lag jederzeit bei der Projektverfasserin.

## 7. Anhang

### 7.1 Quellen & Abhängigkeiten

| Ressource      | Typ                         | Lizenz                  |
| -------------- | --------------------------- | ----------------------- |
| SvelteKit      | Web Framework               | MIT                     |
| Supabase       | Authentifizierung & Storage | Kommerziell (Free Tier) |
| MongoDB Atlas  | Datenbank                   | Kommerziell (Free Tier) |
| Netlify        | Hosting & Deployment        | Kommerziell (Free Tier) |
| GitHub         | Versionsverwaltung          | Kommerziell (Free Tier) |
| Vite           | Build Tool                  | MIT                     |
| Node.js        | JavaScript Runtime          | MIT                     |
| CSS            | Styling                     | –                       |
| Flaticon       | Icons & UI-Assets           | Flaticon License        |
| ChatGPT        | KI-Unterstützung            | Proprietär              |
| Claude         | KI-Unterstützung            | Proprietär              |
| GitHub Copilot | KI-Unterstützung            | Proprietär              |

---

### 7.2 Verwendete Bilder & Assets

| Ressource               | Verwendung                             | Quelle                    |
| ----------------------- | -------------------------------------- | ------------------------- |
| UI-Icons                | Navigation, Buttons und User Interface | https://www.flaticon.com/ |
| Moodboard & Farbpalette | Dokumentation                          | Eigenständig erstellt     |
| Mockup                  | Figma-Prototyp                         | Eigenständig erstellt     |

---

### 7.3 Testskript & Materialien

Die wichtigsten Testszenarien wurden in Kapitel 3.5 beschrieben.

Getestete Hauptfunktionen:

- Registrierung und Login
- Kleidungsstücke hinzufügen
- Kleidung filtern
- Outfit generieren
- Outfit speichern
- Favoriten markieren
- Navigation zwischen den Seiten
- Dark Mode aktivieren

---

### 7.4 Deployment

| Bereich    | Information                           |
| ---------- | ------------------------------------- |
| Plattform  | Netlify                               |
| Live-URL   | https://outfitr-app.netlify.app/      |
| Repository | https://github.com/simicjasna/outfitr |

---

### 7.5 Lokale Entwicklung

### Dependencies installieren

```bash
npm install
```

### Entwicklungsserver starten

```bash
npm run dev
```

### Produktions-Build erstellen

```bash
npm run build
```

---

### 7.6 Umgebungsvariablen

Die Anwendung verwendet Umgebungsvariablen für die Verbindung mit Supabase und MongoDB.

Beispiel:

```env
PUBLIC_SUPABASE_URL=...
PUBLIC_SUPABASE_ANON_KEY=...
MONGODB_URI=...
```

Die tatsächlichen Zugangsdaten wurden aus Sicherheitsgründen nicht veröffentlicht.
