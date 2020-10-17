require('dotenv').config()
const dotenv_example = require('./dotenv')
const logger = require('./logger')
require('./bcrypt')

/* const constValue = {
  name: 'Richie',
  email: 'rcedilloal@gmail.com',
  timestamp: new Date().toISOString()
}
logger.debug(`This is a debug line: ${JSON.stringify(constValue)}`)
logger.error(`Error log line: ${new Error('so sad 😥')}`) */