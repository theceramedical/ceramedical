import 'dotenv/config'
import 'reflect-metadata'

import { bootstrap } from '@vendure/core'

import { config } from './vendure-config.js'

bootstrap(config).catch((error: unknown) => {
  console.error('Vendure server failed to start', error)
  process.exitCode = 1
})
