import { CircleDashed, CircleCheck } from 'lucide-react'

export function Guests() {
  return (
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
  )
}
