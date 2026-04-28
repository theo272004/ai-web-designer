import React, { useState } from 'react'
import { effects } from './data/effects'
import { EffectCard } from './components/EffectCard'
import { Modal } from './components/Modal'

const SYSTEM_PROMPT = `Actúa como un Ingeniero de UI Senior especializado en animaciones de alta gama y micro-interacciones. 
A partir de ahora, todo el código que generes debe seguir estas reglas:
1. Usa curvas de Bezier personalizadas (ej. cubic-bezier(0.22, 1, 0.36, 1)) para una sensación premium.
2. Implementa staggered animations (retrasos escalonados) para listas y grupos de elementos.
3. Asegura que todas las animaciones sean accesibles (respeta prefers-reduced-motion).
4. El código debe ser modular, limpio y listo para producción.
5. No uses placeholders; utiliza contenido realista o datos de ejemplo coherentes.`

export default function App() {
  const [selectedEffect, setSelectedEffect] = useState(null)
  const [systemPromptCopied, setSystemPromptCopied] = useState(false)
  const homeHref = import.meta.env.BASE_URL

  const copySystemPrompt = () => {
    navigator.clipboard.writeText(SYSTEM_PROMPT)
    setSystemPromptCopied(true)
    setTimeout(() => setSystemPromptCopied(false), 2000)
  }

  return (
    <div className="site-shell">
      <nav className="nav">
        <div className="nav-inner">
          <a href={homeHref} className="logo">
            <div className="logo-icon">AI</div>
            <span>Web Designer</span>
          </a>
          <button className="btn btn-primary" onClick={copySystemPrompt}>
            {systemPromptCopied ? '¡Copiado!' : 'Copiar System Prompt'}
          </button>
        </div>
      </nav>

      <header className="hero">
        <div className="hero-bg" />
        <div className="hero-grid" />
        <div className="hero-content">
          <div className="hero-badge">
            <div className="pulse" />
            <span>Biblioteca de Prompts UI/UX v2.0</span>
          </div>
          <h1>Efectos que la IA puede <span>recrear</span> con precisión.</h1>
          <p>
            Prompts estructurados con física real y triggers técnicos. 
            Copia el prompt, pégalo en tu IA favorita y obtén el código exacto de la previsualización.
          </p>
          <div className="hero-actions">
             <button className="btn btn-secondary" onClick={() => window.scrollTo({ top: 600, behavior: 'smooth' })}>
               Explorar Efectos
             </button>
          </div>
        </div>
      </header>

      <main className="gallery">
        <div className="gallery-grid">
          {effects.map((effect) => (
            <EffectCard 
              key={effect.slug} 
              effect={effect} 
              onClick={() => setSelectedEffect(effect)} 
            />
          ))}
        </div>
      </main>

      {selectedEffect && (
        <Modal 
          effect={selectedEffect} 
          onClose={() => setSelectedEffect(null)} 
        />
      )}

      {systemPromptCopied && (
        <div className="copy-toast" style={{ background: 'var(--accent)' }}>
          System Prompt copiado
        </div>
      )}

      <footer style={{ padding: '80px 24px', textAlign: 'center', borderTop: '1px solid var(--border-color)', marginTop: '80px' }}>
        <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>
          &copy; 2026 AI Web Designer Gallery. Inspirado en MotionSites.
        </p>
      </footer>
    </div>
  )
}
