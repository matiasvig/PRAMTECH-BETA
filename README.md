# PramTech · sitio web

Sitio estático de PramTech, hecho para que dueños de pymes chilenas agenden un diagnóstico gratuito de 30 minutos por WhatsApp. No tiene build, frameworks ni dependencias en producción: HTML, CSS y JavaScript vanilla.

## Qué hay en la raíz

| Archivo | Para qué sirve |
|---|---|
| `index.html` | Página principal |
| `styles.css` | Base compartida: tokens, fuentes, header, footer, legales |
| `home.css` | Marquesina, hero, panel de inventario, dolores y soluciones |
| `home2.css` | Asesoría, nosotros, pestañas, pilares, FAQ y contacto |
| `overlays.css` | Asistente Bock, modal de demos y adaptación responsive |
| `script.js` | Menú, tabs, modal, Bock, formulario a WhatsApp, marquesina y revelado |
| `assets/` | Fuentes, retratos, logo, favicons e imagen social |
| `aviso-legal.html` y otras 5 páginas | Documentos legales con el shell nuevo; el contenido original se conservó |
| `robots.txt`, `sitemap.xml` | Indexación |

`docs/`, `tools/`, `DESIGN.md`, `PENDIENTES.md` y `CAMBIOS.md` son material de trabajo. No se publican.

## Ver el sitio en local

```powershell
npx.cmd -y serve -l 4173 .
```

Abrir `http://localhost:4173/`. También funciona abriendo `index.html` directamente, aunque el servidor local reproduce mejor las rutas y las fuentes.

## Publicar

Subir solo:

- `index.html` y las 6 páginas legales
- `styles.css`, `home.css`, `home2.css`, `overlays.css`, `script.js`
- `assets/`
- `robots.txt`, `sitemap.xml`

No subir `node_modules/`, `docs/` ni `tools/`. El sitio no requiere backend: el formulario abre WhatsApp con el mensaje ya escrito.

Dominio previsto: `https://www.pramtech.cl/`. Confirmar antes de publicar; las páginas legales todavía mencionan `pramtech.com` en su texto original y sus metadatos ya apuntan a `www.pramtech.cl`.

## Herramientas de desarrollo

Requieren Node 20+ y `npm.cmd` en Windows.

```powershell
npm.cmd install
npx.cmd playwright install chromium
node tools/qa.js                 # 186 comprobaciones con Playwright
node tools/shot.js http://localhost:4173/ docs/review-390.png 390 844
node tools/review.js             # capturas de estados móviles
node tools/build-legal.js        # reconstruye las legales con el shell actual
node tools/og.js                 # regenera assets/og-image.png (1200×630)
node tools/images.js             # regenera retratos y Bock en AVIF/WebP
node tools/icons.js              # regenera favicons desde assets/favicon.svg
```

## Decisiones que conviene conocer

- **Una sola acción:** todos los caminos terminan en WhatsApp (`+56 9 6186 4903`) con un mensaje distinto según la sección.
- **Se conserva el sitio original:** marquesina, panel de inventario, tres dolores, cuatro soluciones con demos, asesoría en tres pasos, pestañas, pilares, equipo, formulario, footer y Bock. Solo cambia la dirección visual.
- **Sin datos inventados:** no hay clientes, testimonios, precios, plazos ni métricas de resultado. Las demos de las herramientas usan un negocio ficticio y las cifras del panel son de ejemplo.
- **Accesibilidad:** un `h1`, HTML semántico, foco visible, objetivos táctiles de 44 px, formulario con labels y errores anunciados, modal con foco atrapado, marquesina pausable y `prefers-reduced-motion`.
- **Rendimiento:** fuentes self-hosted con `preload`, retratos en AVIF/WebP con `srcset`, sin librerías de terceros.
- **SEO:** `lang="es-CL"`, canonical y OG en `www.pramtech.cl`, JSON-LD de Organization, WebSite y FAQPage, favicons y sitemap.

## Lo que falta

Ver `PENDIENTES.md`. Lo más importante: confirmar el dominio definitivo, los datos legales y los perfiles sociales reales; conseguir capturas reales de las herramientas; definir horarios y tiempos de respuesta.
