import config from '@payload-config'
import { handleServerFunctions, RootLayout } from '@payloadcms/next/layouts'
import type { ReactNode } from 'react'
import type { ServerFunctionClient } from 'payload'

import { importMap } from './admin/importMap.js'

export default function PayloadLayout({ children }: { children: ReactNode }) {
  const serverFunction: ServerFunctionClient = async (args) => {
    'use server'
    return handleServerFunctions({
      ...args,
      config,
      importMap,
    })
  }

  return RootLayout({
    children,
    config,
    importMap,
    serverFunction,
  })
}
