import { useState } from 'react'

export function EffectCard({ effect }) {
  const [copied, setCopied] = useState(false)
  const Demo = effect.Demo

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(effect.prompt)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  return (
    <article className="effect-card">
      <div className="effect-copy">
        <div className="effect-meta">
          <span className="effect-label">Effect</span>
          <h2>{effect.name}</h2>
        </div>
        <p className="effect-description">{effect.description}</p>
        <div className="prompt-panel">
          <div className="prompt-head">
            <span>Prompt en español</span>
            <button type="button" className="copy-button" onClick={handleCopy}>
              {copied ? 'Copiado' : 'Copiar prompt'}
            </button>
          </div>
          <p>{effect.prompt}</p>
        </div>
      </div>

      <div className="effect-preview">
        <Demo />
      </div>
    </article>
  )
}
