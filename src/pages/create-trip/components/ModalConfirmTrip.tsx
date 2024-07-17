import { FormEvent, ReactNode } from 'react'

import * as Dialog from '@radix-ui/react-dialog'

import { Mail, User, X } from 'lucide-react'

interface ModalConfirmTripProps {
  createTrip: (event: FormEvent<HTMLFormElement>) => void
  children: ReactNode
}

export function ModalConfirmTrip({ createTrip, children }: ModalConfirmTripProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 data-[state=open]:animate-overlayShow fixed inset-0" />

        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[640px] translate-x-[-50%] translate-y-[-50%] rounded-xl bg-zinc-900 py-5 px-6 shadow-shape focus:outline-none space-y-5">
          <header className="space-y-2">
            <Dialog.Title className="text-lg font-semibold">Confirmar criação da viagem</Dialog.Title>

            <Dialog.Description className="text-sm text-zinc-400">
              Para concluir a criação da viagem para{' '}
              <strong className="text-zinc-100 font-semibold">Florianópolis, Brasil</strong> nas datas de{' '}
              <strong className="text-zinc-100 font-semibold">16 a 27 de Agosto de 2024</strong> preencha seus dados
              abaixo:
            </Dialog.Description>
          </header>

          <main>
            <form onSubmit={createTrip} className="flex flex-col gap-2">
              <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                <User className="text-zinc-400 size-5" />

                <input
                  type="email"
                  name="email"
                  placeholder="Seu nome completo"
                  className="w-full bg-transparent text-lg placeholder-zinc-400 outline-0"
                />
              </div>

              <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                <Mail className="text-zinc-400 size-5" />

                <input
                  type="email"
                  name="email"
                  placeholder="Seu e-mail pessoal"
                  className="w-full bg-transparent text-lg placeholder-zinc-400 outline-0"
                />
              </div>

              <button
                type="submit"
                className="mt-4 w-full bg-lime-300 text-lime-950 rounded-lg px-5 h-11 font-medium flex items-center justify-center gap-2 hover:bg-lime-400 transition-colors">
                Confirmar criação da viagem
              </button>
            </form>
          </main>

          <Dialog.Close asChild>
            <button
              className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[0] right-[1rem] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Close">
              <X className="size-5 text-zinc-100" />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
