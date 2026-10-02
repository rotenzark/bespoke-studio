# Bespoke Studio — sito dell'agenzia

Sito dell'agenzia **Bespoke Studio** (Kristian Cimò & Stephane Boka): agenzia web a Milano, siti web su misura.

**Online:** https://bespokestud.io (il vecchio URL rotenzark.github.io/bespoke-studio reindirizza)

## Stack

- HTML / CSS / JavaScript vanilla, zero dipendenze
- Bilingue IT/EN: dizionario `I18N` in `js/main.js` (interfaccia) e `js/campionario-testi.js` (testi delle card, generato); attributi
  `data-i18n` / `data-i18n-html` / `data-i18n-attr`; preferenza salvata in `localStorage`. Le pagine di settore sono solo in italiano.
- Caratteri sul sito (`assets/fonts/`, Fraunces · Archivo · IBM Plex Mono): nessuna richiesta a Google Fonts
- Content-Security-Policy e Referrer-Policy nel `<head>` di ogni pagina (GitHub Pages non permette intestazioni). Se si aggiunge uno
  script in linea, va aggiunta la sua impronta sha256 alla CSP.

## Struttura

```
index.html                 home (a mano)
lavori.html                il campionario            ┐
siti-web-*.html            le pagine di settore       │ GENERATI da Agenzia/Toolkit/campionario/genera.mjs
privacy.html, 404.html     privacy e pagina 404       │ dalla fonte Agenzia/Toolkit/campionario/campionario.json:
sitemap.xml                le pagine per i motori     │ NON modificarli a mano
js/campionario-testi.js    i testi delle card IT/EN   ┘
css/style.css              stili (design token in :root)
js/main.js                 i18n, reveal, menu, filo, filtri del campionario, form → WhatsApp
assets/img/                scatti 1440×900 (2x) delle card, og-image, favicon
assets/img/mini/           miniature WebP 480 e 720 delle card (generate da campionario/miniature.mjs)
robots.txt, llms.txt       regole per i bot (tutti ammessi) e riassunto per le AI
<chiave>.txt               chiave IndexNow
```

`biglietto/` e `social/` non sono più nel sito pubblicato: stanno in `Agenzia/Sito/bespoke-studio-privato/`.

## Aggiungere un sito al campionario

Da `Agenzia/Toolkit`:

1. `node card-shot.mjs "<cartella del sito>"` → `assets/img/<slug>-desktop.jpg` (guardarlo prima di pubblicare)
2. scrivere `campionario/card/<chiave>.json` (modello e regole in testa a `campionario/aggiungi-card.mjs`: gancio ≤ 30 parole,
   testo ≤ 80, stato `proposta` o `consegnato`, niente voti di altre attività, niente gergo)
3. `node campionario/aggiungi-card.mjs campionario/card/<chiave>.json`
4. `bash campionario/pubblica.sh "Campionario: Nome (#NNN)"` (miniature, pagine, commit, push)
5. dopo la build di Pages: `node campionario/cardlive.mjs <chiave>`

I contatori dei filtri, il numero di card e le date le calcola il generatore.

## Aggiornare il sito

1. Home: modificare `index.html` **e** il dizionario `I18N` in `js/main.js`
2. Incrementare il cache-busting `?v=N` di css/js in `index.html` **e** in `campionario/genera.mjs` (`V_MAIN`, `V_CSS`)
3. Rigenerare le pagine generate (`node campionario/genera.mjs`), poi `git add -A && git commit && git push`

## Dominio

`bespokestud.io` — comprato su Cloudflare Registrar (luglio 2026). File `CNAME` nel repo;
DNS su Cloudflare: 4 record A (apex → IP GitHub Pages) + CNAME `www` → `rotenzark.github.io`,
tutti in modalità "DNS only" (proxy arancione disattivato, serve a GitHub per il certificato HTTPS).
Email: info@bespokestud.io via Cloudflare Email Routing.

## Da fare (servono dati o scelte dei titolari)

- [ ] Ragione sociale, P.IVA e sede legale nel footer (e nella privacy)
- [ ] Tempi tipici e, se volete, una fascia di prezzo nella sezione «Il preventivo»
- [ ] Bio dei due fondatori con fatti (anni, lavori), foto vere, LinkedIn
- [ ] Profili esterni (scheda Google, LinkedIn, directory) → link nel footer e `sameAs` nei dati strutturati
- [ ] Credito «Sito realizzato da Bespoke Studio» nei siti venduti, col permesso dei clienti
