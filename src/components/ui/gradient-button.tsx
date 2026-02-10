"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const gradientButtonVariants = cva(
  [
    "gradient-button",
    "inline-flex items-center justify-center gap-2",
    "rounded-[11px]",
    "text-sm leading-5 font-medium text-white",
    "font-sans",
    "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
    "disabled:pointer-events-none disabled:opacity-50",
    "hover:scale-[1.02] active:scale-[0.98]",
    "transition-transform duration-200 ease-out",
  ],
  {
    variants: {
      variant: {
        default: "",
        variant: "gradient-button-variant",
      },
      size: {
        default: "h-11 min-w-[132px] px-6",
        sm: "h-9 min-w-[100px] px-4 text-xs",
        lg: "h-12 min-w-[160px] px-9 text-base",
        icon: "h-11 w-11 min-w-0 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface GradientButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof gradientButtonVariants> {
  asChild?: boolean
}

const GradientButton = React.forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(gradientButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
GradientButton.displayName = "GradientButton"

export { GradientButton, gradientButtonVariants }
