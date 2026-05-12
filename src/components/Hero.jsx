import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, FileText, ChevronDown } from 'lucide-react'
import { hero } from '../data/portfolioData'

function CinematicText({ text, delay = 0 }) {
  return (
    <span style={{ display: 'block', overflow: 'hidden' }}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ y: '110%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          transition={{ duration: 0.65, delay: delay + i * 0.022, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'inline-block', whiteSpace: char === ' ' ? 'pre' : undefined }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  )
}

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        background: '#030303',
      }}
    >
      {/* Animated fluid glow orbs — CSS only, zero JS crash risk */}
      <motion.div
        aria-hidden="true"
        animate={{ scale: [1, 1.12, 1], opacity: [0.55, 0.85, 0.55] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: '15%', left: '50%',
          transform: 'translateX(-50%)',
          width: '56vw', height: '56vw',
          maxWidth: 700, maxHeight: 700,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(67,56,202,0.35) 0%, rgba(79,70,229,0.18) 35%, transparent 70%)',
          pointerEvents: 'none', zIndex: 0,
          filter: 'blur(60px)',
        }}
      />
      <motion.div
        aria-hidden="true"
        animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        style={{
          position: 'absolute',
          top: '30%', left: '60%',
          width: '30vw', height: '30vw',
          maxWidth: 400, maxHeight: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 65%)',
          pointerEvents: 'none', zIndex: 0,
          filter: 'blur(50px)',
        }}
      />
      <motion.div
        aria-hidden="true"
        animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        style={{
          position: 'absolute',
          top: '25%', left: '25%',
          width: '25vw', height: '25vw',
          maxWidth: 340, maxHeight: 340,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99,102,241,0.22) 0%, transparent 65%)',
          pointerEvents: 'none', zIndex: 0,
          filter: 'blur(45px)',
        }}
      />

      {/* Subtle grid */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.012) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.012) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 40%, black 20%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 40%, black 20%, transparent 75%)',
        }}
      />

      {/* Vignette */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 100% 100% at 50% 50%, transparent 30%, rgba(3,3,3,0.7) 75%, rgba(3,3,3,0.97) 100%)',
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative', zIndex: 10,
          width: '100%', maxWidth: 860,
          margin: '0 auto',
          padding: '7rem 1.75rem 5rem',
          textAlign: 'center',
        }}
      >
        {/* Status pills */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: 6, justifyContent: 'center', marginBottom: '2.8rem' }}
        >
          <span style={{
            fontSize: '0.6rem', fontFamily: 'monospace', letterSpacing: '0.16em',
            textTransform: 'uppercase', color: '#a5b4fc',
            background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.35)',
            padding: '4px 12px', borderRadius: 2,
          }}>Harsh Jain</span>
          {['CS Senior @ University of Arizona', 'Graduating May 2026', 'Open to full-time roles'].map(p => (
            <span key={p} style={{
              fontSize: '0.6rem', fontFamily: 'monospace', letterSpacing: '0.08em',
              color: '#a1a1aa', border: '1px solid rgba(255,255,255,0.1)',
              padding: '4px 12px', borderRadius: 2, background: 'rgba(255,255,255,0.02)',
            }}>{p}</span>
          ))}
        </motion.div>

        {/* Cinematic headline */}
        <h1 style={{
          fontSize: 'clamp(3.5rem, 9.5vw, 9rem)',
          fontWeight: 900,
          lineHeight: 0.92,
          letterSpacing: '-0.045em',
          color: '#ffffff',
          marginBottom: '2rem',
        }}>
          {hero.headline.map((line, li) => {
            const offset = hero.headline.slice(0, li).join('').length
            return (
              <CinematicText
                key={li}
                text={line}
                delay={0.25 + offset * 0.016}
              />
            )
          })}
        </h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          style={{
            fontSize: 'clamp(0.9rem, 1.5vw, 1.08rem)',
            color: '#d4d4d8',
            fontWeight: 300,
            lineHeight: 1.75,
            maxWidth: 520,
            margin: '0 auto 2.8rem',
          }}
        >
          {hero.sub}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center', alignItems: 'center' }}
        >
          <a
            href="#work"
            onClick={e => { e.preventDefault(); document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' }) }}
            style={{
              fontSize: '0.72rem', fontFamily: 'monospace', letterSpacing: '0.08em',
              padding: '11px 28px', borderRadius: 6,
              border: '1px solid rgba(99,102,241,0.65)',
              color: '#a5b4fc', background: 'rgba(99,102,241,0.1)',
              textDecoration: 'none', transition: 'all 0.22s', cursor: 'pointer',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(99,102,241,0.22)'; e.currentTarget.style.borderColor = '#818cf8'; e.currentTarget.style.color = '#c4b5fd' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(99,102,241,0.1)'; e.currentTarget.style.borderColor = 'rgba(99,102,241,0.65)'; e.currentTarget.style.color = '#a5b4fc' }}
          >
            View Work
          </a>
          <a
            href={hero.links.resume} target="_blank" rel="noopener noreferrer"
            style={{
              fontSize: '0.72rem', fontFamily: 'monospace', letterSpacing: '0.08em',
              padding: '11px 28px', borderRadius: 6,
              border: '1px solid rgba(255,255,255,0.13)', color: '#d4d4d8',
              textDecoration: 'none', transition: 'all 0.22s',
              display: 'inline-flex', alignItems: 'center', gap: 6,
              background: 'rgba(255,255,255,0.02)',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.color = '#fff' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.13)'; e.currentTarget.style.color = '#d4d4d8' }}
          >
            <FileText size={12} /> Resume
          </a>
          <div style={{ display: 'flex', gap: 6 }}>
            {[
              { href: hero.links.github, Icon: Github, label: 'GitHub' },
              { href: hero.links.linkedin, Icon: Linkedin, label: 'LinkedIn' },
              { href: hero.links.email, Icon: Mail, label: 'Email' },
            ].map(({ href, Icon, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                style={{
                  width: 40, height: 40, borderRadius: 8,
                  border: '1px solid rgba(255,255,255,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#71717a', textDecoration: 'none', transition: 'all 0.22s',
                  background: 'rgba(255,255,255,0.02)',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(99,102,241,0.55)'; e.currentTarget.style.color = '#a5b4fc'; e.currentTarget.style.background = 'rgba(99,102,241,0.08)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#71717a'; e.currentTarget.style.background = 'rgba(255,255,255,0.02)' }}
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0, duration: 0.6 }}
        style={{ position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)', zIndex: 10 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={18} style={{ color: '#3f3f46' }} />
        </motion.div>
      </motion.div>
    </section>
  )
}
