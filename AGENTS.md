# Agent instructions

- This is a dependency-free static site: `index.html` loads `js/products.js` before `js/app.js`, and `css/style.css` contains all styling.
- Run locally from the repository root with `python3 -m http.server 8000`, then open `http://localhost:8000`; do not use `file://` because the app expects normal HTTP asset loading.
- Product inventory is maintained in `js/products.js` as `window.PRODUCTS`; update product metadata there rather than hardcoding catalog content in `js/app.js` or `index.html`.
- `condition` is a numeric score from 0 to 10 (for example `9.5`), used by `js/app.js` to render the blue condition meter; leave it `null` when the real condition is unknown.
- Prices and conditions are intentionally separate fields; `price: null` renders “Consultar” and `condition: null` hides the condition display. The current 19-product inventory has prices and conditions defined; use `null` only when the value is genuinely unknown.
- The general contact section and product modal direct inquiries to Instagram DM via `https://ig.me/m/gsimonnn`; do not add or restore a personal WhatsApp number.
- The catalog supports category and size filters plus sorting by catalog order, name, price, and condition; preserve these controls when editing the catalog UI.
- Product cards should retain the `Unidad única` label and featured products should retain the `Nuevo` label when applicable.
- `OTROS` is a valid inventory category and is rendered both in the catalog filter and the dedicated “Otros items” section.
- SEO/social metadata lives in `index.html`; the favicon is `assets/favicon.svg`.
- There is no package manager, build step, test suite, linter, or formatter configured; verify changes by serving the site and checking the relevant catalog/modal interactions in a browser.
- Keep product image paths relative to `assets/products/` and preserve the existing local asset filenames when editing inventory.
- Before applying any requested repository change, create and switch to a dedicated branch; never work directly on `main`.
- After making a change, commit it with a descriptive message, push the branch to `origin`, and open a Pull Request against `main`; do not push directly to `main`.
- If updated products or scripts do not appear in Chrome, perform a hard refresh with `⌘ + Shift + R`.

## Versión en español

- Es un sitio estático sin dependencias: `index.html` carga `js/products.js` antes que `js/app.js`, y todos los estilos están en `css/style.css`.
- Para ejecutarlo localmente, usá `python3 -m http.server 8000` desde la raíz y abrí `http://localhost:8000`; no uses `file://` porque la aplicación necesita cargar recursos por HTTP.
- El inventario se mantiene en `js/products.js` mediante `window.PRODUCTS`; actualizá allí los metadatos, no hardcodees productos en `js/app.js` o `index.html`.
- `condition` es un puntaje numérico de 0 a 10, por ejemplo `9.5`, que `js/app.js` usa para mostrar la barra azul de condición; dejalo en `null` si se desconoce el estado real.
- Precio y condición son campos independientes: `price: null` muestra “Consultar” y `condition: null` oculta el estado. Los 19 productos actuales tienen precio y condición definidos; usá `null` solo cuando el dato sea realmente desconocido.
- La sección general de contacto y el modal de producto dirigen las consultas a Instagram DM mediante `https://ig.me/m/gsimonnn`; no agregues ni restaures un número personal de WhatsApp.
- El catálogo permite filtrar por categoría y talle, y ordenar por catálogo, nombre, precio y condición; conservá estos controles al editar la interfaz.
- Las tarjetas deben conservar la etiqueta `Unidad única` y los productos destacados deben conservar `Nuevo` cuando corresponda.
- `OTROS` es una categoría válida del inventario y se muestra tanto en el filtro del catálogo como en la sección dedicada “Otros items”.
- La metadata SEO/social está en `index.html`; el favicon está en `assets/favicon.svg`.
- No hay gestor de paquetes, build, tests, linter ni formatter configurados; verificá los cambios sirviendo el sitio y revisando en el navegador el catálogo y los modales correspondientes.
- Mantené las rutas de imágenes relativas a `assets/products/` y conservá los nombres de archivos locales existentes al editar el inventario.
- Antes de aplicar cualquier cambio solicitado en el repositorio, creá y cambiá a una rama dedicada; nunca trabajes directamente sobre `main`.
- Después de realizar un cambio, hacé un commit descriptivo, publicá la rama en `origin` y abrí un Pull Request hacia `main`; no hagas push directo a `main`.
- Si los productos o scripts actualizados no aparecen en Chrome, hacé una recarga forzada con `⌘ + Shift + R`.
