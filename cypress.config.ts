import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: 'mfqg35',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:5173',
    experimentalRunAllSpecs: true,
    viewportWidth: 900,
    viewportHeight: 900,
  },

  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },
})
