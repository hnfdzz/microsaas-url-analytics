'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6 text-center">
      <h2 className="text-2xl font-bold mb-4">Terjadi Kesalahan Sistem</h2>
      <p className="text-slate-400 mb-6 max-w-md">
        Gagal memproses permintaan kamu. Silakan coba lagi beberapa saat lagi.
      </p>
      <button
        onClick={() => reset()}
        className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-6 py-3 rounded-xl transition"
      >
        Coba Lagi
      </button>
    </div>
  )
}