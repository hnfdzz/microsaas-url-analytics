import { AnalyticsCharts } from '@/components/dashboard/analytics-charts'

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Ringkasan Analitik</h1>
        <p className="text-sm text-slate-400">Statistik performa tautan dan lalu lintas pengunjung</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl">
          <p className="text-xs font-medium text-slate-400">Total Klik</p>
          <p className="text-3xl font-bold text-white mt-2">217</p>
        </div>
        <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl">
          <p className="text-xs font-medium text-slate-400">Total Tautan</p>
          <p className="text-3xl font-bold text-blue-400 mt-2">14</p>
        </div>
        <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl">
          <p className="text-xs font-medium text-slate-400">Rata-Rata Klik/Link</p>
          <p className="text-3xl font-bold text-emerald-400 mt-2">15.5</p>
        </div>
      </div>

      <AnalyticsCharts />
    </div>
  )
}