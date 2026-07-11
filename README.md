# Bespoke Studio — sito vetrina

Sito one-page dell'agenzia **Bespoke Studio** (Kristian Cimo & Stephane Boka): sartoria digitale a Milano, siti web su misura.

**Online:** https://rotenzark.github.io/bespoke-studio/

## Stack

- HTML / CSS / JavaScript vanilla, zero dipendenze
- Bilingue IT/EN: dizionario `I18N` in `js/main.js`, attributi `data-i18n` / `data-i18n-html` / `data-i18n-attr`; preferenza salvata in `localStorage`
- Animazioni con `IntersectionObserver` (reveal + "cuciture"), rispettano `prefers-reduced-motion`
- Font: Fraunces · Archivo · IBM Plex Mono (Google Fonts)

## Struttura

```
index.html          pagina unica
css/style.css       stili (design token in :root)
js/main.js          i18n, reveal, menu, form → WhatsApp
assets/img/         screenshot case study, og-image, favicon
biglietto/          biglietto da visita 85×55mm (sorgente HTML + PDF di stampa)
```

## Aggiornare il sito

1. Modificare i file (per i testi: dizionario `I18N` in `js/main.js` **e** testo italiano in `index.html`)
2. Incrementare il cache-busting `?v=N` di css/js in `index.html` se si toccano quei file
3. `git add -A && git commit && git push` — GitHub Pages ripubblica da `main`

## Biglietti da visita

`biglietto/biglietto-kristian.pdf` e `biglietto/biglietto-stephane.pdf`: formato 91×61 mm
(85×55 mm finito + 3 mm di abbondanza per lato), fondo pieno, pronti per la tipografia.
Per rigenerarli dopo una modifica a `biglietto.html`: stampare in PDF con Chrome
(dimensioni pagina 91×61 mm, margini 0, grafica di sfondo attiva).

## Da fare quando ci sarà il dominio

- [ ] Aggiornare `og:url` e `og:image` in `index.html`
- [ ] Aggiungere file `CNAME` nel repo + DNS del registrar
- [ ] Sostituire l'URL nel retro dei biglietti e rigenerare i PDF
- [ ] Passare l'email a una casella sul dominio
