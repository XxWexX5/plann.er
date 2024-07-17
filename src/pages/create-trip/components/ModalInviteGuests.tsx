import { FormEvent, ReactNode } from 'react'

import * as Dialog from '@radix-ui/react-dialog'

import { AtSign, Plus, X } from 'lucide-react'

interface ModalInviteGuestsProps {
  emailsToInvite: string[]
  addNewEmailToInvite: (event: FormEvent<HTMLFormElement>) => void
  removeEmailFromInvites: (email: string) => void
  openGuestsInput: () => void
  children: ReactNode
}

export function ModalInviteGuests({
  emailsToInvite,
  addNewEmailToInvite,
  removeEmailFromInvites,
  openGuestsInput,
  children,
}: ModalInviteGuestsProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger>{children}</Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 data-[state=open]:animate-overlayShow fixed inset-0" />

        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[640px] translate-x-[-50%] translate-y-[-50%] rounded-xl bg-zinc-900 py-5 px-6 shadow-shape focus:outline-none space-y-5">
          <header className="space-y-2">
            <Dialog.Title className="text-lg font-semibold">Selecionar convidados</Dialog.Title>

            <Dialog.Description className="text-sm text-zinc-400">
              Os convidados irão receber e-mails para confirmar a participação na viagem.
            </Dialog.Description>
          </header>

          <main className="flex flex-wrap gap-2">
            {emailsToInvite.length === 0 && <p className="text-sm text-zinc-400 block">Nenhum email cadastrado!</p>}

            {emailsToInvite.map((email) => (
              <div key={email} className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2">
                <span className="text-zinc-300">{email}</span>

                <button type="button" onClick={() => removeEmailFromInvites(email)}>
                  <X className="size-4 text-zinc-400" />
                </button>
              </div>
            ))}
          </main>

          <div className="w-full h-px bg-zinc-800"></div>

          <footer>
            <form
              onSubmit={addNewEmailToInvite}
              className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
              <div className="px-2 flex items-center flex-1 gap-2">
                <AtSign className="text-zinc-400 size-5" />

                <input
                  type="email"
                  name="email"
                  placeholder="Digite o e-mail do convidado"
                  className="w-full bg-transparent text-lg placeholder-zinc-400 outline-0"
                />
              </div>

              <button
                type="submit"
                onClick={openGuestsInput}
                className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center justify-center gap-2 hover:bg-lime-400 transition-colors">
                Convidar
                <Plus className="size-5" />
              </button>
            </form>
          </footer>

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
