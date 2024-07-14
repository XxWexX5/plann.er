import { FormEvent, useState } from 'react'

import { ArrowRight, UserRoundPlus } from 'lucide-react'

import * as Dialog from '@radix-ui/react-dialog'

import { useNavigate } from 'react-router-dom'
import { ModalInviteGuests } from './components/ModalInviteGuests'
import { ModalConfirmTrip } from './components/ModalConfirmTrip'
import { DestinationDate } from './components/DestinationDate'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

export function CreateTripPage() {
  const navigate = useNavigate()

  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false)
  const [emailsToInvite, setEmailsToInvite] = useState<string[]>([])

  function openGuestsInput() {
    setIsGuestsInputOpen(true)
  }

  function closeGuestsInput() {
    setIsGuestsInputOpen(false)
  }

  function addNewEmailToInvite(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const data = new FormData(event.currentTarget)
    const email = data.get('email')?.toString()

    if (!email) return

    if (emailsToInvite.includes(email)) return

    setEmailsToInvite([...emailsToInvite, email])

    event.currentTarget.reset()
  }

  function removeEmailFromInvites(emailToRemove: string) {
    const emailsFiltered = emailsToInvite.filter((email) => email !== emailToRemove)
    setEmailsToInvite(emailsFiltered)
  }

  function createTrip(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    navigate('/trips/123')
  }

  return (
    <div className="w-full h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="w-full max-w-3xl px-6 text-center space-y-10">
        <Header />

        <div className="space-y-4">
          <DestinationDate
            isGuestsInputOpen={isGuestsInputOpen}
            closeGuestsInput={closeGuestsInput}
            openGuestsInput={openGuestsInput}
          />

          {isGuestsInputOpen && (
            <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
              <Dialog.Root>
                <Dialog.Trigger asChild>
                  <button type="button" className="flex items-center gap-2 flex-1">
                    <UserRoundPlus className="size-5 text-zinc-400" />

                    {emailsToInvite.length > 0 ? (
                      <span className="text-zince-100 text-lg flex-1 text-left">
                        {emailsToInvite.length} pessoa(s) convidada(s)
                      </span>
                    ) : (
                      <span className="text-zince-400 text-lg flex-1 text-left">Quem estará na viagem?</span>
                    )}
                  </button>
                </Dialog.Trigger>

                <ModalInviteGuests
                  emailsToInvite={emailsToInvite}
                  addNewEmailToInvite={addNewEmailToInvite}
                  removeEmailFromInvites={removeEmailFromInvites}
                  openGuestsInput={openGuestsInput}
                />
              </Dialog.Root>

              <Dialog.Root>
                <Dialog.Trigger asChild>
                  <button className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400 transition-colors">
                    Confirmar viagem
                    <ArrowRight className="size-5" />
                  </button>
                </Dialog.Trigger>

                <ModalConfirmTrip createTrip={createTrip} />
              </Dialog.Root>
            </div>
          )}
        </div>

        <Footer />
      </div>
    </div>
  )
}
