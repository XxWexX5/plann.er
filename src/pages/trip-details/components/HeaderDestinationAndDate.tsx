import { MapPin, Calendar, Settings2 } from 'lucide-react'
import { Button } from '../../../components/Button'
import { useNavigate } from 'react-router-dom'

export function HeaderDestinationAndDate() {
  const navigate = useNavigate()

  function changeDestinationAndDate() {
    navigate('/')
  }

  return (
    <header className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between">
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

        <Button variant="secondary" className="w-[13rem]" onClick={changeDestinationAndDate}>
          Alterar local/data
          <Settings2 className="size-5" />
        </Button>
      </div>
    </header>
  )
}
