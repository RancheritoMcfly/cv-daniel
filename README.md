# CV · Daniel Michael Lugo Meléndez

Landing page de mi currículum, hecha con **HTML, CSS y JavaScript puro** (sin frameworks ni build). Incluye gráficos de barras animados de habilidades, timeline de experiencia y diseño responsivo.

🔗 **Ver en línea:** https://TU-USUARIO.github.io/cv-daniel/

---

## 🗂️ Estructura del proyecto

```
cv-daniel/
├── index.html          # Estructura de la página
├── css/
│   └── styles.css      # Todos los estilos
├── js/
│   ├── data.js         # ← AQUÍ edito el CV (experiencia, formación, skills)
│   ├── skills.js       # Render y animación de barras
│   └── main.js         # Timeline, educación, nav, contadores
└── README.md
```

**Para actualizar la información solo edito `js/data.js`.**.

---

## 💻 Clonar y trabajar en casa

```bash
# 1. Clonar el repositorio
git clone https://github.com/TU-USUARIO/cv-daniel.git

# 2. Entrar a la carpeta
cd cv-daniel

# 3. Abrir en VS Code
code .
```

### Ver los cambios en tiempo real

No necesitas servidor, pero para ver los cambios al instante mientras editas, usa la extensión **Live Server** de VS Code:

1. En VS Code instala la extensión **Live Server** (de Ritwick Dey).
2. Clic derecho en `index.html` → **Open with Live Server**.
3. Se abre en el navegador y se recarga solo cada vez que guardas.

> Alternativa sin extensión: simplemente abre `index.html` con doble clic en el navegador y recarga manualmente con F5.

---

## ✏️ Cómo editar tu CV

Abre `js/data.js`. Está dividido en bloques claros:

- **`SKILLS`** — habilidades técnicas y su nivel (0 a 100).
- **`LANGS`** — idiomas.
- **`JOBS`** — experiencia laboral (el más reciente va primero).
- **`EDUCATION`** — formación académica.

Ejemplo para agregar una habilidad:

```js
const SKILLS = [
  { name: "SQL / MySQL", level: 90 },
  { name: "Docker",      level: 65 },   // ← nueva línea
];
```

Guardas, recargas, y la barra aparece animada automáticamente.

---

## 🚀 Subir cambios a GitHub

```bash
git add .
git commit -m "Actualizo experiencia y habilidades"
git push origin main
```

GitHub Pages vuelve a publicar solo en 1–2 minutos.

---

## 🌐 Cómo se publicó en GitHub Pages

1. Repositorio en GitHub llamado `cv-daniel` (público).
2. **Settings** → **Pages**.
3. En *Source* elegir **Deploy from a branch**.
4. Branch: **main** · carpeta: **/ (root)** · **Save**.
5. Esperar 1–2 min. La URL queda como
   `https://TU-USUARIO.github.io/cv-daniel/`

---

## 🛠️ Tecnologías

HTML5 · CSS3 (Grid, Flexbox, variables) · JavaScript (IntersectionObserver para animaciones) · Tipografías Fraunces, Space Grotesk y JetBrains Mono.

---

© Daniel Michael Lugo Meléndez
