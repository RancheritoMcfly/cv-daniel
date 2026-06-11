/* ============================================================
   Renderiza barras de habilidades e idiomas desde data.js
   ============================================================ */

function renderSkills() {
  const wrap = document.getElementById("skillsChart");
  if (!wrap) return;
  wrap.innerHTML = SKILLS.map(s => `
    <div class="skill" data-level="${s.level}">
      <div class="skill__top">
        <span class="skill__name">${s.name}</span>
        <span class="skill__val">${s.level}</span>
      </div>
      <div class="skill__track">
        <div class="skill__fill"></div>
      </div>
    </div>
  `).join("");
}

function renderLangs() {
  const wrap = document.getElementById("langsChart");
  if (!wrap) return;
  wrap.innerHTML = LANGS.map(l => `
    <div class="lang">
      <div class="lang__name">${l.name}</div>
      <div class="lang__rows">
        ${l.rows.map(r => `
          <div class="lang__row" data-level="${r.value}">
            <span class="lang__skill">${r.skill}</span>
            <div class="lang__track"><div class="lang__fill"></div></div>
            <span class="lang__val">${r.value}</span>
          </div>
        `).join("")}
      </div>
    </div>
  `).join("");
}

// Anima las barras cuando entran a la pantalla
function animateBarsOnView() {
  const fills = [
    ...document.querySelectorAll(".skill"),
    ...document.querySelectorAll(".lang__row"),
  ];
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const level = entry.target.getAttribute("data-level");
        const fill = entry.target.querySelector(".skill__fill, .lang__fill");
        if (fill) fill.style.width = level + "%";
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });
  fills.forEach(el => io.observe(el));
}

document.addEventListener("DOMContentLoaded", () => {
  renderSkills();
  renderLangs();
  animateBarsOnView();
});
