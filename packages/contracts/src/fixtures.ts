import type { ServiceSummary } from './index'

export const serviceFixtures: readonly ServiceSummary[] = [
  {
    id: 'service-general-guidance',
    slug: 'general-guidance',
    title: 'General guidance',
    summary:
      'A safe mock service used for local development and automated tests.',
    displayPrice: 'Contact us',
    availabilityText: 'Subject to confirmation',
    enquiryEnabled: true,
  },
]
