# AI Web Designer - Prompt Library

Una colección de prompts para generar efectos UI/Web modernos usando Framer Motion.

---

## 📖 Efecto 1: Scroll Reveal

**Descripción:** Texto que se revela palabra por palabra al hacer scroll.

**Prompt para IA:**
```
Crea un efecto de scroll reveal donde el texto "91% de las empresas" aparezca palabra por palabra mientras el usuario hace scroll hacia abajo. Usa Framer Motion con useScroll y useTransform. Cada palabra debe tener una transición diferente con delay progresivo. La tarjeta debe tener un fondo con backdrop-blur y borde semi-transparente.
```

**Tecnología:** React + Framer Motion + useScroll + useTransform

---

## 📖 Efecto 2: Counter Animation

**Descripción:** Contador animado que cuenta desde 0 hasta un número objetivo.

**Prompt para IA:**
```
Crea un contador que anime desde 0 hasta 91 en 2 segundos usando requestAnimationFrame. Muestra el porcentaje actual de las empresas. Usa un IntersectionObserver para activar la animación cuando el elemento entra en el viewport. La tarjeta debe tener un efecto de vidrio con backdrop-blur y bordes semi-transparentes.
```

**Tecnología:** React + Framer Motion + IntersectionObserver + requestAnimationFrame

---

## 📖 Efecto 3: Steps Sequence

**Descripción:** Tarjetas de pasos que aparecen en secuencia al hacer scroll.

**Prompt para IA:**
```
Crea una sección de pasos con 5 tarjetas. Cada tarjeta debe aparecer secuencialmente con un delay de 0.1 segundos entre cada una. Usa whileInView de Framer Motion con viewport amount: 0.2 para detectar cuando entra en pantalla. Cada tarjeta tiene un número circular con degradado y un ícono o símbolo. Usa un easing custom cubic-bezier(0.22, 1, 0.36, 1).
```

**Tecnología:** React + Framer Motion + whileInView + viewport

---

## 📖 Efecto 4: Services Cards

**Descripción:** Tarjetas de servicios con efecto hover que las eleva y añade orbes flotantes.

**Prompt para IA:**
```
Crea tarjetas de servicios con efecto hover que las eleva 12px y añade una sombra morada. Cada tarjeta tiene un orbe flotante en la esquina inferior derecha con blur alto. El orbe aparece al hacer hover sobre la tarjeta. Usa glassmorphism con backdrop-filter: blur(24px) saturate(120%). El número principal tiene un degradado animado.
```

**Tecnología:** React + Framer Motion + CSS backdrop-filter + CSS transitions

---

## 📖 Efecto 5: Marquee Loop

**Descripción:** Testimonios que se mueven horizontalmente infinitamente.

**Prompt para IA:**
```
Crea un marquee con testimonios que se mueve infinitamente de izquierda a derecha. Usa CSS animation: marquee 40s linear infinite. Repite el contenido 3 veces para crear el loop. Cada testimonio tiene fondo blanco con borderRadius y boxShadow suave. Usa motion.div de Framer Motion con animación de entrada.
```

**Tecnología:** React + CSS animations + Framer Motion

---

## 📖 Efecto 6: Floating Orbs

**Descripción:** Orbes flotantes con blur alto que se mueven en el fondo.

**Prompt para IA:**
```
Crea 3 orbes flotantes en la parte trasera del contenido. Cada orbe tiene un blur de 80px y se mueve suavemente con animación de y, x y scale. Usa Framer Motion animate con duración de 8 segundos y repeat: Infinity. Los orbes deben tener posiciones diferentes y delays escalonados para un efecto orgánico.
```

**Tecnología:** React + Framer Motion + CSS backdrop-filter

---

## 📖 Efecto 7: Gradient Hero

**Descripción:** Título con degradado animado y animaciones de entrada.

**Prompt para IA:**
```
Crea un título con degradado de cian a morado a rosa usando WebkitBackgroundClip: text. Anima el texto bajando desde y: 40 hasta y: 0 con duración de 0.8 segundos y delay escalonado. Crea un botón con degradado que también tenga animación de entrada escalada. Usa transform y transition para los estados hover.
```

**Tecnología:** React + CSS gradient + Framer Motion

---

## 📖 Efecto 8: Glassmorphism Cards

**Descripción:** Tarjetas con efecto vidrio y backdrop blur.

**Prompt para IA:**
```
Crea tarjetas con efecto glassmorphism usando backdrop-filter: blur(24px) saturate(120%). El borde debe ser semi-transparente con color blanco. La tarjeta debe tener boxShadow suave con desenfoque. Crea un orbe flotante detrás de cada tarjeta que se mueve al hacer hover.
```

**Tecnología:** CSS backdrop-filter + Framer Motion

---

## 📖 Efecto 9: Smooth Section Transitions

**Descripción:** Transiciones suaves entre secciones con fade in.

**Prompt para IA:**
```
Crea secciones con animación de entrada escalada desde 0.9 hasta 1 con opacity 0 a 1. Usa viewport amount: 0.2 para detectar cuando cada sección entra en el viewport. La animación debe ser once: true para que solo ocurra una vez. Usa cubic-bezier(0.22, 1, 0.36, 1) para un easing natural.
```

**Tecnología:** React + Framer Motion + viewport + once

---

## 📖 Efecto 10: Infinite Scroll Container

**Descripción:** Contenedor con scroll snap para navegación suave.

**Prompt para IA:**
```
Crea un contenedor con scroll snap usando scroll-snap-type: x mandatory. Cada tarjeta de servicio debe tener scroll-snap-align: center. El contenedor debe tener overflow-x: auto y scrollbar oculto con estilo personalizado. Usa backdrop-filter en el contenedor.
```

**Tecnología:** CSS scroll snap + Framer Motion

---

## 📖 Efecto 11: Loading Skeleton

**Descripción:** Skeleton loader para estados de carga.

**Prompt para IA:**
```
Crea un skeleton loader usando CSS animations para simular el contenido cargando. Muestra texto que parpadea de forma suave antes de mostrar el contenido real. Usa CSS @keyframes para el efecto de parpadeo.
```

**Tecnología:** CSS animations + React

---

## 📖 Efecto 12: Image Reveal

**Descripción:** Imagen que se revela con una transición suave.

**Prompt para IA:**
```
Crea una imagen que aparece con una transición suave desde la parte superior. Usa Framer Motion animate para la transición de y y opacity. La imagen debe tener un fade in antes de aparecer completamente.
```

**Tecnología:** React + Framer Motion + Image

---

## 📖 Efecto 13: Staggered Children

**Descripción:** Animación escalonada para múltiples elementos hijos.

**Prompt para IA:**
```
Crea una lista de elementos que aparecen con un delay escalonado usando Framer Motion staggerChildren. Cada hijo debe tener un delay basado en su índice. Usa animate: { opacity: 1, scale: 1 } con transition.delay basado en el índice del elemento.
```

**Tecnología:** React + Framer Motion + staggerChildren

---

## 📖 Efecto 14: Hover Transform

**Descripción:** Transformaciones al hacer hover sobre elementos.

**Prompt para IA:**
```
Crea tarjetas con whileHover: { y: -12, boxShadow: 'valor' } para una elevación suave. Usa cubic-bezier(0.22, 1, 0.36, 1) para la transición. El hover debe ser solo para mouse de escritorio con media queries.
```

**Tecnología:** React + Framer Motion + CSS media queries

---

## 📖 Efecto 15: Custom Cursor

**Descripción:** Cursor personalizado con seguimiento del mouse.

**Prompt para IA:**
```
Crea un cursor personalizado que sigue el mouse con un ligero retraso. Usa requestAnimationFrame para actualizar la posición del cursor. El cursor debe tener un blur y ser redondo. El elemento del cursor debe estar posicionado absolutamente.
```

**Tecnología:** React + requestAnimationFrame + CSS absolute positioning

---

## 🎯 Consejos Adicionales

- **Performance:** Usa viewport={{ once: true }} para que las animaciones solo ocurran una vez
- **Smooth:** Usa cubic-bezier(0.22, 1, 0.36, 1) para transiciones naturales
- **Colors:** Usa gradients morados, cian y rosas con transparencias
- **Blur:** Usa backdrop-filter: blur(24px) saturate(120%) para glassmorphism
- **Grid:** Usa CSS Grid para layouts responsivos con gap consistente
- **Typography:** Usa font-weight 800-900 para títulos impactantes

---

## 📦 Dependencias Requeridas

```json
{
  "framer-motion": "^10.18.0",
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "vite": "^5.1.6"
}
```

---

## 🚀 Cómo Usar

1. Copia el prompt de la IA que prefieras
2. Crea un nuevo archivo de React component
3. Implementa el efecto con los estilos y animaciones mostrados
4. Ajusta los colores y valores según tu necesidad

¡Crea experiencias web increíbles! 🎨
