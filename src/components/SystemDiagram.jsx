import { motion } from 'framer-motion'

const nodes = [
  { id: 'retrieval',  label: 'Retrieval',  cx: 200, cy: 70 },
  { id: 'embeddings', label: 'Embeddings', cx: 380, cy: 60 },
  { id: 'apis',       label: 'APIs',       cx: 60,  cy: 200 },
  { id: 'guardrails', label: 'Guardrails', cx: 230, cy: 195 },
  { id: 'evaluation', label: 'Evaluation', cx: 400, cy: 210 },
  { id: 'automation', label: 'Automation', cx: 200, cy: 320 },
]

const edges = [
  ['retrieval', 'embeddings'],
  ['retrieval', 'guardrails'],
  ['embeddings', 'evaluation'],
  ['apis', 'guardrails'],
  ['guardrails', 'evaluation'],
  ['guardrails', 'automation'],
  ['apis', 'automation'],
  ['embeddings', 'guardrails'],
]

function getNode(id) { return nodes.find(n => n.id === id) }

const floats = [
  { y: [0, -7, 0], d: 3.4 },
  { y: [0, -5, 0], d: 4.2 },
  { y: [0, -8, 0], d: 3.8 },
  { y: [0, -6, 0], d: 5.0 },
  { y: [0, -7, 0], d: 3.6 },
  { y: [0, -5, 0], d: 4.5 },
]

export default function SystemDiagram() {
  return (
    <div style={{ position: 'relative' }}>
      {/* Ambient glow behind diagram */}
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 320, height: 260,
        background: 'radial-gradient(ellipse, rgba(99,102,241,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <svg
        viewBox="0 0 480 390"
        width="100%"
        style={{ maxWidth: 460, display: 'block' }}
        aria-hidden="true"
      >
        <defs>
          <filter id="node-glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="edge-glow" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Edges */}
        {edges.map(([from, to], i) => {
          const a = getNode(from)
          const b = getNode(to)
          const len = Math.hypot(b.cx - a.cx, b.cy - a.cy)
          return (
            <motion.line
              key={i}
              x1={a.cx} y1={a.cy}
              x2={b.cx} y2={b.cy}
              stroke="#6366f1"
              strokeWidth="0.7"
              strokeOpacity="0.35"
              strokeDasharray="5 5"
              filter="url(#edge-glow)"
              animate={{ strokeDashoffset: [0, -20] }}
              transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: 'linear' }}
            />
          )
        })}

        {/* Nodes */}
        {nodes.map((node, i) => {
          const f = floats[i]
          return (
            <motion.g
              key={node.id}
              animate={{ y: f.y }}
              transition={{ duration: f.d, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
            >
              {/* Outer pulse ring */}
              <motion.circle
                cx={node.cx} cy={node.cy} r={28}
                fill="none"
                stroke="#6366f1"
                strokeWidth="0.5"
                strokeOpacity="0.2"
                animate={{ r: [26, 34, 26], strokeOpacity: [0.25, 0, 0.25] }}
                transition={{ duration: f.d * 1.2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
              />

              {/* Inner ring */}
              <circle
                cx={node.cx} cy={node.cy} r={20}
                fill="rgba(8,8,8,0.9)"
                stroke="#6366f1"
                strokeWidth="1"
                strokeOpacity="0.6"
                filter="url(#node-glow)"
              />

              {/* Core dot */}
              <circle cx={node.cx} cy={node.cy} r={4} fill="#6366f1" opacity="0.9" />

              {/* Label */}
              <text
                x={node.cx}
                y={node.cy + 38}
                textAnchor="middle"
                fill="#71717a"
                fontSize="9.5"
                fontFamily="'JetBrains Mono', 'Courier New', monospace"
                letterSpacing="0.08em"
              >
                {node.label.toUpperCase()}
              </text>
            </motion.g>
          )
        })}
      </svg>
    </div>
  )
}
