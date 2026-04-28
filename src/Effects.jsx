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
// EFECTO EXTRAIDO KAIVA: Carrusel de tarjetas tipo pasos/proyectos
// ============================================================================
const KaivaStepsCarousel = () => {
  const slides = [
    { id: 1, number: '01', label: 'Diagnóstico', vibe: 'Analítico', accent: '#8242f5', mockup: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900' },
    { id: 2, number: '02', label: 'Estructura', vibe: 'Sistema', accent: '#8242f5', mockup: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=900' },
    { id: 3, number: '03', label: 'Diseño', vibe: 'Narrativa', accent: '#8242f5', mockup: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=900' },
    { id: 4, number: '04', label: 'Desarrollo', vibe: 'Entrega', accent: '#8242f5', mockup: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900' }
  ];

  const [activeIndex, setActiveIndex] = useState(1);
  const [paused, setPaused] = useState(false);

  React.useEffect(() => {
    if (paused) return undefined;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 2400);
    return () => clearInterval(timer);
  }, [paused, slides.length]);

  React.useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'ArrowRight') setActiveIndex((prev) => Math.min(prev + 1, slides.length - 1));
      if (event.key === 'ArrowLeft') setActiveIndex((prev) => Math.max(prev - 1, 0));
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [slides.length]);

  return (
    <section className="relative h-full min-h-[360px] overflow-hidden bg-white">
      <div className="absolute inset-x-0 top-4 z-20 text-center">
        <p className="text-xs uppercase tracking-[0.18em] text-gray-500">Carrusel Kaiva</p>
      </div>
      <div
        className="relative mt-8 h-[300px] w-full"
        style={{ perspective: '2000px' }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onWheel={(event) => {
          if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
            event.preventDefault();
            if (event.deltaX > 30) setActiveIndex((prev) => Math.min(prev + 1, slides.length - 1));
            if (event.deltaX < -30) setActiveIndex((prev) => Math.max(prev - 1, 0));
          }
        }}
      >
        {slides.map((slide, index) => {
          const position = index - activeIndex;
          const isActive = index === activeIndex;
          const absOffset = Math.abs(position);
          const scale = isActive ? 1 : 1 - absOffset * 0.12;
          const translateX = position * 55;
          const translateZ = isActive ? 0 : -absOffset * 180;
          const opacity = absOffset > 2 ? 0 : isActive ? 1 : 0.5 - absOffset * 0.12;

          return (
            <motion.div
              key={slide.id}
              className="absolute left-1/2 top-1/2"
              style={{ width: 'clamp(180px, 64vw, 420px)', aspectRatio: '4 / 3', x: '-50%', y: '-50%' }}
              animate={{ x: `calc(-50% + ${translateX}%)`, scale, z: translateZ, opacity }}
              transition={{ type: 'spring', stiffness: 120, damping: 20 }}
              onClick={() => setActiveIndex(index)}
            >
              <div
                className="relative h-full w-full overflow-hidden rounded-2xl border border-[#080808]/10"
                style={{
                  boxShadow: isActive
                    ? `0 32px 70px -24px rgba(32,29,26,0.22), 0 0 80px -28px ${slide.accent}26, inset 0 1px 0 rgba(255,255,255,0.7)`
                    : '0 24px 50px -28px rgba(32,29,26,0.18)'
                }}
              >
                <img src={slide.mockup} alt={slide.label} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
                <div className="absolute left-3 top-3 rounded-full bg-white/85 px-2 py-1 text-[10px] font-bold tracking-[0.08em] text-[#1f2b5a]">
                  {slide.vibe}
                </div>
                <div className="absolute bottom-3 left-3 text-white">
                  <p className="text-xl font-extrabold leading-none">{slide.number}</p>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em]">{slide.label}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
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
// EFECTO EXTRAIDO KAIVA: Tarjetas "Nuestros servicios"
// ============================================================================
const KaivaServicesCards = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [hovering, setHovering] = useState(false);
  const services = [
    {
      title: 'Desarrollo web',
      description: 'Creamos páginas web estratégicas diseñadas para transmitir confianza y generar oportunidades reales.'
    },
    {
      title: 'Diseño UI/UX + Marca',
      description: 'Diseñamos experiencias claras y enfocadas en conversión, alineadas con tu identidad de marca.'
    },
    {
      title: 'Automatización y sistemas',
      description: 'Implementamos herramientas y sistemas para responder, organizar y vender sin fricción.'
    }
  ];

  React.useEffect(() => {
    if (hovering) return undefined;
    const timer = setInterval(() => {
      setActiveIndex((prev) => {
        if (prev === null) return 0;
        return (prev + 1) % services.length;
      });
    }, 1700);
    return () => clearInterval(timer);
  }, [hovering, services.length]);

  return (
    <section
      className="h-full min-h-[360px] bg-[#f8f6f2] p-4"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div className="grid h-full gap-4 md:grid-cols-3">
        {services.map((service, index) => {
          const active = activeIndex === index;
          return (
            <motion.article
              key={service.title}
              className="group relative flex min-h-[260px] flex-col overflow-hidden rounded-[24px] border border-white/80 bg-white p-5 shadow-[0_18px_48px_-34px_rgba(80,74,168,0.28)]"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              style={{
                borderColor: active ? 'rgba(130,66,245,0.30)' : 'rgba(255,255,255,0.8)',
                boxShadow: active ? '0 28px 74px -44px rgba(130,66,245,0.4)' : '0 18px 48px -34px rgba(80,74,168,0.28)'
              }}
            >
              <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[24px]">
                <div className="absolute -bottom-[20%] -right-[10%] h-[70%] w-[70%] translate-x-1/4 translate-y-1/4 rounded-full bg-[#d96cff] opacity-0 blur-[60px] transition-all duration-700 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-[0.35]" />
                <div className="absolute -bottom-[20%] left-[15%] h-[70%] w-[70%] translate-y-1/4 rounded-full bg-[#8242f5] opacity-0 blur-[60px] transition-all delay-75 duration-700 group-hover:translate-y-0 group-hover:opacity-[0.25]" />
                <div className="absolute -bottom-[20%] -left-[10%] h-[70%] w-[70%] -translate-x-1/4 translate-y-1/4 rounded-full bg-[#21b2c6] opacity-0 blur-[60px] transition-all delay-150 duration-700 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-[0.35]" />
              </div>
              <motion.div
                className="relative z-10 text-5xl font-extrabold leading-none tracking-[-0.04em]"
                style={{
                  background: 'linear-gradient(135deg, #21b2c6 0%, #8242f5 58%, #d96cff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
                animate={{ x: active ? 5 : 0 }}
              >
                0{index + 1}
              </motion.div>
              <motion.div className="mt-6 h-px w-full bg-[#080808]/15" animate={{ scaleX: active ? 0.985 : 1 }} />
              <h3 className="relative z-10 mt-7 text-xl font-extrabold leading-[1.08] tracking-[-0.03em] text-[#080808]">
                {service.title}
              </h3>
              <p className="relative z-10 mt-4 text-sm leading-7 text-[#080808]/70">{service.description}</p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};

// ============================================================================
// EFECTO 4: Tilt Slide - Tarjetas 3D que giran con el mouse
// ============================================================================
const TiltSlide = ({ slide, isActive, position, onClick }) => {
  const cardRef = useRef(null);
  const src = slide.mockup;
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

const ServicePreview = ({ service, prefersReducedMotion }) => {
  const previewTransition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.55, ease: [0.22, 1, 0.36, 1] };

  if (service.id === 'web') {
    return (
      <motion.div
        key={service.id}
        initial={prefersReducedMotion ? false : { opacity: 0, y: 18, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -12, scale: 0.98 }}
        transition={previewTransition}
        className="grid gap-4"
      >
        <div className="overflow-hidden rounded-[28px] border border-white/12 bg-[#0d1020] shadow-[0_32px_80px_-36px_rgba(17,24,39,0.85)]">
          <div className="flex items-center gap-2 border-b border-white/8 px-5 py-4">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b6b]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ffd166]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#06d6a0]" />
            <div className="ml-3 rounded-full bg-white/6 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-white/46">
              Landing premium
            </div>
          </div>
          <div className="space-y-6 bg-[radial-gradient(circle_at_top_left,_rgba(107,79,255,0.38),_transparent_42%),linear-gradient(180deg,_#12162a_0%,_#090b14_100%)] px-5 py-6">
            <div className="space-y-3">
              <div className="h-3 w-24 rounded-full bg-white/15" />
              <div className="h-10 max-w-[16rem] rounded-2xl bg-white/95" />
              <div className="h-4 max-w-[12rem] rounded-full bg-white/14" />
            </div>
            <div className="grid gap-3 md:grid-cols-[1.2fr_0.8fr]">
              <div className="rounded-[24px] bg-white/96 p-4 text-[#111827] shadow-[0_20px_55px_-32px_rgba(0,0,0,0.55)]">
                <div className="mb-3 h-5 w-28 rounded-full bg-[#ede9fe]" />
                <div className="space-y-2">
                  <div className="h-3 rounded-full bg-[#dbe4ff]" />
                  <div className="h-3 w-4/5 rounded-full bg-[#dbe4ff]" />
                  <div className="mt-4 flex gap-2">
                    <div className="h-9 w-28 rounded-full bg-[#111827]" />
                    <div className="h-9 w-24 rounded-full border border-[#c7d2fe]" />
                  </div>
                </div>
              </div>
              <div className="grid gap-3">
                <div className="rounded-[22px] bg-white/10 p-4 backdrop-blur-xl">
                  <div className="mb-2 h-3 w-16 rounded-full bg-white/16" />
                  <div className="h-20 rounded-[18px] bg-[linear-gradient(135deg,_rgba(99,102,241,0.9),_rgba(168,85,247,0.92))]" />
                </div>
                <div className="rounded-[22px] bg-white/10 p-4 backdrop-blur-xl">
                  <div className="mb-3 h-3 w-20 rounded-full bg-white/16" />
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-10 rounded-2xl bg-white/14" />
                    <div className="h-10 rounded-2xl bg-white/10" />
                    <div className="h-10 rounded-2xl bg-white/14" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  if (service.id === 'design') {
    return (
      <motion.div
        key={service.id}
        initial={prefersReducedMotion ? false : { opacity: 0, y: 18, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -12, scale: 0.98 }}
        transition={previewTransition}
        className="grid gap-4 lg:grid-cols-[0.92fr_1.08fr]"
      >
        <div className="rounded-[28px] border border-[#111827]/8 bg-[#fffdf9] p-5 shadow-[0_28px_70px_-36px_rgba(15,23,42,0.3)]">
          <div className="mb-6 text-[11px] uppercase tracking-[0.2em] text-[#8b5cf6]">Brand board</div>
          <div className="space-y-3">
            <div className="font-['Georgia'] text-4xl italic leading-none text-[#16151f]">Kaiva</div>
            <div className="text-lg font-semibold tracking-[-0.03em] text-[#16151f]">Systems with character</div>
            <div className="max-w-[15rem] text-sm leading-6 text-[#5b556e]">
              Dirección visual, tipografía, color y piezas listas para web, pitch o redes.
            </div>
          </div>
          <div className="mt-6 grid grid-cols-4 gap-2">
            {['#16151f', '#8b5cf6', '#e879f9', '#f3ede4'].map((color) => (
              <div key={color} className="h-12 rounded-2xl border border-black/5" style={{ background: color }} />
            ))}
          </div>
        </div>
        <div className="overflow-hidden rounded-[28px] border border-[#111827]/8 bg-[#f5f0ff] p-5 shadow-[0_28px_70px_-36px_rgba(91,33,182,0.34)]">
          <div className="grid gap-4 md:grid-cols-[0.88fr_1.12fr]">
            <div className="rounded-[24px] bg-white p-4 shadow-[0_16px_44px_-30px_rgba(15,23,42,0.35)]">
              <div className="mb-4 h-36 rounded-[20px] bg-[linear-gradient(160deg,_#111827,_#6d28d9_58%,_#f5d0fe_120%)]" />
              <div className="space-y-2">
                <div className="h-4 w-24 rounded-full bg-[#111827]" />
                <div className="h-3 rounded-full bg-[#d8ccff]" />
                <div className="h-3 w-4/5 rounded-full bg-[#eadcff]" />
              </div>
            </div>
            <div className="grid gap-4">
              <div className="rounded-[24px] bg-[#151225] p-4 text-white">
                <div className="mb-3 text-[11px] uppercase tracking-[0.16em] text-white/52">UI kit</div>
                <div className="flex gap-2">
                  <div className="h-10 flex-1 rounded-full bg-white text-[#121212]" />
                  <div className="h-10 w-12 rounded-full bg-white/10" />
                </div>
              </div>
              <div className="rounded-[24px] bg-white p-4">
                <div className="mb-3 h-3 w-20 rounded-full bg-[#d8ccff]" />
                <div className="grid grid-cols-2 gap-3">
                  <div className="h-20 rounded-[18px] bg-[linear-gradient(135deg,_#ede9fe,_#ffffff)]" />
                  <div className="h-20 rounded-[18px] bg-[linear-gradient(135deg,_#111827,_#334155)]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      key={service.id}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 18, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -12, scale: 0.98 }}
      transition={previewTransition}
      className="overflow-hidden rounded-[28px] border border-[#0f172a]/8 bg-[#09111f] p-5 shadow-[0_32px_90px_-42px_rgba(2,8,23,0.92)]"
    >
      <div className="mb-5 flex items-center justify-between">
        <div>
          <div className="text-[11px] uppercase tracking-[0.18em] text-[#7dd3fc]">Automation flow</div>
          <div className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">Sistemas que ejecutan</div>
        </div>
        <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.14em] text-white/48">
          24/7
        </div>
      </div>
      <div className="grid gap-4 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="rounded-[24px] border border-white/10 bg-white/6 p-4 backdrop-blur-xl">
          <div className="mb-4 flex items-center gap-2">
            <div className="h-9 w-9 rounded-full bg-[linear-gradient(135deg,_#38bdf8,_#6366f1)]" />
            <div>
              <div className="h-3 w-24 rounded-full bg-white/18" />
              <div className="mt-2 h-2 w-16 rounded-full bg-white/10" />
            </div>
          </div>
          <div className="space-y-3">
            <div className="rounded-[18px] bg-[#0f172a] px-4 py-3 text-sm text-white/86">Nuevo lead desde la web</div>
            <div className="rounded-[18px] bg-white/10 px-4 py-3 text-sm text-white/74">Clasificar, etiquetar y notificar</div>
            <div className="rounded-[18px] bg-white/10 px-4 py-3 text-sm text-white/74">Disparar respuesta o tarea interna</div>
          </div>
        </div>
        <div className="rounded-[24px] bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.22),_transparent_32%),linear-gradient(180deg,_#0f172a_0%,_#050814_100%)] p-4">
          <div className="grid gap-3 md:grid-cols-3">
            {['Lead', 'CRM', 'Operación'].map((item, index) => (
              <div key={item} className="rounded-[18px] border border-white/10 bg-white/6 p-4">
                <div className="mb-3 flex items-center gap-2">
                  <div
                    className="h-9 w-9 rounded-2xl"
                    style={{
                      background:
                        index === 0
                          ? 'linear-gradient(135deg, #38bdf8, #0ea5e9)'
                          : index === 1
                          ? 'linear-gradient(135deg, #818cf8, #8b5cf6)'
                          : 'linear-gradient(135deg, #34d399, #10b981)',
                    }}
                  />
                  <div className="h-3 w-14 rounded-full bg-white/16" />
                </div>
                <div className="space-y-2">
                  <div className="h-3 rounded-full bg-white/12" />
                  <div className="h-3 w-4/5 rounded-full bg-white/8" />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-white/34">
            <div className="h-px bg-white/12" />
            <span>Sync</span>
            <div className="h-px bg-white/12" />
            <span>Route</span>
            <div className="h-px bg-white/12" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const TiltSlidePortfolio = () => {
  const prefersReducedMotion = useReducedMotion();
  const services = [
    {
      id: 'web',
      number: '01',
      tab: 'Desarrollo web',
      eyebrow: 'Construimos presencia',
      title: 'Webs diseñadas para vender mejor y transmitir criterio.',
      description:
        'Landing pages, sitios corporativos y páginas de servicio con narrativa clara, velocidad real y una estructura pensada para convertir visitas en conversaciones.',
      points: ['Arquitectura y copy de conversión', 'Responsive premium', 'SEO base y performance', 'Entrega lista para crecer'],
      accent: 'linear-gradient(135deg, #6366f1, #a855f7)',
    },
    {
      id: 'design',
      number: '02',
      tab: 'Diseño',
      eyebrow: 'Definimos percepción',
      title: 'Diseño visual y de interfaz para que la marca se sienta seria.',
      description:
        'Diseñamos identidad, dirección visual y sistemas de interfaz que ordenan la experiencia y elevan la percepción de valor en cada punto de contacto.',
      points: ['Dirección de arte y estilo', 'Sistemas UI limpios', 'Brand boards y presentaciones', 'Diseño enfocado en claridad'],
      accent: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
    },
    {
      id: 'automation',
      number: '03',
      tab: 'Automatización',
      eyebrow: 'Sistemas que ejecutan',
      title: 'Automatizaciones y software interno para operar con menos fricción.',
      description:
        'Conectamos formularios, CRM, mensajería y procesos internos para que los leads no se pierdan y el equipo deje de repetir tareas manuales.',
      points: ['Bots y flujos operativos', 'Integraciones entre herramientas', 'Dashboards y lógica interna', 'Automatización comercial y soporte'],
      accent: 'linear-gradient(135deg, #06b6d4, #6366f1)',
    },
  ];
  const [activeService, setActiveService] = useState('web');
  const currentService = services.find((service) => service.id === activeService) || services[0];

  return (
    <section
      id="efecto4"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#fbfbfd_0%,#f5f1ff_38%,#f7f6fb_100%)] py-20"
      style={{ fontFamily: 'Manrope, sans-serif' }}
    >
      <div
        className="pointer-events-none absolute left-[-12%] top-[16%] h-[320px] w-[320px] rounded-full blur-[90px]"
        style={{ background: 'rgba(139,92,246,0.18)' }}
      />
      <div
        className="pointer-events-none absolute right-[-8%] top-[30%] h-[280px] w-[280px] rounded-full blur-[90px]"
        style={{ background: 'rgba(34,211,238,0.14)' }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#8b5cf6]">Servicios</div>
          <h2 className="mt-4 font-['Inter'] text-[clamp(40px,6vw,76px)] font-bold leading-[0.96] tracking-[-0.05em] text-[#111827]">
            Elegimos el sistema visual según lo que necesitas resolver.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[#4b5563] md:text-lg">
            En lugar de mostrar proyectos genéricos, esta sección presenta cada línea de servicio con una narrativa,
            una interfaz propia y un lenguaje visual coherente con lo que entregamos.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {services.map((service) => {
            const isActive = currentService.id === service.id;
            return (
              <button
                key={service.id}
                type="button"
                onClick={() => setActiveService(service.id)}
                className={`rounded-full px-5 py-3 text-sm font-semibold tracking-[-0.02em] transition-all duration-300 ${
                  isActive
                    ? 'text-white shadow-[0_18px_42px_-22px_rgba(91,33,182,0.55)]'
                    : 'border border-[#111827]/10 bg-white/88 text-[#374151] hover:-translate-y-0.5 hover:border-[#8b5cf6]/25'
                }`}
                style={isActive ? { background: service.accent } : undefined}
              >
                {service.tab}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <motion.div
            key={currentService.id}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[34px] border border-[#111827]/8 bg-white/82 p-7 shadow-[0_26px_70px_-38px_rgba(15,23,42,0.24)] backdrop-blur-xl md:p-9"
          >
            <div className="flex items-center gap-4">
              <div
                className="flex h-14 w-14 items-center justify-center rounded-[18px] text-lg font-bold text-white shadow-[0_20px_40px_-20px_rgba(0,0,0,0.35)]"
                style={{ background: currentService.accent }}
              >
                {currentService.number}
              </div>
              <div>
                <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8b5cf6]">{currentService.eyebrow}</div>
                <div className="mt-1 text-sm font-medium text-[#6b7280]">{currentService.tab}</div>
              </div>
            </div>

            <h3 className="mt-8 max-w-[14ch] text-[clamp(30px,4vw,52px)] font-bold leading-[0.96] tracking-[-0.05em] text-[#111827]">
              {currentService.title}
            </h3>
            <p className="mt-5 max-w-xl text-[15px] leading-7 text-[#4b5563] md:text-base">
              {currentService.description}
            </p>

            <div className="mt-8 grid gap-3">
              {currentService.points.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-3 rounded-[20px] border border-[#111827]/6 bg-[#f8f6ff] px-4 py-3 text-sm text-[#1f2937]"
                >
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ background: currentService.id === 'automation' ? '#06b6d4' : '#8b5cf6' }}
                  />
                  {point}
                </div>
              ))}
            </div>
          </motion.div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <ServicePreview service={currentService} prefersReducedMotion={prefersReducedMotion} />
            </AnimatePresence>
          </div>
        </div>
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

// ============================================================================
// EFECTO 11: Aurora Mesh Background
// ============================================================================
const AuroraMesh = () => {
  const prefersReducedMotion = useReducedMotion();
  const pulse = prefersReducedMotion ? {} : { scale: [1, 1.08, 1], x: [0, 10, -8, 0], y: [0, -8, 6, 0] };

  return (
    <section id="efecto11" className="relative h-full min-h-[360px] overflow-hidden bg-[#090d16]">
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: 'linear-gradient(rgba(124,154,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(124,154,255,0.12) 1px, transparent 1px)',
        backgroundSize: '44px 44px'
      }} />
      <motion.div className="absolute -left-[20%] -top-[24%] h-[70%] w-[62%] rounded-full blur-[60px]"
        style={{ background: 'radial-gradient(circle, rgba(79,124,255,0.35), transparent 68%)' }}
        animate={pulse} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} />
      <motion.div className="absolute right-[-20%] top-[4%] h-[62%] w-[56%] rounded-full blur-[60px]"
        style={{ background: 'radial-gradient(circle, rgba(45,212,191,0.28), transparent 68%)' }}
        animate={pulse} transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }} />
      <motion.div className="absolute left-[22%] bottom-[-30%] h-[78%] w-[58%] rounded-full blur-[60px]"
        style={{ background: 'radial-gradient(circle, rgba(140,92,246,0.26), transparent 70%)' }}
        animate={pulse} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#090d16]" />
      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
        <p className="max-w-lg text-sm font-semibold uppercase tracking-[0.22em] text-[#d8e4ff]">
          Aurora Mesh Atmosphere
        </p>
      </div>
    </section>
  );
};

// ============================================================================
// EFECTO 12: Floating Avatars Orbit
// ============================================================================
const FloatingAvatars = () => {
  const prefersReducedMotion = useReducedMotion();
  const floatAnim = prefersReducedMotion ? {} : { y: [0, -14, 0, 10, 0], rotate: [0, 2, -2, 1, 0] };

  const items = [
    { label: 'AI', pos: 'left-[10%] top-[18%]', delay: 0 },
    { label: 'UX', pos: 'right-[12%] top-[12%]', delay: 0.5 },
    { label: '3D', pos: 'left-[20%] bottom-[12%]', delay: 1.1 },
    { label: 'WEB', pos: 'right-[16%] bottom-[10%]', delay: 1.6 }
  ];

  return (
    <section id="efecto12" className="relative h-full min-h-[360px] overflow-hidden rounded-2xl bg-[#f6f8ff]">
      <div className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#a6bbff]/60" />
      <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#cdd8ff]/60" />
      <motion.div
        className="absolute left-1/2 top-1/2 h-[84px] w-[84px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-indigo-600 to-cyan-500 shadow-[0_20px_45px_-24px_rgba(79,124,255,0.6)]"
        animate={prefersReducedMotion ? {} : { rotate: [0, 360] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
      />
      {items.map((item) => (
        <motion.div
          key={item.label}
          className={`absolute ${item.pos} grid h-14 w-14 place-items-center rounded-2xl border border-white/90 bg-white text-xs font-extrabold tracking-wide text-[#1f2d5a] shadow-[0_18px_42px_-26px_rgba(40,60,130,0.45)]`}
          animate={floatAnim}
          transition={{ duration: 7.2, repeat: Infinity, ease: 'easeInOut', delay: item.delay }}
        >
          {item.label}
        </motion.div>
      ))}
    </section>
  );
};

// ============================================================================
// EFECTO 13: KPI Count-Up Cards
// ============================================================================
const CountCard = ({ value, suffix = '', label, decimal = false }) => {
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { damping: 30, stiffness: 70 });
  const [display, setDisplay] = useState('0');

  React.useEffect(() => {
    motionValue.set(value);
  }, [motionValue, value]);

  React.useEffect(() => {
    const unsubscribe = spring.on('change', (latest) => {
      setDisplay(decimal ? latest.toFixed(1) : Math.round(latest).toString());
    });
    return () => unsubscribe();
  }, [spring, decimal]);

  return (
    <div className="rounded-2xl border border-[#e3e7f4] bg-white p-5 shadow-[0_18px_38px_-30px_rgba(17,24,39,0.38)]">
      <p className="text-3xl font-extrabold text-[#243061]">{display}{suffix}</p>
      <p className="mt-2 text-xs uppercase tracking-[0.16em] text-[#6f7ca4]">{label}</p>
    </div>
  );
};

const StatsCounter = () => {
  return (
    <section id="efecto13" className="h-full min-h-[360px] bg-[#f8f8fb] px-5 py-8">
      <div className="grid gap-3 md:grid-cols-3">
        <CountCard value={75} suffix="%" label="búsquedas antes de comprar" />
        <CountCard value={83} suffix="%" label="pymes invierten en digital" />
        <CountCard value={1.7} suffix="M" label="empresas registradas" decimal />
      </div>
    </section>
  );
};

// ============================================================================
// EFECTO 14: Magnetic CTA
// ============================================================================
const MagneticButton = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 18 });
  const springY = useSpring(y, { stiffness: 180, damping: 18 });

  const handleMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((event.clientX - centerX) * 0.22);
    y.set((event.clientY - centerY) * 0.22);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section id="efecto14" className="flex h-full min-h-[360px] items-center justify-center bg-[#0b0e17]">
      <motion.button
        className="relative overflow-hidden rounded-full border border-[#7ba4ff]/60 bg-[#111a2e] px-10 py-4 text-sm font-extrabold uppercase tracking-[0.16em] text-[#e7efff] shadow-[0_20px_50px_-24px_rgba(79,124,255,0.55)]"
        style={{ x: springX, y: springY }}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        whileTap={{ scale: 0.97 }}
      >
        <span className="relative z-10">Quiero mi web</span>
        <motion.span
          className="absolute inset-0 opacity-60"
          style={{ background: 'linear-gradient(110deg, transparent 30%, rgba(155,186,255,0.46) 50%, transparent 70%)' }}
          animate={{ x: ['-120%', '130%'] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: 'linear' }}
        />
      </motion.button>
    </section>
  );
};

const SkeletonShimmer = () => (
  <section className="h-full min-h-[360px] bg-[#0d1018] p-6">
    <div className="mx-auto mt-6 max-w-[260px] space-y-3" role="status" aria-label="Loading content">
      {[100, 76, 88, 62].map((w, i) => (
        <div
          key={i}
          aria-hidden="true"
          className="h-4 rounded-md"
          style={{
            width: `${w}%`,
            background: 'linear-gradient(90deg, #1a1a24 25%, #2a2a3e 50%, #1a1a24 75%)',
            backgroundSize: '200% 100%',
            animation: 'skeletonShimmer 1.5s linear infinite'
          }}
        />
      ))}
    </div>
    <style>{`@keyframes skeletonShimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}`}</style>
  </section>
);

const SpotlightCursor = () => {
  const [pos, setPos] = useState({ x: 50, y: 50 });
  return (
    <section
      className="relative h-full min-h-[360px] overflow-hidden bg-[#0a0a0f]"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        setPos({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
      }}
      style={{
        backgroundImage: `radial-gradient(circle at ${pos.x}% ${pos.y}%, rgba(99,102,241,0.2) 0%, transparent 46%)`
      }}
    >
      <div className="absolute inset-0 grid place-items-center text-sm font-bold uppercase tracking-[0.2em] text-[#a5acc6]">
        Move Cursor
      </div>
    </section>
  );
};

const MorphingShape = () => (
  <section className="flex h-full min-h-[360px] items-center justify-center bg-[#0f1320]">
    <div
      className="h-[120px] w-[120px]"
      style={{
        background: 'linear-gradient(135deg, #6366f1, #ec4899)',
        animation: 'morphShape 4s ease-in-out infinite'
      }}
    />
    <style>{`@keyframes morphShape{0%,100%{border-radius:50%;transform:rotate(0deg)}25%{border-radius:10px;transform:rotate(90deg)}50%{border-radius:50% 10px 50% 10px;transform:rotate(180deg)}75%{border-radius:10px 50% 10px 50%;transform:rotate(270deg)}}`}</style>
  </section>
);

const RippleButtonDemo = () => (
  <section className="flex h-full min-h-[360px] items-center justify-center bg-[#0f1422]">
    <button
      className="relative overflow-hidden rounded-lg border-0 px-7 py-3 text-sm font-semibold text-white"
      style={{ background: '#6366f1' }}
    >
      Click Me
      <span
        className="pointer-events-none absolute left-1/2 top-1/2 h-[100px] w-[100px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background: 'rgba(255,255,255,0.3)',
          animation: 'ripplePulse 2s infinite'
        }}
      />
    </button>
    <style>{`@keyframes ripplePulse{0%{transform:translate(-50%,-50%) scale(0);opacity:1}100%{transform:translate(-50%,-50%) scale(2);opacity:0}}`}</style>
  </section>
);

const ScrollProgressDemo = () => {
  const [progress, setProgress] = useState(0);
  React.useEffect(() => {
    let frame;
    const loop = () => {
      setProgress((p) => (p >= 100 ? 0 : p + 1.2));
      frame = requestAnimationFrame(loop);
    };
    frame = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="h-full min-h-[360px] bg-[#0b0f1a] p-6">
      <div className="mx-auto mt-12 max-w-[260px]">
        <div className="mb-3 text-xs uppercase tracking-[0.15em] text-[#93a3cc]">Scroll Progress</div>
        <div className="h-[3px] w-full rounded bg-[#1f2942]">
          <div
            className="h-full rounded"
            style={{ width: `${progress}%`, background: 'linear-gradient(90deg,#6366f1,#8b5cf6)', transition: 'width 0.1s ease-out' }}
          />
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
  ImageReveal,
  AuroraMesh,
  FloatingAvatars,
  StatsCounter,
  MagneticButton,
  KaivaServicesCards,
  KaivaStepsCarousel,
  SkeletonShimmer,
  SpotlightCursor,
  MorphingShape,
  RippleButtonDemo,
  ScrollProgressDemo
};
