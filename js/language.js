/* ═══════════════════════════════════════════════════════════
   SOLUMAQ — language.js
   Motor genérico de traducción ES/EN.

   Atributos HTML reconocidos:
     data-i18n="clave"             → reemplaza innerHTML
     data-i18n-placeholder="clave" → reemplaza placeholder

   La página actual se identifica con <body data-page="...">.
   Requiere translations.js cargado ANTES que este script.
   Los scripts van al final del <body> — DOM ya disponible.
═══════════════════════════════════════════════════════════ */
(function () {
  const STORAGE_KEY = 'smq-lang';
  const toggle  = document.getElementById('langToggle');
  const pageKey = (document.body.getAttribute('data-page')) || 'index';

  /* ── Construye el diccionario combinado (common + página) ── */
  function getDict(lang) {
    var i18n   = window.SMQ_I18N || {};
    var common = (i18n.common && i18n.common[lang]) || {};
    var page   = (i18n[pageKey] && i18n[pageKey][lang]) || {};
    return Object.assign({}, common, page);
  }

  /* ── Aplica traducciones al DOM ── */
  function apply(lang) {
    var dict = getDict(lang);

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (dict[key] !== undefined) el.placeholder = dict[key];
    });

    document.documentElement.setAttribute('lang', lang);
    if (toggle) toggle.checked = (lang === 'en');
    localStorage.setItem(STORAGE_KEY, lang);
  }

  /* ── Cargar idioma guardado ── */
  var savedLang = localStorage.getItem(STORAGE_KEY) || 'es';
  apply(savedLang);

  /* ── Escuchar cambios del toggle ── */
  if (toggle) {
    toggle.addEventListener('change', function () {
      apply(this.checked ? 'en' : 'es');
    });
  }

  /* ── API pública para otros scripts ── */
  window.SMQ_getLang = function () {
    return localStorage.getItem(STORAGE_KEY) || 'es';
  };
})();