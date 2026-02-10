"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { motion, useAnimation } from "framer-motion"
import { useEffect, useState, useCallback } from "react"
import { Button } from "@/components/ui/button"

interface MagnetizeButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  particleCount?: number
  attractRadius?: number
  asChild?: boolean
  size?: "default" | "sm" | "lg" | "icon"
  children?: React.ReactNode
}

interface Particle {
  id: number
  x: number
  y: number
}

function MagnetizeButton({
  className,
  particleCount = 10,
  attractRadius = 50,
  asChild = false,
  size = "default",
  children,
  ...props
}: MagnetizeButtonProps) {
  const [isAttracting, setIsAttracting] = useState(false)
  const [particles, setParticles] = useState<Particle[]>([])
  const particlesControl = useAnimation()

  useEffect(() => {
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 200 - 100,
      y: Math.random() * 200 - 100,
    }))
    setParticles(newParticles)
  }, [particleCount])

  const handleInteractionStart = useCallback(async () => {
    setIsAttracting(true)
    await particlesControl.start({
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10,
      },
    })
  }, [particlesControl])

  const handleInteractionEnd = useCallback(async () => {
    setIsAttracting(false)
    await particlesControl.start((i) => ({
      x: particles[i]?.x ?? 0,
      y: particles[i]?.y ?? 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    }))
  }, [particlesControl, particles])

  const sizeClasses = {
    sm: "h-9 min-w-[100px] px-4 text-xs",
    default: "h-11 min-w-[132px] px-6 text-sm",
    lg: "h-12 min-w-[160px] px-8 text-sm",
    icon: "h-11 w-11 min-w-0 p-0",
  }

  if (asChild) {
    return (
      <div
        className={cn(
          "relative inline-flex touch-none overflow-visible",
          className
        )}
        onMouseEnter={handleInteractionStart}
        onMouseLeave={handleInteractionEnd}
        onTouchStart={handleInteractionStart}
        onTouchEnd={handleInteractionEnd}
      >
        {particles.map((_, index) => (
          <motion.div
            key={index}
            custom={index}
            initial={{ x: particles[index]?.x ?? 0, y: particles[index]?.y ?? 0 }}
            animate={particlesControl}
            className={cn(
              "pointer-events-none absolute left-1/2 top-1/2 h-1 w-1 rounded-full",
              "bg-primary",
              "transition-opacity duration-300",
              isAttracting ? "opacity-80" : "opacity-20"
            )}
          />
        ))}
        <Button
          asChild
          className={cn(
            "relative z-10 font-mono",
            "bg-primary/10 hover:bg-primary/20",
            "text-primary",
            "border border-primary/30 hover:border-primary/60",
            "rounded transition-all duration-300",
            sizeClasses[size],
          )}
          {...(props as any)}
        >
          {children}
        </Button>
      </div>
    )
  }

  return (
    <Button
      className={cn(
        "relative touch-none overflow-visible font-mono",
        "bg-primary/10 hover:bg-primary/20",
        "text-primary",
        "border border-primary/30 hover:border-primary/60",
        "rounded transition-all duration-300",
        sizeClasses[size],
        className
      )}
      onMouseEnter={handleInteractionStart}
      onMouseLeave={handleInteractionEnd}
      onTouchStart={handleInteractionStart}
      onTouchEnd={handleInteractionEnd}
      {...props}
    >
      {particles.map((_, index) => (
        <motion.div
          key={index}
          custom={index}
          initial={{ x: particles[index]?.x ?? 0, y: particles[index]?.y ?? 0 }}
          animate={particlesControl}
          className={cn(
            "pointer-events-none absolute h-1 w-1 rounded-full",
            "bg-primary",
            "transition-opacity duration-300",
            isAttracting ? "opacity-80" : "opacity-20"
          )}
        />
      ))}
      <span className="relative z-10 flex w-full items-center justify-center gap-2">
        {children}
      </span>
    </Button>
  )
}

export { MagnetizeButton }
