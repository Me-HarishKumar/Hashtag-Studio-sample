/**
 * ═══════════════════════════════════════════════════════════
 * HASHTAG PHOTOGRAPHY — Premium Website JavaScript
 * Vanilla ES6+ · Mobile-first · Performance-optimized
 * ═══════════════════════════════════════════════════════════
 */

// ─── Configuration ───
const CONFIG = {
  businessName: 'Hashtag Photography',
  phone: '+919600078892',
  phoneDisplay: '+91 96000 78892',
  whatsappNumber: '919600078892',
  whatsappMessage: "Hi Hashtag Photography, I'm interested in booking a photoshoot. I'd like to know more about your services and pricing.",
  location: 'W45V+92, Tambaram, Tamil Nadu, India',
  landmark: 'Near Bharath University, Tambaram, Tamil Nadu 600073',
  googleMapsUrl: 'https://www.google.com/maps/search/W45V%2B92+Tambaram+Tamil+Nadu+India',
  googleRating: '5.0',
  googleReviews: '72',
  established: '2026',
};

// ─── Utilities ───
function throttle(fn, ms) {
  let last = 0;
  return function (...args) {
    const now = Date.now();
    if (now - last >= ms) {
      last = now;
      fn.apply(this, args);
    }
  };
}

// ─── App Init ───
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initScrollAnimations();
  initPortfolioFilter();
  initLightbox();
  initReviewCarousel();
  initSmoothScroll();
  initParallax();
});

// ═══════════════════════════════════════════════════════════
// NAVIGATION
// ═══════════════════════════════════════════════════════════
function initNavigation() {
  const navbar = document.getElementById('navbar');
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('navMenu');
  const links = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  // Scroll detection
  const onScroll = throttle(() => {
    if (window.scrollY > 60) {
      navbar.classList.add('navbar--scrolled');
    } else {
      navbar.classList.remove('navbar--scrolled');
    }

    // Active section highlighting
    const scrollY = window.pageYOffset + 120;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      if (scrollY >= top && scrollY < top + height) {
        links.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          }
        });
      }
    });
  }, 80);

  window.addEventListener('scroll', onScroll, { passive: true });

  // Mobile menu
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const isOpen = menu.classList.contains('active');
      menu.classList.toggle('active');
      toggle.classList.toggle('active');
      toggle.setAttribute('aria-expanded', String(!isOpen));
      document.body.classList.toggle('no-scroll', !isOpen);
    });

    links.forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('active');
        toggle.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('no-scroll');
      });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (menu.classList.contains('active') &&
          !menu.contains(e.target) &&
          !toggle.contains(e.target)) {
        menu.classList.remove('active');
        toggle.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('no-scroll');
      }
    });
  }
}

// ═══════════════════════════════════════════════════════════
// SCROLL ANIMATIONS (IntersectionObserver)
// ═══════════════════════════════════════════════════════════
function initScrollAnimations() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay;
        if (delay) {
          const ms = parseInt(delay) * 100;
          entry.target.style.transitionDelay = ms + 'ms';
        }
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -50px 0px'
  });

  elements.forEach(el => observer.observe(el));
}

// ═══════════════════════════════════════════════════════════
// PORTFOLIO FILTER
// ═══════════════════════════════════════════════════════════
function initPortfolioFilter() {
  const buttons = document.querySelectorAll('.filter-btn');
  const items = document.querySelectorAll('.portfolio-item');
  if (!buttons.length || !items.length) return;

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active state
      buttons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filter = btn.dataset.filter;

      items.forEach(item => {
        const category = item.dataset.category;
        if (filter === 'all' || category === filter) {
          item.classList.remove('hidden');
          item.style.opacity = '0';
          item.style.transform = 'scale(0.95)';
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              item.style.opacity = '1';
              item.style.transform = 'scale(1)';
            });
          });
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.95)';
          setTimeout(() => item.classList.add('hidden'), 400);
        }
      });
    });
  });
}

// ═══════════════════════════════════════════════════════════
// LIGHTBOX
// ═══════════════════════════════════════════════════════════
function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  const lbImage = document.getElementById('lightboxImage');
  const lbClose = document.getElementById('lightboxClose');
  const lbPrev = document.getElementById('lightboxPrev');
  const lbNext = document.getElementById('lightboxNext');
  const lbCounter = document.getElementById('lightboxCounter');
  if (!lightbox) return;

  const portfolioItems = document.querySelectorAll('.portfolio-item');
  let currentIndex = 0;
  let visibleItems = [];

  function getVisibleItems() {
    return Array.from(portfolioItems).filter(
      item => !item.classList.contains('hidden')
    );
  }

  function openLightbox(index) {
    visibleItems = getVisibleItems();
    currentIndex = index;
    updateLightbox();
    lightbox.removeAttribute('hidden');
    requestAnimationFrame(() => {
      lightbox.classList.add('active');
    });
    document.body.classList.add('no-scroll');
    lbClose.focus();
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.classList.remove('no-scroll');
    setTimeout(() => {
      lightbox.setAttribute('hidden', '');
    }, 400);
  }

  function updateLightbox() {
    if (!visibleItems[currentIndex]) return;
    const item = visibleItems[currentIndex];
    const fullSrc = item.dataset.full;
    const img = item.querySelector('img');
    const alt = img ? img.alt : 'Portfolio image';

    lbImage.style.opacity = '0';
    setTimeout(() => {
      lbImage.src = fullSrc || (img ? img.src : '');
      lbImage.alt = alt;
      lbImage.onload = () => { lbImage.style.opacity = '1'; };
    }, 150);

    lbCounter.textContent = `${currentIndex + 1} / ${visibleItems.length}`;
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % visibleItems.length;
    updateLightbox();
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + visibleItems.length) % visibleItems.length;
    updateLightbox();
  }

  // Click handlers
  portfolioItems.forEach(item => {
    item.addEventListener('click', () => {
      visibleItems = getVisibleItems();
      const idx = visibleItems.indexOf(item);
      if (idx > -1) openLightbox(idx);
    });
  });

  lbClose.addEventListener('click', closeLightbox);
  lbPrev.addEventListener('click', (e) => { e.stopPropagation(); prevImage(); });
  lbNext.addEventListener('click', (e) => { e.stopPropagation(); nextImage(); });

  // Close on overlay click (not on image)
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target.classList.contains('lightbox-content')) {
      closeLightbox();
    }
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  });

  // Touch swipe for mobile
  let touchStartX = 0;
  lightbox.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  lightbox.addEventListener('touchend', (e) => {
    const diff = e.changedTouches[0].screenX - touchStartX;
    if (Math.abs(diff) > 50) {
      if (diff < 0) nextImage();
      else prevImage();
    }
  }, { passive: true });
}

// ═══════════════════════════════════════════════════════════
// REVIEW CAROUSEL
// ═══════════════════════════════════════════════════════════
function initReviewCarousel() {
  const track = document.getElementById('reviewsTrack');
  const dotsContainer = document.getElementById('carouselDots');
  const prevBtn = document.getElementById('reviewPrev');
  const nextBtn = document.getElementById('reviewNext');
  if (!track) return;

  const cards = Array.from(track.children);
  const totalCards = cards.length;
  let currentSlide = 0;
  let autoplayInterval;
  let cardsPerView = getCardsPerView();

  function getCardsPerView() {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  }

  function getTotalSlides() {
    return Math.max(1, totalCards - cardsPerView + 1);
  }

  function updateCarousel() {
    const percentage = (currentSlide * 100) / totalCards;
    track.style.transform = `translateX(-${percentage}%)`;
    updateDots();
  }

  // Create dots
  function createDots() {
    if (!dotsContainer) return;
    dotsContainer.innerHTML = '';
    const totalSlides = getTotalSlides();
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement('button');
      dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', `Go to review ${i + 1}`);
      dot.setAttribute('role', 'tab');
      dot.addEventListener('click', () => goToSlide(i));
      dotsContainer.appendChild(dot);
    }
  }

  function updateDots() {
    if (!dotsContainer) return;
    const dots = dotsContainer.querySelectorAll('.carousel-dot');
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentSlide);
    });
  }

  function goToSlide(index) {
    const totalSlides = getTotalSlides();
    currentSlide = Math.max(0, Math.min(index, totalSlides - 1));
    updateCarousel();
    resetAutoplay();
  }

  function nextSlide() {
    const totalSlides = getTotalSlides();
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
  }

  function prevSlide() {
    const totalSlides = getTotalSlides();
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
  }

  function startAutoplay() {
    autoplayInterval = setInterval(nextSlide, 5000);
  }

  function resetAutoplay() {
    clearInterval(autoplayInterval);
    startAutoplay();
  }

  // Event listeners
  if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); resetAutoplay(); });
  if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); resetAutoplay(); });

  // Pause on hover
  const wrapper = track.closest('.reviews-carousel-wrapper');
  if (wrapper) {
    wrapper.addEventListener('mouseenter', () => clearInterval(autoplayInterval));
    wrapper.addEventListener('mouseleave', startAutoplay);
  }

  // Touch swipe
  let touchStartX = 0;
  track.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    clearInterval(autoplayInterval);
  }, { passive: true });

  track.addEventListener('touchend', (e) => {
    const diff = e.changedTouches[0].screenX - touchStartX;
    if (Math.abs(diff) > 50) {
      if (diff < 0) nextSlide();
      else prevSlide();
    }
    startAutoplay();
  }, { passive: true });

  // Resize handler
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      cardsPerView = getCardsPerView();
      const totalSlides = getTotalSlides();
      if (currentSlide >= totalSlides) currentSlide = totalSlides - 1;
      createDots();
      updateCarousel();
    }, 200);
  });

  // Init
  createDots();
  updateCarousel();
  startAutoplay();
}

// ═══════════════════════════════════════════════════════════
// SMOOTH SCROLL
// ═══════════════════════════════════════════════════════════
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const navHeight = document.getElementById('navbar')?.offsetHeight || 0;
        const top = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

// ═══════════════════════════════════════════════════════════
// PARALLAX (subtle hero background)
// ═══════════════════════════════════════════════════════════
function initParallax() {
  const heroBg = document.querySelector('.hero-bg');
  if (!heroBg || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const onScroll = throttle(() => {
    const scrolled = window.pageYOffset;
    if (scrolled < window.innerHeight) {
      heroBg.style.transform = `scale(${1 + scrolled * 0.0001}) translateY(${scrolled * 0.3}px)`;
    }
  }, 16);

  window.addEventListener('scroll', onScroll, { passive: true });
}
