# Auditoría del sitio actual

Capturas: `docs/reference/audit-original-390.png`, `docs/reference/audit-original-1440.png`.
Herramienta: `impeccable detect https://www.pramtech.cl/` (32 anti-patrones, 12 avisos).

## Lo que confirma la captura y el detector

1. **Cintillo con emoji y contradicción.** La barra superior dice “🚀 ¡Próximamente!” con animación de marquesina, mientras las cuatro soluciones están marcadas “Disponible”. Es el primer mensaje de la página y ya genera desconfianza.
2. **Estructura de plantilla SaaS.** Tres “dolores” idénticos con icono en recuadro, cuatro tarjetas idénticas de soluciones, tres pilares idénticos y tres pasos idénticos. Mismo peso visual, mismo ritmo, cero jerarquía.
3. **Dashboard protagonista.** El hero muestra un panel con “Stock activo 1.248”, “+12%” y un chip “IA”. Métricas genéricas, tecnología antes que personas, y datos que no están respaldados.
4. **Jerga y repetición.** “Micro-herramientas con inteligencia artificial”, “Micro-Soluciones SaaS + IA”, “Vanguardia útil”, “automatiza tus ventas”. El hero y las soluciones repiten la misma idea. Las viñetas tienen largos y estilos inconsistentes.
5. **Redes genéricas.** Instagram y LinkedIn apuntan a `instagram.com` y `linkedin.com`, no a perfiles reales.
6. **Metadatos inconsistentes.** `canonical` y `og:url` apuntan a `pramtech.com`; el sitio vive en `pramtech.cl`. El `<title>` (“Tecnología amigable para tu pyme”) no coincide con el `og:title` (“Tecnología que sí entiende a tu pyme”). El `og-image.png` descargado es un 404.
7. **Cero prueba real.** No hay capturas reales, casos, clientes, precios orientativos ni preguntas frecuentes. El equipo existe, pero está escondido en una pestaña (“Nuestro equipo”) después de “Quiénes somos”.

## Hallazgos visuales y técnicos del detector

- **Tipografía por defecto:** Inter en el 67% del texto + Poppins en titulares; combinación de plantilla.
- **Paleta “IA”:** gradientes cian, `#22B8CF`, glow azul, fondos con grilla de dos ejes.
- **Contraste:** varios textos bajo AA: `#22b8cf` sobre `#f8fafc` (2.3:1), `#94a3b8` sobre blanco (2.6:1), blanco sobre gradientes cian (4.0–4.1:1), placeholder a 4.4:1.
- **Kickers:** cuatro etiquetas diminutas en mayúsculas sobre titulares (“¿Qué resolvemos?”, “Micro-Soluciones SaaS + IA”, “Educación y Asesoría”, “Empecemos”).
- **Icon tiles:** siete recuadros redondeados con icono sobre títulos.
- **Marquesina:** animación infinita en la barra superior.
- **Líneas largas:** párrafos de ~118 caracteres por línea.
- **Texto funcional diminuto:** “Bock · Asistente” a 10.88 px.
- **Tarjetas anidadas:** panel dentro de tarjeta en el hero.
- **Contenido oculto:** con `prefers-reduced-motion` o sin scroll, las capturas muestran secciones vacías porque `.reveal` deja `opacity: 0` hasta que el observer dispara. El HTML depende del JS para mostrar contenido.
- **Widget de Bock:** simula un chat con respuestas, chips y “IA escribiendo”. Refuerza la idea de que atiende un bot, justo lo contrario del mensaje clave.

## Consecuencia para el rediseño

La página no necesita “más diseño” sobre la misma estructura: necesita otra jerarquía. Las personas deben abrir la página, el lenguaje debe bajar a tierra, las herramientas deben aparecer al final y en pequeño, y cada afirmación debe poder sostenerse con lo que existe. Las ausencias (casos, precios, horarios, redes) se omiten y se registran en `PENDIENTES.md`.

## Resultado

- Primera propuesta (descartada): un dossier editorial con retratos en el hero, Newsreader + Figtree y terracota. Reducía el sitio y eliminaba la marquesina, el panel y el chat de Bock. Se revirtió.
- Versión vigente: se conserva todo el contenido y las funciones del original con la dirección “Sala de control”. Capturas en `docs/review-390.png`, `docs/review-1440.png`, `docs/viewport-*.png` y `docs/state-*.png`.
- `impeccable detect` sobre el sitio vigente: 6 anti-patrones deliberados (serif itálica, tarjetas con demo dentro y marquesina) y 2 avisos.
- `node tools/qa.js`: 186 comprobaciones, todo OK.
- Lighthouse móvil: Performance 99, Accessibility 100, Best Practices 100, SEO 100; LCP 2,0 s, CLS 0, TBT 0 ms.
- El detalle de cambios está en `CAMBIOS.md`, el sistema en `DESIGN.md` y lo que falta de datos reales, en `PENDIENTES.md`.
