"use client"

import Image from "next/image"
import { Play, ArrowRight } from "lucide-react"
import { whatsappLink } from "@/lib/site"

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 md:pt-36">
      {/* Glow de fundo sutil */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-[480px] w-[820px] -translate-x-1/2 rounded-full bg-primary/15 blur-[140px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <span className="inline-flex items-center gap-2 border border-border px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            <span className="size-1.5 rounded-full bg-primary" />
            Estúdio de Edição & Pós-Produção
          </span>

          <Image
            src="/images/youwin-logo.jpg"
            alt="YOUWIN"
            width={560}
            height={240}
            priority
            className="h-auto w-56 md:w-80"
          />

          <h1 className="max-w-4xl text-balance font-heading text-4xl font-bold uppercase leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Edição Profissional de Vídeos para{" "}
            <span className="text-primary">Marcas, Criadores</span> e Eventos
          </h1>

          <p className="max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            Transformo gravações comuns em vídeos profissionais através de edição,
            colorização, motion graphics, sound design e pós-produção criativa.
          </p>

          <div className="mt-2 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto"
            >
              Solicitar Orçamento no WhatsApp
              <ArrowRight className="size-4" />
            </a>
            <a
              href="#portfolio"
              className="inline-flex w-full items-center justify-center gap-2 border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-foreground/40 hover:bg-secondary sm:w-auto"
            >
              Ver Portfólio
            </a>
          </div>
        </div>

        {/* Área do Demo Reel */}
        <div className="group relative mt-14 aspect-video w-full overflow-hidden border border-border md:mt-20">
          <Image
            src="/images/hero-reel.png"
            alt="Demo Reel YOUWIN"
            fill
            priority
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-background/30" />

          <button
            type="button"
            className="absolute inset-0 flex flex-col items-center justify-center gap-4"
            aria-label="Reproduzir Demo Reel"
          >
            <span className="flex size-20 items-center justify-center rounded-full bg-primary/90 text-primary-foreground shadow-2xl transition-transform duration-300 group-hover:scale-110 md:size-24">
              <Play className="size-8 translate-x-0.5 fill-current md:size-10" />
            </span>
            <span className="font-heading text-sm font-medium uppercase tracking-[0.25em] text-foreground/90">
              Assistir Demo Reel
            </span>
          </button>

          <div className="absolute bottom-5 left-5 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-foreground/70">
            <span className="size-2 animate-pulse rounded-full bg-primary" />
            Showreel 2026
          </div>
        </div>
      </div>
    </section>
  )
}
