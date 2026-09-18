import {
  DefaultJobQueuePlugin,
  DefaultSchedulerPlugin,
  DefaultSearchPlugin,
  type VendureConfig,
} from '@vendure/core'
import { AdminUiPlugin } from '@vendure/admin-ui-plugin'
import { AssetServerPlugin } from '@vendure/asset-server-plugin'
import path from 'node:path'

const isDevelopment = process.env.NODE_ENV !== 'production'
const serverPort = Number(process.env.COMMERCE_PORT ?? 3002)

export const config: VendureConfig = {
  apiOptions: {
    adminApiPath: 'admin-api',
    csrfPrevention: true,
    cors: {
      credentials: true,
      origin: [
        process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
        process.env.CMS_PUBLIC_URL ?? 'http://localhost:3001',
      ],
    },
    port: serverPort,
    shopApiPath: 'shop-api',
  },
  authOptions: {
    superadminCredentials: {
      identifier: process.env.SUPERADMIN_USERNAME ?? 'admin',
      password:
        process.env.SUPERADMIN_PASSWORD ?? 'replace-local-admin-password',
    },
    tokenMethod: ['bearer', 'cookie'],
  },
  dbConnectionOptions: {
    database: process.env.COMMERCE_DB_NAME ?? 'cera_commerce',
    host: process.env.COMMERCE_DB_HOST ?? '127.0.0.1',
    migrations: [path.join(import.meta.dirname, 'migrations/*.+(js|ts)')],
    password: process.env.COMMERCE_DB_PASSWORD ?? 'replace-local-password',
    port: Number(process.env.COMMERCE_DB_PORT ?? 55432),
    schema: 'public',
    synchronize: isDevelopment,
    type: 'postgres',
    username: process.env.COMMERCE_DB_USERNAME ?? 'cera_local',
  },
  paymentOptions: {
    paymentMethodHandlers: [],
  },
  plugins: [
    AssetServerPlugin.init({
      assetUploadDir: path.join(import.meta.dirname, '../static/assets'),
      route: 'assets',
    }),
    DefaultJobQueuePlugin.init({
      useDatabaseForBuffer: true,
    }),
    DefaultSchedulerPlugin.init(),
    DefaultSearchPlugin.init({
      bufferUpdates: false,
      indexStockStatus: true,
    }),
    AdminUiPlugin.init({
      adminUiConfig: {
        apiHost: 'auto',
        apiPort: serverPort,
      },
      port: serverPort + 1,
      route: 'admin',
    }),
  ],
}
