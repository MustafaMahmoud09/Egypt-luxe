// ============================================
// EGYPT LUXE - App Core
// ============================================

// ---- Toast Notifications ----
const Toast = {
  container: null,
  init() {
    this.container = document.getElementById('toast-container');
    if (!this.container) {
      this.container = document.createElement('div');
      this.container.id = 'toast-container';
      document.body.appendChild(this.container);
    }
  },
  show(message, type = 'default', duration = 3500) {
    if (!this.container) this.init();
    const icons = { success: '✓', error: '✕', warning: '⚠', default: '✦' };
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `<span class="toast-icon">${icons[type] || icons.default}</span><span>${message}</span>`;
    this.container.appendChild(toast);
    setTimeout(() => {
      toast.classList.add('removing');
      setTimeout(() => toast.remove(), 300);
    }, duration);
  },
};

// ---- Auth State ----
const Auth = {
  getUser() {
    try { return JSON.parse(localStorage.getItem('egyptluxe_user')); }
    catch { return null; }
  },
  isLoggedIn() { return !!this.getUser(); },
  login(userData) {
    localStorage.setItem('egyptluxe_user', JSON.stringify(userData));
    localStorage.setItem('egyptluxe_auth', 'true');
  },
  logout() {
    localStorage.removeItem('egyptluxe_user');
    localStorage.removeItem('egyptluxe_auth');
  },
  requireAuth(redirectTo = 'login.html') {
    if (!this.isLoggedIn()) {
      window.location.href = redirectTo;
      return false;
    }
    return true;
  },
};

// ---- Bookings ----
const Bookings = {
  getAll() {
    try { return JSON.parse(localStorage.getItem('egyptluxe_bookings')) || []; }
    catch { return []; }
  },
  add(booking) {
    const bookings = this.getAll();
    booking.id = 'BK' + Date.now();
    booking.createdAt = new Date().toISOString();
    booking.status = 'confirmed';
    bookings.push(booking);
    localStorage.setItem('egyptluxe_bookings', JSON.stringify(bookings));
    return booking;
  },
  getById(id) { return this.getAll().find(b => b.id === id); },
};

// ---- Wishlist ----
const Wishlist = {
  getAll() {
    try { return JSON.parse(localStorage.getItem('egyptluxe_wishlist')) || []; }
    catch { return []; }
  },
  toggle(serviceId) {
    const list = this.getAll();
    const idx = list.indexOf(serviceId);
    if (idx > -1) { list.splice(idx, 1); return false; }
    else { list.push(serviceId); localStorage.setItem('egyptluxe_wishlist', JSON.stringify(list)); return true; }
    localStorage.setItem('egyptluxe_wishlist', JSON.stringify(list));
  },
  isWishlisted(serviceId) { return this.getAll().includes(serviceId); },
  save(list) { localStorage.setItem('egyptluxe_wishlist', JSON.stringify(list)); },
};

// Actually fix toggle:
Wishlist.toggle = function(serviceId) {
  const list = this.getAll();
  const idx = list.indexOf(serviceId);
  if (idx > -1) { list.splice(idx, 1); }
  else { list.push(serviceId); }
  localStorage.setItem('egyptluxe_wishlist', JSON.stringify(list));
  return idx === -1;
};

// ---- Navigation ----
const Nav = {
  init() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    this.updateNavAuth(navbar);
    this.initMobileNav();
    if (navbar.classList.contains('transparent')) {
      this.initScrollBehavior(navbar);
    }
    this.markActive();
  },
  updateNavAuth(navbar) {
    const user = Auth.getUser();
    const authLinks = navbar.querySelector('.nav-auth');
    const userArea = navbar.querySelector('.nav-user-area');
    if (!authLinks && !userArea) return;
    if (user) {
      if (authLinks) authLinks.classList.add('hidden');
      if (userArea) {
        userArea.classList.remove('hidden');
        const avatar = userArea.querySelector('.nav-avatar');
        if (avatar) avatar.textContent = user.name ? user.name[0].toUpperCase() : 'U';
        const avatarName = userArea.querySelector('.nav-avatar-name');
        if (avatarName) avatarName.textContent = user.name || 'User';
      }
    } else {
      if (authLinks) authLinks.classList.remove('hidden');
      if (userArea) userArea.classList.add('hidden');
    }
  },
  initScrollBehavior(navbar) {
    const handler = () => {
      if (window.scrollY > 60) {
        navbar.classList.remove('transparent');
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.add('transparent');
        navbar.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handler, { passive: true });
    handler();
  },
  initMobileNav() {
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');
    const overlay = document.querySelector('.mobile-overlay');
    if (!hamburger || !mobileNav) return;
    const open = () => { mobileNav.classList.add('open'); overlay && overlay.classList.add('show'); document.body.style.overflow = 'hidden'; };
    const close = () => { mobileNav.classList.remove('open'); overlay && overlay.classList.remove('show'); document.body.style.overflow = ''; };
    hamburger.addEventListener('click', open);
    overlay && overlay.addEventListener('click', close);
    const closeBtn = mobileNav.querySelector('.mobile-nav-close');
    closeBtn && closeBtn.addEventListener('click', close);

    // Update mobile nav auth
    const user = Auth.getUser();
    const mobileAuthLinks = mobileNav.querySelectorAll('.mobile-auth-link');
    const mobileUserLinks = mobileNav.querySelectorAll('.mobile-user-link');
    if (user) {
      mobileAuthLinks.forEach(el => el.classList.add('hidden'));
      mobileUserLinks.forEach(el => el.classList.remove('hidden'));
    } else {
      mobileAuthLinks.forEach(el => el.classList.remove('hidden'));
      mobileUserLinks.forEach(el => el.classList.add('hidden'));
    }
  },
  markActive() {
    const current = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link, .mobile-nav a').forEach(link => {
      const href = link.getAttribute('href');
      if (href && href.includes(current)) link.classList.add('active-link');
    });
  },
};

// ---- Helpers ----
function formatPrice(price, currency = 'EGP') {
  return `${price.toLocaleString()} ${currency}`;
}

function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  let stars = '';
  for (let i = 0; i < full; i++) stars += '★';
  if (half) stars += '½';
  const empty = 5 - full - (half ? 1 : 0);
  for (let i = 0; i < empty; i++) stars += '☆';
  return stars;
}

function renderServiceCard(service, village) {
  const wishlisted = Wishlist.isWishlisted(service.id);
  return `
    <div class="card" data-service-id="${service.id}" data-village="${service.village || village}">
      <div class="card-image-wrapper">
        <img class="card-image" src="${service.image}" alt="${service.name}" loading="lazy">
        <span class="card-badge">${service.tags?.[0] || ''}</span>
        <button class="card-wishlist ${wishlisted ? 'active' : ''}" onclick="toggleWishlist(event, '${service.id}')" title="Save to Wishlist">
          ${wishlisted ? '♥' : '♡'}
        </button>
      </div>
      <div class="card-body">
        <div class="flex-between mb-1">
          <div class="card-rating">
            <span class="stars">${renderStars(service.rating)}</span>
            <span>${service.rating}</span>
            <span style="color:var(--text-light);font-weight:400">(${service.reviewCount})</span>
          </div>
        </div>
        <h3 class="card-title">${service.name}</h3>
        <p class="card-location">📍 ${AppData.getVillageById(service.village || village)?.name || ''}</p>
        <p style="font-size:0.82rem;color:var(--text-muted);margin:0.5rem 0 1rem;line-height:1.6;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden">${service.description}</p>
        <div class="flex-between" style="align-items:flex-end">
          <div>
            <div class="card-price">${formatPrice(service.price)} <span>/ ${service.unit}</span></div>
          </div>
          <button class="btn btn-primary btn-sm" onclick="openService('${service.id}')">Book Now</button>
        </div>
      </div>
    </div>
  `;
}

function renderVillageCard(village) {
  return `
    <div class="village-card" onclick="openVillage('${village.id}')">
      <img src="${village.image}" alt="${village.name}" loading="lazy">
      <div class="village-card-rating">⭐ ${village.rating}</div>
      <div class="village-card-content">
        <div class="village-card-name">${village.name}</div>
        <div class="village-card-location">📍 ${village.location}</div>
      </div>
    </div>
  `;
}

function toggleWishlist(event, serviceId) {
  event.stopPropagation();
  if (!Auth.isLoggedIn()) {
    Toast.show('Login to save favorites', 'warning');
    return;
  }
  const added = Wishlist.toggle(serviceId);
  const btn = event.currentTarget;
  btn.textContent = added ? '♥' : '♡';
  btn.classList.toggle('active', added);
  Toast.show(added ? 'Added to your wishlist ♥' : 'Removed from wishlist', added ? 'success' : 'default');
}

function openVillage(villageId) {
  window.location.href = `village-details.html?village=${villageId}`;
}

function openService(serviceId) {
  window.location.href = `service-details.html?service=${serviceId}`;
}

function getParam(key) {
  return new URLSearchParams(window.location.search).get(key);
}

function handleLogout() {
  Auth.logout();
  Toast.show('Logged out successfully', 'success');
  setTimeout(() => window.location.href = 'index.html', 800);
}

// ---- Init on DOM Load ----
document.addEventListener('DOMContentLoaded', () => {
  Toast.init();
  Nav.init();

  // Logout buttons
  document.querySelectorAll('.logout-btn').forEach(btn => {
    btn.addEventListener('click', handleLogout);
  });
});
