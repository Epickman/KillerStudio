import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, variant = 'primary', size = 'md', ...props }, ref) => {
    const variants = {
      primary: 'bg-ksf-accent hover:bg-ksf-accent-hover text-white',
      secondary: 'bg-transparent border border-ksf-text text-ksf-text hover:bg-ksf-text hover:text-black',
      ghost: 'bg-transparent text-ksf-text hover:text-ksf-accent',
      danger: 'bg-red-900/20 border border-red-700 text-red-400 hover:bg-red-900/40',
    }
    const sizes = {
      sm: 'px-4 py-2 text-xs',
      md: 'px-6 py-3 text-sm',
      lg: 'px-8 py-4 text-base',
    }
    return (
      <button
        ref={ref}
        className={cn(
          'tracking-widest uppercase font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)
Button.displayName = 'Button'
