const path = require('path')

module.exports = {
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'stimulus-checkbox-select-all'
    },
    rollupOptions: {
      external: ['stimulus'],
      output: {
        globals: {
          stimulus: 'Stimulus'
        }
      }
    }
  }
}
