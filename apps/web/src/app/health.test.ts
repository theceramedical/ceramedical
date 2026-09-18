import { describe, expect, it } from 'vitest'

import { GET } from './api/health/route'

describe('web health endpoint', () => {
  it('returns an ok status', async () => {
    const response = GET()
    await expect(response.json()).resolves.toMatchObject({ status: 'ok' })
  })
})
