import {
  ProcessOrbitDemo,
  ServicesLayerDemo,
  StaggeredStatementDemo,
} from '../effects/Demos'

export const effects = [
  {
    slug: 'staggered-statement-reveal',
    name: 'Staggered Statement Reveal',
    description:
      'Un bloque editorial grande entra al hacer scroll con desenfoque, desplazamiento y escalonado por líneas para producir una sensación de manifiesto.',
    prompt: `Construye un bloque de texto hero/editorial con efecto scroll-reveal de alta gama en una app moderna con React y CSS. El bloque debe ocupar un ancho amplio, tener tipografía display grande y dividir el texto en 3 o 4 líneas visuales. Cuando el bloque entra al viewport, cada línea debe aparecer con un stagger corto de abajo hacia arriba, empezando con opacity 0, translateY entre 28px y 40px y blur entre 10px y 16px. La animación debe sentirse elegante, no explosiva: duración aproximada entre 700ms y 950ms, easing suave tipo cubic-bezier(0.22, 1, 0.36, 1), con retrasos progresivos de 90ms a 140ms por línea. Mantén mucho espacio vertical antes y después del bloque para que el reveal dependa claramente del scroll. Usa un fondo limpio y contraste alto. Implementa la detección con IntersectionObserver o una solución equivalente, activa la animación una sola vez, y cuida que en móvil el texto mantenga el mismo ritmo visual aunque cambie el salto de línea.`,
    Demo: StaggeredStatementDemo,
  },
  {
    slug: 'process-orbit-steps',
    name: 'Process Orbit Steps',
    description:
      'Una secuencia de pasos distribuye tarjetas numeradas alrededor de un núcleo visual, con aparición en cascada y microflotación permanente.',
    prompt: `Crea una sección de proceso con 4 pasos para una web moderna usando React y CSS. La composición debe sentirse premium: un contenedor oscuro, un núcleo central y varias tarjetas de pasos posicionadas alrededor con equilibrio visual, como si orbitasen una idea principal. Al entrar en pantalla, cada tarjeta debe aparecer con stagger suave, pasando de opacity 0 y translateY 30px a su posición final, con ligera escala inicial de 0.96. Después del reveal, cada tarjeta debe quedar con una animación idle muy sutil de flotación o deriva vertical de pocos píxeles, desfasada entre tarjetas para evitar sincronía artificial. El número de cada paso debe ser prominente pero elegante, y las conexiones visuales deben sugerirse con líneas, brillos o un gradiente radial central. La sección debe conservar espaciado amplio, bordes suaves y sombras tenues. Ajusta la versión móvil apilando los pasos sin perder el orden ni el tempo de la entrada.`,
    Demo: ProcessOrbitDemo,
  },
  {
    slug: 'services-layered-panels',
    name: 'Services Layered Panels',
    description:
      'Un grupo de paneles de servicios se presenta como láminas profundas con ligera superposición, brillo lateral y elevación progresiva al interactuar.',
    prompt: `Diseña una sección de servicios para una web contemporánea con paneles apilados y sensación de profundidad. Usa React y CSS, con 3 o 4 tarjetas grandes, cada una con un título corto, etiqueta secundaria y una atmósfera visual propia. La composición debe verse editorial y refinada: paneles con bordes grandes, fondo semitransparente, hairline borders, gradientes internos y una jerarquía escalonada en Y para crear un efecto de capas. Al cargar o al entrar en viewport, cada panel debe revelarse con translateY, fade y una leve rotación o desplazamiento horizontal muy sutil para que parezca acomodarse en su sitio. En hover, el panel activo debe elevarse un poco más, aumentar contraste y brillo, mientras los demás se atenúan ligeramente. El movimiento debe ser sobrio, premium y preciso, no estilo dashboard genérico. En móvil, convierte la composición en una pila vertical manteniendo el mismo look de vidrio denso y la sensación de profundidad.`,
    Demo: ServicesLayerDemo,
  },
]
