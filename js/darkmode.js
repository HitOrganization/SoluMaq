/* ═══════════════════════════════════════════════════════════
   SOLUMAQ — darkmode.js
   Maneja exclusivamente el modo oscuro / claro.
   Los scripts se cargan al final del <body>, así que el DOM
   ya está disponible — no se necesita DOMContentLoaded.
═══════════════════════════════════════════════════════════ */
(function () {
  const STORAGE_KEY = 'smq-dark';
  const toggle = document.getElementById('darkToggle');

  function apply(isDark) {
    document.documentElement.classList.toggle('dark', isDark);
    document.body.classList.toggle('dark', isDark);
    if (toggle) toggle.checked = isDark;
  }

  /* ── Cargar preferencia guardada (o preferencia del sistema) ── */
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved !== null) {
    apply(saved === 'true');
  } else {
    apply(window.matchMedia('(prefers-color-scheme: dark)').matches);
  }

  /* ── Escuchar cambios del toggle ── */
  if (toggle) {
    toggle.addEventListener('change', function () {
      apply(this.checked);
      localStorage.setItem(STORAGE_KEY, this.checked);
    });
  }
})();