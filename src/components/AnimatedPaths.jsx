import { motion } from 'framer-motion'

const paths = [
  { d: 'M -200 180 C 200 60, 500 280, 900 120 S 1400 -20, 1900 180', w: 1.2, op: 0.55, dur: 18, delay: 0 },
  { d: 'M -100 520 C 300 380, 650 600, 1000 460 S 1350 300, 1900 520', w: 0.6, op: 0.3, dur: 24, delay: 2 },
  { d: 'M 0 340 C 350 200, 700 420, 1050 280 S 1450 120, 1900 340', w: 1.4, op: 0.5, dur: 14, delay: 4 },
  { d: 'M -300 740 C 200 610, 600 810, 1000 680 S 1400 540, 1900 740', w: 0.5, op: 0.25, dur: 28, delay: 1 },
  { d: 'M 100 90 C 400 -30, 750 190, 1100 50 S 1500 -90, 1900 90', w: 0.9, op: 0.45, dur: 20, delay: 5 },
  { d: 'M -100 450 C 280 310, 600 510, 950 370 S 1300 220, 1900 450', w: 1.8, op: 0.45, dur: 11, delay: 6.5 },
  { d: 'M 200 230 C 500 100, 800 320, 1150 170 S 1550 30, 1900 230', w: 0.7, op: 0.35, dur: 22, delay: 2.5 },
  { d: 'M -200 640 C 300 510, 700 720, 1050 580 S 1400 430, 1900 640', w: 1, op: 0.4, dur: 16, delay: 7 },
  { d: 'M -100 260 C 300 130, 680 350, 1030 210 S 1430 70, 1900 260', w: 1, op: 0.55, dur: 13, delay: 1.5 },
  { d: 'M 0 580 C 400 450, 800 650, 1150 510 S 1500 370, 1900 580', w: 0.5, op: 0.3, dur: 21, delay: 4.5 },
  { d: 'M 150 60 C 500 -70, 850 150, 1200 10 S 1600 -130, 1900 60', w: 1.3, op: 0.5, dur: 15, delay: 3.5 },
  { d: 'M -150 390 C 250 260, 600 460, 950 320 S 1300 170, 1900 390', w: 0.8, op: 0.4, dur: 19, delay: 8 },
]

export default function AnimatedPaths() {
  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
      <svg width="100%" height="100%" preserveAspectRatio="none">
        <defs>
          <filter id="glow-md" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="glow-sm" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.5" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        {paths.map((p, i) => (
          <motion.path
            key={i}
            d={p.d}
            stroke="#6366f1"
            strokeWidth={p.w}
            fill="none"
            strokeOpacity={p.op}
            strokeDasharray="2600"
            filter={p.w >= 1.2 ? 'url(#glow-md)' : 'url(#glow-sm)'}
            animate={{ strokeDashoffset: [2600, -2600] }}
            transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, repeatType: 'loop', ease: 'linear' }}
          />
        ))}
      </svg>

      {/* Gentle edge fade — only corners, centre stays open */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: `
          radial-gradient(ellipse 120% 80% at 50% 50%, transparent 45%, rgba(8,8,8,0.75) 100%)
        `,
      }} />
    </div>
  )
}
