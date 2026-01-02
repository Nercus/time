export function useDynamicFavicon() {
  let canvas: HTMLCanvasElement | null = null
  let ctx: CanvasRenderingContext2D | null = null

  function initCanvas() {
    if (typeof document === 'undefined') return false
    if (canvas && ctx) return true

    canvas = document.createElement('canvas')
    ctx = canvas.getContext('2d')!
    canvas.width = 32
    canvas.height = 32
    return true
  }

  function updateFavicon(date: Date) {
    if (!initCanvas()) return
    if (!canvas || !ctx) return

    const head = document.getElementsByTagName('head')[0]
    if (!head) return
    ctx.clearRect(0, 0, 32, 32)

    ctx.beginPath()
    ctx.arc(16, 16, 16, 0, Math.PI * 2)
    ctx.fillStyle = 'lightgray'
    ctx.fill()

    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    const hourAngle = ((hours % 12) + minutes / 60) * (Math.PI * 2) / 12 - Math.PI / 2
    const minuteAngle = (minutes * (Math.PI * 2) / 60) - Math.PI / 2
    const secondAngle = (seconds * (Math.PI * 2) / 60) - Math.PI / 2

    // Draw hour hand
    ctx.strokeStyle = 'black'
    ctx.lineWidth = 3
    ctx.beginPath()
    ctx.moveTo(16, 16)
    ctx.lineTo(
      16 + Math.cos(hourAngle) * 10,
      16 + Math.sin(hourAngle) * 10,
    )
    ctx.stroke()

    // Draw minute hand
    ctx.strokeStyle = 'black'
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(16, 16)
    ctx.lineTo(
      16 + Math.cos(minuteAngle) * 14,
      16 + Math.sin(minuteAngle) * 14,
    )
    ctx.stroke()

    ctx.strokeStyle = 'red'
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.moveTo(16, 16)
    ctx.lineTo(
      16 + Math.cos(secondAngle) * 16,
      16 + Math.sin(secondAngle) * 16,
    )
    ctx.stroke()

    // Convert to favicon
    const link = document.querySelector('link[rel*=\'icon\']') as HTMLLinkElement || document.createElement('link')
    link.type = 'image/x-icon'
    link.rel = 'shortcut icon'
    link.href = canvas.toDataURL('image/x-icon')
    head.appendChild(link)
  }

  return { updateFavicon }
}
