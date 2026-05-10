import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, FileText, ArrowRight } from 'lucide-react'
import { hero } from '../data/portfolioData'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '6rem 1.5rem 4rem',
        overflow: 'hidden',
      }}
    >
      {/* Background orbs */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-15%',
          left: '-10%',
          width: '700px',
          height: '700px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(100,110,60,0.08) 0%, transparent 70%)',
          filter: 'blur(100px)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3rem',
          alignItems: 'center',
        }}
        className="lg:grid-cols-2-custom"
      >
        {/* Left column */}
        <div style={{ maxWidth: '640px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <span
              style={{
                display: 'inline-block',
                fontSize: '0.75rem',
                fontWeight: 500,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
                background: 'var(--accent-dim)',
                border: '1px solid rgba(201,168,76,0.2)',
                borderRadius: '9999px',
                padding: '0.3rem 0.85rem',
                marginBottom: '1.5rem',
              }}
            >
              CS Senior · University of Arizona
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              fontSize: 'clamp(2rem, 4.5vw, 3.25rem)',
              fontWeight: 600,
              lineHeight: 1.15,
              letterSpacing: '-0.03em',
              color: 'var(--text)',
              margin: '0 0 1.25rem',
            }}
          >
            {hero.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{
              fontSize: '1rem',
              lineHeight: 1.7,
              color: 'var(--text-muted)',
              marginBottom: '1.75rem',
            }}
          >
            {hero.sub}
          </motion.p>

          {/* Info pills */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}
          >
            {hero.pills.map((pill) => (
              <span
                key={pill}
                style={{
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '9999px',
                  padding: '0.3rem 0.75rem',
                }}
              >
                {pill}
              </span>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.42 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}
          >
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
              }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.875rem',
                fontWeight: 500,
                color: 'var(--accent)',
                border: '1px solid rgba(201,168,76,0.4)',
                borderRadius: '9999px',
                padding: '0.55rem 1.25rem',
                textDecoration: 'none',
                background: 'transparent',
                transition: 'background 0.2s, border-color 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(201,168,76,0.12)'
                e.currentTarget.style.borderColor = 'rgba(201,168,76,0.7)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.borderColor = 'rgba(201,168,76,0.4)'
              }}
            >
              View Work <ArrowRight size={14} />
            </a>

            <a
              href={hero.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.875rem',
                fontWeight: 500,
                color: 'var(--text-muted)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '9999px',
                padding: '0.55rem 1.25rem',
                textDecoration: 'none',
                background: 'transparent',
                transition: 'color 0.2s, border-color 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--text)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-muted)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
              }}
            >
              <FileText size={14} /> Download Résumé
            </a>

            <div style={{ display: 'flex', gap: '0.5rem', marginLeft: '0.25rem' }}>
              {[
                { href: hero.links.github, Icon: Github, label: 'GitHub' },
                { href: hero.links.linkedin, Icon: Linkedin, label: 'LinkedIn' },
                { href: `mailto:${hero.links.email}`, Icon: Mail, label: 'Email' },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '2.25rem',
                    height: '2.25rem',
                    borderRadius: '50%',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: 'var(--text-muted)',
                    textDecoration: 'none',
                    background: 'transparent',
                    transition: 'color 0.2s, border-color 0.2s, background 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--text)'
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-muted)'
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                    e.currentTarget.style.background = 'transparent'
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right column: Signal Panel */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          style={{
            background: 'rgba(28,27,22,0.7)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '1.25rem',
            padding: '2rem',
            backdropFilter: 'blur(8px)',
            maxWidth: '360px',
            marginLeft: 'auto',
          }}
          className="hidden lg:block"
        >
          <p
            style={{
              fontSize: '0.7rem',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              marginBottom: '1.25rem',
            }}
          >
            Focus
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {hero.focusAreas.map((area) => (
              <li
                key={area}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  fontSize: '0.9375rem',
                  color: 'var(--text)',
                  fontWeight: 450,
                }}
              >
                <span
                  style={{
                    width: '5px',
                    height: '5px',
                    borderRadius: '50%',
                    background: 'var(--accent)',
                    flexShrink: 0,
                    opacity: 0.8,
                  }}
                />
                {area}
              </li>
            ))}
          </ul>

          <div
            style={{
              marginTop: '1.75rem',
              paddingTop: '1.25rem',
              borderTop: '1px solid rgba(255,255,255,0.07)',
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
            }}
          >
            University of Arizona · CS · GPA 3.85
          </div>
        </motion.div>
      </div>
    </section>
  )
}
