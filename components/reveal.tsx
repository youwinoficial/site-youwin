"use client"

import { createElement, useEffect, useRef, useState, type ReactNode } from "react"
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
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true)
      return
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        observer.disconnect()
      }
    }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" })
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return createElement(
    as,
    {
      ref,
      className: cn("reveal", visible && "is-visible", className),
      style: { transitionDelay: `${delay}ms` },
    },
    children,
  )
}
