import { useState } from 'react'
import { useReveal } from './useReveal'

const statementLines = [
  'La narrativa entra',
  'por capas y ritmo',
  'para hacer que cada',
  'línea pese más.',
]

const orbitSteps = [
  { number: '01', title: 'Map', text: 'Ordena la información central antes de mover nada.' },
  { number: '02', title: 'Shape', text: 'Agrupa bloques con distancia, contraste y jerarquía.' },
  { number: '03', title: 'Motion', text: 'Introduce stagger y deriva mínima para dar vida.' },
  { number: '04', title: 'Refine', text: 'Pulsa timing, bordes y respiración hasta que se sienta exacto.' },
]

const servicePanels = [
  { title: 'Glass Layer', note: 'Base editorial' },
  { title: 'Depth Stack', note: 'Capas y offset' },
  { title: 'Focus Hover', note: 'Elevación activa' },
]

export function StaggeredStatementDemo() {
  const [ref, visible] = useReveal()

  return (
    <section ref={ref} className="demo-frame statement-demo">
      <div className="demo-kicker">Scroll reveal</div>
      <div className="statement-lines">
        {statementLines.map((line, index) => (
          <div
            key={line}
            className={`statement-line ${visible ? 'is-visible' : ''}`}
            style={{ transitionDelay: `${index * 110}ms` }}
          >
            {line}
          </div>
        ))}
      </div>
    </section>
  )
}

export function ProcessOrbitDemo() {
  const [ref, visible] = useReveal()

  return (
    <section ref={ref} className="demo-frame orbit-demo">
      <div className="orbit-core">
        <span>Core</span>
      </div>
      {orbitSteps.map((step, index) => (
        <article
          key={step.number}
          className={`orbit-step orbit-step-${index + 1} ${visible ? 'is-visible' : ''}`}
          style={{ transitionDelay: `${index * 120}ms` }}
        >
          <div className="orbit-number">{step.number}</div>
          <h3>{step.title}</h3>
          <p>{step.text}</p>
        </article>
      ))}
    </section>
  )
}

export function ServicesLayerDemo() {
  const [ref, visible] = useReveal()
  const [active, setActive] = useState(1)

  return (
    <section ref={ref} className="demo-frame services-demo">
      {servicePanels.map((panel, index) => {
        const panelIndex = index + 1
        const isActive = active === panelIndex

        return (
          <article
            key={panel.title}
            className={[
              'service-panel',
              `service-panel-${panelIndex}`,
              visible ? 'is-visible' : '',
              isActive ? 'is-active' : 'is-dimmed',
            ].join(' ')}
            style={{ transitionDelay: `${index * 110}ms` }}
            onMouseEnter={() => setActive(panelIndex)}
            onFocus={() => setActive(panelIndex)}
            tabIndex={0}
          >
            <span>{panel.note}</span>
            <h3>{panel.title}</h3>
          </article>
        )
      })}
    </section>
  )
}
