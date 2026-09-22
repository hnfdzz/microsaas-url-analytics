import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-6xl font-extrabold text-blue-500 mb-2">404</h1>
      <h2 className="text-2xl font-bold mb-4">Link Tidak Ditemukan</h2>
      <p className="text-slate-400 mb-8 max-w-md">
        Tautan yang kamu cari mungkin sudah dihapus, kadaluwarsa, atau URL yang dimasukkan salah.
      </p>
      <Link
        href="/"
        className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-6 py-3 rounded-xl transition"
      >
        Kembali ke Beranda
      </Link>
    </div>
  )
}