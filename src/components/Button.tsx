import { ComponentProps, ReactNode } from 'react'

import { tv, VariantProps } from 'tailwind-variants'
import { twMerge } from 'tailwind-merge'

const ButtonVariants = tv({
  base: 'rounded-lg px-5 py-2 font-medium flex items-center justify-center gap-2 transition-colors',

  variants: {
    variant: {
      primary: 'bg-lime-300 text-lime-950 hover:bg-lime-400',
      secondary: 'bg-zinc-800 text-zinc-200 hover:bg-zinc-700',
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
})

interface ButtonProps extends ComponentProps<'button'>, VariantProps<typeof ButtonVariants> {
  children: ReactNode
}

export function Button({ children, className, variant, ...props }: ButtonProps) {
  return (
    <button className={twMerge(ButtonVariants({ variant }), `${className}`)} {...props}>
      {children}
    </button>
  )
}
