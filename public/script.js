/* Gamma Chemical Trading: catalogue portal. Search, filters, quote list, menu, detail dialog, inquiry form. No dependencies. */
(function () {
  'use strict';

  var CONTACT = { email: 'support@gammachemicaltrading.com', endpoint: '' };

  var root = document.documentElement;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  /* ---------- catalogue data ---------- */
  var IND = { coatings: 'Paints and coatings', plastics: 'Plastics and rubber', food: 'Food and flavour', pharma: 'Pharma and personal care', cleaning: 'Cleaning and detergents', agri: 'Agriculture', electronics: 'Electronics and aerospace' };
  var G = { solvents: 'Solvents', colour: 'Colour and titanium', polymers: 'Polymers and additives', bases: 'Bases and specialty' };
  // id, name, group, description, industries, search words (matched, never displayed)
  var F = [
    ['alcohols', 'Alcohols', 'solvents', 'Organic compounds of carbon, hydrogen and oxygen, classed as primary, secondary or tertiary by the carbon that bears the hydroxyl group.', ['coatings', 'cleaning', 'pharma'], 'ethanol methanol isopropanol ipa butanol alcohol'],
    ['esters', 'Esters', 'solvents', 'Formed from an alcohol and a carboxylic acid. Used as solvents, plasticizers and flavourings, and prized for their fruity notes in perfumes and food.', ['coatings', 'plastics', 'food', 'pharma'], 'ethyl acetate butyl acetate ester fragrance flavour'],
    ['glycol', 'Glycol ethers and esters', 'solvents', 'Solvents derived from ethylene or propylene glycol, used in paints, coatings and cleaners for their solvency and low toxicity.', ['coatings', 'cleaning', 'plastics'], 'glycol ether propylene glycol ethylene glycol coalescent'],
    ['hydrocarbons', 'Hydrocarbons', 'solvents', 'Alkanes, alkenes and alkynes: the base of fuels, and a feedstock and solvent across the chemical industry.', ['coatings', 'plastics'], 'toluene xylene hexane white spirit mineral spirits aromatic aliphatic fuel'],
    ['ketones', 'Ketones', 'solvents', 'Compounds with a carbonyl group between two alkyl groups. Used as solvents, intermediates in chemical synthesis and flavourings.', ['coatings', 'food', 'pharma'], 'acetone mek mibk methyl ethyl ketone cyclohexanone'],
    ['pigments', 'Pigments', 'colour', 'Colorants for paints, inks, plastics, automotive coatings and cosmetics, organic and inorganic, in a wide range of colours.', ['coatings', 'plastics', 'pharma'], 'colour color colorant dye iron oxide carbon black masterbatch ink'],
    ['titaniums', 'Titaniums', 'colour', 'Titanium dioxide, titanium tetrachloride and titanium sponge: strong, corrosion resistant and biocompatible, for coatings, aerospace and medical use.', ['coatings', 'electronics'], 'titanium dioxide tio2 rutile anatase white pigment tetrachloride'],
    ['metallic', 'Metallic compounds', 'colour', 'Metal atoms bonded to other elements, used in pigments, catalysts and electronic materials.', ['coatings', 'electronics'], 'zinc oxide metal salt catalyst oxide compound'],
    ['plasticizers', 'Plasticizers', 'polymers', 'Added to plastics to improve flexibility, durability and processing. Phthalate and non-phthalate grades for PVC, rubber and other polymers.', ['plastics'], 'pvc dop dehp dotp dinp phthalate rubber flexible'],
    ['polymeric', 'Polymeric compounds', 'polymers', 'Chains of repeating monomer units, natural or synthetic, for plastics, rubbers and adhesives.', ['plastics'], 'polymer resin polyethylene polypropylene pvc adhesive epoxy rubber'],
    ['thickeners', 'Thickeners', 'polymers', 'Raise the viscosity of a liquid to improve texture and stability in food, pharmaceutical and cosmetic products. Natural and synthetic.', ['food', 'pharma'], 'xanthan cmc cellulose gum viscosity rheology gel'],
    ['preservatives', 'Preservatives', 'polymers', 'Prevent microbial growth in food, pharmaceuticals and personal care products, extending shelf life and holding quality.', ['food', 'pharma'], 'benzoate sorbate paraben antimicrobial shelf life biocide'],
    ['bases', 'Inorganic bases', 'bases', 'Proton acceptors, strong and weak, used in soaps, detergents and fertilizers.', ['cleaning', 'agri'], 'caustic soda sodium hydroxide potash potassium hydroxide ammonia lye alkali soda ash'],
    ['specialty', 'Speciality chemicals', 'bases', 'Made for specific applications: surfactants, polymers and additives for pharmaceuticals, agrochemicals and electronics.', ['pharma', 'agri', 'electronics'], 'surfactant additive agrochemical specialty emulsifier'],
    ['other', 'Other chemicals', 'bases', 'Products that fit no single family, used in pharmaceuticals, cosmetics and food additives.', ['pharma', 'food'], 'other misc additive intermediate']
  ].map(function (r) {
    return { id: r[0], name: r[1], group: r[2], desc: r[3], ind: r[4], words: r[5],
      hay: (r[1] + ' ' + r[3] + ' ' + r[5] + ' ' + G[r[2]] + ' ' + r[4].map(function (i) { return IND[i]; }).join(' ')).toLowerCase() };
  });
  function byId(id) { return F.filter(function (f) { return f.id === id; })[0]; }

  var st = { q: '', group: '', ind: '' };
  var quote = [];
  try { quote = JSON.parse(sessionStorage.getItem('gamma-quote') || '[]').filter(byId); } catch (e) { quote = []; }
  function saveQuote() { try { sessionStorage.setItem('gamma-quote', JSON.stringify(quote)); } catch (e) {} }

  /* ---------- helpers ---------- */
  var toastEl = $('#toast'), toastT = 0;
  function toast(msg) { toastEl.textContent = msg; toastEl.classList.add('on'); clearTimeout(toastT); toastT = setTimeout(function () { toastEl.classList.remove('on'); }, 2600); }
  function scrollToEl(sel) { var t = $(sel); if (t) t.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' }); }

  /* ---------- finder ---------- */
  var rowsEl = $('#rows'), countEl = $('#count'), emptyEl = $('#empty'), resetEl = $('#reset'), q = $('#q'), selG = $('#f-group'), selI = $('#f-ind');
  Object.keys(G).forEach(function (k) { var o = document.createElement('option'); o.value = k; o.textContent = G[k]; selG.appendChild(o); });
  Object.keys(IND).forEach(function (k) { var o = document.createElement('option'); o.value = k; o.textContent = IND[k]; selI.appendChild(o); });

  function matches(f) {
    if (st.group && f.group !== st.group) return false;
    if (st.ind && f.ind.indexOf(st.ind) < 0) return false;
    var w = st.q.toLowerCase().split(/\s+/).filter(Boolean);
    return w.every(function (x) { return f.hay.indexOf(x) > -1; });
  }
  var io = null;
  if ('IntersectionObserver' in window && !reduce) {
    io = new IntersectionObserver(function (es) {
      es.filter(function (e) { return e.isIntersecting; }).forEach(function (e, i) {
        if (!e.target.classList.contains('pf-row')) e.target.style.setProperty('--d', (i * 80) + 'ms');
        e.target.classList.add('in'); io.unobserve(e.target);
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -4% 0px' });
  }
  function watch(el) { if (io) io.observe(el); else el.classList.add('in'); }

  function renderRows(pickId) {
    var vis = F.filter(matches);
    rowsEl.innerHTML = vis.map(function (f, i) {
      var inQ = quote.indexOf(f.id) > -1;
      return '<article class="pf-row" data-id="' + f.id + '" style="--d:' + Math.min(i, 8) * 40 + 'ms">' +
        '<div class="n"><button type="button" class="open" data-id="' + f.id + '">' + esc(f.name) + '</button><span>' + esc(f.desc) + '</span></div>' +
        '<div class="g">' + esc(G[f.group]) + '</div>' +
        '<div class="u">' + f.ind.map(function (k) { return IND[k]; }).join(', ') + '</div>' +
        '<div><button type="button" class="add" data-id="' + f.id + '" aria-pressed="' + inQ + '">' + (inQ ? '<svg aria-hidden="true"><use href="#i-check"/></svg>On quote list' : 'Add to quote list') + '</button></div></article>';
    }).join('');
    $$('.pf-row', rowsEl).forEach(watch);
    var filtered = st.q || st.group || st.ind;
    countEl.textContent = filtered ? vis.length + (vis.length === 1 ? ' product family matches' : ' product families match') : 'Fifteen product families';
    resetEl.hidden = !filtered; emptyEl.hidden = vis.length > 0;
    if (pickId) { var r = $('.pf-row[data-id="' + pickId + '"]', rowsEl); if (r) { r.classList.add('in'); } }
  }
  function applyFilters(o, scroll) {
    st.q = o.q != null ? o.q : st.q; st.group = o.group != null ? o.group : st.group; st.ind = o.ind != null ? o.ind : st.ind;
    q.value = st.q; selG.value = st.group; selI.value = st.ind;
    renderRows(); if (scroll) scrollToEl('#finder');
  }
  q.addEventListener('input', function () { st.q = q.value.trim(); renderRows(); });
  selG.addEventListener('change', function () { st.group = selG.value; renderRows(); });
  selI.addEventListener('change', function () { st.ind = selI.value; renderRows(); });
  resetEl.addEventListener('click', function () { applyFilters({ q: '', group: '', ind: '' }); });

  rowsEl.addEventListener('click', function (e) {
    var add = e.target.closest('.add'), open = e.target.closest('.open');
    if (add) toggleQuote(add.dataset.id);
    else if (open) openDetail(open.dataset.id);
  });

  /* group links (cards, menu) */
  $$('a[data-group]').forEach(function (a) {
    a.addEventListener('click', function (e) { e.preventDefault(); closeMenu(); applyFilters({ group: a.dataset.group, ind: '', q: '' }, true); });
  });

  /* ---------- industries ---------- */
  $('#ind-grid').innerHTML = Object.keys(IND).map(function (k) {
    var fam = F.filter(function (f) { return f.ind.indexOf(k) > -1; });
    return '<li><button type="button" class="ind" data-ind="' + k + '"><b>' + IND[k] + '</b><span>' + fam.map(function (f) { return f.name; }).join(', ') + '</span><em>' + fam.length + ' families <svg aria-hidden="true" width="20" height="20"><use href="#i-arrow"/></svg></em></button></li>';
  }).join('');
  $('#ind-grid').addEventListener('click', function (e) { var b = e.target.closest('.ind'); if (b) applyFilters({ ind: b.dataset.ind, group: '', q: '' }, true); });

  /* ---------- quote list ---------- */
  var badge = $('#badge'), qPanel = $('#quote'), qItems = $('#q-items'), qEmpty = $('#q-empty'), qSend = $('#q-send'), listTa = $('#f-list'), taEdited = false;
  listTa.addEventListener('input', function () { taEdited = true; });
  function renderQuote(bump) {
    badge.textContent = quote.length; badge.hidden = quote.length === 0;
    if (bump) { badge.classList.remove('bump'); void badge.offsetWidth; badge.classList.add('bump'); }
    qItems.innerHTML = quote.map(function (id) { var f = byId(id); return '<li><div><b>' + esc(f.name) + '</b><small>' + esc(G[f.group]) + '</small></div><button type="button" class="x" data-id="' + id + '" aria-label="Remove ' + esc(f.name) + '"><svg aria-hidden="true"><use href="#i-close"/></svg></button></li>'; }).join('');
    qEmpty.hidden = quote.length > 0; qSend.disabled = quote.length === 0;
    if (!taEdited) listTa.value = quote.map(function (id) { return byId(id).name; }).join(', ');
    $$('.add', rowsEl).forEach(function (b) { var on = quote.indexOf(b.dataset.id) > -1; b.setAttribute('aria-pressed', on); b.innerHTML = on ? '<svg aria-hidden="true"><use href="#i-check"/></svg>On quote list' : 'Add to quote list'; });
    var da = $('#d-add'); if (da && da.dataset.id) { var on2 = quote.indexOf(da.dataset.id) > -1; da.textContent = on2 ? 'Remove from quote list' : 'Add to quote list'; }
  }
  function toggleQuote(id) {
    var i = quote.indexOf(id), f = byId(id);
    if (i > -1) { quote.splice(i, 1); toast(f.name + ' removed from your quote list'); } else { quote.push(id); toast(f.name + ' added to your quote list'); }
    saveQuote(); renderQuote(i < 0);
  }
  qItems.addEventListener('click', function (e) { var b = e.target.closest('.x'); if (b) toggleQuote(b.dataset.id); });
  function openQuote() { qPanel.classList.add('on'); qPanel.setAttribute('aria-hidden', 'false'); $('#quote-btn').setAttribute('aria-expanded', 'true'); setTimeout(function () { $('#quote-x').focus(); }, 60); }
  function closeQuote(ret) { qPanel.classList.remove('on'); qPanel.setAttribute('aria-hidden', 'true'); $('#quote-btn').setAttribute('aria-expanded', 'false'); if (ret) $('#quote-btn').focus(); }
  $('#quote-btn').addEventListener('click', function () { qPanel.classList.contains('on') ? closeQuote(true) : openQuote(); });
  $('#quote-x').addEventListener('click', function () { closeQuote(true); });
  $('#foot-quote').addEventListener('click', openQuote);
  $('#menu-quote').addEventListener('click', function () { closeMenu(); openQuote(); });
  qSend.addEventListener('click', function () { closeQuote(); taEdited = false; renderQuote(); scrollToEl('#contact'); setTimeout(function () { $('#f-name').focus({ preventScroll: true }); }, reduce ? 0 : 700); });

  /* ---------- detail dialog ---------- */
  var dlg = $('#detail');
  function openDetail(id) {
    var f = byId(id);
    $('#d-group').textContent = G[f.group]; $('#d-title').textContent = f.name; $('#d-desc').textContent = f.desc;
    $('#d-inds').innerHTML = f.ind.map(function (k) { return '<li>' + IND[k] + '</li>'; }).join('');
    var da = $('#d-add'); da.dataset.id = id; da.textContent = quote.indexOf(id) > -1 ? 'Remove from quote list' : 'Add to quote list';
    $('#d-req').dataset.id = id;
    if (dlg.showModal) dlg.showModal(); else dlg.setAttribute('open', '');
  }
  $('#d-x').addEventListener('click', function () { dlg.close(); });
  dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });
  $('#d-add').addEventListener('click', function () { toggleQuote(this.dataset.id); });
  $('#d-req').addEventListener('click', function (e) {
    e.preventDefault(); var id = this.dataset.id; if (quote.indexOf(id) < 0) { quote.push(id); saveQuote(); taEdited = false; renderQuote(true); }
    dlg.close(); scrollToEl('#contact');
  });

  /* ---------- menu ---------- */
  var menu = $('#menu'), scrim = $('#scrim'), menuBtn = $('#menu-btn');
  function openMenu() { menu.classList.add('on'); menu.setAttribute('aria-hidden', 'false'); scrim.hidden = false; requestAnimationFrame(function () { scrim.classList.add('on'); }); menuBtn.setAttribute('aria-expanded', 'true'); setTimeout(function () { $('#menu-x').focus(); }, 80); }
  function closeMenu(ret) { menu.classList.remove('on'); menu.setAttribute('aria-hidden', 'true'); scrim.classList.remove('on'); setTimeout(function () { scrim.hidden = true; }, 320); menuBtn.setAttribute('aria-expanded', 'false'); if (ret) menuBtn.focus(); }
  menuBtn.addEventListener('click', function () { menu.classList.contains('on') ? closeMenu(true) : openMenu(); });
  $('#menu-x').addEventListener('click', function () { closeMenu(true); });
  scrim.addEventListener('click', function () { closeMenu(true); });
  $$('#menu a:not([data-group])').forEach(function (a) { a.addEventListener('click', function () { closeMenu(); }); });

  /* ---------- global search ---------- */
  var sBox = $('#search'), gq = $('#gq'), gres = $('#gq-res'), gHits = [], gActive = -1;
  function score(f, words) {
    var n = f.name.toLowerCase(), s = 0;
    for (var i = 0; i < words.length; i++) { var w = words[i];
      if (n.indexOf(w) === 0) s += 4; else if (n.indexOf(w) > -1) s += 3; else if (f.words.indexOf(w) > -1) s += 2; else if (f.hay.indexOf(w) > -1) s += 1; else return 0; }
    return s;
  }
  function openSearch() { sBox.hidden = false; document.body.style.overflow = 'hidden'; gq.value = ''; gres.innerHTML = ''; setTimeout(function () { gq.focus(); }, 30); }
  function closeSearch() { sBox.hidden = true; document.body.style.overflow = ''; $('#search-btn').focus(); }
  $('#search-btn').addEventListener('click', openSearch);
  $('#search-x').addEventListener('click', closeSearch);
  function pick(f) { var typed = gq.value.trim(); sBox.hidden = true; document.body.style.overflow = ''; applyFilters({ q: typed, group: '', ind: '' }, true); }
  gq.addEventListener('input', function () {
    var w = gq.value.toLowerCase().split(/\s+/).filter(Boolean);
    if (!w.length) { gres.innerHTML = ''; gHits = []; return; }
    gHits = F.map(function (f) { return { f: f, s: score(f, w) }; }).filter(function (x) { return x.s > 0; }).sort(function (a, b) { return b.s - a.s; }).slice(0, 8).map(function (x) { return x.f; });
    gActive = gHits.length ? 0 : -1;
    gres.innerHTML = gHits.length ? gHits.map(function (f, i) { return '<li><a href="#finder" role="option" data-id="' + f.id + '" aria-selected="' + (i === 0) + '"><b>' + esc(f.name) + '</b><small>' + esc(G[f.group]) + ' &middot; ' + f.ind.slice(0, 2).map(function (k) { return IND[k]; }).join(', ') + '</small></a></li>'; }).join('')
      : '<li class="none">No product family found for &ldquo;' + esc(gq.value.trim()) + '&rdquo;. Ask us: if it is chemistry, we can usually source it.</li>';
  });
  gq.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') { e.preventDefault(); if (gq.value.trim()) pick(gHits[gActive] || gHits[0]); }
    else if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); if (!gHits.length) return; gActive = Math.max(0, Math.min(gHits.length - 1, gActive + (e.key === 'ArrowDown' ? 1 : -1))); $$('#gq-res a').forEach(function (a, i) { a.setAttribute('aria-selected', i === gActive); }); }
  });
  gres.addEventListener('click', function (e) { var a = e.target.closest('a[data-id]'); if (!a) return; e.preventDefault(); pick(byId(a.dataset.id)); });

  /* ---------- share ---------- */
  $('#share-btn').addEventListener('click', function () {
    var data = { title: document.title, url: location.href };
    if (navigator.share) { navigator.share(data).catch(function () {}); return; }
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(location.href).then(function () { toast('Link copied'); }, function () { toast('Copy the address from your browser bar'); });
    else toast('Copy the address from your browser bar');
  });

  /* ---------- escape closes whatever is open ---------- */
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    if (!sBox.hidden) closeSearch(); else if (menu.classList.contains('on')) closeMenu(true); else if (qPanel.classList.contains('on')) closeQuote(true);
  });

  /* ---------- bar, reveal ---------- */
  var bar = $('.bar'), heroEl = $('.hero');
  function onScroll() { bar.classList.toggle('solid', window.scrollY > Math.max(40, heroEl.offsetHeight - 90)); }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
  $$('[data-r]').forEach(watch);

  /* ---------- inquiry form (Netlify Forms, safe fallback) ---------- */
  var form = $('#inquiry'), statusMsg = $('#form-status'), els = form.elements, onWeb = /^https?:$/.test(location.protocol);
  function fallback(text, why) {
    if (CONTACT.email) {
      window.location.href = 'mailto:' + CONTACT.email + '?subject=' + encodeURIComponent('Quotation request') + '&body=' + encodeURIComponent(text);
      statusMsg.textContent = why + ' Your email app should open with the inquiry ready to send.'; return;
    }
    var out = $('.form-out');
    if (!out) { out = document.createElement('textarea'); out.className = 'form-out'; out.readOnly = true; out.setAttribute('aria-label', 'Your inquiry'); form.appendChild(out); }
    out.value = text; statusMsg.textContent = why + ' Nothing was sent. Copy the text below and send it to us.';
  }
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = els.name.value.trim(), reach = els.reach.value.trim();
    [els.name, els.reach].forEach(function (el) { el.setAttribute('aria-invalid', el.value.trim() ? 'false' : 'true'); });
    if (!name || !reach) { statusMsg.textContent = 'Please add your name and an email or phone number.'; (name ? els.reach : els.name).focus(); return; }
    if (els['bot-field'] && els['bot-field'].value) return;
    var text = 'Quotation request for Gamma Chemical Trading\n\nName: ' + name + '\nContact: ' + reach + '\nProduct families: ' + (els.families.value.trim() || 'Not specified') + '\n\n' + (els.message.value.trim() || '(no message)');
    if (!onWeb) { fallback(text, 'This copy is not on the web, so the form cannot post.'); return; }
    statusMsg.textContent = 'Sending...';
    fetch(CONTACT.endpoint || '/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams(new FormData(form)).toString() })
      .then(function (r) { if (!r.ok) throw new Error('bad'); statusMsg.textContent = 'Thank you. We will come back to you shortly.'; form.reset(); quote = []; saveQuote(); taEdited = false; renderQuote(); })
      .catch(function () { fallback(text, 'That did not send.'); });
  });

  /* ---------- go ---------- */
  renderRows(); renderQuote();
  requestAnimationFrame(function () { requestAnimationFrame(function () { root.classList.add('ready'); }); });
})();
