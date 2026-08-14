/* Blue Hills Property Maintenance — site behaviour
   Vanilla JS, no dependencies. Progressive enhancement only:
   every navigation target and content block works with JS disabled. */
(function () {
  'use strict';

  /* ---------- Mobile navigation ----------
     Open state lives on .site-header so the menu, the phone number and the
     Free Quote button can all be revealed together. The button doubles as
     the close control: bars animate to an X and the label swaps to "Close". */
  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('primary-nav');
  var trigger = document.querySelector('.nav__trigger');
  var dropdown = document.getElementById('services-menu');

  function closeServices() {
    if (!dropdown) return;
    dropdown.classList.remove('is-open');
    if (trigger) trigger.setAttribute('aria-expanded', 'false');
  }

  function setMenu(open) {
    if (!header || !toggle) return;
    header.classList.toggle('nav-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    var label = toggle.querySelector('.nav-toggle__label');
    if (label) label.textContent = open ? 'Close' : 'Menu';
    if (!open) closeServices();
  }

  function menuIsOpen() {
    return !!header && header.classList.contains('nav-open');
  }

  if (toggle && nav) {
    toggle.addEventListener('click', function () { setMenu(!menuIsOpen()); });

    // Tapping any destination closes the menu — otherwise same-page anchor
    // links leave it covering the content the visitor just asked for.
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) setMenu(false);
    });

    // Tap anywhere outside the header closes it.
    document.addEventListener('click', function (e) {
      if (menuIsOpen() && header && !header.contains(e.target)) setMenu(false);
    });

    // Reset when resizing up to desktop, so the menu can't be stuck open.
    window.addEventListener('resize', function () {
      if (window.innerWidth > 900 && menuIsOpen()) setMenu(false);
    });
  }

  /* ---------- Services dropdown (click on touch / keyboard, hover via CSS) ---------- */
  if (trigger && dropdown) {
    trigger.addEventListener('click', function (e) {
      e.preventDefault();
      var open = dropdown.classList.toggle('is-open');
      trigger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    document.addEventListener('click', function (e) {
      if (!dropdown.contains(e.target) && !trigger.contains(e.target)) closeServices();
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    closeServices();
    if (menuIsOpen()) {
      setMenu(false);
      if (toggle) toggle.focus();
    }
  });

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

  /* ---------- Quote forms ----------
     Submissions are captured by GoHighLevel's external-tracking.js, which
     listens for the native `submit` event at document level. This handler
     is deliberately built not to interfere with that:

       - it never calls stopPropagation(), so the event still reaches GHL;
       - preventDefault() only cancels the browser's own navigation, not the
         dispatch of the event itself;
       - the redirect runs on a short timeout so the tracker's beacon has
         gone out before the page unloads.

     Field `name` attributes are the GHL contact keys — do not rename them. */
  var THANK_YOU = '/thank-you/';
  var BEACON_GRACE_MS = 600;

  document.querySelectorAll('form[data-quote-form]').forEach(function (form) {
    var submitting = false;

    form.addEventListener('submit', function (e) {
      if (typeof form.reportValidity === 'function' && !form.reportValidity()) return;
      e.preventDefault();
      if (submitting) return;
      submitting = true;

      var button = form.querySelector('button[type="submit"]');
      if (button) {
        button.disabled = true;
        button.textContent = 'Sending…';
      }

      var status = form.querySelector('[data-form-status]');
      if (status) status.textContent = 'Sending your request…';

      window.setTimeout(function () { window.location.assign(THANK_YOU); }, BEACON_GRACE_MS);
    });
  });

  /* ---------- Scroll reveal for the copy grids ----------
     The heading column of a copy grid is sticky (see style.css) and its prose
     column is long, so the two columns fade up block by block as the reader
     arrives. Elements start hidden via `.js` set in the head; clearing the
     failsafe timer here means an unloaded script shows the copy instead of
     leaving blank columns. */
  window.clearTimeout(window.__revealFailsafe);

  var columns = document.querySelectorAll('.copy-grid__head, .copy-grid__body');
  var items = [];
  columns.forEach(function (col) {
    Array.prototype.forEach.call(col.children, function (el, i) {
      // Stagger within a column, capped so a long column does not end up
      // waiting most of a second for its last paragraph.
      el.style.transitionDelay = Math.min(i, 3) * 90 + 'ms';
      items.push(el);
    });
  });

  if (!items.length) return;

  if (!('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('is-in'); });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-in');
      observer.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });

  items.forEach(function (el) { observer.observe(el); });
})();
