import { effects } from './data/effects'
import { EffectCard } from './components/EffectCard'

export default function App() {
  return (
    <div className="site-shell">
      <div className="ambient ambient-left" />
      <div className="ambient ambient-right" />

      <header className="hero">
        <div className="eyebrow">AI Web Designer</div>
        <h1>
          Biblioteca de <span>efectos web</span> recreados con precisión.
        </h1>
        <p>
          Tres efectos inspirados en una landing real, convertidos en una galería
          genérica con demos vivas, descripciones claras y prompts listos para IA.
        </p>
      </header>

      <main className="gallery">
        {effects.map((effect) => (
          <EffectCard key={effect.slug} effect={effect} />
        ))}
      </main>
    </div>
  )
}
