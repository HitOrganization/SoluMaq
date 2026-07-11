# SOLUMAQ — Documentación del Proyecto

Sitio web corporativo para **SOLUMAQ**, empresa de venta y renta de maquinaria de construcción, minería e industria en Santo Domingo, República Dominicana.

---

## 📁 Estructura de carpetas

```
solumaq/
├── index.html              # Página de inicio
├── nosotros.html            # Quiénes somos / Misión / Visión / Valores
├── servicios.html           # Detalle de los 5 servicios
├── productos.html           # Catálogo (tabs: Martillos / Generadores / Filtros)
├── contacto.html            # Formulario + información de contacto + mapa
│
├── css/
│   └── style.css             # Hoja de estilos única para todo el sitio
│
└── js/
    ├── translations.js       # Diccionario de textos ES/EN
    ├── darkmode.js           # Modo oscuro / claro
    ├── language.js           # Motor de traducción ES/EN (genérico)
    ├── nav.js                # Menú móvil + link activo + año del footer
    ├── forms.js              # Validación y feedback de formularios
    └── tabs.js               # Tabs de productos.html
```

> **Nota:** `photos/` no está incluida en este export — son las imágenes propias del cliente (header.jpg, martillos, filtros) que deben copiarse a una carpeta `photos/` junto a los HTML.

---

## 🎨 `style.css` — Sistema de diseño

Un solo archivo de estilos compartido por las 5 páginas. Está organizado por bloques, en este orden:

| Bloque | Contenido |
|---|---|
| **Design Tokens** | Variables CSS (`--yellow`, `--black`, `--g50…g800`, sombras, radios, transiciones) |
| **Dark mode** | Overrides de los tokens dentro de `.dark` |
| **Reset** | Normalización básica |
| **Layout** | `.container`, `.section-pad` |
| **Switch / Top bar / Header** | Barra superior, logo, nav desktop y móvil, hamburguesa |
| **Hero (Inicio)** | Hero específico de `index.html` |
| **Services / Hammers / Filters** | Secciones propias de `index.html` |
| **Utilities** | `.yl` (texto amarillo) y `.wh` (texto blanco), usables en cualquier página |
| **Page Hero** | Componente reusable de hero para páginas internas (`.page-hero`, variante `.is-dark`) |
| **CTA Band** | Banda de llamado a la acción reusable (`.cta-band`, variante `.is-black`) |
| **Data Table** | Tabla de especificaciones técnicas (usada en Productos) |
| **Footer** | Footer compartido |
| **Nosotros** | Quiénes somos, stats, Misión/Visión/Valores |
| **Servicios** | Bloques de detalle alternados + features |
| **Productos** | Tabs, encabezado de categoría, tarjetas de producto |
| **Contacto** | Info blocks, formulario completo, mapa |
| **Responsive** | 3 breakpoints: `1024px`, `768px`, `480px` |

**Principio de diseño:** cualquier patrón visual que se repite en más de una página (hero, banda CTA, tabla, tarjeta) vive como **un solo componente reusable** con modificadores (`.is-dark`, `.is-black`), en vez de reescribirse por página.

---

## ⚙️ `js/` — Módulos JavaScript

Cada archivo tiene una sola responsabilidad:

### `darkmode.js`
Lee/guarda la preferencia en `localStorage` (`smq-dark`). Si el usuario nunca eligió, respeta `prefers-color-scheme` del sistema.

### `language.js` + `translations.js`
Motor de traducción **genérico** (no usa `getElementById` por texto). Funciona así:

```html
<body data-page="contacto">
  ...
  <h2 data-i18n="ct-info-title">¿Cómo llegar a nosotros?</h2>
  <input data-i18n-placeholder="ct-ph-email" placeholder="tu@email.com">
```

- `data-i18n="clave"` → reemplaza el `innerHTML` del elemento
- `data-i18n-placeholder="clave"` → reemplaza el `placeholder`
- El atributo `data-page` en el `<body>` le dice al motor qué diccionario de página usar
- `translations.js` expone `window.SMQ_I18N` con una sección `common` (topbar/header/footer, igual en todas las páginas) + una sección por página (`index`, `nosotros`, `servicios`, `productos`, `contacto`)

Para agregar un texto nuevo: se agrega la clave en `translations.js` (ES y EN) y se referencia con `data-i18n` en el HTML — no se toca JS.

### `nav.js`
Menú hamburguesa (abrir/cerrar/clic afuera), resaltado del link activo según la URL actual, y año dinámico del footer (`#yr`).

### `forms.js`
Validación de campos requeridos + feedback visual (borde rojo si falta un campo, mensaje de éxito temporal). El envío real a un backend/email está marcado con un comentario `← Aquí va la lógica real de envío` para conectarlo cuando se decida el método (API propia, Formspree, EmailJS, etc.).

### `tabs.js`
Cambia entre los paneles de `productos.html` (Martillos / Generadores / Filtros).

### `main.js` *(legado)*
Es el bundle original que mezclaba todo lo anterior en un solo archivo. **Las páginas aún no migradas lo siguen usando.** Se elimina una vez que todas las páginas estén actualizadas a los módulos nuevos.

---

## 📄 Estado de cada página

| Página | CSS inline propio | JS modular | `data-i18n` |
|---|---|---|---|
| `index.html` | ✅ eliminado | ✅ migrado | ✅ completo |
| `nosotros.html` | ✅ eliminado | ✅ migrado | ✅ completo |
| `servicios.html` | ✅ eliminado | ✅ migrado | ✅ completo |
| `productos.html` | ✅ eliminado | ✅ migrado | ✅ completo |
| `contacto.html` | ✅ eliminado | ✅ migrado | ✅ completo |

**Migración completada.** `js/main.js` (bundle legado) eliminado.

---

## 🧩 Convenciones

- **Colores:** `#f7b500` (amarillo de marca) + `#0c0c0c` (negro) — nunca hardcodeados, siempre vía variables CSS (`var(--yellow)`, etc.)
- **Tipografía:** `Bebas Neue` para títulos, `DM Sans` para texto de cuerpo
- **Nombres de clase:** en inglés, kebab-case (`.page-hero`, `.cta-band`, `.prod-card`)
- **IDs funcionales** (no traducibles, usados por JS): `darkToggle`, `langToggle`, `hamburger`, `mobileNav`, `form-btn`, `ct-submit`, `yr`
- **Cada página declara su sección** con `<body data-page="nombre-pagina">` para que `language.js` sepa qué diccionario aplicar

---

## ✅ Pendientes

- [ ] Reemplazar imágenes placeholder (Unsplash) con fotos reales de SOLUMAQ
- [ ] Copiar carpeta `photos/` con las imágenes propias del cliente
- [ ] Conectar formularios a un backend real (API, Formspree, EmailJS, etc.) — marcado con comentario en `forms.js`
- [ ] Añadir URLs reales a los botones de redes sociales en footer y página de contacto
- [ ] Verificar coordenadas del mapa embed en `contacto.html`