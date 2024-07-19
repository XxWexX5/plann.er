import { ReactNode } from 'react'

import * as Dialog from '@radix-ui/react-dialog'

import { Clock, Tag, X } from 'lucide-react'
import { Button } from '../../../components/Button'

interface ModalConfirmTripProps {
  children: ReactNode
}

export function ModalCreateActivity({ children }: ModalConfirmTripProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 data-[state=open]:animate-overlayShow fixed inset-0" />

        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[640px] translate-x-[-50%] translate-y-[-50%] rounded-xl bg-zinc-900 py-5 px-6 shadow-shape focus:outline-none space-y-5">
          <header className="space-y-2">
            <Dialog.Title className="text-lg font-semibold">Cadastrar atividade</Dialog.Title>

            <Dialog.Description className="text-sm text-zinc-400">
              Todos convidados podem visualizar as atividades.
            </Dialog.Description>
          </header>

          <main>
            <form className="flex flex-col gap-2">
              <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                <Tag className="text-zinc-400 size-5" />

                <input
                  type="email"
                  name="email"
                  placeholder="Qual a atividade?"
                  className="w-full bg-transparent text-lg placeholder-zinc-400 outline-0"
                />
              </div>

              <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                <Clock className="text-zinc-400 size-5" />

                <input
                  type="datetime-local"
                  name="occurs_at"
                  placeholder="Data e horário da atividade"
                  className="w-full bg-transparent text-lg placeholder-zinc-400 outline-0"
                />
              </div>

              <Button type="submit" className="mt-4">
                Salvar atividade
              </Button>
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
