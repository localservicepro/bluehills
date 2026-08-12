/* Blue Hills Property Maintenance — site behaviour
   Vanilla JS, no dependencies. Progressive enhancement only:
   every navigation target and content block works with JS disabled. */
(function () {
  'use strict';

  /* ---------- Mobile navigation ---------- */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('primary-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  /* ---------- Services dropdown (click on touch / keyboard, hover via CSS) ---------- */
  var trigger = document.querySelector('.nav__trigger');
  var dropdown = document.getElementById('services-menu');

  if (trigger && dropdown) {
    trigger.addEventListener('click', function (e) {
      e.preventDefault();
      var open = dropdown.classList.toggle('is-open');
      trigger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    document.addEventListener('click', function (e) {
      if (!dropdown.contains(e.target) && !trigger.contains(e.target)) {
        dropdown.classList.remove('is-open');
        trigger.setAttribute('aria-expanded', 'false');
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        dropdown.classList.remove('is-open');
        trigger.setAttribute('aria-expanded', 'false');
        if (nav && nav.classList.contains('is-open')) {
          nav.classList.remove('is-open');
          if (toggle) toggle.setAttribute('aria-expanded', 'false');
        }
      }
    });
  }

  /* ---------- Before / after comparison slider ---------- */
  document.querySelectorAll('[data-compare]').forEach(function (root) {
    var before = root.querySelector('.compare__before');
    var handle = root.querySelector('.compare__handle');
    var grip = root.querySelector('.compare__grip');
    var img = before && before.querySelector('img');
    if (!before || !handle || !img) return;

    var dragging = false;

    function setPos(pct) {
      pct = Math.min(100, Math.max(0, pct));
      before.style.width = pct + '%';
      handle.style.left = pct + '%';
      img.style.width = pct > 0 ? (10000 / pct) + '%' : '100%';
      if (grip) grip.setAttribute('aria-valuenow', Math.round(pct));
    }

    function fromEvent(e) {
      var r = root.getBoundingClientRect();
      setPos(((e.clientX - r.left) / r.width) * 100);
    }

    root.addEventListener('pointerdown', function (e) {
      dragging = true;
      root.setPointerCapture && root.setPointerCapture(e.pointerId);
      fromEvent(e);
    });
    root.addEventListener('pointermove', function (e) { if (dragging) fromEvent(e); });
    window.addEventListener('pointerup', function () { dragging = false; });

    if (grip) {
      grip.addEventListener('keydown', function (e) {
        var current = parseFloat(before.style.width) || 50;
        if (e.key === 'ArrowLeft') { setPos(current - 5); e.preventDefault(); }
        if (e.key === 'ArrowRight') { setPos(current + 5); e.preventDefault(); }
        if (e.key === 'Home') { setPos(0); e.preventDefault(); }
        if (e.key === 'End') { setPos(100); e.preventDefault(); }
      });
    }

    setPos(50);
  });

  /* ---------- Current year in footer ---------- */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });

  /* ---------- Quote modal ----------
     Every quote CTA is a real <a href="/contact/">, so with JavaScript off
     the visitor simply lands on the contact page and its inline form. Here
     we upgrade those links into a modal. */
  var modal = document.getElementById('quote-modal');

  if (modal) {
    var lastFocus = null;

    var openModal = function (trigger) {
      lastFocus = trigger || document.activeElement;
      if (typeof modal.showModal === 'function') modal.showModal();
      else modal.setAttribute('open', '');
      document.body.classList.add('quote-open');
      var first = modal.querySelector('input, select, textarea');
      if (first) first.focus({ preventScroll: true });
    };

    var closeModal = function () {
      if (typeof modal.close === 'function') modal.close();
      else modal.removeAttribute('open');
      document.body.classList.remove('quote-open');
      if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
    };

    document.querySelectorAll('[data-quote-open]').forEach(function (el) {
      el.addEventListener('click', function (e) {
        // Let modified clicks (new tab, download) behave normally.
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
        e.preventDefault();
        openModal(el);
      });
    });

    modal.addEventListener('click', function (e) {
      if (e.target.closest('[data-quote-close]')) { closeModal(); return; }
      // Click on the dialog element itself is the backdrop, not the panel.
      if (e.target === modal) closeModal();
    });
    modal.addEventListener('close', function () { document.body.classList.remove('quote-open'); });
    modal.addEventListener('cancel', function () { document.body.classList.remove('quote-open'); });
  } else {
    // Contact page: the form is already on the page, so quote CTAs scroll to
    // it and focus the first field instead of opening a second copy.
    var inline = document.querySelector('[data-quote-form]');
    if (inline) {
      document.querySelectorAll('[data-quote-open]').forEach(function (el) {
        el.addEventListener('click', function (e) {
          if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
          e.preventDefault();
          inline.scrollIntoView({ behavior: 'smooth', block: 'center' });
          var first = inline.querySelector('input, select, textarea');
          if (first) first.focus({ preventScroll: true });
        });
      });
    }
  }

  /* ---------- Quote forms: mailto fallback ----------
     The site is static, so until a POST endpoint exists this composes an
     email to the business inbox rather than losing the enquiry.

     GoHighLevel's external-tracking.js captures submissions by listening for
     the native `submit` event at document level. This handler is deliberately
     built not to interfere with that:

       - it never calls stopPropagation(), so the event still reaches GHL;
       - preventDefault() only cancels the browser's own mailto navigation,
         not the dispatch of the event itself;
       - the mailto is opened on a short timeout so the tracker's beacon has
         gone out before the browser hands over to the mail client.

     Field `name` attributes are the GHL contact keys — do not rename them. */
  document.querySelectorAll('form[data-quote-form][data-mode="mailto"]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      if (typeof form.reportValidity === 'function' && !form.reportValidity()) return;
      e.preventDefault();

      var get = function (name) {
        var f = form.elements[name];
        return f ? String(f.value || '').trim() : '';
      };
      var body = [
        'Full name: ' + get('full_name'),
        'Phone: ' + get('phone'),
        'Email: ' + get('email'),
        'Property address: ' + get('property_address'),
        'Property size: ' + get('property_size'),
        'Service needed: ' + get('service_needed'),
        '',
        'Job notes:',
        get('job_notes')
      ].join('\n');

      var href = 'mailto:admin@bluehillsgpm.com.au'
        + '?subject=' + encodeURIComponent('Website quote request — ' + (get('property_address') || 'Blue Hills'))
        + '&body=' + encodeURIComponent(body);

      var status = form.querySelector('[data-form-status]');
      if (status) {
        status.textContent = 'Thanks — opening your email app with the request pre-filled. '
          + 'If nothing happens, call 0411 342 456 or email admin@bluehillsgpm.com.au directly.';
      }

      // Give the CRM tracker room to send its beacon before we navigate.
      window.setTimeout(function () { window.location.href = href; }, 600);
    });
  });
})();
