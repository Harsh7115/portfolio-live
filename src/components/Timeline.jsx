import { motion } from 'framer-motion'
import { timeline } from '../data/portfolioData'

function TimelineEntry({ entry, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      style={{ paddingBottom: 12, position: 'relative' }}
    >
      <div
        style={{
          background: 'rgba(8,8,10,0.95)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 12, padding: '24px 28px',
          position: 'relative', overflow: 'hidden',
          transition: 'border-color 0.3s',
        }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(99,102,241,0.35)' }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)' }}
      >
        {/* Accent line for current role */}
        {index === 0 && (
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
            background: 'linear-gradient(90deg, #4338ca 0%, #818cf8 40%, transparent 80%)',
          }} />
        )}

        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8, marginBottom: 10 }}>
          <div>
            <div style={{
              fontSize: 'clamp(0.95rem, 1.5vw, 1.12rem)',
              fontWeight: 700, color: '#f8fafc',
              letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: 4,
            }}>
              {entry.role}
            </div>
            <div style={{
              fontSize: '0.72rem', fontFamily: 'monospace',
              color: '#71717a', letterSpacing: '0.04em',
            }}>
              {entry.org}
            </div>
          </div>
          <span style={{
            fontSize: '0.6rem', fontFamily: 'monospace', letterSpacing: '0.1em',
            color: index === 0 ? '#818cf8' : '#3f3f46',
            background: index === 0 ? 'rgba(99,102,241,0.1)' : 'transparent',
            border: `1px solid ${index === 0 ? 'rgba(99,102,241,0.3)' : 'rgba(255,255,255,0.07)'}`,
            padding: '3px 10px', borderRadius: 3, whiteSpace: 'nowrap',
          }}>
            {entry.dates}
          </span>
        </div>
        <p style={{ fontSize: '0.86rem', color: '#a1a1aa', lineHeight: 1.75, fontWeight: 300 }}>
          {entry.desc}
        </p>
      </div>

      {/* Connector line */}
      {index < timeline.length - 1 && (
        <div style={{
          width: 1, height: 12, margin: '0 auto',
          background: 'rgba(255,255,255,0.06)',
        }} />
      )}
    </motion.div>
  )
}

export default function Timeline() {
  return (
    <section id="experience" style={{
      padding: '9rem 2rem',
      maxWidth: 900, margin: '0 auto',
      position: 'relative', zIndex: 10,
    }}>
      <div className="section-divider" style={{ margin: '0 0 7rem', maxWidth: '100%' }} />

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{ marginBottom: 48 }}
      >
        <span style={{
          fontSize: '0.58rem', fontFamily: 'monospace', color: '#3f3f46',
          letterSpacing: '0.22em', textTransform: 'uppercase',
        }}>Experience</span>
        <div style={{
          marginTop: 12,
          fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
          fontWeight: 800, color: '#f8fafc',
          letterSpacing: '-0.035em', lineHeight: 1.08,
        }}>Where I've worked.</div>
      </motion.div>

      <div>
        {timeline.map((entry, i) => (
          <TimelineEntry key={i} entry={entry} index={i} />
        ))}
      </div>
    </section>
  )
}
