import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { systems } from '../data/portfolioData'

function BentoCard({ item, index, style }) {
  const [hovered, setHovered] = useState(false)
  const featured = item.span === 'featured'
  const wide = item.span === 'wide'

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{
        ...style,
        position: 'relative',
        borderRadius: 14,
        overflow: 'hidden',
        cursor: 'default',
      }}
    >
      {/* Rotating glow border wrapper */}
      <div
        className={hovered ? 'glow-ring' : ''}
        style={{
          position: 'absolute', inset: 0, borderRadius: 14,
          border: `1px solid ${hovered
            ? 'rgba(99,102,241,0.45)'
            : featured
              ? 'rgba(255,255,255,0.12)'
              : 'rgba(255,255,255,0.07)'}`,
          transition: 'border-color 0.4s',
          zIndex: 0,
        }}
      />

      {/* Card fill */}
      <div style={{
        position: 'absolute', inset: '1px', borderRadius: 13,
        background: featured ? 'rgba(10,10,13,0.98)' : 'rgba(8,8,10,0.97)',
        zIndex: 1,
      }} />

      {/* Dot-grid texture */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: '1px', borderRadius: 13,
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.022) 1px, transparent 1px)',
        backgroundSize: '26px 26px',
        opacity: hovered ? 1 : 0.45,
        transition: 'opacity 0.4s',
        zIndex: 2, pointerEvents: 'none',
      }} />

      {/* Hover glow blob */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            aria-hidden="true"
            style={{
              position: 'absolute', top: -80, left: -80,
              width: 300, height: 300,
              background: 'radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 68%)',
              pointerEvents: 'none', zIndex: 2,
            }}
          />
        )}
      </AnimatePresence>

      {/* Top sweep line */}
      <motion.div
        aria-hidden="true"
        style={{
          position: 'absolute', top: '1px', left: '1px', right: '1px', height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.85) 35%, rgba(196,181,253,0.5) 55%, transparent)',
          transformOrigin: 'left center',
          zIndex: 3,
        }}
        animate={{
          scaleX: hovered ? 1 : featured ? 0.3 : 0,
          opacity: hovered ? 1 : featured ? 0.5 : 0,
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 4,
        height: '100%',
        display: 'flex', flexDirection: wide ? 'row' : 'column',
        padding: featured ? '26px 30px' : wide ? '22px 28px' : '20px 24px',
        gap: wide ? 32 : 0,
      }}>

        {/* Left / Top section */}
        <div style={{ flex: wide ? '0 0 auto' : undefined }}>
          {/* Meta */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            marginBottom: featured ? 24 : 16,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{
                fontSize: '0.55rem', fontFamily: 'monospace', letterSpacing: '0.12em',
                color: hovered ? '#818cf8' : '#3f3f46', transition: 'color 0.3s',
              }}>
                {String(index + 1).padStart(2, '0')}
              </span>
              <span style={{
                fontSize: '0.55rem', fontFamily: 'monospace', letterSpacing: '0.12em',
                textTransform: 'uppercase', color: '#6366f1',
                background: 'rgba(99,102,241,0.1)',
                border: '1px solid rgba(99,102,241,0.25)',
                padding: '2px 8px', borderRadius: 3,
              }}>
                {item.label}
              </span>
            </div>
            <motion.div
              animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : 5 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowUpRight size={13} style={{ color: '#6366f1' }} />
            </motion.div>
          </div>

          {/* Title */}
          <div style={{
            fontSize: featured ? 'clamp(1.6rem, 3vw, 2.5rem)' : wide ? 'clamp(1.3rem, 2vw, 1.8rem)' : 'clamp(1.1rem, 1.8vw, 1.5rem)',
            fontWeight: 800,
            color: hovered ? '#ffffff' : '#f4f4f5',
            letterSpacing: '-0.03em', lineHeight: 1.08,
            marginBottom: 6, transition: 'color 0.3s',
          }}>
            {item.title}
          </div>
          <div style={{
            fontSize: '0.68rem', fontFamily: 'monospace',
            color: '#71717a', letterSpacing: '0.04em',
            marginBottom: featured ? 16 : 12,
          }}>
            {item.subtitle}
          </div>
          <div style={{
            fontSize: '0.58rem', fontFamily: 'monospace',
            color: '#3f3f46', letterSpacing: '0.06em',
            marginBottom: wide ? 0 : featured ? 18 : 14,
          }}>
            {item.dates}
          </div>
        </div>

        {/* Right / Bottom section */}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'flex-end' }}>
          <p style={{
            color: '#a1a1aa',
            fontSize: featured ? 'clamp(0.82rem, 1vw, 0.92rem)' : '0.8rem',
            lineHeight: 1.75, fontWeight: 300,
            marginBottom: 14,
            flex: 1,
          }}>
            {item.desc}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
            {item.tags.map(tag => (
              <span key={tag} style={{
                fontSize: '0.58rem', fontFamily: 'monospace',
                color: hovered ? '#818cf8' : '#71717a',
                background: hovered ? 'rgba(99,102,241,0.09)' : 'rgba(255,255,255,0.03)',
                border: `1px solid ${hovered ? 'rgba(99,102,241,0.3)' : 'rgba(255,255,255,0.08)'}`,
                padding: '3px 7px', borderRadius: 3, letterSpacing: '0.04em',
                transition: 'all 0.3s',
              }}>
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </motion.article>
  )
}

export default function SelectedSystems() {
  const [a, b, c, d, e] = systems

  return (
    <section id="work" style={{
      padding: '9rem 2rem',
      maxWidth: 1160, margin: '0 auto',
      position: 'relative', zIndex: 10,
    }}>
      <div className="section-divider" style={{ margin: '0 0 7rem' }} />

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{ marginBottom: 52 }}
      >
        <span style={{
          fontSize: '0.58rem', fontFamily: 'monospace', color: '#3f3f46',
          letterSpacing: '0.22em', textTransform: 'uppercase',
        }}>Selected Systems</span>
        <div style={{
          marginTop: 12,
          fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
          fontWeight: 800, color: '#f8fafc',
          letterSpacing: '-0.035em', lineHeight: 1.08,
        }}>Work that shipped.</div>
        <p style={{
          marginTop: 12, maxWidth: 520,
          fontSize: '0.88rem', color: '#71717a',
          lineHeight: 1.7, fontWeight: 300,
        }}>
          A few systems and workflows across grounded AI, backend infrastructure, evaluation, and enterprise automation.
        </p>
      </motion.div>

      {/* Bento grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridTemplateRows: 'auto auto auto',
        gap: 10,
      }}>
        <BentoCard item={a} index={0} style={{ gridColumn: 'span 2', gridRow: 'span 2', minHeight: 380 }} />
        <BentoCard item={b} index={1} style={{ minHeight: 180 }} />
        <BentoCard item={c} index={2} style={{ minHeight: 180 }} />
        <BentoCard item={d} index={3} style={{ minHeight: 180 }} />
        <BentoCard item={e} index={4} style={{ gridColumn: 'span 2', minHeight: 180 }} />
      </div>

      <style>{`
        @media (max-width: 700px) {
          #work > div:last-child {
            grid-template-columns: 1fr !important;
          }
          #work > div:last-child > article {
            grid-column: span 1 !important;
            grid-row: span 1 !important;
            min-height: 220px !important;
          }
        }
      `}</style>
    </section>
  )
}
