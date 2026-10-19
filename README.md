# Sale by Saimon

Garage sale personal de sneakers y ropa — Córdoba, Argentina.

## Estado de esta versión

- 19 productos reales cargados: 15 sneakers + 3 prendas de ropa + 1 item de tecnología.
- Fotos locales dentro de `assets/products/`.
- Metadata de cada producto: talle, style, colorway, release date y season cuando aplica.
- Precio de venta en USD y condición cargados para los 18 productos.
- La UI muestra el precio, el estado sobre 10 y una barra azul proporcional.
- La UI permite filtrar por categoría y talle, y ordenar por catálogo, nombre, precio o condición.
- Cada producto se presenta como unidad única y puede consultarse por Instagram DM.
- La categoría `OTROS` se muestra también en una sección separada de “Otros items”.
- Instagram configurado: `@gsimonnn`.
- Consultas directas: `https://ig.me/m/gsimonnn`.
- Metadata Open Graph, Twitter Card y favicon configurados en `index.html`.

## Desarrollo local

No requiere dependencias ni build. Desde la carpeta del proyecto:

```bash
python3 -m http.server 8000
```

Abrí `http://localhost:8000`.

## Estructura

```text
.
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── products.js
│   └── app.js
└── assets/
    ├── favicon.svg
    └── products/
        └── imágenes de productos
```

## Datos para mantener

1. Actualizar `price` únicamente con precios confirmados en USD.
2. Actualizar `condition` únicamente con estados reales de 0 a 10.
3. Mantener las rutas de imágenes relativas a `assets/products/`.
4. Mantener el usuario y enlace de Instagram DM actualizados.

## Publicación

El proyecto está preparado para GitHub Pages porque es un sitio estático sin dependencias ni build step. Los cambios deben realizarse en una rama dedicada, publicarse en `origin` y fusionarse mediante Pull Request hacia `main`.

Repositorio remoto: `https://github.com/S4imoncit0/garage-sale`.
