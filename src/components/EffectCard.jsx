import React from 'react'

export function EffectCard({ effect, onClick }) {
  return (
    <article className="effect-card" onClick={onClick}>
      <div className="effect-preview-card">
        <div className="demo-container" style={{ transform: 'scale(0.6)' }}>
          <effect.Demo />
        </div>
      </div>
      <div className="effect-info">
        <span className="effect-category">{effect.category}</span>
        <h3 className="effect-title">{effect.name}</h3>
        <p className="effect-desc">{effect.description}</p>
        <button className="btn btn-secondary" style={{ width: '100%', marginTop: 'auto' }}>
          Ver Prompt & Demo
        </button>
      </div>
    </article>
  )
}
