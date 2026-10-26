# Cambios

Actualización de `www.pramtech.cl` manteniendo **todo lo que el sitio original ya tenía** y aplicando una dirección visual propia. Es la segunda iteración: la primera propuesta reducía la página a un dossier editorial y se descartó.

## Qué se conservó del sitio original

- La **marquesina “Próximamente”** con el lanzamiento.
- El **hero** con el titular original (“Ordena tu inventario y automatiza tus ventas sin volverte experto en tecnología”), el panel de inventario con cifras, gráfico y la sugerencia de IA, y los dos botones de acción.
- La **banda de problema** (“Olvídate de las planillas interminables…”).
- Los **tres dolores** con sus citas y textos.
- Las **cuatro soluciones** con sus nombres originales —Control de Inventario Inteligente, Automatización de Ventas Online, Asistente IA para tu Pyme y Reportes que te entienden—, sus bajadas, sus listas de features y sus **demos en modal**.
- La **asesoría en tres pasos** (Diagnóstico, Implementación guiada, Capacitación y soporte) y la cita de acompañamiento.
- Las **pestañas “Quiénes somos” / “Nuestro equipo”**, los tres pilares, los nombres, cargos, bios y fotos de Antonio, Franco y Matías.
- **Bock** como asistente flotante con respuestas rápidas.
- El **formulario** que arma el mensaje y abre WhatsApp, con el número `+56 9 6186 4903`.
- El **footer** completo con navegación, soluciones, legales, Instagram y LinkedIn.
- El **azul marino `#1B3A6B`** como color de marca, el logo hexagonal y las seis páginas legales.

## Qué cambió

### Dirección visual: “Sala de control”

- El sitio pasó de una estética de landing genérica a la de una **sala de control de pyme**: marino profundo `#0B1F3A`, retícula tenue de monitor, cifras monoespaciadas y un cian que marca lo que está activo.
- Tipografía nueva y self-hosted: **Archivo** para titulares, **Figtree** para texto, **Instrument Serif itálica** como acento dentro del titular y **IBM Plex Mono** para etiquetas y datos.
- Paleta: marino, cian `#22B8CF` para lo activo y la acción sobre fondos oscuros, azul marino para la acción sobre fondos claros, ámbar `#F2A93B` para el foco y los avisos, menta `#6FD3A8` para estados correctos, papel frío `#F1F2ED` y arena `#E7E8E1` en las secciones claras.
- Se eliminaron el glow radial del hero, los degradados cian de gráficos y barras, los iconos en recuadro de las soluciones y el borde de acento superior de los dolores.
- La numeración de sección dejó de ser un kicker diminuto encima del titular: ahora es una línea de metadatos **debajo del `h2`**, en la columna derecha de cada cabecera.
- Todos los textos funcionales subieron a un piso de **11 px** (10 px solo en etiquetas de datos dentro de las demos); los datos clave y los badges usan 12 px.
- Logo plano actualizado a la paleta actual (detalle crema, puntos ámbar) e **imagen social 1200×630 regenerada** con `tools/og.js`.

### Pasada de pulido

- **Hero:** el panel se alinea al inicio de la columna y entra escalonado (KPIs → gráfico → sugerencia IA). Las dos píldoras de estado —WhatsApp conectado y stock actualizado— salieron del interior del panel y ahora forman una fila estática debajo, para no tapar la sugerencia de IA ni desbordarse en móvil.
- **Dolores:** se quitaron los iconos en recuadro; queda el número mono con un hairline que ordena la tarjeta.
- **Pilares:** los iconos van sueltos, sin caja, para bajar el ruido de contenedores.
- **Soluciones:** el estado “Disponible” y el botón “Ver demo…” comparten un pie de tarjeta (estado a la izquierda, acción a la derecha). Se eliminó el badge flotante que se montaba sobre la demo.
- **Confianza del hero:** los tres apoyos pasan a ser ítems con separador de punto; en móvil se apilan y el separador desaparece.
- **Contacto:** la numeración de sección queda alineada a la izquierda en desktop y el bloque de personas se ancla al pie de la columna, en equilibrio con el formulario.
- **Formulario:** “(opcional)” en el label, caret cian, scrollbar tintada y cifras tabulares.
- **Panel del hero:** en anchos intermedios (≤1180 px) los tags de los KPI pasan debajo de la cifra para no chocar con la etiqueta; las señales caben en una fila a 390 px y se apilan sin desbordar a 360 px.
- **Detalle:** etiquetas de 7 px subidas a 10 px, más aire entre grupos del footer en móvil y se quitó el pulso del punto “En vivo” para no simular datos en tiempo real.
- **Modal de demos en móvil:** el encabezado del panel pasa a dos filas —nombre del panel arriba; negocio y hora abajo— y el tercer KPI ocupa el ancho completo, para que ninguna etiqueta se corte ni quede una tarjeta sola a medio ancho.

### Pasada premium

- **Atmósfera:** el hero, soluciones, asesoría y contacto pasan de un color plano a un degradado marino muy corto. La retícula del fondo se afina y se enmascara en radial, y el panel del hero se apoya en un halo cian difuso en lugar del marco desplazado que tenía antes.
- **Superficies:** las tarjetas claras usan un degradado crema→arena de dos pasos, radio 10–14 px, hairline de 1 px y sombra en capas (interior blanca + sombra corta + sombra larga y suave). Las oscuras llevan borde de 1 px y brillo interior.
- **Tipografía:** `h1` a `clamp(2.55rem, 5.1vw, 4.75rem)` con `line-height .94` y tracking `-.05em`; `h2` a `clamp(2.05rem, 3.7vw, 3.35rem)` con `line-height 1`. El titular arranca alineado con el panel, sin etiqueta previa, para que la frase sea lo primero que se lee.
- **Aire:** el padding vertical de las secciones sube a `clamp(72px, 8.5vw, 128px)` y las cabeceras ganan margen inferior y una línea superior más tenue.
- **Botones:** radio 6 px, brillo interior de 1 px, sombra corta y desplazamiento de 1 px en hover. El header sticky pasa a blur de 18 px con saturación y sombra larga al hacer scroll.
- **Marquesina:** 52 s, texto mono de 12 px y fundido en el borde derecho para que el texto no choque con el botón de pausa.
- **Dolores y soluciones:** dolores con hover solo en dispositivos con puntero; soluciones con demo de brillo tenue arriba y cuerpo cálido abajo.
- **Asesoría y pestañas:** panel marino con borde y hairline interior; riel de pestañas hundido y pestaña activa con brillo interior.
- **FAQ:** el indicador +/− pasa a un círculo de 30 px que se invierte en hover y en estado abierto.
- **Contacto y formulario:** checklist en filas con hairlines; formulario compacto en dos columnas —nombre/negocio y WhatsApp/interés, mensaje a ancho completo—, select con chevron propio y tarjeta crema con degradado y sombra profunda. Las columnas quedan balanceadas en desktop.
- **Footer:** degradado de marino a marino profundo y hairline cian superior.
- **Corrección:** la banda de problema ya no pierde la canaleta lateral en móvil (`padding-block` en vez de `padding`).

### Pasada de contenido y detalle

- **El cambio:** dentro de “Qué resolvemos”, antes del CTA, se agregó un panel marino con cuatro filas comparativas “Hoy / Con PramTech” (stock, pedidos, quiebres y decisiones). En desktop las columnas se rotulan una sola vez; en móvil cada celda lleva su etiqueta y las filas se apilan. El bloque usa la misma retícula enmascarada del hero y un titular sin etiqueta previa.
- **Integraciones:** banda “Se conecta con lo que ya usas” entre las soluciones y la nota legal, con WhatsApp, Instagram, tienda online y planillas. En móvil pasa a dos filas y la nota legal pierde su hairline para no duplicar el separador.
- **Ficha del equipo:** bajo la firma de “Quiénes somos” se agregó una ficha de tres columnas —Equipo (3 personas senior), Base (Chile) y Foco (pymes que venden productos)— separada por un hairline. En móvil la tercera pasa a ancho completo.
- **Footer:** pill “Lanzamiento en preparación” bajo la bajada de marca, con punto ámbar; enlace “Volver arriba” con flecha en la fila inferior. En móvil la fila de metadatos se apila y el pie gana espacio inferior para que el widget de Bock no tape el enlace.
- **Modal de demos:** nota “Ejemplo ilustrativo con datos ficticios…” antes del pie, para dejar claro que las cifras del panel no son resultados prometidos.
- **Ajustes:** los rótulos de la ficha suben a 11 px (piso de legibilidad) y el titular de “El cambio” queda alineado arriba con su bajada, sin etiqueta diminuta encima.

### Pasada de movimiento

- **Cabecera:** línea de progreso de lectura de 2 px (cian→menta) al pie del header, actualizada con `requestAnimationFrame` y `transform: scaleX()`; aparece al salir del pliegue. El logo se asienta un 6 % al hacer scroll.
- **Entradas:** las cabeceras de sección dibujan su hairline de izquierda a derecha; las cuatro filas de “El cambio” entran escalonadas (60 ms) y la ficha de equipo hace lo mismo (70 ms). Los puntos del gráfico del hero aparecen cuando el trazo los alcanza.
- **Microinteracciones:** los botones bajan 1 px y se comprimen al presionar; la demo de cada solución sube 3 px con el hover de la tarjeta; el botón de cerrar del modal gira 90°.
- **Pestañas y FAQ:** el panel de pestañas entra con un desplazamiento de 6 px; el indicador de la FAQ se dibuja con gradientes y gira a × al abrir, y la respuesta despliega su altura en 320 ms con `::details-content` e `interpolate-size`.
- **Modal:** el fondo hace fade en 220 ms y el diálogo entra con 12 px de desplazamiento y escala 0.985; al cerrar recorre el mismo camino en 180 ms antes de vaciarse, sin retrasar la devolución del foco ni el desbloqueo del scroll.
- Todo el movimiento nuevo usa `transform` y `opacity` (o `clip` en la FAQ) y se apaga con `prefers-reduced-motion`.

### Pasada de comodidad

- **Formulario:** contador `0 / 400` en el textarea que se tiñe de ámbar al acercarse al límite; campos a 16 px para que iOS no haga zoom; `autocapitalize`, `spellcheck` y `enterkeyhint` según el tipo de dato; autofill estilizado para que no rompa el fondo crema.
- **Contexto:** al abrir una demo se preselecciona el interés correspondiente en el formulario (solo si el usuario aún no eligió), de modo que el mensaje de WhatsApp nace con contexto.
- **Foco y fondo:** `inert` en `main`, footer, Bock y marquesina mientras el menú móvil o el modal están abiertos; el foco vuelve siempre al botón de origen. El contenido no se desplaza al bloquearlo: `scrollbar-gutter: stable` se activa solo con `body.modal-open` o `body.menu-open`.
- **Navegación:** el enlace de la sección visible lleva `aria-current="location"` y color cian en el menú móvil; los enlaces externos avisan “se abre en una pestaña nueva” a lectores de pantalla.
- **Sistema:** `prefers-contrast: more` refuerza textos secundarios y hairlines; las páginas legales se imprimen sin cabecera, footer, Bock ni navegación, con membrete “PramTech · pramtech.cl”.

### Pasada de microinteracciones

- **Menú móvil:** los enlaces y el botón de cierre entran escalonados cada 50 ms; el ícono de hamburguesa se dibuja con tres líneas absolutas para que la × quede centrada y por sobre el panel. El menú se cierra al tocar un enlace, el logo o el fondo vacío, y el foco vuelve al botón solo cuando corresponde.
- **Soluciones:** al revelarse cada tarjeta, las filas de la demo, los pedidos, las burbujas y las barras entran escalonados (las barras crecen con `scaleY`). En hover la demo sube, las barras se estiran un 6 % y la flecha de “Ver demo” avanza 3 px.
- **Pestañas:** la pestaña activa entra con una escala breve (`tabOn`, 280 ms) para confirmar el cambio sin mover el layout.
- **Bock:** indicador de escritura de tres puntos antes de cada respuesta, mensajes y chips con entrada propia, cierre del panel con salida de 160 ms, botón de enviar con hover y compresión al presionar. La respuesta llega con un retardo corto para que la conversación se sienta humana.
- **Modal:** KPIs, filas, pedidos, burbujas, insight y barras entran escalonados al abrir la demo; las barras del reporte crecen desde la base. El cierre conserva la salida de 180 ms.
- **Formulario:** el botón de enviar muestra un spinner, se deshabilita y marca `aria-busy` mientras abre WhatsApp; el estado de éxito entra con `statusIn` y vuelve a su estado normal a los 1,2 s. Los errores aparecen con `errorIn`, el label se tiñe de cian con `:focus-within` y el correo de contacto suma un botón “copiar” con check temporal y respaldo `execCommand`.
- **Sistema:** `prefers-reduced-transparency` retira el blur del header y del overlay del modal. La navegación activa pasó de `IntersectionObserver` a un cálculo por frame con `requestAnimationFrame`, de modo que al volver arriba ya no queda un enlace marcado por error.

### Estructura

- Orden: marquesina → header → hero con panel → banda de problema → dolores → soluciones → asesoría → nosotros/equipo → FAQ → contacto → footer.
- Se agregó un **FAQ de cinco preguntas** con su JSON-LD `FAQPage`, sin tocar el resto del contenido.
- Se mantuvo el `h1` original y un solo `h1` por página.

### Interacción y accesibilidad

- **Marquesina pausable**: botón de 44 px con `aria-pressed` que detiene la animación y cambia su etiqueta; también se pausa al pasar el mouse o al enfocar.
- **Modal de demos** con foco atrapado, cierre con Escape, retorno del foco al botón que lo abrió y bloqueo del scroll de fondo.
- **Pestañas** con `role="tablist"`, `aria-selected`, navegación con flechas y foco visible en el panel.
- **Bock** en móvil aparece a los 260 px de scroll y se retira cuando la sección de contacto está a la vista, para no tapar el formulario.
- Formulario con validación, foco en el primer error, `role="status"` y enlace de respaldo si el popup de WhatsApp se bloquea.
- Enlace “Saltar al contenido”, foco visible en todo el sitio, objetivos táctiles de 44 px y `prefers-reduced-motion` respetado.

### SEO y rendimiento

- `lang="es-CL"`, title y description únicos, canonical y OG en `https://www.pramtech.cl/`, JSON-LD de `Organization`, `WebSite` y `FAQPage`, `robots.txt` y `sitemap.xml`.
- Fuentes locales con subset latino; sin librerías de terceros en producción.
- Imágenes con dimensiones explícitas, `loading="lazy"` bajo el pliegue y `fetchpriority` en lo crítico.

### Páginas legales

- Las seis páginas conservan su contenido. Se reconstruyeron con `tools/build-legal.js` para usar el header, footer y estilos nuevos.
- Siguen en `noindex` y fuera del sitemap. Los campos `[Razón Social]`, `[RUT]`, `[Domicilio legal]`, `[Teléfono]` y `[Ciudad]` se mantienen tal cual y están en `PENDIENTES.md`.

## Verificación

- `node tools/qa.js`: **186 comprobaciones, todo OK**. Cubre desbordes en 360/390/768/1024/1440 px, `h1` único, `alt`, labels, nombres accesibles, objetivos táctiles, consola, formulario, menú, marquesina, Bock, pestañas, modal y `reduced motion`.
- `impeccable detect http://localhost:4173/`: **6 anti-patrones**, todos deliberados y documentados en `DESIGN.md` (serif itálica, tarjetas con demo dentro y marquesina); **2 avisos**.
- Lighthouse móvil (`docs/lighthouse-mobile.json`): **Performance 99 · Accessibility 100 · Best Practices 100 · SEO 100**; LCP 2,1 s, CLS 0, TBT 0 ms.
- Capturas: `docs/review-1440.png`, `docs/review-390.png`, `docs/viewport-*.png` y los estados móviles en `docs/state-*.png`. La pasada premium quedó documentada además en `docs/premium-1440.png`, `docs/premium-1024.png`, `docs/premium-768.png` y `docs/premium-390.png`.

## Archivos principales

- `index.html`, `styles.css`, `home.css`, `home2.css`, `overlays.css`, `script.js`
- `assets/` (fuentes, retratos, logo, favicons, imagen social)
- Seis páginas legales
- `robots.txt`, `sitemap.xml`
- `DESIGN.md`, `PENDIENTES.md`, `CAMBIOS.md`
- `tools/` y `docs/` son material de desarrollo; no se publican.
