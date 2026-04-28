# 📦 Biblioteca de Prompts para Efectos Web

Copia y pega cada prompt en tu herramienta de IA favorita para recrear el efecto exacto.

---

## ===========================================================================

### EFECTO 1: SCROLL REVEAL TEXT - "91% de las empresas en Colombia son pymes"

#### ===========================================================================

#### === PROMPT PARA IA ===

"Quiero implementar un efecto de texto que aparece de abajo hacia arriba con blur mientras se hace scroll, estilo 'scroll reveal'.

Requisitos técnicos:
- Usar framer-motion o similar para animaciones
- Cada palabra o segmento debe aparecer con un delay progresivo
- Aplicar blur (aprox 10px) cuando esté oculto
- Eliminar blur y mover desde abajo hacia arriba (aprox 48px) cuando se vuelve visible
- Usar easing: [0.22, 1, 0.36, 1]
- Respetar reduce-motion del sistema para usuarios con preferencias de accesibilidad
- El texto debe estar en un contenedor que cubre al menos 80vh del viewport
- Tipografía moderna y legible, con interlineado relajado"

#### ===========================================================================

#### ===========================================================================

### EFECTO 2: STAGGERED STEPS ANIMATION

#### === PROMPT PARA IA ===

"Quiero implementar una animación de pasos que aparecen con efecto stagger mientras se hace scroll.

Requisitos técnicos:
- Cada paso debe aparecer con un delay progresivo desde abajo
- Aplicar blur cuando esté oculto
- Animación desde 32px hacia arriba
- Usar easing: [0.22, 1, 0.36, 1]
- Respetar reduce-motion del sistema
- Diseño de tarjetas limpias con bordes redondeados, sombras suaves y números de orden
- Colores: fondo claro, tarjetas blancas con border gris, números en indigo
- La sección debe ocupar al menos 20px de padding vertical"

#### ===========================================================================

#### ===========================================================================

### EFECTO 3: CARDS CON BLOBS HOVER

#### === PROMPT PARA IA ===

"Quiero implementar tarjetas de servicios que se expanden con efectos de blob de fondo al hacer hover.

Requisitos técnicos:
- Tarjetas que ocupan al menos 340px de altura, se expanden a 380px+ al hacer hover
- Al hacer hover, aplicar blur a elementos de fondo con:
  * Un blob indigo: opacidad 0.35, escala y animación
  * Un blob purple: opacidad 0.25, escala y animación con delay
  * Un blob teal: opacidad 0.35, escala y animación con delay
- Animaciones de fondo con repeat: Infinity, easing easeInOut
- Tipografía grande para números (6xl) con gradiente
- Border blanco con sombra que crece al hacer hover
- Transiciones fluidas con easing: cubic-bezier(0.22, 1, 0.36, 1) o similar"

#### ===========================================================================

#### ===========================================================================

### EFECTO 4: TILT SLIDE PORTFOLIO

#### === PROMPT PARA IA ===

"Quiero implementar un slider de tarjetas portfolio que giran en 3D siguiendo al mouse.

Requisitos técnicos:
- Usar transform-style: preserve-3d
- Al hacer hover, calcular rotación basada en posición del mouse:
  * rotateY = (mouseX - centerX) / (width / 2) * 8
  * rotateX = -(mouseY - centerY) / (height / 2) * 8
- Al salir del área, resetear rotación a 0 con spring animation
- Escala y opacidad variables según posición:
  * Scale: 1 - abs(position) * 0.12
  * Opacidad: 0.5 - abs(position) * 0.12, o 0 si abs(position) > 2
  * TranslateZ: -abs(position) * 180px
- Aspect ratio 4/3, imágenes con object-cover
- Navegación con flechas o scroll horizontal
- Estética minimalista con sombras suaves"

#### ===========================================================================

#### ===========================================================================

### EFECTO 5: STICKY HEADER CON BACKDROP-BLUR

#### === PROMPT PARA IA ===

"Quiero implementar un header sticky que cambia de transparente a blanco con backdrop-blur al hacer scroll.

Requisitos técnicos:
- Estado inicial: fondo transparente, padding mayor
- Estado al hacer scroll > 50px: fondo blanco/80, backdrop-blur-lg, padding reducido, shadow-sm
- Transición suave de 300ms
- Logo centrado o a la izquierda, navegación a la derecha (oculta en móvil)
- Links de navegación con hover en indigo
- Asegurar que el header no tape contenido importante"

#### ===========================================================================

#### ===========================================================================

### EFECTO 6: CONTACT FORM REVEAL

#### === PROMPT PARA IA ===

"Quiero implementar un formulario de contacto con animaciones de reveal escalonadas.

Requisitos técnicos:
- Animaciones de reveal escalonadas:
  * Títulos: desde abajo (24px), opacidad 0->1
  * Inputs y textarea: desde abajo (16px), blur(6px)
  * Delay y easing: [0.22, 1, 0.36, 1]
- Contenedor redondeado grande (34px radius), sombra grande
- Gradiente de fondo: desde indigo-50 to purple-50
- Inputs con placeholder y foco con ring-2 ring-indigo-500
- Botón con gradiente indigo->purple
- Estado de 'gracias por contactar' después del submit
- Tipografía consistente con Inter para títulos y Manrope para body"

#### ===========================================================================

#### ===========================================================================

### EFECTO 7: BACKGROUND GRADIENT BLOBS

#### === PROMPT PARA IA ===

"Quiero implementar blobs animados con gradientes radiales de fondo que se mueven suavemente.

Requisitos técnicos:
- Blob 1: posición bottom-left, escala 70% del viewport, gradiente radial indigo/transparente
- Blob 2: posición top-right, escala 80%, gradiente radial purple/transparente
- Animación de escala: 1->1.1->1 con repeat: Infinity, easeInOut
- Delay entre animaciones para sensación orgánica
- Capa de gradiente encima que une los colores
- z-index: -1 para que quede detrás del contenido
- No debe interferir con contenido o accesibilidad"

#### ===========================================================================

#### ===========================================================================

### EFECTO 8: BLUR NAVBAR CON HOVER STATES

#### === PROMPT PARA IA ===

"Quiero implementar una navbar con backdrop-blur que aparece al hacer scroll.

Requisitos técnicos:
- Estado inicial: fondo transparente, padding mayor
- Estado al hacer scroll > 30px: fondo blanco/70, backdrop-blur-xl, padding reducido
- Logo con gradiente indigo-purple
- Links centrados o a la derecha
- Hover states en links: color gray-600 -> indigo-600
- Cursor pointer cuando hay hover sobre el slider
- Asegurar que el navbar no tape contenido importante"

#### ===========================================================================

#### ===========================================================================

### EFECTO 9: TYPOGRAPHY REVEAL STAGGERED

#### === PROMPT PARA IA ===

"Quiero implementar texto donde cada carácter aparece de abajo con blur escalonado.

Requisitos técnicos:
- Animación por carácter (no por palabra)
- Desde abajo (12px), opacidad 0->1, blur(4px)
- Blur eliminado y y: 0 al ser visible
- Respectar reduce-motion del sistema
- Delay escalonado por carácter
- Tipografía moderna con interlineado relajado
- Contenedor centrado con max-width para legibilidad"

#### ===========================================================================

#### ===========================================================================

### EFECTO 10: IMAGE ZOOM REVEAL

#### === PROMPT PARA IA ===

"Quiero implementar imágenes que aparecen con zoom, rotación y blur escalonado.

Requisitos técnicos:
- Animación de entrada:
  * Opacidad 0->1
  * Escala 1.2->1 (efecto zoom-in)
  * Rotación pequeña: -3 a 0 grados
  * Blur 12px->0
- Animación de salida: opacidad 0, escala 0.95, blur 16px
- Navegación con botones circulares abajo
- Imágenes con rounded-2xl y sombra grande
- Respetar reduce-motion
- Aspect ratio consistente o 4/3"

#### ===========================================================================

#### ===========================================================================

# ===========================================================================
# === USO DE ESTOS PROMPTS ===
# ===========================================================================

## ===========================================================================

## =========================== CÓMO USAR ESTOS PROMPTS =========================

## ===========================================================================

1. **Copia el prompt** de la sección correspondiente.

2. **Pégalo** en tu herramienta de IA favorita:
   - ChatGPT, Claude, Gemini, o cualquier otra.

3. **Ajusta según necesidad**:
   - Cambiar colores (hex codes)
   - Ajustar timing (duración, delays)
   - Modificar easing curves
   - Adaptar a tu stack tecnológico (React, Vue, Svelte, etc.)

4. **Itera**:
   - Si el resultado no es exacto, pide ajustes específicos.
   - Proporciona capturas de pantalla del efecto original.

## ===========================================================================

## =========================== CONSEJOS =========================================

## ===========================================================================

- **Contexto**: Si tu IA es avanzada, proporciona capturas de pantalla del efecto original para mejor precisión.

- **Stack tecnológico**: Especifica tu stack (React, Vue, etc.) para que el prompt sea más relevante.

- **Accesibilidad**: Si tu IA no respeta reduce-motion, pide explícitamente: "Respetar preferencias de accesibilidad del sistema".

- **Performance**: Si ves animaciones lentas, pide optimizaciones: "Usar will-change, transform hardware acceleration, etc."

## ===========================================================================

## =========================== EJEMPLO DE INTERACCIÓN ==========================

## ===========================================================================

### Usuario:
"Quiero implementar el efecto 1: scroll reveal text. Quiero que aparezca de abajo con blur."

### Asistente:
"Entendido. Aquí tienes el código React con framer-motion:"

```jsx
const ScrollRevealText = () => {
  // ... código del efecto
}
```

### Usuario:
"Quiero que sea más suave y el blur sea de 12px en lugar de 10px."

### Asistente:
"Claro. Aquí tienes el código ajustado con blur(12px) y easing modificado:"

```jsx
// ... código ajustado
```

## ===========================================================================

# ===========================================================================
