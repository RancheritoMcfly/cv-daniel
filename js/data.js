/* ============================================================
   DATOS DEL CV
   Este es el único archivo que necesitas tocar para actualizar
   tu experiencia, formación, habilidades e idiomas.
   ============================================================ */

// ---- HABILIDADES TÉCNICAS (valor sobre 100) ----
const SKILLS = [
  { name: "SQL / MySQL",                 level: 90 },
  { name: "Análisis de datos",           level: 88 },
  { name: "Excel",                       level: 90 },
  { name: "Python",                      level: 78 },
  { name: "Power BI",                    level: 75 },
  { name: "HTML / CSS",                  level: 80 },
  { name: "JavaScript",                  level: 72 },
  { name: "Administración Linux/Ubuntu", level: 70 },
  { name: "Git / GitHub",                level: 72 },
  { name: "Desarrollo web (Django/Node)",level: 75 },
];

// ---- IDIOMAS (valor sobre 100) ----
const LANGS = [
  {
    name: "Inglés",
    rows: [
      { skill: "Conversación", value: 75 },
      { skill: "Lectura",      value: 75 },
      { skill: "Redacción",    value: 60 },
    ],
  },
];

// ---- EXPERIENCIA LABORAL (orden: más reciente primero) ----
const JOBS = [
  {
    dates: "Ago 2023 — Actualidad",
    current: true,
    sector: "Público",
    role: "Analista Técnico de Base de Datos",
    org: "Secretaría de Turismo · Gobierno del Estado de Guanajuato",
    desc: "Genero reportes, tableros y fichas a partir de bases de datos MySQL para la toma de decisiones. Realizo análisis y procesamiento de información cuantitativa, diseño y calculo indicadores, y ejecuto labores de limpieza, depuración y estandarización de datos. Desarrollo y mantengo servicios web institucionales (Django, Node.js) y administro un servidor Linux/Ubuntu.",
  },
  {
    dates: "Jun 2023 — Jul 2023",
    sector: "Privado",
    role: "Ingeniero de Soporte B",
    org: "Bodesa S.A.",
    desc: "Mantenimiento preventivo y correctivo a equipos, puntos de venta e impresoras. Seguimiento a tickets de atención a usuarios en plataforma SAP, con apego a tiempos de respuesta y canalización al área correspondiente.",
  },
  {
    dates: "Ene 2023 — Jun 2023",
    sector: "Privado",
    role: "Desarrollador Frontend · Analista de datos",
    org: "UpVent Technologies",
    desc: "Desarrollo de aplicativos web con JavaScript, HTML y CSS. Análisis de información con MySQL, PostgreSQL, Python, R, Power BI y Excel. Soporte a sistemas, portales y bases de datos.",
  },
  {
    dates: "Sep 2015 — Ago 2018",
    sector: "Público",
    role: "Enlace de Planeación, Calidad y Ambiental",
    org: "ENMS Moroleón · Universidad de Guanajuato",
    desc: "Coordinación de procesos de capacitación, calidad del servicio y protección civil. Gestión de usuarios y materiales en Moodle, soporte a infraestructura escolar (redes, CCTV) e integración de indicadores y evidencias para auditorías.",
  },
  {
    dates: "Jun 2014 — Ago 2015",
    sector: "Privado",
    role: "Ejecutivo Administrativo · RH",
    org: "Banco Santander S.A.",
    desc: "Administración de personal de sucursal: control y resguardo de expedientes en SAP, seguimiento a procesos de capacitación y desarrollo, e inducción de personal de nuevo ingreso.",
  },
  {
    dates: "Jun 2013 — Dic 2013",
    sector: "Público",
    role: "Promotor · Capacitación",
    org: "Cruzada Nacional Contra el Hambre",
    desc: "Capacitación de personas para la formación de brigadas comunales en comunidades del estado.",
  },
];

// ---- FORMACIÓN ACADÉMICA (orden cronológico: cuenta tu historia) ----
const EDUCATION = [
  {
    level: "Licenciatura",
    deg: "Ciencias y Técnicas de la Comunicación",
    inst: "Universidad del Valle de Atemajac (UNIVA), Guadalajara",
    period: "2010 — 2012 · Título",
  },
  {
    level: "Maestría",
    deg: "Desarrollo Organizacional",
    inst: "Universidad del Valle de Atemajac (UNIVA), Guadalajara",
    period: "2013 — 2014 · Título",
  },
  {
    level: "Licenciatura",
    deg: "Sistemas de Información Administrativa",
    inst: "Universidad de Guanajuato",
    period: "2018 — 2023 · Título",
  },
];
