import 'dotenv/config'
import 'reflect-metadata'

import { bootstrapWorker } from '@vendure/core'

import { config } from './vendure-config.js'

bootstrapWorker(config).catch((error: unknown) => {
  console.error('Vendure worker failed to start', error)
  process.exitCode = 1
})
