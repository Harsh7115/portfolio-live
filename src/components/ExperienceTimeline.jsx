import { motion } from 'framer-motion'
import { experience } from '../data/portfolioData'

export default function ExperienceTimeline() {
  return (
    <section
      id="experience"
      style={{
        padding: '5rem 1.5rem',
        maxWidth: '800px',
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
          Experience
        </p>
        <h2
          style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            fontWeight: 600,
            letterSpacing: '-0.025em',
            color: 'var(--text)',
          }}
        >
          Where I've worked
        </h2>
      </motion.div>

      <div style={{ position: 'relative', paddingLeft: '2rem' }}>
        {/* Vertical line */}
        <div
          style={{
            position: 'absolute',
            left: '7px',
            top: '8px',
            bottom: '8px',
            width: '1px',
            background: 'rgba(255,255,255,0.08)',
          }}
        />

        {experience.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            style={{
              position: 'relative',
              marginBottom: i < experience.length - 1 ? '3rem' : 0,
            }}
          >
            {/* Timeline dot */}
            <div
              style={{
                position: 'absolute',
                left: '-1.875rem',
                top: '0.35rem',
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: 'var(--accent)',
                border: '2px solid var(--bg)',
                boxShadow: '0 0 0 2px rgba(201,168,76,0.3)',
              }}
            />

            {/* Role */}
            <h3
              style={{
                fontSize: '1rem',
                fontWeight: 600,
                color: 'var(--text)',
                marginBottom: '0.25rem',
              }}
            >
              {item.role}
            </h3>

            {/* Org + Dates */}
            <p
              style={{
                fontSize: '0.8125rem',
                color: 'var(--text-muted)',
                marginBottom: '0.875rem',
              }}
            >
              {item.org} &middot; {item.dates}
            </p>

            {/* Bullets */}
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
              }}
            >
              {item.bullets.map((bullet, j) => (
                <li
                  key={j}
                  style={{
                    display: 'flex',
                    gap: '0.6rem',
                    fontSize: '0.8125rem',
                    lineHeight: 1.65,
                    color: 'var(--text-muted)',
                  }}
                >
                  <span
                    style={{
                      flexShrink: 0,
                      marginTop: '0.55rem',
                      width: '4px',
                      height: '4px',
                      borderRadius: '50%',
                      background: 'rgba(201,168,76,0.5)',
                    }}
                  />
                  {bullet}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
