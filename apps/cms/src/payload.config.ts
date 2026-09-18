import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { s3Storage } from '@payloadcms/storage-s3'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { buildConfig } from 'payload'
import sharp from 'sharp'

import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Posts } from './collections/Posts'
import { Users } from './collections/Users'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
const hasR2Configuration = Boolean(
  process.env.R2_ENDPOINT &&
    process.env.R2_BUCKET &&
    process.env.R2_ACCESS_KEY_ID &&
    process.env.R2_SECRET_ACCESS_KEY,
)

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [Users, Media, Pages, Posts],
  db: postgresAdapter({
    pool: {
      connectionString:
        process.env.CMS_DATABASE_URL ??
        'postgresql://cera_local:replace-local-password@127.0.0.1:55432/cera_cms',
    },
  }),
  editor: lexicalEditor(),
  plugins: hasR2Configuration
    ? [
        s3Storage({
          bucket: process.env.R2_BUCKET!,
          collections: {
            media: true,
          },
          config: {
            credentials: {
              accessKeyId: process.env.R2_ACCESS_KEY_ID!,
              secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
            },
            endpoint: process.env.R2_ENDPOINT!,
            region: 'auto',
          },
        }),
      ]
    : [],
  secret:
    process.env.PAYLOAD_SECRET ??
    'local-only-change-before-sharing-or-deploying',
  serverURL: process.env.CMS_PUBLIC_URL ?? 'http://localhost:3001',
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
})
