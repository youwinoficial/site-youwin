"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  as?: "div" | "section" | "li" | "article"
}

export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const Tag = as as keyof JSX.IntrinsicElements

  return (
    <Tag
      // @ts-expect-error ref typing across polymorphic tag
      ref={ref}
      className={cn("reveal", visible && "is-visible", "motion-reduce:animate-none motion-reduce:opacity-100", className)}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}
