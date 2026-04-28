import * as Demos from '../Effects'

/**
 * Anatomía del Prompt Perfecto:
 * 1. El Rol y el Stack (Contexto)
 * 2. La Física de la Animación (El núcleo)
 * 3. Reglas de Estructura (Evitar alucinaciones)
 * 4. Manejo de Estados/Triggers
 */

const createPrompt = (title, physics, triggers, stack = 'react_tailwind') => {
  const context = stack === 'react_tailwind' 
    ? 'Actúa como un ingeniero UI/UX experto. Crea un componente funcional usando React, Tailwind CSS y Framer Motion.'
    : 'Actúa como un ingeniero UI/UX experto. Crea un componente funcional usando HTML5, CSS puro (Vanilla) y JavaScript nativo.';

  const structure = 'Proporciona el código en un solo archivo con los estilos integrados para copiar y pegar fácilmente, sin omitir funciones ni simplificar la lógica. Asegúrate de que sea accesible y responsivo.';

  return `${context}\n\nObjetivo: ${title}\n\nFísica de la Animación: ${physics}\n\nTriggers y Estados: ${triggers}\n\nReglas: ${structure}`;
}

export const effects = [
  {
    slug: 'staggered-reveal',
    name: 'Staggered Statement Reveal',
    category: 'Scroll Effects',
    description: 'Revelación de texto por líneas con desenfoque y desplazamiento sincronizado al hacer scroll.',
    Demo: Demos.TypographyReveal,
    prompts: {
      react_tailwind: createPrompt(
        'Staggered Statement Reveal',
        'Cada línea debe aparecer con un stagger de 100ms. Usa una curva cubic-bezier(0.25, 1, 0.5, 1) y una duración de 700ms. La animación va de opacity 0, translateY 40px y blur 10px a su estado natural.',
        'Usa IntersectionObserver (o el prop whileInView de Framer Motion) para disparar la animación cuando el 20% del componente sea visible. Debe ejecutarse solo una vez.',
        'react_tailwind'
      ),
      vanilla_css: createPrompt(
        'Staggered Statement Reveal',
        'Define keyframes para un efecto de entrada suave: opacity de 0 a 1, transform de translateY(40px) a 0 y filter de blur(10px) a blur(0). Duración 700ms con cubic-bezier(0.25, 1, 0.5, 1). Aplica animation-delay escalonado por cada span de línea.',
        'Implementa un IntersectionObserver en JS para añadir una clase .is-visible a cada línea cuando entren al viewport.',
        'vanilla_css'
      )
    }
  },
  {
    slug: 'process-steps-grid',
    name: 'Process Steps Animation',
    category: 'Interactive Grids',
    description: 'Tarjetas de pasos que aparecen en cascada con micro-interacciones al hacer hover.',
    Demo: Demos.ProcessSteps,
    prompts: {
      react_tailwind: createPrompt(
        'Process Steps Grid',
        'Las tarjetas deben aparecer con un delay secuencial (stagger). Física: duración 800ms, ease: [0.22, 1, 0.36, 1]. En hover, la tarjeta debe escalar a 1.05 y elevar su sombra.',
        'Usa Framer Motion con variantes para el contenedor (staggerChildren) y los items. Trigger: whileInView con margen de -100px.',
        'react_tailwind'
      ),
      vanilla_css: createPrompt(
        'Process Steps Grid',
        'Grid de tarjetas con animación de entrada: opacity 0 y translateY 30px. En hover, usa transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1) para escalar a 1.05.',
        'JS para añadir la clase .active cuando el scroll llegue a la sección, disparando las animaciones CSS con retrasos definidos en inline styles o variables CSS.',
        'vanilla_css'
      )
    }
  },
  {
    slug: 'services-blobs',
    name: 'Interactive Service Blobs',
    category: 'Hover Effects',
    description: 'Tarjetas premium con orbes de luz dinámicos que reaccionan al cursor.',
    Demo: Demos.ServicesWithBlobs,
    prompts: {
      react_tailwind: createPrompt(
        'Interactive Service Blobs',
        'Fondo con gradientes radiales (blobs) que tienen una animación de flotación infinita. En hover sobre la tarjeta, los blobs deben aumentar su opacidad y moverse ligeramente hacia el centro. Usa blur(60px) para los orbes.',
        'Estado hover controlado por React o clases de Tailwind (group-hover). Los orbes deben tener transiciones de opacidad de 700ms.',
        'react_tailwind'
      ),
      vanilla_css: createPrompt(
        'Interactive Service Blobs',
        'Crea contenedores relativos con orbes absolutos de fondo usando radial-gradients y filter: blur(60px). Define una animación @keyframes de flotación (drift).',
        'Usa el pseudo-selector :hover del padre para cambiar la opacidad de los hijos .blob de 0 a 0.35.',
        'vanilla_css'
      )
    }
  },
  {
    slug: 'tilt-portfolio',
    name: '3D Tilt Slide Portfolio',
    category: 'Immersive UI',
    description: 'Galería 3D con efecto de inclinación (tilt) y navegación fluida.',
    Demo: Demos.TiltSlidePortfolio,
    prompts: {
      react_tailwind: createPrompt(
        '3D Tilt Slide Portfolio',
        'Las tarjetas deben rotar en los ejes X e Y basándose en la posición del mouse. Usa useMotionValue y useSpring para suavizar el movimiento. Ángulo máximo de rotación: 8 grados.',
        'Trigger: onMouseMove para calcular el offset desde el centro de la tarjeta. onClick para cambiar la tarjeta activa con una transición de spring (stiffness: 120, damping: 20).',
        'react_tailwind'
      ),
      vanilla_css: createPrompt(
        '3D Tilt Slide Portfolio',
        'Implementa el efecto tilt usando transform: perspective(1000px) rotateX() rotateY(). El cálculo de los grados debe hacerse en JS dividiendo la posición relativa del mouse entre el ancho/alto.',
        'EventListener de mousemove en cada tarjeta. Usa requestAnimationFrame para asegurar que la rotación sea fluida a 60fps.',
        'vanilla_css'
      )
    }
  },
  {
    slug: 'sticky-blur-nav',
    name: 'Glassmorphism Sticky Nav',
    category: 'Navigation',
    description: 'Navbar persistente con efecto de desenfoque de fondo y cambio de estado al hacer scroll.',
    Demo: Demos.BlurNavbar,
    prompts: {
      react_tailwind: createPrompt(
        'Glassmorphism Sticky Nav',
        'Al hacer scroll > 50px, el fondo pasa de transparente a bg-white/70 con backdrop-filter: blur(20px). La altura debe reducirse ligeramente de forma suave.',
        'Usa un useEffect para escuchar el evento scroll y actualizar un estado "scrolled". Aplica clases condicionales de Tailwind.',
        'react_tailwind'
      ),
      vanilla_css: createPrompt(
        'Glassmorphism Sticky Nav',
        'Navbar fija con transition: all 0.3s ease. Al añadir la clase .scrolled, aplica background: rgba(255,255,255,0.7) y backdrop-filter: blur(20px).',
        'JS nativo: window.addEventListener("scroll") con una comprobación de window.scrollY.',
        'vanilla_css'
      )
    }
  },
  {
    slug: 'contact-reveal',
    name: 'Contact Form Reveal',
    category: 'Forms',
    description: 'Formulario de contacto con entrada elegante y micro-animaciones en los inputs.',
    Demo: Demos.ContactFormReveal,
    prompts: {
      react_tailwind: createPrompt(
        'Contact Form Reveal',
        'El formulario entra con un fade-in-up. Los inputs individuales deben tener un stagger de entrada. Física: duration 0.8s, ease [0.22, 1, 0.36, 1].',
        'Usa variantes de Framer Motion para los labels e inputs. El trigger es whileInView con once: true.',
        'react_tailwind'
      ),
      vanilla_css: createPrompt(
        'Contact Form Reveal',
        'Contenedor con opacity 0 y transform translateY(20px). Al activarse, los hijos (inputs) deben aparecer secuencialmente usando transition-delay.',
        'Clase CSS .show que se añade al entrar en el viewport vía JS.',
        'vanilla_css'
      )
    }
  },
  {
    slug: 'image-zoom-reveal',
    name: 'Smooth Image Zoom',
    category: 'Media',
    description: 'Transición de imágenes con zoom suave y efecto de rotación sutil.',
    Demo: Demos.ImageReveal,
    prompts: {
      react_tailwind: createPrompt(
        'Smooth Image Zoom',
        'Al cambiar de imagen, la nueva debe entrar con escala 1.2 y blur(12px) volviendo a su estado normal. Duración 1.2s, cubic-bezier(0.22, 1, 0.36, 1).',
        'Usa AnimatePresence de Framer Motion con mode="wait" para manejar el ciclo de vida de las imágenes.',
        'react_tailwind'
      ),
      vanilla_css: createPrompt(
        'Smooth Image Zoom',
        'Efecto de transición de imágenes usando opacidad y transformación de escala. El contenedor debe tener overflow: hidden.',
        'Cambio de src vía JS añadiendo una clase temporal para disparar la animación CSS.',
        'vanilla_css'
      )
    }
  },
  {
    slug: 'scroll-reveal-text',
    name: 'Scroll Reveal Text',
    category: 'Scroll Effects',
    description: 'Texto que aparece palabra por palabra o línea por línea con un efecto de desenfoque y elevación al hacer scroll.',
    Demo: Demos.ScrollRevealText,
    prompts: {
      react_tailwind: createPrompt(
        'Scroll Reveal Text',
        'Divide el texto en palabras o spans. Cada palabra debe tener un delay incremental. Física: opacity 0 -> 1, translateY 20px -> 0, blur 10px -> 0. Duración 1.2s, ease: [0.22, 1, 0.36, 1].',
        'Usa Framer Motion con viewport={{ once: true, amount: 0.5 }}. El stagger debe ser de 0.05s por palabra.',
        'react_tailwind'
      ),
      vanilla_css: createPrompt(
        'Scroll Reveal Text',
        'Envuelve cada palabra en un <span>. Usa CSS Animations con un delay calculado dinámicamente o inline styles.',
        'JS: IntersectionObserver para activar la clase .animate-in cuando la sección sea visible.',
        'vanilla_css'
      )
    }
  },
  {
    slug: 'orbit-steps',
    name: 'Process Orbit Steps',
    category: 'Interactive UI',
    description: 'Pasos de proceso que orbitan un núcleo central con animaciones de flotación desfasadas.',
    Demo: Demos.ProcessOrbitDemo || Demos.ProcessSteps,
    prompts: {
      react_tailwind: createPrompt(
        'Process Orbit Steps',
        'Crea un contenedor con un "Core" central y 4 tarjetas alrededor. Cada tarjeta debe tener una animación de flotación infinita (drift) con delays desfasados para evitar sincronía perfecta.',
        'Usa whileInView para la entrada inicial con stagger. Luego aplica un animate={{ y: [0, -10, 0] }} infinito.',
        'react_tailwind'
      ),
      vanilla_css: createPrompt(
        'Process Orbit Steps',
        'Layout absoluto con tarjetas posicionadas en coordenadas específicas. Usa @keyframes drift { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }.',
        'Aplica animation-delay diferente a cada tarjeta (0s, 1.2s, 0.8s, 1.8s).',
        'vanilla_css'
      )
    }
  },
  {
    slug: 'layered-panels',
    name: 'Services Layered Panels',
    category: 'UI Components',
    description: 'Paneles apilados con profundidad 3D, bordes de cristal y elevación en hover.',
    Demo: Demos.ServicesLayerDemo || Demos.ServicesWithBlobs,
    prompts: {
      react_tailwind: createPrompt(
        'Services Layered Panels',
        'Paneles con border-white/20, backdrop-blur y box-shadow profunda. Al entrar, cada panel debe "acomodarse" con una ligera rotación (-4deg, -1deg, 3deg).',
        'En hover, el panel seleccionado debe z-index: 10, scale: 1.02 y remover la rotación.',
        'react_tailwind'
      ),
      vanilla_css: createPrompt(
        'Services Layered Panels',
        'Usa transform: rotate() y transition: transform 0.5s. Aplica background: linear-gradient() para simular el cristal.',
        'Pseudo-clase :hover para resetear el transform y aumentar el z-index.',
        'vanilla_css'
      )
    }
  }
];

