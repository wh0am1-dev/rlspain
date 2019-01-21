// debug plugin

module.exports = (state, emitter, app) => {
  emitter.on('debug:ping', () => {
    console.log('🏓 debug:ping :: pong !')
  })

  emitter.on('debug:log', msg => {
    console.log(`📜 debug:log :: ${msg}`)
  })
}
