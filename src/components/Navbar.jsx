import { useState, useEffect } from 'react'
import { nav } from '../data/portfolioData'
import { X, Menu } from 'lucide-react'

const sectionIds = {
  Work: 'work',
  Experience: 'experience',
  Projects: 'projects',
  About: 'about',
  Contact: 'contact',
}

export default function Navbar() {
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const observers = []
    nav.forEach((item) => {
      const id = sectionIds[item]
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(item)
        },
        { threshold: 0.2, rootMargin: '-80px 0px -60% 0px' }
      )
      observer.observe(el)
      observers.push(observer)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const handleClick = (item) => {
    const id = sectionIds[item]
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: '1rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1000,
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          backgroundColor: 'rgba(28,27,22,0.82)',
          border: '1px solid rgba(255,255,255,0.10)',
          borderRadius: '9999px',
          padding: '0.5rem 1.25rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.25rem',
        }}
      >
        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-1">
          {nav.map((item) => (
            <button
              key={item}
              onClick={() => handleClick(item)}
              style={{
                fontSize: '0.8125rem',
                fontWeight: 500,
                padding: '0.3rem 0.75rem',
                borderRadius: '9999px',
                border: 'none',
                background: active === item ? 'rgba(201,168,76,0.12)' : 'transparent',
                color: active === item ? 'var(--accent)' : 'var(--text-muted)',
                cursor: 'pointer',
                transition: 'color 0.2s, background 0.2s',
              }}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden"
          onClick={() => setMenuOpen(true)}
          style={{ color: 'var(--text-muted)', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
        >
          <Menu size={18} />
        </button>
      </nav>

      {/* Mobile fullscreen overlay */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 2000,
            backgroundColor: 'rgba(17,17,16,0.97)',
            backdropFilter: 'blur(16px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2rem',
          }}
        >
          <button
            onClick={() => setMenuOpen(false)}
            style={{
              position: 'absolute',
              top: '1.5rem',
              right: '1.5rem',
              background: 'none',
              border: 'none',
              color: 'var(--text-muted)',
              cursor: 'pointer',
            }}
          >
            <X size={24} />
          </button>
          {nav.map((item) => (
            <button
              key={item}
              onClick={() => handleClick(item)}
              style={{
                fontSize: '1.5rem',
                fontWeight: 600,
                color: active === item ? 'var(--accent)' : 'var(--text)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                letterSpacing: '-0.02em',
              }}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </>
  )
}
