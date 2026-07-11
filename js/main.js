/* ============================================================
   BESPOKE STUDIO — main.js
   i18n IT/EN · reveal on scroll · cuciture · menu · form WhatsApp
   ============================================================ */

(function () {
  'use strict';

  var CONFIG = {
    whatsapp: '393896214452',
    email: 'kristiancimo@gmail.com'
  };

  /* ----------------------------------------------------------
     Dizionario i18n — ogni chiave ha entrambe le lingue
     ---------------------------------------------------------- */
  var I18N = {
    'skip':              { it: 'Salta al contenuto', en: 'Skip to content' },

    'nav.services':      { it: 'I tagli', en: 'The cuts' },
    'nav.work':          { it: 'Lavori', en: 'Work' },
    'nav.method':        { it: 'Metodo', en: 'Method' },
    'nav.studio':        { it: 'Studio', en: 'Studio' },
    'nav.contact':       { it: 'Contatti', en: 'Contact' },
    'nav.cta':           { it: 'Prendiamo le misure', en: 'Book a fitting' },
    'menu.note':         { it: 'CUCITO A MANO A MILANO', en: 'HAND-STITCHED IN MILAN' },

    'hero.eyebrow':      { it: 'BESPOKE STUDIO — SARTORIA DIGITALE · MILANO', en: 'BESPOKE STUDIO — A DIGITAL TAILOR SHOP · MILAN' },
    'hero.title1':       { it: 'Siti web cuciti', en: 'Websites made' },
    'hero.title2':       { it: 'su misura.', en: 'to measure.' },
    'hero.sub':          { it: 'Due artigiani, un metodo preciso, nessun modello preconfezionato. Disegniamo e sviluppiamo siti che stanno bene addosso alla tua attività — dalla bottega sotto casa al brand che vuole distinguersi.', en: 'Two artisans, one precise method, no ready-made templates. We design and build websites that fit your business like a good suit — from the shop around the corner to the brand that wants to stand out.' },
    'hero.cta1':         { it: 'Prendiamo le misure', en: 'Book a fitting' },
    'hero.cta2':         { it: 'Guarda un lavoro', en: 'See our work' },
    'hero.note':         { it: 'RISPONDIAMO IN GIORNATA — WHATSAPP, TELEFONO O EMAIL', en: 'WE REPLY WITHIN THE DAY — WHATSAPP, PHONE OR EMAIL' },

    'manifesto.label':   { it: 'PEZZO 01 — IL MANIFESTO', en: 'PIECE 01 — THE MANIFESTO' },
    'manifesto.title1':  { it: 'Il prêt-à-porter va bene', en: 'Ready-to-wear fits' },
    'manifesto.title2':  { it: 'per quasi tutti.', en: 'almost everyone.' },
    'manifesto.title3':  { it: 'Quasi.', en: 'Almost.' },
    'manifesto.p1':      { it: 'I template promettono tutto, subito, a poco. Ma la tua attività non è come le altre: ha una storia, clienti veri e un modo tutto suo di lavorare. Noi partiamo da lì — dalle misure — e costruiamo ogni pagina a mano, finché il sito non ti calza.', en: 'Templates promise everything, instantly, for little. But your business is not like the others: it has a history, real customers and its own way of working. That is where we start — with the measurements — and we build every page by hand until the site truly fits.' },
    'manifesto.v1':      { it: 'Nessun template, mai', en: 'No templates, ever' },
    'manifesto.v2':      { it: 'Codice leggero, fatto a mano', en: 'Lightweight, handmade code' },
    'manifesto.v3':      { it: 'Pochi progetti alla volta, seguiti bene', en: 'A few projects at a time, each given our full attention' },

    'tagli.label':       { it: 'PEZZO 02 — I TAGLI', en: 'PIECE 02 — THE CUTS' },
    'tagli.title1':      { it: 'Tre tagli,', en: 'Three cuts,' },
    'tagli.title2':      { it: 'una sola regola: su misura.', en: 'one rule: made to measure.' },
    'tagli.sub':         { it: 'Il prezzo giusto dipende dalle misure, non da un listino. Per questo ogni preventivo è scritto apposta per te — chiaro, voce per voce, senza sorprese.', en: 'The right price depends on the measurements, not on a price list. Every quote is written just for you — clear, item by item, no surprises.' },
    'tagli.cta':         { it: 'Chiedi un preventivo', en: 'Request a quote' },

    'tagli.c1.label':    { it: 'TAGLIO N.1', en: 'CUT NO.1' },
    'tagli.c1.name':     { it: 'Vetrina', en: 'Storefront' },
    'tagli.c1.for':      { it: 'Per bar, ristoranti, negozi, studi e botteghe: il sito che presenta bene e fa arrivare clienti.', en: 'For cafés, restaurants, shops and studios: the website that presents you well and brings customers in.' },
    'tagli.c1.i1':       { it: 'Design disegnato sulla tua attività', en: 'A design drawn around your business' },
    'tagli.c1.i2':       { it: 'Testi e foto curati con te', en: 'Copy and photos curated with you' },
    'tagli.c1.i3':       { it: 'WhatsApp e telefono integrati', en: 'WhatsApp and phone built in' },
    'tagli.c1.i4':       { it: 'Veloce, leggibile, pronto per Google', en: 'Fast, readable, ready for Google' },

    'tagli.c2.label':    { it: 'TAGLIO N.2', en: 'CUT NO.2' },
    'tagli.c2.name':     { it: 'Business', en: 'Business' },
    'tagli.c2.for':      { it: 'Per PMI e aziende: più pagine, più funzioni, più mercati. Un sito che lavora con te.', en: 'For SMEs and companies: more pages, more features, more markets. A website that works with you.' },
    'tagli.c2.i1':       { it: 'Siti multi-pagina e cataloghi', en: 'Multi-page sites and catalogues' },
    'tagli.c2.i2':       { it: 'Prenotazioni, moduli, e-commerce', en: 'Bookings, forms, e-commerce' },
    'tagli.c2.i3':       { it: 'Più lingue per più mercati', en: 'Multiple languages for multiple markets' },
    'tagli.c2.i4':       { it: 'SEO e statistiche di visita', en: 'SEO and visitor analytics' },

    'tagli.c3.tag':      { it: 'IL CAPO UNICO', en: 'THE ONE-OFF' },
    'tagli.c3.label':    { it: 'TAGLIO N.3', en: 'CUT NO.3' },
    'tagli.c3.name':     { it: 'Alta misura', en: 'Full bespoke' },
    'tagli.c3.for':      { it: 'Per brand che vogliono un pezzo unico: un sito che nessun altro potrà avere.', en: 'For brands that want a one-off piece: a website nobody else can have.' },
    'tagli.c3.i1':       { it: 'Direzione creativa completa', en: 'Full creative direction' },
    'tagli.c3.i2':       { it: 'Animazioni e interazioni disegnate ad hoc', en: 'Animations and interactions designed from scratch' },
    'tagli.c3.i3':       { it: 'Copywriting bilingue', en: 'Bilingual copywriting' },
    'tagli.c3.i4':       { it: 'Cura continua dopo la consegna', en: 'Ongoing care after delivery' },

    'lavoro.label':      { it: 'PEZZO 03 — UN LAVORO RECENTE', en: 'PIECE 03 — RECENT WORK' },
    'lavoro.title1':     { it: 'Pasticceria Marí,', en: 'Pasticceria Marí,' },
    'lavoro.title2':     { it: 'Milano.', en: 'Milan.' },
    'lavoro.sub':        { it: "Una pasticceria artigianale in via Montegani: brioche sfornate all'alba e torte su misura. Le serviva una vetrina all'altezza del banco — l'abbiamo cucita in italiano e in inglese.", en: 'An artisan pastry shop in via Montegani: brioches baked at dawn and made-to-order cakes. It needed a shop window as good as its counter — we tailored one, in Italian and in English.' },
    'lavoro.s1t':        { it: 'COMMESSA', en: 'THE ORDER' },
    'lavoro.s1d':        { it: 'Sito vetrina con richiesta torte via WhatsApp', en: 'Showcase website with cake requests via WhatsApp' },
    'lavoro.s2t':        { it: 'TESSUTO', en: 'THE FABRIC' },
    'lavoro.s2d':        { it: 'HTML, CSS e JavaScript — nessun framework', en: 'HTML, CSS and JavaScript — no frameworks' },
    'lavoro.s3t':        { it: 'LINGUE', en: 'LANGUAGES' },
    'lavoro.s3d':        { it: 'Italiano e inglese', en: 'Italian and English' },
    'lavoro.s4t':        { it: 'CONSEGNA', en: 'DELIVERY' },
    'lavoro.s4d':        { it: 'Online, con le foto vere del locale', en: 'Live online, with real photos of the shop' },
    'lavoro.visit':      { it: 'Visita il sito online', en: 'Visit the live site' },
    'lavoro.open':       { it: 'Apri il sito della Pasticceria Marí in una nuova scheda', en: 'Open the Pasticceria Marí website in a new tab' },
    'lavoro.imgalt':     { it: 'Homepage del sito Pasticceria Marí: interno del locale con tavolini e vetrine, titolo di benvenuto e pulsante per ordinare una torta', en: 'Homepage of the Pasticceria Marí website: the shop interior with tables and display cases, a welcome headline and a button to order a cake' },

    'metodo.label':      { it: 'PEZZO 04 — IL METODO', en: 'PIECE 04 — THE METHOD' },
    'metodo.title1':     { it: 'Come si cuce', en: 'How a website' },
    'metodo.title2':     { it: 'un sito.', en: 'gets tailored.' },
    'metodo.s1t':        { it: 'Le misure', en: 'The measurements' },
    'metodo.s1d':        { it: 'Ci incontriamo e ascoltiamo: la tua attività, i tuoi clienti, cosa deve succedere quando qualcuno apre il sito. Ne esce un brief preciso e un preventivo chiaro.', en: 'We meet and we listen: your business, your customers, what should happen when someone opens your site. Out of it come a precise brief and a clear quote.' },
    'metodo.s2t':        { it: 'Il taglio', en: 'The cut' },
    'metodo.s2d':        { it: "Disegniamo lo stile: colori, caratteri, struttura. Lo vedi in anteprima e lo proviamo insieme, come una prima prova d'abito.", en: 'We design the style: colours, typefaces, structure. You see a preview and we try it on together, like a first fitting.' },
    'metodo.s3t':        { it: 'Il cucito', en: 'The stitching' },
    'metodo.s3d':        { it: 'Sviluppiamo a mano, con codice leggero e veloce. Ogni dettaglio rifinito: telefono, tablet, lingue, animazioni.', en: 'We build by hand, with lightweight, fast code. Every detail finished: phone, tablet, languages, animations.' },
    'metodo.s4t':        { it: 'La consegna', en: 'The delivery' },
    'metodo.s4d':        { it: 'Il sito va online sul tuo dominio. E come ogni buon sarto, restiamo a disposizione per ritocchi e modifiche.', en: 'The site goes live on your domain. And like any good tailor, we stay around for alterations.' },

    'studio.label':      { it: 'PEZZO 05 — GLI ARTIGIANI', en: 'PIECE 05 — THE ARTISANS' },
    'studio.title1':     { it: 'Quattro mani,', en: 'Four hands,' },
    'studio.title2':     { it: 'un solo filo.', en: 'a single thread.' },
    'studio.p1.role':    { it: 'CO-FOUNDER & DEVELOPER', en: 'CO-FOUNDER & DEVELOPER' },
    'studio.p1.bio':     { it: 'Scrive il codice come si taglia un tessuto pregiato: senza sprechi. Suo ogni pixel, ogni animazione, ogni millisecondo di caricamento.', en: 'He writes code the way fine fabric is cut: nothing wasted. Every pixel, every animation, every millisecond of loading time is his.' },
    'studio.p2.role':    { it: 'CO-FOUNDER & SALES', en: 'CO-FOUNDER & SALES' },
    'studio.p2.bio':     { it: 'Prende le misure: ascolta, traduce i bisogni in soluzioni e promette solo quello che poi consegniamo. Il primo caffè lo offre lui.', en: 'He takes the measurements: he listens, turns needs into solutions and only promises what we then deliver. First coffee is on him.' },

    'contatti.label':    { it: 'PEZZO 06 — LE MISURE', en: 'PIECE 06 — THE FITTING' },
    'contatti.title1':   { it: 'Raccontaci', en: 'Tell us about' },
    'contatti.title2':   { it: 'la tua attività.', en: 'your business.' },
    'contatti.sub':      { it: 'Il primo appuntamento è una chiacchierata senza impegno: tu ci racconti cosa fai, noi ti diciamo cosa faremmo. Scrivici come preferisci.', en: 'The first appointment is a conversation, no strings attached: you tell us what you do, we tell you what we would do. Reach us however you prefer.' },
    'contatti.wa.hint':  { it: 'Il modo più rapido: rispondiamo in giornata', en: 'The fastest way: we reply within the day' },
    'contatti.tel.label':{ it: 'TELEFONO', en: 'PHONE' },
    'contatti.tel.hint': { it: 'Dal lunedì al sabato, 9:00–19:00', en: 'Monday to Saturday, 9:00–19:00' },
    'contatti.mail.hint':{ it: 'Per raccontarci il progetto con calma', en: 'To tell us about your project at your own pace' },

    'form.name':         { it: 'Il tuo nome', en: 'Your name' },
    'form.business':     { it: 'La tua attività', en: 'Your business' },
    'form.business.ph':  { it: 'Es. ristorante, negozio, studio…', en: 'E.g. restaurant, shop, studio…' },
    'form.cut':          { it: 'Cosa ti serve', en: 'What you need' },
    'form.cut.o1':       { it: 'Un sito vetrina', en: 'A showcase website' },
    'form.cut.o2':       { it: 'Un sito per la mia azienda', en: 'A website for my company' },
    'form.cut.o3':       { it: "Un progetto d'alta misura", en: 'A full bespoke project' },
    'form.cut.o4':       { it: 'Non lo so ancora — parliamone', en: "I don't know yet — let's talk" },
    'form.msg':          { it: 'Due righe sul progetto', en: 'A couple of lines about the project' },
    'form.msg.opt':      { it: '(facoltative)', en: '(optional)' },
    'form.error':        { it: 'COMPILA NOME E ATTIVITÀ PER INVIARE', en: 'FILL IN NAME AND BUSINESS TO SEND' },
    'form.submit':       { it: 'Invia su WhatsApp', en: 'Send via WhatsApp' },
    'form.alt':          { it: 'Preferisci scrivere con calma? <a href="mailto:' + 'kristiancimo@gmail.com' + '?subject=Richiesta%20preventivo%20sito%20web">Mandaci un\'email</a>.', en: 'Prefer to write at your own pace? <a href="mailto:' + 'kristiancimo@gmail.com' + '?subject=Website%20quote%20request">Send us an email</a>.' },

    'footer.tag':        { it: 'CUCITO A MANO A MILANO', en: 'HAND-STITCHED IN MILAN' },
    'footer.legal':      { it: 'TUTTI I DIRITTI RISERVATI', en: 'ALL RIGHTS RESERVED' },

    'a11y.navSections':       { it: 'Sezioni del sito', en: 'Site sections' },
    'a11y.navSectionsFooter': { it: 'Sezioni del sito (footer)', en: 'Site sections (footer)' },
    'a11y.menuOpen':          { it: 'Apri il menu', en: 'Open the menu' },
    'a11y.menuClose':         { it: 'Chiudi il menu', en: 'Close the menu' }
  };

  var META = {
    title: {
      it: 'Bespoke Studio — Siti web su misura · Milano',
      en: 'Bespoke Studio — Tailor-made websites · Milan'
    },
    description: {
      it: 'Bespoke Studio è una sartoria digitale a Milano: siti web disegnati e sviluppati a mano, su misura per attività locali, aziende e brand. Nessun template.',
      en: 'Bespoke Studio is a digital tailor shop in Milan: websites designed and built by hand, made to measure for local businesses, companies and brands. No templates.'
    }
  };

  var currentLang = 'it';

  function applyLang(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var entry = I18N[el.getAttribute('data-i18n')];
      if (entry && entry[lang] !== undefined) el.textContent = entry[lang];
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var entry = I18N[el.getAttribute('data-i18n-html')];
      if (entry && entry[lang] !== undefined) el.innerHTML = entry[lang];
    });

    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      // formato: "attributo:chiave"
      var parts = el.getAttribute('data-i18n-attr').split(':');
      var entry = I18N[parts[1]];
      if (entry && entry[lang] !== undefined) el.setAttribute(parts[0], entry[lang]);
    });

    document.title = META.title[lang];
    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', META.description[lang]);

    document.querySelectorAll('.lang__btn').forEach(function (btn) {
      var active = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', String(active));
    });

    // Etichetta del burger coerente con lingua e stato corrente
    var b = document.querySelector('.nav__burger');
    var m = document.getElementById('mobile-menu');
    if (b) {
      var key = (m && !m.hidden) ? 'a11y.menuClose' : 'a11y.menuOpen';
      b.setAttribute('aria-label', I18N[key][lang]);
    }

    try { localStorage.setItem('bespoke-lang', lang); } catch (e) { /* private mode */ }
  }

  document.querySelectorAll('.lang__btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      applyLang(btn.getAttribute('data-lang'));
    });
  });

  var storedLang = null;
  try { storedLang = localStorage.getItem('bespoke-lang'); } catch (e) { /* private mode */ }
  if (storedLang === 'en') applyLang('en');

  /* ----------------------------------------------------------
     Reveal on scroll + cuciture — partono a intro conclusa
     ---------------------------------------------------------- */
  var pageStarted = false;

  function startPageAnimations() {
    if (pageStarted) return;
    pageStarted = true;

    var observed = document.querySelectorAll('.reveal, .seam');

    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

      observed.forEach(function (el) { io.observe(el); });
    } else {
      observed.forEach(function (el) { el.classList.add('in-view'); });
    }

    // La cucitura sotto "su misura" parte dopo il reveal del titolo
    var stitch = document.querySelector('.stitch--hero');
    if (stitch) stitch.classList.add('is-sewn');
  }

  /* ----------------------------------------------------------
     Il filo: la cucitura che attraversa la pagina e si riempie
     con lo scroll (maschera a trattini + tracciato che si disegna)
     ---------------------------------------------------------- */
  (function () {
    if (!document.createElementNS) return;

    var NS = 'http://www.w3.org/2000/svg';
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // Il filo è un segmento che viaggia con lo scroll: in cima non c'è,
    // entra dall'alto appena si scorre (la testa corre più veloce dello
    // scroll) e sparisce in basso a fine pagina (la coda parte dopo e
    // arriva al fondo esattamente a scroll completo).
    var HEAD_SPEED = 1.30;
    var TAIL_START = 0.22;

    // il percorso del filo: frazioni di larghezza/altezza pagina
    var POINTS = [
      [0.74, 0.008], [0.60, 0.045], [0.78, 0.090], [0.50, 0.145],
      [0.20, 0.200], [0.78, 0.270], [0.30, 0.345], [0.70, 0.420],
      [0.24, 0.500], [0.76, 0.575], [0.28, 0.655], [0.72, 0.735],
      [0.36, 0.815], [0.62, 0.890], [0.48, 0.965]
    ];

    // Catmull-Rom → Bézier: curva morbida che passa per tutti i punti
    function smoothPath(pts) {
      var d = 'M ' + pts[0][0].toFixed(1) + ' ' + pts[0][1].toFixed(1);
      for (var i = 0; i < pts.length - 1; i++) {
        var p0 = pts[Math.max(0, i - 1)];
        var p1 = pts[i];
        var p2 = pts[i + 1];
        var p3 = pts[Math.min(pts.length - 1, i + 2)];
        d += ' C ' + (p1[0] + (p2[0] - p0[0]) / 6).toFixed(1) + ' ' + (p1[1] + (p2[1] - p0[1]) / 6).toFixed(1) +
             ', ' + (p2[0] - (p3[0] - p1[0]) / 6).toFixed(1) + ' ' + (p2[1] - (p3[1] - p1[1]) / 6).toFixed(1) +
             ', ' + p2[0].toFixed(1) + ' ' + p2[1].toFixed(1);
      }
      return d;
    }

    var wrap = null;
    var revealPath = null;
    var threadLen = 0;
    var builtH = 0;
    var curHead = 0, curTail = 0, tgtHead = 0, tgtTail = 0;
    var animating = false;

    function computeTargets() {
      var max = document.body.scrollHeight - window.innerHeight;
      var p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 1;
      tgtHead = threadLen * Math.min(1, p * HEAD_SPEED);
      tgtTail = threadLen * Math.min(1, Math.max(0, (p - TAIL_START) / (1 - TAIL_START)));
    }

    function applySegment() {
      if (!revealPath) return;
      var seg = Math.max(0, curHead - curTail);
      // sotto 1px di segmento l'elemento sparisce del tutto: un dash
      // quasi-zero con linecap round renderebbe un puntino residuo
      if (seg < 1) {
        revealPath.setAttribute('visibility', 'hidden');
        return;
      }
      revealPath.setAttribute('visibility', 'visible');
      revealPath.setAttribute('stroke-dasharray', seg.toFixed(1) + ' ' + Math.ceil(threadLen + 10));
      revealPath.setAttribute('stroke-dashoffset', (-curTail).toFixed(1));
    }

    function tick() {
      var dh = tgtHead - curHead;
      var dt = tgtTail - curTail;
      if (Math.abs(dh) < 0.5 && Math.abs(dt) < 0.5) {
        curHead = tgtHead;
        curTail = tgtTail;
        applySegment();
        animating = false;
        return;
      }
      curHead += dh * 0.16;
      curTail += dt * 0.16;
      applySegment();
      requestAnimationFrame(tick);
    }

    function kick() {
      if (!revealPath) return;
      computeTargets();
      if (!animating) {
        animating = true;
        requestAnimationFrame(tick);
      }
    }

    function build() {
      var W = document.documentElement.clientWidth;
      var H = document.body.scrollHeight;
      if (!W || !H) return;
      builtH = H;

      if (wrap && wrap.parentNode) wrap.parentNode.removeChild(wrap);

      wrap = document.createElement('div');
      wrap.className = 'thread-bg';
      wrap.setAttribute('aria-hidden', 'true');
      wrap.style.height = H + 'px';

      var svg = document.createElementNS(NS, 'svg');
      svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
      svg.setAttribute('preserveAspectRatio', 'none');

      var pts = POINTS.map(function (p) { return [p[0] * W, p[1] * H]; });
      var d = smoothPath(pts);

      var maskId = 'thread-stitches';
      var defs = document.createElementNS(NS, 'defs');
      var mask = document.createElementNS(NS, 'mask');
      mask.setAttribute('id', maskId);
      mask.setAttribute('maskUnits', 'userSpaceOnUse');
      mask.setAttribute('x', '0'); mask.setAttribute('y', '0');
      mask.setAttribute('width', String(W)); mask.setAttribute('height', String(H));

      // i trattini della cucitura: visibili solo dove il filo è già passato
      var stitches = document.createElementNS(NS, 'path');
      stitches.setAttribute('d', d);
      stitches.setAttribute('fill', 'none');
      stitches.setAttribute('stroke', '#fff');
      stitches.setAttribute('stroke-width', '6');
      stitches.setAttribute('stroke-dasharray', '30 22');
      stitches.setAttribute('stroke-linecap', 'round');
      mask.appendChild(stitches);
      defs.appendChild(mask);
      svg.appendChild(defs);

      revealPath = document.createElementNS(NS, 'path');
      revealPath.setAttribute('class', 'thread-reveal');
      revealPath.setAttribute('d', d);
      revealPath.setAttribute('fill', 'none');
      revealPath.setAttribute('stroke-width', '5');
      revealPath.setAttribute('stroke-linecap', 'round');
      revealPath.setAttribute('mask', 'url(#' + maskId + ')');
      revealPath.style.stroke = 'var(--thread-vivid)';
      revealPath.style.opacity = '0.9';
      svg.appendChild(revealPath);

      wrap.appendChild(svg);
      document.body.insertBefore(wrap, document.body.firstChild);

      threadLen = revealPath.getTotalLength();

      if (reduce) {
        // niente motion: filo fermo, cucito da cima a fondo
        revealPath.removeAttribute('stroke-dasharray');
        revealPath.removeAttribute('stroke-dashoffset');
      } else {
        computeTargets();
        curHead = tgtHead;
        curTail = tgtTail;
        applySegment();
      }
    }

    build();
    window.addEventListener('load', function () {
      if (Math.abs(document.body.scrollHeight - builtH) > 80) build();
      else kick();
    });

    if (!reduce) {
      window.addEventListener('scroll', kick, { passive: true });
    }

    var resizeTimer = null;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        if (document.documentElement.clientWidth && Math.abs(document.body.scrollHeight - builtH) > 0) build();
        else kick();
      }, 250);
    });

    if (window.ResizeObserver) {
      var roTimer = null;
      new ResizeObserver(function () {
        clearTimeout(roTimer);
        roTimer = setTimeout(function () {
          if (Math.abs(document.body.scrollHeight - builtH) > 80) build();
        }, 250);
      }).observe(document.body);
    }
  })();

  /* ----------------------------------------------------------
     Intro: il filo ricama "Bespoke" lettera per lettera
     ---------------------------------------------------------- */
  (function () {
    var intro = document.getElementById('intro');
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!intro || reduce || !window.SVGTextContentElement) {
      if (intro && intro.parentNode) intro.parentNode.removeChild(intro);
      startPageAnimations();
      return;
    }

    var LETTER_STAGGER = 0.12; // ritardo tra una lettera e la successiva
    var DRAW = 0.85;           // durata della cucitura di una lettera
    var FILL_DELAY = 0.62;     // il riempimento parte a cucitura quasi finita
    var FILL = 0.55;

    var cleaned = false;
    function cleanup() {
      if (cleaned) return;
      cleaned = true;
      if (intro.parentNode) intro.parentNode.removeChild(intro);
      document.body.style.overflow = '';
      startPageAnimations();
    }

    document.body.style.overflow = 'hidden';
    // se qualcosa va storto (font che non arrivano, ecc.) il sito parte comunque
    var safety = setTimeout(cleanup, 6000);

    var fontsReady = (document.fonts && document.fonts.ready)
      ? document.fonts.ready : Promise.resolve();

    fontsReady.then(function () {
      if (cleaned) return;
      try {
        var word = document.getElementById('intro-word');
        var svg = intro.querySelector('svg');
        var NS = 'http://www.w3.org/2000/svg';
        var chars = word.textContent;
        var n = chars.length;

        for (var i = 0; i < n; i++) {
          var pos = word.getStartPositionOfChar(i);
          var letter = document.createElementNS(NS, 'text');
          letter.setAttribute('class', 'intro__letter');
          letter.setAttribute('x', pos.x);
          letter.setAttribute('y', pos.y);
          letter.style.setProperty('--i', i);
          letter.textContent = chars[i];
          svg.appendChild(letter);
        }

        // il nodo rosso del marchio, a fine parola
        var end = word.getEndPositionOfChar(n - 1);
        var knotDelay = (n - 1) * LETTER_STAGGER + DRAW;
        var knot = document.createElementNS(NS, 'circle');
        knot.setAttribute('class', 'intro__knot');
        knot.setAttribute('cx', end.x + 18);
        knot.setAttribute('cy', 42);
        knot.setAttribute('r', 7);
        knot.style.setProperty('--knot-delay', knotDelay + 's');
        svg.appendChild(knot);

        word.style.visibility = 'hidden';
        intro.classList.add('is-sewing');

        var filledAt = ((n - 1) * LETTER_STAGGER + FILL_DELAY + FILL) * 1000;
        setTimeout(function () { intro.classList.add('is-filled'); }, filledAt - 200);
        setTimeout(function () {
          clearTimeout(safety);
          intro.classList.add('is-done');
          intro.addEventListener('transitionend', cleanup, { once: true });
          setTimeout(cleanup, 1200); // rete di sicurezza sul transitionend
        }, filledAt + 650);
      } catch (e) {
        cleanup();
      }
    });
  })();

  /* ----------------------------------------------------------
     Menu mobile
     ---------------------------------------------------------- */
  var burger = document.querySelector('.nav__burger');
  var menu = document.getElementById('mobile-menu');
  var mainEl = document.getElementById('main');
  var footerEl = document.querySelector('.footer');

  function setBackgroundInert(on) {
    // isola il contenuto dietro l'overlay per tastiera e screen reader
    [mainEl, footerEl].forEach(function (el) {
      if (!el) return;
      el.inert = on;
      if (on) el.setAttribute('aria-hidden', 'true');
      else el.removeAttribute('aria-hidden');
    });
  }

  function closeMenu() {
    menu.hidden = true;
    burger.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', I18N['a11y.menuOpen'][currentLang]);
    document.body.style.overflow = '';
    setBackgroundInert(false);
  }

  if (burger && menu) {
    burger.addEventListener('click', function () {
      var opening = menu.hidden;
      if (opening) {
        menu.hidden = false;
        burger.classList.add('is-open');
        burger.setAttribute('aria-expanded', 'true');
        burger.setAttribute('aria-label', I18N['a11y.menuClose'][currentLang]);
        document.body.style.overflow = 'hidden';
        setBackgroundInert(true);
      } else {
        closeMenu();
      }
    });

    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !menu.hidden) {
        closeMenu();
        burger.focus();
      }
    });

    // se la finestra torna sopra il breakpoint col menu aperto, chiudilo
    var mq = window.matchMedia('(max-width: 1080px)');
    var onMq = function (e) { if (!e.matches && !menu.hidden) closeMenu(); };
    if (mq.addEventListener) mq.addEventListener('change', onMq);
    else if (mq.addListener) mq.addListener(onMq);
  }

  /* ----------------------------------------------------------
     Form → messaggio WhatsApp precompilato
     ---------------------------------------------------------- */
  var form = document.getElementById('contact-form');
  var formError = document.getElementById('form-error');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var nome = form.nome.value.trim();
      var attivita = form.attivita.value.trim();
      var select = form.taglio;
      var cutLabel = select.options[select.selectedIndex].textContent.trim();
      var messaggio = form.messaggio.value.trim();

      [[form.nome, nome], [form.attivita, attivita]].forEach(function (pair) {
        var empty = !pair[1];
        pair[0].setAttribute('aria-invalid', String(empty));
        if (empty) pair[0].setAttribute('aria-describedby', 'form-error');
        else pair[0].removeAttribute('aria-describedby');
      });

      if (!nome || !attivita) {
        formError.hidden = false;
        (nome ? form.attivita : form.nome).focus();
        return;
      }
      formError.hidden = true;

      var text;
      if (currentLang === 'it') {
        text = 'Ciao Bespoke Studio! Sono ' + nome + ' — ' + attivita + '.\n' +
               'Mi interessa: ' + cutLabel + '.' +
               (messaggio ? '\n' + messaggio : '');
      } else {
        text = 'Hi Bespoke Studio! I am ' + nome + ' — ' + attivita + '.\n' +
               'I am interested in: ' + cutLabel + '.' +
               (messaggio ? '\n' + messaggio : '');
      }

      var url = 'https://wa.me/' + CONFIG.whatsapp + '?text=' + encodeURIComponent(text);
      window.open(url, '_blank', 'noopener');
    });
  }

  /* ----------------------------------------------------------
     Anno corrente nel footer
     ---------------------------------------------------------- */
  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
