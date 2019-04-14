// scroll store

module.exports = (state, emitter) => {
  // events
  state.events.SCROLL_XY = 'scroll:xy'
  state.events.SCROLL_EL = 'scroll:el'

  // listeners
  emitter.on(state.events.NAVIGATE, () => window.scrollTo(0, 0))

  emitter.on(state.events.SCROLL_XY, (x, y, smooth = false) => {
    window.scrollTo({
      behavior: smooth ? 'smooth' : 'auto',
      top: y,
      left: x
    })
  })

  emitter.on(state.events.SCROLL_EL, (selector, smooth = false) => {
    document.querySelector(selector).scrollIntoView({
      behavior: smooth ? 'smooth' : 'auto',
      block: 'start'
    })
  })
}
