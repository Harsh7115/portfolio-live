import { motion } from 'framer-motion'
import { about, skills } from '../data/portfolioData'

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: '5rem 1.5rem',
        maxWidth: '1100px',
        margin: '0 auto',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{ marginBottom: '3rem' }}
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
          About
        </p>
        <h2
          style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            fontWeight: 600,
            letterSpacing: '-0.025em',
            color: 'var(--text)',
          }}
        >
          A bit about me
        </h2>
      </motion.div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '3rem',
          alignItems: 'start',
        }}
      >
        {/* Left: main paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p
            style={{
              fontSize: '1.0625rem',
              lineHeight: 1.75,
              color: 'var(--text)',
              marginBottom: '1.5rem',
            }}
          >
            {about.main}
          </p>
        </motion.div>

        {/* Right: beyond tech + skill categories */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p
            style={{
              fontSize: '0.875rem',
              fontWeight: 600,
              color: 'var(--text-muted)',
              marginBottom: '0.5rem',
              letterSpacing: '0.02em',
            }}
          >
            Beyond Tech
          </p>
          <p
            style={{
              fontSize: '0.875rem',
              lineHeight: 1.65,
              color: 'var(--text-muted)',
              marginBottom: '2rem',
            }}
          >
            {about.beyond}
          </p>

          <p
            style={{
              fontSize: '0.7rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              marginBottom: '0.75rem',
            }}
          >
            Areas of Expertise
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
            {skills.map((s) => (
              <span
                key={s.cat}
                style={{
                  fontSize: '0.8125rem',
                  color: 'var(--text-muted)',
                }}
              >
                {s.cat}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
