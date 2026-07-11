/* ═══════════════════════════════════════════════════════════
   SOLUMAQ — forms.js
   Validación y feedback de formularios.
   Incluido en todas las páginas por consistencia.
═══════════════════════════════════════════════════════════ */
(function () {

  function setupForm(btnId, requiredIds, allIds, successKey) {
    var btn = document.getElementById(btnId);
    if (!btn) return;

    var originalText = btn.textContent;

    btn.addEventListener('click', function (e) {
      e.preventDefault();

      /* Validar campos requeridos */
      var emptyId = null;
      for (var i = 0; i < requiredIds.length; i++) {
        var el = document.getElementById(requiredIds[i]);
        if (el && !el.value.trim()) { emptyId = requiredIds[i]; break; }
      }

      if (emptyId) {
        var emptyEl = document.getElementById(emptyId);
        if (emptyEl) {
          emptyEl.focus();
          emptyEl.style.borderColor = '#e53935';
          setTimeout(function () { emptyEl.style.borderColor = ''; }, 2000);
        }
        return;
      }

      /* ── Aquí va la lógica real de envío (API / Formspree / EmailJS) ── */

      /* Feedback visual de éxito */
      var lang = window.SMQ_getLang ? window.SMQ_getLang() : 'es';
      var pageKey = document.body.getAttribute('data-page') || 'index';
      var pageDict = (window.SMQ_I18N && window.SMQ_I18N[pageKey] && window.SMQ_I18N[pageKey][lang]) || {};
      var successText = (successKey && pageDict[successKey]) || (lang === 'en' ? '✓ Sent!' : '✓ ¡Enviado!');

      btn.textContent = successText;
      btn.classList.add('success');

      setTimeout(function () {
        btn.textContent = originalText;
        btn.classList.remove('success');
        allIds.forEach(function (id) {
          var f = document.getElementById(id);
          if (f) f.value = '';
        });
      }, 3000);
    });
  }

  /* Formulario corto — sidebar del inicio */
  setupForm(
    'form-btn',
    ['f-name', 'f-phone', 'f-email', 'f-company', 'f-msg'],
    ['f-name', 'f-phone', 'f-email', 'f-company', 'f-msg'],
    null
  );

  /* Formulario completo — página de contacto */
  setupForm(
    'ct-submit',
    ['ct-name', 'ct-phone', 'ct-email', 'ct-msg'],
    ['ct-name', 'ct-phone', 'ct-email', 'ct-company', 'ct-msg'],
    'ct-submit-success'
  );
})();