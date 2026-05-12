import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { systems } from '../data/portfolioData'

function BentoCard({ item, index, gridStyle }) {
  const [hovered, setHovered] = useState(false)
  const featured = index === 0

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{
        ...gridStyle,
        position: 'relative',
        borderRadius: 16,
        overflow: 'hidden',
        cursor: 'default',
      }}
    >
      {/* Glow border wrapper */}
      <div
        className={hovered ? 'glow-border-active' : ''}
        style={{
          position: 'absolute', inset: 0,
          borderRadius: 16,
          border: `1px solid ${hovered ? 'rgba(99,102,241,0.4)' : featured ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.06)'}`,
          transition: 'border-color 0.4s ease',
          zIndex: 0,
        }}
      />

      {/* Card background */}
      <div style={{
        position: 'absolute', inset: '1px',
        borderRadius: 15,
        background: featured ? 'rgba(11,11,14,0.97)' : 'rgba(9,9,11,0.95)',
        zIndex: 1,
      }} />

      {/* Dot-grid texture */}
      <div style={{
        position: 'absolute', inset: '1px', borderRadius: 15,
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.025) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
        opacity: hovered ? 1 : 0.4,
        transition: 'opacity 0.4s',
        zIndex: 2, pointerEvents: 'none',
      }} />

      {/* Hover glow beacon */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'absolute', top: -60, left: -60,
              width: 260, height: 260,
              background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)',
              pointerEvents: 'none', zIndex: 2,
            }}
          />
        )}
      </AnimatePresence>

      {/* Sweep top line */}
      <motion.div
        style={{
          position: 'absolute', top: '1px', left: '1px', right: '1px', height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.8) 40%, rgba(148,100,255,0.5) 60%, transparent)',
          transformOrigin: 'left center',
          zIndex: 3, borderRadius: '15px 15px 0 0',
        }}
        animate={{
          scaleX: hovered ? 1 : featured ? 0.25 : 0,
          opacity: hovered ? 1 : featured ? 0.45 : 0,
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 4,
        height: '100%', display: 'flex', flexDirection: 'column',
        padding: featured ? '28px 32px' : '22px 26px',
      }}>

        {/* Meta row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: featured ? 28 : 18 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{
              fontSize: '0.55rem', fontFamily: 'monospace', letterSpacing: '0.1em',
              color: hovered ? '#818cf8' : '#3f3f46',
              transition: 'color 0.3s',
            }}>
              {String(index + 1).padStart(2, '0')}
            </span>
            <span style={{
              fontSize: '0.55rem', fontFamily: 'monospace', letterSpacing: '0.12em',
              textTransform: 'uppercase', color: '#6366f1',
              background: 'rgba(99,102,241,0.09)',
              border: '1px solid rgba(99,102,241,0.22)',
              padding: '2px 8px', borderRadius: 3,
            }}>
              {item.label}
            </span>
          </div>
          <motion.div
            animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : 6 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowUpRight size={14} style={{ color: '#6366f1' }} />
          </motion.div>
        </div>

        {/* Title */}
        <div style={{
          fontSize: featured ? 'clamp(1.7rem, 3vw, 2.6rem)' : 'clamp(1.2rem, 2vw, 1.7rem)',
          fontWeight: 800,
          color: hovered ? '#f4f4f5' : '#e4e4e7',
          letterSpacing: '-0.03em',
          lineHeight: 1.05,
          marginBottom: 6,
          transition: 'color 0.3s',
        }}>
          {item.title}
        </div>

        <div style={{
          fontSize: '0.68rem', fontFamily: 'monospace',
          color: '#52525b', letterSpacing: '0.04em',
          marginBottom: featured ? 20 : 14,
        }}>
          {item.subtitle}
        </div>

        {/* Dates */}
        <div style={{
          fontSize: '0.6rem', fontFamily: 'monospace',
          color: '#3f3f46', letterSpacing: '0.06em',
          marginBottom: featured ? 18 : 14,
        }}>
          {item.dates}
        </div>

        {/* Description */}
        <p style={{
          color: '#71717a',
          fontSize: featured ? 'clamp(0.82rem, 1vw, 0.9rem)' : '0.78rem',
          lineHeight: 1.75,
          fontWeight: 300,
          flexGrow: 1,
          marginBottom: 18,
        }}>
          {item.desc}
        </p>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginTop: 'auto' }}>
          {item.tags.map(tag => (
            <span key={tag} style={{
              fontSize: '0.58rem', fontFamily: 'monospace',
              color: hovered ? '#6366f1' : '#52525b',
              background: hovered ? 'rgba(99,102,241,0.08)' : 'rgba(255,255,255,0.03)',
              border: `1px solid ${hovered ? 'rgba(99,102,241,0.25)' : 'rgba(255,255,255,0.07)'}`,
              padding: '3px 7px', borderRadius: 3,
              letterSpacing: '0.04em',
              transition: 'all 0.3s',
            }}>
              {tag}
            </span>
          ))}
        </div>

      </div>
    </motion.article>
  )
}

export default function SelectedWorkBento() {
  const gridStyles = [
    { gridColumn: 'span 2', gridRow: 'span 2', minHeight: 360 },
    { gridColumn: 'span 1', minHeight: 170 },
    { gridColumn: 'span 1', minHeight: 170 },
    { gridColumn: 'span 3', minHeight: 200 },
  ]

  return (
    <section id="work" style={{ padding: '8rem 2.5rem', maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 10 }}>
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
        }}>
          Selected Systems
        </span>
        <div style={{
          marginTop: 14,
          fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
          fontWeight: 800, color: '#e4e4e7',
          letterSpacing: '-0.03em', lineHeight: 1.1,
        }}>
          Work that shipped.
        </div>
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridAutoRows: 'auto',
        gap: 10,
      }}>
        {systems.map((item, i) => (
          <BentoCard
            key={item.id}
            item={item}
            index={i}
            gridStyle={gridStyles[i] || {}}
          />
        ))}
      </div>

      <style>{`
        @media (max-width: 767px) {
          #work .bento-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
