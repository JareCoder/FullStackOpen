const config = require('./utils/config.cjs')
const logger = require('./utils/logger.cjs')
const app = require('./app.cjs')

app.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`)
})