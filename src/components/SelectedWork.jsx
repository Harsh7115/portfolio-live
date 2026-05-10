import { motion } from 'framer-motion'
import { selectedWork } from '../data/portfolioData'

function WorkCard({ item, index }) {
  const featured = item.featured
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      style={{
        background: featured ? 'rgba(28,27,22,0.9)' : 'var(--surface)',
        border: featured ? '1px solid rgba(201,168,76,0.15)' : '1px solid var(--border)',
        borderRadius: '1rem',
        padding: featured ? '2rem' : '1.5rem',
        transition: 'border-color 0.2s, transform 0.2s',
        cursor: 'default',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
      }}
      whileHover={{ y: -2 }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = featured
          ? 'rgba(201,168,76,0.3)'
          : 'rgba(255,255,255,0.14)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = featured
          ? 'rgba(201,168,76,0.15)'
          : 'var(--border)'
      }}
    >
      {/* Top row */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: '1rem',
        }}
      >
        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 500 }}>
          {item.org}
        </span>
        <span
          style={{
            fontSize: '0.7rem',
            color: 'var(--text-muted)',
            whiteSpace: 'nowrap',
            flexShrink: 0,
          }}
        >
          {item.dates}
        </span>
      </div>

      {/* Role */}
      <h3
        style={{
          fontSize: featured ? '1.125rem' : '0.9375rem',
          fontWeight: 600,
          color: 'var(--text)',
          lineHeight: 1.3,
          margin: 0,
        }}
      >
        {item.role}
      </h3>

      {/* Description */}
      <p
        style={{
          fontSize: '0.8125rem',
          lineHeight: 1.65,
          color: 'var(--text-muted)',
          margin: 0,
        }}
      >
        {item.description}
      </p>

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem', marginTop: '0.25rem' }}>
        {item.tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontSize: '0.7rem',
              fontWeight: 500,
              color: 'rgba(255,255,255,0.5)',
              background: 'rgba(255,255,255,0.05)',
              borderRadius: '9999px',
              padding: '0.2rem 0.6rem',
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function SelectedWork() {
  const featured = selectedWork.filter((w) => w.featured)
  const rest = selectedWork.filter((w) => !w.featured)

  return (
    <section
      style={{
        padding: '3rem 1.5rem 5rem',
        maxWidth: '1100px',
        margin: '0 auto',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{ marginBottom: '2.5rem' }}
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
          Selected Work
        </p>
        <h2
          style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            fontWeight: 600,
            letterSpacing: '-0.025em',
            color: 'var(--text)',
          }}
        >
          Things I've built and shipped
        </h2>
      </motion.div>

      {/* Featured 2 cards — side by side */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1rem',
          marginBottom: '1rem',
        }}
      >
        {featured.map((item, i) => (
          <WorkCard key={item.id} item={item} index={i} />
        ))}
      </div>

      {/* Remaining 3 cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1rem',
        }}
      >
        {rest.map((item, i) => (
          <WorkCard key={item.id} item={item} index={i + 2} />
        ))}
      </div>
    </section>
  )
}
