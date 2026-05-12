import { useEffect, useRef } from 'react'

export default function SparkField() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let raf

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Mix: indigo + white sparks at varying sizes
    const particles = Array.from({ length: 130 }, (_, i) => ({
      x: Math.random(),
      y: Math.random(),
      size: Math.random() * 1.6 + 0.3,
      phase: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.35 + 0.12,
      driftX: (Math.random() - 0.5) * 0.00012,
      driftY: (Math.random() - 0.5) * 0.00007,
      // 50% indigo, 30% soft white, 20% violet
      color: i % 10 < 5 ? [99, 102, 241] : i % 10 < 8 ? [180, 180, 200] : [148, 100, 255],
    }))

    let t = 0
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      t += 0.01

      particles.forEach((p) => {
        p.x = (p.x + p.driftX + 1) % 1
        p.y = (p.y + p.driftY + 1) % 1

        const osc = (Math.sin(t * p.speed + p.phase) + 1) / 2
        const opacity = osc * 0.65 + 0.06
        const [r, g, b] = p.color
        const px = p.x * canvas.width
        const py = p.y * canvas.height

        // Outer glow halo on larger sparks
        if (p.size > 1) {
          const halo = ctx.createRadialGradient(px, py, 0, px, py, p.size * 7)
          halo.addColorStop(0, `rgba(${r},${g},${b},${opacity * 0.35})`)
          halo.addColorStop(1, `rgba(${r},${g},${b},0)`)
          ctx.beginPath()
          ctx.arc(px, py, p.size * 7, 0, Math.PI * 2)
          ctx.fillStyle = halo
          ctx.fill()
        }

        // Core
        ctx.beginPath()
        ctx.arc(px, py, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${r},${g},${b},${Math.min(opacity * 1.2, 1)})`
        ctx.fill()
      })

      raf = requestAnimationFrame(draw)
    }
    draw()

    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 1 }}
    />
  )
}
