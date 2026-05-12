import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Menu } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Work', href: 'work' },
  { label: 'Experience', href: 'experience' },
  { label: 'Projects', href: 'projects' },
  { label: 'Stack', href: 'stack' },
  { label: 'About', href: 'about' },
]

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100 }}
      >
        <div style={{
          margin: scrolled ? '12px 20px' : '20px 24px',
          background: scrolled ? 'rgba(3,3,3,0.9)' : 'rgba(3,3,3,0.25)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: `1px solid ${scrolled ? 'rgba(255,255,255,0.09)' : 'rgba(255,255,255,0.04)'}`,
          borderRadius: 12,
          padding: '0 20px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          height: 52,
          transition: 'all 0.35s ease',
        }}>
          <a
            href="#"
            onClick={e => { e.preventDefault(); scrollTo('hero') }}
            style={{
              fontSize: '0.75rem', fontFamily: 'monospace', letterSpacing: '0.14em',
              color: '#a5b4fc', textDecoration: 'none', fontWeight: 600,
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = '#c4b5fd' }}
            onMouseLeave={e => { e.currentTarget.style.color = '#a5b4fc' }}
          >
            HJ
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex" style={{ gap: 2, alignItems: 'center' }}>
            {NAV_LINKS.map(({ label, href }) => (
              <button
                key={label}
                onClick={() => scrollTo(href)}
                style={{
                  fontSize: '0.68rem', fontFamily: 'monospace', letterSpacing: '0.06em',
                  color: '#71717a', background: 'none', border: 'none',
                  padding: '6px 12px', cursor: 'pointer', borderRadius: 6,
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = '#d4d4d8'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)' }}
                onMouseLeave={e => { e.currentTarget.style.color = '#71717a'; e.currentTarget.style.background = 'none' }}
              >
                {label}
              </button>
            ))}
            <a
              href="mailto:harshjain.cs.30@gmail.com"
              style={{
                fontSize: '0.68rem', fontFamily: 'monospace', letterSpacing: '0.08em',
                color: '#a5b4fc', background: 'rgba(99,102,241,0.1)',
                border: '1px solid rgba(99,102,241,0.3)',
                padding: '6px 14px', borderRadius: 6,
                textDecoration: 'none', marginLeft: 6, transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(99,102,241,0.2)'; e.currentTarget.style.borderColor = 'rgba(99,102,241,0.55)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(99,102,241,0.1)'; e.currentTarget.style.borderColor = 'rgba(99,102,241,0.3)' }}
            >
              Contact
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(o => !o)}
            aria-label="Toggle menu"
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: '#71717a', padding: 4, display: 'flex', alignItems: 'center',
            }}
          >
            <Menu size={18} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 200,
              background: 'rgba(3,3,3,0.98)', backdropFilter: 'blur(20px)',
              display: 'flex', flexDirection: 'column',
              justifyContent: 'center', alignItems: 'center', gap: 6,
            }}
          >
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              style={{
                position: 'absolute', top: 24, right: 28,
                background: 'none', border: 'none', cursor: 'pointer',
                color: '#71717a', padding: 8,
              }}
            >
              <X size={20} />
            </button>
            {[...NAV_LINKS, { label: 'Contact', href: null, email: 'mailto:harshjain.cs.30@gmail.com' }].map(({ label, href, email }) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                {email ? (
                  <a
                    href={email}
                    onClick={() => setMobileOpen(false)}
                    style={{
                      fontSize: '1.8rem', fontWeight: 800, letterSpacing: '-0.03em',
                      color: '#a5b4fc', textDecoration: 'none', display: 'block',
                      padding: '6px 24px', textAlign: 'center',
                    }}
                  >{label}</a>
                ) : (
                  <button
                    onClick={() => { setMobileOpen(false); scrollTo(href) }}
                    style={{
                      fontSize: '1.8rem', fontWeight: 800, letterSpacing: '-0.03em',
                      color: '#f8fafc', background: 'none', border: 'none',
                      cursor: 'pointer', padding: '6px 24px', display: 'block',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#a5b4fc' }}
                    onMouseLeave={e => { e.currentTarget.style.color = '#f8fafc' }}
                  >{label}</button>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
