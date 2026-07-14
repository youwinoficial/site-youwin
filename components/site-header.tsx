"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { NAV_LINKS, whatsappLink } from "@/lib/site"
import { Wordmark } from "@/components/wordmark"

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300", scrolled || open ? "border-border/70 bg-background/90 backdrop-blur-xl" : "border-transparent bg-background/40")}>
      <div className="mx-auto flex h-16 max-w-7xl items-center border-x border-border/50 px-5 md:h-20 md:px-8">
        <a href="#home" className="shrink-0" aria-label="YOUWIN — início"><Wordmark className="text-2xl md:text-[1.7rem]" /></a>
        <nav className="ml-auto hidden items-center md:flex" aria-label="Principal">
          {NAV_LINKS.map((link, index) => (
            <a key={link.href} href={link.href} className="group flex h-20 items-center gap-2 border-l border-border/60 px-5 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground">
              <span className="font-mono text-[0.55rem] text-primary">0{index + 1}</span>{link.label}
            </a>
          ))}
        </nav>
        <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="ml-4 hidden border border-primary px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-foreground transition-colors hover:bg-primary hover:text-primary-foreground md:inline-flex">Novo projeto</a>
        <button type="button" onClick={() => setOpen((value) => !value)} className="ml-auto inline-flex size-10 items-center justify-center text-foreground md:hidden" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open}>{open ? <X className="size-5" /> : <Menu className="size-5" />}</button>
      </div>

      <div className={cn("fixed inset-0 top-16 z-40 bg-background transition duration-300 md:hidden", open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-3 opacity-0")}>
        <nav className="flex h-full flex-col px-5 py-8" aria-label="Mobile">
          {NAV_LINKS.map((link, index) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="flex items-baseline gap-5 border-b border-border/70 py-5 font-heading text-4xl font-medium uppercase"><span className="font-mono text-xs text-primary">0{index + 1}</span>{link.label}</a>
          ))}
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="cut-button mt-8 justify-center">Iniciar um projeto</a>
        </nav>
      </div>
    </header>
  )
}
