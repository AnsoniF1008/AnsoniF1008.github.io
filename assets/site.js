(() => {
  'use strict';

  const COPY = {
    es: {
      title: 'InnovaWeb & Security | Sitios web y CCTV en Newport News, VA',
      description: 'Desarrollo web full-stack, tiendas con Stripe y cámaras de seguridad CCTV en Newport News y Hampton Roads. Portafolio completo con 14 repositorios en GitHub.',
      'nav.aria': 'Navegación principal',
      'nav.services': 'Servicios',
      'nav.projects': 'Proyectos',
      'nav.repos': 'Repositorios',
      'nav.faq': 'Preguntas',
      'nav.toggle': 'Abrir menú',
      'nav.skip': 'Saltar al contenido',
      'nav.langAria': 'Cambiar idioma a inglés',
      'nav.langBtn': 'EN',
      'cta.quote': 'Cotizar ahora',
      'hero.kicker': 'InnovaWeb & Security · Newport News, VA',
      'hero.h1': 'Sitios web y CCTV en Newport News',
      'hero.lead': 'Programo sitios web, tiendas con Stripe y cámaras de seguridad locales para negocios en Hampton Roads. Atención bilingüe en español e inglés.',
      'hero.cta1': 'Explorar 14 repos',
      'hero.cta2': 'Ver servicios',
      'hero.fact1.k': 'GitHub activo',
      'hero.fact1.v': '14 repositorios',
      'hero.fact2.k': 'Cobertura CCTV',
      'hero.fact2.v': 'Hampton Roads',
      'hero.fact3.k': 'Idiomas',
      'hero.fact3.v': 'Español e inglés',
      'hero.imgAlt': 'Tres cámaras de seguridad CCTV instaladas en exterior bajo cielo despejado',
      'srv.h2': 'Servicios web y cámaras CCTV',
      'srv.lead': 'Software publicado en GitHub e instalación local de grabadores PoE sin mensualidades en la nube.',
      'srv.imgAlt': 'Cámara de videovigilancia fija montada en fachada comercial',
      'srv.web.title': 'Desarrollo web y aplicaciones',
      'srv.web.desc': 'Sitios y tiendas con Stripe en React, Next.js 15, TypeScript y Firebase.',
      'srv.cctv.title': 'Instalación de cámaras de seguridad CCTV',
      'srv.cctv.desc': 'Cámaras PoE con grabador NVR local 24/7, cableado limpio y cero cuotas mensuales.',
      'srv.cta': 'Ver proyectos recientes',
      'ch.h2': 'Proyectos web entregados en producción',
      'ch.lead': 'Tres plataformas recientes actualizadas en GitHub para clubes y comercios.',
      'ch.cta': 'Explorar los 14 repositorios',
      'ch.1.title': 'Portal web Azteca del Golfo',
      'ch.1.text': 'Portal bilingüe con clima marino de Galveston en vivo, galería y analítica en Firebase.',
      'ch.1.alt': 'Pantalla de escritorio de Azteca del Golfo Fishing Club',
      'ch.2.title': 'Tienda web Love Raíz Cookies',
      'ch.2.text': 'Tienda de galletas en Newport News con armado de caja y pago con Stripe.',
      'ch.2.alt': 'Tienda en línea de Love Raíz Cookies',
      'ch.3.title': 'Sitio web The Magpie Bistro',
      'ch.3.text': 'Menú semanal en Payload CMS, encargos de pasteles y pagos Stripe en Next.js.',
      'ch.3.alt': 'Sitio web de The Magpie Bistro + Cupcakery',
      'work.h2': 'Proyectos móviles actualizados en GitHub',
      'work.lead': 'Capturas en pantalla móvil de nuestras tiendas y portales con actualizaciones recientes.',
      'work.1.title': 'Sitio web móvil Azteca del Golfo',
      'work.1.desc': 'Clima marino de Galveston y galería comunitaria ES/EN.',
      'work.1.mobAlt': 'Vista móvil de Azteca del Golfo',
      'work.2.title': 'Tienda web móvil Love Raíz',
      'work.2.desc': 'Cajas de 6 o 12 galletas con cálculo de envío y Stripe.',
      'work.2.mobAlt': 'Vista móvil de Love Raíz',
      'work.3.title': 'Menú web The Magpie Bistro',
      'work.3.desc': 'Menú semanal administrable con Payload CMS y Resend.',
      'work.3.mobAlt': 'Vista móvil de The Magpie Bistro',
      'link.live': 'Ver sitio',
      'link.demo': 'Ver demo',
      'link.repo': 'GitHub',
      'repos1.h2': 'Repositorios principales en GitHub (1–7)',
      'repos1.lead': 'Todos los 14 repositorios del portafolio: 12 públicos enlazados a GitHub y 2 desarrollos privados.',
      'repos2.h2': 'Portales web y repositorios privados (8–14)',
      'repos2.lead': 'Sitios comerciales, sistemas académicos PHP/MySQL y proyectos TypeScript privados.',
      'sync.base': 'GitHub',
      'sync.live': 'GitHub Live',
      'faq.h2': 'Preguntas sobre web y CCTV',
      'faq.lead': 'Plazos claros, grabadores NVR y ciudades locales.',
      'faq.1.q': '¿Cuánto tarda un sitio web completo?',
      'faq.1.a': 'Sitios comerciales en 1–2 semanas; tiendas con Stripe y panel administrativo en 3–5 semanas.',
      'faq.2.q': '¿Las cámaras CCTV cobran mensualidad?',
      'faq.2.a': 'No. El grabador NVR almacena video local 24/7 en disco duro con acceso móvil incluido.',
      'faq.3.q': '¿Puedes migrar un sitio antiguo en PHP?',
      'faq.3.a': 'Sí. VCF Academy Houston migró a Next.js 15 y SQLite conservando php-legacy.',
      'faq.4.q': '¿Qué ciudades cubre el servicio CCTV?',
      'faq.4.a': 'Newport News, Hampton, Yorktown, Poquoson, Williamsburg y Norfolk.',
      'contact.kicker': 'Contacto en Hampton Roads',
      'contact.h2': 'Cotiza tu web o cámaras CCTV',
      'contact.lead': 'Escríbeme o llama para recibir presupuesto claro el mismo día en español o inglés.',
      'form.service': 'Servicio requerido',
      'form.optWeb': 'Sitio web o aplicación',
      'form.optCctv': 'Cámaras de seguridad CCTV',
      'form.optBoth': 'Sitio web + sistema CCTV',
      'form.name': 'Nombre o negocio',
      'form.namePh': 'Ej. Tacos El Norte',
      'form.msg': 'Detalles del proyecto',
      'form.msgPh': 'Páginas, pagos o cantidad de cámaras...',
      'form.submit': 'Enviar solicitud',
      'form.note': 'Abre tu correo con los datos listos y los copia al portapapeles.',
      'form.copied': 'Resumen copiado al portapapeles.',
      'foot.srv': 'Servicios',
      'foot.repos': 'Repositorios',
      'foot.legal': 'Información',
      'foot.privacy': 'Privacidad',
      'foot.terms': 'Términos',
      'foot.credits': 'Créditos de fotos',
      'foot.copy': '© 2026 InnovaWeb & Security · Newport News, VA'
    },
    en: {
      title: 'InnovaWeb & Security | Websites & CCTV in Newport News, VA',
      description: 'Full-stack web development, Stripe storefronts, and local NVR CCTV camera installations in Newport News and Hampton Roads. Complete 14-repo GitHub index.',
      'nav.aria': 'Primary navigation',
      'nav.services': 'Services',
      'nav.projects': 'Projects',
      'nav.repos': 'Repositories',
      'nav.faq': 'FAQ',
      'nav.toggle': 'Open menu',
      'nav.skip': 'Skip to content',
      'nav.langAria': 'Switch language to Spanish',
      'nav.langBtn': 'ES',
      'cta.quote': 'Get quote',
      'hero.kicker': 'InnovaWeb & Security · Newport News, VA',
      'hero.h1': 'Websites and CCTV in Newport News',
      'hero.lead': 'I build websites, Stripe online stores, and local NVR security camera systems across Hampton Roads. Direct support in English and Spanish.',
      'hero.cta1': 'Explore 14 repos',
      'hero.cta2': 'View services',
      'hero.fact1.k': 'Active GitHub',
      'hero.fact1.v': '14 repositories',
      'hero.fact2.k': 'CCTV service',
      'hero.fact2.v': 'Hampton Roads',
      'hero.fact3.k': 'Bilingual',
      'hero.fact3.v': 'English & Spanish',
      'hero.imgAlt': 'Three outdoor CCTV security cameras mounted under a clear sky',
      'srv.h2': 'Web services and CCTV cameras',
      'srv.lead': 'Production GitHub codebases paired with local PoE camera installations requiring zero cloud fees.',
      'srv.imgAlt': 'Close-up commercial outdoor CCTV surveillance camera',
      'srv.web.title': 'Websites & full-stack apps',
      'srv.web.desc': 'Stripe storefronts and dashboards in React, Next.js 15, TypeScript, and Firebase.',
      'srv.cctv.title': 'CCTV security camera installation',
      'srv.cctv.desc': '4K PoE cameras recording 24/7 onto a local NVR with clean wiring and zero monthly fees.',
      'srv.cta': 'View recent builds',
      'ch.h2': 'Delivered web applications in production',
      'ch.lead': 'Three live builds recently updated on GitHub for local clubs and businesses.',
      'ch.cta': 'Explore all 14 repositories',
      'ch.1.title': 'Azteca del Golfo web portal',
      'ch.1.text': 'Bilingual club site featuring live Galveston marine weather, photo gallery, and Firebase.',
      'ch.1.alt': 'Azteca del Golfo Fishing Club desktop site',
      'ch.2.title': 'Love Raíz online store',
      'ch.2.text': 'Newport News cookie storefront with box builder, delivery pricing, and Stripe.',
      'ch.2.alt': 'Love Raíz Cookies desktop online store',
      'ch.3.title': 'The Magpie Bistro web menu',
      'ch.3.text': 'Weekly Payload CMS menu, custom cake orders, and Stripe checkout on Next.js.',
      'ch.3.alt': 'The Magpie Bistro + Cupcakery website',
      'work.h2': 'Mobile views updated on GitHub',
      'work.lead': 'Live mobile previews for recently pushed storefronts and club portals.',
      'work.1.title': 'Azteca del Golfo mobile site',
      'work.1.desc': 'Galveston marine forecast and bilingual gallery.',
      'work.1.mobAlt': 'Azteca del Golfo mobile preview',
      'work.2.title': 'Love Raíz mobile store',
      'work.2.desc': '6/12 box builder, distance delivery rates, and Stripe.',
      'work.2.mobAlt': 'Love Raíz mobile preview',
      'work.3.title': 'The Magpie Bistro mobile menu',
      'work.3.desc': 'Weekly kitchen menu powered by Payload CMS and Resend.',
      'work.3.mobAlt': 'The Magpie Bistro mobile preview',
      'link.live': 'Visit site',
      'link.demo': 'View demo',
      'link.repo': 'GitHub',
      'repos1.h2': 'Core GitHub repositories (1–7)',
      'repos1.lead': 'All 14 portfolio repositories: 12 public GitHub codebases and 2 private client systems.',
      'repos2.h2': 'Web portals and private repos (8–14)',
      'repos2.lead': 'Business websites, PHP/MySQL school portals, and private TypeScript applications.',
      'sync.base': 'GitHub',
      'sync.live': 'GitHub Live',
      'faq.h2': 'Website & CCTV questions',
      'faq.lead': 'Clear timelines, local NVR storage, and Hampton Roads cities.',
      'faq.1.q': 'How long does a website build take?',
      'faq.1.a': 'Business websites launch in 1–2 weeks; Stripe stores take 3–5 weeks.',
      'faq.2.q': 'Do cameras require a monthly subscription?',
      'faq.2.a': 'No. Every NVR stores footage locally on your hard drive with mobile viewing included.',
      'faq.3.q': 'Can you modernize older PHP websites?',
      'faq.3.a': 'Yes. VCF Academy Houston moved to Next.js 15 + SQLite with php-legacy backed up.',
      'faq.4.q': 'Where do you install security cameras?',
      'faq.4.a': 'Newport News, Hampton, Yorktown, Poquoson, Williamsburg, and Norfolk.',
      'contact.kicker': 'Hampton Roads Contact',
      'contact.h2': 'Request a web or CCTV quote',
      'contact.lead': 'Call or send details for a clear same-day quote in English or Spanish.',
      'form.service': 'Needed service',
      'form.optWeb': 'Website or web application',
      'form.optCctv': 'CCTV security cameras',
      'form.optBoth': 'Website + CCTV package',
      'form.name': 'Your name or business',
      'form.namePh': 'e.g. Harbor Bistro',
      'form.msg': 'Project scope',
      'form.msgPh': 'Pages, payments, or camera count...',
      'form.submit': 'Send request',
      'form.note': 'Opens your email client ready to send and copies the summary.',
      'form.copied': 'Summary copied to clipboard.',
      'foot.srv': 'Services',
      'foot.repos': 'Repositories',
      'foot.legal': 'Information',
      'foot.privacy': 'Privacy',
      'foot.terms': 'Terms',
      'foot.credits': 'Photo credits',
      'foot.copy': '© 2026 InnovaWeb & Security · Newport News, VA'
    }
  };

  let currentLang = localStorage.getItem('innovaweb-lang') === 'en' ? 'en' : 'es';

  function applyLanguage(lang) {
    currentLang = lang === 'en' ? 'en' : 'es';
    localStorage.setItem('innovaweb-lang', currentLang);
    document.documentElement.lang = currentLang;
    const dict = COPY[currentLang];

    document.title = dict.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', dict.description);

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) el.textContent = dict[key];
    });

    document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
      const key = el.getAttribute('data-i18n-alt');
      if (dict[key]) el.setAttribute('alt', dict[key]);
    });

    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      const key = el.getAttribute('data-i18n-aria');
      if (dict[key]) el.setAttribute('aria-label', dict[key]);
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key]) el.setAttribute('placeholder', dict[key]);
    });

    document.querySelectorAll('[data-es][data-en]').forEach((el) => {
      el.textContent = el.getAttribute(currentLang === 'en' ? 'data-en' : 'data-es');
    });
  }

  const langBtn = document.getElementById('lang-toggle');
  if (langBtn) {
    langBtn.addEventListener('click', () => applyLanguage(currentLang === 'es' ? 'en' : 'es'));
  }

  // Close native system.js mobile nav sheet after clicking an anchor link
  const toggleBtn = document.getElementById('nav-toggle');
  if (toggleBtn) {
    document.querySelectorAll('.nav__links a, .nav__actions a').forEach((link) => {
      link.addEventListener('click', () => {
        if (toggleBtn.getAttribute('aria-expanded') === 'true') toggleBtn.click();
      });
    });
  }

  // Active section indicator
  const navLinks = Array.from(document.querySelectorAll('.nav__links a[href^="#"]'));
  const observedSections = navLinks
    .map((a) => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);

  if ('IntersectionObserver' in window && observedSections.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = '#' + entry.target.id;
          navLinks.forEach((a) => {
            a.classList.toggle('is-current', a.getAttribute('href') === id);
          });
        }
      });
    }, { rootMargin: '-35% 0px -45% 0px' });
    observedSections.forEach((sec) => io.observe(sec));
  }

  // Live GitHub sync
  const syncEl = document.getElementById('repo-sync-status');
  async function syncGitHubRepos() {
    try {
      const res = await fetch('https://api.github.com/users/AnsoniF1008/repos?per_page=100&sort=updated', {
        headers: { Accept: 'application/vnd.github+json' }
      });
      if (!res.ok) return;
      const list = await res.json();
      if (!Array.isArray(list)) return;

      const byName = new Map(list.map((r) => [r.name.toLowerCase(), r]));
      document.querySelectorAll('[data-repo]').forEach((row) => {
        const gh = byName.get((row.dataset.repo || '').toLowerCase());
        if (!gh) return;
        const meta = row.querySelector('.repo-updated');
        if (meta && gh.pushed_at) meta.textContent = gh.pushed_at.slice(0, 10);
      });
      if (syncEl) syncEl.textContent = COPY[currentLang]['sync.live'];
    } catch {}
  }

  // Quote composer
  const form = document.getElementById('quote-form');
  const note = document.getElementById('quote-note');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const service = document.getElementById('q-service')?.value || '';
      const name = document.getElementById('q-name')?.value?.trim() || '';
      const msg = document.getElementById('q-msg')?.value?.trim() || '';
      const subject = encodeURIComponent(`Cotización InnovaWeb & Security — ${service}`);
      const bodyText = `Servicio: ${service}\nNombre / Negocio: ${name}\nDetalles: ${msg}`;
      if (navigator.clipboard?.writeText) {
        try {
          await navigator.clipboard.writeText(bodyText);
          if (note) note.textContent = COPY[currentLang]['form.copied'];
        } catch {}
      }
      window.location.href = `mailto:ansoni1008@gmail.com?subject=${subject}&body=${encodeURIComponent(bodyText)}`;
    });
  }

  applyLanguage(currentLang);
  syncGitHubRepos();
})();
