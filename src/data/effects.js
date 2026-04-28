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
    Demo: Demos.KaivaStepsCarousel,
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
    Demo: Demos.KaivaServicesCards,
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
    name: 'Services Switcher Showcase',
    category: 'Immersive UI',
    description: 'Sección de servicios con tabs premium y previews distintas para web, diseño y automatización.',
    Demo: Demos.TiltSlidePortfolio,
    prompts: {
      react_tailwind: createPrompt(
        'Services Switcher Showcase',
        'Diseña una sección de servicios con 3 tabs. Cada tab debe cambiar el panel principal con una transición suave (fade + translateY leve). La interfaz debe sentirse premium, con fondos diferenciados y previews distintas para cada servicio.',
        'Usa estado local para cambiar entre Desarrollo Web, Diseño y Automatización. Anima el cambio de panel con AnimatePresence y motion.div. Mantén responsive y accesible.',
        'react_tailwind'
      ),
      vanilla_css: createPrompt(
        'Services Switcher Showcase',
        'Construye una sección con botones tipo tabs y un panel principal que cambia su contenido con opacidad, translateY y variación de layout. Cada servicio debe tener una preview visual distinta.',
        'Usa event listeners click para activar cada tab y alternar clases CSS. Anima entrada y salida con transiciones de 400-600ms.',
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
    Demo: Demos.ProcessSteps,
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
    Demo: Demos.ServicesWithBlobs,
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
  },
  {
    slug: 'aurora-mesh',
    name: 'Aurora Mesh Background',
    category: 'Background FX',
    description: 'Capas de blobs con blur y malla sutil en movimiento para crear una atmósfera premium.',
    Demo: Demos.AuroraMesh,
    prompts: {
      react_tailwind: createPrompt(
        'Aurora Mesh Background',
        'Crea 3 blobs radiales con blur(60px) y animación de escala + desplazamiento suave. Usa duraciones entre 8s y 10s, repeat infinito, easeInOut.',
        'Incluye una malla con linear-gradients de 1px y opacidad baja. Añade un overlay para evitar saturación del color.',
        'react_tailwind'
      ),
      vanilla_css: createPrompt(
        'Aurora Mesh Background',
        'Construye un contenedor con 3 capas absolutas tipo blob usando radial-gradient + filter: blur(60px). Anima con keyframes drift.',
        'Agrega una capa de grid con background-size 44px 44px y opacidad baja. Mantén performance usando transform.',
        'vanilla_css'
      )
    }
  },
  {
    slug: 'floating-avatars',
    name: 'Floating Avatars Orbit',
    category: 'Motion UI',
    description: 'Elementos flotantes alrededor de un núcleo central con desfases y órbitas visuales.',
    Demo: Demos.FloatingAvatars,
    prompts: {
      react_tailwind: createPrompt(
        'Floating Avatars Orbit',
        'Crea 4 tarjetas pequeñas flotantes con animación y=[0,-14,0,10,0] y rotación leve. Usa delays distintos para evitar sincronía.',
        'Añade un núcleo central y anillos de borde. El núcleo debe tener rotación continua lenta.',
        'react_tailwind'
      ),
      vanilla_css: createPrompt(
        'Floating Avatars Orbit',
        'Genera 4 elementos absolutos con keyframes de flotación y ligera rotación. Usa animation-delay diferente por elemento.',
        'Dibuja un núcleo central con gradiente y dos anillos con border semitransparente.',
        'vanilla_css'
      )
    }
  },
  {
    slug: 'stats-counter',
    name: 'KPI Count-Up Cards',
    category: 'Data Motion',
    description: 'Tarjetas de métricas con contador animado al entrar en viewport.',
    Demo: Demos.StatsCounter,
    prompts: {
      react_tailwind: createPrompt(
        'KPI Count-Up Cards',
        'Crea 3 tarjetas con valores numéricos animados desde 0 hasta su valor final usando spring suave.',
        'El contador debe iniciar al entrar en viewport y soportar enteros/decimales.',
        'react_tailwind'
      ),
      vanilla_css: createPrompt(
        'KPI Count-Up Cards',
        'Diseña 3 tarjetas limpias con sombra suave y tipografía fuerte para el número.',
        'Implementa contador con requestAnimationFrame y easing para pasar de 0 al valor objetivo cuando la sección sea visible.',
        'vanilla_css'
      )
    }
  },
  {
    slug: 'magnetic-cta',
    name: 'Magnetic CTA Button',
    category: 'Micro Interactions',
    description: 'Botón magnético que sigue el cursor con inercia y brillo barrido.',
    Demo: Demos.MagneticButton,
    prompts: {
      react_tailwind: createPrompt(
        'Magnetic CTA Button',
        'Crea un botón con desplazamiento magnético en X/Y según la posición del mouse. Suaviza con spring (stiffness ~180, damping ~18).',
        'Al salir del mouse, vuelve a 0,0. Agrega una capa de brillo que se desplace en loop con linear-gradient.',
        'react_tailwind'
      ),
      vanilla_css: createPrompt(
        'Magnetic CTA Button',
        'Construye un botón premium con border glow y pseudo-elemento de brillo animado.',
        'Usa mousemove para calcular offset relativo y aplicar translate3d con transición suave. Resetea en mouseleave.',
        'vanilla_css'
      )
    }
  },
  {
    slug: 'skeleton-shimmer',
    name: 'Skeleton Loading Shimmer',
    category: 'Loading',
    description: 'Placeholder animado con gradiente shimmer para estados de carga.',
    Demo: Demos.SkeletonShimmer,
    prompts: {
      react_tailwind: createPrompt(
        'Skeleton Loading Shimmer',
        'Crea barras skeleton con gradient shimmer (background-size 200% 100%) y animación lineal de 1.5s infinita.',
        'Incluye una tarjeta de ejemplo con varias filas y role="status" para accesibilidad.',
        'react_tailwind'
      ),
      vanilla_css: createPrompt(
        'Skeleton Loading Shimmer',
        'Usa keyframes para mover background-position de 200% a -200% con gradiente oscuro.',
        'Define tamaños variables de filas (100%, 76%, 88%, 62%) y bordes redondeados.',
        'vanilla_css'
      )
    }
  },
  {
    slug: 'spotlight-cursor',
    name: 'Spotlight Cursor',
    category: 'Cursor Effect',
    description: 'Spotlight radial que sigue el cursor sobre fondo oscuro.',
    Demo: Demos.SpotlightCursor,
    prompts: {
      react_tailwind: createPrompt(
        'Spotlight Cursor',
        'Crea un contenedor dark con radial-gradient que se actualiza según posición del mouse en porcentaje X/Y.',
        'Evita re-render costoso y mantén la animación suave; añade fallback para touch.',
        'react_tailwind'
      ),
      vanilla_css: createPrompt(
        'Spotlight Cursor',
        'Implementa custom properties --x y --y actualizadas en mousemove para controlar el centro del radial-gradient.',
        'Configura spotlight con color rgba(99,102,241,0.2) y caída transparente al 46%-50%.',
        'vanilla_css'
      )
    }
  },
  {
    slug: 'morphing-shape',
    name: 'Morphing Shape',
    category: 'Layout Motion',
    description: 'Forma que morph entre círculo y esquinas orgánicas con rotación continua.',
    Demo: Demos.MorphingShape,
    prompts: {
      react_tailwind: createPrompt(
        'Morphing Shape',
        'Crea un bloque 120x120 con gradiente que anima border-radius y rotate en 4 estados.',
        'Duración 4s, ease-in-out, bucle infinito con keyframes declarativos.',
        'react_tailwind'
      ),
      vanilla_css: createPrompt(
        'Morphing Shape',
        'Define @keyframes morph con 0/25/50/75/100 cambiando border-radius y rotación.',
        'Fondo gradiente 135deg (#6366f1 a #ec4899) y modo infinito.',
        'vanilla_css'
      )
    }
  },
  {
    slug: 'ripple-button',
    name: 'Ripple Button',
    category: 'Micro Interactions',
    description: 'Botón con onda tipo ripple en loop para demo visual inmediata.',
    Demo: Demos.RippleButtonDemo,
    prompts: {
      react_tailwind: createPrompt(
        'Ripple Button',
        'Crea botón indigo con pseudo-capa circular animada desde escala 0 a 2 y opacidad 1 a 0 en 2s infinito.',
        'Mantén overflow hidden, radio 8px y tipografía semibold.',
        'react_tailwind'
      ),
      vanilla_css: createPrompt(
        'Ripple Button',
        'Usa elemento absoluto circular centrado y keyframes ripple (scale + fade).',
        'Botón base #6366f1 con texto blanco y padding 12x28px.',
        'vanilla_css'
      )
    }
  },
  {
    slug: 'scroll-progress-demo',
    name: 'Scroll Progress Bar',
    category: 'Scroll Effect',
    description: 'Barra de progreso de scroll minimal con gradiente y actualización fluida.',
    Demo: Demos.ScrollProgressDemo,
    prompts: {
      react_tailwind: createPrompt(
        'Scroll Progress Bar',
        'Crea barra fixed superior de 3px con fill en gradiente que representa scrollY/documentHeight.',
        'Usa requestAnimationFrame o listener passive con throttling para performance.',
        'react_tailwind'
      ),
      vanilla_css: createPrompt(
        'Scroll Progress Bar',
        'Implementa contenedor de 3px y fill con linear-gradient(#6366f1,#8b5cf6).',
        'Actualiza width o transform:scaleX según porcentaje de scroll en JS.',
        'vanilla_css'
      )
    }
  }
];
