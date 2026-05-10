import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import { projects } from '../data/portfolioData'

const filters = ['All', 'AI/RAG', 'Systems', 'Full-stack']

export default function Projects() {
  const [active, setActive] = useState('All')

  const filtered =
    active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <section
      id="projects"
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
          Projects
        </p>
        <h2
          style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            fontWeight: 600,
            letterSpacing: '-0.025em',
            color: 'var(--text)',
          }}
        >
          Things I've built
        </h2>
      </motion.div>

      {/* Filter tabs */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}
        style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2.5rem' }}
      >
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            style={{
              fontSize: '0.8rem',
              fontWeight: 500,
              padding: '0.35rem 1rem',
              borderRadius: '9999px',
              border: '1px solid',
              borderColor:
                active === f ? 'rgba(201,168,76,0.4)' : 'rgba(255,255,255,0.1)',
              background:
                active === f ? 'var(--accent-dim)' : 'transparent',
              color: active === f ? 'var(--accent)' : 'var(--text-muted)',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
          >
            {f}
          </button>
        ))}
      </motion.div>

      {/* Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1rem',
        }}
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '0.875rem',
                padding: '1.375rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.6rem',
                transition: 'border-color 0.2s',
                cursor: 'default',
              }}
              whileHover={{ y: -3 }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)'
              }}
            >
              {/* Year + links row */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span
                  style={{
                    fontSize: '0.7rem',
                    color: 'var(--text-muted)',
                    fontWeight: 500,
                  }}
                >
                  {project.year}
                </span>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      style={{
                        color: 'var(--text-muted)',
                        display: 'flex',
                        alignItems: 'center',
                        transition: 'color 0.2s',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text)')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                    >
                      <Github size={15} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Live site"
                      style={{
                        color: 'var(--text-muted)',
                        display: 'flex',
                        alignItems: 'center',
                        transition: 'color 0.2s',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                    >
                      <ExternalLink size={15} />
                    </a>
                  )}
                </div>
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: '0.9375rem',
                  fontWeight: 600,
                  color: 'var(--text)',
                  lineHeight: 1.3,
                  margin: 0,
                }}
              >
                {project.title}
              </h3>

              {/* Desc */}
              <p
                style={{
                  fontSize: '0.8rem',
                  lineHeight: 1.6,
                  color: 'var(--text-muted)',
                  margin: 0,
                  flexGrow: 1,
                }}
              >
                {project.desc}
              </p>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginTop: '0.25rem' }}>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: '0.68rem',
                      fontWeight: 500,
                      color: 'rgba(255,255,255,0.45)',
                      background: 'rgba(255,255,255,0.05)',
                      borderRadius: '9999px',
                      padding: '0.18rem 0.55rem',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  )
}
