import { ArrowRight, Calendar, MapPin, Settings2 } from 'lucide-react'
import { Button } from '../../../components/Button'

interface DestinationDateProps {
  isGuestsInputOpen: boolean
  closeGuestsInput: () => void
  openGuestsInput: () => void
}

export function DestinationDate({ isGuestsInputOpen, closeGuestsInput, openGuestsInput }: DestinationDateProps) {
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <div className="flex items-center gap-2 flex-1">
        <MapPin className={`size-5 text-zinc-400 ${isGuestsInputOpen && 'opacity-30'}`} />

        <input
          disabled={isGuestsInputOpen}
          type="text"
          placeholder="Para onde você vai?"
          className="w-full bg-transparent text-lg placeholder-zinc-400 outline-0 disabled:opacity-30"
        />
      </div>

      <div className="flex items-center gap-2">
        <Calendar className={`size-5 text-zinc-400 ${isGuestsInputOpen && 'opacity-30'}`} />

        <input
          disabled={isGuestsInputOpen}
          type="text"
          placeholder="Quando"
          className="bg-transparent w-40 outline-0 disabled:opacity-30"
        />
      </div>

      <div className="w-px h-6 bg-zinc-800"></div>

      {isGuestsInputOpen ? (
        <Button onClick={closeGuestsInput} variant="secondary">
          Alterar local/data
          <Settings2 className="size-5" />
        </Button>
      ) : (
        <Button variant="primary" onClick={openGuestsInput}>
          Continuar
          <ArrowRight className="size-5" />
        </Button>
      )}
    </div>
  )
}
