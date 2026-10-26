# Diseño · PramTech

## Qué es este sitio

La portada de PramTech conserva **todo lo que el sitio original ya hacía** —marquesina de lanzamiento, hero con panel de inventario y sugerencia de IA, tres dolores, cuatro soluciones con demo, asesoría en tres pasos, pestañas de “Quiénes somos” y “Nuestro equipo”, pilares, formulario a WhatsApp, footer y el asistente Bock— y le cambia la piel: deja de parecer una landing de software y pasa a parecer **la sala de control de una pyme ordenada**.

La metáfora es literal y visual: fondo azul marino profundo, una retícula tenue de monitor, datos en monoespaciada, cifras grandes y un acento cian que marca lo que está vivo. Pero el contenido sigue hablando de bodega, pedidos y planillas, y las personas siguen ahí.

## Dirección · “Sala de control”

1. **Tipografía:** **Archivo** (600–800) para titulares; apretada, industrial, sin adornos. **Figtree** para texto. **Instrument Serif itálica** solo como acento emocional dentro del titular. **IBM Plex Mono** para etiquetas, cifras y datos.
2. **Color:** azul marino profundo `#0B1F3A` como base de las bandas oscuras, azul de marca `#1B3A6B`, cian `#22B8CF` para lo activo y para la acción sobre fondos oscuros, ámbar `#F2A93B` para el foco y los avisos, menta `#6FD3A8` para estados correctos, y papel frío `#F1F2ED` / arena `#E7E8E1` en las secciones claras.
3. **Layout:** retícula de 12 columnas, contenedor de 1240 px, titulares a la izquierda y metadatos a la derecha. La numeración de sección (`01 / QUÉ RESOLVEMOS`) vive **debajo del titular, como meta de la columna derecha**, no como kicker encima.
4. **Objetos, no tarjetas genéricas:** cada solución muestra una pieza de interfaz real (tabla de stock, pedidos, chat, reportes) dentro de un marco oscuro. Esas piezas son el argumento; no hay iconos en recuadro ni métricas de crecimiento inventadas.
5. **Movimiento:** revelado al scroll, un trazo de gráfico que se dibuja, la marquesina que corre y se puede pausar. Nada de parallax ni rebote.

## Sistema visual

### Color

| Token | Valor | Uso |
|---|---|---|
| `--navy-deep` | `#0B1F3A` | Fondo de hero, soluciones y contacto |
| `--navy-800` | `#0E274A` | Superficies y paneles sobre el marino |
| `--navy` | `#1B3A6B` | Azul de marca, titulares sobre claro |
| `--ink` | `#0A1A30` | Texto principal |
| `--cyan` | `#22B8CF` | Datos activos, series, enlaces |
| `--cyan-bright` | `#6FE3EE` | Acento sobre marino |
| `--cyan-dark` | `#086C7B` | Acento legible sobre papel |
| `--amber` | `#F2A93B` | Foco, avisos y acentos puntuales |
| `--mint` | `#6FD3A8` | Estados correctos |
| `--cream` | `#F8F4EA` | Texto sobre oscuro y tarjetas claras |
| `--paper` | `#F1F2ED` | Fondo claro principal |
| `--sand` | `#E7E8E1` | Bandas y superficies secundarias |
| `--muted` | `#536071` | Texto secundario |
| `--line` | `rgba(10,26,48,.14)` | Líneas finas |

El color de acción depende del fondo: **cian sobre marino**, **azul marino sobre papel**. El ámbar queda para el foco de teclado, los avisos y acentos puntuales como el punto de la marquesina. El cian nunca se usa para texto de párrafo sobre papel; sobre papel el acento es `--cyan-dark`.

### Tipografía

- **Archivo** 600–800 en titulares: `h1 clamp(2.55rem, 5.1vw, 4.75rem)` con `line-height .94` y tracking `-.05em`; `h2 clamp(2.05rem, 3.7vw, 3.35rem)` con `line-height 1` y tracking `-.05em`.
- **Figtree** 300–900 en cuerpo, navegación, botones y formularios. Cuerpo a 1rem–1.125rem, interlineado 1.6.
- **Instrument Serif** itálica solo dentro del `h1` (“sin volverte experto en tecnología”) y en la cita de asesoría. Es el único gesto cálido del sistema.
- **IBM Plex Mono** 400/500 en etiquetas, cifras, estados y datos de las demos.
- **Piso de legibilidad: 10 px** en etiquetas de datos dentro de las demos; **11 px** en el resto de etiquetas funcionales. Los datos clave y los badges usan 12 px.
- `text-wrap: balance` en titulares y `pretty` en párrafos para evitar viudas y líneas huérfanas.
- Fuentes self-hosted en `assets/fonts/`, `font-display: swap`, subset latino.

### Retícula y ritmo

- Contenedor 1240 px, canaleta `clamp(20px, 5vw, 52px)`, secciones con `padding-block` fluido (72–128 px).
- Alternancia de fondos: marino (hero, soluciones, contacto) → papel → arena → papel. El contraste de banda es lo que separa secciones, no las cajas.
- `section-head` en dos columnas: el `h2` ocupa la izquierda y abarca dos filas; a la derecha van la numeración de sección y el párrafo de apoyo. En móvil se apila y la numeración queda debajo del titular.
- Líneas de 1 px, radios de 8–14 px. Las superficies claras usan un degradado cálido muy corto (crema a arena) y una sombra en capas; las oscuras, un borde de 1 px y un hairline interior. Las sombras solo aparecen donde hay elevación real: panel del hero, tarjeta del formulario, tarjetas de soluciones y hover de dolores.

### Movimiento

- `.reveal`: `opacity 0 → 1` y `translateY(18px) → 0`, 700 ms, `cubic-bezier(.22,.7,.2,1)`, escalonado con `--i`.
- Hero: el trazo del gráfico se dibuja en 1,6 s con 0,4 s de retraso y los tres puntos aparecen cuando la línea los alcanza.
- **Cabecera:** el progreso de lectura se dibuja como una línea cian→menta de 2 px al pie del header, actualizada con `requestAnimationFrame` y `transform: scaleX()`. Al hacer scroll el logo se asienta un 6 %.
- **Entradas:** las cabeceras de sección dibujan su hairline de izquierda a derecha (900 ms); las filas de “El cambio” entran escalonadas cada 60 ms; la ficha de equipo hace lo mismo cada 70 ms.
- **Microinteracciones:** los botones bajan 1 px y se comprimen al presionar; la demo de cada solución sube 3 px cuando la tarjeta recibe hover; el botón de cerrar del modal gira 90°.
- **Pestañas y FAQ:** el panel de pestañas entra con 6 px de desplazamiento; el indicador de la FAQ es un signo dibujado con gradientes que gira a × al abrir, y la respuesta despliega su altura en 320 ms (`::details-content` + `interpolate-size`).
- **Modal:** fondo con fade de 220 ms y diálogo con 12 px de desplazamiento y escala 0.985; al cerrar recorre el mismo camino en 180 ms antes de vaciarse.
- **Entradas de contenido:** al revelarse una solución, sus filas, pedidos, burbujas y barras entran escalonadas; las barras crecen con `scaleY`. Al abrir una demo, KPIs, filas, pedidos, burbujas, insight y barras repiten esa entrada en cascada.
- **Menú móvil:** enlaces escalonados cada 50 ms y hamburguesa de tres líneas absolutas que se convierte en × por sobre el panel.
- **Bock:** indicador de escritura de tres puntos, mensajes y chips con entrada propia, y salida del panel de 160 ms.
- **Formulario:** spinner y `aria-busy` al enviar, estado de éxito con `statusIn`, errores con `errorIn` y label cian en `:focus-within`.
- Marquesina: 52 s lineales en bucle, se pausa al pasar el mouse, al enfocar y con el botón de pausa (44 px, `aria-pressed`). El borde derecho se funde con el fondo para que el texto no choque con el botón.
- `prefers-reduced-motion: reduce` deja todo visible, sin animaciones, sin desplazamientos y sin scroll suave. `prefers-reduced-transparency: reduce` retira el blur del header y del overlay.

### Componentes

- **Botón primario:** cian con texto marino sobre fondos oscuros; azul marino con texto crema sobre fondos claros. 48 px de alto mínimo, radio 6 px, brillo interior de 1 px y sombra corta. **Secundario:** borde claro sobre oscuro o enlace con flecha.
- **Panel de inventario (hero):** tarjeta crema elevada sobre un halo cian difuso, sin marco desplazado. Barra superior con degradado marino, tres puntos de estado uniformes (el primero cian) y la etiqueta “En vivo”. Bajo el panel van dos señales en píldora —WhatsApp conectado y stock actualizado— como una fila estática, nunca encima del contenido. Es una vista de ejemplo, no una promesa de métricas.
- **Dolores:** tres bloques con superficie crema en degradado, radio 10 px, número mono y hairline; cita en Archivo y explicación. La elevación aparece solo en hover.
- **Soluciones:** cuatro tarjetas de radio 12 px con una demo de interfaz arriba y texto abajo. La demo tiene un brillo cian muy tenue en la esquina; el cuerpo claro usa el mismo degradado cálido de las tarjetas. El pie separa estado (“Disponible”) del botón “Ver demo…”, que abre un modal con foco atrapado y cierre con Escape. Bajo las tarjetas, una banda de integraciones lista WhatsApp, Instagram, tienda online y planillas sobre un hairline, y cierra la nota legal.
- **El cambio:** panel marino con la retícula del hero en la esquina, titular a la izquierda y bajada a la derecha. Cuatro filas comparan “Hoy” y “Con PramTech” con guion ámbar y visto menta; en desktop los rótulos van una sola vez sobre las columnas y en móvil cada celda lleva el suyo. No es una tabla de datos: es una lista de hábitos que cambian.
- **Asesoría:** panel marino con degradado de marino a marino profundo, borde de 1 px, hairline interior y la cita; tres pasos numerados a la derecha.
- **Pestañas:** “Quiénes somos” / “Nuestro equipo” dentro de un riel hundido; la activa lleva brillo interior y sombra corta. `role="tablist"`, flechas del teclado y panel con foco visible. Bajo la firma, una ficha de tres columnas —Equipo, Base y Foco— separa los datos del relato.
- **FAQ:** `<details>` nativo, cinco preguntas. El indicador +/− vive en un círculo de 30 px que se invierte en hover y en estado abierto.
- **Formulario:** tarjeta crema en degradado con sombra profunda; nombre/negocio y WhatsApp/interés en dos columnas, mensaje a ancho completo. Select con chevron propio, foco cian y validación que enfoca el primer error, anuncia el estado con `role="status"` y abre `wa.me` con el mensaje armado. Mientras envía, el botón muestra un spinner y queda deshabilitado con `aria-busy`.
- **Contacto:** checklist en filas con hairlines, formulario compacto y bloque de personas anclado al pie de la columna; en desktop ambas columnas terminan a la misma altura. El correo suma un botón de copiar de 44 px con check temporal y aviso para lectores de pantalla.
- **Bock:** botón flotante con panel de chat guiado por respuestas rápidas, indicador de escritura y entrada animada de mensajes y chips. En móvil aparece recién a los 260 px de scroll y se retira cuando la sección de contacto está a la vista.
- **Footer:** degradado marino, cuatro columnas y, bajo la bajada de marca, la píldora “Lanzamiento en preparación” con punto ámbar. La fila inferior suma “Volver arriba” con flecha; en móvil se apila y el pie deja espacio para que el widget de Bock no la tape.
- **Modal de demos:** la demo se abre sobre un fondo marino difuminado y, antes del pie, una nota aclara que las cifras son ficticias y que el panel real se arma con los datos del negocio.

### Imágenes

- Retratos reales del equipo y de Bock, en blanco y negro, recorte uniforme, AVIF/WebP con `srcset` y dimensiones explícitas.
- Logo reconstruido en versión plana: hexágono marino con detalle crema y dos puntos ámbar.
- Imagen social 1200×630 generada con `tools/og.js`, en la misma dirección visual.

### Voz

- Español de Chile, tuteo, frases cortas, palabras de pyme: bodega, stock, pedidos, ventas, WhatsApp, planillas.
- La IA se explica como una herramienta que sugiere y avisa, nunca como alguien que atiende solo.
- No se inventan clientes, testimonios, precios, plazos ni horarios. Lo que falta está en `PENDIENTES.md`.

### Comodidad y estados

- **Formulario:** inputs de 16 px (sin zoom en iOS), `autocapitalize`/`spellcheck`/`enterkeyhint` según el campo, autofill con el mismo fondo crema y contador `0 / 400` en mono que pasa a ámbar cerca del límite.
- **Contexto:** abrir una demo preselecciona el interés del formulario si aún está vacío; el mensaje de WhatsApp llega con el tema correcto.
- **Foco:** `inert` en el contenido de fondo mientras hay menú o modal abierto; el foco vuelve al disparador. `scrollbar-gutter: stable` solo durante esos estados para que el layout no salte.
- **Navegación:** `aria-current="location"` en la sección visible y color cian en el menú móvil; el cálculo se hace por frame y se limpia al volver arriba. Los enlaces externos anuncian pestaña nueva. El menú móvil se cierra al tocar un enlace, el logo o el fondo, y solo devuelve el foco al botón cuando el cierre viene del teclado.
- **Sistema:** `prefers-contrast: more` sube el contraste de textos secundarios y hairlines. En impresión, las legales salen sin cabecera, footer, Bock ni navegación y con el membrete “PramTech · pramtech.cl”.

### Excepciones deliberadas

El detector de anti-patrones deja seis hallazgos, y todos son decisiones conscientes:

- **Titular en serif itálica:** el contraste entre Archivo y la itálica es el gesto de la marca; sin él el hero se vuelve un bloque industrial sin temperatura.
- **Tarjetas dentro de tarjetas (cuatro):** las soluciones contienen una demo de interfaz —tabla, pedidos, chat y reportes—. La demo es el contenido, no decoración.
- **Marquesina:** “Próximamente” es parte del sitio original y el usuario pidió conservarla. Se compensa con pausa accesible y `prefers-reduced-motion`.

Quedan además dos avisos que no cuentan como fallo: las tarjetas KPI dentro del panel del hero y la retícula tenue del fondo marino, que sostiene la metáfora de sala de control.

## Verificación

- `node tools/qa.js`: **186 comprobaciones, todo OK**.
- `impeccable detect`: **6 anti-patrones**, todos justificados arriba; **2 avisos**.
- Lighthouse móvil: **Performance 99 · Accessibility 100 · Best Practices 100 · SEO 100**, LCP 2,1 s, CLS 0, TBT 0 ms.
