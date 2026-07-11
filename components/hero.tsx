"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { whatsappLink } from "@/lib/site"
import { ShowreelPlayer } from "@/components/showreel-player"

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
            src="/images/youwin-marcadagua.png"
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

        {/* Área do Showreel — toca os vídeos do portfólio aleatoriamente */}
        <ShowreelPlayer />
      </div>
    </section>
  )
}
