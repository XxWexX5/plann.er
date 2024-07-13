import { FormEvent, useState } from 'react';

import { MapPin, Calendar, ArrowRight, UserRoundPlus, Settings2, X, AtSign, Plus } from 'lucide-react'

import * as Dialog from '@radix-ui/react-dialog';

import { Logo } from './assets/images/logo'

export function App() {
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);
  const [emailsToInvite, setEmailsToInvite] = useState<string[]>([]);

  function openGuestsInput() {
    setIsGuestsInputOpen(true)
  }

  function closeGuestsInput() {
    setIsGuestsInputOpen(false)
  }

  function addNewEmailToInvite(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const email = data.get('email')?.toString();

    if(!email) return;

    if(emailsToInvite.includes(email)) return
    
    setEmailsToInvite([...emailsToInvite, email]);

    event.currentTarget.reset();
  }

  function removeEmailFromInvites(emailToRemove: string) {
    const emailsFiltered = emailsToInvite.filter(email => email !== emailToRemove);
    setEmailsToInvite(emailsFiltered);
  }

  return (
    <div className="w-full h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="w-full max-w-3xl px-6 text-center space-y-10">
        <div className='flex flex-col items-center gap-3'>
          <Logo />
          <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua próxima viagem!</p>
        </div>

        <div className='space-y-4'>
          <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
            <div className='flex items-center gap-2 flex-1'>
              <MapPin className='size-5 text-zinc-400' />

              <input 
                disabled={isGuestsInputOpen}
                type="text"
                placeholder="Para onde você vai?"
                className="w-full bg-transparent text-lg placeholder-zinc-400 outline-0"
              />
            </div>

            <div className='flex items-center gap-2'>
              <Calendar className='size-5 text-zinc-400' />

              <input 
                disabled={isGuestsInputOpen}
                type="text"
                placeholder="Quando"
                className="bg-transparent w-40 outline-0"
              />
            </div>

            <div className='w-px h-6 bg-zinc-800'></div>

            {
              isGuestsInputOpen ? (
                <button
                  onClick={closeGuestsInput}
                  className='w-52 bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center justify-center gap-2 hover:bg-zinc-700 transition-colors'
                >
                  Alterar local/data

                  <Settings2 className='size-5' />
                </button>
              ) : (
                <button
                  onClick={openGuestsInput}
                  className='w-52 bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center justify-center gap-2 hover:bg-lime-400 transition-colors'
                >
                  Continuar

                  <ArrowRight className='size-5' />
                </button>
              )
            }
            
          </div>

          {
            isGuestsInputOpen && (
              <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
                <Dialog.Root>
                  <Dialog.Trigger asChild>

                  <button type='button' className='flex items-center gap-2 flex-1'>
                    <UserRoundPlus className='size-5 text-zinc-400' />

                    <span className="text-zince-400 text-lg flex-1 text-left">
                      Quem estará na viagem?
                    </span>
                  </button>

                  </Dialog.Trigger>

                  <Dialog.Portal>
                    <Dialog.Overlay className="bg-black/60 data-[state=open]:animate-overlayShow fixed inset-0" />
                    
                    <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[640px] translate-x-[-50%] translate-y-[-50%] rounded-xl bg-zinc-900 py-5 px-6 shadow-shape focus:outline-none space-y-5">
                      <header className='space-y-2'>
                        <Dialog.Title className="text-lg font-semibold">
                          Selecionar convidados
                        </Dialog.Title>

                        <Dialog.Description className="text-sm text-zinc-400">
                          Os convidados irão receber e-mails para confirmar a participação na viagem.
                        </Dialog.Description>
                      </header>
                      
                      <main className='flex flex-wrap gap-2'>
                        {emailsToInvite.length === 0 && <p className='text-sm text-zinc-400 block'>Nenhum email cadastrado!</p>}

                        {
                          emailsToInvite.map(email => (
                            <div key={email} className='py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2'>
                              <span className='text-zinc-300'>{email}</span>

                              <button 
                                type='button' 
                                onClick={() => removeEmailFromInvites(email)}
                              >
                                <X
                                  className='size-4 text-zinc-400'
                                />
                              </button>
                            </div>
                          ))
                        }
                      </main>

                      <div className='w-full h-px bg-zinc-800'></div>

                      <footer>
                        <form onSubmit={addNewEmailToInvite} className='p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2'>
                          <div className='px-2 flex items-center flex-1 gap-2'>
                            <AtSign className='text-zinc-400 size-5' />

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
                            className='bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center justify-center gap-2 hover:bg-lime-400 transition-colors'
                          >
                            Convidar

                            <Plus className='size-5' />
                          </button>
                        </form>
                      </footer>
                      
                      <Dialog.Close asChild>
                        <button
                          className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[0] right-[1rem] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                          aria-label="Close"
                        >
                          <X className='size-5 text-zinc-100' />
                        </button>
                      </Dialog.Close>
                    </Dialog.Content>
                  </Dialog.Portal>
                </Dialog.Root>

                <Dialog.Root>
                  <Dialog.Trigger asChild>
                    <button
                    onClick={openGuestsInput}
                    className='bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400 transition-colors'
                  >
                      Confirmar viagem

                      <ArrowRight className='size-5' />
                    </button>
                  </Dialog.Trigger>

                  <Dialog.Portal>
                    <Dialog.Overlay className="bg-black/60 data-[state=open]:animate-overlayShow fixed inset-0" />
                    
                    <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[640px] translate-x-[-50%] translate-y-[-50%] rounded-xl bg-zinc-900 py-5 px-6 shadow-shape focus:outline-none space-y-5">
                      <header className='space-y-2'>
                        <Dialog.Title className="text-lg font-semibold">
                          Selecionar convidados
                        </Dialog.Title>

                        <Dialog.Description className="text-sm text-zinc-400">
                          Os convidados irão receber e-mails para confirmar a participação na viagem.
                        </Dialog.Description>
                      </header>
                      
                      <main className='flex flex-wrap gap-2'>
                        {emailsToInvite.length === 0 && <p className='text-sm text-zinc-400 block'>Nenhum email cadastrado!</p>}

                        {
                          emailsToInvite.map(email => (
                            <div key={email} className='py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2'>
                              <span className='text-zinc-300'>{email}</span>

                              <button 
                                type='button' 
                                onClick={() => removeEmailFromInvites(email)}
                              >
                                <X
                                  className='size-4 text-zinc-400'
                                />
                              </button>
                            </div>
                          ))
                        }
                      </main>

                      <div className='w-full h-px bg-zinc-800'></div>

                      <footer>
                        <form onSubmit={addNewEmailToInvite} className='p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2'>
                          <div className='px-2 flex items-center flex-1 gap-2'>
                            <AtSign className='text-zinc-400 size-5' />

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
                            className='bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center justify-center gap-2 hover:bg-lime-400 transition-colors'
                          >
                            Convidar

                            <Plus className='size-5' />
                          </button>
                        </form>
                      </footer>
                      
                      <Dialog.Close asChild>
                        <button
                          className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[0] right-[1rem] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                          aria-label="Close"
                        >
                          <X className='size-5 text-zinc-100' />
                        </button>
                      </Dialog.Close>
                    </Dialog.Content>
                  </Dialog.Portal>
                </Dialog.Root>
                
              </div>
            )
          }
        </div>
        
        <p className="text-sm text-zinc-500">Ao planejar sua viagem pela plann.er você automaticamente concorda <br />
        com nossos <a href="#" className="text-zinc-300 underline">termos de uso</a> e <a href="#" className="text-zinc-300 underline">políticas de privacidade</a>.</p>
      </div>
    </div>
  )
}
