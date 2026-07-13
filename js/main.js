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
    'camp.filter':       { it: 'Filtra per taglio', en: 'Filter by cut' },
    'camp.f.all':        { it: 'Tutti', en: 'All' },
    'camp.f.vetrina':    { it: 'Vetrina', en: 'Storefront' },
    'camp.f.business':   { it: 'Business', en: 'Business' },
    'camp.f.alta':       { it: 'Alta misura', en: 'Full bespoke' },
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
    'camp.newshampoo.short': { it: "Il salone-galleria di Porta Venezia, 4,9 su 5 in 484 recensioni: editoriale crema e inchiostro, listino e team veri da Treatwell e un'intro in cui il nome emerge dallo specchio appannato.", en: 'The salon-gallery of Porta Venezia, 4.9 out of 5 across 484 reviews: cream-and-ink editorial design, real Treatwell prices and team, and an intro where the name emerges from a fogged mirror.' },
    'camp.newshampoo.open':  { it: 'Apri il sito di New Shampoo in una nuova scheda', en: 'Open the New Shampoo website in a new tab' },
    'camp.amy.short': { it: "Nail spa e centro estetico aperto 7 giorni su 7 in via Melzo: la foto vera dell'insegna accesa come hero, i servizi letti dalla vetrina e la prenotazione diretta su WhatsApp.", en: 'A nail spa and beauty centre open 7 days a week on Via Melzo: the real photo of the lit-up sign as the hero, services read off the shop window, and direct WhatsApp booking.' },
    'camp.amy.open':  { it: 'Apri il sito di Amy Nail Spa in una nuova scheda', en: 'Open the Amy Nail Spa website in a new tab' },
    'camp.ponterosso.short': { it: 'Trattoria sul Naviglio Grande, 8,7 su TheFork: la foto vera dell\'ingresso di sera, la "cucina della memoria" raccontata con le loro parole e il menù coi classici Milano–Roma–Napoli.', en: 'A trattoria on the Naviglio Grande, 8.7 on TheFork: the real photo of the evening entrance, their own "cuisine of memory" told in their words, and a menu of Milan–Rome–Naples classics.' },
    'camp.ponterosso.open':  { it: 'Apri il sito della Trattoria Ponte Rosso in una nuova scheda', en: 'Open the Trattoria Ponte Rosso website in a new tab' },
    'camp.bikerepublic.short': { it: 'Negozio e officina sul Naviglio Grande, dal 2012: layout bold col brand vero (terracotta e navy del loro timbro), hero in duotone, fascia di fiducia e la gallery #lifeinbikerepublic.', en: 'A shop and workshop on the Naviglio Grande, since 2012: a bold layout in their real brand colours (stamp terracotta and navy), a duotone hero, a trust bar and the #lifeinbikerepublic gallery.' },
    'camp.bikerepublic.open':  { it: 'Apri il sito di Bike Republic in una nuova scheda', en: 'Open the Bike Republic website in a new tab' },
    'camp.darsena.short': { it: 'Bar-caffetteria di quartiere affacciato sul bacino della Darsena: firma grafica sull\'acqua del porto, foto vera della sala, menù col ginseng e le scaloppine e i servizi (ATM, tabacchi).', en: 'A neighbourhood café-bar on the Darsena basin: a visual identity drawn from the harbour water, a real photo of the room, a menu with ginseng coffee and scaloppine, and the local services (tram tickets, tobacco).' },
    'camp.darsena.open':  { it: 'Apri il sito della Caffetteria della Darsena in una nuova scheda', en: 'Open the Caffetteria della Darsena website in a new tab' },
    'camp.sous.short': { it: "Negozio di vintage e upcycling sui Navigli: hero editoriale sulla foto vera della loro vetrina liberty, firma a volute Art Nouveau, toni pastello e catalogo su Etsy.", en: 'A vintage and upcycling shop on the Navigli: an editorial hero on the real photo of their art-nouveau shopfront, a scrollwork signature, pastel tones and an Etsy catalogue.' },
    'camp.sous.open':  { it: 'Apri il sito di Sous Vintage Shop in una nuova scheda', en: 'Open the Sous Vintage Shop website in a new tab' },
    'camp.elisir.short': { it: "Centro estetico sulla riva del Naviglio Grande: concept «la goccia e il riflesso», firma d'acqua, palette dai materiali e prenotazione diretta. Il salone aveva il sito morto — qui torna online.", en: "A beauty centre on the Naviglio Grande bank: a 'drop and ripple' concept, a water signature, a palette drawn from its materials and direct booking. Its old site was dead — here it's back online." },
    'camp.elisir.open':  { it: 'Apri il sito di Elisir del Benessere in una nuova scheda', en: 'Open the Elisir del Benessere website in a new tab' },
    'camp.calajo.short': { it: "Parrucchiere e lookmaker ai Navigli: salone «total white» con concept in bianco e lavanda, «in piena luce». Listino reale, consulenza d'immagine e prenotazione. Non aveva né sito né dominio attivo — qui esiste online.", en: "A hair stylist and lookmaker on the Navigli: a total-white salon with a white-and-lavender 'in full light' concept. Real price list, image consulting and booking. It had no website or live domain — here it exists online." },
    'camp.calajo.open':  { it: 'Apri il sito di Calajò Hair Stylist in una nuova scheda', en: 'Open the Calajò Hair Stylist website in a new tab' },
    'camp.estilo.short': { it: "Salone dei Navigli dal 1998, il primo a fare la piega di sera: concept «una giungla che si accende di sera» in verde bosco e ottone, colore Davines e persino una sezione sui suoi concerti e dj set. Aveva solo una pagina Google — qui ha un sito vero.", en: "A Navigli salon since 1998, the first to blow-dry in the evening: an 'urban jungle that lights up at night' concept in forest green and brass, Davines colour and even a section on its concerts and dj sets. It only had a Google page — here it has a real website." },
    'camp.estilo.open':  { it: 'Apri il sito di Estilò Parrucchieri in una nuova scheda', en: 'Open the Estilò Parrucchieri website in a new tab' },
    'camp.sm.short': { it: "Concept store d'arte e design ai Navigli dal 1989: design da galleria contemporanea (Syne, bianco e rosso, card multicolore) per un negozio di bijoux, moda e oggetti unici. Non aveva un sito, solo Instagram — ora ha una vetrina digitale all'altezza di quella vera.", en: "An art-and-design concept store on the Navigli since 1989: a contemporary-gallery design (Syne, white and red, multicolour cards) for a shop of jewellery, fashion and one-off objects. It had no website, only Instagram — now it has a digital window worthy of the real one." },
    'camp.sm.open':  { it: 'Apri il sito di Salvatore + Marie in una nuova scheda', en: 'Open the Salvatore + Marie website in a new tab' },
    'camp.manna.short': { it: "Ristorante di cucina italiana creativa a NoLo (chef Matteo Fronduti, segnalato Michelin). Rifatto nella scia del loro sito — taupe e oro, Cormorant Garamond — con menù reale, gallery e prenotazione. Il loro sito era stato bucato con spam nascosto: qui torna pulito e completo.", en: "A creative-Italian restaurant in NoLo (chef Matteo Fronduti, Michelin-listed). Rebuilt in the vein of their own site — taupe and gold, Cormorant Garamond — with a real menu, gallery and booking. Their site had been hacked with hidden spam: here it comes back clean and complete." },
    'camp.manna.open':  { it: 'Apri il sito di Manna in una nuova scheda', en: 'Open the Manna website in a new tab' },
    'camp.nabils.short': { it: "Barber house urbano di Milano: 5 sedi e 77K follower, nato dalla passione di un ex-calciatore e cresciuto fino a hammam, nails & spa. Concept «la cura come rituale» in nero, ottone e verde marmo. Avevano solo pagine a noleggio e il dominio proprio morto — qui hanno una casa digitale loro.", en: "An urban barber house in Milan: 5 locations and 77K followers, born from a former footballer's passion and grown into hammam, nails & spa. A “care as a ritual” concept in black, brass and marble green. They only had rented booking pages and a dead domain — now they have a digital home of their own." },
    'camp.nabils.open':  { it: "Apri il sito di Nabil's Barbershop in una nuova scheda", en: "Open the Nabil's Barbershop website in a new tab" },
    'camp.forno.short': { it: "Forno di quartiere a Lambrate premiato Gambero Rosso Tre Pani 2027: pane a lievitazione naturale, pizza e dolci. Concept «il tempo del lievito» in crema calda e terracotta, serif editoriale. Avevano solo Instagram — ora hanno una vetrina degna del loro pane.", en: "A neighbourhood bakery in Lambrate, awarded Gambero Rosso Three Loaves 2027: naturally-leavened bread, pizza and pastries. A “give the dough its time” concept in warm cream and terracotta, editorial serif. They only had Instagram — now they have a window worthy of their bread." },
    'camp.forno.open':  { it: 'Apri il sito di Il Forno di Lambrate in una nuova scheda', en: 'Open the Il Forno di Lambrate website in a new tab' },
    'camp.abele.short': { it: "Trattoria storica di NoLo dal 1979, in una vecchia bocciofila: la Milano dei 600 risotti, arredo anni '50 intatto. Concept «la Milano dei risotti» in crema, bordeaux e zafferano, DM Serif Display, con menù reale a lavagna. Il dominio era una pagina vuota — ora ha una vetrina viva.", en: "A historic NoLo trattoria since 1979, in an old bowls club: Milan's home of 600 risottos, with its 1950s interior intact. A “Milan's home of risotto” concept in cream, bordeaux and saffron, DM Serif Display, with a real chalkboard menu. Their domain was a blank page — now it has a living window." },
    'camp.abele.open':  { it: 'Apri il sito di Trattoria da Abele in una nuova scheda', en: 'Open the Trattoria da Abele website in a new tab' },
    'camp.nesler.short': { it: "Studio dentistico di NoLo (Dott. Nesler + Dott. Bett), Via Venini 18. Concept «il tuo sorriso in mani esperte»: design pulito petrolio e teal, Sora + Plus Jakarta, hero grafico e icone SVG. Il loro sito aveva il certificato SSL scaduto dal 2020 («sito non sicuro») — qui torna pulito, moderno e affidabile.", en: "A dental practice in NoLo (Dr. Nesler + Dr. Bett), Via Venini 18. A “your smile in expert hands” concept: clean petrol-and-teal design, Sora + Plus Jakarta, graphic hero and SVG icons. Their site had an SSL certificate expired since 2020 (“not secure”) — here it comes back clean, modern and trustworthy." },
    'camp.nesler.open':  { it: 'Apri il sito dello Studio Dentistico Nesler Bett in una nuova scheda', en: 'Open the Studio Dentistico Nesler Bett website in a new tab' },
    'camp.ghe.short': { it: "Craft bar di NoLo in Piazza Morbegno: birre artigianali, cocktail, DJ set e stand-up. Concept «ghe pensi mi» (ci penso io) in stile poster bold — cream, ink, ambra e cobalto, Bricolage Grotesque e marquee. Il loro dominio era una pagina vuota parcheggiata — ora hanno una vetrina viva come il bar.", en: "A craft bar in NoLo, on Piazza Morbegno: craft beer, cocktails, DJ sets and stand-up. A “ghe pensi mi” (I've got this) concept in bold poster style — cream, ink, amber and cobalt, Bricolage Grotesque and a marquee. Their domain was a blank parked page — now they have a window as lively as the bar." },
    'camp.ghe.open':  { it: 'Apri il sito di Ghe Pensi Mi in una nuova scheda', en: 'Open the Ghe Pensi Mi website in a new tab' },
    'camp.mc.short': { it: "Parrucchiere e centro estetico a Città Studi (Via Pacini 34). Concept «il tuo momento di charme»: elegante e femminile in blush, plum e oro, Prata + Jost. Il loro sito era in errore HTTP 500 (WordPress rotto) — ora hanno una maison digitale all'altezza dell'accoglienza.", en: "A hair salon and beauty centre in Città Studi (Via Pacini 34). A “your moment of charme” concept: elegant and feminine in blush, plum and gold, Prata + Jost. Their site was down with an HTTP 500 error (broken WordPress) — now they have a digital maison worthy of the welcome." },
    'camp.mc.open':  { it: 'Apri il sito di Maison Charme in una nuova scheda', en: 'Open the Maison Charme website in a new tab' },
    'camp.tc.short': { it: "Parrucchiere di quartiere a NoLo (Via Rovereto 6, da Federico e Michele, 4,8★). Concept «prenditi il tuo tempo»: caldo e botanico in crema, teal e ambra delle lampadine, Spectral + Manrope. Avevano solo i social — ora hanno un sito accogliente come il salone, con prenotazione WhatsApp.", en: "A neighbourhood hair salon in NoLo (Via Rovereto 6, with Federico and Michele, 4.8★). A “take your time” concept: warm and botanical in cream, teal and bulb-amber, Spectral + Manrope. They only had social — now they have a site as welcoming as the salon, with WhatsApp booking." },
    'camp.tc.open':  { it: 'Apri il sito di Time Cut in una nuova scheda', en: 'Open the Time Cut website in a new tab' },
    'camp.mbe.short': { it: "Centro estetico e Luxury SPA con due sedi a Milano (Gioia e Città Studi). Concept «il percorso dei sensi»: le stanze della SPA — acqua, vapore, sale — diventano un cammino che cambia clima mentre scorri, in crema e salvia, Gilda Display + Albert Sans. Un duotone di clima tiene insieme le foto. Restyling: il sito attuale è in HTTP, senza HTTPS.", en: "A beauty centre and Luxury SPA with two locations in Milan (Gioia and Città Studi). A «journey of the senses» concept: the SPA rooms — water, steam, salt — become a path whose climate shifts as you scroll, in cream and sage, Gilda Display + Albert Sans. A climate duotone ties the photos together. A restyle: their current site is HTTP, without HTTPS." },
    'camp.mbe.open':  { it: 'Apri il sito di Milano BioEstetica in una nuova scheda', en: 'Open the Milano BioEstetica website in a new tab' },
    'camp.harp.short': { it: "Pub e whisky bar dal 1976 in Piazza Leonardo da Vinci, di fronte al Politecnico (4,4★/1.144). Concept «119,5 secondi», il rito della spillatura: stout scuro, oro, Cinzel + Hanken Grotesk. Struttura tutta sua — la pinta che si spilla, lo scaffale orizzontale dei distillati, la lavagna a gesso. Avevano solo un linktree: ora una vetrina con oltre 200 whisky, orari dinamici e serate di degustazione.", en: "A pub and whisky bar since 1976 in Piazza Leonardo da Vinci, facing the Politecnico (4.4★/1,144). A «119.5 seconds» concept, the ritual of the perfect pour: dark stout, gold, Cinzel + Hanken Grotesk. A structure all its own — the pint that fills, the horizontal spirits shelf, the chalkboard. They only had a linktree: now a window with 200+ whiskies, dynamic hours and tasting nights." },
    'camp.harp.open':  { it: 'Apri il sito di Harp Pub Guinness in una nuova scheda', en: 'Open the Harp Pub Guinness website in a new tab' },
    'camp.pb.short': { it: "Barbershop moderno a NoLo/Casoretto (4,9★, LGBTQ+ friendly). Concept «haircuts & shaves, per tutti»: luminoso e pulito in off-white, carbone e verde, Space Grotesk + Figtree. Avevano solo i social — ora un sito accogliente come il negozio, con prenotazione WhatsApp.", en: "A modern barbershop in NoLo/Casoretto (4.9★, LGBTQ+ friendly). A “haircuts & shaves, for everyone” concept: bright and clean in off-white, charcoal and green, Space Grotesk + Figtree. They only had social — now a site as welcoming as the shop, with WhatsApp booking." },
    'camp.pb.open':  { it: 'Apri il sito di Peppe Barber in una nuova scheda', en: 'Open the Peppe Barber website in a new tab' },
    'camp.torri.short': { it: "Bottega alimentari storica di famiglia a NoLo (Via Venini 25, 100 anni). Concept «i sapori di una volta»: heritage in verde bottiglia, oro e crema, Marcellus + Mulish, con le loro foto professionali. Il sito attuale era datato (alberi di Natale a luglio, copyright 2020) — qui una vetrina all'altezza dei cent'anni.", en: "A historic family fine-food shop in NoLo (Via Venini 25, 100 years). A “flavours of the old days” concept: heritage in bottle green, gold and cream, Marcellus + Mulish, with their professional photos. Their old site was dated (Christmas trees in July, 2020 copyright) — here a window worthy of a hundred years." },
    'camp.torri.open':  { it: 'Apri il sito di Torri Food & Wine in una nuova scheda', en: 'Open the Torri Food & Wine website in a new tab' },
    'camp.lm.short': { it: "Piccola enoteca di vini sfusi a NoLo (Via Venini 52, da Giuseppe, 4,8★). Concept «il vino, quello vero»: rustico e caldo in crema, vino e ocra, Bitter + Nunito Sans. «Lu mieru» in dialetto salentino è il vino. Non avevano un sito — ora una vetrina calda come il negozio, con WhatsApp.", en: "A small loose-wine shop in NoLo (Via Venini 52, run by Giuseppe, 4.8★). A “wine, the real thing” concept: rustic and warm in cream, wine and ochre, Bitter + Nunito Sans. “Lu mieru” is dialect for wine. They had no site — now a window as warm as the shop, with WhatsApp." },
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
    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        chips.forEach(function (c) {
          var active = c === chip;
          c.classList.toggle('is-active', active);
          c.setAttribute('aria-pressed', String(active));
        });
        var f = chip.getAttribute('data-filter');
        progetti.forEach(function (el) {
          var cat = el.getAttribute('data-cat');
          // lo slot "il tuo progetto" (data-cat="sempre") resta sempre visibile
          var show = f === 'tutti' || cat === f || cat === 'sempre';
          el.classList.toggle('is-hidden', !show);
        });
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
