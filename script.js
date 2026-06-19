const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const dashboard = document.querySelector(".category-dashboard");
const categoryCards = document.querySelectorAll("[data-category]");

const categoryContent = {
  corporativo: {
    title: "Corporativo",
    copy: "Piezas sobrias y memorables para empresas, premiaciones, equipos y regalos ejecutivos.",
    theme: "theme-corporate",
    products: ["Galardones", "Trofeos", "NFC"],
    tags: ["Premios internos", "Eventos de marca", "Reconocimientos"],
  },
  deportivo: {
    title: "Deportivo",
    copy: "Medallas, trofeos y recuerdos para clubes, torneos, corridas, ligas y actividades deportivas.",
    theme: "theme-sport",
    products: ["Medallas", "Trofeos", "Series"],
    tags: ["Torneos", "Clubes", "Eventos deportivos"],
  },
  eventos: {
    title: "Eventos",
    copy: "Detalles fabricados para fechas especiales, celebraciones, acreditaciones, recuerdos y premiaciones.",
    theme: "theme-event",
    products: ["Recuerdos", "Acreditaciones", "Regalos"],
    tags: ["Celebraciones", "Premiaciones", "Fechas especiales"],
  },
  personalizados: {
    title: "Personalizados",
    copy: "Objetos disenados desde nombres, logos, frases, ideas personales o referencias concretas.",
    theme: "theme-custom",
    products: ["Llaveros", "Piezas", "Regalos"],
    tags: ["A pedido", "Nombres", "Logos"],
  },
  geek: {
    title: "Geek / universitario",
    copy: "Productos con identidad para comunidades, carreras, grupos, fandoms y proyectos tecnologicos.",
    theme: "theme-geek",
    products: ["Insignias", "Props", "Merch"],
    tags: ["Comunidades", "Universidad", "Cultura geek"],
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

function showCategoryDashboard(category) {
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

  setText("#dashboard-title", content.title);
  setText("#dashboard-copy", content.copy);
  content.products.forEach((item, index) => {
    setText(`#dashboard-product-${index + 1}`, item);
  });
  content.tags.forEach((item, index) => {
    setText(`#dashboard-tag-${index + 1}`, item);
  });
}

categoryCards.forEach((card) => {
  card.addEventListener("click", (event) => {
    event.preventDefault();
    showCategoryDashboard(card.dataset.category);
    window.history.pushState(null, "", `#categoria-${card.dataset.category}`);
    dashboard?.scrollIntoView({ behavior: "smooth", block: "start" });
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
