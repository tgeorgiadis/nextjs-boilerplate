// https://github.com/prisma/docs/pull/2165
// https://www.prisma.io/docs/support/help-articles/nextjs-prisma-client-dev-practices


import { PrismaClient } from '@prisma/client'

declare global {
  var prisma: PrismaClient | undefined
}

let prisma: PrismaClient

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient()
} else {
  if (!globalThis.prisma) {
    globalThis.prisma = new PrismaClient()
  }
  prisma = globalThis.prisma
}

export default prisma