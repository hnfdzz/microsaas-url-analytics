'use client'

export function AnalyticsCharts() {
  const mockDevices = { Desktop: 120, Mobile: 85, Tablet: 12 }
  const mockBrowsers = { Chrome: 130, Safari: 55, Firefox: 22, Edge: 10 }

  const renderBreakdown = (title: string, data: Record<string, number>) => {
    const total = Object.values(data).reduce((acc, curr) => acc + curr, 0)

    return (
      <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl">
        <h3 className="text-sm font-semibold text-slate-300 mb-4">{title}</h3>
        <div className="space-y-3">
          {Object.entries(data).map(([key, val]) => {
            const percentage = total > 0 ? Math.round((val / total) * 100) : 0
            return (
              <div key={key}>
                <div className="flex justify-between text-xs text-slate-400 mb-1">
                  <span>{key}</span>
                  <span>{val} ({percentage}%)</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-blue-500 h-full rounded-full transition-all duration-300"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {renderBreakdown('Breakdown Perangkat', mockDevices)}
      {renderBreakdown('Breakdown Browser', mockBrowsers)}
    </div>
  )
}