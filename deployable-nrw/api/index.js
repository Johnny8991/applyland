const path = require('path')

process.env.KIT_PROJECT_DIR = path.join(__dirname, '..')
process.env.NODE_ENV = process.env.NODE_ENV || 'production'
process.env.USE_HTTPS = process.env.USE_HTTPS || 'false'

module.exports = require('../server')
