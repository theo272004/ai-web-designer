# AI Web Designer

Biblioteca estática de efectos web con previews visuales, filtros, modal de detalle y prompts listos para copiar.

## Estructura

- `index.html`: página completa con HTML, CSS y JavaScript internos.
- `scripts/build-static.mjs`: copia `index.html` y `favicon.svg` a `dist/` y `docs/`.
- `dist/`: salida usada por GitHub Actions.
- `docs/`: copia local lista para GitHub Pages si se publica desde carpeta `docs`.

## Ejecutar

Puedes abrir `index.html` directamente en el navegador.

## Build

```powershell
npm run build
```

El build no compila frameworks; solo sincroniza la página estática.
