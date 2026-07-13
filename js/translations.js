/* ═══════════════════════════════════════════════════════════
   SOLUMAQ — translations.js
   Diccionario de traducciones ES/EN.
   "common"  → textos compartidos en TODAS las páginas (topbar,
               header, footer).
   El resto  → textos exclusivos de cada página, identificados
               por el atributo data-page del <body>.

   Cómo se usa en el HTML:
     <span data-i18n="clave">Texto por defecto</span>
     <input data-i18n-placeholder="clave" placeholder="...">

   language.js lee este objeto y aplica las traducciones según
   la página actual + el idioma elegido.
═══════════════════════════════════════════════════════════ */
window.SMQ_I18N = {

  /* ───────────────────────────────────────────────
     COMÚN — Topbar, Header, Footer (todas las páginas)
  ─────────────────────────────────────────────── */
  common: {
    es: {
      'tb-dark-label': 'Modo oscuro',
      'tb-lang1': 'ES',
      'tb-lang2': 'EN',

      'hdr-slogan': 'Soluciones en Maquinaria',
      'nav-inicio': 'Inicio',
      'nav-nosotros': 'Nosotros',
      'nav-servicios': 'Servicios',
      'nav-productos': 'Productos',
      'nav-contacto': 'Contacto',

      'ft-tagline': 'SOLUMAQ — Soluciones que impulsan tu productividad',
      'ft-desc': 'Soluciones en maquinaria diseñadas para acompañar tus proyectos, garantizando productividad, confianza y respaldo en cada etapa, impulsando tu crecimiento con la mejor calidad del mercado.',
      'ft-links-title': 'Enlaces Rápidos',
      'ft-l1': 'Inicio',
      'ft-l2': 'Nosotros',
      'ft-l3': 'Servicios',
      'ft-l4': 'Productos',
      'ft-l5': 'Contacto',
      'ft-contact-title': 'Contacto',
      'ft-addr': 'Av. Independencia, Km. 10, Local 109',
      'ft-city': 'Santo Domingo, República Dominicana',
      'ft-hrs1': 'Lun – Vie: 8:00 a.m. – 6:00 p.m.',
      'ft-hrs2': 'Sáb: 8:00 a.m. – 2:00 p.m.',
      'ft-rights': 'Todos los derechos reservados',

      'btn-cotizar': 'Cotizar',
      'btn-consultar': 'Consultar',
    },
    en: {
      'tb-dark-label': 'Dark mode',
      'tb-lang1': 'ES',
      'tb-lang2': 'EN',

      'hdr-slogan': 'Machinery Solutions',
      'nav-inicio': 'Home',
      'nav-nosotros': 'About Us',
      'nav-servicios': 'Services',
      'nav-productos': 'Products',
      'nav-contacto': 'Contact',

      'ft-tagline': 'SOLUMAQ — Solutions that boost your productivity',
      'ft-desc': 'Machinery solutions designed to accompany your projects, guaranteeing productivity, trust and support at every stage, driving your growth with the best quality in the market.',
      'ft-links-title': 'Quick Links',
      'ft-l1': 'Home',
      'ft-l2': 'About Us',
      'ft-l3': 'Services',
      'ft-l4': 'Products',
      'ft-l5': 'Contact',
      'ft-contact-title': 'Contact',
      'ft-addr': 'Av. Independencia, Km. 10, Local 109',
      'ft-city': 'Santo Domingo, Dominican Republic',
      'ft-hrs1': 'Mon – Fri: 8:00 a.m. – 6:00 p.m.',
      'ft-hrs2': 'Sat: 8:00 a.m. – 2:00 p.m.',
      'ft-rights': 'All rights reserved',

      'btn-cotizar': 'Get a quote',
      'btn-consultar': 'Inquire',
    }
  },

  /* ───────────────────────────────────────────────
     INICIO — index.html
  ─────────────────────────────────────────────── */
  index: {
    es: {
      'hero-title': 'SOLUMAQ = <span class="yl">soluciones que impulsan tu productividad</span>',
      'hero-p1': 'Somos tu aliado estratégico en el sector construcción, minería e industria en la República Dominicana. En SOLUMAQ reunimos en un solo lugar <strong>repuestos, herramientas y equipos</strong> originales de las marcas más reconocidas del mercado. Contamos con la línea más amplia de martillos hidráulicos, garantizando soluciones adaptadas a cada desafío de tus proyectos.',
      'hero-p2': 'Nuestro compromiso es brindar <strong>calidad, respaldo y garantías</strong> reales en cada producto, junto con un servicio confiable que asegura la continuidad de tus operaciones. Más que proveedores, somos un aliado estratégico que impulsa tu productividad con soluciones en maquinaria diseñadas para maximizar resultados.',

      'form-title': 'Solicita más información',
      'form-btn': 'Enviar',
      'ph-name': 'Nombre *',
      'ph-phone': 'Teléfono *',
      'ph-email': 'Email *',
      'ph-company': 'Empresa *',
      'ph-msg': 'Mensaje *',
      'fo-1': 'Venta de equipos',
      'fo-2': 'Renta de equipos',
      'fo-3': 'Repuestos',

      'srv-eyebrow': 'Lo que ofrecemos',
      'srv-title': 'Nuestros <span class="yl">Servicios</span>',
      'srv-1': 'Ventas',
      'srv-2': 'Renta de equipos',
      'srv-3': 'Asistencia Técnica',
      'srv-4': 'Tienda de Repuestos',
      'srv-5': 'Respaldo SOLUMAQ',
      'srv-6': 'Financiamiento de equipos',

      'hmr-eyebrow': 'Nuestra especialidad',
      'hmr-title': 'LA LÍNEA MÁS AMPLIA EN<br><span class="yl">MARTILLOS HIDRÁULICOS</span>',
      'hmr-desc': 'En SOLUMAQ ponemos a tu disposición una amplia gama de martillos hidráulicos para excavadoras, retroexcavadoras y minicargadores. Diseñados para ofrecer potencia, durabilidad y eficiencia, nuestros martillos se adaptan a cualquier tipo de obra en construcción y minería, brindando soluciones confiables para cada necesidad.',
      'hmr-btn': 'VER PRODUCTOS',

      'flt-eyebrow': 'Repuestos originales',
      'flt-title': 'PROTECCIÓN Y RENDIMIENTO<br><span class="yl">EN CADA FILTRO</span>',
      'flt-desc': 'Ofrecemos filtros originales y de la más alta calidad para maquinaria de construcción, minería e industria. Contamos con un amplio portafolio de repuestos de marcas líderes como <strong>Develon</strong>, <strong>Bobcat</strong>, <strong>Sany</strong>, <strong>CAT</strong>, <strong>Perkins</strong> y <strong>Atlas Copco</strong>, garantizando el máximo rendimiento y protección de tus equipos.',
      'flt-btn': 'VER PRODUCTOS',
    },
    en: {
      'hero-title': 'SOLUMAQ = <span class="yl">solutions that boost your productivity</span>',
      'hero-p1': 'We are your strategic ally in the construction, mining and industry sector in the Dominican Republic. At SOLUMAQ we bring together in one place <strong>spare parts, tools and equipment</strong> from the most recognized brands in the market. We have the widest line of hydraulic hammers, guaranteeing solutions adapted to every challenge in your projects.',
      'hero-p2': 'Our commitment is to provide <strong>quality, support and real guarantees</strong> in every product, along with reliable service that ensures the continuity of your operations. More than suppliers, we are a strategic ally that boosts your productivity with machinery solutions designed to maximize results.',

      'form-title': 'Request more information',
      'form-btn': 'Send',
      'ph-name': 'Name *',
      'ph-phone': 'Phone *',
      'ph-email': 'Email *',
      'ph-company': 'Company *',
      'ph-msg': 'Message *',
      'fo-1': 'Equipment sales',
      'fo-2': 'Equipment rental',
      'fo-3': 'Spare parts',

      'srv-eyebrow': 'What we offer',
      'srv-title': 'Our <span class="yl">Services</span>',
      'srv-1': 'Sales',
      'srv-2': 'Equipment rental',
      'srv-3': 'Technical Assistance',
      'srv-4': 'Spare Parts Store',
      'srv-5': 'SOLUMAQ Support',
      'srv-6': 'Equipment financing',

      'hmr-eyebrow': 'Our specialty',
      'hmr-title': 'THE WIDEST LINE IN<br><span class="yl">HYDRAULIC HAMMERS</span>',
      'hmr-desc': 'At SOLUMAQ we offer you a wide range of hydraulic hammers for excavators, backhoes and skid steers. Designed to provide power, durability and efficiency, our hammers adapt to any type of construction and mining work, providing reliable solutions for every need.',
      'hmr-btn': 'VIEW PRODUCTS',

      'flt-eyebrow': 'Original spare parts',
      'flt-title': 'PROTECTION AND PERFORMANCE<br><span class="yl">IN EVERY FILTER</span>',
      'flt-desc': 'We offer original and highest quality filters for construction, mining and industrial machinery. We have a wide portfolio of spare parts from leading brands such as <strong>Develon</strong>, <strong>Bobcat</strong>, <strong>Sany</strong>, <strong>CAT</strong>, <strong>Perkins</strong> and <strong>Atlas Copco</strong>, guaranteeing maximum performance and protection for your equipment.',
      'flt-btn': 'VIEW PRODUCTS',
    }
  },

  /* ───────────────────────────────────────────────
     NOSOTROS — nosotros.html
  ─────────────────────────────────────────────── */
  nosotros: {
    es: {
      'nos-eyebrow': 'Conoce SOLUMAQ',
      'nos-hero-title': '¿QUIÉNES<br><span class="wh">SOMOS?</span>',

      'nos-who-eyebrow': 'Nuestra historia',
      'nos-who-title': 'Un aliado estratégico <span class="yl">de confianza</span>',
      'nos-p1': 'SOLUMAQ surge con la visión de reunir en un solo lugar soluciones en maquinaria, repuestos y herramientas de las marcas más reconocidas del mundo. Hoy somos un aliado estratégico en <strong>construcción, minería e industria</strong>, ofreciendo la línea más amplia de martillos hidráulicos junto con respaldo, garantía y confianza que aseguran la continuidad de tus proyectos.',
      'nos-p2': 'Trabajamos para que cada cliente encuentre en nosotros un socio confiable, capaz de ofrecer <strong>disponibilidad inmediata, soporte especializado</strong> y soluciones que impulsan la productividad en cada obra. Porque en SOLUMAQ, la calidad no es opcional, es parte integral de nuestro servicio.',

      'stat-1': 'Años de experiencia',
      'stat-2': 'Marcas representadas',
      'stat-3': 'Clientes atendidos',
      'stat-4': 'Soporte técnico',

      'mvv-eyebrow': 'Lo que nos define',
      'mvv-title': 'Misión, Visión <span class="yl">&amp; Valores</span>',
      'mvv-mis-title': 'Misión',
      'mvv-mis-text': 'Ofrecer herramientas, repuestos e implementos para maquinarias pesadas que garanticen confianza, disponibilidad y precios justos, apoyando a empresas que dependen de equipos industriales, agrícolas, de construcción y minería, con un catálogo variado y marcas reconocidas a nivel internacional.',
      'mvv-vis-title': 'Visión',
      'mvv-vis-text': 'Expandirnos como un referente en soluciones para maquinaria pesada en la región, ampliando nuestra presencia en sectores como el agrícola, la construcción y la minería, consolidándonos como la opción más confiable por nuestra variedad, eficiencia y compromiso con el cliente.',
      'mvv-val-title': 'Valores',
      'mvv-val-text': 'En <strong>SOLUMAQ</strong> trabajamos guiados por valores que definen nuestra forma de servir. La confianza nos impulsa a ser un proveedor transparente, responsable y accesible. Nuestro compromiso se refleja en el acompañamiento constante de cada operación, con seriedad y visión a largo plazo.',

      'val-1-name': 'Confianza',
      'val-1-desc': 'Transparencia y accesibilidad en cada relación con nuestros clientes y socios.',
      'val-2-name': 'Compromiso',
      'val-2-desc': 'Acompañamiento constante en cada operación con seriedad y visión de largo plazo.',
      'val-3-name': 'Responsabilidad',
      'val-3-desc': 'Respuestas claras, plazos cumplidos y soluciones reales cuando más se necesitan.',
    },
    en: {
      'nos-eyebrow': 'Meet SOLUMAQ',
      'nos-hero-title': 'WHO<br><span class="wh">ARE WE?</span>',

      'nos-who-eyebrow': 'Our story',
      'nos-who-title': 'A trusted <span class="yl">strategic ally</span>',
      'nos-p1': 'SOLUMAQ was born with the vision of bringing together in one place machinery solutions, spare parts and tools from the most recognized brands in the world. Today we are a strategic ally in <strong>construction, mining and industry</strong>, offering the widest line of hydraulic hammers along with support, guarantee and trust that ensure the continuity of your projects.',
      'nos-p2': 'We work so that every client finds in us a reliable partner, capable of offering <strong>immediate availability, specialized support</strong> and solutions that boost productivity on every job site. Because at SOLUMAQ, quality is not optional — it is an integral part of our service.',

      'stat-1': 'Years of experience',
      'stat-2': 'Brands represented',
      'stat-3': 'Clients served',
      'stat-4': 'Technical support',

      'mvv-eyebrow': 'What defines us',
      'mvv-title': 'Mission, Vision <span class="yl">&amp; Values</span>',
      'mvv-mis-title': 'Mission',
      'mvv-mis-text': 'To offer tools, spare parts and implements for heavy machinery that guarantee trust, availability and fair prices, supporting companies that depend on industrial, agricultural, construction and mining equipment, with a varied catalog and internationally recognized brands.',
      'mvv-vis-title': 'Vision',
      'mvv-vis-text': 'To expand as a benchmark in heavy machinery solutions in the region, broadening our presence in sectors such as agriculture, construction and mining, consolidating ourselves as the most reliable option for our variety, efficiency and commitment to the client.',
      'mvv-val-title': 'Values',
      'mvv-val-text': 'At <strong>SOLUMAQ</strong> we work guided by values that define our way of serving. Trust drives us to be a transparent, responsible and accessible supplier. Our commitment is reflected in the constant support of each operation, with seriousness and a long-term vision.',

      'val-1-name': 'Trust',
      'val-1-desc': 'Transparency and accessibility in every relationship with our clients and partners.',
      'val-2-name': 'Commitment',
      'val-2-desc': 'Constant support in every operation with seriousness and a long-term vision.',
      'val-3-name': 'Responsibility',
      'val-3-desc': 'Clear answers, met deadlines and real solutions when they are needed most.',
    }
  },

  /* ───────────────────────────────────────────────
     SERVICIOS — servicios.html
  ─────────────────────────────────────────────── */
  servicios: {
    es: {
      'srv-page-eyebrow': 'Lo que hacemos',
      'srv-page-title': 'NUESTROS<br><span class="yl">SERVICIOS</span>',

      's1-eyebrow': 'Equipos nuevos y usados', 's1-title': 'Ventas',
      's1-desc': 'Comercializamos equipos de construcción, minería e industria de las marcas más reconocidas del mercado. Nuestro portafolio incluye excavadoras, retroexcavadoras, minicargadores y mucho más, con garantía de fábrica y respaldo post-venta.',
      's1-f1': 'Equipos originales con garantía de fábrica',
      's1-f2': 'Asesoría técnica especializada',
      's1-f3': 'Entrega y puesta en marcha incluida',
      's1-cta': 'Solicitar cotización',

      's2-eyebrow': 'Flexibilidad para tu proyecto', 's2-title': 'Renta de Equipos',
      's2-desc': 'Disponemos de una flota de equipos en óptimas condiciones listos para rentar por día, semana o mes. Una solución ideal para proyectos de corta o mediana duración sin necesidad de inversión en activos fijos.',
      's2-f1': 'Equipos en perfectas condiciones operativas',
      's2-f2': 'Planes flexibles: diario, semanal o mensual',
      's2-f3': 'Operador disponible (bajo solicitud)',
      's2-cta': 'Consultar disponibilidad',

      's3-eyebrow': 'Soporte especializado', 's3-title': 'Asistencia Técnica',
      's3-desc': 'Contamos con un equipo de técnicos certificados para el diagnóstico, mantenimiento y reparación de maquinaria pesada. Servicio en taller o directamente en tu obra para minimizar tiempos de parada.',
      's3-f1': 'Diagnóstico y reparación en sitio',
      's3-f2': 'Mantenimiento preventivo programado',
      's3-f3': 'Técnicos certificados por las marcas',
      's3-cta': 'Agendar servicio',

      's4-eyebrow': 'Originales y de calidad', 's4-title': 'Tienda de Repuestos',
      's4-desc': 'Ofrecemos el más amplio catálogo de repuestos originales para maquinaria de construcción, minería e industria. Filtros, cuchillas, sellos, mangueras y todo lo que necesitas para mantener tus equipos en óptimas condiciones.',
      's4-f1': 'Repuestos originales Bobcat, SANY, DEVELON, CAT',
      's4-f2': 'Disponibilidad inmediata en inventario',
      's4-f3': 'Importación de piezas especiales bajo pedido',
      's4-cta': 'Ver catálogo',

      's5-eyebrow': 'Soluciones financieras', 's5-title': 'Financiamiento de Equipos',
      's5-desc': 'Trabajamos con entidades financieras para ofrecerte planes de financiamiento adaptados a tus necesidades. Adquiere los equipos que necesitas sin comprometer tu capital de trabajo.',
      's5-f1': 'Planes desde 12 hasta 60 meses',
      's5-f2': 'Cuotas fijas y tasas competitivas',
      's5-f3': 'Tramitación rápida y asesoría personalizada',
      's5-cta': 'Conocer planes',

      'cta-title': '¿LISTO PARA EMPEZAR?',
      'cta-desc': 'Contáctanos hoy y un asesor especializado te ayudará a encontrar la solución perfecta para tu proyecto.',
      'cta-btn': 'Hablar con un asesor',
    },
    en: {
      'srv-page-eyebrow': 'What we do',
      'srv-page-title': 'OUR<br><span class="yl">SERVICES</span>',

      's1-eyebrow': 'New and used equipment', 's1-title': 'Sales',
      's1-desc': 'We sell construction, mining and industrial equipment from the most recognized brands in the market. Our portfolio includes excavators, backhoes, skid steers and much more, with factory warranty and after-sales support.',
      's1-f1': 'Original equipment with factory warranty',
      's1-f2': 'Specialized technical advice',
      's1-f3': 'Delivery and startup included',
      's1-cta': 'Request a quote',

      's2-eyebrow': 'Flexibility for your project', 's2-title': 'Equipment Rental',
      's2-desc': 'We have a fleet of equipment in optimal condition ready to rent by day, week or month. An ideal solution for short or medium-term projects without the need to invest in fixed assets.',
      's2-f1': 'Equipment in perfect operating condition',
      's2-f2': 'Flexible plans: daily, weekly or monthly',
      's2-f3': 'Operator available (upon request)',
      's2-cta': 'Check availability',

      's3-eyebrow': 'Specialized support', 's3-title': 'Technical Assistance',
      's3-desc': 'We have a team of certified technicians for diagnosis, maintenance and repair of heavy machinery. Service at our workshop or directly at your job site to minimize downtime.',
      's3-f1': 'On-site diagnosis and repair',
      's3-f2': 'Scheduled preventive maintenance',
      's3-f3': 'Brand-certified technicians',
      's3-cta': 'Schedule service',

      's4-eyebrow': 'Original and high quality', 's4-title': 'Spare Parts Store',
      's4-desc': 'We offer the widest catalog of original spare parts for construction, mining and industrial machinery. Filters, blades, seals, hoses and everything you need to keep your equipment in optimal condition.',
      's4-f1': 'Original Bobcat, SANY, DEVELON, CAT spare parts',
      's4-f2': 'Immediate availability in stock',
      's4-f3': 'Special parts import on request',
      's4-cta': 'View catalog',

      's5-eyebrow': 'Financial solutions', 's5-title': 'Equipment Financing',
      's5-desc': 'We work with financial institutions to offer you financing plans tailored to your needs. Acquire the equipment you need without compromising your working capital.',
      's5-f1': 'Plans from 12 to 60 months',
      's5-f2': 'Fixed installments and competitive rates',
      's5-f3': 'Fast processing and personalized advice',
      's5-cta': 'Learn about plans',

      'cta-title': 'READY TO GET STARTED?',
      'cta-desc': 'Contact us today and a specialized advisor will help you find the perfect solution for your project.',
      'cta-btn': 'Talk to an advisor',
    }
  },

  /* ───────────────────────────────────────────────
     PRODUCTOS — productos.html
  ─────────────────────────────────────────────── */
  productos: {
    es: {
      'pr-hero-eyebrow': 'Catálogo SOLUMAQ',
      'pr-hero-title': 'NUESTROS<br><span class="wh">PRODUCTOS</span>',

      'tab-martillos': 'Martillos Hidráulicos',
      'tab-generadores': 'Generadores',
      'tab-filtros': 'Filtros &amp; Repuestos',

      'mar-eyebrow': 'SOOSAN HEAVY INDUSTRIES',
      'mar-title': 'Martillos<br><span class="yl">Hidráulicos</span>',
      'mar-desc': 'Fundada en 1984 en Corea del Sur, SOOSAN es uno de los fabricantes líderes de martillos hidráulicos y equipos de demolición. Con presencia global, reconocida por la calidad y durabilidad de sus equipos especialmente en trabajos de alto impacto en canteras, minería y demolición urbana.',

      'th-model': 'Modelo', 'th-weight': 'Peso', 'th-carrier': 'Equipo Portador',
      'th-flow': 'Flujo de Aceite', 'th-pressure': 'Presión Operativa',
      'th-impact': 'Tasa de Impacto', 'th-chisel': 'Ø Cincel',

      'gen-eyebrow': 'ATLAS COPCO',
      'gen-title': 'Generadores<br><span class="yl">Eléctricos</span>',
      'gen-desc': 'Los generadores Atlas Copco ofrecen potencia segura, eficiencia de combustible y un desempeño probado a nivel mundial. Diseñados para los entornos más exigentes, combinan motores Kubota y alternadores Leroy Somer para un respaldo energético confiable.',

      'flt2-eyebrow': 'Repuestos originales',
      'flt2-title': 'Filtros &amp;<br><span class="yl">Repuestos</span>',
      'flt2-desc': 'Ofrecemos filtros originales y de la más alta calidad para maquinaria de construcción, minería e industria. Portafolio de marcas líderes como Develon, Bobcat, Sany, CAT, Perkins y Atlas Copco, garantizando el máximo rendimiento y protección de tus equipos.',
    },
    en: {
      'pr-hero-eyebrow': 'SOLUMAQ Catalog',
      'pr-hero-title': 'OUR<br><span class="wh">PRODUCTS</span>',

      'tab-martillos': 'Hydraulic Hammers',
      'tab-generadores': 'Generators',
      'tab-filtros': 'Filters &amp; Parts',

      'mar-eyebrow': 'SOOSAN HEAVY INDUSTRIES',
      'mar-title': 'Hydraulic<br><span class="yl">Hammers</span>',
      'mar-desc': 'Founded in 1984 in South Korea, SOOSAN is one of the leading manufacturers of hydraulic hammers and demolition equipment. With a global presence, it is recognized for the quality and durability of its equipment, especially in high-impact work in quarries, mining and urban demolition.',

      'th-model': 'Model', 'th-weight': 'Weight', 'th-carrier': 'Carrier Equipment',
      'th-flow': 'Oil Flow', 'th-pressure': 'Operating Pressure',
      'th-impact': 'Impact Rate', 'th-chisel': 'Chisel Ø',

      'gen-eyebrow': 'ATLAS COPCO',
      'gen-title': 'Electric<br><span class="yl">Generators</span>',
      'gen-desc': 'Atlas Copco generators offer safe power, fuel efficiency and proven performance worldwide. Designed for the most demanding environments, they combine Kubota engines and Leroy Somer alternators for reliable power backup.',

      'flt2-eyebrow': 'Original spare parts',
      'flt2-title': 'Filters &amp;<br><span class="yl">Spare Parts</span>',
      'flt2-desc': 'We offer original and highest quality filters for construction, mining and industrial machinery. Portfolio of leading brands such as Develon, Bobcat, Sany, CAT, Perkins and Atlas Copco, guaranteeing maximum performance and protection for your equipment.',
    }
  },

  /* ───────────────────────────────────────────────
     CONTACTO — contacto.html
  ─────────────────────────────────────────────── */
  contacto: {
    es: {
      'ct-eyebrow': 'Estamos para ayudarte',
      'ct-hero-title': 'HABLEMOS<br><span class="wh">HOY</span>',

      'ct-info-eyebrow': 'Información de contacto',
      'ct-info-title': '¿Cómo llegar <span class="yl">a nosotros?</span>',

      'ct-addr-label': 'Dirección',
      'ct-phone-label': 'Teléfono',
      'ct-email-label': 'Correo electrónico',
      'ct-hours-label': 'Horario de atención',
      'ct-hrs-week-label': 'Lun – Vie',
      'ct-hrs-week': '8:00 a.m. – 6:00 p.m.',
      'ct-hrs-sat-label': 'Sábado',
      'ct-hrs-sat': '8:00 a.m. – 2:00 p.m.',
      'ct-hrs-sun-label': 'Domingo',
      'ct-hrs-sun': 'Cerrado',
      'ct-social-label': 'Síguenos',

      'ct-form-title': 'Envíanos un mensaje',
      'ct-form-subtitle': 'Un asesor te responderá a la brevedad posible.',
      'ct-lbl-name': 'Nombre', 'ct-lbl-company': 'Empresa',
      'ct-lbl-phone': 'Teléfono', 'ct-lbl-email': 'Email',
      'ct-lbl-service': 'Servicio de interés', 'ct-lbl-msg': 'Mensaje',
      'ct-opt1': 'Venta de equipos', 'ct-opt2': 'Renta de equipos',
      'ct-opt3': 'Asistencia técnica', 'ct-opt4': 'Repuestos y filtros',
      'ct-opt5': 'Financiamiento', 'ct-opt6': 'Otra consulta',
      'ct-submit': 'Enviar mensaje',
      'ct-submit-success': '✓ ¡Enviado!',

      'ct-ph-name': 'Tu nombre',
      'ct-ph-company': 'Tu empresa',
      'ct-ph-phone': '(809) 000-0000',
      'ct-ph-email': 'tu@email.com',
      'ct-ph-msg': 'Cuéntanos sobre tu proyecto o consulta...',
    },
    en: {
      'ct-eyebrow': 'We are here to help',
      'ct-hero-title': "LET'S TALK<br><span class=\"wh\">TODAY</span>",

      'ct-info-eyebrow': 'Contact information',
      'ct-info-title': 'How to reach <span class="yl">us?</span>',

      'ct-addr-label': 'Address',
      'ct-phone-label': 'Phone',
      'ct-email-label': 'Email address',
      'ct-hours-label': 'Business hours',
      'ct-hrs-week-label': 'Mon – Fri',
      'ct-hrs-week': '8:00 a.m. – 6:00 p.m.',
      'ct-hrs-sat-label': 'Saturday',
      'ct-hrs-sat': '8:00 a.m. – 2:00 p.m.',
      'ct-hrs-sun-label': 'Sunday',
      'ct-hrs-sun': 'Closed',
      'ct-social-label': 'Follow us',

      'ct-form-title': 'Send us a message',
      'ct-form-subtitle': 'An advisor will get back to you as soon as possible.',
      'ct-lbl-name': 'Name', 'ct-lbl-company': 'Company',
      'ct-lbl-phone': 'Phone', 'ct-lbl-email': 'Email',
      'ct-lbl-service': 'Service of interest', 'ct-lbl-msg': 'Message',
      'ct-opt1': 'Equipment sales', 'ct-opt2': 'Equipment rental',
      'ct-opt3': 'Technical assistance', 'ct-opt4': 'Spare parts & filters',
      'ct-opt5': 'Financing', 'ct-opt6': 'Other inquiry',
      'ct-submit': 'Send message',
      'ct-submit-success': '✓ Sent!',

      'ct-ph-name': 'Your name',
      'ct-ph-company': 'Your company',
      'ct-ph-phone': '(809) 000-0000',
      'ct-ph-email': 'you@email.com',
      'ct-ph-msg': 'Tell us about your project or inquiry...',
    }
  }

};