/* Vantage Surplus Traders — main.js */
document.addEventListener('DOMContentLoaded', () => {

  /* ---- Navbar scroll state + mobile toggle ---- */
  const navbar = document.querySelector('.navbar');
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  const backTop = document.querySelector('.back-top');

  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 12);
    backTop && backTop.classList.toggle('show', window.scrollY > 500);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      navToggle.classList.toggle('active');
    });
    navLinks.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => navLinks.classList.remove('open'))
    );
  }

  /* ---- Back to top ---- */
  if (backTop) {
    backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  /* ---- Scroll reveal ---- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('visible'));
  }

  /* ---- Animated stat counters ---- */
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length) {
    const animateCount = (el) => {
      const target = parseFloat(el.dataset.count);
      const suffix = el.dataset.suffix || '';
      const decimals = el.dataset.decimals ? parseInt(el.dataset.decimals) : 0;
      const duration = 1600;
      const start = performance.now();
      const step = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = target * eased;
        el.textContent = value.toFixed(decimals) + suffix;
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    const counterIO = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          counterIO.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(el => counterIO.observe(el));
  }

  /* ---- Testimonial slider ---- */
  const slides = document.querySelectorAll('.testi-slide');
  const dotsWrap = document.querySelector('.testi-dots');
  if (slides.length && dotsWrap) {
    let active = 0;
    dotsWrap.innerHTML = '';
    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => setSlide(i));
      dotsWrap.appendChild(dot);
    });
    const dots = dotsWrap.querySelectorAll('button');
    function setSlide(i) {
      slides[active].classList.remove('active');
      dots[active].classList.remove('active');
      active = i;
      slides[active].classList.add('active');
      dots[active].classList.add('active');
    }
    setInterval(() => setSlide((active + 1) % slides.length), 5000);
  }

  /* ---- Product tabs (Buy page) ---- */
  const tabBtns = document.querySelectorAll('.tab-btn');
  if (tabBtns.length) {
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const target = btn.dataset.tab;
        document.querySelectorAll('.product-grid[data-panel]').forEach(panel => {
          panel.style.display = panel.dataset.panel === target ? 'grid' : 'none';
        });
      });
    });
  }

  /* ---- FAQ accordion ---- */
  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-q');
    q && q.addEventListener('click', () => {
      const wasOpen = item.classList.contains('open');
      item.parentElement.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });

  /* ---- Contact / quote form (no backend — front-end validation + success state) ---- */
  const quoteForm = document.querySelector('#quoteForm');
  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!quoteForm.checkValidity()) {
        quoteForm.reportValidity();
        return;
      }
      const success = document.querySelector('#formSuccess');
      quoteForm.reset();
      if (success) {
        success.classList.add('show');
        success.scrollIntoView({ behavior: 'smooth', block: 'center' });
        setTimeout(() => success.classList.remove('show'), 6000);
      }
    });
  }

  /* ---- Newsletter forms ---- */
  document.querySelectorAll('.newsletter-form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button');
      const original = btn.textContent;
      btn.textContent = 'Subscribed ✓';
      form.querySelector('input').value = '';
      setTimeout(() => (btn.textContent = original), 2500);
    });
  });

  /* ---- Help modal (homepage) ---- */
  const helpOverlay = document.getElementById('helpModalOverlay');
  if (helpOverlay) {
    const helpClose = document.getElementById('helpModalClose');
    const openHelpModal = () => helpOverlay.classList.add('show');
    const closeHelpModal = () => helpOverlay.classList.remove('show');

    if (!sessionStorage.getItem('helpModalShown')) {
      setTimeout(() => {
        openHelpModal();
        sessionStorage.setItem('helpModalShown', '1');
      }, 4000);
    }

    helpClose && helpClose.addEventListener('click', closeHelpModal);
    helpOverlay.addEventListener('click', (e) => {
      if (e.target === helpOverlay) closeHelpModal();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeHelpModal();
    });
  }

  /* ---- Current year ---- */
  document.querySelectorAll('.current-year').forEach(el => el.textContent = new Date().getFullYear());
});
