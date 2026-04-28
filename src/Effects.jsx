import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useReducedMotion, AnimatePresence, useMotionValue } from 'framer-motion';

// ============================================================================
// EFECTO 1: Texto con scroll - "91% de las empresas en Colombia son pymes"
// ============================================================================
const ScrollRevealText = () => {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end'],
  });

  const textItems = [
    "El",
    "91%",
    "de",
    "las",
    "empresas",
    "en",
    "Colombia",
    "son",
    "pymes.",
    "La",
    "mayoría",
    "no",
    "existe",
    "en",
    "internet."
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 48, filter: prefersReducedMotion ? 'none' : 'blur(10px)' },
    visible: { opacity: 1, y: 0, filter: 'none', transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section id="efecto1" ref={ref} className="min-h-[80vh] flex items-center justify-center bg-[#fafafa]">
      <div className="max-w-4xl px-8 text-center">
        <h2 className="mb-12 font-['Inter'] text-4xl font-bold text-gray-900">Efecto 1: Scroll Reveal Text</h2>
        <div className="font-['Manrope'] text-xl leading-relaxed text-gray-800">
          {textItems.map((item, index) => (
            <motion.span
              key={item}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              viewport={{ once: prefersReducedMotion, amount: 0.6 }}
              style={{ display: 'inline-block', marginRight: '0.5em' }}
            >
              {item}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// EFECTO 2: Pasos animados - Sección de pasos
// ============================================================================
const ProcessSteps = () => {
  const prefersReducedMotion = useReducedMotion();
  const steps = ['Diagnóstico', 'Estructura', 'Diseño', 'Desarrollo', 'Entrega'];

  const stepVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 32, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section id="efecto2" className="py-20 bg-[#fafafa]">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="mb-12 font-['Inter'] text-4xl font-bold text-center text-gray-900">Efecto 2: Steps Animation</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step}
              variants={stepVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: prefersReducedMotion, amount: 0.3 }}
              className="relative p-8 rounded-2xl bg-white shadow-sm border border-gray-200"
            >
              <div className="absolute -top-3 left-8 w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-sm">
                {index + 1}
              </div>
              <h3 className="mt-4 font-['Manrope'] text-xl font-bold text-gray-900">{step}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// EFECTO 3: Servicios con blobs hover - Tarjetas con efectos de fondo
// ============================================================================
const ServicesWithBlobs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const services = [
    {
      title: 'Desarrollo web',
      description: 'Creamos páginas web estratégicas diseñadas para transmitir confianza y generar oportunidades reales.',
    },
    {
      title: 'Diseño UI/UX + Marca',
      description: 'Diseñamos experiencias claras y enfocadas en conversión, alineadas con tu identidad de marca.',
    },
    {
      title: 'Automatización y sistemas',
      description: 'Implementamos herramientas y sistemas (como bots de WhatsApp y flujos automatizados) para responder, organizar y vender sin fricción.',
    },
  ];

  return (
    <section id="efecto3" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="mb-12 font-['Inter'] text-4xl font-bold text-center text-gray-900">Efecto 3: Cards con Blobs Hover</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              className={`group relative flex flex-col rounded-3xl border border-white/80 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:shadow-2xl ${
                activeIndex === index ? 'min-h-[380px] shadow-2xl' : 'min-h-[340px] shadow-lg'
              }`}
              style={{
                boxShadow: activeIndex === index
                  ? '0 28px 74px -44px rgba(130,66,245,0.4)'
                  : '0 18px 48px -34px rgba(80,74,168,0.28)',
              }}
              whileHover={{ y: -12 }}
            >
              {/* Blobs de fondo que aparecen al hacer hover */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-3xl z-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                <motion.div
                  className="absolute -bottom-[20%] -right-[10%] h-[70%] w-[70%] translate-x-1/4 translate-y-1/4 rounded-full bg-purple-400 blur-[60px]"
                  animate={{ opacity: [0, 0.35] }}
                  transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                  className="absolute -bottom-[20%] left-[15%] h-[70%] w-[70%] translate-y-1/4 rounded-full bg-indigo-400 blur-[60px]"
                  animate={{ opacity: [0, 0.25] }}
                  transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
                />
                <motion.div
                  className="absolute -bottom-[20%] -left-[10%] h-[70%] w-[70%] -translate-x-1/4 translate-y-1/4 rounded-full bg-teal-300 blur-[60px]"
                  animate={{ opacity: [0, 0.35] }}
                  transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
                />
              </div>

              <div className="relative z-10 flex flex-1 flex-col px-6 py-8">
                <motion.div
                  className="font-['Inter'] text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"
                  animate={{ x: activeIndex === index ? 5 : 0 }}
                >
                  {activeIndex === index ? index + 1 : '0' + (index + 1)}
                </motion.div>

                <motion.div className="mt-8 h-px w-full bg-gray-200" />

                <div className="mt-10 flex flex-1 flex-col justify-between gap-6">
                  <h3 className="font-['Inter'] text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// EFECTO 4: Tilt Slide - Tarjetas 3D que giran con el mouse
// ============================================================================
const TiltSlide = ({ src, isActive, position, onClick }) => {
  const cardRef = useRef(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 150, damping: 20 });
  const springY = useSpring(rotateY, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e) => {
    if (!isActive || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = (e.clientX - centerX) / (rect.width / 2);
    const mouseY = (e.clientY - centerY) / (rect.height / 2);
    rotateY.set(mouseX * 8);
    rotateX.set(-mouseY * 8);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  const absOffset = Math.abs(position);
  const scale = isActive ? 1 : 1 - absOffset * 0.12;
  const translateX = position * 55;
  const translateZ = isActive ? 0 : -absOffset * 180;
  const opacity = absOffset > 2 ? 0 : isActive ? 1 : 0.5 - absOffset * 0.12;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className="absolute left-1/2 top-1/2 cursor-pointer"
      style={{
        width: 'clamp(220px, 72vw, 620px)',
        aspectRatio: '4/3',
        x: '-50%',
        y: '-50%',
        rotateX: isActive ? springX : 0,
        rotateY: isActive ? springY : 0,
        transformStyle: 'preserve-3d',
      }}
      animate={{
        x: `calc(-50% + ${translateX}%)`,
        scale,
        z: translateZ,
        opacity,
      }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
    >
      <div className="relative h-full w-full overflow-hidden rounded-2xl"
           style={isActive ? { boxShadow: '0 32px 70px -24px rgba(32,29,26,0.22), 0 0 80px -28px rgba(130,66,245,0.26), inset 0 1px 0 rgba(255,255,255,0.7)' } : { boxShadow: '0 24px 50px -28px rgba(32,29,26,0.18)' }}>
        <img src={src} alt="Mockup" className="h-full w-full object-cover" />
      </div>
    </motion.div>
  );
};

const TiltSlidePortfolio = () => {
  const slides = [
    { id: 1, number: '01', label: 'Inteligencia de Negocios', accent: '#8242f5', mockup: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800' },
    { id: 2, number: '02', label: 'E-Commerce de Lujo', accent: '#8242f5', mockup: 'https://images.unsplash.com/photo-1573490574670-43099eb04d2e?w=800' },
    { id: 3, number: '03', label: 'Infraestructura SaaS', accent: '#8242f5', mockup: 'https://images.unsplash.com/photo-1517694712202-14c930684733?w=800' },
    { id: 4, number: '04', label: 'Editorial Creativo', accent: '#8242f5', mockup: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800' },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleWheel = (e) => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      e.preventDefault();
      if (e.deltaX > 30) setActiveIndex((p) => Math.min(p + 1, slides.length - 1));
      if (e.deltaX < -30) setActiveIndex((p) => Math.max(p - 1, 0));
    }
  };

  return (
    <section id="efecto4" className="relative min-h-screen overflow-hidden bg-white" style={{ fontFamily: 'Manrope, sans-serif' }}>
      <div className="relative z-20 mt-10 px-6">
        <h2 className="text-center font-['Inter'] text-4xl font-bold text-gray-900">Efecto 4: Tilt Slide Portfolio</h2>
        <p className="mt-4 text-center text-gray-600">Usa las flechas o el mouse para navegar entre las tarjetas</p>
      </div>

      <div className="relative z-10 mt-6 h-[320px] md:h-[440px] md:mt-12 md:h-[clamp(440px,58vh,680px)]"
           style={{ perspective: '2000px' }}
           onWheel={handleWheel}
           onMouseEnter={(e) => { e.currentTarget.style.cursor = 'col-resize'; }}
           onMouseLeave={(e) => { e.currentTarget.style.cursor = 'default'; }}
      >
        {slides.map((slide, i) => (
          <TiltSlide
            key={slide.id}
            slide={slide}
            isActive={i === activeIndex}
            position={i - activeIndex}
            onClick={() => setActiveIndex(i)}
          />
        ))}
      </div>
    </section>
  );
};

// ============================================================================
// EFECTO 5: Sticky Header con blur
// ============================================================================
const StickyHeader = () => {
  const [scrolled, setScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header id="efecto5" className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-900">AI Web Designer</h1>
          <div className="hidden md:flex gap-6">
            <a href="#efecto1" className="text-sm font-medium text-gray-600 hover:text-indigo-600">Scroll Text</a>
            <a href="#efecto2" className="text-sm font-medium text-gray-600 hover:text-indigo-600">Steps</a>
            <a href="#efecto3" className="text-sm font-medium text-gray-600 hover:text-indigo-600">Blobs Cards</a>
            <a href="#efecto4" className="text-sm font-medium text-gray-600 hover:text-indigo-600">Tilt Slide</a>
            <a href="#efecto5" className="text-sm font-medium text-gray-600 hover:text-indigo-600">Sticky Header</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

// ============================================================================
// EFECTO 6: Formulario de contacto con reveal
// ============================================================================
const ContactFormReveal = () => {
  const prefersReducedMotion = useReducedMotion();
  const [submitted, setSubmitted] = useState(false);

  const textVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 24, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  const inputVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 16, filter: 'blur(6px)', transition: { duration: 0.68, ease: [0.22, 1, 0.36, 1] } },
    visible: { opacity: 1, y: 0, filter: 'none', transition: { duration: 0.68, ease: [0.22, 1, 0.36, 1] } }
  };

  if (submitted) {
    return (
      <section id="efecto6" className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">¡Gracias por contactarnos!</h2>
          <p className="text-gray-600">Recibirás una respuesta en breve.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="efecto6" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="mb-12 font-['Inter'] text-4xl font-bold text-center text-gray-900">Efecto 6: Contact Form Reveal</h2>
        
        <motion.div variants={textVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
                  className="rounded-[34px] p-8 bg-white shadow-xl">
          
          <motion.h3 variants={textVariants} className="font-manrope text-sm font-bold uppercase tracking-wide text-gray-500 mb-4">
            Contacto
          </motion.h3>
          
          <motion.h2 variants={textVariants} className="text-4xl font-bold text-gray-900 mb-6">
            Ready to start?
          </motion.h2>
          
          <motion.p variants={textVariants} className="mb-8 max-w-xl text-lg text-gray-600">
            Cuéntanos qué estás construyendo y te responderemos con una propuesta clara.
          </motion.p>

          <motion.form variants={textVariants} initial="hidden" whileInView="visible"
                        className="space-y-6"
                        onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
            
            <div className="grid gap-6 md:grid-cols-2">
              <motion.div variants={inputVariants} className="space-y-2">
                <label className="font-manrope text-xs font-bold uppercase tracking-wide text-gray-400">Nombre</label>
                <input type="text" placeholder="Tu nombre" className="w-full rounded-2xl px-4 py-3 text-base text-gray-800 outline-none focus:ring-2 focus:ring-indigo-500" />
              </motion.div>
              <motion.div variants={inputVariants} className="space-y-2">
                <label className="font-manrope text-xs font-bold uppercase tracking-wide text-gray-400">Correo electrónico</label>
                <input type="email" placeholder="tu@correo.com" className="w-full rounded-2xl px-4 py-3 text-base text-gray-800 outline-none focus:ring-2 focus:ring-indigo-500" />
              </motion.div>
            </div>

            <motion.div variants={inputVariants} className="space-y-2">
              <label className="font-manrope text-xs font-bold uppercase tracking-wide text-gray-400">Cuéntanos sobre tu proyecto</label>
              <textarea rows="4" placeholder="Contexto, objetivos, tiempos y lo que necesitas construir."
                        className="w-full rounded-2xl px-4 py-3 text-base text-gray-800 outline-none focus:ring-2 focus:ring-indigo-500" />
            </motion.div>

            <motion.div variants={inputVariants} className="flex items-center justify-between pt-4">
              <p className="max-w-sm text-sm text-gray-500">Proyectos selectos, respuestas claras y ejecución con criterio.</p>
              <button type="submit" className="min-h-[48px] px-8 py-3 rounded-full font-manrope text-xs font-bold uppercase tracking-widest text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all">
                Enviar
              </button>
            </motion.div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

// ============================================================================
// EFECTO 7: Gradients y blobs animados de fondo
// ============================================================================
const GradientBlobs = () => {
  return (
    <div id="efecto7" className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute left-[28vw] bottom-[-22vh] h-[62vh] w-[58vw] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(130,66,245,0.15), transparent 70%)' }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-[-10vw] top-[-10vh] h-[80vh] w-[60vw] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(167,139,250,0.12), transparent 70%)' }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-indigo-50/30" />
    </div>
  );
};

// ============================================================================
// EFECTO 8: Navbar con blur y efectos
// ============================================================================
const BlurNavbar = () => {
  const [scrolled, setScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav id="efecto8" className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled ? 'bg-white/70 backdrop-blur-xl shadow-sm py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            AI Web Designer
          </h1>
          <div className="flex gap-4 text-sm font-medium">
            <a href="#efecto1" className="text-gray-600 hover:text-indigo-600 transition-colors">Scroll</a>
            <a href="#efecto2" className="text-gray-600 hover:text-indigo-600 transition-colors">Steps</a>
            <a href="#efecto3" className="text-gray-600 hover:text-indigo-600 transition-colors">Blobs</a>
            <a href="#efecto4" className="text-gray-600 hover:text-indigo-600 transition-colors">Tilt</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

// ============================================================================
// EFECTO 9: Typography reveal con stagger
// ============================================================================
const TypographyReveal = () => {
  const prefersReducedMotion = useReducedMotion();
  const text = 'La mayoría no existe en internet. a medida que le doy scrolling el efecto de la sección de pasos el efecto de la sección de nuestros servicios';

  const charVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 12, filter: prefersReducedMotion ? 'none' : 'blur(4px)', transition: { duration: 0.5 } },
    visible: { opacity: 1, y: 0, filter: 'none' }
  };

  return (
    <section id="efecto9" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="mb-8 font-['Inter'] text-3xl font-bold text-gray-900">Efecto 9: Typography Stagger Reveal</h2>
        <motion.p
          className="font-manrope text-lg leading-relaxed text-gray-700 max-w-2xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          {text.split('').map((char, i) => (
            <motion.span
              key={i}
              variants={charVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: prefersReducedMotion, amount: 0.3 }}
              style={{ display: 'inline-block', marginRight: '0.2em' }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.p>
      </div>
    </section>
  );
};

// ============================================================================
// EFECTO 10: Image reveal con zoom y pan
// ============================================================================
const ImageReveal = () => {
  const prefersReducedMotion = useReducedMotion();
  const imgRef = useRef(null);

  const imgVariants = {
    hidden: { opacity: 0, scale: 1.2, rotate: prefersReducedMotion ? 0 : -3, filter: 'blur(12px)' },
    visible: { opacity: 1, scale: 1, rotate: 0, filter: 'none', transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } },
    exit: { opacity: 0, scale: 0.95, rotate: prefersReducedMotion ? 0 : 3, filter: 'blur(16px)', transition: { duration: 0.6 } }
  };

  const images = [
    'https://images.unsplash.com/photo-1481487494290-76b745734810?w=1200',
    'https://images.unsplash.com/photo-1497215748306-190730427241?w=1200',
    'https://images.unsplash.com/photo-1558655106-2e4a86620000?w=1200',
  ];

  const [current, setCurrent] = useState(0);

  return (
    <section id="efecto10" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="mb-12 font-['Inter'] text-4xl font-bold text-center text-gray-900">Efecto 10: Image Zoom Reveal</h2>
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            ref={imgRef}
            src={images[current]}
            alt={`Imagen ${current + 1}`}
            className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={imgVariants}
            viewport={{ once: prefersReducedMotion, amount: 0.5 }}
          />
        </AnimatePresence>
        <div className="flex justify-center gap-4 mt-6">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-12 h-12 rounded-full ${current === i ? 'bg-indigo-600' : 'bg-gray-200 hover:bg-gray-300'}`}
              aria-label={`Ir a la imagen ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export {
  ScrollRevealText,
  ProcessSteps,
  ServicesWithBlobs,
  TiltSlidePortfolio,
  StickyHeader,
  ContactFormReveal,
  GradientBlobs,
  BlurNavbar,
  TypographyReveal,
  ImageReveal
};