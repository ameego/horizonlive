const { defineConfig } = require("cypress")

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:8000/",
    retries: 0,
    setupNodeEvents(on, config) {
      // plugins were empty — nothing to migrate
    },
  },
})
