import { NextRequest, NextResponse } from 'next/server'
import { redis } from '@/lib/redis'
import { prisma } from '@/lib/prisma'

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ code: string }> }
) {
  const { code } = await params

  if (!code) {
    return NextResponse.json({ error: 'Invalid code' }, { status: 400 })
  }

  // 1. Cek cache Redis terlebih dahulu
  let targetUrl = await redis.get<string>(`url:${code}`)

  // 2. Jika cache miss, query ke PostgreSQL
  if (!targetUrl) {
    const link = await prisma.link.findUnique({
      where: { code },
    })

    if (!link) {
      return NextResponse.json({ error: 'URL not found' }, { status: 404 })
    }

    targetUrl = link.originalUrl
    await redis.set(`url:${code}`, targetUrl, { ex: 86400 })
  }

  // 3. Pengecekan null-check eksplisit untuk TypeScript
  if (!targetUrl) {
    return NextResponse.json({ error: 'Target URL is missing' }, { status: 500 })
  }

  return NextResponse.redirect(targetUrl, 302)
}