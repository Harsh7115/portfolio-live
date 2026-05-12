import { motion } from 'framer-motion'

// Inspired by Kokonut UI Background Paths
// Two mirrored sets of 36 S-curve paths that travel across the viewport
function FloatingPaths({ position }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${380 - i * 5 * position} -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${152 - i * 5 * position} ${343 - i * 6}S${762 - i * 5 * position} ${679 - i * 6} ${1268 - i * 5 * position} ${713 - i * 6}`,
    opacity: 0.02 + i * 0.006,
    width: 0.4 + i * 0.018,
    duration: 18 + i * 0.5,
    delay: i * 0.25,
  }))

  return (
    <svg
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      viewBox="0 0 696 316"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      aria-hidden="true"
    >
      {paths.map((p) => (
        <motion.path
          key={p.id}
          d={p.d}
          stroke={`rgba(99,102,241,${p.opacity})`}
          strokeWidth={p.width}
          initial={{ pathLength: 0.25, opacity: 0 }}
          animate={{
            pathLength: [0.25, 0.7, 0.25],
            opacity: [p.opacity * 0.5, p.opacity * 2.5, p.opacity * 0.5],
            pathOffset: [0, 1, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </svg>
  )
}

export default function BackgroundPaths() {
  return (
    <div style={{
      position: 'fixed', inset: 0,
      pointerEvents: 'none', zIndex: 0, overflow: 'hidden',
      background: '#050505',
    }}>
      <FloatingPaths position={1} />
      <FloatingPaths position={-1} />

      {/* Very gentle centre vignette — only dims edges, leaves centre open */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 90% 70% at 50% 50%, transparent 50%, rgba(5,5,5,0.6) 100%)',
        pointerEvents: 'none',
      }} />
    </div>
  )
}
