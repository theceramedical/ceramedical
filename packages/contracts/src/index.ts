import { z } from 'zod'

export const serviceSummarySchema = z.object({
  id: z.string().min(1),
  slug: z.string().min(1),
  title: z.string().min(1),
  summary: z.string().min(1),
  displayPrice: z.string().optional(),
  availabilityText: z.string().optional(),
  enquiryEnabled: z.boolean(),
})

export const enquirySubmissionSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.email(),
  phone: z.string().trim().min(7).max(30).optional(),
  serviceId: z.string().min(1),
  message: z.string().trim().min(10).max(3000),
  consent: z.literal(true),
})

export const enquiryReceiptSchema = z.object({
  reference: z.string().min(1),
  status: z.literal('received'),
  receivedAt: z.iso.datetime(),
})

export const customerEnquiryStatusSchema = z.enum([
  'received',
  'under-review',
  'awaiting-customer',
  'in-progress',
  'completed',
  'closed',
])

export const apiErrorSchema = z.object({
  requestId: z.string().min(1),
  code: z.string().min(1),
  message: z.string().min(1),
  retryable: z.boolean(),
  fieldErrors: z.record(z.string(), z.array(z.string())).optional(),
})

export type ServiceSummary = z.infer<typeof serviceSummarySchema>
export type EnquirySubmission = z.infer<typeof enquirySubmissionSchema>
export type EnquiryReceipt = z.infer<typeof enquiryReceiptSchema>
export type CustomerEnquiryStatus = z.infer<typeof customerEnquiryStatusSchema>
export type ApiError = z.infer<typeof apiErrorSchema>
