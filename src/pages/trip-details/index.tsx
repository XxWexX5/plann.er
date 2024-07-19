import { ModalCreateActivity } from './components/ModalCreateActivity'
import { LinksImportant } from './components/LinksImportant'
import { Guests } from './components/Guests'
import { Activities } from './components/Activities'
import { HeaderDestinationAndDate } from './components/HeaderDestinationAndDate'

import { Plus, UserCog } from 'lucide-react'
import { Button } from '../../components/Button'

export function TripDetailsPage() {
  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
      <HeaderDestinationAndDate />

      <main className="flex gap-16 px-4">
        <section className="flex-1 space-y-6">
          <header className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Atividades</h2>

            <ModalCreateActivity>
              <Button>
                <Plus className="size-5" />
                Cadastrar atividade
              </Button>
            </ModalCreateActivity>
          </header>

          <Activities />
        </section>

        <aside className="w-80 space-y-6">
          <LinksImportant />

          <div className="w-full h-px bg-zinc-800"></div>

          <div className="space-y-6">
            <h3 className="font-semibold text-xl">Convidados</h3>

            <Guests />

            <Button variant="secondary" className="w-full h-11">
              <UserCog className="size-5" />
              Gerenciar convidados
            </Button>
          </div>
        </aside>
      </main>
    </div>
  )
}
