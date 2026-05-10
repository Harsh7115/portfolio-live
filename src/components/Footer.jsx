import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, FileText } from 'lucide-react'
import { hero } from '../data/portfolioData'

export default function Footer() {
  const links = [
    { label: 'Email', href: `mailto:${hero.links.email}`, Icon: Mail },
    { label: 'GitHub', href: hero.links.github, Icon: Github },
    { label: 'LinkedIn', href: hero.links.linkedin, Icon: Linkedin },
    { label: 'Résumé', href: hero.links.resume, Icon: FileText },
  ]

  return (
    <footer
      id="contact"
      style={{
        borderTop: '1px solid rgba(255,255,255,0.07)',
        padding: '5rem 1.5rem 3rem',
        textAlign: 'center',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2
          style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
            fontWeight: 600,
            letterSpacing: '-0.03em',
            color: 'var(--text)',
            marginBottom: '2.5rem',
            lineHeight: 1.2,
          }}
        >
          Let's build something useful.
        </h2>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '1.25rem',
            marginBottom: '3.5rem',
          }}
        >
          {links.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.875rem',
                fontWeight: 500,
                color: 'var(--text-muted)',
                textDecoration: 'none',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '9999px',
                padding: '0.55rem 1.25rem',
                transition: 'color 0.2s, border-color 0.2s, background 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--text)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.22)'
                e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-muted)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                e.currentTarget.style.background = 'transparent'
              }}
            >
              <Icon size={15} />
              {label}
            </a>
          ))}
        </div>

        <p
          style={{
            fontSize: '0.75rem',
            color: 'var(--text-muted)',
            opacity: 0.6,
          }}
        >
          &copy; 2026 Harsh Jain
        </p>
      </motion.div>
    </footer>
  )
}
