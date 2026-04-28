import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// 1. Scroll Reveal Effect
const ScrollReveal = () => {
  const { scrollYProgress } = useScroll({ offset: ['start end', 'end start'] });
  const textY = useTransform(scrollYProgress, [0, 0.5], [80, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <div style={{ position: 'relative', height: '600px', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        padding: '4rem 6rem',
        textAlign: 'center',
        background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.05) 100%)',
        backdropFilter: 'blur(24px) saturate(120%)',
        WebkitBackdropFilter: 'blur(24px) saturate(120%)',
        border: '1px solid rgba(255, 255, 255, 0.6)',
        boxShadow: '0 32px 64px rgba(0, 0, 0, 0.12)',
        borderRadius: '24px',
      }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.25rem' }}>
          {["91", "% de las", "empresas", "que confían en", "IA reportan", "resultados", "excepcionales"].map((word, i) => (
            <motion.span
              key={i}
              style={{ y: textY, opacity }}
            >
              {word}{i < 7 ? ' ' : ''}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
};

// 2. Counter Animation
const CounterDemo = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count === 0) {
      const end = 91;
      const duration = 2000;
      const startTime = Date.now();
      
      const animate = () => {
        const elapsed = Date.now() - startTime;
        if (elapsed < duration) {
          const progress = elapsed / duration;
          setCount(Math.floor(progress * end));
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, []);

  return (
    <div style={{ position: 'relative', height: '400px', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        padding: '3rem 5rem',
        textAlign: 'center',
        background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.05) 100%)',
        backdropFilter: 'blur(24px) saturate(120%)',
        WebkitBackdropFilter: 'blur(24px) saturate(120%)',
        border: '1px solid rgba(255, 255, 255, 0.6)',
        boxShadow: '0 32px 64px rgba(0, 0, 0, 0.12)',
        borderRadius: '24px',
      }}>
        <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1rem' }}>
          {count}% de las empresas
        </h2>
        <p style={{ fontSize: '1.25rem', color: '#666' }}>reportan resultados excepcionales</p>
      </div>
    </div>
  );
};

// 3. Steps Animation
const StepsDemo = () => {
  const steps = [
    { num: '01', title: 'Diagnóstico', desc: 'Analizamos tu situación actual y objetivos.' },
    { num: '02', title: 'Estructura', desc: 'Diseñamos la arquitectura ideal para tu proyecto.' },
    { num: '03', title: 'Diseño', desc: 'Creamos experiencias visuales únicas y memorables.' },
    { num: '04', title: 'Desarrollo', desc: 'Programamos con las últimas tecnologías.' },
    { num: '05', title: 'Entrega', desc: 'Entregamos una solución lista para usar.' },
  ];

  return (
    <div style={{ padding: '4rem 0' }}>
      <h2 style={{ fontSize: '2.5rem', fontWeight: '800', textAlign: 'center', marginBottom: '1rem' }}>Nuestro Método</h2>
      <p style={{ fontSize: '1.125rem', color: '#666', textAlign: 'center', marginBottom: '3rem', maxWidth: '600px', margin: '1rem auto' }}>
        Un enfoque transparente y eficiente para crear webs que realmente funcionan.
      </p>

      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {steps.map((step, index) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '2rem',
              padding: '2rem',
              background: 'white',
              borderRadius: '16px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
              marginBottom: '1.5rem',
            }}
          >
            <motion.div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                background: 'linear-gradient(135deg, #21b2c6, #8242f5, #d96cff)',
                color: 'white',
              }}
            >
              {step.num}
            </motion.div>
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.5rem' }}>
                {step.title}
              </h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// 4. Services Cards
const ServicesDemo = () => {
  const services = [
    { title: 'Desarrollo web', description: 'Creamos páginas web estratégicas diseñadas para transmitir confianza y generar oportunidades reales.' },
    { title: 'Diseño UI/UX + Marca', description: 'Diseñamos experiencias claras y enfocadas en conversión, alineadas con tu identidad de marca.' },
    { title: 'Automatización y sistemas', description: 'Implementamos herramientas y sistemas para responder, organizar y vender sin fricción.' },
  ];

  const cards = services.map((service, index) => (
    <motion.article
      key={index}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -12, boxShadow: '0 28px 74px -44px rgba(130,66,245,0.4)' }}
      style={{
        position: 'relative',
        minHeight: '340px',
        padding: '2rem',
        background: 'white',
        borderRadius: '24px',
        border: '1px solid rgba(255,255,255,0.8)',
        cursor: 'pointer',
        overflow: 'hidden',
        transition: 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
      }}
    >
      <motion.div
        style={{
          position: 'absolute',
          bottom: '-50%',
          right: '-10%',
          width: '50%',
          height: '40%',
          background: 'linear-gradient(135deg, rgba(33,178,198,0.4), rgba(130,66,245,0.4), rgba(217,108,255,0.4))',
          borderRadius: '50%',
          filter: 'blur(60px)',
          transition: 'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
          opacity: 0,
          transform: 'translateX(100%) translateY(100%)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.opacity = '0.5';
          e.currentTarget.style.transform = 'translateX(0) translateY(0)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.opacity = '0';
          e.currentTarget.style.transform = 'translateX(100%) translateY(100%)';
        }}
      />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          style={{
            fontSize: '4rem',
            fontWeight: '900',
            background: 'linear-gradient(135deg, #21b2c6, #8242f5, #d96cff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {String(index + 1).padStart(2, '0')}
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: 'absolute',
            left: 0,
            top: '50%',
            width: '100%',
            height: '2px',
            background: 'linear-gradient(90deg, transparent, rgba(200,200,200,0.5), transparent)',
          }}
        />

        <h3 style={{
          fontSize: '1.5rem',
          fontWeight: '800',
          marginTop: '2rem',
          marginBottom: '1rem',
          color: '#1f2937',
        }}>
          {service.title}
        </h3>

        <p style={{
          color: '#6b7280',
          lineHeight: '1.6',
        }}>
          {service.description}
        </p>
      </div>
    </motion.article>
  ));

  return (
    <div style={{ padding: '4rem 0' }}>
      <h2 style={{ fontSize: '2.5rem', fontWeight: '800', textAlign: 'center', marginBottom: '1rem' }}>Nuestros Servicios</h2>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '2rem',
        marginTop: '3rem',
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        {cards}
      </div>
    </div>
  );
};

// 5. Marquee Effect
const MarqueeDemo = () => {
  const testimonials = [
    "Excelente trabajo, superaron nuestras expectativas.",
    "El diseño es impecable y la funcionalidad perfecta.",
    "Profesionales rápidos y comprometidos.",
    "La mejor inversión para nuestro negocio.",
    "Recomendamos a todos sus servicios.",
  ];

  return (
    <div style={{ position: 'relative', height: '200px', overflow: 'hidden', background: '#f9fafb', padding: '4rem 0' }}>
      <div style={{ display: 'flex', gap: '2rem', width: 'max-content', animation: 'marquee 40s linear infinite' }}>
        {[...testimonials, ...testimonials, ...testimonials].map((text, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            style={{
              padding: '2rem 3rem',
              background: 'white',
              borderRadius: '16px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
            }}
          >
            <p style={{ fontSize: '1.25rem', fontStyle: 'italic', color: '#666' }}>
              "{text}"
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// 6. Floating Orbs
const FloatingOrbsDemo = () => {
  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', overflow: 'hidden', zIndex: -1 }}>
      <motion.div
        style={{
          position: 'absolute',
          width: '300px',
          height: '300px',
          background: 'rgba(33, 178, 198, 0.3)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          left: '-10%',
          top: '-10%',
        }}
        animate={{ y: [0, 30, 0], x: [0, 20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        style={{
          position: 'absolute',
          width: '400px',
          height: '400px',
          background: 'rgba(130, 66, 245, 0.3)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          right: '-5%',
          top: '10%',
        }}
        animate={{ y: [0, 30, 0], x: [0, 20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
      <motion.div
        style={{
          position: 'absolute',
          width: '350px',
          height: '350px',
          background: 'rgba(217, 108, 255, 0.3)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          left: '50%',
          bottom: '-10%',
        }}
        animate={{ y: [0, 30, 0], x: [0, 20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
      />
    </div>
  );
};

export default function Demo() {
  return (
    <div style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif', background: 'white' }}>
      {/* Hero */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '4rem 6rem', position: 'relative' }}>
        <FloatingOrbsDemo />
        <div style={{ maxWidth: '600px', textAlign: 'center' }}>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              fontSize: '3.5rem',
              fontWeight: '900',
              lineHeight: '1.1',
              background: 'linear-gradient(135deg, #21b2c6 0%, #8242f5 58%, #d96cff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            AI Web Designer
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              fontSize: '1.5rem',
              color: '#6b7280',
              maxWidth: '500px',
              margin: '2rem auto 0',
            }}
          >
            Una biblioteca de efectos UI/Web modernos inspirada en los mejores sitios.
            Copia los prompts y crea tus propias animaciones.
          </motion.p>
          <motion.a
            href="#scroll-reveal"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '1rem 2rem',
              background: 'linear-gradient(135deg, #06b6d4, #8b5cf6, #d946ef)',
              color: 'white',
              fontWeight: '700',
              borderRadius: '9999px',
              fontSize: '1.125rem',
              cursor: 'pointer',
              transition: 'transform 0.3s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            Ver Demo
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
              style={{ display: 'inline-block' }}
            >
              →
            </motion.span>
          </motion.a>
        </div>
      </section>

      {/* 1. Scroll Reveal */}
      <section id="scroll-reveal" style={{ padding: '6rem 6rem', background: 'white' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: '800', textAlign: 'center', marginBottom: '1rem' }}>1. Scroll Reveal</h2>
        <p style={{ fontSize: '1.125rem', color: '#666', textAlign: 'center', marginBottom: '3rem' }}>
          Texto que se revela palabra por palabra al hacer scroll
        </p>
        <ScrollReveal />
      </section>

      {/* 2. Counter Animation */}
      <section style={{ padding: '6rem 6rem', background: '#f9fafb' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: '800', textAlign: 'center', marginBottom: '1rem' }}>2. Counter Animation</h2>
        <p style={{ fontSize: '1.125rem', color: '#666', textAlign: 'center', marginBottom: '3rem' }}>
          Contador animado que llega al objetivo
        </p>
        <CounterDemo />
      </section>

      {/* 3. Steps */}
      <section id="steps" style={{ padding: '6rem 6rem', background: 'white' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: '800', textAlign: 'center', marginBottom: '1rem' }}>3. Steps Sequence</h2>
        <p style={{ fontSize: '1.125rem', color: '#666', textAlign: 'center', marginBottom: '3rem' }}>
          Tarjetas de pasos que aparecen en secuencia
        </p>
        <StepsDemo />
      </section>

      {/* 4. Services */}
      <section id="services" style={{ padding: '6rem 6rem', background: 'white' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: '800', textAlign: 'center', marginBottom: '1rem' }}>4. Services Cards</h2>
        <p style={{ fontSize: '1.125rem', color: '#666', textAlign: 'center', marginBottom: '3rem' }}>
          Tarjetas con efecto hover y orbes flotantes
        </p>
        <ServicesDemo />
      </section>

      {/* 5. Marquee */}
      <section id="marquee" style={{ padding: '4rem 6rem' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: '800', textAlign: 'center', marginBottom: '1rem' }}>5. Marquee Loop</h2>
        <p style={{ fontSize: '1.125rem', color: '#666', textAlign: 'center', marginBottom: '3rem' }}>
          Testimonios que se mueven infinitamente
        </p>
        <MarqueeDemo />
      </section>

      {/* 6. Floating Orbs (already in hero) */}
      
      {/* Prompts */}
      <section id="prompts" style={{ padding: '6rem 6rem', background: 'white' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: '800', textAlign: 'center', marginBottom: '1rem' }}>Prompt Library</h2>
        <p style={{ fontSize: '1.125rem', color: '#666', textAlign: 'center', marginBottom: '3rem', maxWidth: '600px', margin: '1rem auto' }}>
          Copia y pega estos prompts en tu IA favorita para crear efectos similares.
        </p>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto',
        }}>
          {['Scroll Reveal: Crea texto revelando palabra por palabra al hacer scroll.', 'Counter: Animar contador de 0 a X con requestAnimationFrame.', 'Steps: Tarjetas de pasos con animación escalando desde 0.9.', 'Services Cards: Tarjetas con hover elevación y orbes flotantes.', 'Marquee: Marquee infinito con testimonios moviéndose.', 'Floating Orbs: Orbes flotantes con blur alto detrás.'].map((prompt, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
              style={{
                padding: '2rem',
                background: 'white',
                borderRadius: '16px',
                border: '1px solid #e5e7eb',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              }}
            >
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem' }}>{prompt.split(':')[0]}</h3>
              <p style={{ color: '#6b7280', marginBottom: '1rem' }}>{prompt.split(':')[1]}</p>
              <div style={{
                background: '#f3f4f6',
                borderRadius: '8px',
                padding: '1rem',
                fontSize: '0.875rem',
                color: '#374151',
                fontFamily: 'monospace',
                overflowX: 'auto',
              }}>
                <code>framer-motion + {prompt.split(':')[0].toLowerCase()}</code>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '4rem 6rem', background: '#1f2937', color: 'white' }}>
        <div style={{ textAlign: 'center' }}>
          <h3 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '1rem', background: 'linear-gradient(135deg, #21b2c6 0%, #8242f5 58%, #d96cff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            AI Web Designer
          </h3>
          <p style={{ color: '#9ca3af', marginBottom: '2rem', maxWidth: '400px', margin: '1rem auto' }}>
            Una colección de efectos UI/Web inspirada en los mejores sitios modernos.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
            <a href="https://github.com" style={{ color: '#9ca3af', textDecoration: 'none' }}>GitHub</a>
            <a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Twitter</a>
            <a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Blog</a>
          </div>
          <p style={{ color: '#4b5563', fontSize: '0.875rem', marginTop: '2rem' }}>
            © 2024 AI Web Designer. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
