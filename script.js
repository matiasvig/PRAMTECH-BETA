(function () {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const $ = (selector, scope) => (scope || document).querySelector(selector);
  const $$ = (selector, scope) => Array.from((scope || document).querySelectorAll(selector));

  const pageRegions = [$("main"), $(".site-footer"), $("#bock"), $("#announce")].filter(Boolean);
  const modalRegions = [$("#site-header")].concat(pageRegions).filter(Boolean);

  function setInert(regions, on) {
    regions.forEach(function (region) {
      if (on) region.setAttribute("inert", "");
      else region.removeAttribute("inert");
    });
  }

  /* ---------- Menú móvil ---------- */
  const toggle = $("#nav-toggle");
  const panel = $("#nav-panel");
  const header = $("#site-header");

  function setMenu(open, returnFocus) {
    if (!toggle || !panel) return;
    panel.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    document.body.classList.toggle("menu-open", open);
    setInert(pageRegions, open);
    if (!open && returnFocus) toggle.focus();
  }

  if (toggle && panel) {
    toggle.addEventListener("click", function () {
      setMenu(toggle.getAttribute("aria-expanded") !== "true", false);
    });

    $$("a", panel).forEach(function (link) {
      link.addEventListener("click", function () { setMenu(false, false); });
    });

    const brand = $(".brand");
    if (brand) brand.addEventListener("click", function () { setMenu(false, false); });

    panel.addEventListener("click", function (event) {
      if (event.target === panel) setMenu(false, false);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setMenu(false, true);
      }
    });

    document.addEventListener("click", function (event) {
      if (toggle.getAttribute("aria-expanded") !== "true") return;
      if (header && header.contains(event.target)) return;
      setMenu(false, false);
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth >= 960 && toggle.getAttribute("aria-expanded") === "true") {
        setMenu(false, false);
      }
    });
  }

  /* ---------- Cabecera al hacer scroll ---------- */
  const progressBar = $(".header__progress");
  let progressFrame = 0;

  function paintProgress() {
    progressFrame = 0;
    if (!progressBar) return;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    progressBar.style.transform = "scaleX(" + ratio.toFixed(4) + ")";
  }

  function onScroll() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 8);
    if (!progressFrame) progressFrame = window.requestAnimationFrame(paintProgress);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", paintProgress, { passive: true });

  /* ---------- Pausa de la marquesina ---------- */
  const announce = $("#announce");
  const announceToggle = $("#announce-toggle");

  if (announce && announceToggle) {
    announceToggle.addEventListener("click", function () {
      const paused = announce.classList.toggle("is-paused");
      announceToggle.setAttribute("aria-pressed", String(paused));
      announceToggle.setAttribute("aria-label", paused ? "Reanudar anuncio" : "Pausar anuncio");
    });
  }

  /* ---------- Revelado al hacer scroll ---------- */
  const revealEls = $$(".reveal");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) { el.classList.add("is-in"); });
  } else {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -8% 0px" });

    revealEls.forEach(function (el) { observer.observe(el); });
  }
  window.__pramRevealReady = true;

  /* ---------- Navegación activa ---------- */
  const navLinks = $$(".nav > a[href^='#']:not(.btn)");
  const navSections = navLinks
    .map(function (link) { return document.getElementById(link.getAttribute("href").slice(1)); })
    .filter(Boolean);

  if (navSections.length) {
    let navFrame = 0;

    function syncNav() {
      navFrame = 0;
      const probe = window.innerHeight * 0.42;
      let current = null;
      navSections.forEach(function (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= probe && rect.bottom >= probe) current = section;
      });
      navLinks.forEach(function (link) {
        const active = !!current && link.getAttribute("href") === "#" + current.id;
        link.classList.toggle("is-active", active);
        if (active) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    }

    function queueNav() {
      if (!navFrame) navFrame = window.requestAnimationFrame(syncNav);
    }

    window.addEventListener("scroll", queueNav, { passive: true });
    window.addEventListener("resize", queueNav);
    syncNav();
  }

  /* ---------- Pestañas ---------- */
  const tabs = $$("[role='tab']");
  const panels = $$("[role='tabpanel']");

  function activateTab(tab, focus) {
    if (!tab) return;
    const targetId = tab.getAttribute("aria-controls");

    tabs.forEach(function (item) {
      const active = item === tab;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-selected", String(active));
      item.tabIndex = active ? 0 : -1;
    });

    panels.forEach(function (item) {
      const active = item.id === targetId;
      item.hidden = !active;
      if (active) {
        $$(".reveal", item).forEach(function (el) { el.classList.add("is-in"); });
      }
    });

    if (focus) tab.focus();
  }

  tabs.forEach(function (tab, index) {
    tab.addEventListener("click", function () { activateTab(tab, false); });
    tab.addEventListener("keydown", function (event) {
      let next = null;
      if (event.key === "ArrowRight" || event.key === "ArrowDown") next = tabs[(index + 1) % tabs.length];
      if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = tabs[(index - 1 + tabs.length) % tabs.length];
      if (event.key === "Home") next = tabs[0];
      if (event.key === "End") next = tabs[tabs.length - 1];
      if (next) {
        event.preventDefault();
        activateTab(next, true);
      }
    });
  });

  /* ---------- Demos en modal ---------- */
  const DEMOS = {
    inventario: {
      kicker: "Demo · Control de inventario",
      title: "Así se ve tu bodega, sin planillas.",
      desc: "Un panel simple con lo que tienes, lo que se mueve y lo que conviene pedir. La IA mira el ritmo de venta y te avisa antes de que se acabe.",
      board: `
        <div class="demo-board">
          <div class="demo-board__head"><span>Panel PramTech · Inventario</span><strong>Almacén Doña Rosa</strong><span>Jueves · 10:42</span></div>
          <div class="demo-kpis">
            <div class="demo-kpi"><span>Stock activo</span><strong>1.248</strong><em>+12% esta semana</em></div>
            <div class="demo-kpi"><span>Por reabastecer</span><strong>7</strong><em>3 urgentes</em></div>
            <div class="demo-kpi"><span>Quiebres evitados</span><strong>4</strong><em>este mes</em></div>
          </div>
          <div class="demo-table">
            <div class="demo-row demo-row--head"><span>Producto</span><span>Quedan</span><span>Estado</span></div>
            <div class="demo-row"><span>Café molido 500 g</span><b>8</b><span class="tag tag--warn">Reponer</span></div>
            <div class="demo-row"><span>Harina 1 kg</span><b>24</b><span class="tag tag--ok">OK</span></div>
            <div class="demo-row"><span>Té ceylán 20 bolsitas</span><b>3</b><span class="tag tag--warn">Urgente</span></div>
            <div class="demo-row"><span>Arroz 1 kg</span><b>18</b><span class="tag tag--ok">OK</span></div>
          </div>
          <div class="demo-insight"><strong>Sugerencia IA:</strong> pide 3 cajas de té ceylán antes del viernes. Con el ritmo actual, se agota el sábado.</div>
        </div>`,
      includes: ["Alertas automáticas de stock bajo", "Sugerencias de cuánto y cuándo pedir", "Una vista simple para todo el equipo"]
    },
    ventas: {
      kicker: "Demo · Ventas online",
      title: "Todos tus pedidos en una misma lista.",
      desc: "Da lo mismo si el pedido entró por WhatsApp, Instagram o tu página: queda en el mismo lugar, con su estado y su responsable.",
      board: `
        <div class="demo-board">
          <div class="demo-board__head"><span>Pedidos de hoy</span><strong>Almacén Doña Rosa</strong><span>3 por preparar</span></div>
          <div class="demo-kpis">
            <div class="demo-kpi"><span>Pedidos</span><strong>12</strong><em>+3 hoy</em></div>
            <div class="demo-kpi"><span>Ventas</span><strong>$284.500</strong><em>+18%</em></div>
            <div class="demo-kpi"><span>Canales</span><strong>3</strong><em>conectados</em></div>
          </div>
          <div class="demo-orders">
            <div class="demo-order"><div><strong>#1042 · Carla M.</strong><span>WhatsApp · hace 12 min</span></div><span class="tag tag--warn">Por preparar</span></div>
            <div class="demo-order"><div><strong>#1043 · Sra. Rojas</strong><span>Instagram · hace 26 min</span></div><span class="tag tag--ok">Enviado</span></div>
            <div class="demo-order"><div><strong>#1044 · Juan P.</strong><span>Página web · hace 40 min</span></div><span class="tag tag--warn">Por preparar</span></div>
            <div class="demo-order"><div><strong>#1045 · Pedro S.</strong><span>WhatsApp · hace 1 h</span></div><span class="tag tag--ok">Enviado</span></div>
          </div>
          <div class="demo-insight"><strong>Un solo listado:</strong> nada se pierde entre mensajes y planillas. Tú sabes qué preparar y qué falta despachar.</div>
        </div>`,
      includes: ["Pedidos centralizados por canal", "Respuestas y recordatorios automáticos", "Seguimiento claro de cada venta"]
    },
    asistente: {
      kicker: "Demo · Asistente IA",
      title: "Un ayudante que conoce tu negocio.",
      desc: "La IA prepara respuestas y avisos con la información de tu negocio. Una persona del equipo revisa y envía: el trato sigue siendo tuyo.",
      board: `
        <div class="demo-board">
          <div class="demo-board__head"><span>Bock · Asistente</span><strong>WhatsApp de Almacén Doña Rosa</strong><span>En línea</span></div>
          <div class="demo-chat">
            <div class="demo-bubble demo-bubble--in"><small>Cliente · WhatsApp</small>¿Tienen envío a Rancagua?</div>
            <div class="demo-bubble demo-bubble--out"><small>Borrador IA</small>Sí, despachamos los martes y viernes. ¿Te sirve así?</div>
            <div class="demo-bubble demo-bubble--in"><small>Cliente · WhatsApp</small>¿Y aceptan transferencia?</div>
            <div class="demo-bubble demo-bubble--out"><small>Borrador IA</small>Sí, te envío los datos por WhatsApp ahora mismo.</div>
          </div>
          <div class="demo-insight"><strong>Con control humano:</strong> la herramienta sugiere, una persona revisa. No responde sola en tu nombre.</div>
        </div>`,
      includes: ["Responde tus WhatsApps más repetidos", "Mantiene el stock al día en tiempo real", "Consultas en lenguaje natural, sin planillas"]
    },
    reportes: {
      kicker: "Demo · Reportes",
      title: "Los números de tu negocio, en simple.",
      desc: "Sin tablas imposibles. Un resumen claro de la semana para decidir qué pedir, qué mirar y qué compartir con tu equipo.",
      board: `
        <div class="demo-board">
          <div class="demo-board__head"><span>Resumen de la semana</span><strong>Almacén Doña Rosa</strong><span>19–25 oct</span></div>
          <div class="demo-kpis">
            <div class="demo-kpi"><span>Ventas</span><strong>$1.245.000</strong><em>+18%</em></div>
            <div class="demo-kpi"><span>Pedidos</span><strong>38</strong><em>+6</em></div>
            <div class="demo-kpi"><span>Ticket promedio</span><strong>$32.763</strong><em>+4%</em></div>
          </div>
          <div class="demo-bars-wrap">
            <div class="demo-bars">
              <span style="--h:42%" data-day="L"></span><span style="--h:58%" data-day="M"></span><span style="--h:36%" data-day="M"></span><span style="--h:74%" data-day="J"></span><span style="--h:52%" data-day="V"></span><span style="--h:88%" data-day="S"></span><span style="--h:64%" data-day="D"></span>
            </div>
          </div>
          <div class="demo-insight"><strong>Lo que más salió:</strong> café molido 500 g. Te conviene pedir 6 cajas para la próxima semana.</div>
        </div>`,
      includes: ["Resumen visual de ventas y stock", "Indicadores clave sin ruido", "Listo para compartir con tu equipo"]
    }
  };

  const modal = $("#demo-modal");
  const modalBody = $("#demo-body");
  const modalDialog = $(".modal__dialog", modal);
  let lastFocused = null;

  function demoMarkup(demo) {
    const includes = demo.includes.map(function (item) { return "<li>" + item + "</li>"; }).join("");
    const message = encodeURIComponent("Hola PramTech, vi la demo de " + demo.title.toLowerCase() + " y quiero algo así para mi negocio.");
    return `
      <p class="demo-kicker">${demo.kicker}</p>
      <h2 class="demo-title" id="demo-title">${demo.title}</h2>
      <p class="demo-desc" id="demo-desc">${demo.desc}</p>
      ${demo.board}
      <p class="demo-note">Ejemplo ilustrativo con datos ficticios. Tu panel se arma con la información real de tu negocio.</p>
      <div class="demo-foot">
        <ul>${includes}</ul>
        <a class="btn btn--primary" href="https://wa.me/56961864903?text=${message}" target="_blank" rel="noopener">Quiero algo así</a>
      </div>`;
  }

  let modalTimer = 0;

  const INTEREST_BY_DEMO = {
    inventario: "Bodega y stock",
    ventas: "Pedidos y ventas",
    asistente: "Respuestas a clientes",
    reportes: "Reportes",
  };

  function preselectInterest(key) {
    const select = $("#interes");
    if (!select || select.value) return;
    const value = INTEREST_BY_DEMO[key];
    if (value) select.value = value;
  }

  function openDemo(key) {
    const demo = DEMOS[key];
    if (!demo || !modal) return;
    window.clearTimeout(modalTimer);
    lastFocused = document.activeElement;
    preselectInterest(key);
    modalBody.innerHTML = demoMarkup(demo);
    modal.classList.remove("is-closing");
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    setInert(modalRegions, true);
    const close = $(".modal__close", modal);
    if (close) close.focus();
  }

  function closeDemo() {
    if (!modal || !modal.classList.contains("is-open")) return;
    modal.classList.remove("is-open");
    modal.classList.add("is-closing");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    setInert(modalRegions, false);
    if (lastFocused && typeof lastFocused.focus === "function") lastFocused.focus();
    window.clearTimeout(modalTimer);
    modalTimer = window.setTimeout(function () {
      modal.classList.remove("is-closing");
      modalBody.innerHTML = "";
    }, 220);
  }

  $$("[data-demo]").forEach(function (button) {
    button.addEventListener("click", function () { openDemo(button.getAttribute("data-demo")); });
  });

  if (modal) {
    modal.addEventListener("click", function (event) {
      if (event.target.closest("[data-close]")) closeDemo();
    });

    document.addEventListener("keydown", function (event) {
      if (!modal.classList.contains("is-open")) return;
      if (event.key === "Escape") {
        event.preventDefault();
        closeDemo();
        return;
      }
      if (event.key !== "Tab" || !modalDialog) return;
      const focusables = $$("a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])", modalDialog)
        .filter(function (el) { return el.offsetParent !== null; });
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    });
  }

  /* ---------- Bock ---------- */
  const bock = $("#bock");
  const bockToggle = $("#bock-toggle");
  const bockPanel = $("#bock-panel");
  const bockClose = $("#bock-close");
  const bockLog = $("#bock-log");
  const bockChips = $("#bock-chips");
  const bockForm = $("#bock-form");
  const bockInput = $("#bock-input");
  const bockHint = $(".bock__hint", bockToggle || document);
  let bockStarted = false;
  let contactInView = false;
  let bockCloseTimer = 0;

  function syncBockVisibility() {
    if (!bock) return;
    const open = bockPanel && !bockPanel.hidden;
    const nearContact = contactInView && !open;
    bock.classList.toggle("is-visible", !nearContact && (open || window.innerWidth >= 960 || window.scrollY > 260));
  }

  const BOCK_CHIPS = ["¿Qué hacen?", "Quiero una demo", "¿Cuánto cuesta?", "Hablar con una persona"];

  function bockMessage(html, who) {
    const message = document.createElement("p");
    message.className = "bock__msg bock__msg--" + (who === "user" ? "user" : "bot");
    if (who === "user") {
      message.textContent = html;
    } else {
      message.innerHTML = html;
    }
    bockLog.appendChild(message);
    bockLog.scrollTop = bockLog.scrollHeight;
  }

  function bockTyping() {
    if (!bockLog) return null;
    const typing = document.createElement("p");
    typing.className = "bock__msg bock__msg--bot bock__msg--typing";
    typing.setAttribute("aria-hidden", "true");
    typing.innerHTML = "<span></span><span></span><span></span>";
    bockLog.appendChild(typing);
    bockLog.scrollTop = bockLog.scrollHeight;
    return typing;
  }

  function bockReplySoon(text, delay) {
    const typing = bockTyping();
    window.setTimeout(function () {
      if (typing) typing.remove();
      bockMessage(text, "bot");
    }, reduceMotion ? 0 : delay);
  }

  function bockReply(text) {
    const value = text.toLowerCase();
    if (/demo|ver|probar/.test(value)) {
      return 'Puedes abrir una demo en <a href="#soluciones">Soluciones</a>. Cada tarjeta muestra cómo se ve la herramienta en el día a día.';
    }
    if (/precio|cuesta|valor|plan/.test(value)) {
      return 'El diagnóstico de 30 minutos es gratuito y sin compromiso. Después te proponemos algo a la medida de tu negocio, con precios claros. <a href="https://wa.me/56961864903" target="_blank" rel="noopener">Hablemos por WhatsApp</a>.';
    }
    if (/persona|humano|hablar|llamar|whatsapp/.test(value)) {
      return 'Te responde Antonio, Franco o Matías. <a href="https://wa.me/56961864903?text=Hola%20PramTech%2C%20quiero%20hablar%20con%20una%20persona%20del%20equipo." target="_blank" rel="noopener">Escríbenos por WhatsApp</a> y coordinamos una conversación.';
    }
    if (/inventario|stock|bodega/.test(value)) {
      return 'Ordenamos tu bodega en un panel simple: qué tienes, qué se mueve y qué pedir antes de que se acabe. <a href="#soluciones">Mira la demo de inventario</a>.';
    }
    if (/venta|pedido|instagram/.test(value)) {
      return 'Reunimos los pedidos de WhatsApp, Instagram y tu página en una sola lista, con su estado. <a href="#soluciones">Mira la demo de ventas</a>.';
    }
    if (/hola|buenas|hey/.test(value)) {
      return '¡Hola! Soy Bock, el asistente de PramTech. Te puedo orientar con inventario, ventas, reportes o agendar una conversación.';
    }
    return 'No entendí del todo, pero te puedo ayudar con inventario, ventas, el asistente o reportes. Si prefieres, <a href="https://wa.me/56961864903" target="_blank" rel="noopener">habla con una persona del equipo</a>.';
  }

  function addBockChips() {
    if (!bockChips) return;
    bockChips.innerHTML = "";
    BOCK_CHIPS.forEach(function (label) {
      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = "bock__chip";
      chip.textContent = label;
      chip.addEventListener("click", function () {
        bockMessage(label, "user");
        bockReplySoon(bockReply(label), 520);
      });
      bockChips.appendChild(chip);
    });
  }

  function openBock() {
    if (!bockPanel || !bockToggle) return;
    window.clearTimeout(bockCloseTimer);
    bockPanel.classList.remove("is-closing");
    bockPanel.hidden = false;
    bockToggle.setAttribute("aria-expanded", "true");
    bockToggle.setAttribute("aria-label", "Cerrar asistente Bock");
    if (bockHint) bockHint.style.display = "none";
    if (!bockStarted) {
      bockStarted = true;
      addBockChips();
      bockReplySoon("¡Hola! Soy Bock, el asistente de PramTech. ¿Te ayudo a ver qué necesita tu negocio?", 480);
    }
    window.setTimeout(function () { if (bockInput) bockInput.focus(); }, 60);
    syncBockVisibility();
  }

  function closeBock(returnFocus) {
    if (!bockPanel || !bockToggle) return;
    window.clearTimeout(bockCloseTimer);
    bockPanel.classList.add("is-closing");
    bockToggle.setAttribute("aria-expanded", "false");
    bockToggle.setAttribute("aria-label", "Abrir asistente Bock");
    if (returnFocus) bockToggle.focus();
    syncBockVisibility();
    bockCloseTimer = window.setTimeout(function () {
      bockPanel.hidden = true;
      bockPanel.classList.remove("is-closing");
      syncBockVisibility();
    }, reduceMotion ? 0 : 160);
  }

  if (bockToggle && bockPanel) {
    bockToggle.addEventListener("click", function () {
      if (bockPanel.hidden || bockPanel.classList.contains("is-closing")) openBock();
      else closeBock(true);
    });

    if (bockClose) bockClose.addEventListener("click", function () { closeBock(true); });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && !bockPanel.hidden) closeBock(true);
    });

    document.addEventListener("click", function (event) {
      if (bockPanel.hidden || !bock) return;
      if (!bock.contains(event.target)) closeBock(false);
    });

    if (bockForm) {
      bockForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const value = bockInput ? bockInput.value.trim() : "";
        if (!value) return;
        bockMessage(value, "user");
        if (bockInput) bockInput.value = "";
        bockReplySoon(bockReply(value), 560);
      });
    }

    syncBockVisibility();
    window.addEventListener("scroll", syncBockVisibility, { passive: true });
    window.addEventListener("resize", syncBockVisibility);

    const contactSection = $("#contacto");
    if (contactSection && "IntersectionObserver" in window) {
      const contactObserver = new IntersectionObserver(function (entries) {
        contactInView = entries.some(function (entry) { return entry.isIntersecting; });
        syncBockVisibility();
      }, { threshold: 0.04 });
      contactObserver.observe(contactSection);
    }
  }

  /* ---------- Formulario → WhatsApp ---------- */
  const form = $("#lead-form");
  if (!form) return;

  const status = $("#form-status");
  const WHATSAPP_NUMBER = "56961864903";
  const phoneInput = form.querySelector('[name="telefono"]');
  const requiredFields = ["nombre", "negocio", "telefono"];
  const submitBtn = form.querySelector('button[type="submit"]');
  const copyMail = $(".copy-mail");
  const copyStatus = $("#copy-mail-status");

  function setSubmitting(on) {
    if (!submitBtn) return;
    submitBtn.disabled = on;
    submitBtn.classList.toggle("is-loading", on);
    submitBtn.setAttribute("aria-busy", String(on));
  }

  if (copyMail) {
    copyMail.addEventListener("click", function () {
      const value = copyMail.getAttribute("data-copy") || "";

      function done() {
        copyMail.classList.add("is-copied");
        copyMail.setAttribute("aria-label", "Correo copiado");
        if (copyStatus) copyStatus.textContent = "Correo copiado: " + value;
        window.setTimeout(function () {
          copyMail.classList.remove("is-copied");
          copyMail.setAttribute("aria-label", "Copiar correo " + value);
          if (copyStatus) copyStatus.textContent = "";
        }, 2000);
      }

      function fail() {
        if (copyStatus) copyStatus.textContent = "No se pudo copiar. El correo es " + value + ".";
      }

      function fallbackCopy() {
        const input = document.createElement("textarea");
        input.value = value;
        input.setAttribute("readonly", "");
        input.style.position = "fixed";
        input.style.opacity = "0";
        document.body.appendChild(input);
        input.select();
        let ok = false;
        try { ok = document.execCommand("copy"); } catch (err) { ok = false; }
        input.remove();
        if (ok) done();
        else fail();
      }

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(value).then(done).catch(fallbackCopy);
      } else {
        fallbackCopy();
      }
    });
  }

  function digits(value) {
    let d = String(value == null ? "" : value).replace(/\D/g, "");
    if (d.indexOf("56") === 0) d = d.slice(2);
    return d;
  }

  function formatPhone(value) {
    const d = digits(value);
    if (d.length === 9) return d.slice(0, 1) + " " + d.slice(1, 5) + " " + d.slice(5);
    if (d.length === 8) return d.slice(0, 4) + " " + d.slice(4);
    return d;
  }

  function errorFor(field) {
    return document.getElementById("error-" + field.name);
  }

  function setError(field, message) {
    const error = errorFor(field);
    field.setAttribute("aria-invalid", "true");
    if (error) {
      error.textContent = message;
      error.hidden = false;
    }
  }

  function clearError(field) {
    const error = errorFor(field);
    field.removeAttribute("aria-invalid");
    if (error) {
      error.textContent = "";
      error.hidden = true;
    }
  }

  function messageFor(field) {
    const value = field.value.trim();
    if (field.name === "telefono") {
      const d = digits(value);
      if (d.length < 8 || d.length > 9) return "Escribe tu WhatsApp con 8 o 9 dígitos, por ejemplo 9 1234 5678.";
      return "";
    }
    if (!value) {
      if (field.name === "nombre") return "Escribe tu nombre.";
      if (field.name === "negocio") return "Escribe el nombre de tu negocio.";
      return "Completa este campo.";
    }
    if (value.length < 2) return "Escribe al menos dos caracteres.";
    return "";
  }

  function validateField(field) {
    const message = messageFor(field);
    if (message) {
      setError(field, message);
      return false;
    }
    clearError(field);
    return true;
  }

  requiredFields.forEach(function (name) {
    const field = form.querySelector('[name="' + name + '"]');
    if (!field) return;

    field.addEventListener("blur", function () {
      if (field.value.trim()) validateField(field);
    });

    field.addEventListener("input", function () {
      if (field.getAttribute("aria-invalid") === "true" && !messageFor(field)) {
        clearError(field);
      }
    });
  });

  if (phoneInput) {
    phoneInput.addEventListener("blur", function () {
      if (phoneInput.value.trim()) phoneInput.value = formatPhone(phoneInput.value);
    });
  }

  const messageInput = form.querySelector('[name="mensaje"]');
  const messageCount = $("#count-mensaje");

  if (messageInput && messageCount) {
    const messageMax = parseInt(messageInput.getAttribute("maxlength"), 10) || 400;

    function syncMessageCount() {
      const length = messageInput.value.length;
      messageCount.textContent = length + " / " + messageMax;
      messageCount.classList.toggle("is-near", length >= messageMax - 60);
    }

    messageInput.addEventListener("input", syncMessageCount);
    form.addEventListener("reset", function () {
      window.setTimeout(syncMessageCount, 0);
    });
    syncMessageCount();
  }

  function setStatus(message, type, url) {
    if (!status) return;
    status.textContent = message;
    status.classList.remove("is-error", "is-success");
    if (type) status.classList.add("is-" + type);
    if (url) {
      const link = document.createElement("a");
      link.href = url;
      link.target = "_blank";
      link.rel = "noopener";
      link.textContent = "toca aquí";
      status.appendChild(link);
      status.appendChild(document.createTextNode("."));
    }
    status.classList.remove("is-in");
    void status.offsetWidth;
    status.classList.add("is-in");
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    let firstInvalid = null;
    requiredFields.forEach(function (name) {
      const field = form.querySelector('[name="' + name + '"]');
      if (!field) return;
      if (!validateField(field) && !firstInvalid) firstInvalid = field;
    });

    if (firstInvalid) {
      setStatus("Revisa los campos marcados para continuar.", "error");
      firstInvalid.focus();
      return;
    }

    function value(name) {
      const field = form.querySelector('[name="' + name + '"]');
      return field ? field.value.trim() : "";
    }

    const phone = digits(value("telefono"));
    const lines = [
      "Hola PramTech, quiero agendar el diagnóstico gratuito de 30 minutos.",
      "- Nombre: " + value("nombre"),
      "- Negocio: " + value("negocio"),
      "- WhatsApp: +56 " + phone
    ];

    if (value("interes")) lines.push("- Me gustaría ordenar: " + value("interes"));
    if (value("mensaje")) lines.push("- Cuéntanos: " + value("mensaje"));

    const url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(lines.join("\n"));
    setSubmitting(true);
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener";
    document.body.appendChild(link);
    link.click();
    link.remove();

    setStatus("Abrimos WhatsApp con tu mensaje. Si no se abrió, ", "success", url);
    form.reset();
    requiredFields.forEach(function (name) {
      const field = form.querySelector('[name="' + name + '"]');
      if (field) clearError(field);
    });
    window.setTimeout(function () { setSubmitting(false); }, 1200);
  });
})();
