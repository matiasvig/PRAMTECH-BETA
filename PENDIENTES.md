# Pendientes

Todo lo que el sitio evita inventar y que necesita una decisión o un dato real antes de publicar.

## Antes de publicar

1. **Dominio definitivo.** El sitio usa `https://www.pramtech.cl/` en canonical, OG, sitemap y JSON-LD. Las páginas legales todavía mencionan `pramtech.com` dentro de su texto original. Confirmar cuál es el dominio oficial y unificar; si es `.com`, cambiar canonical, OG, sitemap, JSON-LD y los enlaces internos.
2. **Datos legales.** Las seis páginas conservan los campos `[Razón Social]`, `[RUT]`, `[Domicilio legal]`, `[Teléfono]` y `[Ciudad]`. Completarlos con los datos reales y hacer una revisión legal de vigencia, fechas y referencias normativas.
3. **Correo de contacto.** El correo original estaba ofuscado por Cloudflare; se decodificó como `hola@pramtech.com`. Confirmar que esa casilla existe y recibe correo. Si el correo oficial es `.cl`, actualizarlo en el footer, el formulario y el JSON-LD.
4. **Redes sociales.** El footer muestra Instagram y LinkedIn como en el sitio original, pero los enlaces apuntan a `instagram.com` y `linkedin.com` (portadas genéricas). Reemplazarlos por los perfiles reales o retirarlos; si existen, agregarlos también a `sameAs` del JSON-LD.
5. **Horario y tiempo de respuesta.** No se publica ninguno. Definir si se quiere mostrar un horario de atención o un plazo estimado de respuesta por WhatsApp; si no, mantenerlo fuera.

## Contenido que falta

6. **Clientes, testimonios y casos.** No hay ninguno verificable. Si se consiguen, pedir autorización escrita y agregarlos sin inventar resultados ni cifras.
7. **Precios o rangos.** No se muestran. Definir si conviene publicar un rango orientativo o mantener el diagnóstico como único paso.
8. **Capturas reales de las herramientas.** Las cuatro demos del modal son maquetas HTML/CSS con un negocio ficticio (“Almacén Doña Rosa”) y datos de muestra. Reemplazarlas por capturas reales cuando existan, o confirmar que el negocio ficticio no se lea como cliente.
9. **Cifras del panel del hero.** El panel muestra 1.248 productos, 7 por reponer, 12 pedidos y una sugerencia de IA. Son datos de ejemplo, no resultados de clientes. Confirmar que se mantienen como demostración.
10. **Fotos y autorizaciones.** Confirmar que el equipo y Bock autorizan el uso de sus retratos en el sitio y en la imagen social. Las fotos originales están en `assets/team/` y `assets/mascot/`.
11. **Bios y cargos del equipo.** Se conservaron los nombres, cargos y bios del original. Que Antonio, Franco y Matías los revisen y confirmen.
12. **Disponibilidad de las soluciones.** Las cuatro siguen marcadas “Disponible”, como en el sitio original. Confirmar que todas se pueden ofrecer hoy.
13. **Bock.** “Jefe de ánimo” es un guiño de marca, no un cargo formal. Confirmar que se quiere conservar, y revisar las respuestas rápidas del asistente para que coincidan con lo que el equipo puede sostener.
14. **Alcance del diagnóstico.** El sitio dice que la persona “sale con recomendaciones concretas, aunque no trabaje con nosotros” y que “siempre hay alguien al otro lado”. Confirmar que ambas afirmaciones se pueden sostener.

## Técnico y operación

15. **Formulario sin backend.** No envía correos ni guarda datos: arma un mensaje y abre WhatsApp. Confirmar que ese es el flujo deseado. Si se agrega un backend, actualizar la política de privacidad y la de cookies.
16. **Páginas legales en `noindex`.** Están fuera del sitemap y llevan `noindex`. Si se quiere que aparezcan en buscadores, quitar esa meta y agregarlas al sitemap.
17. **Imagen social.** `assets/og-image.png` se regeneró con `tools/og.js` en la dirección actual. Validarla en los depuradores de WhatsApp, Facebook y LinkedIn después de publicar.
18. **Lighthouse de producción.** Los resultados actuales son locales (`docs/lighthouse-mobile.json`). Volver a correrlo contra el hosting real, con caché y compresión del proveedor.
19. **Pruebas en hardware real.** Revisar en iPhone y Android reales, Safari y Firefox, además de los tamaños simulados (360, 390, 768, 1024, 1440 px).
20. **Cabeceras del hosting.** Configurar HTTPS, HSTS, `Content-Security-Policy` y caché larga para `assets/`. El sitio es estático y no requiere servidor de aplicaciones.
21. **Analítica y consentimiento.** No hay analítica instalada. Si se agrega, actualizar la Política de Cookies y el aviso de consentimiento.
22. **Fecha del sitemap.** `lastmod` está en `2026-10-25`; actualizarlo al momento de publicar.
