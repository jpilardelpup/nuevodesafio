
// =========================
// 1. ACTUALIZAR EL AÑO
// =========================

const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}


// =========================
// 2. NAVBAR AL HACER SCROLL
// =========================

const navbar = document.querySelector(".navbar");

function updateNavbar() {
  if (navbar) {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
  }
}

window.addEventListener("scroll", updateNavbar);
updateNavbar();


// =========================
// 3. CERRAR MENÚ EN MÓVILES
// =========================

const menu = document.getElementById("navbarMenu");
const menuLinks = document.querySelectorAll(".navbar-nav .nav-link");

menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    if (menu && menu.classList.contains("show")) {
      const collapse = bootstrap.Collapse.getOrCreateInstance(menu);
      collapse.hide();
    }
  });
});


// =========================
// 4. ANIMACIONES AL APARECER
// =========================

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12
  });

  revealElements.forEach(element => {
    observer.observe(element);
  });
} else {
  revealElements.forEach(element => {
    element.classList.add("visible");
  });
}


// =========================
// 5. BOTÓN VOLVER ARRIBA
// =========================

const backToTop = document.getElementById("backToTop");

function updateBackToTop() {
  if (backToTop) {
    backToTop.classList.toggle("show", window.scrollY > 400);
  }
}

window.addEventListener("scroll", updateBackToTop);
updateBackToTop();

if (backToTop) {
  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}


// =========================
// 6. VALIDACIÓN DEL FORMULARIO
// =========================

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", event => {
    const name = document.getElementById("nombre");
    const message = document.getElementById("mensaje");

    name.setCustomValidity("");
    message.setCustomValidity("");

    if (!name.value.trim()) {
      name.setCustomValidity("Por favor, escribí tu nombre.");
    }

    if (!message.value.trim()) {
      message.setCustomValidity("Por favor, escribí un mensaje.");
    }

    if (!contactForm.checkValidity()) {
      event.preventDefault();
      contactForm.reportValidity();
    }
  });
}


// =========================
// 7. MARCAR SECCIÓN ACTIVA
// =========================

const sections = document.querySelectorAll("header[id], main section[id]");

const navObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const activeId = entry.target.id;

      menuLinks.forEach(link => {
        link.classList.toggle(
          "active",
          link.getAttribute("href") === `#${activeId}`
        );
      });
    }
  });
}, {
  rootMargin: "-25% 0px -65% 0px"
});

sections.forEach(section => {
  navObserver.observe(section);
});


// =========================
// 8. MENSAJE EN CONSOLA
// =========================

console.log("¡Bienvenido al portfolio de Josefina!");

