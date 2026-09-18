import { describe, expect, it } from 'vitest'

import { enquirySubmissionSchema } from './index'

describe('enquiry submission contract', () => {
  it('accepts the approved minimum fields', () => {
    const result = enquirySubmissionSchema.safeParse({
      name: 'Test Customer',
      email: 'customer@example.com',
      serviceId: 'service-general-guidance',
      message: 'Please provide more information about this service.',
      consent: true,
    })

    expect(result.success).toBe(true)
  })

  it('rejects a submission without consent', () => {
    const result = enquirySubmissionSchema.safeParse({
      name: 'Test Customer',
      email: 'customer@example.com',
      serviceId: 'service-general-guidance',
      message: 'Please provide more information about this service.',
      consent: false,
    })

    expect(result.success).toBe(false)
  })
})
