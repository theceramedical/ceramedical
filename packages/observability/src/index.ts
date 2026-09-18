const sensitiveKeys = new Set([
  'authorization',
  'cookie',
  'email',
  'message',
  'password',
  'phone',
  'token',
])

export function redactForLogs(
  values: Readonly<Record<string, unknown>>,
): Record<string, unknown> {
  return Object.fromEntries(
    Object.entries(values).map(([key, value]) => [
      key,
      sensitiveKeys.has(key.toLowerCase()) ? '[REDACTED]' : value,
    ]),
  )
}
