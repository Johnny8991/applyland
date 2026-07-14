const path = require('path')

process.env.KIT_PROJECT_DIR = __dirname
process.env.NODE_ENV = process.env.NODE_ENV || 'production'

require('govuk-prototype-kit/lib/build').generateAssetsSync()

console.log('Built GOV.UK Prototype Kit assets for Vercel')
