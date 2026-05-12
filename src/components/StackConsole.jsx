import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { stack } from '../data/portfolioData'

export default function StackConsole() {
  const [cursor, setCursor] = useState(true)

  useEffect(() => {
    const id = setInterval(() => setCursor(c => !c), 530)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="stack" style={{
      padding: '9rem 2rem',
      maxWidth: 900, margin: '0 auto',
      position: 'relative', zIndex: 10,
    }}>
      <div className="section-divider" style={{ margin: '0 0 7rem', maxWidth: '100%' }} />

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{ marginBottom: 40 }}
      >
        <span style={{
          fontSize: '0.58rem', fontFamily: 'monospace', color: '#3f3f46',
          letterSpacing: '0.22em', textTransform: 'uppercase',
        }}>Stack</span>
        <div style={{
          marginTop: 12,
          fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
          fontWeight: 800, color: '#f8fafc',
          letterSpacing: '-0.035em', lineHeight: 1.08,
        }}>Tools of the trade.</div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          background: 'rgba(6,6,8,0.98)',
          border: '1px solid rgba(255,255,255,0.09)',
          borderRadius: 14, overflow: 'hidden',
        }}
      >
        {/* Terminal title bar */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 6,
          padding: '12px 16px',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          background: 'rgba(255,255,255,0.02)',
        }}>
          {['#ff5f56', '#ffbd2e', '#27c93f'].map((c, i) => (
            <div key={i} style={{ width: 10, height: 10, borderRadius: '50%', background: c, opacity: 0.6 }} />
          ))}
          <span style={{
            marginLeft: 8, fontSize: '0.6rem', fontFamily: 'monospace',
            color: '#3f3f46', letterSpacing: '0.08em',
          }}>
            stack.sh
          </span>
        </div>

        {/* Console body */}
        <div style={{ padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 22 }}>
          {stack.map((group, gi) => (
            <motion.div
              key={group.cat}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: gi * 0.06 }}
            >
              {/* Prompt line */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8,
              }}>
                <span style={{ color: '#4f46e5', fontFamily: 'monospace', fontSize: '0.72rem' }}>›</span>
                <span style={{
                  fontFamily: 'monospace', fontSize: '0.68rem',
                  color: '#818cf8', letterSpacing: '0.06em',
                }}>
                  {group.prompt}
                </span>
                {gi === stack.length - 1 && (
                  <span style={{
                    display: 'inline-block', width: 7, height: 13,
                    background: cursor ? '#818cf8' : 'transparent',
                    borderRadius: 1, marginLeft: 2,
                    transition: 'background 0.1s',
                  }} />
                )}
              </div>

              {/* Items */}
              <div style={{
                display: 'flex', flexWrap: 'wrap', gap: '6px 8px',
                paddingLeft: 20,
              }}>
                {group.items.map(item => (
                  <span key={item} style={{
                    fontFamily: 'monospace', fontSize: '0.72rem',
                    color: '#d4d4d8',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    padding: '3px 10px', borderRadius: 4,
                    letterSpacing: '0.02em',
                    transition: 'all 0.2s',
                    cursor: 'default',
                  }}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = '#a5b4fc'
                      e.currentTarget.style.borderColor = 'rgba(99,102,241,0.35)'
                      e.currentTarget.style.background = 'rgba(99,102,241,0.07)'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = '#d4d4d8'
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                      e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
