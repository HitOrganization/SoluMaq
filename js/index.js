/* ═══════════════════════════════════════════════════════════
   SOLUMAQ — main.js
   Handles: Dark mode · Language (ES/EN) · Mobile menu
═══════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ────────────────────────────────────────
     HELPERS
  ──────────────────────────────────────── */
  const $ = (id) => document.getElementById(id);
  const setText = (id, text) => { const el = $(id); if (el) el.textContent = text; };
  const setHTML = (id, html) => { const el = $(id); if (el) el.innerHTML = html; };

  /* ────────────────────────────────────────
     YEAR
  ──────────────────────────────────────── */
  setText('yr', new Date().getFullYear());

  /* ────────────────────────────────────────
     DARK MODE
  ──────────────────────────────────────── */
  const darkToggle = $('darkToggle');

  const applyDark = (on) => {
    document.documentElement.classList.toggle('dark', on);
    document.body.classList.toggle('dark', on);
    if (darkToggle) darkToggle.checked = on;
  };

  // Load saved preference (or system preference)
  const savedDark = localStorage.getItem('smq-dark');
  if (savedDark !== null) {
    applyDark(savedDark === 'true');
  } else {
    applyDark(window.matchMedia('(prefers-color-scheme: dark)').matches);
  }

  if (darkToggle) {
    darkToggle.addEventListener('change', () => {
      applyDark(darkToggle.checked);
      localStorage.setItem('smq-dark', darkToggle.checked);
    });
  }

  /* ────────────────────────────────────────
     LANGUAGE
  ──────────────────────────────────────── */
  const langToggle = $('langToggle');

  const translations = {
    es: {
      /* Top bar */
      'tb-dark-label': 'Modo oscuro',
      'tb-lang1': 'ES',
      'tb-lang2': 'EN',

      /* Header */
      'hdr-slogan':   'Soluciones en Maquinaria',
      'nav-inicio':   'Inicio',
      'nav-nosotros': 'Nosotros',
      'nav-servicios':'Servicios',
      'nav-productos':'Productos',
      'nav-contacto': 'Contacto',
      'mnav-inicio':   'Inicio',
      'mnav-nosotros': 'Nosotros',
      'mnav-servicios':'Servicios',
      'mnav-productos':'Productos',
      'mnav-contacto': 'Contacto',

      /* Hero */
      'hero-p1': 'Somos tu aliado estratégico en el sector construcción, minería e industria en la República Dominicana. En SOLUMAQ reunimos en un solo lugar <strong>repuestos, herramientas y equipos</strong> originales de las marcas más reconocidas del mercado. Contamos con la línea más amplia de martillos hidráulicos, garantizando soluciones adaptadas a cada desafío de tus proyectos.',
      'hero-p2': 'Nuestro compromiso es brindar <strong>calidad, respaldo y garantías</strong> reales en cada producto, junto con un servicio confiable que asegura la continuidad de tus operaciones. Más que proveedores, somos un aliado estratégico que impulsa tu productividad con soluciones en maquinaria diseñadas para maximizar resultados.',

      /* Form */
      'form-title': 'Solicita más información',
      'form-btn':   'Enviar',
      'fo-1': 'Venta de equipos',
      'fo-2': 'Renta de equipos',
      'fo-3': 'Repuestos',

      /* Services */
      'srv-eyebrow': 'Lo que ofrecemos',
      'srv-title': 'Nuestros <span class="yl">Servicios</span>',
      'srv-1': 'Ventas',
      'srv-2': 'Renta de equipos',
      'srv-3': 'Asistencia Técnica',
      'srv-4': 'Tienda de Repuestos',
      'srv-5': 'Respaldo SOLUMAQ',
      'srv-6': 'Financiamiento de equipos',

      /* Hammers */
      'hmr-eyebrow': 'Nuestra especialidad',
      'hmr-desc': 'En SOLUMAQ ponemos a tu disposición una amplia gama de martillos hidráulicos para excavadoras, retroexcavadoras y minicargadores. Diseñados para ofrecer potencia, durabilidad y eficiencia, nuestros martillos se adaptan a cualquier tipo de obra en construcción y minería, brindando soluciones confiables para cada necesidad.',
      'hmr-btn': 'VER PRODUCTOS',

      /* Filters */
      'flt-eyebrow': 'Repuestos originales',
      'flt-desc': 'Ofrecemos filtros originales y de la más alta calidad para maquinaria de construcción, minería e industria. Contamos con un amplio portafolio de repuestos de marcas líderes como <strong>Develon</strong>, <strong>Bobcat</strong>, <strong>Sany</strong>, <strong>CAT</strong>, <strong>Perkins</strong> y <strong>Atlas Copco</strong>, garantizando el máximo rendimiento y protección de tus equipos.',
      'flt-btn': 'VER PRODUCTOS',

      /* Footer */
      'ft-desc': 'Soluciones en maquinaria diseñadas para acompañar tus proyectos, garantizando productividad, confianza y respaldo en cada etapa, impulsando tu crecimiento con la mejor calidad del mercado.',
      'ft-links-title':  'Enlaces Rápidos',
      'ft-l1': 'Inicio',
      'ft-l2': 'Nosotros',
      'ft-l3': 'Servicios',
      'ft-l4': 'Productos',
      'ft-l5': 'Contacto',
      'ft-contact-title': 'Contacto',
      'ft-addr':  'Av. Independencia, Km. 10, Local 109',
      'ft-city':  'Santo Domingo, República Dominicana',
      'ft-hrs1':  'Lun – Vie: 8:00 a.m. – 6:00 p.m.',
      'ft-hrs2':  'Sáb: 8:00 a.m. – 2:00 p.m.',
      'ft-rights': 'Todos los derechos reservados',
    },

    en: {
      /* Top bar */
      'tb-dark-label': 'Dark mode',
      'tb-lang1': 'ES',
      'tb-lang2': 'EN',

      /* Header */
      'hdr-slogan':   'Machinery Solutions',
      'nav-inicio':   'Home',
      'nav-nosotros': 'About Us',
      'nav-servicios':'Services',
      'nav-productos':'Products',
      'nav-contacto': 'Contact',
      'mnav-inicio':   'Home',
      'mnav-nosotros': 'About Us',
      'mnav-servicios':'Services',
      'mnav-productos':'Products',
      'mnav-contacto': 'Contact',

      /* Hero */
      'hero-p1': 'We are your strategic ally in the construction, mining and industry sector in the Dominican Republic. At SOLUMAQ we bring together in one place <strong>spare parts, tools and equipment</strong> from the most recognized brands in the market. We have the widest line of hydraulic hammers, guaranteeing solutions adapted to every challenge in your projects.',
      'hero-p2': 'Our commitment is to provide <strong>quality, support and real guarantees</strong> in every product, along with reliable service that ensures the continuity of your operations. More than suppliers, we are a strategic ally that boosts your productivity with machinery solutions designed to maximize results.',

      /* Form */
      'form-title': 'Request more information',
      'form-btn':   'Send',
      'fo-1': 'Equipment sales',
      'fo-2': 'Equipment rental',
      'fo-3': 'Spare parts',

      /* Services */
      'srv-eyebrow': 'What we offer',
      'srv-title': 'Our <span class="yl">Services</span>',
      'srv-1': 'Sales',
      'srv-2': 'Equipment rental',
      'srv-3': 'Technical Assistance',
      'srv-4': 'Spare Parts Store',
      'srv-5': 'SOLUMAQ Support',
      'srv-6': 'Equipment financing',

      /* Hammers */
      'hmr-eyebrow': 'Our specialty',
      'hmr-desc': 'At SOLUMAQ we offer you a wide range of hydraulic hammers for excavators, backhoes and skid steers. Designed to provide power, durability and efficiency, our hammers adapt to any type of construction and mining work, providing reliable solutions for every need.',
      'hmr-btn': 'VIEW PRODUCTS',

      /* Filters */
      'flt-eyebrow': 'Original spare parts',
      'flt-desc': 'We offer original and highest quality filters for construction, mining and industrial machinery. We have a wide portfolio of spare parts from leading brands such as <strong>Develon</strong>, <strong>Bobcat</strong>, <strong>Sany</strong>, <strong>CAT</strong>, <strong>Perkins</strong> and <strong>Atlas Copco</strong>, guaranteeing maximum performance and protection for your equipment.',
      'flt-btn': 'VIEW PRODUCTS',

      /* Footer */
      'ft-desc': 'Machinery solutions designed to accompany your projects, guaranteeing productivity, trust and support at every stage, driving your growth with the best quality in the market.',
      'ft-links-title':  'Quick Links',
      'ft-l1': 'Home',
      'ft-l2': 'About Us',
      'ft-l3': 'Services',
      'ft-l4': 'Products',
      'ft-l5': 'Contact',
      'ft-contact-title': 'Contact',
      'ft-addr':  'Av. Independencia, Km. 10, Local 109',
      'ft-city':  'Santo Domingo, Dominican Republic',
      'ft-hrs1':  'Mon – Fri: 8:00 a.m. – 6:00 p.m.',
      'ft-hrs2':  'Sat: 8:00 a.m. – 2:00 p.m.',
      'ft-rights': 'All rights reserved',
    }
  };

  // HTML fields (use innerHTML)
  const htmlFields = new Set([
    'hero-p1','hero-p2','srv-title','flt-desc','hmr-desc','ft-desc'
  ]);

  const applyLang = (lang) => {
    const t = translations[lang];
    if (!t) return;
    Object.entries(t).forEach(([id, val]) => {
      if (htmlFields.has(id)) setHTML(id, val);
      else setText(id, val);
    });

    /* Placeholders */
    const ph = lang === 'en'
      ? { name:'Name *', phone:'Phone *', email:'Email *', company:'Company *', msg:'Message *' }
      : { name:'Nombre *', phone:'Téléfono *', email:'Email *', company:'Empresa *', msg:'Mensaje *' };

    const setPlaceholder = (id, val) => { const el = $(id); if (el) el.placeholder = val; };
    setPlaceholder('f-name',    ph.name);
    setPlaceholder('f-phone',   ph.phone);
    setPlaceholder('f-email',   ph.email);
    setPlaceholder('f-company', ph.company);
    setPlaceholder('f-msg',     ph.msg);

    /* Hero title */
    const ht = $('hero-title');
    if (ht) ht.innerHTML = lang === 'en'
      ? 'SOLUMAQ = <span class="yl">solutions that boost your productivity</span>'
      : 'SOLUMAQ = <span class="yl">soluciones que impulsan tu productividad</span>';

    /* Hammer title */
    const hmt = $('hmr-title');
    if (hmt) hmt.innerHTML = lang === 'en'
      ? 'THE WIDEST LINE IN<br><span class="yl">HYDRAULIC HAMMERS</span>'
      : 'LA LÍNEA MÁS AMPLIA EN<br><span class="yl">MARTILLOS HIDRÁULICOS</span>';

    /* Filter title */
    const flt = $('flt-title');
    if (flt) flt.innerHTML = lang === 'en'
      ? 'PROTECTION AND PERFORMANCE<br><span class="yl">IN EVERY FILTER</span>'
      : 'PROTECCIÓN Y RENDIMIENTO<br><span class="yl">EN CADA FILTRO</span>';

    /* Footer copyright */
    const ftc = $('ft-copy');
    if (ftc) ftc.innerHTML = lang === 'en'
      ? `© <span id="yr">${new Date().getFullYear()}</span> SOLUMAQ — Solutions that boost your productivity`
      : `© <span id="yr">${new Date().getFullYear()}</span> SOLUMAQ — Soluciones que impulsan tu productividad`;

    if (langToggle) langToggle.checked = (lang === 'en');
    localStorage.setItem('smq-lang', lang);
  };

  // Load saved language
  const savedLang = localStorage.getItem('smq-lang') || 'es';
  applyLang(savedLang);

  if (langToggle) {
    langToggle.addEventListener('change', () => {
      applyLang(langToggle.checked ? 'en' : 'es');
    });
  }

  /* ────────────────────────────────────────
     MOBILE MENU
  ──────────────────────────────────────── */
  const hamburger = $('hamburger');
  const mobileNav = $('mobileNav');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.classList.toggle('open');
      mobileNav.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen);
    });

    // Close on link click
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileNav.classList.remove('open');
        hamburger.setAttribute('aria-expanded', false);
      });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!hamburger.contains(e.target) && !mobileNav.contains(e.target)) {
        hamburger.classList.remove('open');
        mobileNav.classList.remove('open');
        hamburger.setAttribute('aria-expanded', false);
      }
    });
  }

  /* ────────────────────────────────────────
     CONTACT FORM (basic validation)
  ──────────────────────────────────────── */
  const formBtn = $('form-btn');
  if (formBtn) {
    formBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const fields = ['f-name','f-phone','f-email','f-company','f-msg'];
      const empty = fields.find(id => !$(id)?.value.trim());
      if (empty) {
        $(empty)?.focus();
        $(empty)?.style && ($(empty).style.borderColor = '#e53935');
        setTimeout(() => { if ($(empty)) $(empty).style.borderColor = ''; }, 2000);
        return;
      }
      // Replace with real form submission logic
      formBtn.textContent = '✓ Enviado';
      formBtn.style.background = '#2e7d32';
      setTimeout(() => {
        formBtn.textContent = localStorage.getItem('smq-lang') === 'en' ? 'Send' : 'Enviar';
        formBtn.style.background = '';
        fields.forEach(id => { if ($(id)) $(id).value = ''; });
      }, 3000);
    });
  }

  /* ────────────────────────────────────────
     ACTIVE NAV LINK
  ──────────────────────────────────────── */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link, .mobile-nav .nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) link.classList.add('active');
    else link.classList.remove('active');
  });

});