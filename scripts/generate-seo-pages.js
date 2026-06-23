const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');

const pages = [
  {
    slug: 'vendre-duplex-saguenay',
    title: 'Vendre un duplex au Saguenay | Évaluation gratuite',
    description: 'Vendez votre duplex au Saguenay avec René Bouchard. Réseau d\'investisseurs, analyse MRB/TGA et évaluation gratuite à Jonquière, Chicoutimi et La Baie.',
    h1: 'Vendre un duplex au Saguenay',
    subtitle: 'Obtenez le meilleur prix pour votre duplex à 2 logements dans le Saguenay–Lac-Saint-Jean.',
    keyword: 'duplex',
    locality: 'Saguenay',
    intro: 'Le marché des duplex au Saguenay attire des investisseurs qui recherchent un premier immeuble à revenus ou un complément de revenus. Une mise en marché orientée rendement — et non seulement le prix au pied carré — fait toute la différence.',
    bullets: [
      'Analyse des loyers comparables par secteur (Chicoutimi, Jonquière, La Baie)',
      'Présentation claire du revenu net et du multiplicateur de revenus brut (MRB)',
      'Réseau d\'acheteurs actifs pour duplex au Saguenay',
    ],
    faq: [
      { q: 'Combien de temps pour vendre un duplex au Saguenay?', a: 'Selon le prix, l\'état et le rendement, la vente peut prendre de quelques semaines à quelques mois. Un prix aligné sur le marché et une fiche investisseur complète accélèrent le processus.' },
      { q: 'Faut-il vendre vacant ou occupé?', a: 'Les deux scénarios sont possibles. Nous structurons la visibilité pour rassurer l\'acheteur investisseur tout en limitant les dérangements pour vos locataires.' },
    ],
    related: ['vendre-triplex-saguenay', 'vendre-multiplex-chicoutimi', 'evaluation-multiplex-saguenay'],
  },
  {
    slug: 'vendre-triplex-saguenay',
    title: 'Vendre un triplex au Saguenay | Courtier spécialisé',
    description: 'Vente de triplex au Saguenay : stratégie investisseur, évaluation gratuite et accompagnement par René Bouchard, courtier en immeubles à revenus.',
    h1: 'Vendre un triplex au Saguenay',
    subtitle: 'Maximisez la valeur de votre triplex grâce à une stratégie pensée pour les acheteurs d\'immeubles à revenus.',
    keyword: 'triplex',
    locality: 'Saguenay',
    intro: 'Un triplex au Saguenay combine souvent un logement propriétaire et des revenus locatifs. Les acheteurs comparent le TGA, les dépenses réelles et le potentiel d\'optimisation des loyers.',
    bullets: [
      'Dossier de vente avec états des revenus et dépenses normalisés',
      'Ciblage des investisseurs du Saguenay et de Québec',
      'Négociation fondée sur le rendement, pas uniquement sur l\'émotion',
    ],
    faq: [
      { q: 'Quel rendement viser pour un triplex au Saguenay?', a: 'Le rendement dépend du secteur, de l\'état et des loyers. Nous positionnons votre prix en fonction des transactions récentes et des critères des acheteurs institutionnels et privés.' },
    ],
    related: ['vendre-duplex-saguenay', 'vendre-quadriplex-saguenay', 'immeuble-a-revenus-saguenay'],
  },
  {
    slug: 'vendre-quadriplex-saguenay',
    title: 'Vendre un quadriplex au Saguenay | Meilleur prix',
    description: 'Vendre un quadriplex au Saguenay avec une stratégie ROI. Évaluation gratuite, réseau d\'investisseurs et visibilité Centris par René Bouchard.',
    h1: 'Vendre un quadriplex au Saguenay',
    subtitle: '4 logements, un actif stratégique : vendez au prix que justifient vos revenus.',
    keyword: 'quadriplex',
    locality: 'Saguenay',
    intro: 'Le quadriplex est une pierre angulaire du parc immobilier à revenus au Saguenay. Les acheteurs expérimentés analysent chaque porte, chaque bail et chaque dépense d\'exploitation.',
    bullets: [
      'Valorisation par porte et par revenu global',
      'Gestion professionnelle des visites et des délais',
      'Marketing Centris + réseau hors marché',
    ],
    faq: [
      { q: 'Un quadriplex se finance-t-il facilement au Saguenay?', a: 'Les institutions financières évaluent la rentabilité et l\'historique de crédit de l\'immeuble. Un dossier clair facilite le financement de l\'acheteur et donc la vente.' },
    ],
    related: ['vendre-triplex-saguenay', 'courtier-multiplex-saguenay', 'vendre-multiplex-jonquiere'],
  },
  {
    slug: 'vendre-multiplex-chicoutimi',
    title: 'Vendre un multiplex à Chicoutimi | Immeuble à revenus',
    description: 'Courtier pour vendre un duplex, triplex ou multiplex à Chicoutimi. Évaluation gratuite et acheteurs qualifiés au Saguenay.',
    h1: 'Vendre un multiplex à Chicoutimi',
    subtitle: 'Expertise locale pour les immeubles à revenus du secteur Chicoutimi et du centre-ville.',
    keyword: 'multiplex',
    locality: 'Chicoutimi',
    intro: 'Chicoutimi concentre une forte demande locative et un bassin d\'investisseurs régionaux. Vendre un multiplex ici exige de comprendre les micro-marchés : rues commerciales, secteurs résidentiels, stationnement et zonage.',
    bullets: [
      'Connaissance des secteurs recherchés à Chicoutimi',
      'Positionnement prix selon les transactions comparables',
      'Accompagnement jusqu\'à la signature chez le notaire',
    ],
    faq: [
      { q: 'Quels types d\'immeubles vendez-vous à Chicoutimi?', a: 'Duplex, triplex, quadriplex et immeubles de 5 logements et plus, selon le mandat et les objectifs du propriétaire vendeur.' },
    ],
    related: ['vendre-multiplex-jonquiere', 'vendre-duplex-saguenay', 'immeuble-a-revenus-saguenay'],
  },
  {
    slug: 'vendre-multiplex-jonquiere',
    title: 'Vendre un multiplex à Jonquière | René Bouchard',
    description: 'Vente de multiplex et immeubles à revenus à Jonquière. Évaluation gratuite, stratégie investisseur et réseau d\'acheteurs au Saguenay.',
    h1: 'Vendre un multiplex à Jonquière',
    subtitle: 'Stratégie de vente adaptée au marché locatif de Jonquière et du Saguenay.',
    keyword: 'multiplex',
    locality: 'Jonquière',
    intro: 'Jonquière offre un équilibre intéressant entre prix d\'acquisition et rendement pour les investisseurs. Les propriétaires qui vendent un multiplex doivent mettre en avant la stabilité des baux et l\'entretien de l\'immeuble.',
    bullets: [
      'Analyse des loyers par quartier à Jonquière',
      'Visibilité maximale sur Centris et réseau privé',
      'Conseils pour préparer l\'immeuble avant la mise en vente',
    ],
    faq: [],
    related: ['vendre-multiplex-chicoutimi', 'vendre-multiplex-la-baie', 'evaluation-multiplex-saguenay'],
  },
  {
    slug: 'vendre-multiplex-la-baie',
    title: 'Vendre un multiplex à La Baie | Saguenay',
    description: 'Vendez votre immeuble à revenus à La Baie avec un courtier spécialisé. Duplex, triplex, multiplex : évaluation gratuite au Saguenay.',
    h1: 'Vendre un multiplex à La Baie',
    subtitle: 'Accompagnement pour la vente d\'immeubles à revenus dans le secteur La Baie.',
    keyword: 'multiplex',
    locality: 'La Baie',
    intro: 'Le secteur La Baie possède son propre rythme de marché. Les acheteurs y recherchent souvent des immeubles bien entretenus avec un bon ratio prix/revenu et un potentiel de valeurisation à long terme.',
    bullets: [
      'Évaluation basée sur les rendements du secteur La Baie',
      'Communication transparente avec les locataires en place',
      'Mise en marché ciblant investisseurs du SLSJ',
    ],
    faq: [],
    related: ['vendre-multiplex-chicoutimi', 'vendre-multiplex-lac-saint-jean', 'vendre-duplex-saguenay'],
  },
  {
    slug: 'vendre-multiplex-alma',
    title: 'Vendre un multiplex à Alma | Lac-Saint-Jean',
    description: 'Vente de duplex, triplex et multiplex à Alma. Courtier en immeubles à revenus pour le Lac-Saint-Jean et le Saguenay.',
    h1: 'Vendre un multiplex à Alma',
    subtitle: 'Étendez votre portée d\'acheteurs au-delà d\'Alma grâce à un réseau régional.',
    keyword: 'multiplex',
    locality: 'Alma',
    intro: 'Alma attire des investisseurs du Lac-Saint-Jean et du Saguenay qui diversifient leur portefeuille. Vendre un multiplex à Alma demande une présentation financière rigoureuse et une connaissance du marché locatif local.',
    bullets: [
      'Comparables à Alma et dans les municipalités voisines',
      'Stratégie de prix pour attirer les investisseurs de Québec et du SLSJ',
      'Suivi personnalisé du mandat de vente',
    ],
    faq: [],
    related: ['vendre-multiplex-lac-saint-jean', 'immeuble-a-revenus-saguenay', 'courtier-multiplex-saguenay'],
  },
  {
    slug: 'vendre-multiplex-lac-saint-jean',
    title: 'Vendre un multiplex au Lac-Saint-Jean | Saguenay',
    description: 'Courtier pour vendre un immeuble à revenus au Lac-Saint-Jean : Alma, Roberval, Dolbeau et Saguenay. Évaluation gratuite.',
    h1: 'Vendre un multiplex au Lac-Saint-Jean',
    subtitle: 'Une expertise régionale pour les propriétaires d\'immeubles à revenus dans tout le SLSJ.',
    keyword: 'multiplex',
    locality: 'Lac-Saint-Jean',
    intro: 'Le Lac-Saint-Jean partage avec le Saguenay une clientèle d\'investisseurs pragmatiques, attentifs au cash-flow. Que votre immeuble soit à Alma, Roberval ou dans une autre municipalité, la vente doit parler le langage du rendement.',
    bullets: [
      'Couverture Saguenay + Lac-Saint-Jean',
      'Documents préparés pour faciliter le financement de l\'acheteur',
      'Réseau d\'investisseurs actifs dans la région',
    ],
    faq: [],
    related: ['vendre-multiplex-alma', 'vendre-multiplex-jonquiere', 'courtier-multiplex-saguenay'],
  },
  {
    slug: 'immeuble-a-revenus-saguenay',
    title: 'Immeuble à revenus au Saguenay | Vente & évaluation',
    description: 'Vendre un immeuble à revenus au Saguenay : duplex à 12 logements et plus. Évaluation gratuite par René Bouchard, courtier spécialisé.',
    h1: 'Vendre un immeuble à revenus au Saguenay',
    subtitle: 'De 2 à 12+ logements : stratégie sur mesure pour chaque taille d\'actif.',
    keyword: 'immeuble à revenus',
    locality: 'Saguenay',
    intro: 'Un immeuble à revenus n\'est pas une maison unifamiliale : la vente repose sur les chiffres, la qualité des baux, l\'entretien capital et la capacité de l\'acheteur à financer. Au Saguenay, les investisseurs comparent les opportunités sur la base du revenu net et du risque.',
    bullets: [
      'Analyse MRB, TGA et dépenses d\'exploitation',
      'Préparation d\'une fiche investisseur professionnelle',
      'Accès à des acheteurs qualifiés hors publique',
    ],
    faq: [
      { q: 'Quelle est la différence entre multiplex et immeuble à revenus?', a: 'On utilise souvent « multiplex » pour 2 à 4 logements et « immeuble à revenus » pour les plus grands parcs. Nous accompagnons toutes les tailles.' },
    ],
    related: ['courtier-multiplex-saguenay', 'evaluation-multiplex-saguenay', 'vendre-quadriplex-saguenay'],
  },
  {
    slug: 'courtier-multiplex-saguenay',
    title: 'Courtier multiplex Saguenay | René Bouchard',
    description: 'Courtier immobilier spécialisé en multiplex et immeubles à revenus au Saguenay. Vente stratégique, évaluation gratuite, 20+ ans d\'expérience.',
    h1: 'Courtier multiplex au Saguenay',
    subtitle: 'René Bouchard — accompagnement dédié aux propriétaires d\'immeubles à revenus.',
    keyword: 'courtier multiplex',
    locality: 'Saguenay',
    intro: 'Choisir un courtier qui comprend les immeubles à revenus, c\'est choisir quelqu\'un qui sait parler aux investisseurs, défendre votre prix avec des données et protéger vos intérêts jusqu\'à la transaction finale.',
    bullets: [
      '20+ ans d\'expérience en immobilier au Saguenay',
      'Mandats Centris et marketing ciblé investisseur',
      'Évaluation gratuite et sans engagement',
    ],
    faq: [
      { q: 'Pourquoi un courtier spécialisé plutôt qu\'un généraliste?', a: 'La vente d\'un multiplex exige des compétences en analyse financière, en locataires et en négociation avec des acheteurs sophistiqués — pas seulement une belle photo.' },
    ],
    related: ['immeuble-a-revenus-saguenay', 'evaluation-multiplex-saguenay', 'vendre-multiplex-chicoutimi'],
  },
  {
    slug: 'evaluation-multiplex-saguenay',
    title: 'Évaluation multiplex Saguenay | Gratuite & confidentielle',
    description: 'Évaluation gratuite de votre duplex, triplex ou multiplex au Saguenay. Analyse de rentabilité et prix de marché par René Bouchard.',
    h1: 'Évaluation de multiplex au Saguenay',
    subtitle: 'Découvrez la valeur réelle de votre immeuble selon les rendements actuels du marché.',
    keyword: 'évaluation multiplex',
    locality: 'Saguenay',
    intro: 'Une évaluation orientée investisseur ne se limite pas à une fourchette de prix « au feeling ». Nous croisons vos revenus, vos dépenses, les comparables récents et les attentes des acheteurs actifs au Saguenay.',
    bullets: [
      'Formulaire rapide en ligne — réponse personnalisée',
      'Analyse confidentielle, sans pression',
      'Recommandations pour maximiser la valeur avant la vente',
    ],
    faq: [
      { q: 'L\'évaluation est-elle vraiment gratuite?', a: 'Oui. Il s\'agit d\'une analyse préliminaire pour vous aider à prendre une décision éclairée. Aucun mandat n\'est imposé.' },
    ],
    related: ['vendre-duplex-saguenay', 'courtier-multiplex-saguenay', 'immeuble-a-revenus-saguenay'],
  },
  {
    slug: 'vendre-5-8-logements-saguenay',
    title: 'Vendre un immeuble 5 à 8 logements | Saguenay',
    description: 'Vente d\'immeubles de 5 à 8 logements au Saguenay. Courtier spécialisé, analyse ROI et réseau d\'investisseurs institutionnels et privés.',
    h1: 'Vendre un immeuble de 5 à 8 logements au Saguenay',
    subtitle: 'Actifs de taille moyenne : exigence professionnelle et visibilité ciblée.',
    keyword: 'immeuble 5 à 8 logements',
    locality: 'Saguenay',
    intro: 'Entre le petit multiplex et le grand parc locatif, les immeubles de 5 à 8 logements au Saguenay intéressent des investisseurs qui cherchent de l\'échelle sans la complexité des très grands actifs.',
    bullets: [
      'Dossier technique et financier complet',
      'Ciblage d\'acheteurs capables de financement commercial',
      'Gestion des délais, inspections et conditions',
    ],
    faq: [],
    related: ['immeuble-a-revenus-saguenay', 'courtier-multiplex-saguenay', 'vendre-multiplex-jonquiere'],
  },
];

const allSlugs = pages.map((p) => p.slug);

function slugToLabel(slug) {
  return slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

function renderPage(p) {
  const canonical = `https://multiplexsaguenay.com/${p.slug}.html`;
  const bulletsHtml = p.bullets.map((b) => `<li class="flex gap-3"><span class="text-brand-blue mt-1">→</span><span>${b}</span></li>`).join('\n');
  const faqHtml = (p.faq || [])
    .map(
      (f) => `
        <details class="group border border-slate-200 rounded-xl p-6 bg-slate-50">
          <summary class="font-serif text-lg cursor-pointer list-none flex justify-between items-center gap-4">
            ${f.q}
            <span class="text-brand-blue text-2xl group-open:rotate-45 transition-transform">+</span>
          </summary>
          <p class="mt-4 text-zinc-400 font-light leading-relaxed">${f.a}</p>
        </details>`
    )
    .join('');
  const relatedHtml = p.related
    .map(
      (slug) =>
        `<a href="${slug}.html" class="block border border-slate-200 rounded-lg px-4 py-3 text-sm hover:border-brand-blue hover:text-brand-blue transition capitalize">${slugToLabel(slug)}</a>`
    )
    .join('\n');

  const otherLinks = allSlugs
    .filter((s) => s !== p.slug && !p.related.includes(s))
    .slice(0, 6)
    .map(
      (slug) =>
        `<a href="${slug}.html" class="text-zinc-500 hover:text-brand-blue text-sm transition">${slugToLabel(slug)}</a>`
    )
    .join(' · ');

  return `<!DOCTYPE html>
<html lang="fr" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${p.title}</title>
    <meta name="description" content="${p.description}">
    <link rel="canonical" href="${canonical}">
    <meta property="og:title" content="${p.title}">
    <meta property="og:description" content="${p.description}">
    <meta property="og:type" content="website">
    <meta property="og:locale" content="fr_CA">
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        brand: { blue: '#142838', dark: '#142838', light: '#f8fafc' }
                    },
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                        serif: ['Playfair Display', 'serif'],
                    }
                }
            }
        }
    </script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet">
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "RealEstateAgent",
      "name": "René Bouchard - Multiplex Saguenay",
      "areaServed": { "@type": "City", "name": "${p.locality}, Québec" },
      "telephone": "+1-418-580-8958",
      "email": "rene.bouchard@exprealty.com",
      "description": "${p.description.replace(/"/g, '\\"')}"
    }
    </script>
</head>
<body class="antialiased font-sans bg-brand-light text-brand-dark">
    <nav class="sticky top-0 z-50 border-b border-slate-200 bg-white py-5 px-6 md:px-12 flex flex-wrap justify-between items-center gap-4 shadow-sm">
        <a href="index.html" class="text-2xl md:text-3xl font-serif font-bold tracking-wider uppercase text-brand-dark">Multiplex <span class="text-brand-blue">Saguenay</span></a>
        <div class="flex flex-wrap gap-6 text-xs uppercase tracking-widest text-zinc-500">
            <a href="index.html#expertise" class="hover:text-brand-blue transition">Expertise</a>
            <a href="index.html#evaluation" class="hover:text-brand-blue transition">Évaluation gratuite</a>
            <a href="tel:+14185808958" class="hover:text-brand-blue transition">418-580-8958</a>
        </div>
    </nav>

    <header class="relative py-20 md:py-28 px-6 md:px-12 border-b border-slate-200 overflow-hidden bg-brand-dark text-white">
        <div class="absolute inset-0 bg-gradient-to-br from-brand-blue/80 to-brand-dark pointer-events-none"></div>
        <div class="max-w-4xl mx-auto relative">
            <p class="text-2xl md:text-3xl font-serif font-bold uppercase tracking-[0.12em] text-white mb-6">Multiplex <span class="text-sky-300">Saguenay</span></p>
            <p class="text-sky-200/90 uppercase tracking-[0.25em] text-xs mb-4 font-semibold">Saguenay, Québec · ${p.keyword} · 20+ ans d'expérience</p>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-tight">${p.h1}</h1>
            <p class="text-xl text-zinc-200 font-light max-w-2xl">${p.subtitle}</p>
        </div>
    </header>

    <main class="max-w-4xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <article class="prose prose-slate max-w-none">
            <p class="text-lg text-slate-600 font-light leading-relaxed mb-10">${p.intro}</p>
            <h2 class="text-2xl font-serif text-brand-dark mb-6">Pourquoi travailler avec un spécialiste à ${p.locality}?</h2>
            <ul class="space-y-4 text-slate-600 font-light mb-14">${bulletsHtml}</ul>

            <h2 class="text-2xl font-serif text-brand-dark mb-6">Processus de vente</h2>
            <ol class="space-y-6 text-zinc-400 font-light mb-14 list-decimal list-inside">
                <li><strong class="text-brand-dark">Évaluation gratuite</strong> — Analyse de vos revenus, dépenses et du marché au Saguenay.</li>
                <li><strong class="text-brand-dark">Préparation du mandat</strong> — Fiche investisseur, photos, collecte des baux et documents.</li>
                <li><strong class="text-brand-dark">Mise en marché</strong> — Centris, réseau privé et suivi des visites.</li>
                <li><strong class="text-brand-dark">Négociation & closing</strong> — Défense du prix fondée sur le rendement jusqu'à la vente.</li>
            </ol>

            ${faqHtml ? `<h2 class="text-2xl font-serif text-brand-dark mb-6">Questions fréquentes</h2><div class="space-y-4 mb-14">${faqHtml}</div>` : ''}
        </article>

        <aside class="bg-white border border-slate-200 rounded-2xl p-8 md:p-12 text-center mb-16">
            <h2 class="text-2xl md:text-3xl font-serif text-brand-dark mb-4">Obtenez votre évaluation gratuite</h2>
            <p class="text-zinc-400 font-light mb-8 max-w-xl mx-auto">Remplissez le formulaire en quelques minutes et recevez une analyse personnalisée pour votre ${p.keyword} à ${p.locality}.</p>
            <a href="index.html#evaluation" class="inline-block bg-brand-blue text-white px-10 py-4 rounded-full text-sm uppercase tracking-wider font-semibold hover:bg-brand-dark transition duration-300">Demander une évaluation</a>
        </aside>

        <section class="mb-12">
            <h2 class="text-sm uppercase tracking-widest text-zinc-500 mb-4">Pages connexes</h2>
            <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-3">${relatedHtml}</div>
        </section>

        <p class="text-xs text-zinc-600 leading-relaxed">${otherLinks}</p>
    </main>

    <footer class="border-t border-slate-200 py-12 px-6 text-center text-zinc-500 text-xs uppercase tracking-wider bg-white">
        <p class="text-2xl font-serif font-bold uppercase tracking-wider text-brand-dark mb-2 normal-case">Multiplex <span class="text-brand-blue">Saguenay</span></p>
        <p class="text-sm text-zinc-500 normal-case tracking-normal mb-6">Plus de 20 ans d'expertise · René Bouchard Immobilier (EXP)</p>
        <p class="mb-4"><a href="tel:+14185808958" class="text-brand-dark hover:text-brand-blue text-lg font-serif normal-case tracking-normal">418-580-8958</a> · <a href="mailto:rene.bouchard@exprealty.com" class="hover:text-brand-blue normal-case tracking-normal">rene.bouchard@exprealty.com</a></p>
        <p>&copy; 2026 Multiplex Saguenay | Tous droits réservés</p>
        <p class="mt-4"><a href="index.html" class="text-brand-blue hover:underline normal-case">Retour à l'accueil</a></p>
    </footer>
</body>
</html>`;
}

pages.forEach((p) => {
  const out = path.join(ROOT, `${p.slug}.html`);
  fs.writeFileSync(out, renderPage(p), 'utf8');
  console.log('Wrote', p.slug + '.html');
});

const sitemapEntries = [
  { loc: 'https://multiplexsaguenay.com/index.html', priority: '1.0' },
  ...pages.map((p) => ({
    loc: `https://multiplexsaguenay.com/${p.slug}.html`,
    priority: '0.8',
  })),
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries
  .map(
    (e) => `  <url>
    <loc>${e.loc}</loc>
    <changefreq>monthly</changefreq>
    <priority>${e.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), sitemap, 'utf8');
console.log('Wrote sitemap.xml');

const robots = `User-agent: *
Allow: /

Sitemap: https://multiplexsaguenay.com/sitemap.xml
`;
fs.writeFileSync(path.join(ROOT, 'robots.txt'), robots, 'utf8');
console.log('Wrote robots.txt');
