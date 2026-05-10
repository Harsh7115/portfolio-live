import { motion } from 'framer-motion'
import { skills } from '../data/portfolioData'

export default function Skills() {
  return (
    <section
      style={{
        padding: '2rem 1.5rem 5rem',
        maxWidth: '1100px',
        margin: '0 auto',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{ marginBottom: '2rem' }}
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
          Toolkit
        </p>
      </motion.div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.125rem' }}>
        {skills.map((row, i) => (
          <motion.div
            key={row.cat}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <span
              style={{
                fontSize: '0.7rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'rgba(201,168,76,0.65)',
                minWidth: '120px',
                flexShrink: 0,
              }}
            >
              {row.cat}
            </span>
            {row.items.map((item) => (
              <span
                key={item}
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 400,
                  color: 'rgba(255,255,255,0.6)',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '9999px',
                  padding: '0.22rem 0.65rem',
                }}
              >
                {item}
              </span>
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
