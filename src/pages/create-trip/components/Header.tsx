import { Logo } from '../../../assets/images/logo'

export function Header() {
  return (
    <div className="flex flex-col items-center gap-3">
      <Logo />

      <p className="text-zinc-300 text-lg">Convide seus amigos e planeje sua próxima viagem!</p>
    </div>
  )
}
