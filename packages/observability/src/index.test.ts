import { describe, expect, it } from 'vitest'

import { redactForLogs } from './index'

describe('redactForLogs', () => {
  it('redacts known sensitive fields', () => {
    expect(
      redactForLogs({ email: 'person@example.com', requestId: 'req-1' }),
    ).toEqual({ email: '[REDACTED]', requestId: 'req-1' })
  })
})
