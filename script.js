const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const dashboard = document.querySelector(".category-dashboard");
const categoryCards = document.querySelectorAll("[data-category]");
const gallerySection = document.querySelector("#galeria");
const metricCards = document.querySelectorAll("[data-product-index]");

const categoryContent = {
  corporativo: {
    title: "Corporativo",
    copy: "Piezas sobrias y memorables para empresas, premiaciones, equipos y regalos ejecutivos.",
    theme: "theme-corporate",
    logo: "assets/logo-corporativo.jpg",
    products: [
      {
        title: "Galardones",
        label: "Producto foco",
        showcaseTitle: "Galardon corporativo",
        showcaseCopy: "Reconocimientos con logo, nombre y acabado premium para equipos o hitos internos.",
        tags: ["Reconocimiento", "Marca", "Premium"],
      },
      {
        title: "Trofeos",
        label: "Ideal para",
        showcaseTitle: "Trofeo de premiacion",
        showcaseCopy: "Piezas con presencia para ceremonias, rankings, concursos y eventos empresariales.",
        tags: ["Premiaciones", "Equipos", "Eventos"],
      },
      {
        title: "NFC",
        label: "Extra posible",
        showcaseTitle: "Objeto NFC de marca",
        showcaseCopy: "Productos que conectan a perfiles, catalogos, formularios o informacion de contacto.",
        tags: ["Interactivo", "Networking", "Digital"],
      },
    ],
  },
  deportivo: {
    title: "Deportivo",
    copy: "Medallas, trofeos y recuerdos para clubes, torneos, corridas, ligas y actividades deportivas.",
    theme: "theme-sport",
    logo: "assets/logo-deportivo.jpg",
    products: [
      {
        title: "Medallas",
        label: "Producto foco",
        showcaseTitle: "Medalla deportiva",
        showcaseCopy: "Medallas personalizadas por disciplina, fecha, club, categoria o posicion.",
        tags: ["Torneos", "Clubes", "Categorias"],
      },
      {
        title: "Trofeos",
        label: "Ideal para",
        showcaseTitle: "Trofeo para campeonato",
        showcaseCopy: "Galardones para podios, MVP, goleadores, equipos destacados y cierres de temporada.",
        tags: ["Podios", "Temporadas", "MVP"],
      },
      {
        title: "Series",
        label: "Extra posible",
        showcaseTitle: "Series por categoria",
        showcaseCopy: "Variantes coordinadas para distintas edades, equipos, colores o niveles de competencia.",
        tags: ["Series", "Colores", "Equipos"],
      },
    ],
  },
  eventos: {
    title: "Eventos",
    copy: "Detalles fabricados para fechas especiales, celebraciones, acreditaciones, recuerdos y premiaciones.",
    theme: "theme-event",
    logo: "assets/logo-eventos.jpg",
    products: [
      {
        title: "Recuerdos",
        label: "Producto foco",
        showcaseTitle: "Recuerdo de evento",
        showcaseCopy: "Objetos pequenos con fecha, nombre o simbolo del evento para que la experiencia quede en la mano.",
        tags: ["Celebraciones", "Fechas", "Souvenir"],
      },
      {
        title: "Acreditaciones",
        label: "Ideal para",
        showcaseTitle: "Acreditacion personalizada",
        showcaseCopy: "Credenciales, placas o identificadores con forma, color y detalles pensados para el evento.",
        tags: ["Staff", "Asistentes", "Identidad"],
      },
      {
        title: "Regalos",
        label: "Extra posible",
        showcaseTitle: "Regalo conmemorativo",
        showcaseCopy: "Piezas especiales para invitados, expositores, comunidades o personas destacadas.",
        tags: ["Invitados", "Comunidad", "Detalle"],
      },
    ],
  },
  personalizados: {
    title: "Personalizados",
    copy: "Objetos disenados desde nombres, logos, frases, ideas personales o referencias concretas.",
    theme: "theme-custom",
    logo: "assets/logo-personalizados.jpg",
    products: [
      {
        title: "Llaveros",
        label: "Producto foco",
        showcaseTitle: "Llavero personalizado",
        showcaseCopy: "Nombres, logos, frases o simbolos convertidos en piezas pequenas y utiles.",
        tags: ["Nombres", "Logos", "Regalos"],
      },
      {
        title: "Piezas",
        label: "Ideal para",
        showcaseTitle: "Pieza a pedido",
        showcaseCopy: "Modelos funcionales, decorativos o experimentales adaptados a una idea concreta.",
        tags: ["A medida", "Prototipo", "Funcion"],
      },
      {
        title: "Regalos",
        label: "Extra posible",
        showcaseTitle: "Regalo unico",
        showcaseCopy: "Detalles con identidad para cumpleanos, aniversarios, amistades, familias o proyectos.",
        tags: ["Unico", "Personal", "Especial"],
      },
    ],
  },
  geek: {
    title: "Geek / universitario",
    copy: "Productos con identidad para comunidades, carreras, grupos, fandoms y proyectos tecnologicos.",
    theme: "theme-geek",
    logo: "assets/logo-geek.jpg",
    products: [
      {
        title: "Insignias",
        label: "Producto foco",
        showcaseTitle: "Insignia de comunidad",
        showcaseCopy: "Piezas para carreras, agrupaciones, clubes, roles o comunidades con estetica propia.",
        tags: ["Comunidad", "Carrera", "Identidad"],
      },
      {
        title: "Props",
        label: "Ideal para",
        showcaseTitle: "Prop geek",
        showcaseCopy: "Objetos decorativos o tematicos inspirados en videojuegos, series, tecnologia o cultura pop.",
        tags: ["Fandom", "Decoracion", "Coleccion"],
      },
      {
        title: "Merch",
        label: "Extra posible",
        showcaseTitle: "Merch universitario",
        showcaseCopy: "Llaveros, placas, tokens o recuerdos para grupos, generaciones y actividades internas.",
        tags: ["Universidad", "Generacion", "Grupo"],
      },
    ],
  },
};
const defaultGalleryContent = {
  kicker: "Galeria",
  title: "Espacio listo para tus trabajos reales.",
  items: [
    "Medalla personalizada",
    "Trofeo premium",
    "Llavero con logo",
    "Producto NFC",
    "Pieza a pedido",
  ],
};

const categoryGalleryContent = {
  corporativo: {
    kicker: "Galeria corporativa",
    title: "Ejemplos pensados para marcas, equipos y reconocimientos.",
    items: [
      "Galardon con logo",
      "Trofeo ejecutivo",
      "Placa de reconocimiento",
      "Producto NFC corporativo",
      "Regalo para equipo",
    ],
  },
  deportivo: {
    kicker: "Galeria deportiva",
    title: "Piezas para torneos, clubes, podios y temporadas.",
    items: [
      "Medalla de campeonato",
      "Trofeo de podio",
      "Llavero de club",
      "Serie por categoria",
      "Premio MVP",
    ],
  },
  eventos: {
    kicker: "Galeria de eventos",
    title: "Detalles para celebraciones, recuerdos y acreditaciones.",
    items: [
      "Recuerdo con fecha",
      "Acreditacion personalizada",
      "Regalo para invitados",
      "Souvenir con logo",
      "Premio conmemorativo",
    ],
  },
  personalizados: {
    kicker: "Galeria personalizada",
    title: "Ideas a medida para regalos, nombres, logos y piezas unicas.",
    items: [
      "Llavero con nombre",
      "Pieza a pedido",
      "Regalo personalizado",
      "Producto NFC personal",
      "Logo en 3D",
    ],
  },
  geek: {
    kicker: "Galeria geek y universitaria",
    title: "Objetos para comunidades, carreras, grupos y cultura pop.",
    items: [
      "Insignia de comunidad",
      "Prop decorativo",
      "Merch universitario",
      "Token de grupo",
      "Placa geek",
    ],
  },
};
navToggle?.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navMenu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("is-open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

function setText(selector, text) {
  const element = document.querySelector(selector);
  if (element) element.textContent = text;
}

function updateGalleryTheme(theme, category) {
  if (!gallerySection) return;
  gallerySection.classList.remove("theme-corporate", "theme-sport", "theme-event", "theme-custom", "theme-geek");
  gallerySection.dataset.galleryTheme = category || "default";
  if (theme) gallerySection.classList.add(theme);
}

function updateGalleryContent(category) {
  const gallery = categoryGalleryContent[category] || defaultGalleryContent;
  setText("#gallery-kicker", gallery.kicker);
  setText("#gallery-title", gallery.title);
  gallery.items.forEach((item, index) => {
    setText(`#gallery-item-${index + 1}`, item);
  });
}
function setActiveProduct(content, productIndex = 0) {
  const product = content.products[productIndex] || content.products[0];
  const showcase = document.querySelector("#dashboard-showcase");

  setText("#showcase-kicker", product.title);
  setText("#showcase-title", product.showcaseTitle);
  setText("#showcase-copy", product.showcaseCopy);

  product.tags.forEach((tag, index) => {
    setText(`#dashboard-tag-${index + 1}`, tag);
  });

  metricCards.forEach((card) => {
    const isActive = Number(card.dataset.productIndex) === productIndex;
    card.classList.toggle("is-active", isActive);
    card.setAttribute("aria-pressed", String(isActive));
  });

  if (showcase) {
    showcase.dataset.product = product.title.toLowerCase();
  }
}

function showCategoryDashboard(category, productIndex = 0) {
  const content = categoryContent[category];
  if (!dashboard || !content) return;

  dashboard.classList.remove(
    "theme-corporate",
    "theme-sport",
    "theme-event",
    "theme-custom",
    "theme-geek",
  );
  dashboard.classList.add(content.theme, "is-visible");
  dashboard.dataset.activeCategory = category;
  updateGalleryTheme(content.theme, category);
  updateGalleryContent(category);

  const showcaseLogo = document.querySelector("#dashboard-showcase img");
  if (showcaseLogo) {
    showcaseLogo.src = content.logo || "assets/logo-main.jpg";
    showcaseLogo.alt = "Logo Llita.3D " + content.title;
  }

  setText("#dashboard-title", content.title);
  setText("#dashboard-copy", content.copy);
  content.products.forEach((item, index) => {
    setText(`#dashboard-product-${index + 1}`, item.title);
    const metricLabel = document.querySelector(`[data-product-index="${index}"] span`);
    if (metricLabel) metricLabel.textContent = item.label;
  });
  setActiveProduct(content, productIndex);
}

categoryCards.forEach((card) => {
  card.addEventListener("click", (event) => {
    event.preventDefault();
    showCategoryDashboard(card.dataset.category);
    window.history.pushState(null, "", `#categoria-${card.dataset.category}`);
    dashboard?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

metricCards.forEach((card) => {
  card.addEventListener("click", () => {
    const category = dashboard?.dataset.activeCategory;
    const content = categoryContent[category];
    if (!content) return;
    setActiveProduct(content, Number(card.dataset.productIndex));
  });
});

const initialCategory = window.location.hash.replace("#categoria-", "");
if (categoryContent[initialCategory]) {
  showCategoryDashboard(initialCategory);
  window.requestAnimationFrame(() => {
    dashboard?.scrollIntoView({ behavior: "auto", block: "start" });
  });
}

window.addEventListener("hashchange", () => {
  const category = window.location.hash.replace("#categoria-", "");
  if (categoryContent[category]) {
    showCategoryDashboard(category);
  }
});