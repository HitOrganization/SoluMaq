  document.getElementById('year').textContent = new Date().getFullYear();
    
    // Funcionalidad para el modo oscuro
    const darkModeToggle = document.getElementById('darkModeToggle');
    const languageToggle = document.getElementById('languageToggle');
    
    // Verificar preferencia guardada
    if (localStorage.getItem('darkMode') === 'enabled') {
      document.documentElement.classList.add('dark');
      darkModeToggle.checked = true;
    }
    
    if (localStorage.getItem('language') === 'en') {
      languageToggle.checked = true;
      switchToEnglish();
    }
    
    // Modo oscuro
    darkModeToggle.addEventListener('change', function() {
      if (this.checked) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('darkMode', 'enabled');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('darkMode', 'disabled');
      }
    });
    
    // Cambio de idioma
    languageToggle.addEventListener('change', function() {
      if (this.checked) {
        switchToEnglish();
        localStorage.setItem('language', 'en');
      } else {
        switchToSpanish();
        localStorage.setItem('language', 'es');
      }
    });
    
    // Funcionalidad del menú hamburguesa
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    
    hamburger.addEventListener('click', function() {
      this.classList.toggle('active');
      mobileMenu.classList.toggle('active');
    });
    
    // Cerrar menú al hacer clic en un enlace
    const mobileLinks = document.querySelectorAll('#mobileMenu a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
      });
    });
    
    function switchToEnglish() {
      // Header superior
      document.getElementById('darkModeText').textContent = 'Dark mode';
      document.getElementById('languageText').textContent = 'Spanish';
      
      // Header principal
      document.getElementById('subtitleText').textContent = 'Machinery Solutions';
      document.getElementById('navInicio').textContent = 'Home';
      document.getElementById('navNosotros').textContent = 'About Us';
      document.getElementById('navServicios').textContent = 'Services';
      document.getElementById('navProductos').textContent = 'Products +';
      document.getElementById('navContacto').textContent = 'Contact';
      
      // Menú móvil
      document.getElementById('mobileNavInicio').textContent = 'Home';
      document.getElementById('mobileNavNosotros').textContent = 'About Us';
      document.getElementById('mobileNavServicios').textContent = 'Services';
      document.getElementById('mobileNavProductos').textContent = 'Products +';
      document.getElementById('mobileNavContacto').textContent = 'Contact';
      
      // Hero section
      document.getElementById('mainTitle').innerHTML = 'SOLUMAQ = <span class="text-solumaqYellow">solutions that boost your productivity</span>';
      document.getElementById('description1').innerHTML = 'We are your strategic ally in the construction, mining and industry sectors in the Dominican Republic. At SOLUMAQ we bring together in one place <strong>spare parts, tools and equipment</strong> from the most recognized brands in the market. We have the widest line of hydraulic hammers, guaranteeing solutions adapted to each challenge of your projects.';
      document.getElementById('description2').innerHTML = 'Our commitment is to provide <strong>quality, support and real guarantees</strong> in each product, together with reliable service that ensures the continuity of your operations. More than suppliers, we are a strategic ally that drives your productivity with machinery solutions designed to maximize results.';
      
      // Formulario
      document.getElementById('formTitle').textContent = 'Request more information';
      document.getElementById('nameInput').placeholder = 'Name *';
      document.getElementById('phoneInput').placeholder = 'Phone *';
      document.getElementById('emailInput').placeholder = 'Email *';
      document.getElementById('companyInput').placeholder = 'Company *';
      document.getElementById('messageInput').placeholder = 'Message *';
      document.getElementById('formLabel').textContent = 'Select an option';
      document.getElementById('option1').textContent = 'Equipment sales';
      document.getElementById('option2').textContent = 'Equipment rental';
      document.getElementById('option3').textContent = 'Spare parts';
      document.getElementById('formButton').textContent = 'Send';
      
      // Servicios
      document.getElementById('servicesTitle').textContent = 'Our Services';
      document.getElementById('service1Text').textContent = 'Sales';
      document.getElementById('service2Text').textContent = 'Equipment rental';
      document.getElementById('service3Text').textContent = 'Technical Assistance';
      document.getElementById('service4Text').textContent = 'Spare Parts Store';
      document.getElementById('service5Text').textContent = 'Solumaq Support';
      document.getElementById('service6Text').textContent = 'Equipment financing';
      
      // Martillos hidráulicos
      document.getElementById('hammersTitle').innerHTML = 'THE WIDEST LINE IN<br>HYDRAULIC HAMMERS';
      document.getElementById('hammersDescription').textContent = 'At SOLUMAQ we offer you a wide range of hydraulic hammers for excavators, backhoes and skid steers. Designed to provide power, durability and efficiency, our hammers adapt to any type of construction and mining work, providing reliable solutions for every need.';
      document.getElementById('hammersButton').textContent = 'VIEW PRODUCTS';
      
      // Filtros
      document.getElementById('filtersTitle').textContent = 'PROTECTION AND PERFORMANCE IN EVERY FILTER';
      document.getElementById('filtersDescription').innerHTML = 'We offer original and highest quality filters for construction, mining and industrial machinery. We have a wide portfolio of spare parts from leading brands such as <strong>Develop</strong>, <strong>Bobcat</strong>, <strong>Sany</strong>, <strong>CAT</strong>, <strong>Perkins</strong> and <strong>Atlas Copco</strong>, guaranteeing maximum performance and protection for your equipment.';
      document.getElementById('filtersButton').textContent = 'VIEW PRODUCTS';
      
      // Footer
      document.getElementById('footerDescription').textContent = 'Machinery solutions designed to accompany your projects, guaranteeing productivity, trust and support at every stage, driving your growth with the best quality in the market.';
      document.getElementById('footerContactTitle').textContent = 'Contact';
      document.getElementById('footerAddressTitle').textContent = 'Avenida Independencia, Km. 10, Local 109';
      document.getElementById('footerCity').textContent = 'Santo Domingo, Dominican Republic.';
      document.getElementById('footerPhone').innerHTML = '📞 (809) 706-3525';
      document.getElementById('footerEmail').innerHTML = '✉️ info@solumaqrd.com';
      document.getElementById('footerHoursTitle').textContent = 'Business hours:';
      document.getElementById('footerWeekHours').textContent = 'Mon - Fri: 8:00 a.m. - 6:00 p.m.';
      document.getElementById('footerSatHours').textContent = 'Sat: 8:00 a.m. - 2:00 p.m.';
      document.getElementById('footerCopyright').innerHTML = '© <span id="year"></span> SOLUMAQ — Solutions that boost your productivity';
      document.getElementById('year').textContent = new Date().getFullYear();
    }
    
    function switchToSpanish() {
      // Header superior
      document.getElementById('darkModeText').textContent = 'Modo oscuro';
      document.getElementById('languageText').textContent = 'Español';
      
      // Header principal
      document.getElementById('subtitleText').textContent = 'Soluciones en Maquinaria';
      document.getElementById('navInicio').textContent = 'Inicio';
      document.getElementById('navNosotros').textContent = 'Nosotros';
      document.getElementById('navServicios').textContent = 'Servicios';
      document.getElementById('navProductos').textContent = 'Productos +';
      document.getElementById('navContacto').textContent = 'Contacto';
      
      // Menú móvil
      document.getElementById('mobileNavInicio').textContent = 'Inicio';
      document.getElementById('mobileNavNosotros').textContent = 'Nosotros';
      document.getElementById('mobileNavServicios').textContent = 'Servicios';
      document.getElementById('mobileNavProductos').textContent = 'Productos +';
      document.getElementById('mobileNavContacto').textContent = 'Contacto';
      
      // Hero section
      document.getElementById('mainTitle').innerHTML = 'SOLUMAQ = <span class="text-solumaqYellow">soluciones que impulsan tu productividad</span>';
      document.getElementById('description1').innerHTML = 'Somos tu aliado estratégico en el sector construcción, minería e industria en la República Dominicana. En SOLUMAQ reunimos en un solo lugar <strong>repuestos, herramientas y equipos</strong> originales de las marcas más reconocidas del mercado. Contamos con la línea más amplia de martillos hidráulicos, garantizando soluciones adaptadas a cada desafío de tus proyectos.';
      document.getElementById('description2').innerHTML = 'Nuestro compromiso es brindar <strong>calidad, respaldo y garantías</strong> reales en cada producto, junto con un servicio confiable que asegura la continuidad de tus operaciones. Más que proveedores, somos un aliado estratégico que impulsa tu productividad con soluciones en maquinaria diseñadas para maximizar resultados.';
      
      // Formulario
      document.getElementById('formTitle').textContent = 'Solicita más información';
      document.getElementById('nameInput').placeholder = 'Nombre *';
      document.getElementById('phoneInput').placeholder = 'Teléfono *';
      document.getElementById('emailInput').placeholder = 'Email *';
      document.getElementById('companyInput').placeholder = 'Empresa *';
      document.getElementById('messageInput').placeholder = 'Mensaje *';
      document.getElementById('formLabel').textContent = 'Seleccione una opción';
      document.getElementById('option1').textContent = 'Venta de equipos';
      document.getElementById('option2').textContent = 'Renta de equipos';
      document.getElementById('option3').textContent = 'Repuestos';
      document.getElementById('formButton').textContent = 'Enviar';
      
      // Servicios
      document.getElementById('servicesTitle').textContent = 'Nuestros Servicios';
      document.getElementById('service1Text').textContent = 'Ventas';
      document.getElementById('service2Text').textContent = 'Renta de equipos';
      document.getElementById('service3Text').textContent = 'Asistencia Técnica';
      document.getElementById('service4Text').textContent = 'Tienda de Repuestos';
      document.getElementById('service5Text').textContent = 'Respaldo Solumaq';
      document.getElementById('service6Text').textContent = 'Financiamiento de equipos';
      
      // Martillos hidráulicos
      document.getElementById('hammersTitle').innerHTML = 'LA LÍNEA MÁS AMPLIA EN<br>MARTILLOS HIDRÁULICOS';
      document.getElementById('hammersDescription').textContent = 'En SOLUMAQ ponemos a tu disposición una amplia gama de martillos hidráulicos para excavadoras, retroexcavadoras y minicargadores. Diseñados para ofrecer potencia, durabilidad y eficiencia, nuestros martillos se adaptan a cualquier tipo de obra en construcción y minería, brindando soluciones confiables para cada necesidad.';
      document.getElementById('hammersButton').textContent = 'VER PRODUCTOS';
      
      // Filtros
      document.getElementById('filtersTitle').textContent = 'PROTECCIÓN Y RENDIMIENTO EN CADA FILTRO';
      document.getElementById('filtersDescription').innerHTML = 'Ofrecemos filtros originales y de la más alta calidad para maquinaria de construcción, minería e industria. Contamos con un amplio portafolio de repuestos de marcas líderes como <strong>Develop</strong>, <strong>Bobcat</strong>, <strong>Sany</strong>, <strong>CAT</strong>, <strong>Perkins</strong> y <strong>Atlas Copco</strong>, garantizando el máximo rendimiento y protección de tus equipos.';
      document.getElementById('filtersButton').textContent = 'VER PRODUCTOS';
      
      // Footer
      document.getElementById('footerDescription').textContent = 'Soluciones en maquinaria diseñadas para acompañar tus proyectos, garantizando productividad, confianza y respaldo en cada etapa, impulsando tu crecimiento con la mejor calidad del mercado.';
      document.getElementById('footerContactTitle').textContent = 'Contacto';
      document.getElementById('footerAddressTitle').textContent = 'Avenida Independencia, Km. 10, Local 109';
      document.getElementById('footerCity').textContent = 'Santo Domingo, República Dominicana.';
      document.getElementById('footerPhone').innerHTML = '📞 (809) 706-3525';
      document.getElementById('footerEmail').innerHTML = '✉️ info@solumaqrd.com';
      document.getElementById('footerHoursTitle').textContent = 'Horario de atención:';
      document.getElementById('footerWeekHours').textContent = 'Lun - Vie: 8:00 a.m. - 6:00 p.m.';
      document.getElementById('footerSatHours').textContent = 'Sáb: 8:00 a.m. - 2:00 p.m.';
      document.getElementById('footerCopyright').innerHTML = '© <span id="year"></span> SOLUMAQ — Soluciones que impulsan tu productividad';
      document.getElementById('year').textContent = new Date().getFullYear();
    }
