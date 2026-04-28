import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Demo.css';

export default function ScrollReveal() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const textY = useTransform(scrollYProgress, [0, 0.5], [80, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  const words = "91% de las empresas que confían en IA reportan resultados excepcionales";

  return (
    <div ref={containerRef} className="scroll-reveal-container">
      <div className="scroll-reveal-card">
        <div className="scroll-reveal-content">
          {words.split(' ').map((word, i) => (
            <motion.span
              key={i}
              style={{ y: textY, opacity }}
              className="scroll-word"
            >
              {word}
              {i < words.split(' ').length - 1 ? ' ' : ''}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
}
