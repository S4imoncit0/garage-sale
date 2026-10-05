# Sale by Saimon

Garage sale personal de sneakers y ropa — Córdoba, Argentina.

## Estado de esta versión

- 18 productos reales cargados: 15 sneakers + 3 prendas de ropa.
- Fotos locales dentro de `assets/products/`.
- Metadata de cada producto: talle, style, colorway, release date y season cuando aplica.
- Los retail prices **no se muestran**.
- Precio de venta y estado están pendientes; mientras tanto la UI muestra `Consultar` / `A consultar`.
- Cuando se carga `condition` con un puntaje de 0 a 10 (por ejemplo `9.5`), la UI muestra `9.5/10` y una barra azul proporcional.
- Instagram configurado: `@gsimonnn`.
- WhatsApp sigue con el placeholder `12345678` hasta reemplazarlo por el número real.

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
    └── products/
        └── 17 imágenes
```

## Próximos datos a completar

1. Precio de venta en USD de cada producto.
2. Estado real de cada producto.
3. Número real de WhatsApp.
4. Dominio / metadata Open Graph antes de publicar.

## GitHub

Podés copiar el contenido de esta carpeta a tu repositorio `garage-sale`, hacer commit y luego publicarlo con GitHub Pages.
