import { motion } from 'framer-motion'
import { BrainCircuit, Code2, Settings, Terminal } from 'lucide-react'
import { signals } from '../data/portfolioData'

const icons = [BrainCircuit, Code2, Settings, Terminal]

export default function SignalStrip() {
  return (
    <section
      id="work"
      style={{
        padding: '5rem 1.5rem 3rem',
        maxWidth: '1100px',
        margin: '0 auto',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p
          style={{
            fontSize: '0.7rem',
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            marginBottom: '0.5rem',
          }}
        >
          Current Signal
        </p>
        <h2
          style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            fontWeight: 600,
            letterSpacing: '-0.025em',
            color: 'var(--text)',
            marginBottom: '2.5rem',
          }}
        >
          What I work on
        </h2>
      </motion.div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1rem',
        }}
      >
        {signals.map((signal, i) => {
          const Icon = icons[i]
          return (
            <motion.div
              key={signal.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '0.875rem',
                padding: '1.5rem',
                cursor: 'default',
                transition: 'border-color 0.2s, transform 0.2s',
              }}
              whileHover={{ y: -3 }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(201,168,76,0.2)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)'
              }}
            >
              <div
                style={{
                  width: '2.25rem',
                  height: '2.25rem',
                  borderRadius: '0.5rem',
                  background: 'var(--accent-dim)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem',
                }}
              >
                <Icon size={18} color="var(--accent)" />
              </div>
              <h3
                style={{
                  fontSize: '0.9375rem',
                  fontWeight: 600,
                  color: 'var(--text)',
                  marginBottom: '0.5rem',
                }}
              >
                {signal.title}
              </h3>
              <p
                style={{
                  fontSize: '0.8125rem',
                  lineHeight: 1.6,
                  color: 'var(--text-muted)',
                }}
              >
                {signal.body}
              </p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
