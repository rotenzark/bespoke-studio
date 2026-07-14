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
    'camp.one.short': { it: "Nail spa con due sedi a Milano (Via Ronchi 31 e Via Pacini 22, 4,7/76). Struttura unica: la sezione-firma «la parete dei colori» = una griglia di swatch di smalti glossy («scegli il tuo colore»). Moderno e chic, Sora + Figtree, nude + berry. Manicure, pedicure, semipermanente, nail art ed extension ciglia, con prenotazione WhatsApp.", en: "A nail spa with two locations in Milan (Via Ronchi 31 and Via Pacini 22, 4.7/76). A unique structure: the signature «colour wall» section = a grid of glossy polish swatches («pick your colour»). Modern and chic, Sora + Figtree, nude + berry. Manicure, pedicure, gel polish, nail art and lash extensions, with WhatsApp booking." },
    'camp.one.open':  { it: 'Apri il sito di One Nail Spa in una nuova scheda', en: 'Open the One Nail Spa website in a new tab' },
    'camp.mom.short': { it: "Centro estetico & beauty/wellness in Via Padova 41 (Milano, 4,8/26). Struttura unica: il civico «41» come identità — un «41» ghost gigante e label mono con le coordinate. Calmo e minimale, greige caldo + ambra, Cormorant Garamond + Hanken Grotesk + DM Mono. Terzo beauty del batch, deliberatamente diverso dagli altri due (percorso e listino).", en: "A beauty & wellness centre at Via Padova 41 (Milan, 4.8/26). A unique structure: the street number «41» as identity — a giant ghost «41» and mono labels with coordinates. Calm and minimal, warm greige + amber, Cormorant Garamond + Hanken Grotesk + DM Mono. The batch's third beauty site, deliberately different from the other two (journey and price-list)." },
    'camp.mom.open':  { it: 'Apri il sito di Moma41 in una nuova scheda', en: 'Open the Moma41 website in a new tab' },
    'camp.cla.short': { it: "Micro-forno d'autore a Lambrate (Via Conte Rosso 18, 4,5★), spin-off del forno di Onest. Struttura unica: manifesto ironico col titolo in Archivo 900 contornato + fascia verde a terrazzo «Dal banco». Pane, pizza, focaccia, pasticceria e specialty coffee. Non avevano un sito — ora una vetrina con la loro forte identità e gli orari live.", en: "A signature micro-bakery in Lambrate (Via Conte Rosso 18, 4.5★), a spin-off of the Onest bakery. A unique structure: an ironic manifesto with the title in outlined Archivo 900 + a green terrazzo «From the counter» band. Bread, pizza, focaccia, pastry and specialty coffee. They had no site — now a shopfront with their strong identity and live opening hours." },
    'camp.cla.open':  { it: 'Apri il sito di Clandestino non esiste in una nuova scheda', en: 'Open the Clandestino non esiste website in a new tab' },
    'camp.cape.short': { it: "Storica trattoria di Lambrate (Via Carlo Bertolazzi 26, 4,2/3.782), famosa per la pizza al trancio. Struttura unica: il motivo «ad arco» dell'edicola votiva che dà il nome al locale — portale ad arco nell'hero e in tutte le cornici. Vino + crema + ottone, Fraunces + Work Sans. Avevano un sito datato — ora una vetrina calda «d'altri tempi», con orari live e menù.", en: "A historic trattoria in Lambrate (Via Carlo Bertolazzi 26, 4.2/3,782), famous for its pizza by the slice. A unique structure: the «arch» motif of the votive shrine the place is named after — an arched portal in the hero and in every frame. Wine + cream + brass, Fraunces + Work Sans. They had a dated site — now a warm, old-world shopfront with live hours and menu." },
    'camp.cape.open':  { it: 'Apri il sito di La Cappelletta in una nuova scheda', en: 'Open the La Cappelletta website in a new tab' },
    'camp.magic.short': { it: "Parrucchiere a conduzione femminile a Lambrate (Via Conte Rosso 10, 4,0/60, 25+ anni), specialisti di lisciatura e cheratina. Struttura unica: concept «i tuoi capelli, rinati» con motivo-firma a ciocche fluenti (SVG). Bordeaux + crema + rosa, Playfair Display + Manrope. Foto salone scarse → hero e dettaglio capelli come placeholder Higgsfield (dichiarati), più le foto reali della vetrina. Avevano un sito fermo al 2014.", en: "A women-run hair salon in Lambrate (Via Conte Rosso 10, 4.0/60, 25+ years), specialists in smoothing and keratin. A unique structure: a «your hair, reborn» concept with a signature flowing-strands motif (SVG). Burgundy + cream + rose, Playfair Display + Manrope. Salon photos were scarce → the hero and hair detail are declared Higgsfield placeholders, alongside real shopfront photos. Their old site was stuck in 2014." },
    'camp.magic.open':  { it: 'Apri il sito di Magic Woman in una nuova scheda', en: 'Open the Magic Woman website in a new tab' },
    'camp.sun.short': { it: "Nail bar di Alice a Lambrate (Viale delle Rimembranze 13, 4,6/67), specialista di Russian Manicure. Struttura unica: concept solare col motivo-firma a raggi di sole (SVG), fascia servizi a gradiente giallo→corallo, gallery delle unghie in primo piano. Giallo sole + corallo + crema, Poppins + Nunito Sans. Niente sito né social (solo Fresha/Yelp) — ora una vetrina calda con orari live e le foto vere dei lavori.", en: "Alice's nail bar in Lambrate (Viale delle Rimembranze 13, 4.6/67), a Russian Manicure specialist. A unique structure: a sunny concept with a signature sun-rays motif (SVG), a yellow→coral gradient services band and a gallery-forward layout. Sun-yellow + coral + cream, Poppins + Nunito Sans. No site or socials (only Fresha/Yelp) — now a warm shopfront with live hours and real photos of the work." },
    'camp.sun.open':  { it: 'Apri il sito di Sunshine Nail in una nuova scheda', en: 'Open the Sunshine Nail website in a new tab' },
    'camp.iki.short': { it: "Centro estetico di Silvia Casalino a Lambrate (Via Carlo Bertolazzi 10, 5,0/522 su Treatwell). Struttura unica: concept giapponese «ikigai / oasi di serenità» con motivo-firma a ensō (cerchio zen SVG che si disegna). Salvia + carta di riso + inchiostro sumi, Marcellus + Karla. Foto quasi assenti → 3 immagini spa/viso come placeholder Higgsfield (dichiarate) + la facciata reale. Niente sito proprio (solo Treatwell/Fresha).", en: "Silvia Casalino's beauty centre in Lambrate (Via Carlo Bertolazzi 10, 5.0/522 on Treatwell). A unique structure: a Japanese «ikigai / oasis of serenity» concept with a signature ensō motif (a zen SVG circle that draws itself). Sage + rice-paper + sumi ink, Marcellus + Karla. Photos almost absent → 3 spa/facial images as declared Higgsfield placeholders + the real shopfront. No own site (only Treatwell/Fresha)." },
    'camp.iki.open':  { it: 'Apri il sito di Ikigai in una nuova scheda', en: 'Open the Ikigai website in a new tab' },
    'camp.vt.short': { it: "Negozio di vintage di ricerca e modernariato di Cecilia a Lambrate (Via Conte Rosso 22, 4,6, grandi firme a prezzi vintage). Struttura unica: identità tipografica sul CAP «20134» gigante, layout editoriale/lookbook, omaggio alla vecchia insegna «Barbiere». Avorio + inchiostro + vermiglio, Archivo + Newsreader. Ottime foto reali (borsa Fendi sui libri Prada/YSL/Versace). Prima vetrina retail/moda del batch; vivevano solo su Instagram.", en: "Cecilia's curated-vintage and mid-century shop in Lambrate (Via Conte Rosso 22, 4.6, designer names at vintage prices). A unique structure: a typographic identity on the giant «20134» postcode, an editorial/lookbook layout, a homage to the old «Barbiere» sign. Ivory + ink + vermilion, Archivo + Newsreader. Great real photos (a Fendi bag on Prada/YSL/Versace books). The batch's first retail/fashion site; they lived only on Instagram." },
    'camp.vt.open':  { it: 'Apri il sito di 20134 Lambrate in una nuova scheda', en: 'Open the 20134 Lambrate website in a new tab' },
    'camp.cg.short': { it: "Bottega storica di belle arti/disegno/grafica di Giuseppe Comerio a Lambrate (Via Averardo Buschi 20, dal 1990, 4,6/164). Struttura unica: concept «il paradiso degli artisti» con motivo-firma a spettro di pigmenti + codici mono da tavolozza. Cobalto + carta + carboncino, Bricolage Grotesque + Inter + IBM Plex Mono. Il loro sito aveva l'SSL rotto; foto ambiente come placeholder Higgsfield (dichiarate). Ordine su WhatsApp + ritiro.", en: "Giuseppe Comerio's historic fine-arts/drawing/graphics shop in Lambrate (Via Averardo Buschi 20, since 1990, 4.6/164). A unique structure: an «artist's paradise» concept with a signature pigment-spectrum motif + mono palette codes. Cobalt + paper + charcoal, Bricolage Grotesque + Inter + IBM Plex Mono. Their site had a broken SSL cert; the environment photos are declared Higgsfield placeholders. WhatsApp order + pickup." },
    'camp.cg.open':  { it: 'Apri il sito del Colorificio Grossich in una nuova scheda', en: 'Open the Colorificio Grossich website in a new tab' },
    'camp.en.short': { it: "Enoteca/wine bar di Ciro a Milano (Via Porpora 140, 4,7/117, vini/distillati/birre, sito loro offline). Struttura unica: concept «la bottiglia giusta, a ogni prezzo» con gesto-firma la SCALA DEI PREZZI (€→€€€€, lo stesso consiglio) + hero scuro raffinato. Crema + bordeaux + oro, DM Serif Display + Mulish. Ottime foto reali (Ciro al banco, insegna gialla). Diverso dall'altra enoteca del campionario (Lu Mieru, rustica).", en: "Ciro's wine shop/bar in Milan (Via Porpora 140, 4.7/117, wine/spirits/beer, their site offline). A unique structure: a «the right bottle, at every price» concept with a signature PRICE LADDER (€→€€€€, the same honest advice) + a refined dark hero. Cream + bordeaux + gold, DM Serif Display + Mulish. Great real photos (Ciro at the counter, the yellow sign). Distinct from the campionario's other enoteca (the rustic Lu Mieru)." },
    'camp.en.open':  { it: "Apri il sito dell'Enoteca Lambrate in una nuova scheda", en: 'Open the Enoteca Lambrate website in a new tab' },
    'camp.rig.short': { it: "Ristorante storico di Brera (Via Solferino 11, 4,4/649, cucina toscana e milanese dal 1958, ritrovo di artisti e giornalisti). Struttura unica: concept «un luogo della memoria» con gesto-firma la CORNICE DORATA (le immagini incorniciate come i quadri alle pareti) + la sezione «le quattro sale» come una galleria su fondo verde. Crema + verde boiserie + terracotta + oro, EB Garamond + Inter. Ottime foto reali. Loro sito da restyling. 1° sito del Blocco 3 (Brera).", en: "A historic Brera restaurant (Via Solferino 11, 4.4/649, Tuscan and Milanese cuisine since 1958, a haunt of artists and journalists). A unique structure: a «place of memory» concept with a signature GOLD FRAME motif (images framed like the paintings on the walls) + a «four rooms» section laid out like a gallery on a green ground. Cream + boiserie green + terracotta + gold, EB Garamond + Inter. Great real photos. Their site needs a restyle. The first site of Block 3 (Brera)." },
    'camp.rig.open':  { it: 'Apri il sito del Rigolo in una nuova scheda', en: 'Open the Rigolo website in a new tab' },
    'camp.tosc.short': { it: "Trattoria toscana in zona Sempione (Via Chieti 1, 4,4/687, la trattoria di Davide: cucina genuina, porzioni abbondanti, prezzo giusto). Struttura unica: trattoria vera e schietta, gesto-firma la TOVAGLIA A QUADRETTI (il gingham a fasce di rosso in CSS) + la sezione «la lavagna» come una vera lavagna nera con i piatti scritti a mano. Rosso pomodoro + crema + lavagna, Zilla Slab + Caveat manoscritto. Foto reali. Solo template gotoeat. 2° sito del Blocco 3 (Sempione).", en: "A Tuscan trattoria in the Sempione district (Via Chieti 1, 4.4/687, Davide's trattoria: genuine cooking, generous portions, honest prices). A unique structure: a real, no-fuss trattoria with a signature CHECKERED TABLECLOTH motif (red gingham bands in CSS) + a «the board» section built like a real blackboard with dishes written by hand. Tomato red + cream + chalkboard, Zilla Slab + handwritten Caveat. Real photos. Only a gotoeat template. The 2nd site of Block 3 (Sempione)." },
    'camp.tosc.open':  { it: 'Apri il sito del Toscanaccio in una nuova scheda', en: 'Open the Al Toscanaccio website in a new tab' },
    'camp.slab.short': { it: "Pasticceria asiatica virale di Chinatown (Via Paolo Sarpi 1, 4,4/970, «sweet laboratory» di @parigidolci: melon pan, cotton cheesecake giapponese, mochi, dorayaki, mille-crêpe al matcha, bubble tea e le torte kawaii Pikachu). Struttura unica: concept «il laboratorio dolce», gesto-firma la VETRINA A GRIGLIA BENTO (le specialità come tessere pastello arrotondate, omaggio al menu-board del negozio) + sistema di pill colorate kawaii. Verde menta + crema + pop rosa/matcha/taro, Fredoka + Nunito Sans. 14 foto reali. Solo IG (@slabmilano). 3° sito del Blocco 3 (Sarpi), 1ª pasticceria asiatica.", en: "A viral Asian pastry shop in Chinatown (Via Paolo Sarpi 1, 4.4/970, the «sweet laboratory» by @parigidolci: melon pan, Japanese cotton cheesecake, mochi, dorayaki, matcha mille-crêpe, bubble tea and the kawaii Pikachu cakes). A unique structure: the «sweet laboratory» concept with a signature BENTO TILE GRID (the specialties as rounded pastel tiles, echoing the shop's own menu board) + a kawaii coloured-pill system. Mint green + cream + pink/matcha/taro pops, Fredoka + Nunito Sans. 14 real photos. Instagram only (@slabmilano). The 3rd site of Block 3 (Sarpi), the first Asian pastry shop." },
    'camp.slab.open':  { it: "Apri il sito di S'Lab in una nuova scheda", en: 'Open the S’Lab website in a new tab' },
    'camp.mel.short': { it: "Cappelleria storica di Milano dal 1914 (Via Paolo Sarpi 19, Chinatown, 4,6/393, cappelli uomo/donna su 3 piani, Borsalino/Stetson + collezione Melegari, maglieria inglese e scozzese, su misura a mano). Struttura unica: heritage haberdashery, gesto-firma il CATALOGO A SILHOUETTE (icone SVG dei cappelli — fedora, panama, coppola, cilindro, cloche) + il sigillo ovale «1914» + i divisori a nastro grosgrain (fascia da cappello). Crema + feltro carbone + cammello + oxblood, Cormorant Garamond + Jost. 15 foto reali. Loro sito ZenCart datato. 4° sito del Blocco 3 (Sarpi), 1ª cappelleria/vetrina heritage.", en: "A historic Milan hat house since 1914 (Via Paolo Sarpi 19, Chinatown, 4.6/393, hats for men & women across 3 floors, Borsalino/Stetson + the Melegari collection, English and Scottish knitwear, made by hand to measure). A unique structure: a heritage haberdashery with a signature SILHOUETTE CATALOGUE (SVG hat icons — fedora, panama, flat cap, top hat, cloche) + the oval «1914» seal + grosgrain-ribbon dividers (the hatband). Cream + charcoal felt + camel + oxblood, Cormorant Garamond + Jost. 15 real photos. Their site is a dated ZenCart. The 4th site of Block 3 (Sarpi), the first hat shop / heritage retail." },
    'camp.mel.open':  { it: 'Apri il sito della Cappelleria Melegari in una nuova scheda', en: 'Open the Cappelleria Melegari website in a new tab' },
    'camp.ap.short': { it: "Barbershop storico di Chinatown (Via Paolo Sarpi 63, 4,5/55, l'unico barbershop che si affaccia su via Sarpi dal 1937, Bottega Storica di Milano, taglio a forbice da Marco Regnetta; no sito). Struttura unica: heritage barbershop, gesto-firma il PALO DEL BARBIERE (nastro a righe diagonali rosso/crema/petrolio come divisori + strip verticale hero) + badge «1937 l'originale» + griglia servizi numerata. Petrolio (piastrelle) + crema + ottone + rosso, Oswald + Pinyon Script + Work Sans. 12 foto reali. 5° sito del Blocco 3 (Sarpi), 1° barbershop heritage col palo del barbiere.", en: "A historic barbershop in Chinatown (Via Paolo Sarpi 63, 4.5/55, the only barbershop opening onto via Sarpi since 1937, a Historic Shop of Milan, scissor cuts by Marco Regnetta; no website). A unique structure: a heritage barbershop with a signature BARBER-POLE (diagonal red/cream/petrol striped dividers + a vertical hero strip) + a «1937 the original» badge + a numbered service grid. Petrol (the tiles) + cream + brass + red, Oswald + Pinyon Script + Work Sans. 12 real photos. The 5th site of Block 3 (Sarpi), the first heritage barbershop with the barber-pole motif." },
    'camp.ap.open':  { it: "Apri il sito de L'antico Parrucchiere della Paolo Sarpi in una nuova scheda", en: 'Open the L’antico Parrucchiere della Paolo Sarpi website in a new tab' },
    'camp.cz.short': { it: "Negozio di calzature storico di Sempione (Via Luigi Canonica 59, 4,8/38, dal 1956, tre generazioni, rivenditore ufficiale Birkenstock; no sito). Struttura unica: negozio di famiglia, gesto-firma il MURO DELLE MARCHE «Le firme del comfort» (Birkenstock in evidenza + Ecco/Legero/Ara/Löwenweiss/Giesswein/Tamaris… come pill) + identità «dal 1956 · tre generazioni». Impostazione foto-light (poche foto reali, niente prodotti finti). Cognac/cuoio + crema + sughero + espresso, Bitter + Hanken Grotesk. 7 foto reali. 6° sito del Blocco 3 (Sempione), 1ª vetrina calzature.", en: "A historic shoe shop in the Sempione district (Via Luigi Canonica 59, 4.8/38, since 1956, three generations, official Birkenstock retailer; no website). A unique structure: a family shop with a signature BRAND WALL «the names of comfort» (Birkenstock highlighted + Ecco/Legero/Ara/Löwenweiss/Giesswein/Tamaris… as pills) + a «since 1956 · three generations» identity. A photo-light approach (few real photos, no fake products). Cognac/leather + cream + cork + espresso, Bitter + Hanken Grotesk. 7 real photos. The 6th site of Block 3 (Sempione), the first footwear shop." },
    'camp.cz.open':  { it: 'Apri il sito di Carozza Calzature in una nuova scheda', en: 'Open the Carozza Calzature website in a new tab' },
    'camp.nv.short': { it: "Erboristeria storica di Chinatown (Via Paolo Sarpi 63, 4,9/63, dal 1952, tre generazioni Italo→Francesco→Elena, oltre 500 erbe nei vasi, tisane su misura, Impresa Storica; loro sito WordPress datato). Struttura unica: apothecary heritage, gesto-firma le ETICHETTE DA VASO (card «Cosa trovi» a cornice apothecary) + la TIMELINE «tre generazioni» + il rito «La tisana su misura» (I/II/III). Verde smeraldo (dall'insegna) + pergamena + ambra, Spectral + Mulish, marchio a fiore verde. 8 foto reali (vasi/scaffali). 7° sito del Blocco 3 (Sarpi), 1ª erboristeria del blocco.", en: "A historic herbalist shop in Chinatown (Via Paolo Sarpi 63, 4.9/63, since 1952, three generations Italo→Francesco→Elena, over 500 herbs in the jars, bespoke teas, a recognised Historic Shop; their WordPress site is dated). A unique structure: an apothecary heritage with a signature APOTHECARY-JAR LABEL motif («what you’ll find» cards framed like jar labels) + a «three generations» TIMELINE + the «bespoke herbal blend» ritual (I/II/III). Emerald green (from their sign) + parchment + amber, Spectral + Mulish, a green flower mark. 8 real photos (jars/shelves). The 7th site of Block 3 (Sarpi), the first herbalist." },
    'camp.nv.open':  { it: "Apri il sito dell'Erboristeria Novetti in una nuova scheda", en: 'Open the Erboristeria Novetti website in a new tab' },
    'camp.gs.short': { it: "Piccola gelateria storica di Brera (Via Solferino 18, 4,6/356, «Premiata Gelateria di Zubelli», a conduzione famigliare da oltre trent'anni con Rita, gelato artigianale poco zuccherato, IG @gelateria.solferino18, no sito). Struttura unica: gesto-firma la CARTA DEI GUSTI a due colonne (I classici / Di stagione & novità) + i DIVISORI A FESTONE «gelato-swirl» (pistacchio & amaranto) + la storia famiglia Zubelli. Panna + pistacchio + amaranto + cacao, Yeseva One + Figtree. 12 foto reali (vetrina/coni/coppe). 8° sito del Blocco 3 (Brera), 1ª gelateria del blocco.", en: "A small historic gelateria in Brera (Via Solferino 18, 4.6/356, the «Premiata Gelateria di Zubelli», family-run for over thirty years by Rita, low-sugar artisan gelato, IG @gelateria.solferino18, no website). A unique structure: a signature TWO-COLUMN FLAVOUR CARD (The classics / In season & new) + SCALLOPED «gelato-swirl» DIVIDERS (pistachio & amaranth) + the Zubelli family story. Cream + pistachio + amaranth + cocoa, Yeseva One + Figtree. 12 real photos (case/cones/cups). The 8th site of Block 3 (Brera), the first gelateria." },
    'camp.gs.open':  { it: 'Apri il sito della Gelateria Solferino in una nuova scheda', en: 'Open the Gelateria Solferino website in a new tab' },
    'camp.mat2.short': { it: "Antica trattoria milanese di Brera dal 1962 (Via L. Solera Mantegazza 5, 4,3/1458, Elide & Marco, cucina della vecchia Milano, ossobuco/risotto giallo/cotoletta, ritrovo dei «pranzi del lunedì» di Craxi, Bottega Storica Milanese 2017; loro sito datato). Struttura unica: gesto-firma il MATTERELLO («matarèl» = mattarello in milanese) come divisore + marchio + il MENÙ MENEGHINO a 3 colonne (antipasti/primi/secondi milanesi) + storia. Noce + panna + zafferano (risotto giallo) + bordeaux (Croatina), Rozha One + Libre Franklin. 12 foto reali. 9° sito del Blocco 3 (Brera), 3ª trattoria diversa.", en: "An old Milanese trattoria in Brera since 1962 (Via L. Solera Mantegazza 5, 4.3/1458, Elide & Marco, the cooking of old Milan, ossobuco/saffron risotto/cotoletta, home of Craxi’s «Monday lunches», a Historic Shop of Milan 2017; their site is dated). A unique structure: a signature ROLLING PIN («matarèl» = rolling pin in Milanese) as a divider + mark + a three-column MENEGHINO MENU (starters/first courses/Milanese mains) + the story. Walnut + cream + saffron (the yellow risotto) + burgundy (Croatina), Rozha One + Libre Franklin. 12 real photos. The 9th site of Block 3 (Brera), the 3rd distinct trattoria." },
    'camp.mat2.open':  { it: 'Apri il sito di Al Matarel in una nuova scheda', en: 'Open the Al Matarel website in a new tab' },
    'camp.maz.short': { it: "Hair studio storico di Brera dal 1951 (Via Rovello 1, 4,8/89, accanto al Piccolo Teatro, Negozio Storico, per lei e per lui, colore/balayage; loro sito datato). Struttura unica: eleganza editoriale, gesto-firma la «&» (Benito & Salvatore) come monogramma+divisore + la LOCANDINA «Hanno scelto Mazzotta» (Strehler, Grassi, Gassman, Sbragia, Mastroianni — la Milano del teatro e del cinema) su fondo carbone. Carbone + champagne + ottone, Bodoni Moda + Manrope. Foto-attente (salone senza volti). 10° sito del Blocco 3 (Brera), 2° parrucchiere del blocco.", en: "A historic Brera hair studio since 1951 (Via Rovello 1, 4.8/89, next to the Piccolo Teatro, a Historic Shop, for her and for him, colour/balayage; their site is dated). A unique structure: editorial elegance, a signature «&» (Benito & Salvatore) as monogram + divider + the «They chose Mazzotta» PLAYBILL (Strehler, Grassi, Gassman, Sbragia, Mastroianni — the Milan of theatre and cinema) on charcoal. Charcoal + champagne + brass, Bodoni Moda + Manrope. Face-conscious photos (the salon, no faces). The 10th site of Block 3 (Brera), the 2nd hair salon of the block." },
    'camp.maz.open':  { it: 'Apri il sito di Benito & Salvatore Mazzotta in una nuova scheda', en: 'Open the Benito & Salvatore Mazzotta website in a new tab' },
    'camp.oa.short': { it: "Enoteca con degustazione a conduzione femminile in zona Sempione (Via Procaccini 66, 4,4/203, tre donne Giusy/Serena/Donatella, una linea immaginaria da Udine a Potenza = Friuli + Basilicata, vini al calice; oggi anche insegna Bistrot66, vecchio dominio morto). Struttura unica: gesto-firma la LINEA UDINE → POTENZA (dot verde Friuli → dot terracotta Basilicata) + il MENÙ DELLE DUE TERRE a due colonne (verde/terracotta) + le tre fondatrici. Vino + verde Friuli + terracotta lucana + oro, Fraunces + Hanken Grotesk. 12 foto reali. Prospect rebrandizzato (Un'Ottima Annata→Bistrot66) — build trasparente sul doppio nome. 11° sito del Blocco 3 (Sempione), 3ª enoteca diversa.", en: "A female-run wine bar with tastings in the Sempione district (Via Procaccini 66, 4.4/203, three women Giusy/Serena/Donatella, an imaginary line from Udine to Potenza = Friuli + Basilicata, wines by the glass; today also the Bistrot66 sign, old domain gone). A unique structure: a signature UDINE → POTENZA LINE (green Friuli dot → terracotta Basilicata dot) + a two-column TWO-LANDS MENU (green/terracotta) + the three founders. Wine + Friuli green + Lucanian terracotta + gold, Fraunces + Hanken Grotesk. 12 real photos. Rebranded prospect (Un'Ottima Annata→Bistrot66) — built transparently about the dual name. The 11th site of Block 3 (Sempione), the 3rd distinct wine bar." },
    'camp.oa.open':  { it: "Apri il sito di Un'Ottima Annata in una nuova scheda", en: 'Open the Un’Ottima Annata website in a new tab' },
    'camp.ta.short': { it: "Ristorante indiano storico all'Arco della Pace (Via D. Cirillo 16, 4,4/1221, dal 1997 [nato come Sukria, Tara=«stella» dal 2002], curry & tandoor, 5 cuochi indiani, quasi tutto gluten free + ampia scelta veg/vegana; loro sito SSL scaduto). Struttura unica: identità indiana autentica, gesto-firma la STELLA A 8 PUNTE (tara=stella) marchio+divisore + il MENÙ a 6 card (tandoor/curry/veg/riso&pani/antipasti/dolci) + la fascia GLUTEN FREE & VEG. Rosso curry + oro marigold + terracotta + crema, Gilda Display + Mulish. 12 foto reali (feast, murales, lampade a fiamma). 1ª cucina etnica non-cinese del progetto. 12° sito del Blocco 3 (Sempione).", en: "A historic Indian restaurant by the Arco della Pace (Via D. Cirillo 16, 4.4/1221, since 1997 [opened as Sukria, Tara = «star» from 2002], curry & tandoor, 5 Indian chefs, almost all gluten-free + a wide veg/vegan choice; their site’s SSL expired). A unique structure: an authentic Indian identity with a signature 8-POINTED STAR (tara = star) mark + divider + a 6-card MENU (tandoor/curry/veg/rice&bread/starters/sweets) + a GLUTEN-FREE & VEG band. Curry red + marigold gold + terracotta + cream, Gilda Display + Mulish. 12 real photos (feast, mural, flame lamps). The project’s first non-Chinese ethnic cuisine. The 12th site of Block 3 (Sempione)." },
    'camp.ta.open':  { it: 'Apri il sito di Tara Ristorante Indiano in una nuova scheda', en: 'Open the Tara Ristorante Indiano website in a new tab' },
    'camp.tp.short': { it: "Trattoria toscana storica di Brera (Via Fiori Chiari 21, 3,9/1504, dal 1959, famiglia Meacci→Cortesi, ritrovo di artisti e giornalisti; loro sito WordPress datato). Struttura unica: gesto-firma la TORRE PENDENTE (emblema inclinato + divisore + badge «dal 1959» storto) + il menù «la cucina toscana di campagna» a 4 card con «la bistecca & i secondi» in evidenza + la fascia verde «Fedele alle origini» (5 vetrine, sedie originali, sala arazzi). Verde bottiglia + oro marigold + terracotta + crema, Petrona + Figtree. Orario continuato 12–24 tutti i giorni. 12 foto reali. 4ª trattoria del progetto, struttura opposta alle altre tre. 13° sito del Blocco 3 (Brera).", en: "A historic Tuscan trattoria in Brera (Via Fiori Chiari 21, 3.9/1504, since 1959, the Meacci→Cortesi family, a haunt for artists and journalists; their WordPress site is dated). A unique structure: a signature LEANING TOWER (tilted emblem + divider + a slanted «since 1959» badge) + the «Tuscan country cooking» menu across 4 cards with «the steak & mains» highlighted + a green «Faithful to its origins» band (five windows, original chairs, tapestry room). Bottle green + marigold gold + terracotta + cream, Petrona + Figtree. Continuous service 12–24 every day. 12 real photos. The project’s 4th trattoria, its structure the opposite of the other three. The 13th site of Block 3 (Brera)." },
    'camp.tp.open':  { it: 'Apri il sito di Trattoria Torre di Pisa in una nuova scheda', en: 'Open the Trattoria Torre di Pisa website in a new tab' },
    'camp.ur.short': { it: "Boutique di moda vintage femminile nel cuore di Brera (Via del Ciovasso 6, 4,9/54, dal 1974, la selezione di Lisa, solo IG @urzivintage). Struttura unica: gesto-firma IL CARTELLINO (swing-tag kraft/ottone inclinato) come marchio + divisore + etichette appese sulle card + il «guardaroba» a 4 categorie (Le borse & pelletteria / Le giacche / La seta / I gioielli) + la fascia plum «Il pezzo unico». Prugna + avorio + ottone + rosa cipria, Italiana + Mulish. 15 foto reali. Diversa da 20134 Lambrate (CAP tipografico/lookbook). 14° sito del Blocco 3 (Brera), 2ª vetrina moda vintage.", en: "A women’s vintage fashion boutique in the heart of Brera (Via del Ciovasso 6, 4.9/54, since 1974, Lisa’s selection, Instagram only @urzivintage). A unique structure: a signature SWING TAG (a tilted kraft/brass boutique tag) as mark + divider + tags hanging on the cards + the 4-category «wardrobe» (Bags & leather / Jackets / Silk / Jewellery) + a plum «one of a kind» band. Plum + ivory + brass + dusty rose, Italiana + Mulish. 15 real photos. Different from 20134 Lambrate (typographic postcode/lookbook). The 14th site of Block 3 (Brera), the 2nd vintage-fashion storefront." },
    'camp.ur.open':  { it: 'Apri il sito di Urzì Vintage Selection in una nuova scheda', en: 'Open the Urzì Vintage Selection website in a new tab' },
    'camp.rg.short': { it: "Gastronomia e salumeria storica di Brera (Via Solferino 12, 4,0/41 [prospecting 4,6/163], dal 1971, salumi/formaggi/pasta fresca a mano/piatti pronti/catering, 2 sedi; loro sito WordPress datato). Struttura unica: gesto-firma AL BANCO — i 5 reparti come percorso NUMERATO a zig-zag (01 salumi / 02 formaggi / 03 gastronomia / 04 pasta fresca / 05 dolci) con rail-bancone puntinato, + fascia verde «Su misura» (catering/take-away/all'etto). Verde bottega + crema carta + senape + terracotta, Rokkitt + Hanken Grotesk. 15 foto reali (scartata cross-cache Urzì + volti staff). 15° sito del Blocco 3 (Brera), 1ª gastronomia/salumeria del progetto.", en: "A historic delicatessen and salumeria in Brera (Via Solferino 12, 4.0/41 [prospecting 4.6/163], since 1971, cured meats/cheeses/hand-made fresh pasta/ready dishes/catering, 2 shops; their WordPress site is dated). A unique structure: a signature AT-THE-COUNTER walk — the 5 departments as a NUMBERED zig-zag (01 cured meats / 02 cheeses / 03 gastronomy / 04 fresh pasta / 05 desserts) with a dotted counter rail, + a green «made to order» band (catering/take-away/by-the-hectogram). Shop green + paper cream + mustard + terracotta, Rokkitt + Hanken Grotesk. 15 real photos (discarded an Urzì cross-cache + staff faces). The 15th site of Block 3 (Brera), the project’s first delicatessen." },
    'camp.rg.open':  { it: 'Apri il sito di Rossi & Grassi in una nuova scheda', en: 'Open the Rossi & Grassi website in a new tab' },
    'camp.oba.short': { it: "Osteria di cucina mediterranea in zona Sempione (Via Piero della Francesca 40, 4,5/552, spazio intimo dai toni caldi, polpo/tagliolini al tartufo/pesce/dolci fatti in casa, prenotazione TheFork). Struttura unica: 1° sito DARK a lume di candela del progetto; gesto-firma ALLE PARETI — la parete di foto in bianco e nero (masonry grayscale che si accende di colore al passaggio) + motivo a fiamma di candela + la carta a 4 sezioni. Marrone espresso + ambra candela + crema + vino, Cardo + Karla. 15 foto reali (scartata cross-cache Rossi & Grassi + mani/emoji). 16° sito del Blocco 3 (Sempione), 1ª osteria dark candlelit.", en: "A Mediterranean osteria in the Sempione district (Via Piero della Francesca 40, 4.5/552, an intimate, warm-toned space, octopus/tagliolini with truffle/fish/house desserts, TheFork reservations). A unique structure: the project’s first DARK, candlelit site; a signature ON-THE-WALLS gesture — a wall of black-and-white photographs (grayscale masonry that lights up in colour on hover) + a candle-flame motif + a 4-section menu. Espresso brown + candle amber + cream + wine, Cardo + Karla. 15 real photos (discarded a Rossi & Grassi cross-cache + hands/emoji). The 16th site of Block 3 (Sempione), the first candlelit osteria." },
    'camp.oba.open':  { it: 'Apri il sito di Osteria del Borgo Antico in una nuova scheda', en: 'Open the Osteria del Borgo Antico website in a new tab' },
    'camp.bok.short': { it: "Cha chaan teng (sala da tè di Hong Kong) in Chinatown/Sarpi (Via Paolo Sarpi 25, 4,2/1537, dal 2019, «la stanza dei tesori» = dim sum fatto a mano dentro una vera biblioteca, pareti coperte di libri; no sito, solo IG @bokok.sarpi). Struttura unica: gesto-firma LA BIBLIOTECA — motivo a DORSI DI LIBRO (divisore + marchio + intro) + il menu «Gli scaffali dei sapori» (le categorie come ripiani con dorsi/foto) + fascia «Fatto a mano, uno a uno». Petrolio/teal + rosso imperiale + carta + oro + legno, Lora + Mulish, marchio 珍宝阁. 16 foto reali (biblioteca doppia altezza + dim sum colorati; scartata cross-cache Osteria del Borgo Antico + volti). 17° sito del Blocco 3 (Sarpi), 1ª cucina cinese/HK del progetto.", en: "A cha chaan teng (Hong Kong tea room) in Chinatown/Sarpi (Via Paolo Sarpi 25, 4.2/1537, since 2019, «the treasure room» = handmade dim sum inside a real library, walls lined with books; no website, Instagram only @bokok.sarpi). A unique structure: a signature LIBRARY gesture — a BOOK-SPINE motif (divider + mark + intro) + the «shelves of flavour» menu (categories as shelves with spines/photos) + a «made by hand, one by one» band. Teal/petrol + imperial red + paper + gold + wood, Lora + Mulish, a 珍宝阁 mark. 16 real photos (a double-height library + colourful dim sum; discarded an Osteria del Borgo Antico cross-cache + faces). The 17th site of Block 3 (Sarpi), the project’s first Chinese/HK cuisine." },
    'camp.bok.open':  { it: 'Apri il sito di Bokok in una nuova scheda', en: 'Open the Bokok website in a new tab' },
    'camp.mpb.short': { it: "Barbiere e parrucchiere per uomo, bottega storica di Brera (Via San Fermo della Battaglia 1 [prospecting «Via Madonnina» errato], 4,9/86, dal 1953, atmosfera senza tempo con mobili antichi e vetrinette di acque profumate, «solo forbici no macchinetta»; no sito). Struttura unica: gesto-firma LE FORBICI (emblema SVG forbici aperte marchio/divisore) + manifesto «Solo forbici. Niente macchinetta.» + fascia «Alla bottega si parla di…» (cinema/sport/vita) a pill. Noce+crema+cognac+ottone+bordeaux, Abril Fatface + Hanken Grotesk. FOTO-LIGHT (bottega face-heavy: 3 foto reali senza volti, niente fake). Diverso da L'Antico Parrucchiere (palo) e Mazzotta (& locandina). 18° sito del Blocco 3 (Brera), 3° tra barbieri/parrucchieri tutti diversi.", en: "A men’s barber and hairdresser, a historic Brera shop (Via San Fermo della Battaglia 1 [prospecting’s «Via Madonnina» was wrong], 4.9/86, since 1953, a timeless atmosphere with antique cabinets and cases of scented waters, «scissors only, no clippers»; no website). A unique structure: a signature SCISSORS gesture (an open-scissors SVG mark/divider) + a «Scissors only. No clippers.» manifesto + an «at the shop we talk about…» pill band (cinema/sport/life). Walnut + cream + cognac + brass + burgundy, Abril Fatface + Hanken Grotesk. PHOTO-LIGHT (a face-heavy shop: 3 real face-free photos, no fakes). Different from L’Antico Parrucchiere (pole) and Mazzotta (& poster). The 18th site of Block 3 (Brera), the 3rd barber/hairdresser, all distinct." },
    'camp.mpb.open':  { it: 'Apri il sito di Matteo Palermo Barbiere in una nuova scheda', en: 'Open the Matteo Palermo Barbiere website in a new tab' },
    'camp.ca.short': { it: "Micro banco di street food cinese a Chinatown/Sarpi (Via Paolo Sarpi 29, 3,3/29, aperto 7/7 fino alle 2, dedicato all'anatra intera = «quinto quarto»: collo/ali/zampe/lingua brasati, no sito). Struttura unica: identità street food punk che abbraccia l'offal; gesto-firma LA GUIDA AI TAGLI (le 6 preparazioni spiegate in chiaro — risolve il vero problema «non capivo cosa compravo») + fascia rossa «Come si mangia» (al banco, coi guanti) + timbro anatra. Rosso imperiale + oro + nero + carta, Anton + Mulish, marchio 绝味鸭料. 12 foto reali. Rating basso (3,3) tenuto onesto in schema, non in hero; ~3 recensioni reali. 19° del Blocco 3 (Sarpi), 2ª cucina cinese diversa da Bokok.", en: "A tiny Chinese street-food counter in Chinatown/Sarpi (Via Paolo Sarpi 29, 3.3/29, open 7/7 until 2am, dedicated to the whole duck = the «fifth quarter»: braised neck/wings/feet/tongue, no website). A unique structure: a punk street-food identity that embraces the offal; a signature GUIDE TO THE CUTS (the 6 preparations explained plainly — solving the real complaint «I didn’t know what I was buying») + a red «how to eat it» band (at the counter, with gloves) + a duck stamp. Imperial red + gold + black + paper, Anton + Mulish, a 绝味鸭料 mark. 12 real photos. The low rating (3.3) kept honest in the schema, not the hero; ~3 real reviews. The 19th site of Block 3 (Sarpi), a 2nd Chinese cuisine distinct from Bokok." },
    'camp.ca.open':  { it: "Apri il sito di Collo d'Anatra in una nuova scheda", en: 'Open the Collo d’Anatra website in a new tab' },
    'camp.dm.short': { it: "Libreria antiquaria & galleria di Brera (Via Fiori Oscuri 3, 5,0/6, dell'antiquario Andrea Oioli, membro A.L.A.I., libri antichi/rari/incunaboli + libri d'artista + tipografia artigianale; no sito). Struttura unica: estetica FRONTESPIZIO/letterpress (fregio tipografico + old-style) + gesto-firma «SETTE SECOLI» = linea del tempo XV→XXI (incunaboli→libri d'artista) + «Le collezioni». Avorio+inchiostro+bordeaux+oro, Cormorant Garamond + EB Garamond (serif+serif bookish). 6 foto reali (interno libro ABC, galleria scala a chiocciola, vetrina, d'artista). Diverso da Bokok (dorsi/biblioteca) pur essendo la 2ª libreria. 20° del Blocco 3 (Brera) — ULTIMO Alta, coda 20/20 completa.", en: "An antiquarian bookshop & gallery in Brera (Via Fiori Oscuri 3, 5.0/6, of the antiquarian Andrea Oioli, an A.L.A.I. member, antiquarian/rare books/incunabula + artist’s books + artisanal typography; no website). A unique structure: a FRONTISPIECE/letterpress aesthetic (a typographic fleuron + old-style faces) + a signature «SEVEN CENTURIES» timeline XV→XXI (incunabula→artist’s books) + «the collections». Ivory + ink + bordeaux + gold, Cormorant Garamond + EB Garamond (a bookish serif+serif). 6 real photos (the ABC-book interior, the spiral-staircase gallery, the window, artist’s books). Distinct from Bokok (spines/library) though both are bookshops. The 20th site of Block 3 (Brera) — the last Alta, the 20/20 queue complete." },
    'camp.dm.open':  { it: 'Apri il sito di Libreria Galleria Demetra in una nuova scheda', en: 'Open the Libreria Galleria Demetra website in a new tab' },
    'camp.pf.short': { it: "Bottega di famiglia di pasta fresca in zona Sempione (Via Piero della Francesca 20, 4,5/21, «una delle poche rimaste a Milano», ravioli/gnocchi/piatti pronti/dolci&torte; sito loro datato). Struttura unica: identità calda casalinga + gesto-firma SPIGA DI GRANO (marchio/divisore) + «Cosa trovi in bottega» (pasta fresca/piatti pronti/dolci/pane) + sezione «Il nome» (gioco sulla via Piero della Francesca). Crema farina + rosso pomodoro + oro grano + verde basilico, Vollkorn + Mulish. 5 foto reali (bottega, banco, torte). 1° del Backlog Media del Blocco 3, 1ª pasta fresca artigiana dedicata. (Pre-screen: scartati NeoRetrò e La Musicale, chiusi definitivamente.)", en: "A family fresh-pasta shop in the Sempione area (Via Piero della Francesca 20, 4.5/21, «one of the few left in Milan», ravioli/gnocchi/ready dishes/desserts & cakes; their site is dated). A unique structure: a warm, homely identity + a signature WHEAT-EAR (mark/divider) + a «what you’ll find» offering (fresh pasta/ready dishes/desserts/bread) + a «the name» section (a play on Via Piero della Francesca). Flour cream + tomato red + wheat gold + basil green, Vollkorn + Mulish. 5 real photos (the shop, the counter, cakes). The 1st of Block 3’s Media backlog, the project’s first dedicated fresh-pasta artisan. (Pre-screen: skipped NeoRetrò and La Musicale, both permanently closed.)" },
    'camp.pf.open':  { it: 'Apri il sito di Pasta della Francesca in una nuova scheda', en: 'Open the Pasta della Francesca website in a new tab' },
    'camp.cd.short': { it: "Grande ristorante fusion asiatico tra Sarpi e Corso Como (Piazzale Baiamonti 1, 4,1/2070, tre saloni/cucina a vista, dim sum + anatra pechinese + ramen + bubble tea + sushi gelato + vini&whisky; sito loro datato). Struttura unica: identità MODERNA/premium (≠ Bokok biblioteca, ≠ Collo d'Anatra punk); gesto-firma «LE CUCINE D'ASIA» = menù come atlante, 4 card per ORIGINE (Cina·Canton / Cina·Pechino / Giappone / Taiwan) + fascia rossa «Sushi gelato». Inchiostro + vermiglio + giada + carta washi, Space Grotesk + Mulish, marchio CD. 14 foto reali (murale gru, dim sum, anatra, gelato). 3° Media del Blocco 3, 3ª cucina asiatica diversa per struttura.", en: "A large Asian fusion restaurant between Sarpi and Corso Como (Piazzale Baiamonti 1, 4.1/2070, three halls/open kitchen, dim sum + Peking duck + ramen + bubble tea + sushi gelato + wines & whisky; their site is dated). A unique structure: a MODERN, premium identity (unlike Bokok’s library, unlike Collo d’Anatra’s punk); a signature «CUISINES OF ASIA» — the menu as an atlas, 4 cards by ORIGIN (China·Canton / China·Beijing / Japan / Taiwan) + a red «sushi gelato» band. Ink + vermilion + jade + washi paper, Space Grotesk + Mulish, a CD mark. 14 real photos (the crane mural, dim sum, duck, gelato). The 3rd Media build of Block 3, a 3rd Asian cuisine distinct by structure." },
    'camp.cd.open':  { it: 'Apri il sito di Chateau Dufan in una nuova scheda', en: 'Open the Chateau Dufan website in a new tab' },
    'camp.mad.short': { it: "Sito nuovo per la trattoria più antica di Milano, dal 1722 (Via Gentilino 6, Ticinese, 4,1/2346, «l'anima della vecchia Milano», riaperta 2023, solo Instagram). Struttura unica: gesto-firma l'EDICOLA VOTIVA (la santella che dà il nome, emblema SVG + divisori) + sezioni esclusive «300 anni» (timeline dal 1722) e «La bocciofila» (lo storico campo da bocce «alla milanese»); design forzato su reference heritage (cornice ornata + tradizione reinventata). Crema + bordeaux + oro votivo + noce, Cinzel + Tangerine (script del wordmark) + Hanken Grotesk. 13 foto reali (bancone coi cimeli, sala a quadretti, ossobuco, mondeghili, listino storico coi prezzi veri). 1° del Blocco 4 (Ticinese/Porta Romana), 5ª trattoria diversa per struttura.", en: "A brand-new site for Milan's oldest trattoria, established in 1722 (Via Gentilino 6, Ticinese district, 4.1/2346, «the soul of old Milan», reopened in 2023, Instagram only). A unique structure: the signature VOTIVE SHRINE (the little wayside shrine that gives the trattoria its name, an SVG emblem + dividers) + two exclusive sections, «300 years» (a timeline from 1722) and «The bocce court» (the historic court played «the Milanese way»); the design is pushed hard toward heritage references (ornate framing + tradition reimagined). Cream + bordeaux + votive gold + walnut, Cinzel + Tangerine (the wordmark script) + Hanken Grotesk. 13 real photos (the memorabilia-covered bar counter, the checked-cloth dining room, ossobuco, mondeghili, the historic menu with real prices). The 1st build of Block 4 (Ticinese/Porta Romana), a 5th trattoria distinct by structure." },
    'camp.mad.open':  { it: 'Apri il sito della Trattoria Madonnina in una nuova scheda', en: 'Open the Trattoria Madonnina website in a new tab' },
    'camp.cas.short': { it: "Sito nuovo per una salumeria e drogheria di famiglia a Porta Romana, dal 1898 (Via Orti 14, 4,8/23, la aprì Leonilde, oggi Ercole col figlio Paolo, «patria dei mondeghini», no sito). Struttura unica: gesto-firma l'insegna reale «CHI SE PARLA ANCA EL MILANES» ricreata come targa di legno + kicker in dialetto milanese per ogni sezione + banda «I mondeghini» (il piatto-firma) + glossario milanese (mondeghitt/michéta/quartìn). Diverso da Rossi & Grassi (al banco/reparti numerati). Crema + oxblood salame + senape + teal insegna + noce, DM Serif Display + Mulish. 4 foto reali (facciata dal 1898, banco salumi, drogheria, storefront). 2° del Blocco 4 (Ticinese/Porta Romana), 2ª salumeria/gastronomia diversa per struttura.", en: "A brand-new site for a family delicatessen and grocery in Porta Romana, since 1898 (Via Orti 14, 4.8/23, opened by Leonilde, today Ercole with his son Paolo, «home of the mondeghini», no site). A unique structure: the signature real sign «CHI SE PARLA ANCA EL MILANES» recreated as a wooden plaque + a Milanese-dialect kicker on every section + an «I mondeghini» band (the signature dish) + a Milanese glossary (mondeghitt/michéta/quartìn). Different from Rossi & Grassi (the numbered counter). Cream + salame oxblood + mustard + sign teal + walnut, DM Serif Display + Mulish. 4 real photos (the 1898 storefront, the deli counter, the grocery, the shopfront). The 2nd build of Block 4 (Ticinese/Porta Romana), a 2nd delicatessen distinct by structure.", },
    'camp.cas.open':  { it: 'Apri il sito della Salumeria Drogheria Cassani in una nuova scheda', en: 'Open the Salumeria Drogheria Cassani website in a new tab' },
    'camp.boa.short': { it: "Sito nuovo per una cartoleria storica di Porta Romana, dal 1942 (Viale Sabotino 2, 4,5/110, fondata da Claudio, oggi le nipoti Chiara e Giulia, tra le 12 botteghe scelte da Dolce & Gabbana per «Autentica», no sito). Struttura unica: estetica QUADERNO (fondo a quadretti + fogli a righe col margine rosso) + voce scritta a mano + timbro «Autentica 1942» (il riconoscimento D&G) + checklist «Cosa trovi» (penne/cartoline/scuola/regali). Crema + inchiostro navy + rosso quaderno + blu biro, Bricolage Grotesque + Patrick Hand (mano) + Figtree. Foto-light: 2 foto reali (facciata «Claudio Boati», scaffali colorati). 3° del Blocco 4 (Ticinese/Porta Romana), 1ª cartoleria del progetto.", en: "A brand-new site for a historic stationer's in Porta Romana, since 1942 (Viale Sabotino 2, 4.5/110, founded by Claudio, today the granddaughters Chiara and Giulia, one of the 12 shops chosen by Dolce & Gabbana for «Autentica», no site). A unique structure: a NOTEBOOK aesthetic (squared background + ruled sheets with a red margin) + a handwritten voice + an «Autentica 1942» stamp (the D&G recognition) + a «What you find» checklist (pens/cards/school/gifts). Cream + navy ink + notebook red + biro blue, Bricolage Grotesque + Patrick Hand (handwriting) + Figtree. Photo-light: 2 real photos (the «Claudio Boati» storefront, colourful shelves). The 3rd build of Block 4 (Ticinese/Porta Romana), the project's 1st stationer's.", },
    'camp.boa.open':  { it: 'Apri il sito della Cartoleria Boati in una nuova scheda', en: 'Open the Cartoleria Boati website in a new tab' },
    'camp.gal.short': { it: "Sito nuovo per una calzoleria storica del Ticinese, dal 1955 (Piazza Sant'Eustorgio 4, 4,7/90, famiglia Gallon, tre generazioni, «negozio vecchio stampo» famoso per le friulane, no sito solo IG). Struttura unica: gesto-firma la FRIULANA (silhouette della pantofola di velluto in SVG) come emblema + sezione «una per colore» (la friulana in 10 tinte velluto) + heritage «vecchio stampo». Diverso da Carozza Calzature (muro delle marche/comfort). Crema box + velluto verde + cognac, Playfair Display + Hanken Grotesk. 4 foto reali (facciata «G.Gallon» colore + B&N d'epoca, interno vecchio stampo, banco a prezzo giusto). 4° del Blocco 4 (Ticinese/Porta Romana), 2ª calzoleria diversa per struttura.", en: "A brand-new site for a historic Ticinese shoe shop, since 1955 (Piazza Sant'Eustorgio 4, 4.7/90, the Gallon family, three generations, an «old-style shop» famous for its friulane, no site, Instagram only). A unique structure: the signature FRIULANA (the velvet slipper's silhouette in SVG) as an emblem + a «one for every colour» section (the friulana in 10 velvet shades) + the «old-style» heritage. Different from Carozza Calzature (the wall of brands/comfort). Box cream + velvet green + cognac, Playfair Display + Hanken Grotesk. 4 real photos (the «G.Gallon» storefront in colour + a vintage B&W, the old-style interior, the fair-price counter). The 4th build of Block 4 (Ticinese/Porta Romana), a 2nd shoe shop distinct by structure.", },
    'camp.gal.open':  { it: 'Apri il sito di Calzature Gallon in una nuova scheda', en: 'Open the Calzature Gallon website in a new tab' },
    'camp.chi.short': { it: "Restyling per un'ottica storica di Porta Romana, dal 1914 (Corso di Porta Romana 74, 4,8/42, quattro generazioni: Arnaldo → Elda Cavaliere del Lavoro → oggi Silvia; montature d'avanguardia + esame optometrico + contattologia; sito loro chierichetti.it ROTTO, HTTP 500). Struttura unica: gesto-firma «Il Museo dell'Ottica» (la collezione di strumenti storici fondata da Elda nel 1994 — binocoli/cannocchiali/microscopi/soffietti in SVG) + l'ARANCIONE degli infissi + timeline 1914→oggi. Arancione + crema + inchiostro, Instrument Serif + Mulish. 4 foto reali (gabinetto d'epoca, corridoio con tavole optometriche, montature). 5° del Blocco 4 (Ticinese/Porta Romana), 1ª ottica del progetto.", en: "A restyle for a historic Porta Romana optician, since 1914 (Corso di Porta Romana 74, 4.8/42, four generations: Arnaldo → Elda, a Cavaliere del Lavoro → today Silvia; avant-garde frames + optometric exam + contact lenses; their site chierichetti.it is BROKEN, HTTP 500). A unique structure: the signature «Optics Museum» (the collection of historic instruments founded by Elda in 1994 — binoculars/spyglasses/microscopes/bellows cameras in SVG) + the ORANGE of the iconic window frames + a 1914→today timeline. Orange + cream + ink, Instrument Serif + Mulish. 4 real photos (the period cabinet, the corridor with eye charts, frames). The 5th build of Block 4 (Ticinese/Porta Romana), the project's 1st optician.", },
    'camp.chi.open':  { it: "Apri il sito dell'Ottica Chierichetti in una nuova scheda", en: 'Open the Ottica Chierichetti website in a new tab' },
    'camp.mat.short': { it: "Pub storico del Politecnico in Città Studi (Viale Romagna 43, 4,0/2313). Restyling: sito attuale datato. Struttura unica: la timeline «la serata» (dalle 18 alle 02: aperitivo → cena → birre → ultimo giro) + una fascia Eventi per le serate a tema (Peaky Blinders). Cream + verde bottiglia + ottone, Bebas Neue + DM Sans. Un pub caldo e studentesco, diverso dai pub scuri.", en: "A historic Politecnico pub in Città Studi (Viale Romagna 43, 4.0/2313). A restyle of a dated site. A unique structure: «the night» timeline (from 6pm to 2am: aperitivo → dinner → beers → last round) + an Events band for themed nights (Peaky Blinders). Cream + bottle green + brass, Bebas Neue + DM Sans. A warm, student pub, different from the dark ones." },
    'camp.mat.open':  { it: 'Apri il sito di Matricola Pub in una nuova scheda', en: 'Open the Matricola Pub website in a new tab' },
    'camp.alo.short': { it: "Gelateria siciliana storica in Città Studi (Via Vallazze 102, 4,6/838). Struttura unica: la sezione-firma «i gusti» = palline colorate sovrapposte (motivo scoops) nei colori del gelato siciliano, con i prezzi reali. Bright e gioiosa, Fraunces + Figtree, crema + blu + arancia. Granita, latte di mandorla e «il miglior gelato di Milano».", en: "A historic Sicilian gelateria in Città Studi (Via Vallazze 102, 4.6/838). A unique structure: the signature «flavours» section = overlapping coloured circles (a scoops motif) in Sicilian-gelato colours, with real prices. Bright and joyful, Fraunces + Figtree, cream + blue + orange. Granita, almond milk and «the best gelato in Milan»." },
    'camp.alo.open':  { it: 'Apri il sito di Aloha Gelateria in una nuova scheda', en: 'Open the Aloha Gelateria website in a new tab' },
    'camp.olb.short': { it: "Centro estetico & solarium in Città Studi (Viale Romagna 50), un piccolo studio gestito da donne. Struttura unica: il LISTINO reale (prezzi Treatwell) come pezzo centrale, con il trattamento T-Shape in evidenza. Intro personale, Instrument Serif + Manrope, crema + magenta. Avevano solo Treatwell: ora una vetrina calda con prenotazione WhatsApp.", en: "A beauty centre & solarium in Città Studi (Viale Romagna 50), a small women-run studio. A unique structure: the real price list (Treatwell prices) as the centrepiece, with the T-Shape treatment featured. A personal intro, Instrument Serif + Manrope, cream + magenta. They only had Treatwell: now a warm window with WhatsApp booking." },
    'camp.olb.open':  { it: 'Apri il sito di Oltre la Bellezza in una nuova scheda', en: 'Open the Oltre la Bellezza website in a new tab' },
    'camp.cec.short': { it: "Salone da parrucchiere storico in Città Studi (Via Teodosio 6), da Stefano con Marika e Noemi — clienti da oltre vent'anni. Concept heritage editoriale «da una vita»: masthead da giornale, motivo forbici-che-tagliano, bordeaux + ivory + ottone, Playfair Display + Onest. Non avevano un sito: ora una vetrina calda come il salone.", en: "A historic hair salon in Città Studi (Via Teodosio 6), run by Stefano with Marika and Noemi — clients for over twenty years. An editorial heritage concept, «for a lifetime»: a newspaper masthead, a cutting-scissors motif, bordeaux + ivory + brass, Playfair Display + Onest. They had no site: now a window as warm as the salon." },
    'camp.cec.open':  { it: 'Apri il sito di Ceccaroni Parrucchieri in una nuova scheda', en: 'Open the Ceccaroni Parrucchieri website in a new tab' },
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
