# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Sitio estático sin build: HTML + CSS + JavaScript vanilla, `index.html` + `assets/`. Debe funcionar abriendo `index.html` y en cualquier hosting estático (GitHub Pages, Cloudflare Pages).

## Users

Dueños y dueñas de pymes chilenas que no saben de tecnología y que se sienten intimidados por ella. Llegan desde el celular, muchas veces mientras atienden su negocio. Su trabajo es ordenar la bodega, los pedidos, los mensajes y las planillas sin tener que aprender un sistema complejo ni contratar a alguien que les explique después.

## Product Purpose

PramTech acompaña a pymes chilenas con herramientas simples para el día a día: control de inventario, pedidos de ventas online y WhatsApp, respuestas a clientes y reportes. El sitio tiene un solo objetivo: que la persona agende el diagnóstico gratuito de 30 minutos por WhatsApp.

## Positioning

No es un software que se vende solo ni un asistente que atiende por su cuenta. Es un equipo pequeño de personas que instala y configura contigo, te capacita y queda disponible. La tecnología es una herramienta que alguien del equipo configura y revisa contigo; las personas son las que acompañan.

## Operating Context

- El negocio se maneja con WhatsApp, un cuaderno, planillas y a veces una tienda online.
- Los pedidos llegan por varios canales y se mezclan.
- El stock se revisa a mano; a veces se compra de más o se acaba un producto que se vende.
- El dueño o dueña no tiene tiempo para aprender algo complicado y teme quedar solo con la herramienta.
- El contacto natural es WhatsApp; el correo es un canal secundario.

## Capabilities and Constraints

- Cuatro soluciones, ninguna se elimina: control de inventario; pedidos y ventas online; respuestas a clientes; reportes.
- El diagnóstico es gratuito, de 30 minutos y sin compromiso.
- Se instala y configura con la persona; se capacita; siempre hay alguien al otro lado.
- No hay precios, plazos de implementación, horarios de atención, casos, testimonios, clientes ni capturas reales de producto disponibles. No inventarlos.
- El formulario debe terminar en el botón “Agendar por WhatsApp” y abrir `wa.me` con un mensaje prellenado.
- Páginas legales existentes: aviso-legal.html, politica-de-privacidad.html, politica-de-cookies.html, terminos-y-condiciones-de-uso.html, condiciones-generales-de-contratacion.html, politica-de-cancelacion.html. No cambiar su contenido; solo el header, el footer y los estilos.
- Dominio decidido para el sitio: `https://www.pramtech.cl/` (es donde vive hoy). Queda como decisión a confirmar por la dirección.
- Instagram y LinkedIn se muestran en el footer; sus URL reales siguen pendientes y hoy apuntan a la portada de cada red. Reemplazarlas cuando existan.
- El widget de Bock abre un chat guiado con respuestas rápidas y deriva a WhatsApp con una persona del equipo. No simula atención autónoma ni promete respuestas que nadie vaya a dar.

## Brand Commitments

- Nombre: PramTech.
- Logo: marca hexagonal existente; se conserva la geometría y se usa una versión plana en azul marino para la interfaz.
- Azul marino `#1B3A6B` como ancla de marca.
- Bock, el perro de la marca, como mascota y detalle humano; su widget es una guía de conversación con respuestas rápidas, no un bot que responde solo.
- Equipo real: Antonio Viluñir T. (Fundador y Director), Franco Armijo M. (Gerente de Servicio), Matias Gonzalez V. (Especialista). Nombres, cargos, bios y fotos se conservan; las bios se reformulan sin jerga, manteniendo su significado.
- WhatsApp `+56 9 6186 4903` y correo `hola@pramtech.com` como canales reales.
- Tono: español de Chile, tuteo, cercano, sereno, sin jerga.

## Evidence on Hand

- Fotos reales del equipo en `assets/team/` (tres retratos en blanco y negro, cuadrados).
- Foto real de Bock en `assets/mascot/bock.jpg`.
- Logo original en `assets/logo.svg`.
- Páginas legales existentes.
- WhatsApp y correo reales.
- No hay: testimonios, clientes nombrados, casos de estudio, capturas reales de las herramientas, precios, rangos, horarios de respuesta, redes sociales con URL real, dirección física, RUT ni razón social públicos.

## Product Principles

1. Las personas primero: rostros, nombres, cargos y una persona real al otro lado del WhatsApp.
2. El problema en palabras de pyme, no en palabras de software.
3. Acompañar antes que instalar: diagnóstico, implementación contigo, capacitación y soporte.
4. La tecnología al final y en simple; nunca como protagonista.
5. Honestidad: solo se promete lo que el sitio ya promete. Si falta prueba, se omite y se anota.

## Accessibility & Inclusion

- WCAG 2.2 AA: contraste, foco visible, objetivos táctiles de al menos 44 px, formularios con labels reales y errores anunciados.
- Mobile-first; revisar 360, 390, 768, 1024 y 1440 px sin scroll horizontal.
- Respetar `prefers-reduced-motion`.
- Un solo `h1`, HTML semántico, enlace “Saltar al contenido”, menú móvil accesible.
