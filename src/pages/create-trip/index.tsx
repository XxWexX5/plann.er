import { FormEvent, useState } from 'react'

import { ArrowRight, UserRoundPlus } from 'lucide-react'

import { useNavigate } from 'react-router-dom'
import { ModalInviteGuests } from './components/ModalInviteGuests'
import { ModalConfirmTrip } from './components/ModalConfirmTrip'
import { DestinationDate } from './components/DestinationDate'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Button } from '../../components/Button'

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
            <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center justify-between shadow-shape gap-3">
              <ModalInviteGuests
                emailsToInvite={emailsToInvite}
                addNewEmailToInvite={addNewEmailToInvite}
                removeEmailFromInvites={removeEmailFromInvites}
                openGuestsInput={openGuestsInput}>
                <Button type="button" variant="secondary">
                  <UserRoundPlus className="size-5 text-zinc-400" />

                  {emailsToInvite.length > 0 ? (
                    <span className="text-zinc-100 text-lg flex-1 text-left">
                      {emailsToInvite.length} pessoa(s) convidada(s)
                    </span>
                  ) : (
                    <span className="text-zinc-100 text-lg flex-1 text-left">Quem estará na viagem?</span>
                  )}
                </Button>
              </ModalInviteGuests>

              <ModalConfirmTrip createTrip={createTrip}>
                <Button>
                  Confirmar viagem
                  <ArrowRight className="size-5" />
                </Button>
              </ModalConfirmTrip>
            </div>
          )}
        </div>

        <Footer />
      </div>
    </div>
  )
}
