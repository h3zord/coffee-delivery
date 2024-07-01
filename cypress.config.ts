import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: 'mfqg35',
  e2e: {
    setupNodeEvents() {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:5173',
    experimentalRunAllSpecs: true,
    viewportWidth: 1200,
    viewportHeight: 1200,
  },

  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },
})
