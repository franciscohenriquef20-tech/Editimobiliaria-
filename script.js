/* =========================================================
   ÁTRIO REALTY — SCRIPT PRINCIPAL
   ========================================================= */
(() => {
  'use strict';

  /* ---------------------------------------------------------
     DADOS DOS IMÓVEIS
     --------------------------------------------------------- */
  const PROPERTIES = [
    {
      id: 'p01', tipo: 'Apartamento', cidade: 'São Paulo', bairro: 'Jardim Paulista',
      preco: 657000, area: 57, quartos: 2, banheiros: 2, garagem: 1,
      titulo: 'Apartamento com 2 Quartos — Jardim Paulista', ref: '2888014190',
      imgs: [
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80'
      ],
      desc: 'Localizado no Jardim Paulista, este apartamento de 57 m² combina praticidade, conforto e localização privilegiada: a 100 metros do Hospital Albert Einstein e a 3 quadras da Avenida Paulista, com fácil acesso à Estação Trianon-Masp (Linha 4 – Amarela). Região com infraestrutura completa: Parque Trianon, MASP, escolas, academias e hospitais como Sírio-Libanês e 9 de Julho.',
      features: ['6º andar','Elevador','Portaria 24h','Ar-condicionado','Aceita animais','1 vaga de garagem']
    },
    {
      id: 'p02', tipo: 'Apartamento', cidade: 'São Paulo', bairro: 'Liberdade',
      preco: 319000, area: 48, quartos: 2, banheiros: 1, garagem: 1,
      titulo: 'Apartamento com 2 Quartos — Liberdade', ref: '2878317105',
      imgs: [
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'
      ],
      desc: 'Apartamento de 48 m² no bairro Liberdade, com 2 dormitórios, sala, cozinha, área de serviço, sacada e 1 vaga de garagem. Condomínio fechado com academia, espaço gourmet, salão de festas, piscina, bicicletário e quadra de futebol. Ótima localização próxima ao metrô, mercados, farmácias, hospital e escolas.',
      features: ['9º andar','Piscina','Elevador','Ar-condicionado','Área de serviço','Aceita animais']
    },
    {
      id: 'p03', tipo: 'Studio', cidade: 'São Paulo', bairro: 'Brás',
      preco: 250000, area: 27, quartos: 1, banheiros: 1, garagem: 0,
      titulo: 'Studio Mobiliado — Brás', ref: '2898890179',
      imgs: [
        'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1200&q=80'
      ],
      desc: 'Studio de 27 m² vendido mobiliado, em condomínio fechado com piscina, academia, espaço gourmet, salão de festas, churrasqueira, playground e jardins. A poucos minutos da Estação Brás (Metrô e CPTM), com fácil acesso à Radial Leste, Avenida do Estado e ao Centro de São Paulo.',
      features: ['Mobiliado','Piscina no condomínio','Aceita animais','Perto do metrô','Elevador']
    },
    {
      id: 'p04', tipo: 'Kitnet', cidade: 'São Paulo', bairro: 'Liberdade',
      preco: 159000, area: 29, quartos: 1, banheiros: 1, garagem: 0,
      titulo: 'Kitnet Mobiliada — Liberdade', ref: '2897523428',
      imgs: [
        'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80'
      ],
      desc: 'Kitnet de 29 m², composta por sala, banheiro, cozinha e área de serviço, entregue mobiliada. Fácil acesso às estações de metrô Liberdade, Sé e Dom Pedro II, ao lado da Rua 25 de Março e a 5 minutos do AMA Sé. Condomínio com salão de festas e bicicletário.',
      features: ['22º andar','Mobiliado','Aceita animais','Salão de festas','Bicicletário']
    },
    {
      id: 'p05', tipo: 'Sala Comercial', cidade: 'São Paulo', bairro: 'República',
      preco: 166900, area: 66, quartos: 0, banheiros: 1, garagem: 0,
      titulo: 'Sala Comercial — República', ref: '2871889857',
      imgs: [
        'https://images.unsplash.com/photo-1600566753051-0ea1a1a9c7d9?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1600210492291-b8d1a5d0e0a3?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1600607687644-c7cba30a1c0d?auto=format&fit=crop&w=1200&q=80'
      ],
      desc: 'Sala comercial de 66 m² no bairro República, com 3 salas, hall e 1 banheiro. Prédio com elevadores e ótima localização próxima ao metrô. Excelente oportunidade para investimento — propostas estudadas.',
      features: ['3º andar','Elevador','Próximo ao metrô','Escritório','Aceita proposta']
    }
  ];

  const fmtBRL = v => v.toLocaleString('pt-BR', { style:'currency', currency:'BRL', maximumFractionDigits:0 });

  /* ---------------------------------------------------------
     STATE
     --------------------------------------------------------- */
  const state = {
    favorites: new Set(JSON.parse(localStorageSafeGet('rdm_favs') || '[]')),
    compare: new Set(JSON.parse(localStorageSafeGet('rdm_compare') || '[]')),
    filters: { cidade:'', bairro:'', tipo:'', quartos:'', preco:'', busca:'' }
  };

  function localStorageSafeGet(key){
    try{ return localStorage.getItem(key); }catch(e){ return null; }
  }
  function localStorageSafeSet(key, val){
    try{ localStorage.setItem(key, val); }catch(e){ /* noop */ }
  }
  function persist(){
    localStorageSafeSet('rdm_favs', JSON.stringify([...state.favorites]));
    localStorageSafeSet('rdm_compare', JSON.stringify([...state.compare]));
  }

  /* ---------------------------------------------------------
     ICONS (inline SVG strings)
     --------------------------------------------------------- */
  const ICO = {
    ruler:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 16 16 3l5 5-13 13-5-5Z"/><path d="M9 10l1.5 1.5M13 6l1.5 1.5"/></svg>',
    bed:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 18v-6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6M3 18v2M21 18v2M3 12V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>',
    bath:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 12h16a1 1 0 0 1 1 1 6 6 0 0 1-6 6H9a6 6 0 0 1-6-6 1 1 0 0 1 1-1Z"/><path d="M7 12V6a2 2 0 0 1 3.2-1.6M6 21l.6-2M18 21l-.6-2"/></svg>',
    car:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 13l1.5-4.5A2 2 0 0 1 6.4 7h11.2a2 2 0 0 1 1.9 1.5L21 13v5H3v-5Z"/><circle cx="7" cy="18" r="1.4"/><circle cx="17" cy="18" r="1.4"/></svg>',
    heart:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 20.5s-7.5-4.6-10-9.3C.4 7.6 2 4 5.6 4 8 4 10 5.4 12 8c2-2.6 4-4 6.4-4C22 4 23.6 7.6 22 11.2c-2.5 4.7-10 9.3-10 9.3Z"/></svg>',
    compare:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M8 3 4 7l4 4M4 7h13M16 21l4-4-4-4M20 17H7"/></svg>',
    share:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="18" cy="5" r="2.6"/><circle cx="6" cy="12" r="2.6"/><circle cx="18" cy="19" r="2.6"/><path d="M8.3 10.7l7.4-4.2M8.3 13.3l7.4 4.2"/></svg>',
    pin:'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 21s7-6.4 7-11.5A7 7 0 0 0 5 9.5C5 14.6 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.4"/></svg>',
    whatsapp:'<svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.85.5 3.58 1.4 5.07L2 22l5.2-1.5a9.9 9.9 0 0 0 4.84 1.25h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2Z"/></svg>',
    calendar:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 10h18"/></svg>'
  };

  /* ---------------------------------------------------------
     PRELOADER
     --------------------------------------------------------- */
  window.addEventListener('load', () => {
    const pre = document.getElementById('preloader');
    setTimeout(() => { pre.classList.add('done'); }, 1400);
  });

  /* ---------------------------------------------------------
     CUSTOM CURSOR
     --------------------------------------------------------- */
  (function initCursor(){
    if (window.matchMedia('(hover: none)').matches) return;
    const dot = document.getElementById('cursorDot');
    const ring = document.getElementById('cursorRing');
    let rx=0, ry=0, mx=0, my=0;
    window.addEventListener('mousemove', e => {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%,-50%)`;
    });
    (function loop(){
      rx += (mx-rx)*0.18; ry += (my-ry)*0.18;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%,-50%)`;
      requestAnimationFrame(loop);
    })();
    document.addEventListener('mouseover', e => {
      if (e.target.closest('a, button, input, select, .property-card, summary')) ring.classList.add('hover');
    });
    document.addEventListener('mouseout', e => {
      if (e.target.closest('a, button, input, select, .property-card, summary')) ring.classList.remove('hover');
    });
  })();

  /* ---------------------------------------------------------
     HEADER SCROLL STATE
     --------------------------------------------------------- */
  const header = document.getElementById('siteHeader');
  function onScroll(){
    header.classList.toggle('scrolled', window.scrollY > 40);
    const btt = document.getElementById('backToTop');
    btt.classList.toggle('show', window.scrollY > 700);
  }
  window.addEventListener('scroll', onScroll, { passive:true });
  onScroll();

  document.getElementById('backToTop').addEventListener('click', () => {
    window.scrollTo({ top:0, behavior:'smooth' });
  });

  /* ---------------------------------------------------------
     MOBILE MENU (fullscreen)
     --------------------------------------------------------- */
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileMenuClose = document.getElementById('mobileMenuClose');
  function openMobileMenu(){
    mobileMenu.classList.add('open');
    mobileMenu.setAttribute('aria-hidden','false');
    hamburgerBtn.classList.add('open');
    hamburgerBtn.setAttribute('aria-expanded','true');
    document.body.style.overflow = 'hidden';
  }
  function closeMobileMenu(){
    mobileMenu.classList.remove('open');
    mobileMenu.setAttribute('aria-hidden','true');
    hamburgerBtn.classList.remove('open');
    hamburgerBtn.setAttribute('aria-expanded','false');
    document.body.style.overflow = '';
  }
  hamburgerBtn.addEventListener('click', () => {
    mobileMenu.classList.contains('open') ? closeMobileMenu() : openMobileMenu();
  });
  mobileMenuClose.addEventListener('click', closeMobileMenu);
  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMobileMenu));

  /* ---------------------------------------------------------
     THEME TOGGLE
     --------------------------------------------------------- */
  const themeToggle = document.getElementById('themeToggle');
  function applyTheme(t){
    document.documentElement.classList.toggle('dark', t === 'dark');
    localStorageSafeSet('rdm_theme', t);
  }
  const savedTheme = localStorageSafeGet('rdm_theme');
  if (savedTheme) applyTheme(savedTheme);
  else if (window.matchMedia('(prefers-color-scheme: dark)').matches) applyTheme('dark');
  themeToggle.addEventListener('click', () => {
    applyTheme(document.documentElement.classList.contains('dark') ? 'light' : 'dark');
  });

  /* ---------------------------------------------------------
     BUILD FILTER OPTIONS
     --------------------------------------------------------- */
  function unique(arr){ return [...new Set(arr)].sort(); }
  function populateSelect(id, values, formatter){
    const sel = document.getElementById(id);
    values.forEach(v => {
      const opt = document.createElement('option');
      opt.value = v; opt.textContent = formatter ? formatter(v) : v;
      sel.appendChild(opt);
    });
  }
  populateSelect('fCidade', unique(PROPERTIES.map(p => p.cidade)));
  populateSelect('fBairro', unique(PROPERTIES.map(p => p.bairro)));
  populateSelect('fTipo', unique(PROPERTIES.map(p => p.tipo)));

  /* ---------------------------------------------------------
     RENDER PROPERTY CARDS
     --------------------------------------------------------- */
  const grid = document.getElementById('propertyGrid');
  const resultCount = document.getElementById('resultCount');
  const emptyState = document.getElementById('emptyState');

  function specsHtml(p){
    return `
      <span>${ICO.ruler}${p.area}m²</span>
      <span>${ICO.bed}${p.quartos}</span>
      <span>${ICO.bath}${p.banheiros}</span>
      <span>${ICO.car}${p.garagem}</span>
    `;
  }

  function cardHtml(p){
    const isFav = state.favorites.has(p.id);
    const isCompare = state.compare.has(p.id);
    return `
    <article class="property-card" data-id="${p.id}">
      <div class="card-media">
        <img src="${p.imgs[0]}" alt="${p.titulo}" loading="lazy">
        <span class="card-tag">${p.tipo}</span>
        <div class="card-icon-row">
          <button class="card-icon-btn card-fav-btn ${isFav?'active':''}" aria-label="Favoritar imóvel" data-action="fav">${ICO.heart}</button>
          <button class="card-icon-btn card-compare-btn ${isCompare?'active':''}" aria-label="Comparar imóvel" data-action="compare">${ICO.compare}</button>
          <button class="card-icon-btn card-share-btn" aria-label="Compartilhar imóvel" data-action="share">${ICO.share}</button>
        </div>
        <span class="card-price-tag">${fmtBRL(p.preco)}</span>
      </div>
      <div class="card-body">
        <div class="card-loc">
          <h3>${p.titulo}</h3>
          <button class="card-expand" aria-label="Ver detalhes" data-action="open">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M7 17 17 7M9 7h8v8"/></svg>
          </button>
        </div>
        <p class="card-city">${ICO.pin}${p.bairro} · ${p.cidade}</p>
        <div class="card-specs">${specsHtml(p)}</div>
      </div>
    </article>`;
  }

  function matchesFilters(p){
    const f = state.filters;
    if (f.cidade && p.cidade !== f.cidade) return false;
    if (f.bairro && p.bairro !== f.bairro) return false;
    if (f.tipo && p.tipo !== f.tipo) return false;
    if (f.quartos && p.quartos < Number(f.quartos)) return false;
    if (f.preco && p.preco > Number(f.preco)) return false;
    if (f.busca){
      const q = f.busca.toLowerCase();
      const hay = `${p.ref} ${p.titulo} ${p.bairro} ${p.cidade} ${p.tipo}`.toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  }

  function renderGrid(){
    const filtered = PROPERTIES.filter(matchesFilters);
    grid.innerHTML = filtered.map(cardHtml).join('');
    resultCount.textContent = filtered.length;
    emptyState.hidden = filtered.length !== 0;
    // reveal animation
    requestAnimationFrame(() => {
      grid.querySelectorAll('.property-card').forEach((el, i) => {
        setTimeout(() => el.classList.add('in-view'), i * 60);
      });
    });
  }
  renderGrid();

  /* ---------------------------------------------------------
     FILTER EVENTS
     --------------------------------------------------------- */
  const searchForm = document.getElementById('searchForm');
  searchForm.addEventListener('change', e => {
    const map = { fCidade:'cidade', fBairro:'bairro', fTipo:'tipo', fQuartos:'quartos', fPreco:'preco' };
    if (map[e.target.id]) { state.filters[map[e.target.id]] = e.target.value; renderGrid(); }
  });
  document.getElementById('fBusca').addEventListener('input', e => {
    state.filters.busca = e.target.value; renderGrid();
  });
  document.getElementById('clearFilters').addEventListener('click', () => {
    state.filters = { cidade:'', bairro:'', tipo:'', quartos:'', preco:'', busca:'' };
    searchForm.reset();
    renderGrid();
  });
  document.getElementById('emptyReset').addEventListener('click', () => {
    document.getElementById('clearFilters').click();
  });

  /* ---------------------------------------------------------
     TOAST
     --------------------------------------------------------- */
  let toastTimer;
  function showToast(msg){
    const toast = document.getElementById('toast');
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
  }

  /* ---------------------------------------------------------
     CARD ACTIONS (event delegation)
     --------------------------------------------------------- */
  grid.addEventListener('click', e => {
    const btn = e.target.closest('[data-action]');
    if (!btn) return;
    const card = e.target.closest('.property-card');
    const id = card.dataset.id;
    const action = btn.dataset.action;

    if (action === 'open'){ openModal(id); return; }

    if (action === 'fav'){
      toggleFavorite(id);
      btn.classList.toggle('active', state.favorites.has(id));
      return;
    }
    if (action === 'compare'){
      toggleCompare(id);
      btn.classList.toggle('active', state.compare.has(id));
      return;
    }
    if (action === 'share'){
      shareProperty(id);
      return;
    }
  });

  function toggleFavorite(id){
    state.favorites.has(id) ? state.favorites.delete(id) : state.favorites.add(id);
    persist(); updateFavCount(); renderFavPanel();
  }
  function toggleCompare(id){
    if (state.compare.has(id)) state.compare.delete(id);
    else{
      if (state.compare.size >= 3){ showToast('Você pode comparar até 3 imóveis por vez.'); return; }
      state.compare.add(id);
    }
    persist(); updateCompareBar(); renderComparePanel();
    // keep grid buttons in sync
    grid.querySelectorAll('.card-compare-btn').forEach(b => {
      const cid = b.closest('.property-card').dataset.id;
      b.classList.toggle('active', state.compare.has(cid));
    });
  }
  function shareProperty(id){
    const p = PROPERTIES.find(x => x.id === id);
    const url = `${location.origin}${location.pathname}#imovel-${id}`;
    const text = `${p.titulo} — ${fmtBRL(p.preco)} — ${p.bairro}, ${p.cidade}`;
    if (navigator.share){
      navigator.share({ title:p.titulo, text, url }).catch(()=>{});
    } else if (navigator.clipboard){
      navigator.clipboard.writeText(`${text} · ${url}`).then(() => showToast('Link copiado para a área de transferência.'));
    } else {
      showToast(url);
    }
  }

  function updateFavCount(){
    document.getElementById('favCount').textContent = state.favorites.size;
  }
  updateFavCount();

  /* ---------------------------------------------------------
     FAVORITES PANEL
     --------------------------------------------------------- */
  const favPanel = document.getElementById('favPanel');
  const favList = document.getElementById('favList');
  function renderFavPanel(){
    const items = [...state.favorites].map(id => PROPERTIES.find(p => p.id === id)).filter(Boolean);
    if (!items.length){
      favList.innerHTML = '<p class="fav-empty">Você ainda não favoritou nenhum imóvel.</p>';
      return;
    }
    favList.innerHTML = items.map(p => `
      <div class="fav-item" data-id="${p.id}">
        <img src="${p.imgs[0]}" alt="${p.titulo}">
        <div><h4>${p.titulo}</h4><p>${fmtBRL(p.preco)} · ${p.bairro}</p></div>
        <button aria-label="Remover dos favoritos" data-remove="${p.id}">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 6l12 12M18 6L6 18"/></svg>
        </button>
      </div>`).join('');
  }
  favList.addEventListener('click', e => {
    const rm = e.target.closest('[data-remove]');
    if (rm){ toggleFavorite(rm.dataset.remove); grid.querySelectorAll('.card-fav-btn').forEach(b=>{
      const cid=b.closest('.property-card').dataset.id; b.classList.toggle('active', state.favorites.has(cid));
    }); }
  });
  function openPanel(panel){ panel.classList.add('open'); panel.setAttribute('aria-hidden','false'); document.body.style.overflow='hidden'; }
  function closePanel(panel){ panel.classList.remove('open'); panel.setAttribute('aria-hidden','true'); document.body.style.overflow=''; }

  document.getElementById('favToggleBtn').addEventListener('click', () => { renderFavPanel(); openPanel(favPanel); });
  document.getElementById('favPanelClose').addEventListener('click', () => closePanel(favPanel));
  document.getElementById('favPanelBackdrop').addEventListener('click', () => closePanel(favPanel));

  /* ---------------------------------------------------------
     COMPARE BAR + PANEL
     --------------------------------------------------------- */
  const compareBar = document.getElementById('compareBar');
  const compareItems = document.getElementById('compareItems');
  const compareCountEl = document.getElementById('compareCount');
  function updateCompareBar(){
    const items = [...state.compare].map(id => PROPERTIES.find(p => p.id === id)).filter(Boolean);
    compareBar.hidden = items.length === 0;
    compareCountEl.textContent = items.length;
    compareItems.innerHTML = items.map(p => `<span>${p.titulo}</span>`).join('');
  }
  document.getElementById('compareClear').addEventListener('click', () => {
    state.compare.clear(); persist(); updateCompareBar(); renderComparePanel();
    grid.querySelectorAll('.card-compare-btn').forEach(b => b.classList.remove('active'));
  });

  const comparePanel = document.getElementById('comparePanel');
  const compareTable = document.getElementById('compareTable');
  function renderComparePanel(){
    const items = [...state.compare].map(id => PROPERTIES.find(p => p.id === id)).filter(Boolean);
    if (!items.length){
      compareTable.innerHTML = '<tr><td class="compare-empty">Adicione imóveis à comparação pelo ícone nos cards.</td></tr>';
      return;
    }
    const rows = [
      ['Imóvel', p => `<img src="${p.imgs[0]}" alt=""><strong>${p.titulo}</strong>${p.ref}`],
      ['Preço', p => fmtBRL(p.preco)],
      ['Cidade', p => p.cidade],
      ['Bairro', p => p.bairro],
      ['Área', p => `${p.area}m²`],
      ['Quartos', p => p.quartos],
      ['Banheiros', p => p.banheiros],
      ['Garagem', p => p.garagem]
    ];
    compareTable.innerHTML = `
      <thead><tr><th></th>${items.map(p=>`<th>${p.tipo}</th>`).join('')}</tr></thead>
      <tbody>
        ${rows.map(([label, fn]) => `<tr><th>${label}</th>${items.map(p=>`<td>${fn(p)}</td>`).join('')}</tr>`).join('')}
      </tbody>`;
  }
  document.getElementById('compareOpen').addEventListener('click', () => { renderComparePanel(); openPanel(comparePanel); });
  document.getElementById('comparePanelClose').addEventListener('click', () => closePanel(comparePanel));
  document.getElementById('comparePanelBackdrop').addEventListener('click', () => closePanel(comparePanel));

  updateCompareBar();

  /* ---------------------------------------------------------
     PROPERTY DETAIL MODAL
     --------------------------------------------------------- */
  const modal = document.getElementById('propertyModal');
  const modalBody = document.getElementById('modalBody');
  let currentGallery = [];

  function modalHtml(p){
    const [first, second, third, ...rest] = p.imgs;
    const moreCount = p.imgs.length - 3;
    return `
      <div class="modal-gallery">
        <img src="${first}" alt="${p.titulo}" data-idx="0">
        <div class="modal-gallery-side">
          <img src="${second}" alt="${p.titulo}" data-idx="1">
          <img class="${moreCount>0?'more':''}" data-more="+${moreCount>0?moreCount:0}" src="${third}" alt="${p.titulo}" data-idx="2">
        </div>
      </div>
      <div class="modal-info">
        <div class="modal-top">
          <div>
            <h2 id="modalTitle">${p.titulo}</h2>
            <p class="loc">${p.bairro} · ${p.cidade}</p>
          </div>
          <div class="modal-price">${fmtBRL(p.preco)}</div>
        </div>
        <p class="modal-ref">Ref. ${p.ref}</p>
        <div class="modal-specs">
          <div><span>Área</span><strong>${p.area}m²</strong></div>
          <div><span>Quartos</span><strong>${p.quartos}</strong></div>
          <div><span>Banheiros</span><strong>${p.banheiros}</strong></div>
          <div><span>Garagem</span><strong>${p.garagem}</strong></div>
        </div>
        <p class="modal-desc">${p.desc}</p>
        <ul class="modal-features">${p.features.map(f=>`<li>${f}</li>`).join('')}</ul>
        <div class="modal-map">
          <iframe title="Mapa do imóvel" src="https://www.google.com/maps?q=${encodeURIComponent(p.bairro+', '+p.cidade)}&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div class="modal-actions">
          <a class="btn btn-solid" target="_blank" rel="noopener" href="https://wa.me/5511951223472?text=${encodeURIComponent('Olá! Tenho interesse no imóvel '+p.titulo+' ('+p.ref+').')}">${ICO.whatsapp} Falar no WhatsApp</a>
          <a class="btn btn-line" href="#contato" data-close-modal>${ICO.calendar} Agendar visita</a>
        </div>
      </div>`;
  }

  function openModal(id){
    const p = PROPERTIES.find(x => x.id === id);
    if (!p) return;
    currentGallery = p.imgs;
    modalBody.innerHTML = modalHtml(p);
    modal.classList.add('open');
    modal.setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';
    modalBody.querySelectorAll('.modal-gallery img').forEach(img => {
      img.addEventListener('click', () => openLightbox(Number(img.dataset.idx)));
    });
    modalBody.querySelectorAll('[data-close-modal]').forEach(a => a.addEventListener('click', closeModal));
  }
  function closeModal(){
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden','true');
    document.body.style.overflow = '';
  }
  document.getElementById('modalClose').addEventListener('click', closeModal);
  document.getElementById('modalBackdrop').addEventListener('click', closeModal);

  /* ---------------------------------------------------------
     LIGHTBOX
     --------------------------------------------------------- */
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCount = document.getElementById('lightboxCount');
  let lbIndex = 0;
  function openLightbox(idx){
    lbIndex = idx;
    updateLightbox();
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden','false');
  }
  function updateLightbox(){
    lightboxImg.src = currentGallery[lbIndex];
    lightboxCount.textContent = `${lbIndex+1} / ${currentGallery.length}`;
  }
  document.getElementById('lightboxClose').addEventListener('click', () => {
    lightbox.classList.remove('open'); lightbox.setAttribute('aria-hidden','true');
  });
  document.getElementById('lightboxPrev').addEventListener('click', () => {
    lbIndex = (lbIndex - 1 + currentGallery.length) % currentGallery.length; updateLightbox();
  });
  document.getElementById('lightboxNext').addEventListener('click', () => {
    lbIndex = (lbIndex + 1) % currentGallery.length; updateLightbox();
  });
  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') document.getElementById('lightboxClose').click();
    if (e.key === 'ArrowLeft') document.getElementById('lightboxPrev').click();
    if (e.key === 'ArrowRight') document.getElementById('lightboxNext').click();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape'){
      if (modal.classList.contains('open')) closeModal();
      if (favPanel.classList.contains('open')) closePanel(favPanel);
      if (comparePanel.classList.contains('open')) closePanel(comparePanel);
      if (mobileMenu.classList.contains('open')) closeMobileMenu();
    }
  });

  /* ---------------------------------------------------------
     FINANCING CALCULATOR
     --------------------------------------------------------- */
  const calValor = document.getElementById('calValor');
  const calEntrada = document.getElementById('calEntrada');
  const calPrazo = document.getElementById('calPrazo');
  const calTaxa = document.getElementById('calTaxa');

  function setFill(input){
    const pct = ((input.value - input.min) / (input.max - input.min)) * 100;
    input.style.setProperty('--fill', pct + '%');
  }

  function calcFinance(){
    const valor = Number(calValor.value);
    const entradaPct = Number(calEntrada.value);
    const prazoAnos = Number(calPrazo.value);
    const taxaAnual = Number(calTaxa.value);

    const entradaValor = valor * (entradaPct/100);
    const financiado = valor - entradaValor;
    const n = prazoAnos * 12;
    const i = (taxaAnual/100) / 12;
    const parcela = i > 0 ? (financiado * i) / (1 - Math.pow(1+i, -n)) : financiado / n;

    document.getElementById('calValorOut').textContent = fmtBRL(valor);
    document.getElementById('calEntradaOut').textContent = `${entradaPct}% · ${fmtBRL(entradaValor)}`;
    document.getElementById('calPrazoOut').textContent = `${prazoAnos} anos`;
    document.getElementById('calTaxaOut').textContent = `${taxaAnual.toFixed(1).replace('.', ',')}%`;
    document.getElementById('calParcela').textContent = fmtBRL(Math.round(parcela));
    document.getElementById('calFinanciado').textContent = fmtBRL(Math.round(financiado));

    [calValor, calEntrada, calPrazo, calTaxa].forEach(setFill);
  }
  [calValor, calEntrada, calPrazo, calTaxa].forEach(input => input.addEventListener('input', calcFinance));
  calcFinance();

  /* ---------------------------------------------------------
     NEWSLETTER + CONTACT FORMS (front-end only)
     --------------------------------------------------------- */
  document.getElementById('newsletterForm').addEventListener('submit', e => {
    e.preventDefault();
    document.getElementById('newsletterMsg').textContent = 'Inscrição confirmada. Em breve você recebe nossas novidades.';
    e.target.reset();
  });
  document.getElementById('contactForm').addEventListener('submit', e => {
    e.preventDefault();
    document.getElementById('contactMsg').textContent = 'Mensagem enviada. Retornaremos em até um dia útil.';
    e.target.reset();
  });

  /* ---------------------------------------------------------
     SWIPER — TESTEMUNHOS
     --------------------------------------------------------- */
  if (window.Swiper){
    new Swiper('.testimonial-swiper', {
      loop: true,
      autoHeight: true,
      spaceBetween: 20,
      pagination: { el: '.swiper-pagination', clickable: true },
      autoplay: { delay: 5500, disableOnInteraction: false }
    });
  }

  /* ---------------------------------------------------------
     AOS INIT
     --------------------------------------------------------- */
  if (window.AOS){
    AOS.init({ once:true, duration:700, easing:'ease-out-cubic', offset:60 });
  }

  /* ---------------------------------------------------------
     GSAP — HERO ENTRANCE + PARALLAX
     --------------------------------------------------------- */
  if (window.gsap){
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({ delay: 1.5 });
    tl.to('.hero-title .word', { y:0, opacity:1, duration:1, stagger:0.05, ease:'power3.out' })
      .to('.hero-sub', { y:0, opacity:1, duration:.8, ease:'power3.out' }, '-=0.5')
      .to('.hero-actions', { y:0, opacity:1, duration:.8, ease:'power3.out' }, '-=0.5');

    gsap.to('.hero-media img', {
      yPercent: 14,
      ease: 'none',
      scrollTrigger: { trigger:'.hero', start:'top top', end:'bottom top', scrub:true }
    });

    ScrollTrigger.batch('.service-card', {
      start:'top 90%',
      onEnter: batch => gsap.fromTo(batch, { y:26, opacity:0 }, { y:0, opacity:1, stagger:0.1, duration:.6, ease:'power2.out' })
    });
  } else {
    document.querySelectorAll('.hero-title .word, .hero-sub, .hero-actions').forEach(el => {
      el.style.opacity = 1; el.style.transform = 'none';
    });
  }

  /* ---------------------------------------------------------
     PROPERTY CARD REVEAL ON SCROLL (fallback IntersectionObserver)
     --------------------------------------------------------- */
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('in-view'); });
  }, { threshold:0.1 });
  function observeCards(){ grid.querySelectorAll('.property-card:not(.in-view)').forEach(c => io.observe(c)); }
  observeCards();
  const originalRenderGrid = renderGrid;
  // re-observe whenever grid re-renders
  const gridObserver = new MutationObserver(observeCards);
  gridObserver.observe(grid, { childList:true });

})();
