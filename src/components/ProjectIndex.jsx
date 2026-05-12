import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { projects } from '../data/portfolioData'

const FILTERS = ['All', 'Systems', 'Full-stack']

function ProjectRow({ project, i }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -4, transition: { duration: 0.12 } }}
      transition={{ duration: 0.25, delay: i * 0.035 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{
        display: 'flex', alignItems: 'center',
        padding: '13px 16px',
        borderBottom: '1px solid rgba(255,255,255,0.04)',
        background: hovered ? 'rgba(99,102,241,0.05)' : 'transparent',
        borderRadius: hovered ? 8 : 0,
        transition: 'background 0.2s',
        position: 'relative',
        gap: 0,
      }}
    >
      {/* Left accent bar */}
      <motion.div
        style={{
          position: 'absolute', left: 0, top: '18%', bottom: '18%',
          width: 2, borderRadius: 2, background: '#6366f1',
        }}
        animate={{ opacity: hovered ? 1 : 0, scaleY: hovered ? 1 : 0.25 }}
        transition={{ duration: 0.18 }}
      />

      {/* Project name */}
      <span style={{
        flex: 1, paddingLeft: 14,
        color: hovered ? '#f8fafc' : '#d4d4d8',
        fontWeight: 500, fontSize: '0.85rem', letterSpacing: '-0.01em',
        fontFamily: 'monospace',
        transition: 'color 0.2s',
      }}>
        {project.title}
      </span>

      {/* Type */}
      <span className="proj-type" style={{
        width: 90, color: '#52525b', fontSize: '0.65rem',
        fontFamily: 'monospace', display: 'none',
      }}>
        {project.type}
      </span>

      {/* Stack */}
      <span className="proj-stack" style={{
        flex: 1, color: '#3f3f46', fontSize: '0.65rem',
        fontFamily: 'monospace', paddingRight: 12,
        overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
        display: 'none',
      }}>
        {project.stack}
      </span>

      {/* Year */}
      <span style={{
        width: 46, color: '#3f3f46', fontSize: '0.65rem',
        fontFamily: 'monospace',
      }}>
        {project.year}
      </span>

      {/* Link */}
      <div style={{ width: 26, display: 'flex', justifyContent: 'flex-end' }}>
        <a href={project.live || project.github} target="_blank" rel="noopener noreferrer"
          onClick={e => e.stopPropagation()}
          aria-label={`Open ${project.title}`}
          style={{ color: hovered ? '#818cf8' : '#27272a', transition: 'color 0.2s' }}
        >
          <ExternalLink size={12} />
        </a>
      </div>
    </motion.div>
  )
}

export default function ProjectIndex() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All'
    ? projects
    : projects.filter(p => p.category === active)

  return (
    <section id="projects" style={{
      padding: '9rem 2rem',
      maxWidth: 1000, margin: '0 auto',
      position: 'relative', zIndex: 10,
    }}>
      <div className="section-divider" style={{ margin: '0 0 7rem', maxWidth: '100%' }} />

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{ marginBottom: 36 }}
      >
        <span style={{
          fontSize: '0.58rem', fontFamily: 'monospace', color: '#3f3f46',
          letterSpacing: '0.22em', textTransform: 'uppercase',
        }}>Project Index</span>
        <div style={{
          marginTop: 12,
          fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
          fontWeight: 800, color: '#f8fafc',
          letterSpacing: '-0.035em', lineHeight: 1.08,
        }}>Things built.</div>
      </motion.div>

      {/* Filters */}
      <div style={{
        display: 'flex', gap: 0, marginBottom: 4,
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}>
        {FILTERS.map(f => (
          <button key={f} onClick={() => setActive(f)} style={{
            fontSize: '0.66rem', fontFamily: 'monospace', letterSpacing: '0.07em',
            padding: '8px 14px',
            color: active === f ? '#a5b4fc' : '#3f3f46',
            background: 'none', border: 'none', cursor: 'pointer',
            borderBottom: active === f ? '1px solid #6366f1' : '1px solid transparent',
            marginBottom: -1, transition: 'color 0.2s',
          }}>
            {f}
          </button>
        ))}
      </div>

      {/* Column headers */}
      <div style={{
        display: 'flex', alignItems: 'center',
        padding: '10px 16px',
        fontSize: '0.58rem', fontFamily: 'monospace',
        color: '#27272a', letterSpacing: '0.1em', textTransform: 'uppercase',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        marginBottom: 4,
      }}>
        <span style={{ flex: 1, paddingLeft: 14 }}>Project</span>
        <span className="proj-type" style={{ width: 90, display: 'none' }}>Type</span>
        <span className="proj-stack" style={{ flex: 1, display: 'none' }}>Stack</span>
        <span style={{ width: 46 }}>Year</span>
        <span style={{ width: 26 }} />
      </div>

      <style>{`
        @media (min-width: 600px) { .proj-type { display: block !important; } }
        @media (min-width: 860px) { .proj-stack { display: block !important; } }
      `}</style>

      {/* Table rows */}
      <AnimatePresence mode="popLayout">
        {filtered.map((p, i) => (
          <ProjectRow key={p.title} project={p} i={i} />
        ))}
      </AnimatePresence>
    </section>
  )
}
