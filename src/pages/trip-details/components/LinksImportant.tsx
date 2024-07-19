import { Link2, Plus } from 'lucide-react'
import { Button } from '../../../components/Button'

export function LinksImportant() {
  return (
    <div className="space-y-6">
      <h3 className="font-semibold text-xl">Links importantes</h3>

      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <p className="font-medium text-zinc-100">Reserva do AirBnB</p>

            <a href="#" className="block text-xs text-zinc-400 truncate hover:text-zinc-200 transition-colors">
              https://www.airbnb.com.br/rooms/1047000115456456645432345465465456326887879
            </a>
          </div>

          <Link2 className="text-zinc-400 size-5 shrink-0" />
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <p className="font-medium text-zinc-100">Reserva do AirBnB</p>

            <a href="#" className="block text-xs text-zinc-400 truncate hover:text-zinc-200 transition-colors">
              https://www.airbnb.com.br/rooms/1047000115456456645432345465465456326887879
            </a>
          </div>

          <Link2 className="text-zinc-400 size-5 shrink-0" />
        </div>
      </div>

      <Button variant="secondary" className="w-full h-11">
        <Plus className="size-5" />
        Cadastrar novo link
      </Button>
    </div>
  )
}
