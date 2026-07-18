/* ============================================================
   BESPOKE STUDIO — main.js
   i18n IT/EN · reveal on scroll · cuciture · menu · form WhatsApp
   ============================================================ */

(function () {
  'use strict';

  var CONFIG = {
    whatsapp: '393896214452',
    email: 'info@bespokestud.io'
  };

  /* ----------------------------------------------------------
     Dizionario i18n — ogni chiave ha entrambe le lingue
     ---------------------------------------------------------- */
  var I18N = {
    'skip':              { it: 'Salta al contenuto', en: 'Skip to content' },

    'nav.home':          { it: 'Home', en: 'Home' },
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
    'studio.p1.role':    { it: 'FOUNDER & DEVELOPER', en: 'FOUNDER & DEVELOPER' },
    'studio.p1.bio':     { it: 'Scrive il codice come si taglia un tessuto pregiato: senza sprechi. Suo ogni pixel, ogni animazione, ogni millisecondo di caricamento.', en: 'He writes code the way fine fabric is cut: nothing wasted. Every pixel, every animation, every millisecond of loading time is his.' },
    'studio.p2.role':    { it: 'SALES', en: 'SALES' },
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
    'form.alt':          { it: 'Preferisci scrivere con calma? <a href="mailto:' + 'info@bespokestud.io' + '?subject=Richiesta%20preventivo%20sito%20web">Mandaci un\'email</a>.', en: 'Prefer to write at your own pace? <a href="mailto:' + 'info@bespokestud.io' + '?subject=Website%20quote%20request">Send us an email</a>.' },

    'footer.tag':        { it: 'CUCITO A MANO A MILANO', en: 'HAND-STITCHED IN MILAN' },
    'footer.legal':      { it: 'TUTTI I DIRITTI RISERVATI', en: 'ALL RIGHTS RESERVED' },

    'a11y.navSections':       { it: 'Sezioni del sito', en: 'Site sections' },
    'a11y.navSectionsFooter': { it: 'Sezioni del sito (footer)', en: 'Site sections (footer)' },
    'a11y.menuOpen':          { it: 'Apri il menu', en: 'Open the menu' },
    'a11y.menuClose':         { it: 'Chiudi il menu', en: 'Close the menu' },

    'lavoro.all':        { it: 'Sfoglia il campionario', en: 'Browse the sample book' },

    'camp.label':        { it: 'IL CAMPIONARIO', en: 'THE SAMPLE BOOK' },
    'camp.title1':       { it: 'Ogni lavoro,', en: 'Every job,' },
    'camp.title2':       { it: 'un pezzo unico.', en: 'a one-off piece.' },
    'camp.sub':          { it: 'Come in ogni sartoria, i capi migliori finiscono nel campionario. Pochi lavori, seguiti bene — ognuno tagliato e cucito su una attività vera.', en: 'As in every tailor shop, the best garments end up in the sample book. A few projects, looked after properly — each one cut and sewn around a real business.' },
    'camp.filter':       { it: 'Filtra per settore', en: 'Filter by sector' },
    'camp.f.all':        { it: 'Tutti', en: 'All' },
    'camp.f.vetrina':    { it: 'Vetrina', en: 'Storefront' },
    'camp.f.business':   { it: 'Business', en: 'Business' },
    'camp.f.alta':       { it: 'Alta misura', en: 'Full bespoke' },
    'cat.macro.beauty': { it: "Beauty & Benessere", en: "Beauty & wellness" },
    'cat.macro.food': { it: "Ristoranti & Cucina", en: "Restaurants" },
    'cat.macro.bar': { it: "Bar, Caffè & Vino", en: "Bar, café & wine" },
    'cat.macro.dolci': { it: "Dolci, Gelato & Forno", en: "Sweets & bakery" },
    'cat.macro.bottega': { it: "Gastronomia & Bottega", en: "Deli & food shops" },
    'cat.macro.shop': { it: "Negozi & Moda", en: "Shops & fashion" },
    'cat.macro.servizi': { it: "Servizi & Casa", en: "Services" },
    'cat.m.parr': { it: "Parrucchiere", en: "Hair salon" },
    'cat.m.barb': { it: "Barbiere", en: "Barber" },
    'cat.m.nails': { it: "Nails", en: "Nails" },
    'cat.m.estetica': { it: "Estetica & SPA", en: "Beauty & spa" },
    'cat.m.hairbeauty': { it: "Parrucchiere & estetica", en: "Hair & beauty" },
    'cat.m.pizzeria': { it: "Pizzeria", en: "Pizzeria" },
    'cat.m.trattoria': { it: "Trattoria", en: "Trattoria" },
    'cat.m.ristorante': { it: "Ristorante", en: "Restaurant" },
    'cat.m.osteria': { it: "Osteria", en: "Osteria" },
    'cat.m.mondo': { it: "Cucina dal mondo", en: "World cuisine" },
    'cat.m.bar': { it: "Bar", en: "Bar" },
    'cat.m.pub': { it: "Pub", en: "Pub" },
    'cat.m.caffetteria': { it: "Caffetteria", en: "Café" },
    'cat.m.torref': { it: "Torrefazione", en: "Coffee roaster" },
    'cat.m.enoteca': { it: "Enoteca", en: "Wine bar" },
    'cat.m.pasticceria': { it: "Pasticceria", en: "Pastry shop" },
    'cat.m.gelateria': { it: "Gelateria", en: "Gelato" },
    'cat.m.forno': { it: "Forno", en: "Bakery" },
    'cat.m.salumeria': { it: "Salumeria", en: "Deli" },
    'cat.m.gastronomia': { it: "Gastronomia", en: "Deli & kitchen" },
    'cat.m.pastafresca': { it: "Pasta fresca", en: "Fresh pasta" },
    'cat.m.rosticceria': { it: "Rosticceria", en: "Rotisserie" },
    'cat.m.fiori': { it: "Fioraio", en: "Florist" },
    'cat.m.alimentari': { it: "Alimentari & vini", en: "Fine foods & wine" },
    'cat.m.vintage': { it: "Vintage & moda", en: "Vintage & fashion" },
    'cat.m.calzature': { it: "Calzature", en: "Footwear" },
    'cat.m.calzolaio': { it: "Calzolaio", en: "Cobbler" },
    'cat.m.curascarpe': { it: "Cura scarpe", en: "Shoe care" },
    'cat.m.elettronica': { it: "Elettronica", en: "Electronics" },
    'cat.m.sanitaria': { it: "Sanitaria", en: "Medical supplies" },
    'cat.m.merceria': { it: "Merceria", en: "Haberdashery" },
    'cat.m.frutteria': { it: "Frutteria", en: "Fruit & café" },
    'cat.m.cappelli': { it: "Cappelleria", en: "Hat shop" },
    'cat.m.dischi': { it: "Dischi", en: "Record shop" },
    'cat.m.cartoleria': { it: "Cartoleria", en: "Stationery" },
    'cat.m.belearti': { it: "Belle arti", en: "Art supplies" },
    'cat.m.erboristeria': { it: "Erboristeria", en: "Herbalist" },
    'cat.m.libreria': { it: "Libreria", en: "Bookshop" },
    'cat.m.gioielleria': { it: "Gioielleria", en: "Jeweller" },
    'cat.m.concept': { it: "Concept store", en: "Concept store" },
    'cat.m.bici': { it: "Biciclette", en: "Bike shop" },
    'cat.m.dentista': { it: "Studio dentistico", en: "Dental practice" },
    'cat.m.ottica': { it: "Ottica", en: "Optician" },
    'cat.m.ospitalita': { it: "Ospitalità", en: "Guest house" },
    'cat.m.studio': { it: "Il nostro sito", en: "Our own site" },
    'camp.featured':     { it: 'IN EVIDENZA', en: 'FEATURED' },
    'camp.all':          { it: 'TUTTI I PROGETTI', en: 'ALL PROJECTS' },
    'camp.visit':        { it: 'Visita il sito', en: 'Visit the site' },
    'camp.mari.desc':    { it: 'Pasticceria artigianale in via Montegani, Milano. Sito vetrina bilingue con le foto vere del locale e richiesta torte via WhatsApp: la vetrina digitale all’altezza del banco.', en: 'An artisan pastry shop in via Montegani, Milan. A bilingual showcase website with real photos of the shop and cake requests via WhatsApp: a digital shop window as good as the counter.' },
    'camp.mari.short':   { it: 'Vetrina bilingue per una pasticceria artigianale di Milano, con richiesta torte via WhatsApp.', en: 'A bilingual showcase for an artisan pastry shop in Milan, with cake requests via WhatsApp.' },
    'camp.bespoke.short':{ it: 'Il nostro atelier: intro ricamata lettera per lettera e un filo rosso che cuce la pagina mentre scorri. Il capo che indossiamo noi.', en: 'Our own atelier: an intro embroidered letter by letter and a red thread that stitches the page as you scroll. The suit we wear ourselves.' },
    'camp.bespoke.visit':{ it: 'Guarda la home', en: 'See the home page' },
    'camp.bespoke.open': { it: 'Torna alla home di Bespoke Studio', en: 'Back to the Bespoke Studio home page' },
    'camp.nailss.short': { it: 'Vetrina per un nail studio di via Montegani con 4,8 stelle e oltre 1.600 recensioni: prenotazione su WhatsApp e galleria del salone.', en: 'A showcase for a via Montegani nail studio rated 4.8 with 1,600+ reviews: WhatsApp booking and a salon gallery.' },
    'camp.nailss.open':  { it: 'Apri il sito di Nailss in una nuova scheda', en: 'Open the Nailss website in a new tab' },
    'camp.n2.short':     { it: 'Salone di manicure a Stadera: centinaia di smalti in parete, prenotazioni su Treatwell e una pagina chiara e luminosa come il locale.', en: 'A manicure salon in Stadera: hundreds of polishes on the wall, Treatwell bookings and a page as bright and clean as the salon itself.' },
    'camp.n2.open':      { it: 'Apri il sito di Nail Studio N.2 in una nuova scheda', en: 'Open the Nail Studio N.2 website in a new tab' },
    'camp.jolie.short':  { it: "Nail salon dall'anima elegante in via Montegani: manicure, pedicure e press-on personalizzate, con prenotazione online.", en: 'An elegant nail salon on via Montegani: manicures, pedicures and custom press-on nails, with online booking.' },
    'camp.jolie.open':   { it: 'Apri il sito di Jolie Nail Salon in una nuova scheda', en: 'Open the Jolie Nail Salon website in a new tab' },
    'camp.crescente.short': { it: "Barbiere storico dell'Isola, dal 1999 in via Borsieri: verde bottega, listino da registro e un'intro con le forbici che tagliano lo schermo.", en: 'A historic Isola barbershop, on Via Borsieri since 1999: bottle green, a ledger-style price list and an intro where scissors cut the screen open.' },
    'camp.crescente.open':  { it: 'Apri il sito di Crescente Parrucchiere in una nuova scheda', en: 'Open the Crescente Parrucchiere website in a new tab' },
    'camp.delmonaco.short': { it: 'Salone con 4,9 su 542 recensioni in via Pastrengo: la cartella colori delle tinte diventa la grafica del sito, con le foto vere del salone.', en: "A salon rated 4.9 across 542 reviews on Via Pastrengo: the hair-colour chart becomes the site's visual system, with real salon photos." },
    'camp.delmonaco.open':  { it: 'Apri il sito di Del Monaco Hair Design in una nuova scheda', en: 'Open the Del Monaco Hair Design website in a new tab' },
    'camp.latteneve.short': { it: 'Gelateria tradizionale sul Naviglio, segnalata dal Gambero Rosso: la sua parete degli ingredienti diventa la firma grafica del sito.', en: "A traditional gelateria by the Naviglio, listed by Gambero Rosso: its ingredient wall becomes the site's visual signature." },
    'camp.latteneve.open':  { it: 'Apri il sito di LatteNeve in una nuova scheda', en: 'Open the LatteNeve website in a new tab' },
    'camp.tramtram.short':  { it: 'Trattoria romana a Porta Venezia: la livrea del tram milanese diventa il sito, con le sezioni come fermate e il menù dei classici.', en: 'A Roman trattoria in Porta Venezia: the Milanese tram livery becomes the site, with sections as stops and a menu of the classics.' },
    'camp.tramtram.open':   { it: 'Apri il sito di Tram Tram in una nuova scheda', en: 'Open the Tram Tram website in a new tab' },
    'camp.dischivolanti.short': { it: "Negozio di dischi sui Navigli: il 45 giri nell'hero si suona davvero — si gratta col mouse, con tanto di inerzia — tra tracklist Lato A/B e l'arancio della loro vetrina.", en: 'A Navigli record shop: the 45 in the hero actually plays — scratch it with your mouse, inertia included — amid A/B-side tracklists and the orange of their shop window.' },
    'camp.dischivolanti.open':  { it: 'Apri il sito di Dischivolanti in una nuova scheda', en: 'Open the Dischivolanti website in a new tab' },
    'camp.astragalo.short': { it: "Un erbario navigabile per la bottega dell'Isola: tavole botaniche disegnate a mano, registro laterale con numeri romani e un'intro in cui la pianta germoglia sullo schermo.", en: 'A browsable herbarium for the Isola shop: hand-drawn botanical plates, a side register with Roman numerals, and an intro where the plant sprouts across the screen.' },
    'camp.warsa.short': { it: 'Ristorante eritreo storico a Porta Venezia: il mesob ad anelli intrecciati come firma, layout cerimoniale e intro a iride.', en: 'A historic Eritrean restaurant in Porta Venezia: the woven mesob rings as its signature, a ceremonial layout and an iris intro.' },
    'camp.warsa.open':  { it: 'Apri il sito di Warsa in una nuova scheda', en: 'Open the Warsa website in a new tab' },
    'camp.concorrenza.short': { it: "L'osteria di Diego Rossi (Trippa) a Porta Venezia: insegna d'epoca verde e oro, intro a saracinesca e il menù su una lavagna col gesso che si data da sola.", en: "Diego Rossi's (Trippa) osteria in Porta Venezia: a vintage green-and-gold shop sign, a roller-shutter intro and a chalkboard menu that dates itself." },
    'camp.concorrenza.open':  { it: "Apri il sito dell'Osteria alla Concorrenza in una nuova scheda", en: 'Open the Osteria alla Concorrenza website in a new tab' },
    'camp.tenedini.short': { it: "Officina storica di bici e scooter a Porta Venezia: targa smaltata come insegna, catalogo a tavole tecniche con le ruote che girano al passaggio e un'intro in cui la ruota rotola via.", en: 'A historic bike-and-scooter workshop in Porta Venezia: an enamel-plate sign, a technical-plate catalogue whose wheels spin on hover, and an intro where the wheel rolls away.' },
    'camp.tenedini.open':  { it: 'Apri il sito di Tenedini Biciclette in una nuova scheda', en: 'Open the Tenedini Biciclette website in a new tab' },
    'camp.newshampoo.short': { it: "Salone-galleria di Porta Venezia, 4,9 su 484 recensioni: listino e team reali, e un'intro in cui il nome emerge dallo specchio appannato.", en: "The salon-gallery of Porta Venezia, rated 4.9 across 484 reviews: real price list and team, and an intro where the name emerges from a fogged mirror." },
    'camp.newshampoo.open':  { it: 'Apri il sito di New Shampoo in una nuova scheda', en: 'Open the New Shampoo website in a new tab' },
    'camp.amy.short': { it: "Nail spa e centro estetico in via Melzo, aperto sette giorni su sette: l'insegna accesa apre la pagina, i servizi si leggono dalla vetrina e si prenota su WhatsApp.", en: "A nail spa and beauty centre on Via Melzo, open seven days a week: the lit-up sign opens the page, services read off the shop window, and booking is on WhatsApp." },
    'camp.amy.open':  { it: 'Apri il sito di Amy Nail Spa in una nuova scheda', en: 'Open the Amy Nail Spa website in a new tab' },
    'camp.ponterosso.short': { it: "Trattoria sul Naviglio Grande, 8,7 su TheFork: la «cucina della memoria» raccontata con le loro parole e il menù coi classici tra Milano, Roma e Napoli.", en: "A trattoria on the Naviglio Grande, 8.7 on TheFork: their own «cuisine of memory» told in their words, and a menu of classics from Milan, Rome and Naples." },
    'camp.ponterosso.open':  { it: 'Apri il sito della Trattoria Ponte Rosso in una nuova scheda', en: 'Open the Trattoria Ponte Rosso website in a new tab' },
    'camp.bikerepublic.short': { it: "Negozio e officina di biciclette sul Naviglio Grande, dal 2012: un sito deciso nel loro stile, tra i mezzi in vendita, l'assistenza e la gallery #lifeinbikerepublic.", en: "A bike shop and workshop on the Naviglio Grande, since 2012: a bold site in their own style, spanning the bikes for sale, servicing and the #lifeinbikerepublic gallery." },
    'camp.bikerepublic.open':  { it: 'Apri il sito di Bike Republic in una nuova scheda', en: 'Open the Bike Republic website in a new tab' },
    'camp.darsena.short': { it: "Bar-caffetteria di quartiere affacciato sulla Darsena: una firma grafica ispirata all'acqua del porto, dal caffè al ginseng alle scaloppine, con i servizi di zona (biglietti, tabacchi).", en: "A neighbourhood café-bar overlooking the Darsena: a visual identity drawn from the harbour water, from ginseng coffee to scaloppine, with the local services (tickets, tobacco)." },
    'camp.darsena.open':  { it: 'Apri il sito della Caffetteria della Darsena in una nuova scheda', en: 'Open the Caffetteria della Darsena website in a new tab' },
    'camp.sous.short': { it: "Negozio di vintage e upcycling sui Navigli: la vera vetrina liberty fa da protagonista, con una firma a volute Art Nouveau e il catalogo su Etsy.", en: "A vintage and upcycling shop on the Navigli: their real art-nouveau shopfront takes centre stage, with a scrollwork signature and the catalogue on Etsy." },
    'camp.sous.open':  { it: 'Apri il sito di Sous Vintage Shop in una nuova scheda', en: 'Open the Sous Vintage Shop website in a new tab' },
    'camp.elisir.short': { it: "Centro estetico sulla riva del Naviglio Grande: il concept «la goccia e il riflesso» dà al sito una firma d'acqua, tra listino, trattamenti e prenotazione diretta.", en: "A beauty centre on the bank of the Naviglio Grande: the «drop and ripple» concept gives the site a water signature, across price list, treatments and direct booking." },
    'camp.elisir.open':  { it: 'Apri il sito di Elisir del Benessere in una nuova scheda', en: 'Open the Elisir del Benessere website in a new tab' },
    'camp.calajo.short': { it: "Parrucchiere e lookmaker ai Navigli: un salone total white «in piena luce», con listino, consulenza d'immagine e prenotazione.", en: "A hair stylist and lookmaker on the Navigli: a total-white salon «in full light», with price list, image consulting and booking." },
    'camp.calajo.open':  { it: 'Apri il sito di Calajò Hair Stylist in una nuova scheda', en: 'Open the Calajò Hair Stylist website in a new tab' },
    'camp.estilo.short': { it: "Salone dei Navigli dal 1998, il primo a fare la piega di sera: il concept «una giungla che si accende di sera» e persino una sezione sui suoi concerti e dj set.", en: "A Navigli salon since 1998, the first to blow-dry in the evening: an «urban jungle that lights up at night» concept and even a section on its concerts and dj sets." },
    'camp.estilo.open':  { it: 'Apri il sito di Estilò Parrucchieri in una nuova scheda', en: 'Open the Estilò Parrucchieri website in a new tab' },
    'camp.sm.short': { it: "Concept store d'arte e design ai Navigli dal 1989: un sito da galleria contemporanea per un negozio di bijoux, moda e oggetti unici.", en: "An art-and-design concept store on the Navigli since 1989: a contemporary-gallery site for a shop of jewellery, fashion and one-off objects." },
    'camp.sm.open':  { it: 'Apri il sito di Salvatore + Marie in una nuova scheda', en: 'Open the Salvatore + Marie website in a new tab' },
    'camp.manna.short': { it: "Ristorante di cucina italiana creativa a NoLo, dello chef Matteo Fronduti segnalato dalla Michelin: menù, gallery dei piatti e prenotazione in una vetrina calda ed elegante.", en: "A creative Italian restaurant in NoLo by Michelin-listed chef Matteo Fronduti: menu, dish gallery and booking in a warm, elegant showcase." },
    'camp.manna.open':  { it: 'Apri il sito di Manna in una nuova scheda', en: 'Open the Manna website in a new tab' },
    'camp.nabils.short': { it: "Barber house urbana con cinque sedi a Milano, nata dalla passione di un ex calciatore e cresciuta fino a hammam, nail e spa: qui la cura di sé diventa un rituale.", en: "An urban barber house with five locations in Milan, born from a former footballer's passion and grown into hammam, nails and spa: here self-care becomes a ritual." },
    'camp.nabils.open':  { it: "Apri il sito di Nabil's Barbershop in una nuova scheda", en: "Open the Nabil's Barbershop website in a new tab" },
    'camp.forno.short': { it: "Forno di quartiere a Lambrate, premiato con i Tre Pani del Gambero Rosso: pane a lievitazione naturale, pizza e dolci in una vetrina che dà al lievito tutto il suo tempo.", en: "A neighbourhood bakery in Lambrate, awarded the Gambero Rosso Three Loaves: naturally-leavened bread, pizza and pastries in a window that gives the dough all its time." },
    'camp.forno.open':  { it: 'Apri il sito di Il Forno di Lambrate in una nuova scheda', en: 'Open the Il Forno di Lambrate website in a new tab' },
    'camp.abele.short': { it: "Trattoria storica di NoLo dal 1979, in una vecchia bocciofila con l'arredo anni '50 intatto: la Milano dei risotti, col menù del giorno scritto sulla lavagna.", en: "A historic NoLo trattoria since 1979, in an old bowls club with its 1950s interior intact: Milan's home of risotto, with the day's menu chalked on the board." },
    'camp.abele.open':  { it: 'Apri il sito di Trattoria da Abele in una nuova scheda', en: 'Open the Trattoria da Abele website in a new tab' },
    'camp.nesler.short': { it: "Studio dentistico a NoLo, dei dottori Nesler e Bett: una vetrina pulita e rassicurante, «il tuo sorriso in mani esperte», con tutte le informazioni chiare a colpo d'occhio.", en: "A dental practice in NoLo, by Drs Nesler and Bett: a clean, reassuring site — “your smile in expert hands” — with everything clear at a glance." },
    'camp.nesler.open':  { it: 'Apri il sito dello Studio Dentistico Nesler Bett in una nuova scheda', en: 'Open the Studio Dentistico Nesler Bett website in a new tab' },
    'camp.ghe.short': { it: "Craft bar di NoLo in Piazza Morbegno: birre artigianali, cocktail, DJ set e stand-up, in una vetrina bold in stile poster, viva come il bancone.", en: "A craft bar in NoLo on Piazza Morbegno: craft beer, cocktails, DJ sets and stand-up, in a bold, poster-style site as lively as the bar." },
    'camp.ghe.open':  { it: 'Apri il sito di Ghe Pensi Mi in una nuova scheda', en: 'Open the Ghe Pensi Mi website in a new tab' },
    'camp.mc.short': { it: "Parrucchiere e centro estetico a Città Studi: una maison digitale elegante e femminile, «il tuo momento di charme», con servizi e contatti a portata di clic.", en: "A hair salon and beauty centre in Città Studi: an elegant, feminine digital maison — “your moment of charme” — with services and contacts a click away." },
    'camp.mc.open':  { it: 'Apri il sito di Maison Charme in una nuova scheda', en: 'Open the Maison Charme website in a new tab' },
    'camp.tc.short': { it: "Parrucchiere di quartiere a NoLo, da Federico e Michele: un sito accogliente e botanico, «prenditi il tuo tempo», con prenotazione diretta su WhatsApp.", en: "A neighbourhood hair salon in NoLo, with Federico and Michele: a warm, botanical site — “take your time” — with direct WhatsApp booking." },
    'camp.tc.open':  { it: 'Apri il sito di Time Cut in una nuova scheda', en: 'Open the Time Cut website in a new tab' },
    'camp.one.short': { it: "Nail spa con due sedi a Milano: la sua firma è «la parete dei colori», una griglia di smalti lucidi da cui scegliere, tra manicure, nail art ed extension ciglia.", en: "A nail spa with two locations in Milan: its signature is the “colour wall”, a grid of glossy polishes to choose from, across manicure, nail art and lash extensions." },
    'camp.one.open':  { it: 'Apri il sito di One Nail Spa in una nuova scheda', en: 'Open the One Nail Spa website in a new tab' },
    'camp.mom.short': { it: "Centro beauty & wellness in Via Padova 41: il civico dà il nome e l'identità al sito, con un grande «41» che accoglie in uno spazio calmo e minimale.", en: "A beauty & wellness centre at Via Padova 41: the street number gives the site its name and identity, with a large “41” welcoming you into a calm, minimal space." },
    'camp.mom.open':  { it: 'Apri il sito di Moma41 in una nuova scheda', en: 'Open the Moma41 website in a new tab' },
    'camp.cla.short': { it: "Micro-forno d'autore a Lambrate, spin-off del forno Onest: pane, pizza, focaccia, pasticceria e specialty coffee, in una vetrina dall'identità ironica e forte.", en: "A signature micro-bakery in Lambrate, a spin-off of the Onest bakery: bread, pizza, focaccia, pastry and specialty coffee, in a shopfront with a strong, tongue-in-cheek identity." },
    'camp.cla.open':  { it: 'Apri il sito di Clandestino non esiste in una nuova scheda', en: 'Open the Clandestino non esiste website in a new tab' },
    'camp.cape.short': { it: "Storica trattoria di Lambrate, famosa per la pizza al trancio: il motivo ad arco dell'edicola votiva che le dà il nome torna nell'hero e in ogni cornice.", en: "A historic Lambrate trattoria famous for its pizza by the slice: the arch of the votive shrine it's named after returns in the hero and every frame." },
    'camp.cape.open':  { it: 'Apri il sito di La Cappelletta in una nuova scheda', en: 'Open the La Cappelletta website in a new tab' },
    'camp.magic.short': { it: "Parrucchiere a conduzione femminile a Lambrate, specialista di lisciatura e cheratina: un sito dal motivo di ciocche fluenti, con la promessa «i tuoi capelli, rinati».", en: "A women-run hair salon in Lambrate, specialists in smoothing and keratin: a site built on a flowing-strands motif, with the promise “your hair, reborn”." },
    'camp.magic.open':  { it: 'Apri il sito di Magic Woman in una nuova scheda', en: 'Open the Magic Woman website in a new tab' },
    'camp.sun.short': { it: "Nail bar di Lambrate, di Alice, specialista di Russian Manicure: una vetrina solare col motivo a raggi di sole e la gallery delle unghie in primo piano.", en: "A nail bar in Lambrate run by Alice, specialist in Russian Manicure: a sunny showcase with a sunbeam motif and the nail gallery front and centre." },
    'camp.sun.open':  { it: 'Apri il sito di Sunshine Nail in una nuova scheda', en: 'Open the Sunshine Nail website in a new tab' },
    'camp.iki.short': { it: "Centro estetico a Lambrate, di Silvia: un sito ispirato all'ikigai giapponese, con un cerchio zen che si disegna e l'atmosfera di un'oasi di serenità.", en: "A beauty centre in Lambrate run by Silvia: a site inspired by the Japanese ikigai, with a zen circle that draws itself and the feel of an oasis of calm." },
    'camp.iki.open':  { it: 'Apri il sito di Ikigai in una nuova scheda', en: 'Open the Ikigai website in a new tab' },
    'camp.vt.short': { it: "Negozio di vintage di ricerca e modernariato a Lambrate, con grandi firme a prezzi vintage: il CAP «20134» diventa l'identità grafica di un sito-lookbook editoriale.", en: "A curated vintage and mid-century shop in Lambrate, with big labels at vintage prices: the postcode “20134” becomes the graphic identity of an editorial lookbook site." },
    'camp.vt.open':  { it: 'Apri il sito di 20134 Lambrate in una nuova scheda', en: 'Open the 20134 Lambrate website in a new tab' },
    'camp.cg.short': { it: "Bottega storica di belle arti a Lambrate dal 1990: «il paradiso degli artisti», con lo spettro dei pigmenti come firma grafica e ordine su WhatsApp con ritiro in negozio.", en: "A historic fine-arts shop in Lambrate since 1990: “an artists' paradise”, with a spectrum of pigments as its graphic signature and WhatsApp ordering with in-store pickup." },
    'camp.cg.open':  { it: 'Apri il sito del Colorificio Grossich in una nuova scheda', en: 'Open the Colorificio Grossich website in a new tab' },
    'camp.en.short': { it: "Enoteca e wine bar di Ciro a Milano: la firma è la scala dei prezzi, da € a €€€€, per trovare la bottiglia giusta a ogni budget, in un ambiente scuro e raffinato.", en: "Ciro's wine shop and bar in Milan: its signature is a price scale, from € to €€€€, to find the right bottle at any budget, in a dark, refined setting." },
    'camp.en.open':  { it: "Apri il sito dell'Enoteca Lambrate in una nuova scheda", en: 'Open the Enoteca Lambrate website in a new tab' },
    'camp.rig.short': { it: "Ristorante storico di Brera dal 1958, cucina toscana e milanese e ritrovo di artisti: le immagini sono incorniciate come i quadri alle pareti, e «le quattro sale» si visitano come una galleria.", en: "A historic Brera restaurant since 1958, Tuscan and Milanese cooking and an artists' haunt: images are framed like the paintings on its walls, and “the four rooms” are toured like a gallery." },
    'camp.rig.open':  { it: 'Apri il sito del Rigolo in una nuova scheda', en: 'Open the Rigolo website in a new tab' },
    'camp.tosc.short': { it: "Trattoria toscana in zona Sempione, di Davide: cucina genuina e porzioni abbondanti, con la tovaglia a quadretti che veste il sito e i piatti scritti a mano sulla lavagna.", en: "A Tuscan trattoria near Sempione run by Davide: honest food and generous portions, with the gingham tablecloth dressing the site and the dishes chalked by hand on the board." },
    'camp.tosc.open':  { it: 'Apri il sito del Toscanaccio in una nuova scheda', en: 'Open the Al Toscanaccio website in a new tab' },
    'camp.slab.short': { it: "Pasticceria asiatica virale in Chinatown: melon pan, cheesecake giapponese, mochi, dorayaki e torte kawaii, presentati come una vetrina bento di tessere pastello.", en: "A viral Asian pastry shop in Chinatown: melon pan, Japanese cheesecake, mochi, dorayaki and kawaii cakes, laid out like a bento window of pastel tiles." },
    'camp.slab.open':  { it: "Apri il sito di S'Lab in una nuova scheda", en: 'Open the S’Lab website in a new tab' },
    'camp.mel.short': { it: "Cappelleria storica di Milano dal 1914, in Chinatown: cappelli uomo e donna su tre piani, Borsalino e su misura, con un catalogo a silhouette e il sigillo «1914».", en: "A historic Milan hat shop since 1914, in Chinatown: hats for men and women over three floors, Borsalino and bespoke, with a silhouette catalogue and the “1914” seal." },
    'camp.mel.open':  { it: 'Apri il sito della Cappelleria Melegari in una nuova scheda', en: 'Open the Cappelleria Melegari website in a new tab' },
    'camp.ap.short': { it: "Barbershop storico affacciato su via Sarpi dal 1937, Bottega Storica di Milano: taglio a forbice e il palo del barbiere a righe che scandisce tutta la pagina.", en: "A historic barbershop looking onto via Sarpi since 1937, a Milan Heritage Business: scissor cuts and the striped barber's pole running right through the page." },
    'camp.ap.open':  { it: "Apri il sito de L'antico Parrucchiere della Paolo Sarpi in una nuova scheda", en: 'Open the L’antico Parrucchiere della Paolo Sarpi website in a new tab' },
    'camp.cz.short': { it: "Negozio di calzature di famiglia in zona Sempione, dal 1956 e tre generazioni: comfort e grandi marche raccolti in un «muro delle firme», con Birkenstock in evidenza.", en: "A family shoe shop near Sempione, since 1956 and three generations: comfort and big brands gathered on a “wall of names”, with Birkenstock in the spotlight." },
    'camp.cz.open':  { it: 'Apri il sito di Carozza Calzature in una nuova scheda', en: 'Open the Carozza Calzature website in a new tab' },
    'camp.nv.short': { it: "Erboristeria storica in Chinatown dal 1952 e tre generazioni: oltre cinquecento erbe nei vasi e tisane su misura, con le card «cosa trovi» disegnate come etichette d'apoteca.", en: "A historic herbalist's in Chinatown since 1952 and three generations: over five hundred herbs in jars and made-to-measure teas, with “what you'll find” cards drawn like apothecary labels." },
    'camp.nv.open':  { it: "Apri il sito dell'Erboristeria Novetti in una nuova scheda", en: 'Open the Erboristeria Novetti website in a new tab' },
    'camp.gs.short': { it: "Piccola gelateria storica di Brera, da oltre trent'anni a conduzione famigliare: gelato artigianale poco zuccherato, presentato come una carta dei gusti tra classici e novità di stagione.", en: "A small historic gelateria in Brera, family-run for over thirty years: low-sugar artisan gelato, presented as a menu of flavours between classics and seasonal specials." },
    'camp.gs.open':  { it: 'Apri il sito della Gelateria Solferino in una nuova scheda', en: 'Open the Gelateria Solferino website in a new tab' },
    'camp.mat2.short': { it: "Antica trattoria milanese di Brera dal 1962: ossobuco, risotto giallo e cotoletta della vecchia Milano, con il matterello («matarèl») come firma e il menù in dialetto meneghino.", en: "A time-honoured Milanese trattoria in Brera since 1962: ossobuco, saffron risotto and cotoletta of old Milan, with the rolling pin (“matarèl”) as its signature and a menu in Milanese dialect." },
    'camp.mat2.open':  { it: 'Apri il sito di Al Matarel in una nuova scheda', en: 'Open the Al Matarel website in a new tab' },
    'camp.maz.short': { it: "Hair studio storico di Brera dal 1951, accanto al Piccolo Teatro: eleganza editoriale e la locandina «Hanno scelto Mazzotta», dai grandi nomi del teatro e del cinema.", en: "A historic Brera hair studio since 1951, next to the Piccolo Teatro: editorial elegance and the “They chose Mazzotta” playbill, featuring the great names of theatre and cinema." },
    'camp.maz.open':  { it: 'Apri il sito di Benito & Salvatore Mazzotta in una nuova scheda', en: 'Open the Benito & Salvatore Mazzotta website in a new tab' },
    'camp.oa.short': { it: "Enoteca con degustazione a conduzione femminile in zona Sempione, di tre donne: una linea immaginaria da Udine a Potenza racconta i vini di Friuli e Basilicata, calice per calice.", en: "A women-run wine bar with tastings near Sempione: an imaginary line from Udine to Potenza tells the wines of Friuli and Basilicata, glass by glass." },
    'camp.oa.open':  { it: "Apri il sito di Un'Ottima Annata in una nuova scheda", en: 'Open the Un’Ottima Annata website in a new tab' },
    'camp.ta.short': { it: "Ristorante indiano storico all'Arco della Pace dal 1997: curry e tandoor con cinque cuochi indiani, quasi tutto gluten free e tanta scelta veg, sotto il segno di una stella a otto punte.", en: "A historic Indian restaurant by the Arco della Pace since 1997: curry and tandoor with five Indian chefs, almost all gluten-free and plenty of veg options, under an eight-pointed star." },
    'camp.ta.open':  { it: 'Apri il sito di Tara Ristorante Indiano in una nuova scheda', en: 'Open the Tara Ristorante Indiano website in a new tab' },
    'camp.tp.short': { it: "Trattoria toscana storica di Brera dal 1959, ritrovo di artisti e giornalisti: cucina di campagna e orario continuato tutti i giorni, con la torre pendente come emblema.", en: "A historic Tuscan trattoria in Brera since 1959, a haunt of artists and journalists: country cooking served all day, every day, with the leaning tower as its emblem." },
    'camp.tp.open':  { it: 'Apri il sito di Trattoria Torre di Pisa in una nuova scheda', en: 'Open the Trattoria Torre di Pisa website in a new tab' },
    'camp.ur.short': { it: "Boutique di moda vintage femminile nel cuore di Brera dal 1974, la selezione di Lisa: borse, giacche, seta e gioielli, con il cartellino appeso come filo conduttore del sito.", en: "A women's vintage fashion boutique in the heart of Brera since 1974, Lisa's selection: bags, jackets, silk and jewellery, with the swing-tag as the thread running through the site." },
    'camp.ur.open':  { it: 'Apri il sito di Urzì Vintage Selection in una nuova scheda', en: 'Open the Urzì Vintage Selection website in a new tab' },
    'camp.rg.short': { it: "Gastronomia e salumeria storica di Brera dal 1971: salumi, formaggi, pasta fresca a mano e piatti pronti, con i cinque reparti «al banco» come un percorso numerato.", en: "A historic Brera deli and salumeria since 1971: cured meats, cheeses, hand-made fresh pasta and ready dishes, with the five counters walked as a numbered route." },
    'camp.rg.open':  { it: 'Apri il sito di Rossi & Grassi in una nuova scheda', en: 'Open the Rossi & Grassi website in a new tab' },
    'camp.oba.short': { it: "Osteria di cucina mediterranea in zona Sempione: uno spazio intimo a lume di candela, dove la parete di foto in bianco e nero si accende di colore al tuo passaggio.", en: "A Mediterranean osteria near Sempione: an intimate, candlelit space where the wall of black-and-white photos lights up with colour as you pass." },
    'camp.oba.open':  { it: 'Apri il sito di Osteria del Borgo Antico in una nuova scheda', en: 'Open the Osteria del Borgo Antico website in a new tab' },
    'camp.bok.short': { it: "Sala da tè di Hong Kong in Chinatown dal 2019: dim sum fatto a mano dentro una vera biblioteca, con le pareti di libri che diventano il menù «gli scaffali dei sapori».", en: "A Hong Kong tea house in Chinatown since 2019: hand-made dim sum inside a real library, where the walls of books become the menu — “the shelves of flavours”." },
    'camp.bok.open':  { it: 'Apri il sito di Bokok in una nuova scheda', en: 'Open the Bokok website in a new tab' },
    'camp.mpb.short': { it: "Barbiere e bottega storica di Brera dal 1953, tra mobili antichi e acque profumate: «solo forbici, niente macchinetta», e alla bottega si parla di cinema, sport e vita.", en: "A historic Brera barber's since 1953, among antique furniture and scented waters: “scissors only, no clippers”, where the talk is of cinema, sport and life." },
    'camp.mpb.open':  { it: 'Apri il sito di Matteo Palermo Barbiere in una nuova scheda', en: 'Open the Matteo Palermo Barbiere website in a new tab' },
    'camp.ca.short': { it: "Micro banco di street food cinese in Chinatown, aperto fino a tarda notte e dedicato all'anatra intera: una guida ai tagli spiega ogni preparazione, dal collo alle ali.", en: "A tiny Chinese street-food counter in Chinatown, open late and devoted to the whole duck: a guide to the cuts explains each preparation, from neck to wings." },
    'camp.ca.open':  { it: "Apri il sito di Collo d'Anatra in una nuova scheda", en: 'Open the Collo d’Anatra website in a new tab' },
    'camp.dm.short': { it: "Libreria antiquaria e galleria di Brera: libri antichi e rari, incunaboli e libri d'artista, raccontati come un frontespizio tipografico lungo sette secoli, dal Quattrocento a oggi.", en: "An antiquarian bookshop and gallery in Brera: antique and rare books, incunabula and artists' books, told like a letterpress title page spanning seven centuries, from the 1400s to today." },
    'camp.dm.open':  { it: 'Apri il sito di Libreria Galleria Demetra in una nuova scheda', en: 'Open the Libreria Galleria Demetra website in a new tab' },
    'camp.pf.short': { it: "Bottega di famiglia di pasta fresca in zona Sempione, una delle poche rimaste a Milano: ravioli, gnocchi, piatti pronti e torte, in una vetrina calda e casalinga.", en: "A family fresh-pasta shop near Sempione, one of the few left in Milan: ravioli, gnocchi, ready dishes and cakes, in a warm, homey showcase." },
    'camp.pf.open':  { it: 'Apri il sito di Pasta della Francesca in una nuova scheda', en: 'Open the Pasta della Francesca website in a new tab' },
    'camp.cd.short': { it: "Grande ristorante di cucine fusion asiatiche tra Sarpi e Corso Como: un menù-atlante che viaggia tra «le cucine d'Asia», dal wok al sushi, in un ambiente ampio e scenografico.", en: "A large pan-Asian fusion restaurant between Sarpi and Corso Como: an atlas-menu that travels across “the kitchens of Asia”, from wok to sushi, in a broad, scenographic setting." },
    'camp.cd.open':  { it: 'Apri il sito di Chateau Dufan in una nuova scheda', en: 'Open the Chateau Dufan website in a new tab' },
    'camp.mad.short': { it: "La trattoria più antica di Milano, dal 1722, nel cuore del Ticinese: cucina di casa e cortile con bocciofila, con l'edicola votiva che le dà il nome e trecento anni di storia.", en: "The oldest trattoria in Milan, since 1722, in the heart of Ticinese: home cooking and a courtyard with a bowls green, with the votive shrine it's named after and three hundred years of history." },
    'camp.mad.open':  { it: 'Apri il sito della Trattoria Madonnina in una nuova scheda', en: 'Open the Trattoria Madonnina website in a new tab' },
    'camp.cas.short': { it: "Salumeria e drogheria di famiglia a Porta Romana dal 1898, patria dei mondeghini: una bottega che parla ancora milanese, con la targa «chi se parla anca el milanes» all'ingresso.", en: "A family deli and grocery in Porta Romana since 1898, home of the mondeghini: a shop that still speaks Milanese, with the sign “here we also speak Milanese” at the door.", },
    'camp.cas.open':  { it: 'Apri il sito della Salumeria Drogheria Cassani in una nuova scheda', en: 'Open the Salumeria Drogheria Cassani website in a new tab' },
    'camp.boa.short': { it: "Cartoleria storica di Porta Romana dal 1942, oggi delle nipoti Chiara e Giulia: un sito a forma di quaderno, scritto a mano e siglato dal timbro «Autentica 1942».", en: "A historic Porta Romana stationery shop since 1942, now run by granddaughters Chiara and Giulia: a site shaped like a notebook, hand-written and stamped “Genuine 1942”.", },
    'camp.boa.open':  { it: 'Apri il sito della Cartoleria Boati in una nuova scheda', en: 'Open the Cartoleria Boati website in a new tab' },
    'camp.gal.short': { it: "Calzoleria storica del Ticinese dal 1955, in piazza Sant'Eustorgio: le vere friulane in velluto, «una per ogni colore», per chi cerca la scarpa fatta come una volta.", en: "A historic Ticinese shoemaker since 1955, on piazza Sant'Eustorgio: real velvet friulane slippers, “one for every colour”, for anyone after shoes made the old way.", },
    'camp.gal.open':  { it: 'Apri il sito di Calzature Gallon in una nuova scheda', en: 'Open the Calzature Gallon website in a new tab' },
    'camp.chi.short': { it: "Ottica storica di Porta Romana dal 1914, quattro generazioni: accanto agli occhiali, «il museo dell'ottica» con gli strumenti d'epoca raccolti in negozio.", en: "A historic Porta Romana optician since 1914, four generations: alongside the glasses, “the museum of optics” with vintage instruments gathered in the shop.", },
    'camp.chi.open':  { it: "Apri il sito dell'Ottica Chierichetti in una nuova scheda", en: 'Open the Ottica Chierichetti website in a new tab' },
    'camp.psy.short': { it: "Negozio di dischi storico del Ticinese dal 1988, di Fabio e Amos: un sito nero in stile gig-poster fai-da-te, dove il cartellino racconta ogni vinile.", en: "A historic Ticinese record shop since 1988, run by Fabio and Amos: a black, DIY gig-poster site where the price tag tells the story of every record.", },
    'camp.psy.open':  { it: 'Apri il sito di Psycho in una nuova scheda', en: 'Open the Psycho website in a new tab' },
    'camp.mido.short': { it: "Ristorante arabo storico del Ticinese dal 1990, della famiglia Nassar: couscous cotto otto ore e mezze servite in tre misure, sotto un arco arabo disegnato su misura.", en: "A historic Middle Eastern restaurant in Ticinese since 1990, run by the Nassar family: couscous cooked for eight hours and mezze served in three sizes, beneath a bespoke Arabic arch.", },
    'camp.mido.open':  { it: 'Apri il sito di Mido in una nuova scheda', en: 'Open the Mido website in a new tab' },
    'camp.som.short': { it: "Pasticceria storica di Porta Romana dal 1919, premiata e famosa per gli Amaretti Morbidi: la sua storia si legge in tre epoche, dal 1919 a oggi, tra medaglie e vetrine.", en: "A historic Porta Romana pastry shop since 1919, award-winning and famous for its soft amaretti: its story unfolds across three eras, from 1919 to today, among medals and windows.", },
    'camp.som.open':  { it: 'Apri il sito della Pasticceria Sommariva in una nuova scheda', en: 'Open the Pasticceria Sommariva website in a new tab' },
    'camp.bele.short': { it: "Laboratorio orafo tra Crocetta e Porta Romana, di Giacomo e figlio: gioielli su misura, restauri e corallo, raccontati «al banchetto», dal desiderio al gioiello.", en: "A goldsmith's workshop between Crocetta and Porta Romana, run by Giacomo and his son: bespoke jewellery, restorations and coral, told “at the bench”, from wish to jewel.", },
    'camp.bele.open':  { it: 'Apri il sito di Belè Milano in una nuova scheda', en: 'Open the Belè Milano website in a new tab' },
    'camp.col.short': { it: "Torrefazione e bar di quartiere nel Ticinese, a conduzione femminile: caffè tostato in laboratorio e servito al banco, con «le miscele» sfuse dalla mattina all'aperitivo.", en: "A neighbourhood coffee roaster and bar in Ticinese, women-owned: coffee roasted in-house and served at the counter, with “the blends” loose from morning to aperitivo.", },
    'camp.col.open':  { it: 'Apri il sito della Torrefazione Colombia in una nuova scheda', en: 'Open the Torrefazione Colombia website in a new tab' },
    'camp.vig.short': { it: "Barbiere storico di Porta Vigentina dal 1968, oggi portato avanti da tre barbiere: «le regole della bottega», il taglio classico e la «barba ricamata» a mano.", en: "A historic Porta Vigentina barber's since 1968, now carried on by three women barbers: “the rules of the shop”, the classic cut and the hand-“embroidered” beard.", },
    'camp.vig.open':  { it: 'Apri il sito di I Vigentini in una nuova scheda', en: 'Open the I Vigentini website in a new tab' },
    'camp.grp.short': { it: "Vintage rock e streetstyle nel Ticinese dal 2011, di Alice: «il vintage a peso», tra pezzi a prezzo fisso e capi al chilo, tutti rilavorati a mano.", en: "Rock and streetstyle vintage in Ticinese since 2011, run by Alice: “vintage by weight”, between fixed-price pieces and clothes by the kilo, all reworked by hand.", },
    'camp.grp.open':  { it: 'Apri il sito di Groupies Vintage in una nuova scheda', en: 'Open the Groupies Vintage website in a new tab' },
    'camp.gil.short': { it: "Rosticceria e gastronomia di famiglia in Corso Italia dal 1968: piatti pronti fatti ogni mattina, con «il menù del giorno» scritto a mano su una lavagna che cambia ogni giorno.", en: "A family rotisserie and deli on Corso Italia since 1968: ready dishes cooked fresh each morning, with “the daily menu” hand-written on a board that changes every day.", },
    'camp.gil.open':  { it: 'Apri il sito della Rosticceria Gilardi in una nuova scheda', en: 'Open the Rosticceria Gilardi website in a new tab' },
    'camp.fio.short': { it: "La boutique di fiori di Elisabetta a Porta Vigentina: bouquet, composizioni ed eventi che seguono le quattro stagioni, con quella del momento che si accende in pagina.", en: "Elisabetta’s flower boutique in Porta Vigentina, Milan: bouquets, arrangements and events that follow the four seasons — with the current one lighting up on the page.", },
    'camp.fio.open':  { it: 'Apri il sito di Fiorin Fiorello in una nuova scheda', en: 'Open the Fiorin Fiorello website in a new tab' },
    'camp.cav.short': { it: "Enoteca «senza insegna» a Porta Romana: centinaia di etichette e vini al calice in una cantina che si trova solo se la cerchi, aperta fino a tarda sera.", en: "A wine bar with no sign in Porta Romana: hundreds of labels and wines by the glass in a cellar you find only if you look for it, open late into the evening.", },
    'camp.cav.open':  { it: 'Apri il sito di Il Cavallante in una nuova scheda', en: 'Open the Il Cavallante website in a new tab' },
    'camp.bet.short': { it: "Trattoria milanese «come una volta» a Porta Romana: sale calde con le tovaglie a scacchi e i classici — cotoletta, ossobuco, mondeghili — fatti come da ricetta originale, da Monica.", en: "A Milanese trattoria «just like it used to be» in Porta Romana: warm rooms with checked tablecloths and the classics — cotoletta, ossobuco, mondeghini — made from the original recipe, by Monica.", },
    'camp.bet.open':  { it: 'Apri il sito della Bettola di Piero in una nuova scheda', en: 'Open the La Bettola di Piero website in a new tab' },
    'camp.afm.short': { it: "Forno di quartiere sul Corso San Gottardo: pane, focaccia, rosticceria calda e pasticceria sfornati in giornata. La struttura «tre banchi» — pane, salato, dolce — e la firma «il forno non si ferma».", en: "A neighbourhood bakery on Corso San Gottardo: bread, focaccia, hot savoury food and pastry baked through the day. A “three counters” structure — bread, savoury, sweet — and the “the oven never stops” signature.", },
    'camp.afm.open':  { it: "Apri il sito dell'Antico Forno in una nuova scheda", en: 'Open the Antico Forno website in a new tab' },
    'camp.non.short': { it: "Vineria di vini naturali a Porta Romana (Via Orti): il nome è già un manifesto. Struttura a «tre negazioni» — NON la solita carta / NON i soliti piattini / NON la solita accoglienza — dark+arancione, tipografia d'impatto.", en: "A natural-wine bar in Porta Romana (Via Orti): the name is already a manifesto. Built on “three negations” — not the usual list / not the usual plates / not the usual welcome — dark + orange, bold typography.", },
    'camp.non.open':  { it: 'Apri il sito di NON la solita vineria in una nuova scheda', en: 'Open the NON la solita vineria website in a new tab' },
    'camp.cpi.short': { it: "Libreria d'arte a Porta Romana, allestita come una galleria dalla storica dell'arte Michela. Gesto-firma: il senso del nome (la stanza-opera di Mantegna) + i libri scelti «come opere».", en: "An art bookshop in Porta Romana, set up like a gallery by art historian Michela. Signature: the meaning of the name (Mantegna's room-as-artwork) and books chosen “like works of art”.", },
    'camp.cpi.open':  { it: 'Apri il sito de La Camera Picta in una nuova scheda', en: 'Open the La Camera Picta website in a new tab' },
    'camp.bgt.short': { it: "Calzolaio e artigiano del cuoio in Via Orti (Porta Romana): risuola e restaura scarpe, borse e cinture, e crea pelletteria a mano. Gesto-firma «el bagatt» + la doppia «si ripara / si crea».", en: "A cobbler and leather artisan in Via Orti (Porta Romana): resoles and restores shoes, bags and belts, and makes leather goods by hand. Signature: “el bagatt” + the “repaired / handmade” duality.", },
    'camp.bgt.open':  { it: 'Apri il sito de La Bottega del Bagatt in una nuova scheda', en: 'Open the La Bottega del Bagatt website in a new tab' },
    'camp.apf.short': { it: "Dal 1927 in Viale Bligny, tra Porta Romana e i Navigli: pizza al trancio nel forno a legna da asporto e cucina toscana con la vera fiorentina alla griglia, nello stesso locale da quasi un secolo.", en: "Since 1927 on Viale Bligny, between Porta Romana and the Navigli: wood-fired takeaway pizza al trancio and Tuscan cooking with a real grilled bistecca alla fiorentina, in the same place for almost a century.", },
    'camp.fdf.short': { it: "Il forno-caffè di San Siro che sforna «pane e fantasia» dal 1962: michette e brioches al mattino, pizza al taglio e pasta fresca a mezzogiorno — orario continuato dalle 7 alle 20, coi prezzi scritti a mano come una volta.", en: "The San Siro bakery-café baking «bread and fantasy» since 1962: michette rolls and brioches in the morning, pizza by the slice and fresh pasta at noon — open all day 7 to 8pm, with prices handwritten the old way.", },
    'camp.fdf.open': { it: "Apri il sito de Il Forno Caffè delle Fantasie in una nuova scheda", en: "Open Il Forno Caffè delle Fantasie's website in a new tab", },
    'camp.cv.short': { it: "La bottega del colore di De Angeli, dal 1936: belle arti, vernici, bombolette spray e colori su misura — con una strada disegnata che racconta novant'anni, dalla via sterrata dei carri ai murales di oggi.", en: "De Angeli's colour shop, since 1936: fine arts, paints, spray cans and made-to-measure colours — with a drawn road telling ninety years, from the cart-worn dirt street to today's murals.", },
    'camp.cv.open': { it: "Apri il sito del Colorificio Vercellese in una nuova scheda", en: "Open Colorificio Vercellese's website in a new tab", },
    'camp.wp.short': { it: "Il salone di Piazza De Angeli con 4,9 su 2.017 recensioni: capelli, viso e corpo in un unico luogo. Gesto-firma «i numeri in vetrina» — il team come griglia, ognuno col suo rating reale che sale allo scroll.", en: "The Piazza De Angeli salon with 4.9 from 2,017 reviews: hair, face and body under one roof. Signature gesture «the numbers on show» — the team as a grid, each with their real rating counting up on scroll.", },
    'camp.wp.open': { it: "Apri il sito di Wellness Parrucchieri in una nuova scheda", en: "Open Wellness Parrucchieri's website in a new tab", },
    'camp.molf.short': { it: "Abbigliamento maschile e sartoria su misura in Corso Vercelli dal 1938: tre generazioni, una bottega. Concept editoriale «stile a misura d'uomo» con la firma «profumo di sartorialità» — l'orlo che si cuce allo scroll.", en: "Menswear and made-to-measure tailoring on Corso Vercelli since 1938: three generations, one workshop. Editorial concept «a man's style, made to measure» with the «scent of tailoring» signature — the hem stitched on scroll.", },
    'camp.molf.open': { it: "Apri il sito di De Molfetta in una nuova scheda", en: "Open De Molfetta's website in a new tab", },
    'camp.lc.short': { it: "Trattoria e pizzeria di San Siro a due passi dal Meazza: pesce, pizza e griglia con porzioni giganti. Concept marino «tre anime, una conchiglia» — il guscio come marchio e le tre cucine in scena.", en: "A trattoria and pizzeria in San Siro, steps from the Meazza: seafood, pizza and grill with huge portions. A marine concept, «three souls, one shell» — the shell as its mark and the three kitchens on stage.", },
    'camp.lc.open': { it: "Apri il sito de La Conchiglia in una nuova scheda", en: "Open La Conchiglia's website in a new tab", },
    'camp.ps.short': { it: "Forno e pasticceria di famiglia dal 1976 in Via Marghera, di origini sarde. Concept «il pane sardo, carta da musica»: le radici in Sardegna (carasau e guttiau) e le tre anime pane/salato/dolce, con le linee del carasau che si disegnano.", en: "A family bakery and pastry shop since 1976 on Via Marghera, of Sardinian origin. Concept «Sardinian bread, sheet-music thin»: roots in Sardinia (carasau and guttiau) and the three worlds bread/savoury/sweet, with the carasau lines drawing themselves.", },
    'camp.ps.open': { it: "Apri il sito del Panificio Sanna in una nuova scheda", en: "Open the Panificio Sanna website in a new tab", },
    'camp.gb.short': { it: "Centro estetico di Monte Rosa da oltre 20 anni, autorizzato al metodo Henry Chenot. Concept «la bellezza viene da dentro»: il giglio che si schiude e la filosofia dell'armonia, viso/corpo/massaggi coi prezzi veri, in un'oasi verde salvia.", en: "A beauty centre in Monte Rosa for over 20 years, authorised in the Henry Chenot method. Concept «beauty comes from within»: the lily that unfurls and the philosophy of harmony, face/body/massage with real prices, in a sage-green oasis.", },
    'camp.gb.open': { it: "Apri il sito de Il Giglio Benessere in una nuova scheda", en: "Open the Il Giglio Benessere website in a new tab", },
    'camp.mu.short': { it: "Enoteca e whiskeria a Conciliazione: ~200 vini e ~100 whisky. Concept sulla dualità del nome — il malto (whisky/birre) e l'uva (vino) che si incontrano nel «&», il grande bancone.", en: "A wine and whisky bar at Conciliazione: ~200 wines and ~100 whiskies. A concept on the duality of the name — the malt (whisky/beer) and the grape (wine) meeting at the «&», the big counter.", },
    'camp.mu.open': { it: "Apri il sito de Il Malto e l'Uva in una nuova scheda", en: "Open the Il Malto e l'Uva website in a new tab", },
    'camp.ab.short': { it: "La birreria pre-stadio a 300 metri da San Siro: birre alla spina, popcorn con ogni birra, Elvis & Irisild. Concept «prima di San Siro» col brindisi del loro logo, poster matchday.", en: "The pre-match pub 300 metres from San Siro: beers on tap, popcorn with every beer, Elvis & Irisild. A «before San Siro» concept with the toast from their logo, matchday poster.", },
    'camp.ab.open': { it: "Apri il sito di All Beer in una nuova scheda", en: "Open the All Beer website in a new tab", },
    'camp.sv.short': { it: "L'enoteca di quartiere di San Siro col vino sfuso «come una volta»: dal Piave al Piemonte, un litro a pochi euro, su lavagna. Concept caldo dall'insegna reale e Alessandro l'oste.", en: "The neighbourhood wine shop in San Siro with bulk wine «like the old days»: from Piave to Piemonte, a litre for a few euros, on a chalkboard. A warm concept from their real sign and Alessandro the host.", },
    'camp.sv.open': { it: "Apri il sito di Semplicemente Vino in una nuova scheda", en: "Open the Semplicemente Vino website in a new tab", },
    'camp.catal.short': { it: "La macelleria dei tre fratelli del trapanese al Mercato Wagner, da tre generazioni. Concept editoriale «dal trapanese al Mercato Wagner» con la firma di famiglia — i «messinesi» — e la reputazione di «miglior macelleria di Milano».", en: "The three Trapani-born brothers’ butcher at Mercato Wagner, for three generations. An editorial concept «from the Trapani area to Mercato Wagner» with the family signature — the «messinesi» — and a reputation as «the best butcher in Milan».", },
    'camp.catal.open': { it: "Apri il sito della Macelleria F.lli Catalano in una nuova scheda", en: "Open the Macelleria F.lli Catalano website in a new tab", },
    'camp.pa.short': { it: "La pizzeria storica di Corso Vercelli, dal 1960: la pizza al trancio milanese, in un locale «fermo agli anni '80». Un sito vintage rosso dalla loro insegna reale, con le recensioni che la dicono «la migliore di Milano».", en: "The historic pizzeria on Corso Vercelli, since 1960: Milanese pizza by the slice, in a place «stuck in the ’80s». A vintage red site from their real sign, with reviews calling it «the best in Milan».", },
    'camp.pa.open': { it: "Apri il sito della Pizzeria dell'Angelo in una nuova scheda", en: "Open the Pizzeria dell'Angelo website in a new tab", },
    'camp.roby.short': { it: "La bottega di Corso Vercelli, dal 1966, dove Roby — figlio d'arte — fa durare le scarpe una vita: cura, riparazioni e cinture in pelle e coccodrillo su misura. Un sito dai toni caldi del cuoio, sulle sue foto reali, con le recensioni che lo dicono «un vero artista».", en: "The Corso Vercelli workshop, since 1966, where Roby — born to the trade — makes shoes last a lifetime: care, repairs and belts in leather and crocodile, cut to size. A site in warm leather tones, on his real photos, with reviews calling him «a true artist».", },
    'camp.roby.open': { it: "Apri il sito di Roby Shop in una nuova scheda", en: "Open the Roby Shop website in a new tab", },
    'camp.sinto.short': { it: "La bottega storica dell'elettronica di zona De Angeli, dal 1954: radio, hi-fi, componenti anche datati, riparazioni — e oggi monopattini. Concept dark radio-heritage col «quadrante» che si sintonizza fra sei mondi e la targa d'oro Bottega Storica.", en: "The historic electronics workshop of the De Angeli district, since 1954: radios, hi-fi, dated components, repairs — and today scooters. A dark radio-heritage concept with a «dial» that tunes across six worlds and the gold Historic-Shop plaque.", },
    'camp.sinto.open': { it: "Apri il sito di Sintolvox in una nuova scheda", en: "Open the Sintolvox website in a new tab", },
    'camp.barnabe.short': { it: "La sanitaria ortopedica storica di Piazza Wagner, da generazioni: calze elastiche, busti e fasce, tutori, ausili per camminare. Concept verde heritage col «filo generazionale» (nonni → genitori → tu) che si disegna allo scroll e la croce verde.", en: "The historic orthopaedic & medical shop of Piazza Wagner, for generations: elastic stockings, lumbar braces, supports, walking aids. A green heritage concept with the «generational thread» (grandparents → parents → you) that draws on scroll and the green cross.", },
    'camp.barnabe.open': { it: "Apri il sito di Barnabè in una nuova scheda", en: "Open the Barnabè website in a new tab", },
    'camp.tv.short': { it: "La torrefazione storica all'angolo di Corso Vercelli, dal 1953: cinque caffè da miscelare alla parete di silos, la tazzina cremosa, la brioche di pasticceria. Concept warm coffee-heritage col gesto-firma dell'AROMA — volute di profumo che si disegnano allo scroll — e «Vercelli» in corsivo come l'insegna reale.", en: "The historic roastery on the corner of Corso Vercelli, since 1953: five coffees to blend from the wall of silos, the creamy cup, the pastry-shop brioche. A warm coffee-heritage concept with the AROMA signature — wisps of scent that draw on scroll — and «Vercelli» in script like the real sign.", },
    'camp.tv.open': { it: "Apri il sito della Torrefazione Vercelli in una nuova scheda", en: "Open the Torrefazione Vercelli website in a new tab", },
    'camp.ot.short': { it: "La birreria-pub fronte Stadio San Siro: HB München e Tennent's alla spina, panini fatti al momento, la partita su Sky e i concerti. Concept dark matchday col gesto-firma «a qualsiasi ora» — la giornata del pub (colazione → aperitivo → la partita → notte) col momento corrente acceso in tempo reale.", en: "The beer-house pub in front of Stadio San Siro: HB München and Tennent's on tap, sandwiches made to order, the match on Sky and the concerts. A dark matchday concept with the «any time» signature — the pub's day (breakfast → aperitivo → the match → night) with the current moment lit in real time.", },
    'camp.ot.open': { it: "Apri il sito dell'Old Tenconi Pub in una nuova scheda", en: "Open the Old Tenconi Pub website in a new tab", },
    'camp.fc.short': { it: "La merceria storica di Piazza De Angeli, dal 1965: bottoni gioiello, passamanerie, pizzi, filati e lane. Concept caldo col gesto-firma «SI TROVA TUTTO» — la caverna del merciaio: un ticker-inventario che non finisce mai e il motivo-bottone.", en: "The historic haberdashery of Piazza De Angeli, since 1965: jewel buttons, trimmings, lace, yarns and wool. A warm concept with the «FIND EVERYTHING» signature — the haberdasher's cave: a never-ending inventory ticker and the button motif.", },
    'camp.fc.open': { it: "Apri il sito di Foderami Castelli in una nuova scheda", en: "Open the Foderami Castelli website in a new tab", },
    'camp.ad.short': { it: "La frutteria-café ibrida di Piazzale Segesta: frutta e verdura che diventano frullati, centrifughe, crêpes e colazione — tra piante e fiori, col dehor. Concept fresco botanico col gesto-firma «PIÙ DI UNA FRUTTERIA» (le sei anime + motivo-foglia) e «Adelaide» in corsivo come il neon reale.", en: "The hybrid greengrocer-café of Piazzale Segesta: fruit and veg that turn into smoothies, juices, crêpes and breakfast — among plants and flowers, with a terrace. A fresh botanical concept with the «MORE THAN A GREENGROCER» signature (the six souls + leaf motif) and «Adelaide» in script like the real neon sign.", },
    'camp.ad.open': { it: "Apri il sito di Adelaide in una nuova scheda", en: "Open the Adelaide website in a new tab", },
    'camp.stm.short': { it: "La classica pasticceria di quartiere di Via San Siro: brioche alla crema, bignè, i krapfen del weekend, le torte su ordinazione (Chantilly e frutti di bosco). Concept caldo col gesto-firma «LA MATTINA DEL QUARTIERE» — la pasticceria-rituale del mattino (aperta solo 07:30-13, chiusa il lunedì).", en: "The classic neighbourhood pastry shop of Via San Siro: cream brioche, choux buns, the weekend krapfen, cakes to order (Chantilly and berries). A warm concept with the «THE NEIGHBOURHOOD'S MORNING» signature — the morning-ritual pastry shop (open only 7:30am-1pm, closed Mondays).", },
    'camp.stm.open': { it: "Apri il sito della Pasticceria Santa Maria in una nuova scheda", en: "Open the Pasticceria Santa Maria website in a new tab", },
    'camp.apf.open':  { it: 'Apri il sito di Antica Pizzeria Fiorentina in una nuova scheda', en: 'Open the Antica Pizzeria Fiorentina website in a new tab' },
    'camp.cn.short':  { it: "Colorificio, belle arti e ferramenta dal 1954 a Porta Romana: la «mazzetta» dei colori in home e il tintometro che replica qualunque tinta tu porti.", en: "A paint, fine-arts and hardware shop since 1954 in Porta Romana: a wall of colour swatches on the homepage and the tinting machine that matches any shade you bring.", },
    'camp.cn.open':   { it: 'Apri il sito del Colorificio Nelli in una nuova scheda', en: 'Open the Colorificio Nelli website in a new tab' },
    'camp.cam.short': { it: "Camicie su misura, Ingram e no stiro, uomo e donna: «i tessuti» in home e la camicia cucita dal collo ai polsini, all'angolo di Porta Romana.", en: "Made-to-measure, Ingram and no-iron shirts for men and women: a fabric wall on the homepage and the shirt sewn from collar to cuffs, on the corner of Porta Romana.", },
    'camp.cam.open':  { it: 'Apri il sito della Camiceria di Porta Romana in una nuova scheda', en: 'Open the Camiceria di Porta Romana website in a new tab' },
    'cat.m.camiceria': { it: "Camiceria", en: "Shirtmaker" },
    'cat.m.sartoria': { it: "Sartoria", en: "Tailoring" },
    'cat.m.macelleria': { it: "Macelleria", en: "Butcher" },
    'camp.erc.short': { it: "Macelleria di qualità in zona San Gottardo: carne di prima scelta e bistecche frollate, i preparati pronti da cuocere e la dispensa a marchio Ercole, sotto lo stemma «una buona carne».", en: "A quality butcher near San Gottardo: first-choice meat and dry-aged steaks, ready-to-cook specialties and the Ercole-label pantry, under the “good meat” crest.", },
    'camp.erc.open':  { it: 'Apri il sito della Macelleria Ercole in una nuova scheda', en: 'Open the Macelleria Ercole website in a new tab' },
    'camp.mat.short': { it: "Pub storico del Politecnico in Città Studi: la vetrina segue «la serata», dall'aperitivo all'ultimo giro, con le serate a tema come le Peaky Blinders.", en: "A historic Politecnico pub in Città Studi: the site follows “the night”, from aperitivo to last round, with themed evenings like the Peaky Blinders nights." },
    'camp.mat.open':  { it: 'Apri il sito di Matricola Pub in una nuova scheda', en: 'Open the Matricola Pub website in a new tab' },
    'camp.alo.short': { it: "Gelateria siciliana storica in Città Studi: granita, latte di mandorla e «il miglior gelato di Milano», con i gusti presentati come palline colorate che si sovrappongono.", en: "A historic Sicilian gelateria in Città Studi: granita, almond milk and “the best gelato in Milan”, with the flavours shown as overlapping coloured scoops." },
    'camp.alo.open':  { it: 'Apri il sito di Aloha Gelateria in una nuova scheda', en: 'Open the Aloha Gelateria website in a new tab' },
    'camp.olb.short': { it: "Piccolo centro estetico e solarium a Città Studi, gestito da donne: il listino reale è il cuore del sito, con il trattamento T-Shape in evidenza e prenotazione su WhatsApp.", en: "A small women-run beauty centre and solarium in Città Studi: the real price list is the heart of the site, with the T-Shape treatment featured and WhatsApp booking." },
    'camp.olb.open':  { it: 'Apri il sito di Oltre la Bellezza in una nuova scheda', en: 'Open the Oltre la Bellezza website in a new tab' },
    'camp.cec.short': { it: "Salone da parrucchiere storico in Città Studi, da Stefano con Marika e Noemi, con clienti da oltre vent'anni: una vetrina in stile giornale d'epoca, «da una vita».", en: "A historic hair salon in Città Studi, run by Stefano with Marika and Noemi, with clients of over twenty years: a vintage-newspaper style site — “for a lifetime”." },
    'camp.cec.open':  { it: 'Apri il sito di Ceccaroni Parrucchieri in una nuova scheda', en: 'Open the Ceccaroni Parrucchieri website in a new tab' },
    'camp.mbe.short': { it: "Centro estetico e Luxury SPA con due sedi a Milano: «il percorso dei sensi», dove le stanze — acqua, vapore, sale — diventano un cammino che cambia clima mentre scorri.", en: "A beauty centre and Luxury SPA with two locations in Milan: “a journey of the senses”, where the rooms — water, steam, salt — become a path whose climate shifts as you scroll." },
    'camp.mbe.open':  { it: 'Apri il sito di Milano BioEstetica in una nuova scheda', en: 'Open the Milano BioEstetica website in a new tab' },
    'camp.harp.short': { it: "Pub e whisky bar dal 1976 in Piazza Leonardo da Vinci, davanti al Politecnico: oltre duecento whisky e il rito della spillatura perfetta in «119,5 secondi».", en: "A pub and whisky bar since 1976 on Piazza Leonardo da Vinci, opposite the Politecnico: over two hundred whiskies and the ritual of the perfect pour in “119.5 seconds”." },
    'camp.harp.open':  { it: 'Apri il sito di Harp Pub Guinness in una nuova scheda', en: 'Open the Harp Pub Guinness website in a new tab' },
    'camp.pb.short': { it: "Barbershop moderno a NoLo, luminoso e aperto a tutti: taglio e rasatura in uno spazio pulito e accogliente, con prenotazione diretta su WhatsApp.", en: "A modern barbershop in NoLo, bright and open to all: cuts and shaves in a clean, welcoming space, with direct WhatsApp booking." },
    'camp.pb.open':  { it: 'Apri il sito di Peppe Barber in una nuova scheda', en: 'Open the Peppe Barber website in a new tab' },
    'camp.torri.short': { it: "Bottega di alimentari storica di famiglia a NoLo, cent'anni di attività: «i sapori di una volta», tra salumi, formaggi e specialità, in una vetrina all'altezza della sua storia.", en: "A historic family fine-food shop in NoLo, a hundred years old: “flavours of the old days”, among cured meats, cheeses and specialities, in a window worthy of its history." },
    'camp.torri.open':  { it: 'Apri il sito di Torri Food & Wine in una nuova scheda', en: 'Open the Torri Food & Wine website in a new tab' },
    'camp.lm.short': { it: "Piccola enoteca di vini sfusi a NoLo, da Giuseppe: «lu mieru» è il vino in dialetto salentino, servito in una vetrina rustica e calda come il negozio, con WhatsApp.", en: "A small loose-wine shop in NoLo, run by Giuseppe: “lu mieru” is dialect for wine, served in a site as rustic and warm as the shop, with WhatsApp." },
    'camp.lm.open':  { it: 'Apri il sito di Enoteca Lu Mieru in una nuova scheda', en: 'Open the Enoteca Lu Mieru website in a new tab' },
    'camp.castaldi.short': { it: 'Guest house a Porta Venezia con prenotazione diretta: date, ospiti e camera compongono la richiesta WhatsApp — zero commissioni alle piattaforme.', en: 'A Porta Venezia guest house with direct booking: dates, guests and room compose the WhatsApp request — zero platform commissions.' },
    'camp.castaldi.open':  { it: 'Apri il sito di Castaldi House in una nuova scheda', en: 'Open the Castaldi House website in a new tab' },
    'camp.astragalo.open':  { it: "Apri il sito dell'Erboristeria Astragalo in una nuova scheda", en: 'Open the Erboristeria Astragalo website in a new tab' },
    'camp.slot.label':   { it: 'PROSSIMO PEZZO', en: 'NEXT PIECE' },
    'camp.slot.name':    { it: 'Il tuo progetto', en: 'Your project' },
    'camp.slot.desc':    { it: 'Questo posto nel campionario è libero. Raccontaci la tua attività: prendiamo le misure senza impegno.', en: 'This spot in the sample book is free. Tell us about your business: a fitting costs nothing.' },
    'camp.note':         { it: 'POCHI PROGETTI ALLA VOLTA, SEGUITI BENE — IL CAMPIONARIO CRESCE PIANO, APPOSTA', en: 'A FEW PROJECTS AT A TIME, LOOKED AFTER PROPERLY — THE SAMPLE BOOK GROWS SLOWLY, ON PURPOSE' }
  };

  // titolo e description dipendono dalla pagina (data-page sul body)
  var PAGE = document.body.getAttribute('data-page') || 'home';

  var META = {
    home: {
      title: {
        it: 'Bespoke Studio — Siti web su misura · Milano',
        en: 'Bespoke Studio — Tailor-made websites · Milan'
      },
      description: {
        it: 'Bespoke Studio è una sartoria digitale a Milano: siti web disegnati e sviluppati a mano, su misura per attività locali, aziende e brand. Nessun template.',
        en: 'Bespoke Studio is a digital tailor shop in Milan: websites designed and built by hand, made to measure for local businesses, companies and brands. No templates.'
      }
    },
    lavori: {
      title: {
        it: 'Il campionario — I lavori di Bespoke Studio · Milano',
        en: 'The sample book — Bespoke Studio’s work · Milan'
      },
      description: {
        it: 'Il campionario di Bespoke Studio: i siti web che abbiamo cucito su misura, dal sito vetrina all’alta misura. Ogni lavoro è un pezzo unico.',
        en: 'The Bespoke Studio sample book: the websites we have tailored, from showcase sites to full bespoke. Every job is a one-off piece.'
      }
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

    var meta = META[PAGE] || META.home;
    document.title = meta.title[lang];
    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', meta.description[lang]);

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

    // Easing sul tempo reale, non sui frame: la velocità del filo è la
    // stessa su ogni dispositivo — se il telefono perde frame, il passo
    // successivo compensa recuperando di più. Su touch (pointer coarse)
    // il filo insegue più svelto: meno frame animati = meno paint = meno jank.
    var TAU = (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) ? 70 : 110;
    var lastT = 0;

    function tick(now) {
      var dtMs = lastT ? Math.min(100, now - lastT) : 16;
      lastT = now;
      var k = 1 - Math.exp(-dtMs / TAU);
      var dh = tgtHead - curHead;
      var dt = tgtTail - curTail;
      if (Math.abs(dh) < 0.5 && Math.abs(dt) < 0.5) {
        curHead = tgtHead;
        curTail = tgtTail;
        applySegment();
        animating = false;
        return;
      }
      curHead += dh * k;
      curTail += dt * k;
      applySegment();
      requestAnimationFrame(tick);
    }

    function kick() {
      if (!revealPath) return;
      computeTargets();
      if (!animating) {
        animating = true;
        lastT = 0;
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

      // su pagine corte meno curve: un'ansa ogni ~560px di altezza,
      // campionando i punti del percorso per mantenerne la forma
      var count = Math.max(4, Math.min(POINTS.length, Math.round(H / 560) + 2));
      var pts = [];
      for (var i = 0; i < count; i++) {
        var src = POINTS[Math.round(i * (POINTS.length - 1) / (count - 1))];
        pts.push([src[0] * W, src[1] * H]);
      }
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
     Campionario: filtro dei progetti per taglio
     ---------------------------------------------------------- */
  var chips = document.querySelectorAll('.chip');
  if (chips.length) {
    var progetti = document.querySelectorAll('.progetti .progetto');
    var active = [];
    function applyFiltro() {
      progetti.forEach(function (el) {
        var toks = (el.getAttribute('data-cat') || '').split(/\s+/);
        var show;
        if (active.length === 0) show = true;
        else if (toks.indexOf('sempre') !== -1) show = true;
        else show = active.some(function (a) { return toks.indexOf(a) !== -1; });
        el.classList.toggle('is-hidden', !show);
      });
    }
    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        var f = chip.getAttribute('data-filter');
        if (f === 'tutti') { active = []; }
        else { var i = active.indexOf(f); if (i === -1) active.push(f); else active.splice(i, 1); }
        chips.forEach(function (c) {
          var cf = c.getAttribute('data-filter');
          var on = cf === 'tutti' ? active.length === 0 : active.indexOf(cf) !== -1;
          c.classList.toggle('is-active', on);
          c.setAttribute('aria-pressed', String(on));
        });
        applyFiltro();
      });
    });
  }

  /* ----------------------------------------------------------
     Anno corrente nel footer
     ---------------------------------------------------------- */
  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
/* ---------- rete di sicurezza: se IntersectionObserver non parte, mostra tutto ---------- */
  if ('IntersectionObserver' in window) {
    var ioVivo = false;
    var sentinella = new IntersectionObserver(function () { ioVivo = true; sentinella.disconnect(); });
    sentinella.observe(document.body);
    setTimeout(function () {
      if (!ioVivo) {
        document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in-view'); });
      }
    }, 1500);
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in-view'); });
  }
})();
