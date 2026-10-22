/* ============================================
   THE BETTA GALLERY — Interactive JavaScript
   ============================================ */

// ── WhatsApp Configuration ──
// ✅ EDIT YOUR WHATSAPP NUMBER HERE (with country code, no + sign)
const WHATSAPP_NUMBER = '+919620070007';

// ── Fish Product Data ──
// ✅ EDIT FISH NAMES AND PRICES BELOW
const fishCollection = [
  {
    id: 'BETTA 0001',
    name: 'Red Dragon Crown',
    type: 'Male Betta — Crowntail Plakat',
    category: 'crowntail',
    price: '₹1,499',
    origin: 'Thailand',
    image: 'images/betta-0001.jpeg'
  },
  {
    id: 'BETTA 0002',
    name: 'Crimson Phantom',
    type: 'Male Betta — Halfmoon Plakat',
    category: 'halfmoon',
    price: '₹1,299',
    origin: 'Thailand',
    image: 'images/betta-0002.jpeg'
  },
  {
    id: 'BETTA 0003',
    name: 'Snow Dragon',
    type: 'Male Betta — Plakat',
    category: 'plakat',
    price: '₹1,799',
    origin: 'Thailand',
    image: 'images/betta-0003.jpeg'
  },
  {
    id: 'BETTA 0004',
    name: 'White Rose',
    type: 'Male Betta — Plakat',
    category: 'plakat',
    price: '₹999',
    origin: 'Thailand',
    image: 'images/betta-0004.jpeg'
  },
  {
    id: 'BETTA 0005',
    name: 'Galaxy Fire',
    type: 'Male Betta — Galaxy Koi Plakat',
    category: 'galaxy',
    price: '₹2,499',
    origin: 'Indonesia',
    image: 'images/betta-0005.jpeg'
  },
  {
    id: 'BETTA 0006',
    name: 'Neon Galaxy',
    type: 'Male Betta — Galaxy Koi Plakat',
    category: 'galaxy',
    price: '₹2,299',
    origin: 'Indonesia',
    image: 'images/betta-0006.jpeg'
  },
  {
    id: 'BETTA 0007',
    name: 'Patriot Koi',
    type: 'Male Betta — Halfmoon Plakat',
    category: 'halfmoon',
    price: '₹1,999',
    origin: 'Thailand',
    image: 'images/betta-0007.jpeg'
  },
  {
    id: 'BETTA 0008',
    name: 'Red Galaxy',
    type: 'Male Betta — Galaxy Koi Plakat',
    category: 'galaxy',
    price: '₹2,199',
    origin: 'Indonesia',
    image: 'images/betta-0008.jpeg'
  },
  {
    id: 'BETTA 0009',
    name: 'Koi Candy',
    type: 'Male Betta — Halfmoon',
    category: 'halfmoon',
    price: '₹1,899',
    origin: 'Thailand',
    image: 'images/betta-0009.jpeg'
  },
  {
    id: 'BETTA 0010',
    name: 'Black Galaxy',
    type: 'Male Betta — Galaxy Koi Plakat',
    category: 'galaxy',
    price: '₹2,599',
    origin: 'Indonesia',
    image: 'images/betta-0010.jpeg'
  },
  {
    id: 'BETTA 0011',
    name: 'Blue Sapphire',
    type: 'Male Betta — Halfmoon',
    category: 'halfmoon',
    price: '₹1,699',
    origin: 'Vietnam',
    image: 'images/betta-0011.jpeg'
  },
  {
    id: 'BETTA 0012',
    name: 'Gold Mustard',
    type: 'Male Betta — Halfmoon',
    category: 'halfmoon',
    price: '₹1,599',
    origin: 'Thailand',
    image: 'images/betta-0012.jpeg'
  },
  {
    id: 'BETTA 0013',
    name: 'Dark Samurai',
    type: 'Male Betta — Plakat',
    category: 'plakat',
    price: '₹1,399',
    origin: 'Thailand',
    image: 'images/betta-0013.jpeg'
  },
  {
    id: 'BETTA 0014',
    name: 'Royal Blue Moon',
    type: 'Male Betta — Halfmoon',
    category: 'halfmoon',
    price: '₹1,899',
    origin: 'Thailand',
    image: 'images/betta-0014.jpeg'
  },
  {
    id: 'BETTA 0015',
    name: 'Sunrise Koi',
    type: 'Male Betta — Halfmoon Plakat',
    category: 'halfmoon',
    price: '₹1,599',
    origin: 'Indonesia',
    image: 'images/betta-0015.jpeg'
  },
  {
    id: 'BETTA 0016',
    name: 'Full Red',
    type: 'Male Betta — Halfmoon',
    category: 'halfmoon',
    price: '₹1,499',
    origin: 'Thailand',
    image: 'images/betta-0016.jpeg'
  },
  {
    id: 'BETTA 0017',
    name: 'Nemo Rainbow',
    type: 'Male Betta — Galaxy Koi',
    category: 'galaxy',
    price: '₹2,399',
    origin: 'Indonesia',
    image: 'images/betta-0017.jpeg'
  },
  {
    id: 'BETTA 0018',
    name: 'Marble Storm',
    type: 'Male Betta — Halfmoon Plakat',
    category: 'halfmoon',
    price: '₹1,799',
    origin: 'Vietnam',
    image: 'images/betta-0018.jpeg'
  }
];

// ── Helper: Build WhatsApp URL ──
function getWhatsAppUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// ── WhatsApp SVG Icon (reusable) ──
const whatsappSVG = `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`;

// ══════════════════════════════════════
// Initialization on DOM Ready
// ══════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initBubbles();
  initNavbar();
  initMobileMenu();
  renderFishCards();
  initFilters();
  initModal();
  initScrollReveal();
  initBackToTop();
  updateAllWhatsAppLinks();

  // ── Interactive Delight Features ──
  initBubbleClickEffect();
  injectTankCardBubbles();
});

// ── Preloader ──
function initPreloader() {
  const preloader = document.getElementById('preloader');
  window.addEventListener('load', () => {
    setTimeout(() => {
      preloader.classList.add('hidden');
    }, 2000);
  });
  // Fallback: hide after 4s regardless
  setTimeout(() => {
    preloader.classList.add('hidden');
  }, 4000);
}

// ── Ambient Bubbles ──
function initBubbles() {
  const container = document.getElementById('bubblesContainer');
  const bubbleCount = 15;

  for (let i = 0; i < bubbleCount; i++) {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    const size = Math.random() * 60 + 20;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${Math.random() * 100}%`;
    bubble.style.animationDuration = `${Math.random() * 15 + 10}s`;
    bubble.style.animationDelay = `${Math.random() * 10}s`;
    container.appendChild(bubble);
  }
}

// ── Navbar scroll effect ──
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });

  // Smooth scroll for nav links & active state
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
      // Update active
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      // Close mobile menu
      document.getElementById('navLinks').classList.remove('open');
      document.getElementById('navToggle').classList.remove('active');
    });
  });

  // Update active link on scroll
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 150;
      if (window.scrollY >= top) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });
}

// ── Mobile Menu ──
function initMobileMenu() {
  const toggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    navLinks.classList.toggle('open');
  });
}

// ── Render Fish Cards ──
function renderFishCards(filter = 'all') {
  const grid = document.getElementById('galleryGrid');
  grid.innerHTML = '';

  const filtered = filter === 'all'
    ? fishCollection
    : fishCollection.filter(f => f.category === filter);

  filtered.forEach((fish, index) => {
    const card = document.createElement('div');
    card.classList.add('fish-card');
    card.dataset.category = fish.category;
    card.style.animationDelay = `${index * 0.05}s`;

    const buyUrl = getWhatsAppUrl(`Hi! I'm interested in ${fish.id} — ${fish.name} (${fish.price}). Is it still available?`);

    card.innerHTML = `
      <div class="fish-card-image">
        <img src="${fish.image}" alt="${fish.name} — ${fish.type}" loading="lazy">
        <span class="fish-card-badge">${fish.id}</span>
        <button class="fish-card-favorite" aria-label="Add to favorites" onclick="event.stopPropagation()">♡</button>
      </div>
      <div class="fish-card-body">
        <div class="fish-card-id">${fish.id}</div>
        <h3 class="fish-card-name">${fish.name}</h3>
        <p class="fish-card-type">${fish.type}</p>
        <div class="fish-card-footer">
          <div class="fish-card-price">${fish.price}</div>
          <a href="${buyUrl}" class="fish-card-buy" target="_blank" rel="noopener" onclick="event.stopPropagation()">
            ${whatsappSVG}
            Buy
          </a>
        </div>
      </div>
    `;

    // Click card → open modal
    card.addEventListener('click', () => openModal(fish));

    // Favorite toggle
    const favBtn = card.querySelector('.fish-card-favorite');
    favBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      favBtn.textContent = favBtn.textContent === '♡' ? '♥' : '♡';
      favBtn.style.color = favBtn.textContent === '♥' ? '#ff4444' : '';
    });

    grid.appendChild(card);
  });

  // Re-trigger reveal animation for dynamically added cards
  setTimeout(() => {
    grid.querySelectorAll('.fish-card').forEach(card => {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    });
  }, 50);
}

// ── Filters ──
function initFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;

      // Fade out current cards
      const grid = document.getElementById('galleryGrid');
      grid.style.opacity = '0';
      grid.style.transform = 'translateY(20px)';

      setTimeout(() => {
        renderFishCards(filter);
        grid.style.opacity = '1';
        grid.style.transform = 'translateY(0)';
      }, 300);
    });
  });

  // Add transition to grid
  const grid = document.getElementById('galleryGrid');
  grid.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
}

// ── Modal ──
function initModal() {
  const overlay = document.getElementById('fishModal');
  const closeBtn = document.getElementById('fishModalClose');

  closeBtn.addEventListener('click', closeModal);

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

function openModal(fish) {
  const overlay = document.getElementById('fishModal');
  document.getElementById('modalImage').src = fish.image;
  document.getElementById('modalImage').alt = fish.name;
  document.getElementById('modalId').textContent = fish.id;
  document.getElementById('modalName').textContent = fish.name;
  document.getElementById('modalType').textContent = fish.type;
  document.getElementById('modalPrice').innerHTML = `${fish.price} <small>per fish</small>`;
  document.getElementById('modalOrigin').textContent = fish.origin;

  // Capitalize category for display
  const categoryDisplay = fish.category.charAt(0).toUpperCase() + fish.category.slice(1);
  document.getElementById('modalCategory').textContent = categoryDisplay;

  const msg = `Hi! I'm interested in ${fish.id} — ${fish.name} (${fish.price}). Is it still available? I'd like to know more about this betta.`;
  document.getElementById('modalWhatsapp').href = getWhatsAppUrl(msg);

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const overlay = document.getElementById('fishModal');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

// ── Scroll Reveal ──
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  reveals.forEach(el => observer.observe(el));
}

// ── Back to Top ──
function initBackToTop() {
  const btn = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 600) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ── Update all WhatsApp links with the configured number ──
function updateAllWhatsAppLinks() {
  // Nav WhatsApp button
  const navWa = document.getElementById('navWhatsapp');
  if (navWa) {
    navWa.href = getWhatsAppUrl("Hi! I visited The Betta Gallery website. I'd like to know about available bettas.");
  }

  // Floating WhatsApp button
  const floatWa = document.getElementById('whatsappFloat');
  if (floatWa) {
    floatWa.href = getWhatsAppUrl("Hi! I visited The Betta Gallery website and I'm interested in your betta collection.");
  }

  // Update all footer & hero WhatsApp links
  document.querySelectorAll('a[href*="wa.me/919999999999"]').forEach(link => {
    const url = new URL(link.href);
    const text = url.searchParams.get('text') || "Hi! I'm interested in your betta collection.";
    link.href = getWhatsAppUrl(text);
  });
}

/* ══════════════════════════════════════════════
   🫧  FEATURE 2 — UNDERWATER AIR BUBBLES ON CLICK
   Replaces rings with animated air bubbles floating up
   ══════════════════════════════════════════════ */
function initBubbleClickEffect() {
  document.addEventListener('click', (e) => {
    spawnClickBubbles(e.clientX, e.clientY);
  });
}

function spawnClickBubbles(x, y) {
  const bubbleCount = Math.floor(Math.random() * 3) + 5; // 5 to 7 bubbles
  for (let i = 0; i < bubbleCount; i++) {
    const bubble = document.createElement('div');
    bubble.className = 'click-air-bubble';

    const size = Math.floor(Math.random() * 22) + 14; // 14px to 36px
    const offsetX = (Math.random() - 0.5) * 36;
    const offsetY = (Math.random() - 0.5) * 20;
    const driftX = (Math.random() - 0.5) * 55;
    const riseDist = -(Math.floor(Math.random() * 70) + 75);
    const duration = 0.7 + Math.random() * 0.4;
    const delay = Math.random() * 0.12;

    bubble.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${x + offsetX - size / 2}px;
      top: ${y + offsetY - size / 2}px;
      --drift-x: ${driftX}px;
      --rise-dist: ${riseDist}px;
      animation-duration: ${duration}s;
      animation-delay: ${delay}s;
    `;

    document.body.appendChild(bubble);

    setTimeout(() => {
      bubble.remove();
    }, (duration + delay) * 1000 + 100);
  }
}

/* ══════════════════════════════════════════════
   🐠  FEATURE 4 — INJECT TANK BUBBLES INTO CARDS
   Adds animated bubbles inside each fish card
   ══════════════════════════════════════════════ */
function injectTankCardBubbles() {
  function addBubblesToCards() {
    document.querySelectorAll('.fish-card').forEach(card => {
      if (card.querySelector('.tank-card-bubbles')) return;
      const bubbleContainer = document.createElement('div');
      bubbleContainer.className = 'tank-card-bubbles';
      bubbleContainer.innerHTML = `
        <div class="card-bubble"></div>
        <div class="card-bubble"></div>
        <div class="card-bubble"></div>
        <div class="card-bubble"></div>
      `;
      card.appendChild(bubbleContainer);
    });
  }

  addBubblesToCards();

  const grid = document.getElementById('galleryGrid');
  if (grid) {
    const observer = new MutationObserver(() => {
      setTimeout(addBubblesToCards, 60);
    });
    observer.observe(grid, { childList: true, subtree: false });
  }
}

