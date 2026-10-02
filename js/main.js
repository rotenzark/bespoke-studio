/* ============================================================
   BESPOKE STUDIO — main.js
   i18n IT/EN · reveal on scroll · cuciture · menu · form WhatsApp · campionario
   I testi delle card del campionario NON sono qui: li scrive il generatore
   (Agenzia/Toolkit/campionario/genera.mjs) in js/campionario-testi.js, caricato
   solo dalle pagine che mostrano card (audit P3, 2/10/2026).
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
    'nav.faq':           { it: 'Domande', en: 'FAQ' },
    'nav.contact':       { it: 'Contatti', en: 'Contact' },
    'nav.cta':           { it: 'Chiedi un preventivo', en: 'Ask for a quote' },
    'menu.note':         { it: 'CUCITO A MANO A MILANO', en: 'HAND-STITCHED IN MILAN' },

    'hero.eyebrow':      { it: 'BESPOKE STUDIO — AGENZIA WEB A MILANO', en: 'BESPOKE STUDIO — WEB DESIGN STUDIO IN MILAN' },
    'hero.title1':       { it: 'Siti web su misura,', en: 'Made-to-measure websites,' },
    'hero.title2':       { it: 'cuciti a Milano.', en: 'tailored in Milan.' },
    'hero.sub':          { it: 'Realizziamo siti web disegnati e sviluppati a mano per bar, ristoranti, negozi, studi e botteghe, e per le aziende che vogliono distinguersi. Nessun template: partiamo dalla tua attività.', en: 'We design and build websites by hand for cafés, restaurants, shops, studios and workshops, and for companies that want to stand out. No templates: we start from your business.' },
    'hero.cta1':         { it: 'Chiedi un preventivo', en: 'Ask for a quote' },
    'hero.cta2':         { it: 'Sfoglia il campionario', en: 'Browse the sample book' },
    'hero.note':         { it: 'RISPONDIAMO IN GIORNATA — WHATSAPP, TELEFONO O EMAIL', en: 'WE REPLY WITHIN THE DAY — WHATSAPP, PHONE OR EMAIL' },

    'manifesto.label':   { it: 'PEZZO 01 — IL MANIFESTO', en: 'PIECE 01 — THE MANIFESTO' },
    'manifesto.title1':  { it: 'Il prêt-à-porter va bene', en: 'Ready-to-wear fits' },
    'manifesto.title2':  { it: 'per quasi tutti.', en: 'almost everyone.' },
    'manifesto.title3':  { it: 'Quasi.', en: 'Almost.' },
    'manifesto.p1':      { it: 'I template promettono tutto, subito, a poco. Ma la tua attività non è come le altre: ha una storia, clienti veri e un modo tutto suo di lavorare. Noi partiamo da lì — dalle misure — e costruiamo ogni pagina a mano, finché il sito non ti calza.', en: 'Templates promise everything, instantly, for little. But your business is not like the others: it has a history, real customers and its own way of working. That is where we start — with the measurements — and we build every page by hand until the site truly fits.' },
    'manifesto.v1':      { it: 'Nessun template, mai', en: 'No templates, ever' },
    'manifesto.v2':      { it: 'Codice leggero, fatto a mano', en: 'Lightweight, handmade code' },
    'manifesto.v3':      { it: 'Preventivo chiaro, voce per voce', en: 'A clear quote, item by item' },

    'tagli.label':       { it: 'PEZZO 02 — I TAGLI', en: 'PIECE 02 — THE CUTS' },
    'tagli.title1':      { it: 'Tre tagli,', en: 'Three cuts,' },
    'tagli.title2':      { it: 'una sola regola: su misura.', en: 'one rule: made to measure.' },
    'tagli.sub':         { it: 'Il prezzo giusto dipende dalle misure, non da un listino. Per questo ogni preventivo è scritto apposta per te — chiaro, voce per voce, senza sorprese.', en: 'The right price depends on the measurements, not on a price list. Every quote is written just for you — clear, item by item, no surprises.' },
    'tagli.cta':         { it: 'Chiedi un preventivo su WhatsApp', en: 'Ask for a quote on WhatsApp' },

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

    'prev.label':        { it: 'PEZZO 03 — IL PREVENTIVO', en: 'PIECE 03 — THE QUOTE' },
    'prev.title1':       { it: 'Cosa entra', en: 'What goes' },
    'prev.title2':       { it: 'nel preventivo.', en: 'into the quote.' },
    'prev.b1.t':         { it: 'Da cosa dipende', en: 'What it depends on' },
    'prev.b1.d':         { it: "Dalle misure della tua attività: quante pagine, quante lingue, quali funzioni (prenotazioni, moduli, e-commerce), quanti testi e foto c'è da preparare, quanto devono essere su misura le animazioni. Lo scriviamo voce per voce, dopo una prima chiacchierata senza impegno.", en: "On your business's measurements: how many pages, how many languages, which features (bookings, forms, e-commerce), how much copy and how many photos need preparing, how bespoke the animations should be. We write it item by item, after a first no-strings conversation." },
    'prev.b2.t':         { it: 'Cosa c\'è sempre', en: 'What is always included' },
    'prev.b2.d':         { it: "Un design disegnato sulla tua attività, testi e foto curati con te, WhatsApp e telefono a portata di dito, un sito veloce e leggibile sul telefono, pronto per Google. E un'anteprima da provare insieme prima di andare online.", en: 'A design drawn around your business, copy and photos curated with you, WhatsApp and phone one tap away, a site that is fast and readable on a phone, ready for Google. And a preview to try on together before going live.' },
    'prev.b3.t':         { it: 'Sul tuo dominio', en: 'On your domain' },
    'prev.b3.d':         { it: 'Il sito va online sul tuo dominio, col nome della tua attività. Il codice è HTML, CSS e JavaScript scritti a mano, senza framework: leggero e facile da far crescere.', en: 'The site goes live on your domain, under your business name. The code is hand-written HTML, CSS and JavaScript, no frameworks: lightweight and easy to grow.' },
    'prev.b4.t':         { it: 'Dopo la consegna', en: 'After delivery' },
    'prev.b4.d':         { it: 'Restiamo a disposizione per ritocchi e modifiche: orari che cambiano, foto nuove, una pagina in più. Basta scriverci.', en: 'We stay around for alterations: changing hours, new photos, an extra page. Just drop us a line.' },

    'lavoro.label':      { it: 'PEZZO 04 — UNA PROPOSTA DAL CAMPIONARIO', en: 'PIECE 04 — A PROPOSAL FROM THE SAMPLE BOOK' },
    'lavoro.title1':     { it: 'Pasticceria Marí,', en: 'Pasticceria Marí,' },
    'lavoro.title2':     { it: 'Milano.', en: 'Milan.' },
    'lavoro.sub':        { it: "Una pasticceria artigianale in via Montegani: brioche sfornate all'alba e torte su misura. Per lei abbiamo disegnato una vetrina in italiano e in inglese, con la richiesta delle torte su WhatsApp. È una proposta, online in anteprima su un indirizzo di prova.", en: 'An artisan pastry shop in via Montegani: brioches baked at dawn and made-to-order cakes. We designed a shop window for it, in Italian and in English, with cake requests on WhatsApp. It is a proposal, online as a preview on a test address.' },
    'lavoro.s1t':        { it: 'IL PROGETTO', en: 'THE PROJECT' },
    'lavoro.s1d':        { it: 'Sito vetrina con richiesta torte via WhatsApp', en: 'Showcase website with cake requests via WhatsApp' },
    'lavoro.s2t':        { it: 'TESSUTO', en: 'THE FABRIC' },
    'lavoro.s2d':        { it: 'HTML, CSS e JavaScript — nessun framework', en: 'HTML, CSS and JavaScript — no frameworks' },
    'lavoro.s3t':        { it: 'LINGUE', en: 'LANGUAGES' },
    'lavoro.s3d':        { it: 'Italiano e inglese', en: 'Italian and English' },
    'lavoro.s4t':        { it: 'DOVE SI VEDE', en: 'WHERE TO SEE IT' },
    'lavoro.s4d':        { it: 'In anteprima, su un indirizzo di prova', en: 'As a preview, on a test address' },
    'lavoro.visit':      { it: "Apri l'anteprima", en: 'Open the preview' },
    'lavoro.open':       { it: "Apri l'anteprima della Pasticceria Marí in una nuova scheda", en: 'Open the Pasticceria Marí preview in a new tab' },
    'lavoro.imgalt':     { it: 'Homepage della proposta per la Pasticceria Marí: interno del locale con tavolini e vetrine, titolo di benvenuto e pulsante per ordinare una torta', en: 'Homepage of the Pasticceria Marí proposal: the shop interior with tables and display cases, a welcome headline and a button to order a cake' },
    'lavoro.all':        { it: 'Sfoglia il campionario', en: 'Browse the sample book' },
    'lavoro.consegnato': { it: 'Un lavoro consegnato: il sito di A.S.FA. Sicilia ODV, associazione di Palermo e Monreale, online sul suo dominio in tre lingue, italiano, inglese e arabo.', en: 'A delivered job: the website of A.S.FA. Sicilia ODV, an association in Palermo and Monreale, live on its own domain in three languages, Italian, English and Arabic.' },
    'lavoro.consegnato.link': { it: 'Visita asfasiciliaodv.it', en: 'Visit asfasiciliaodv.it' },

    'metodo.label':      { it: 'PEZZO 05 — IL METODO', en: 'PIECE 05 — THE METHOD' },
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

    'studio.label':      { it: 'PEZZO 06 — GLI ARTIGIANI', en: 'PIECE 06 — THE ARTISANS' },
    'studio.title1':     { it: 'Quattro mani,', en: 'Four hands,' },
    'studio.title2':     { it: 'un solo filo.', en: 'a single thread.' },
    'studio.chi':        { it: "Bespoke Studio è uno studio di web design nato a Milano nel 2026. Siamo in due: Kristian Cimò disegna e sviluppa i siti, Stephane Boka segue i clienti. Realizziamo siti vetrina per bar, ristoranti, negozi, studi e botteghe, e siti con più pagine, lingue e funzioni per le aziende. Ogni sito è scritto a mano, in HTML, CSS e JavaScript, senza template né framework: per questo è leggero e veloce sul telefono. Si comincia con una chiacchierata senza impegno, poi un preventivo chiaro, voce per voce, e un'anteprima da provare insieme; il sito va online sul tuo dominio e dopo restiamo a disposizione per i ritocchi. Rispondiamo in giornata su WhatsApp, al telefono o per email, dal lunedì al sabato.", en: 'Bespoke Studio is a web design studio founded in Milan in 2026. There are two of us: Kristian Cimò designs and builds the websites, Stephane Boka looks after the clients. We make showcase websites for cafés, restaurants, shops, studios and workshops, and websites with more pages, languages and features for companies. Every site is written by hand, in HTML, CSS and JavaScript, with no templates or frameworks: that is why it is light and fast on a phone. We start with a no-strings conversation, then a clear quote, item by item, and a preview to try on together; the site goes live on your domain and afterwards we stay around for alterations. We reply within the day on WhatsApp, by phone or by email, Monday to Saturday.' },
    'studio.p1.role':    { it: 'FOUNDER & DEVELOPER', en: 'FOUNDER & DEVELOPER' },
    'studio.p1.bio':     { it: 'Scrive il codice come si taglia un tessuto pregiato: senza sprechi. Suo ogni pixel, ogni animazione, ogni millisecondo di caricamento.', en: 'He writes code the way fine fabric is cut: nothing wasted. Every pixel, every animation, every millisecond of loading time is his.' },
    'studio.p2.role':    { it: 'SALES', en: 'SALES' },
    'studio.p2.bio':     { it: 'Prende le misure: ascolta, traduce i bisogni in soluzioni e promette solo quello che poi consegniamo. Il primo caffè lo offre lui.', en: 'He takes the measurements: he listens, turns needs into solutions and only promises what we then deliver. First coffee is on him.' },

    'faq.label':         { it: 'PEZZO 07 — LE DOMANDE', en: 'PIECE 07 — THE QUESTIONS' },
    'faq.title1':        { it: 'Prima di', en: 'Before' },
    'faq.title2':        { it: 'scriverci.', en: 'you write.' },
    'faq.q1':            { it: 'Quanto costa un sito?', en: 'How much does a website cost?' },
    'faq.a1':            { it: 'Dipende dalle misure: pagine, lingue, funzioni, testi e foto da preparare. Dopo una prima chiacchierata senza impegno ti scriviamo un preventivo chiaro, voce per voce, senza listino e senza sorprese.', en: 'It depends on the measurements: pages, languages, features, copy and photos to prepare. After a first no-strings conversation we write you a clear quote, item by item, with no price list and no surprises.' },
    'faq.q2':            { it: 'Usate dei template?', en: 'Do you use templates?' },
    'faq.a2':            { it: 'No. Ogni sito è disegnato e sviluppato a mano, in HTML, CSS e JavaScript, senza framework.', en: 'No. Every site is designed and built by hand, in HTML, CSS and JavaScript, with no frameworks.' },
    'faq.q3':            { it: 'Il sito funziona bene sul telefono?', en: 'Does the site work well on a phone?' },
    'faq.a3':            { it: 'Sì: lo sviluppiamo e lo proviamo su telefono, tablet e computer, in tutte le lingue del sito.', en: 'Yes: we build and test it on phone, tablet and computer, in every language of the site.' },
    'faq.q4':            { it: 'Il sito sarà su Google?', en: 'Will the site be on Google?' },
    'faq.a4':            { it: 'Lo prepariamo per Google: pagine veloci, titoli e descrizioni curati, i dati della tua attività scritti come Google li legge. La posizione nei risultati nessuno può prometterla, e noi non la promettiamo.', en: 'We get it ready for Google: fast pages, well-written titles and descriptions, your business details written the way Google reads them. Nobody can promise a position in the results, and we do not.' },
    'faq.q5':            { it: 'Su che indirizzo va online?', en: 'What address does it go live on?' },
    'faq.a5':            { it: 'Sul tuo dominio, col nome della tua attività.', en: 'On your own domain, under your business name.' },
    'faq.q6':            { it: 'Fate siti in inglese o in altre lingue?', en: 'Do you build sites in English or other languages?' },
    'faq.a6':            { it: 'Sì: italiano e inglese, e altre lingue quando servono. Uno dei nostri siti è online in tre lingue, con l\'arabo.', en: 'Yes: Italian and English, and other languages when needed. One of our sites is live in three languages, including Arabic.' },
    'faq.q7':            { it: 'E dopo la consegna?', en: 'And after delivery?' },
    'faq.a7':            { it: 'Restiamo a disposizione per ritocchi e modifiche: orari, foto, testi, una pagina in più.', en: 'We stay around for alterations: hours, photos, copy, an extra page.' },
    'faq.q8':            { it: 'Lavorate solo a Milano?', en: 'Do you only work in Milan?' },
    'faq.a8':            { it: 'Siamo a Milano e incontriamo volentieri i clienti di persona, ma lavoriamo anche a distanza: uno dei nostri siti è per un\'associazione di Palermo.', en: 'We are in Milan and happy to meet clients in person, but we also work remotely: one of our sites is for an association in Palermo.' },

    'contatti.label':    { it: 'PEZZO 08 — LE MISURE', en: 'PIECE 08 — THE FITTING' },
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
    'form.submit':       { it: 'Prepara il messaggio su WhatsApp', en: 'Prepare the message on WhatsApp' },
    'form.ok':           { it: 'Abbiamo aperto WhatsApp con il tuo messaggio già scritto: premi Invia per mandarcelo. Se non si è aperto, scrivici al +39 389 621 4452.', en: 'We opened WhatsApp with your message already written: press Send to get it to us. If it did not open, write to us at +39 389 621 4452.' },
    'form.alt':          { it: 'Preferisci scrivere con calma? <a href="mailto:' + 'info@bespokestud.io' + '?subject=Richiesta%20preventivo%20sito%20web">Mandaci un\'email</a>.', en: 'Prefer to write at your own pace? <a href="mailto:' + 'info@bespokestud.io' + '?subject=Website%20quote%20request">Send us an email</a>.' },

    'footer.tag':        { it: 'CUCITO A MANO A MILANO', en: 'HAND-STITCHED IN MILAN' },
    'footer.legal':      { it: 'TUTTI I DIRITTI RISERVATI', en: 'ALL RIGHTS RESERVED' },
    'footer.privacy':    { it: 'Privacy', en: 'Privacy' },

    'a11y.navSections':       { it: 'Sezioni del sito', en: 'Site sections' },
    'a11y.navSectionsFooter': { it: 'Sezioni del sito (footer)', en: 'Site sections (footer)' },
    'a11y.menuOpen':          { it: 'Apri il menu', en: 'Open the menu' },
    'a11y.menuClose':         { it: 'Chiudi il menu', en: 'Close the menu' },
    'a11y.newTab':            { it: '(si apre in una nuova scheda)', en: '(opens in a new tab)' },

    /* il campionario: l'interfaccia (i testi delle card sono in js/campionario-testi.js) */
    'camp.label':        { it: 'IL CAMPIONARIO', en: 'THE SAMPLE BOOK' },
    'camp.title1':       { it: 'Proposte di siti web', en: 'Website proposals' },
    'camp.title2':       { it: 'per attività di Milano.', en: 'for businesses in Milan.' },
    'camp.sub':          { it: 'Qui ci sono le nostre proposte: siti dimostrativi che abbiamo disegnato per bar, ristoranti, negozi e botteghe vere di Milano, per far vedere cosa sappiamo fare. Non li hanno commissionati loro, e ogni card lo dice. I lavori consegnati sono in cima.', en: 'Here are our proposals: demo websites we designed for real cafés, restaurants, shops and workshops in Milan, to show what we can do. They did not commission them, and every card says so. Delivered work comes first.' },
    'camp.filter':       { it: 'Filtra per settore', en: 'Filter by sector' },
    'camp.f.all':        { it: 'Tutti', en: 'All' },
    'cat.macro.beauty':  { it: 'Beauty & Benessere', en: 'Beauty & wellness' },
    'cat.macro.food':    { it: 'Ristoranti & Cucina', en: 'Restaurants' },
    'cat.macro.bar':     { it: 'Bar, Caffè & Vino', en: 'Bar, café & wine' },
    'cat.macro.dolci':   { it: 'Dolci, Gelato & Forno', en: 'Sweets & bakery' },
    'cat.macro.bottega': { it: 'Gastronomia & Bottega', en: 'Deli & food shops' },
    'cat.macro.shop':    { it: 'Negozi & Moda', en: 'Shops & fashion' },
    'cat.macro.servizi': { it: 'Servizi & Casa', en: 'Services' },
    'camp.consegnati':   { it: 'LAVORI CONSEGNATI', en: 'DELIVERED WORK' },
    'camp.all':          { it: 'Tutte le proposte', en: 'All proposals' },
    'camp.stato.proposta':   { it: 'Proposta', en: 'Proposal' },
    'camp.stato.consegnato': { it: 'Online per il cliente', en: 'Live for the client' },
    'camp.visit':        { it: 'Guarda la proposta', en: 'View the proposal' },
    'camp.visit.live':   { it: 'Visita il sito', en: 'Visit the site' },
    'camp.piu':          { it: 'Leggi di più', en: 'Read more' },
    'camp.more':         { it: 'Mostra altre proposte', en: 'Show more proposals' },
    'camp.shown':        { it: 'Ne vedi {n} su {t}', en: 'Showing {n} of {t}' },
    'camp.cta.title':    { it: 'Ti piace una di queste?', en: 'Like one of these?' },
    'camp.cta.text':     { it: 'Scrivici: prendiamo le misure della tua attività, senza impegno.', en: 'Write to us: we will take your business’s measurements, no strings attached.' },
    'camp.cta.btn':      { it: 'Scrivici su WhatsApp', en: 'Write to us on WhatsApp' },
    'camp.sticky':       { it: 'Vuoi un sito così? Scrivici', en: 'Want a site like this? Write to us' },
    'camp.slot.label':   { it: 'PROSSIMO PEZZO', en: 'NEXT PIECE' },
    'camp.slot.name':    { it: 'Il tuo progetto', en: 'Your project' },
    'camp.slot.desc':    { it: 'Questo posto nel campionario è libero. Raccontaci la tua attività: prendiamo le misure senza impegno.', en: 'This spot in the sample book is free. Tell us about your business: a fitting costs nothing.' },
    'camp.note':         { it: 'OGNI PROPOSTA HA I DATI DEL GIORNO IN CUI È STATA FATTA', en: 'EACH PROPOSAL CARRIES THE DETAILS OF THE DAY IT WAS MADE' },
    'camp.aggiornato':   { it: 'Aggiornato il', en: 'Updated on' }
  };

  /* i testi delle card (js/campionario-testi.js): l'italiano è già nell'HTML, quindi il file si scarica
     solo quando serve, cioè al primo passaggio all'inglese (audit P3) */
  function uniscIExtra() {
    var EXTRA = window.BESPOKE_I18N_EXTRA;
    if (EXTRA) for (var kx in EXTRA) { if (Object.prototype.hasOwnProperty.call(EXTRA, kx)) I18N[kx] = EXTRA[kx]; }
  }
  uniscIExtra();
  var TESTI_SRC = document.body.getAttribute('data-testi');
  /* 'pronti' | 'da-caricare' | 'in-corso': una sola richiesta alla volta; vale l'ULTIMA lingua scelta; l'italiano non
     scarica niente (è già nell'HTML); se il download fallisce la pagina resta in italiano e il clic successivo riprova */
  var testiStato = (TESTI_SRC && !window.BESPOKE_I18N_EXTRA) ? 'da-caricare' : 'pronti';
  var linguaVoluta = 'it';
  function scegliLingua(lang) {
    linguaVoluta = lang;
    if (lang !== 'en' || testiStato === 'pronti') { applyLang(lang); return; }
    if (testiStato === 'in-corso') return;
    testiStato = 'in-corso';
    var s = document.createElement('script');
    s.src = TESTI_SRC;
    s.onload = function () { testiStato = 'pronti'; uniscIExtra(); applyLang(linguaVoluta); };
    s.onerror = function () {
      testiStato = 'da-caricare';
      if (s.parentNode) s.parentNode.removeChild(s);
      if (linguaVoluta === 'en') linguaVoluta = 'it';
    };
    document.head.appendChild(s);
  }

  // titolo e description dipendono dalla pagina (data-page sul body)
  var PAGE = document.body.getAttribute('data-page') || 'home';

  var META = {
    home: {
      title: {
        it: 'Bespoke Studio — Agenzia web a Milano · Siti web su misura',
        en: 'Bespoke Studio — Web design studio in Milan · Made-to-measure websites'
      },
      description: {
        it: 'Siti web disegnati e sviluppati a mano per bar, ristoranti, negozi, studi e botteghe di Milano. Preventivo chiaro, voce per voce; rispondiamo in giornata su WhatsApp.',
        en: 'Websites designed and built by hand for cafés, restaurants, shops, studios and workshops in Milan. A clear quote, item by item; we reply within the day on WhatsApp.'
      }
    },
    lavori: {
      title: {
        it: 'Proposte di siti web per attività di Milano — Il campionario di Bespoke Studio',
        en: 'Website proposals for businesses in Milan — The Bespoke Studio sample book'
      },
      description: {
        it: 'Il campionario di Bespoke Studio: siti dimostrativi disegnati per bar, ristoranti, parrucchieri, negozi e botteghe di Milano, e i lavori consegnati. Ogni proposta è segnata come tale.',
        en: 'The Bespoke Studio sample book: demo websites designed for cafés, restaurants, hair salons, shops and workshops in Milan, plus delivered work. Every proposal is labelled as such.'
      }
    }
  };

  /* le pagine solo in italiano (le pagine di settore): niente cambio di lingua */
  var SOLO_IT = document.documentElement.hasAttribute('data-solo-it');

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

    var meta = META[PAGE];
    if (meta) {
      document.title = meta.title[lang];
      var desc = document.querySelector('meta[name="description"]');
      if (desc) desc.setAttribute('content', meta.description[lang]);
    }

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

    aggiornaContatore();
    aggiornaInviti();
    aggiornaSticky();

    try { localStorage.setItem('bespoke-lang', lang); } catch (e) { /* private mode */ }
  }

  document.querySelectorAll('.lang__btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      scegliLingua(btn.getAttribute('data-lang'));
    });
  });

  /* ----------------------------------------------------------
     WhatsApp: ogni pulsante ha il suo riferimento nel messaggio
     (audit X6: si sa da dove arriva un contatto, senza tracciare nessuno)
     ---------------------------------------------------------- */
  var WA_TESTO = {
    it: 'Ciao Bespoke Studio! Vorrei un preventivo per un sito.',
    en: 'Hi Bespoke Studio! I would like a quote for a website.'
  };
  function waHref(testo, rif) {
    return 'https://wa.me/' + CONFIG.whatsapp + '?text=' + encodeURIComponent(testo + (rif ? ' [rif: ' + rif + ']' : ''));
  }
  function aggiornaInviti() {
    document.querySelectorAll('a[data-wa]').forEach(function (a) {
      a.href = waHref(WA_TESTO[currentLang], a.getAttribute('data-wa'));
    });
  }

  /* ----------------------------------------------------------
     Reveal on scroll + cuciture
     (audit P1: niente sipario d'ingresso, il testo si vede subito)
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

    // La cucitura sotto il titolo si disegna subito: è una decorazione
    var stitch = document.querySelector('.stitch--hero');
    if (stitch) stitch.classList.add('is-sewn');
  }

  /* ----------------------------------------------------------
     Il filo: la cucitura che attraversa la pagina e si riempie
     con lo scroll (maschera a trattini + tracciato che si disegna).
     Sul campionario no (audit P2: pagina lunghissima, ogni scroll
     ridisegnava un SVG alto quanto tutta la pagina).
     ---------------------------------------------------------- */
  (function () {
    if (!document.createElementNS) return;
    if (PAGE === 'lavori') return;

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
      // NON chiamarla "*reveal*": il filo non è un elemento a comparsa, si
      // disegna e si nasconde da solo sotto 1px di segmento. Col vecchio nome
      // "thread-reveal" finiva nel selettore [class*="reveal"] della QA e
      // faceva scattare reveal-vanish/reveal-never-shown su una decorazione
      // che funzionava benissimo (20/7/2026).
      revealPath.setAttribute('class', 'thread-draw');
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
  var formOk = document.getElementById('form-ok');

  /* «Chiedi un preventivo» sotto un taglio sceglie quel taglio nel modulo (audit X5) */
  document.querySelectorAll('[data-taglio]').forEach(function (a) {
    a.addEventListener('click', function () {
      if (form && form.taglio) form.taglio.value = a.getAttribute('data-taglio');
    });
  });

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
        if (formOk) formOk.hidden = true;
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

      window.open(waHref(text, 'modulo'), '_blank', 'noopener');
      // sulla pagina resta una conferma: WhatsApp si è aperto, manca solo «Invia» (audit A5)
      if (formOk) { formOk.hidden = false; }
    });
  }

  /* ----------------------------------------------------------
     Campionario: filtri per settore (con indirizzo: #beauty),
     «Mostra altre» a pacchi di 24, contatore, invito fisso
     ---------------------------------------------------------- */
  var PACCO = 24;
  var griglia = document.querySelector('.progetti[data-pacco]');
  var chips = document.querySelectorAll('.chip[data-filter]');
  var bottoneAltre = document.getElementById('camp-altre');
  var contatore = document.getElementById('camp-contatore');
  var active = [];
  var limite = PACCO;
  var visibili = 0, totali = 0;

  function aggiornaContatore() {
    if (!contatore || !totali) return;
    var t = I18N['camp.shown'][currentLang];
    contatore.textContent = t.replace('{n}', String(visibili)).replace('{t}', String(totali));
  }

  function applyFiltro() {
    if (!griglia) return;
    var progetti = griglia.querySelectorAll('.progetto');
    var n = 0;
    totali = 0;
    progetti.forEach(function (el) {
      var toks = (el.getAttribute('data-cat') || '').split(/\s+/);
      // la card del nostro sito: solo con «Tutti», e non conta fra le proposte
      if (toks.indexOf('studio') !== -1) { el.classList.toggle('is-hidden', active.length > 0); return; }
      var sempre = toks.indexOf('sempre') !== -1;
      var match = sempre || active.length === 0 || active.some(function (a) { return toks.indexOf(a) !== -1; });
      if (match && !sempre) totali++;
      var show = match && (sempre || n < limite);
      if (match && !sempre && n < limite) n++;
      el.classList.toggle('is-hidden', !show);
    });
    visibili = n;
    if (bottoneAltre) bottoneAltre.hidden = visibili >= totali;
    aggiornaContatore();
  }

  function scriviIndirizzo() {
    var h = active.length ? '#' + active.join('+') : ' ';
    try { history.replaceState(null, '', h === ' ' ? location.pathname + location.search : h); } catch (e) { /* file:// */ }
  }

  if (griglia) {
    PACCO = parseInt(griglia.getAttribute('data-pacco'), 10) || PACCO;
    limite = PACCO;
    var validi = [];
    chips.forEach(function (c) { validi.push(c.getAttribute('data-filter')); });
    // filtro scritto nell'indirizzo: lavori.html#beauty o #food+bar (anche quando l'indirizzo cambia dopo, audit di Codex)
    var leggiHash = function () {
      return (location.hash || '').replace(/^#/, '').split('+').filter(function (f) { return f && f !== 'tutti' && validi.indexOf(f) !== -1; });
    };
    active = leggiHash();
    window.addEventListener('hashchange', function () {
      active = leggiHash();
      limite = PACCO;
      segnaChips();
      applyFiltro();
    });
    var segnaChips = function () {
      chips.forEach(function (c) {
        var cf = c.getAttribute('data-filter');
        var on = cf === 'tutti' ? active.length === 0 : active.indexOf(cf) !== -1;
        c.classList.toggle('is-active', on);
        c.setAttribute('aria-pressed', String(on));
      });
    };
    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        var f = chip.getAttribute('data-filter');
        if (f === 'tutti') { active = []; }
        else { var i = active.indexOf(f); if (i === -1) active.push(f); else active.splice(i, 1); }
        limite = PACCO;
        segnaChips();
        applyFiltro();
        scriviIndirizzo();
      });
    });
    if (bottoneAltre) {
      bottoneAltre.addEventListener('click', function () {
        // il fuoco va alla prima card nuova: chi usa la tastiera non torna in cima
        var prima = visibili;
        limite += PACCO;
        applyFiltro();
        var nuove = griglia.querySelectorAll('.progetto:not(.is-hidden):not([data-cat="sempre"])');
        var bersaglio = nuove[prima] && nuove[prima].querySelector('a');
        if (bersaglio) bersaglio.focus({ preventScroll: false });
      });
    }
    segnaChips();
    applyFiltro();
  }

  /* l'invito fisso in basso sul telefono: porta nel messaggio il nome dell'ultima card vista (audit X3) */
  var sticky = document.getElementById('camp-sticky');
  var ultimaVista = '';
  function aggiornaSticky() {
    if (!sticky) return;
    var testo = ultimaVista
      ? (currentLang === 'it' ? 'Ciao Bespoke Studio! Ho visto la proposta per «' + ultimaVista + '» nel campionario: vorrei un sito così per la mia attività.' : 'Hi Bespoke Studio! I saw the proposal for “' + ultimaVista + '” in the sample book: I would like a site like that for my business.')
      : WA_TESTO[currentLang];
    sticky.href = waHref(testo, 'campionario');
  }
  if (sticky && griglia && 'IntersectionObserver' in window) {
    var ioCard = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          var nm = en.target.querySelector('.card-progetto__name');
          if (nm) { ultimaVista = nm.textContent.trim(); aggiornaSticky(); }
        }
      });
    }, { threshold: 0.6 });
    griglia.querySelectorAll('.card-progetto').forEach(function (c) { ioCard.observe(c); });
  }

  /* ----------------------------------------------------------
     Lingua salvata (dopo i filtri: il contatore la usa)
     ---------------------------------------------------------- */
  var storedLang = null;
  try { storedLang = localStorage.getItem('bespoke-lang'); } catch (e) { /* private mode */ }
  if (storedLang === 'en' && !SOLO_IT) scegliLingua('en');
  else { aggiornaInviti(); aggiornaContatore(); }
  aggiornaSticky();

  startPageAnimations();

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
