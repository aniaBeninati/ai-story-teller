# My E-Commerce Project

![Screenshot](./Screenshot.png)

## 🚀 Panoramica del Progetto

**My E-Commerce** è una semplice applicazione e-commerce costruita con un approccio atomic design.  Il progetto dimostra l'utilizzo di React, Next.js, SCSS, e altre tecnologie moderne per creare un'app scalabile e riutilizzabile.

### Funzionalità Principali


## 🛠️ Tecnologie Utilizzate

- **React**: Per costruire l'interfaccia utente e gestire lo stato dell'applicazione.
- **Next.js**: Per la gestione delle pagine e della navigazione lato server.
- **SCSS**: Per la stilizzazione dell'applicazione e utilizzo di mixin e funzioni.
- **CSS Modules**: Per uno styling modulare e locale.

![Create-Palette](./Create-Palette.png)

## 📂 Struttura del Progetto

src/
├── components/
│   ├── Atoms/
│   │   └── Button/
│   │   │   ├── Button.module.scss
│   │   │   └── Button.tsx
|   │   └── Input/
│   │       ├── Input.module.scss
│   │       └── Input.tsx
    │   └── Switch/
│   │       ├── Switch.module.scss
│   │       └── Switch.tsx
│   ├── Molecules/
│   │   ├── Header/
│   │   │   ├── Header.module.scss
│   │   │   └── Header.tsx
│   │   └── SelectBox/
│   │       ├── SelectBox.module.scss
│   │       └── SelectBox.tsx
│   │   └── SwitchBox/
│   │       ├── SwitchBox.module.scss
│   │       └── SwitchBox.tsx
│   └── Organism/
│       └── WindowBox/
│           ├── WindowBox.module.scss
│           └── WindowBox.tsx
├── constants/
│   └── common.ts
├── pages/
│   └── api/
│       └── hello.ts
│       ├── index.tsx
│       ├── _app.tsx
│       ├── _document.tsx
│       └── index.tsx
├── styles/
│   └── default/
│       ├── _functions.scss
│       ├── _mixins.scss
│       ├── index.scss
│       └── globals.scss
│   └── Home.module.css
├── types/
│   └── common.ts
├── .env.local
├── .eslintrc.json
├── .gitignore
├── LICENSE
└── next-env.d.ts


<!--
V metodi e mixin sass
V inserire campi input -> atom
V inserire select -> atom
V inserire switch (per definire bambino/adulto e condizionare l'output) -> atom
V toast
V api browser
 -->
- hamburger menu
- carousel

✨ Miglioramenti 
Implementare lo switch: Aggiungere un componente switch per selezionare tra bambino/adulto e condizionare l'output.
Aggiungere Hamburger Menu: Creare un menu mobile friendly per la navigazione.
Inserire un Carousel: Mostrare più prodotti in una slider dinamica.

