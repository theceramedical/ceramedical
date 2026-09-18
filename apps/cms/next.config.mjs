import { withPayload } from '@payloadcms/next/withPayload'

const nextConfig = {
  output: 'standalone',
  poweredByHeader: false,
}

export default withPayload(nextConfig)
