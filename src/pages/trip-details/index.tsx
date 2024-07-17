import { Calendar, CircleCheck, CircleDashed, Link2, MapPin, Plus, Settings2, UserCog } from 'lucide-react'

export function TripDetailsPage() {
  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
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

          <button className="bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center justify-center gap-2 hover:bg-zinc-700 transition-colors">
            Alterar local/data
            <Settings2 className="size-5" />
          </button>
        </div>
      </header>

      <main className="flex gap-16 px-4">
        <section className="flex-1 space-y-6">
          <header className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Atividades</h2>

            <button className=" bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center justify-center gap-2 hover:bg-lime-400 transition-colors">
              <Plus className="size-5" />
              Cadastrar atividade
            </button>
          </header>

          <div className="space-y-8">
            <div className="space-y-2.5">
              <div className="flex gap-2 items-baseline">
                <span className="text-xl text-zinc-300 font-semibold">Dia 17</span>
                <span className="text-xs text-zinc-500">Sábado</span>
              </div>
              <p className="text-zinc-500 text-sm">Nenhuma atividade cadastrada nessa data.</p>
            </div>

            <div className="space-y-2.5">
              <div className="flex gap-2 items-baseline">
                <span className="text-xl text-zinc-300 font-semibold">Dia 18</span>
                <span className="text-xs text-zinc-500">Domingo</span>
              </div>

              <div className="space-y-2.5">
                <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                  <CircleCheck className="size-5 text-lime-300" />

                  <span className="text-zinc-100">Corrida de Kart</span>

                  <p className="text-zinc-400 text-sm ml-auto">14:00h</p>
                </div>
              </div>

              <div className="space-y-2.5">
                <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                  <CircleCheck className="size-5 text-lime-300" />

                  <span className="text-zinc-100">Corrida de Kart</span>

                  <p className="text-zinc-400 text-sm ml-auto">14:00h</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <aside className="w-80 space-y-6">
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

            <button className="w-full bg-zinc-800 text-zinc-200 rounded-lg px-5 h-11 font-medium flex items-center justify-center gap-2 hover:bg-zinc-700 transition-colors">
              Alterar local/data
              <Settings2 className="size-5" />
            </button>
          </div>

          <div className="w-full h-px bg-zinc-800"></div>

          <div className="space-y-6">
            <h3 className="font-semibold text-xl">Convidados</h3>

            <div className="space-y-5">
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <p className="font-medium text-zinc-100">Jessica White</p>

                  <p className="block text-sm text-zinc-400 truncate">jessica.white44@yahoo.com</p>
                </div>

                <CircleDashed className="text-zinc-400 size-5 shrink-0" />
              </div>

              <div className="flex items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <p className="font-medium text-zinc-100">Dr. Rita Pacocha</p>

                  <p className="block text-sm text-zinc-400 truncate">lacy.stiedemann@gmail.com</p>
                </div>

                <CircleCheck className="text-lime-300 size-5 shrink-0" />
              </div>
            </div>

            <button className="w-full bg-zinc-800 text-zinc-200 rounded-lg px-5 h-11 font-medium flex items-center justify-center gap-2 hover:bg-zinc-700 transition-colors">
              <UserCog className="size-5" />
              Gerenciar convidados
            </button>
          </div>
        </aside>
      </main>
    </div>
  )
}
