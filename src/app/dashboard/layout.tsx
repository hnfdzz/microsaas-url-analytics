import Link from 'next/link'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-bold text-lg text-blue-400">
            MicroAnalytics
          </Link>
          <nav className="flex gap-4 text-sm font-medium">
            <Link href="/dashboard" className="text-white hover:text-blue-400 transition">
              Overview
            </Link>
          </nav>
        </div>
        <Link
          href="/"
          className="text-xs bg-blue-600 hover:bg-blue-500 text-white font-medium px-3 py-1.5 rounded-lg transition"
        >
          + Buat Link
        </Link>
      </header>
      <main className="flex-1 max-w-6xl w-full mx-auto p-6">{children}</main>
    </div>
  )
}