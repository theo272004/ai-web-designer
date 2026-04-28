import React, { useState } from 'react'

export function Modal({ effect, onClose }) {
  const [stack, setStack] = useState('react_tailwind')
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    const text = effect.prompts[stack]
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const formatPrompt = (text) => {
    return text.split('\n\n').map((block, i) => {
      if (block.includes(':')) {
        const [title, content] = block.split(': ')
        return (
          <div key={i} style={{ marginBottom: '12px' }}>
            <b style={{ color: 'var(--accent-light)' }}>{title}:</b> {content}
          </div>
        )
      }
      return <p key={i} style={{ marginBottom: '12px' }}>{block}</p>
    })
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <header className="modal-header">
          <div>
            <span className="effect-category">{effect.category}</span>
            <h2 className="modal-title">{effect.name}</h2>
          </div>
          <button className="btn-close" onClick={onClose}>&times;</button>
        </header>
        
        <div className="modal-body">
          <div className="modal-preview-area">
             <div className="demo-container">
                <effect.Demo />
             </div>
          </div>
          
          <aside className="modal-sidebar">
            <div className="tech-selector">
              <div 
                className={`tech-tab ${stack === 'react_tailwind' ? 'active' : ''}`}
                onClick={() => setStack('react_tailwind')}
              >
                React + Tailwind
              </div>
              <div 
                className={`tech-tab ${stack === 'vanilla_css' ? 'active' : ''}`}
                onClick={() => setStack('vanilla_css')}
              >
                Vanilla CSS
              </div>
            </div>
            
            <div className="prompt-container">
              <div className="prompt-header">
                <span style={{ fontSize: '11px', fontWeight: 'bold', color: 'var(--text-muted)' }}>
                  PROMPT DEL EFECTO
                </span>
                <button className="btn btn-primary" style={{ padding: '6px 12px', fontSize: '12px' }} onClick={handleCopy}>
                  {copied ? '¡Copiado!' : 'Copiar Prompt'}
                </button>
              </div>
              <div className="prompt-content">
                {formatPrompt(effect.prompts[stack])}
              </div>
            </div>
            
            <div className="alert-box" style={{ padding: '16px', borderRadius: '12px', background: 'rgba(99, 102, 241, 0.05)', border: '1px solid rgba(99, 102, 241, 0.1)' }}>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                <b>Tip:</b> Este prompt incluye la física exacta y triggers para que la IA recree el efecto al 100% sin alucinaciones.
              </p>
            </div>
          </aside>
        </div>
      </div>
      {copied && <div className="copy-toast">Prompt copiado al portapapeles</div>}
    </div>
  )
}
