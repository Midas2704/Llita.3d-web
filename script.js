const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const dashboard = document.querySelector(".category-dashboard");
const categoryCards = document.querySelectorAll("[data-category]");
const gallerySection = document.querySelector("#galeria");
const metricCards = document.querySelectorAll("[data-product-index]");
const productList = document.querySelector("#product-list");

const productAccordionItems = [
  {
    title: "Medallas personalizadas",
    summary: "Para corridas, torneos y celebraciones.",
    description:
      "Diseñamos medallas para corridas, torneos, actividades escolares, celebraciones y eventos especiales. Podemos trabajar desde un logo, una temática, una referencia o una idea inicial.",
    customizable: ["Forma y tamaño", "Logo o escudo", "Fecha y categoría", "Colores y detalles del evento"],
    imageLabel: "Imagen placeholder: medalla personalizada",
    imageTone: "medallas",
  },
  {
    title: "Trofeos y galardones",
    summary: "Premios con identidad para reconocer logros.",
    description:
      "Creamos premios personalizados para reconocimientos deportivos, corporativos, institucionales o celebraciones especiales.",
    customizable: ["Nombre del premio", "Logo", "Categoría", "Fecha", "Colores y formato"],
    imageLabel: "Imagen placeholder: trofeo o galardón",
    imageTone: "trofeos",
  },
  {
    title: "Llaveros y recuerdos",
    summary: "Objetos pequeños para regalar o recordar.",
    description:
      "Diseñamos objetos pequeños para regalar, recordar una fecha especial, representar una marca o crear merchandising.",
    customizable: ["Nombres", "Frases", "Logos", "Colores", "Formas y empaques"],
    imageLabel: "Imagen placeholder: llavero o recuerdo",
    imageTone: "llaveros",
  },
  {
    title: "Productos con NFC",
    summary: "Objetos que conectan perfiles, menús, portafolios, formularios o sitios.",
    description:
      "Creamos tarjetas, llaveros y objetos con tecnología NFC para conectar información física con perfiles, menús, portafolios, formularios o sitios web.",
    customizable: ["Enlace de destino", "Diseño exterior", "Logo", "Formato y colores"],
    imageLabel: "Imagen placeholder: producto NFC",
    imageTone: "nfc",
  },
  {
    title: "Piezas a pedido",
    summary: "Modelado, adaptación e impresión de piezas funcionales, decorativas o especiales.",
    description:
      "Modelamos, adaptamos e imprimimos piezas funcionales, decorativas o especiales según una necesidad concreta.",
    customizable: ["Medidas", "Material", "Color", "Forma", "Función y detalles específicos"],
    imageLabel: "Imagen placeholder: pieza a pedido",
    imageTone: "piezas",
  },
  {
    title: "Proyectos para comunidades",
    summary: "Productos para clubes, carreras, grupos y proyectos con identidad propia.",
    description:
      "Creamos productos para clubes, carreras, grupos, fandoms, comunidades universitarias y proyectos con identidad propia.",
    customizable: ["Logos", "Colores", "Nombres", "Símbolos", "Temática y tipo de producto"],
    imageLabel: "Imagen placeholder: proyecto para comunidad",
    imageTone: "comunidades",
  },
];
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
function createProductPanel(item, index) {
  const number = String(index + 1).padStart(2, "0");
  const panelId = `product-panel-${number}`;
  const customItems = item.customizable.map((entry) => `<li>${entry}</li>`).join("");
  const quoteText = encodeURIComponent(`Hola Llita.3D, quiero cotizar: ${item.title}`);

  return `
    <article class="product-item" data-product-item>
      <button class="product-row" type="button" aria-expanded="false" aria-controls="${panelId}">
        <span class="product-number">${number}</span>
        <span class="product-copy">
          <span class="product-title">${item.title}</span>
          <span class="product-summary">${item.summary}</span>
        </span>
        <span class="product-arrow" aria-hidden="true">→</span>
      </button>
      <div class="product-panel" id="${panelId}">
        <div class="product-panel-inner">
          <div class="product-panel-copy">
            <p>${item.description}</p>
            <div>
              <h4>Personalizable en</h4>
              <ul>${customItems}</ul>
            </div>
            <div class="product-panel-actions">
              <a class="button secondary" href="#galeria">Ver ejemplos</a>
              <a class="button primary" href="https://wa.me/56999327096?text=${quoteText}" target="_blank" rel="noreferrer">Cotizar este producto</a>
            </div>
          </div>
          <figure class="product-panel-image image-tone-${item.imageTone}">
            <span>${item.imageLabel}</span>
          </figure>
        </div>
      </div>
    </article>
  `;
}

function closeProductItem(item) {
  const button = item.querySelector(".product-row");
  item.classList.remove("is-open");
  button?.setAttribute("aria-expanded", "false");
}

function initProductAccordion() {
  if (!productList) return;
  productList.innerHTML = productAccordionItems.map(createProductPanel).join("");

  productList.querySelectorAll("[data-product-item]").forEach((item) => {
    const button = item.querySelector(".product-row");
    button?.addEventListener("click", () => {
      const isOpen = item.classList.contains("is-open");
      productList.querySelectorAll("[data-product-item]").forEach(closeProductItem);
      if (!isOpen) {
        item.classList.add("is-open");
        button.setAttribute("aria-expanded", "true");
      }
    });
  });
}
initProductAccordion();

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