/* ============================================================
   Lógica general: timeline, educación, nav, contadores, reveal
   ============================================================ */

function renderTimeline() {
  const wrap = document.getElementById("timeline");
  if (!wrap) return;
  wrap.innerHTML = JOBS.map(j => `
    <article class="job reveal">
      <div class="job__meta">
        <span class="job__dates">${j.dates}</span>
        <span class="job__sector">${j.sector}</span>
        ${j.current ? '<span class="job__current">Actual</span>' : ""}
      </div>
      <div class="job__body">
        <h3 class="job__role">${j.role}</h3>
        <p class="job__org">${j.org}</p>
        <p class="job__desc">${j.desc}</p>
      </div>
    </article>
  `).join("");
}

function renderEducation() {
  const wrap = document.getElementById("edu");
  if (!wrap) return;
  wrap.innerHTML = EDUCATION.map(e => `
    <article class="edu__card reveal">
      <span class="edu__level">${e.level}</span>
      <h3 class="edu__deg">${e.deg}</h3>
      <p class="edu__inst">${e.inst}</p>
      <p class="edu__period">${e.period}</p>
    </article>
  `).join("");
}

// Menú móvil
function initNav() {
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  if (!toggle || !links) return;
  toggle.addEventListener("click", () => links.classList.toggle("open"));
  links.querySelectorAll("a").forEach(a =>
    a.addEventListener("click", () => links.classList.remove("open"))
  );
}

// Contadores animados del hero
function animateCounters() {
  const nums = document.querySelectorAll(".stat__num");
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.getAttribute("data-count"), 10);
      const suffix = el.getAttribute("data-suffix") || "";
      let cur = 0;
      const step = Math.max(1, Math.ceil(target / 30));
      const tick = () => {
        cur += step;
        if (cur >= target) { el.textContent = target + suffix; }
        else { el.textContent = cur + suffix; requestAnimationFrame(tick); }
      };
      tick();
      io.unobserve(el);
    });
  }, { threshold: 0.6 });
  nums.forEach(n => io.observe(n));
}

// Reveal al hacer scroll
function initReveal() {
  const els = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  els.forEach(el => io.observe(el));
}

document.addEventListener("DOMContentLoaded", () => {
  renderTimeline();
  renderEducation();
  initNav();
  animateCounters();
  // reveal se inicia después de render para alcanzar los nodos nuevos
  setTimeout(initReveal, 50);
  document.getElementById("year").textContent = new Date().getFullYear();
});
