import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ linkId: string }> }
) {
  const { linkId } = await params

  if (!linkId) {
    return NextResponse.json({ error: 'Link ID is required' }, { status: 400 })
  }

  const link = await prisma.link.findUnique({
    where: { id: linkId },
    include: {
      clicks: {
        orderBy: { createdAt: 'desc' },
      },
    },
  })

  if (!link) {
    return NextResponse.json({ error: 'Link not found' }, { status: 404 })
  }

  const totalClicks = link.clicks.length
  const devices: Record<string, number> = {}
  const browsers: Record<string, number> = {}

  for (const click of link.clicks) {
    const dev = click.device || 'Unknown'
    devices[dev] = (devices[dev] || 0) + 1

    const br = click.browser || 'Unknown'
    browsers[br] = (browsers[br] || 0) + 1
  }

  return NextResponse.json({
    id: link.id,
    code: link.code,
    originalUrl: link.originalUrl,
    totalClicks,
    devices,
    browsers,
    recentClicks: link.clicks.slice(0, 10),
  })
}