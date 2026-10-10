# Agent instructions

- This is a dependency-free static site: `index.html` loads `js/products.js` before `js/app.js`, and `css/style.css` contains all styling.
- Run locally from the repository root with `python3 -m http.server 8000`, then open `http://localhost:8000`; do not use `file://` because the app expects normal HTTP asset loading.
- Product inventory is maintained in `js/products.js` as `window.PRODUCTS`; update product metadata there rather than hardcoding catalog content in `js/app.js` or `index.html`.
- `condition` is a numeric score from 0 to 10 (for example `9.5`), used by `js/app.js` to render the blue condition meter; leave it `null` when the real condition is unknown.
- Prices and conditions are intentionally separate fields; `price: null` renders “Consultar” and the WhatsApp URL still contains the placeholder `12345678` until replaced with the real number.
- There is no package manager, build step, test suite, linter, or formatter configured; verify changes by serving the site and checking the relevant catalog/modal interactions in a browser.
- Keep product image paths relative to `assets/products/` and preserve the existing local asset filenames when editing inventory.
- Before applying any requested repository change, create and switch to a dedicated branch; never work directly on `main`.

## Versión en español

- Es un sitio estático sin dependencias: `index.html` carga `js/products.js` antes que `js/app.js`, y todos los estilos están en `css/style.css`.
- Para ejecutarlo localmente, usá `python3 -m http.server 8000` desde la raíz y abrí `http://localhost:8000`; no uses `file://` porque la aplicación necesita cargar recursos por HTTP.
- El inventario se mantiene en `js/products.js` mediante `window.PRODUCTS`; actualizá allí los metadatos, no hardcodees productos en `js/app.js` o `index.html`.
- `condition` es un puntaje numérico de 0 a 10, por ejemplo `9.5`, que `js/app.js` usa para mostrar la barra azul de condición; dejalo en `null` si se desconoce el estado real.
- Precio y condición son campos independientes: `price: null` muestra “Consultar” y la URL de WhatsApp mantiene el placeholder `12345678` hasta reemplazarlo.
- No hay gestor de paquetes, build, tests, linter ni formatter configurados; verificá los cambios sirviendo el sitio y revisando en el navegador el catálogo y los modales correspondientes.
- Mantené las rutas de imágenes relativas a `assets/products/` y conservá los nombres de archivos locales existentes al editar el inventario.
- Antes de aplicar cualquier cambio solicitado en el repositorio, creá y cambiá a una rama dedicada; nunca trabajes directamente sobre `main`.
