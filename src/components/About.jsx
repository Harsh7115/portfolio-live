import { motion } from 'framer-motion'
import { about } from '../data/portfolioData'

export default function About() {
  return (
    <section id="about" style={{
      padding: '9rem 2rem',
      maxWidth: 860, margin: '0 auto',
      position: 'relative', zIndex: 10,
    }}>
      <div className="section-divider" style={{ margin: '0 0 7rem', maxWidth: '100%' }} />

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span style={{
          fontSize: '0.58rem', fontFamily: 'monospace', color: '#3f3f46',
          letterSpacing: '0.22em', textTransform: 'uppercase',
          display: 'block', marginBottom: 36,
        }}>About</span>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontSize: 'clamp(1.4rem, 2.8vw, 2rem)',
            fontWeight: 600,
            color: '#f8fafc',
            lineHeight: 1.55,
            letterSpacing: '-0.02em',
            marginBottom: 28,
          }}
        >
          {about.main}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontSize: 'clamp(0.9rem, 1.4vw, 1.05rem)',
            color: '#71717a',
            lineHeight: 1.8, fontWeight: 300,
          }}
        >
          {about.beyond}
        </motion.p>
      </motion.div>
    </section>
  )
}
