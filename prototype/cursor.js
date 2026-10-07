;(() => {
  const BRAND = '#489d7e'
  const LIME = '#cded82'
  const CORAL = '#de6958'
  const BLUE = '#389bb2'
  const INK = '#17211d'
  const WHITE = '#ffffff'
  const DEEP = '#1d5a44'

  const STORAGE_KEY = 'vtcc-cursor'
  const INTERACTIVE = 'a, button, summary, input, select, textarea, label, [role="button"]'

  const fineQuery = window.matchMedia('(pointer: fine)')
  const hoverQuery = window.matchMedia('(hover: hover)')
  const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

  const variants = {
    bubble: createBubble(),
    sparkle: createSparkle(),
    crayon: createCrayon(),
    spoon: createSpoon(),
    balloon: createBalloon(),
    speech: createSpeech(),
    plane: createPlane(),
    rocket: createRocket(),
  }

  let canvas
  let ctx
  let frame
  let running = false
  let variant
  let state

  function resolveName() {
    const fromQuery = new URLSearchParams(window.location.search).get('cursor')
    if (fromQuery && variants[fromQuery]) {
      return fromQuery
    }
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored && variants[stored]) {
        return stored
      }
    } catch {
      // Storage can be blocked; fall through to the page default.
    }
    const pageDefault = window.VTCC_CURSOR
    return variants[pageDefault] ? pageDefault : null
  }

  function allowed() {
    return fineQuery.matches && hoverQuery.matches && !motionQuery.matches && Boolean(resolveName())
  }

  function freshState() {
    return {
      x: -100,
      y: -100,
      px: -100,
      py: -100,
      vx: 0,
      vy: 0,
      visible: false,
      hover: 0,
      pressed: false,
      pressAge: 10,
      time: 0,
      points: [],
      bits: [],
      extra: {},
    }
  }

  function start() {
    if (running || !allowed()) {
      return
    }
    variant = variants[resolveName()]
    state = freshState()
    canvas = document.createElement('canvas')
    canvas.className = 'vtcc-cursor-canvas'
    canvas.setAttribute('aria-hidden', 'true')
    document.body.appendChild(canvas)
    ctx = canvas.getContext('2d')
    document.documentElement.classList.add('vtcc-cursor-on')
    resize()
    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('pointerdown', onDown, { passive: true })
    window.addEventListener('pointerup', onUp, { passive: true })
    window.addEventListener('pointercancel', onUp, { passive: true })
    document.addEventListener('pointerleave', onLeave)
    window.addEventListener('blur', onLeave)
    document.addEventListener('visibilitychange', onVisibility)
    window.addEventListener('resize', resize)
    running = true
    frame = requestAnimationFrame(tick)
  }

  function stop() {
    if (!running) {
      return
    }
    running = false
    cancelAnimationFrame(frame)
    window.removeEventListener('pointermove', onMove)
    window.removeEventListener('pointerdown', onDown)
    window.removeEventListener('pointerup', onUp)
    window.removeEventListener('pointercancel', onUp)
    document.removeEventListener('pointerleave', onLeave)
    window.removeEventListener('blur', onLeave)
    document.removeEventListener('visibilitychange', onVisibility)
    window.removeEventListener('resize', resize)
    canvas?.remove()
    canvas = null
    ctx = null
    document.documentElement.classList.remove('vtcc-cursor-on')
  }

  function sync() {
    if (allowed()) {
      start()
    } else {
      stop()
    }
  }

  function resize() {
    if (!canvas) {
      return
    }
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = Math.round(window.innerWidth * dpr)
    canvas.height = Math.round(window.innerHeight * dpr)
    canvas.style.width = `${window.innerWidth}px`
    canvas.style.height = `${window.innerHeight}px`
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  }

  function onMove(event) {
    if (event.pointerType && event.pointerType !== 'mouse') {
      return
    }
    state.px = state.x
    state.py = state.y
    state.x = event.clientX
    state.y = event.clientY
    state.visible = true
    const target = event.target
    const interactive = target instanceof Element && Boolean(target.closest(INTERACTIVE))
    state.hoverTarget = interactive
  }

  function onDown(event) {
    if (event.pointerType && event.pointerType !== 'mouse') {
      return
    }
    state.pressed = true
    state.pressAge = 0
    variant.onPress?.(state)
  }

  function onUp() {
    if (!state) {
      return
    }
    state.pressed = false
  }

  function onLeave() {
    if (state) {
      state.visible = false
    }
  }

  function onVisibility() {
    if (document.hidden) {
      cancelAnimationFrame(frame)
    } else if (running) {
      frame = requestAnimationFrame(tick)
    }
  }

  let last = 0
  function tick(now) {
    if (!running) {
      return
    }
    const dt = Math.min(0.05, (now - (last || now)) / 1000)
    last = now
    state.time += dt
    state.pressAge += dt
    const targetHover = state.hoverTarget ? 1 : 0
    state.hover += (targetHover - state.hover) * Math.min(1, dt * 12)
    if (state.visible && state.px > -50) {
      state.vx = state.x - state.px
      state.vy = state.y - state.py
    }
    variant.step(state, dt)
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
    if (state.visible) {
      variant.drawTail(ctx, state)
      variant.drawGlyph(ctx, state)
    }
    frame = requestAnimationFrame(tick)
  }

  function pushPoint(state, life) {
    const lastPoint = state.points[state.points.length - 1]
    if (lastPoint && Math.hypot(state.x - lastPoint.x, state.y - lastPoint.y) < 2) {
      return
    }
    state.points.push({ x: state.x, y: state.y, age: 0, life })
    if (state.points.length > 48) {
      state.points.shift()
    }
  }

  function agePoints(state, dt) {
    for (const point of state.points) {
      point.age += dt
    }
    state.points = state.points.filter((point) => point.age < point.life)
  }

  function ageBits(state, dt) {
    for (const bit of state.bits) {
      bit.age += dt
      bit.x += bit.vx * dt
      bit.y += bit.vy * dt
      bit.vy += (bit.gravity ?? 0) * dt
    }
    state.bits = state.bits.filter((bit) => bit.age < bit.life)
  }

  function heading(state) {
    const speed = Math.hypot(state.vx, state.vy)
    if (speed > 0.4) {
      state.extra.angle = Math.atan2(state.vy, state.vx)
    }
    return state.extra.angle ?? -Math.PI / 2
  }

  function createBubble() {
    return {
      step(state, dt) {
        if (state.visible) {
          pushPoint(state, 0.55)
        }
        agePoints(state, dt)
        ageBits(state, dt)
      },
      onPress(state) {
        state.bits.push({
          kind: 'ring',
          x: state.x,
          y: state.y,
          age: 0,
          life: 0.45,
          vx: 0,
          vy: 0,
        })
      },
      drawTail(ctx, state) {
        for (const point of state.points) {
          const t = 1 - point.age / point.life
          ctx.beginPath()
          ctx.fillStyle = t > 0.5 ? BRAND : LIME
          ctx.globalAlpha = t * 0.55
          ctx.arc(point.x, point.y, 3 + t * 7, 0, Math.PI * 2)
          ctx.fill()
        }
        ctx.globalAlpha = 1
      },
      drawGlyph(ctx, state) {
        const squash = state.pressed ? 0.62 : 1
        const scale = 1 + state.hover * 0.18
        ctx.save()
        ctx.translate(state.x, state.y)
        ctx.scale(scale, scale * squash)
        ctx.beginPath()
        ctx.strokeStyle = BRAND
        ctx.lineWidth = 2
        ctx.globalAlpha = 0.85
        ctx.arc(0, 0, 14, 0, Math.PI * 2)
        ctx.stroke()
        ctx.beginPath()
        ctx.fillStyle = LIME
        ctx.globalAlpha = 1
        ctx.arc(0, 0, 5.5, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
        for (const bit of state.bits) {
          const t = bit.age / bit.life
          ctx.beginPath()
          ctx.strokeStyle = BRAND
          ctx.globalAlpha = 1 - t
          ctx.lineWidth = 2
          ctx.arc(bit.x, bit.y, 10 + t * 28, 0, Math.PI * 2)
          ctx.stroke()
        }
        ctx.globalAlpha = 1
      },
    }
  }

  function starPath(ctx, radius, inner) {
    ctx.beginPath()
    for (let i = 0; i < 8; i += 1) {
      const r = i % 2 === 0 ? radius : inner
      const a = -Math.PI / 2 + (i * Math.PI) / 4
      const x = Math.cos(a) * r
      const y = Math.sin(a) * r
      if (i === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    }
    ctx.closePath()
  }

  function createSparkle() {
    return {
      step(state, dt) {
        if (state.visible && Math.hypot(state.vx, state.vy) > 1) {
          pushPoint(state, 0.5)
        }
        agePoints(state, dt)
        ageBits(state, dt)
      },
      onPress(state) {
        for (let i = 0; i < 8; i += 1) {
          const a = (i / 8) * Math.PI * 2
          state.bits.push({
            x: state.x,
            y: state.y,
            vx: Math.cos(a) * 160,
            vy: Math.sin(a) * 160,
            age: 0,
            life: 0.4,
            gravity: 40,
          })
        }
      },
      drawTail(ctx, state) {
        state.points.forEach((point, index) => {
          const t = 1 - point.age / point.life
          ctx.save()
          ctx.translate(point.x, point.y)
          ctx.rotate(index * 0.4)
          ctx.globalAlpha = t * (0.35 + state.hover * 0.35)
          ctx.fillStyle = index % 2 === 0 ? LIME : BLUE
          starPath(ctx, 3 + t * 4, 1.4)
          ctx.fill()
          ctx.restore()
        })
        ctx.globalAlpha = 1
      },
      drawGlyph(ctx, state) {
        const spin = state.time * 1.4
        const scale = (state.pressed ? 0.7 : 1) * (1 + state.hover * 0.15)
        ctx.save()
        ctx.translate(state.x, state.y)
        ctx.rotate(spin)
        ctx.scale(scale, scale)
        ctx.fillStyle = LIME
        starPath(ctx, 13, 5)
        ctx.fill()
        ctx.fillStyle = BRAND
        starPath(ctx, 6, 2.4)
        ctx.fill()
        ctx.restore()
        for (const bit of state.bits) {
          const t = 1 - bit.age / bit.life
          ctx.save()
          ctx.translate(bit.x, bit.y)
          ctx.globalAlpha = t
          ctx.fillStyle = CORAL
          starPath(ctx, 5 * t + 2, 2)
          ctx.fill()
          ctx.restore()
        }
        ctx.globalAlpha = 1
      },
    }
  }

  function createCrayon() {
    return {
      step(state, dt) {
        if (state.visible) {
          pushPoint(state, 0.7)
        }
        agePoints(state, dt)
        ageBits(state, dt)
      },
      onPress(state) {
        state.bits.push({
          x: state.x + 6,
          y: state.y + 10,
          vx: 0,
          vy: 0,
          age: 0,
          life: 0.7,
        })
      },
      drawTail(ctx, state) {
        if (state.points.length < 2) {
          return
        }
        ctx.lineCap = 'round'
        ctx.lineJoin = 'round'
        ctx.strokeStyle = CORAL
        for (let i = 1; i < state.points.length; i += 1) {
          const point = state.points[i]
          const prev = state.points[i - 1]
          const t = 1 - point.age / point.life
          ctx.globalAlpha = t * 0.8
          ctx.lineWidth = 2 + t * (state.pressed ? 8 : 5)
          ctx.beginPath()
          ctx.moveTo(prev.x, prev.y)
          ctx.lineTo(point.x, point.y)
          ctx.stroke()
        }
        ctx.globalAlpha = 1
      },
      drawGlyph(ctx, state) {
        ctx.save()
        ctx.translate(state.x, state.y)
        ctx.rotate(-0.7 + (state.pressed ? 0.25 : 0))
        ctx.scale(1 + state.hover * 0.08, 1)
        ctx.fillStyle = CORAL
        ctx.fillRect(-4, -22, 8, 18)
        ctx.fillStyle = WHITE
        ctx.fillRect(-4, -8, 8, 3)
        ctx.beginPath()
        ctx.fillStyle = DEEP
        ctx.moveTo(-4, -4)
        ctx.lineTo(4, -4)
        ctx.lineTo(0, 8)
        ctx.closePath()
        ctx.fill()
        ctx.restore()
        for (const bit of state.bits) {
          const t = 1 - bit.age / bit.life
          ctx.beginPath()
          ctx.globalAlpha = t
          ctx.fillStyle = CORAL
          ctx.arc(bit.x, bit.y, 4 + (1 - t) * 3, 0, Math.PI * 2)
          ctx.fill()
        }
        ctx.globalAlpha = 1
      },
    }
  }

  function createSpoon() {
    return {
      step(state, dt) {
        if (state.visible && Math.hypot(state.vx, state.vy) > 1.5) {
          state.bits.push({
            x: state.x - 6,
            y: state.y + 4,
            vx: -state.vx * 2,
            vy: -state.vy * 2 + 20,
            age: 0,
            life: 0.55,
            gravity: 180,
          })
          if (state.bits.length > 24) {
            state.bits.shift()
          }
        }
        ageBits(state, dt)
      },
      drawTail(ctx, state) {
        for (const bit of state.bits) {
          const t = 1 - bit.age / bit.life
          ctx.beginPath()
          ctx.globalAlpha = t * (0.45 + state.hover * 0.4)
          ctx.fillStyle = bit.age * 10 % 2 > 1 ? CORAL : LIME
          ctx.arc(bit.x, bit.y, 2.2 + t * 1.5, 0, Math.PI * 2)
          ctx.fill()
        }
        ctx.globalAlpha = 1
      },
      drawGlyph(ctx, state) {
        ctx.save()
        ctx.translate(state.x, state.y)
        ctx.rotate(state.pressed ? 0.55 : 0.15)
        ctx.scale(1 + state.hover * 0.1, 1)
        ctx.strokeStyle = BLUE
        ctx.fillStyle = BLUE
        ctx.lineWidth = 3
        ctx.lineCap = 'round'
        ctx.beginPath()
        ctx.moveTo(0, 2)
        ctx.lineTo(0, 18)
        ctx.stroke()
        ctx.beginPath()
        ctx.ellipse(0, -4, 7, 9, 0, 0, Math.PI * 2)
        ctx.globalAlpha = 0.9
        ctx.fill()
        ctx.globalAlpha = 1
        ctx.fillStyle = WHITE
        ctx.beginPath()
        ctx.ellipse(-2, -6, 2.2, 3, -0.4, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      },
    }
  }

  function createBalloon() {
    return {
      step(state, dt) {
        const extra = state.extra
        extra.bx ??= state.x
        extra.by ??= state.y
        extra.bvx ??= 0
        extra.bvy ??= 0
        extra.scale ??= 1
        if (extra.popped) {
          extra.scale += (0 - extra.scale) * Math.min(1, dt * 14)
          if (extra.scale < 0.05 && state.pressAge > 0.35) {
            extra.popped = false
          }
        } else {
          extra.scale += (1 - extra.scale) * Math.min(1, dt * 6)
        }
        const sway = Math.sin(state.time * 3) * 6
        const tx = state.x + sway
        const ty = state.y - 28
        extra.bvx += (tx - extra.bx) * 18 * dt
        extra.bvy += (ty - extra.by) * 18 * dt
        extra.bvx *= 0.82
        extra.bvy *= 0.82
        extra.bx += extra.bvx
        extra.by += extra.bvy
        ageBits(state, dt)
      },
      onPress(state) {
        state.extra.popped = true
        const originX = state.extra.bx ?? state.x
        const originY = state.extra.by ?? state.y
        const colors = [CORAL, LIME, BLUE, BRAND]
        for (let i = 0; i < 10; i += 1) {
          const a = (i / 10) * Math.PI * 2
          state.bits.push({
            x: originX,
            y: originY,
            vx: Math.cos(a) * (80 + (i % 3) * 30),
            vy: Math.sin(a) * (80 + (i % 3) * 30),
            age: 0,
            life: 0.6,
            gravity: 220,
            color: colors[i % colors.length],
          })
        }
      },
      drawTail(ctx, state) {
        const { bx, by } = state.extra
        ctx.beginPath()
        ctx.strokeStyle = INK
        ctx.globalAlpha = 0.55
        ctx.lineWidth = 1.25
        ctx.moveTo(state.x, state.y)
        const midX = (state.x + bx) / 2 + Math.sin(state.time * 6) * 8
        const midY = (state.y + by) / 2
        ctx.quadraticCurveTo(midX, midY, bx, by + 12 * (state.extra.scale ?? 1))
        ctx.stroke()
        ctx.globalAlpha = 1
        for (const bit of state.bits) {
          const t = 1 - bit.age / bit.life
          ctx.globalAlpha = t
          ctx.fillStyle = bit.color
          ctx.fillRect(bit.x, bit.y, 4, 3)
        }
        ctx.globalAlpha = 1
      },
      drawGlyph(ctx, state) {
        const { bx, by, scale } = state.extra
        if (!scale || scale < 0.04) {
          return
        }
        const hover = 1 + state.hover * 0.12
        ctx.save()
        ctx.translate(bx, by)
        ctx.scale(scale * hover, scale * hover * (state.pressed && !state.extra.popped ? 0.9 : 1))
        ctx.beginPath()
        ctx.fillStyle = CORAL
        ctx.ellipse(0, 0, 11, 14, 0, 0, Math.PI * 2)
        ctx.fill()
        ctx.beginPath()
        ctx.fillStyle = WHITE
        ctx.globalAlpha = 0.7
        ctx.ellipse(-4, -5, 3, 5, -0.5, 0, Math.PI * 2)
        ctx.fill()
        ctx.globalAlpha = 1
        ctx.beginPath()
        ctx.fillStyle = CORAL
        ctx.moveTo(-3, 13)
        ctx.lineTo(3, 13)
        ctx.lineTo(0, 17)
        ctx.closePath()
        ctx.fill()
        ctx.restore()
      },
    }
  }

  function roundBubble(ctx, w, h, notch) {
    const r = Math.min(8, h / 2)
    ctx.beginPath()
    ctx.moveTo(-w + r, -h)
    ctx.arcTo(w, -h, w, h, r)
    ctx.arcTo(w, h, -w, h, r)
    ctx.arcTo(-w, h, -w, -h, r)
    ctx.arcTo(-w, -h, w, -h, r)
    ctx.closePath()
    if (notch) {
      ctx.moveTo(-4, h - 1)
      ctx.lineTo(-10, h + 7)
      ctx.lineTo(3, h - 1)
    }
  }

  function createSpeech() {
    return {
      step(state, dt) {
        if (state.visible) {
          pushPoint(state, 0.6)
        }
        agePoints(state, dt)
        ageBits(state, dt)
      },
      onPress(state) {
        for (let i = 0; i < 4; i += 1) {
          state.bits.push({
            x: state.x,
            y: state.y,
            vx: (i - 1.5) * 70,
            vy: -40 - i * 18,
            age: 0,
            life: 0.5,
            gravity: 260,
          })
        }
      },
      drawTail(ctx, state) {
        for (const point of state.points) {
          const t = 1 - point.age / point.life
          ctx.save()
          ctx.translate(point.x, point.y)
          ctx.globalAlpha = t * (0.35 + state.hover * 0.3)
          ctx.fillStyle = BLUE
          roundBubble(ctx, 6 + t * 6, 4 + t * 4, false)
          ctx.fill()
          ctx.restore()
        }
        ctx.globalAlpha = 1
      },
      drawGlyph(ctx, state) {
        const squash = state.pressed ? 0.75 : 1
        ctx.save()
        ctx.translate(state.x, state.y - 16)
        ctx.scale((1 + state.hover * 0.12) * squash, 1 + state.hover * 0.08)
        ctx.fillStyle = WHITE
        ctx.strokeStyle = BRAND
        ctx.lineWidth = 2
        roundBubble(ctx, 14, 10, true)
        ctx.fill()
        ctx.stroke()
        ctx.restore()
        for (const bit of state.bits) {
          const t = 1 - bit.age / bit.life
          ctx.save()
          ctx.translate(bit.x, bit.y)
          ctx.globalAlpha = t
          ctx.fillStyle = LIME
          roundBubble(ctx, 7 * t + 3, 5 * t + 2, false)
          ctx.fill()
          ctx.restore()
        }
        ctx.globalAlpha = 1
      },
    }
  }

  function createPlane() {
    return {
      step(state, dt) {
        if (state.visible) {
          pushPoint(state, 0.45)
        }
        agePoints(state, dt)
        if (state.extra.loop) {
          state.extra.loop = Math.max(0, state.extra.loop - dt * 2.2)
        }
      },
      onPress(state) {
        state.extra.loop = 1
      },
      drawTail(ctx, state) {
        if (state.points.length < 2) {
          return
        }
        ctx.setLineDash([4, 6])
        ctx.lineCap = 'round'
        ctx.strokeStyle = BLUE
        ctx.lineWidth = 2
        ctx.beginPath()
        state.points.forEach((point, index) => {
          ctx.globalAlpha = (1 - point.age / point.life) * (0.4 + state.hover * 0.4)
          if (index === 0) {
            ctx.moveTo(point.x, point.y)
          } else {
            ctx.lineTo(point.x, point.y)
          }
        })
        ctx.stroke()
        ctx.setLineDash([])
        ctx.globalAlpha = 1
      },
      drawGlyph(ctx, state) {
        const angle = heading(state) + (state.extra.loop ?? 0) * Math.PI * 2
        ctx.save()
        ctx.translate(state.x, state.y)
        ctx.rotate(angle)
        ctx.scale(1 + state.hover * 0.12, 1)
        ctx.fillStyle = LIME
        ctx.strokeStyle = DEEP
        ctx.lineWidth = 1.25
        ctx.beginPath()
        ctx.moveTo(14, 0)
        ctx.lineTo(-10, 7)
        ctx.lineTo(-4, 0)
        ctx.lineTo(-10, -7)
        ctx.closePath()
        ctx.fill()
        ctx.stroke()
        ctx.restore()
      },
    }
  }

  function createRocket() {
    return {
      step(state, dt) {
        const speed = Math.hypot(state.vx, state.vy)
        if (state.visible && (speed > 0.8 || state.pressed)) {
          const angle = heading(state)
          const burst = state.pressed ? 3 : 1
          for (let i = 0; i < burst; i += 1) {
            state.bits.push({
              x: state.x - Math.cos(angle) * 14,
              y: state.y - Math.sin(angle) * 14,
              vx: -Math.cos(angle) * (40 + Math.random() * 50) + (Math.random() - 0.5) * 30,
              vy: -Math.sin(angle) * (40 + Math.random() * 50) + (Math.random() - 0.5) * 30,
              age: 0,
              life: 0.45,
            })
          }
          if (state.bits.length > 40) {
            state.bits.splice(0, state.bits.length - 40)
          }
        }
        ageBits(state, dt)
      },
      onPress() {},
      drawTail(ctx, state) {
        for (const bit of state.bits) {
          const t = 1 - bit.age / bit.life
          ctx.beginPath()
          ctx.globalAlpha = t * 0.9
          ctx.fillStyle = t > 0.55 ? LIME : CORAL
          ctx.arc(bit.x, bit.y, 2 + t * 3.5, 0, Math.PI * 2)
          ctx.fill()
        }
        ctx.globalAlpha = 1
      },
      drawGlyph(ctx, state) {
        const angle = heading(state)
        ctx.save()
        ctx.translate(state.x, state.y)
        ctx.rotate(angle)
        ctx.scale(1 + state.hover * 0.1, state.pressed ? 1.15 : 1)
        ctx.fillStyle = BRAND
        ctx.beginPath()
        ctx.moveTo(16, 0)
        ctx.lineTo(-8, 7)
        ctx.lineTo(-4, 0)
        ctx.lineTo(-8, -7)
        ctx.closePath()
        ctx.fill()
        ctx.fillStyle = CORAL
        ctx.beginPath()
        ctx.moveTo(-8, 7)
        ctx.lineTo(-14, 4)
        ctx.lineTo(-6, 0)
        ctx.closePath()
        ctx.fill()
        ctx.beginPath()
        ctx.moveTo(-8, -7)
        ctx.lineTo(-14, -4)
        ctx.lineTo(-6, 0)
        ctx.closePath()
        ctx.fill()
        ctx.fillStyle = LIME
        ctx.beginPath()
        ctx.arc(4, 0, 2.4, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      },
    }
  }

  for (const query of [fineQuery, hoverQuery, motionQuery]) {
    query.addEventListener('change', sync)
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', sync, { once: true })
  } else {
    sync()
  }
})()
