import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, FileText } from 'lucide-react'
import { hero } from '../data/portfolioData'

const LINKS = [
  { label: 'Email', href: hero.links.email, Icon: Mail },
  { label: 'GitHub', href: hero.links.github, Icon: Github },
  { label: 'LinkedIn', href: hero.links.linkedin, Icon: Linkedin },
  { label: 'Resume', href: hero.links.resume, Icon: FileText },
]

export default function Footer() {
  return (
    <footer style={{
      padding: '7rem 2rem 4rem',
      maxWidth: 1100, margin: '0 auto',
      position: 'relative', zIndex: 10,
    }}>
      <div className="section-divider" style={{ margin: '0 0 5rem', maxWidth: '100%' }} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center' }}
      >
        {/* Ambient glow */}
        <div aria-hidden="true" style={{
          position: 'absolute', left: '50%', transform: 'translateX(-50%)',
          width: '60%', height: 1,
          background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.4) 30%, rgba(165,180,252,0.3) 50%, rgba(99,102,241,0.4) 70%, transparent)',
          marginBottom: 60, top: 0,
          pointerEvents: 'none',
        }} />

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontSize: 'clamp(2rem, 5vw, 4rem)',
            fontWeight: 900,
            color: '#f8fafc',
            letterSpacing: '-0.04em',
            lineHeight: 1,
            marginBottom: '2.5rem',
          }}
        >
          Let's build something useful.
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap', marginBottom: '4rem' }}
        >
          {LINKS.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 7,
                fontSize: '0.72rem', fontFamily: 'monospace', letterSpacing: '0.08em',
                color: '#71717a',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                padding: '9px 18px', borderRadius: 8,
                textDecoration: 'none', transition: 'all 0.22s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = '#a5b4fc'
                e.currentTarget.style.borderColor = 'rgba(99,102,241,0.4)'
                e.currentTarget.style.background = 'rgba(99,102,241,0.07)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = '#71717a'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
              }}
            >
              <Icon size={13} />
              {label}
            </a>
          ))}
        </motion.div>

        <div style={{
          fontSize: '0.62rem', fontFamily: 'monospace',
          color: '#27272a', letterSpacing: '0.08em',
        }}>
          © 2026 Harsh Jain
        </div>
      </motion.div>
    </footer>
  )
}
