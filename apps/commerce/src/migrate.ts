import { runMigrations } from '@vendure/core'

import { config } from './vendure-config.js'

try {
  const migrations = await runMigrations(config)
  console.info(
    migrations.length === 0
      ? 'No pending commerce migrations.'
      : `Applied commerce migrations: ${migrations.join(', ')}`,
  )
  process.exit(0)
} catch (error) {
  console.error('Commerce migration failed.', error)
  process.exit(1)
}
