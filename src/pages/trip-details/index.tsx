import { Calendar, MapPin, Settings2 } from 'lucide-react'

export function TripDetailsPage() {
  return (
    <div className="max-w-6xl px-6 py-10 mx-auto">
      <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MapPin className="size-5 text-zinc-400" />

          <p className="text-zinc-100">Florianópolis, Brasil</p>
        </div>

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <Calendar className="size-5 text-zinc-100" />

            <p className="text-zinc-100">17 a 23 de Agosto</p>
          </div>

          <div className="w-px h-6 bg-zinc-800"></div>

          <button className="bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center justify-center gap-2 hover:bg-zinc-700 transition-colors">
            Alterar local/data
            <Settings2 className="size-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
