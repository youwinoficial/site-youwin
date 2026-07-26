"use client"

import { useState, type FormEvent } from "react"
import { MessageCircle, ArrowRight } from "lucide-react"
import { WHATSAPP_NUMBER, whatsappLink } from "@/lib/site"
import { Reveal } from "@/components/reveal"

const PROJECT_TYPES = [
  "Videoclipe",
  "Evento / Aftermovie",
  "Vídeo para Marca",
  "Conteúdo para Redes Sociais",
  "Documentário",
  "Outro",
]

export function Contact() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    whatsapp: "",
    tipo: "",
    mensagem: "",
  })

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const text = [
      "Olá! Vim pelo site da YOUWIN.",
      `Nome: ${form.nome}`,
      `E-mail: ${form.email}`,
      `WhatsApp: ${form.whatsapp}`,
      `Tipo de projeto: ${form.tipo || "Não informado"}`,
      `Mensagem: ${form.mensagem}`,
    ].join("\n")
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    )
  }

  const fieldClass =
    "w-full border border-input bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-primary"

  return (
    <section id="contato" className="relative border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Contato
          </p>
          <h2 className="text-balance font-heading text-3xl font-bold uppercase leading-tight tracking-tight md:text-5xl">
            Vamos criar algo memorável
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Conte sobre o seu projeto e receba um orçamento personalizado. Respondo
            rápido pelo WhatsApp.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-12">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="nome" className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Nome
              </label>
              <input
                id="nome"
                required
                value={form.nome}
                onChange={(e) => setForm({ ...form, nome: e.target.value })}
                placeholder="Seu nome"
                className={fieldClass}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                E-mail
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="voce@email.com"
                className={fieldClass}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="whatsapp" className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                WhatsApp
              </label>
              <input
                id="whatsapp"
                required
                value={form.whatsapp}
                onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                placeholder="(00) 00000-0000"
                className={fieldClass}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="tipo" className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Tipo de Projeto
              </label>
              <select
                id="tipo"
                value={form.tipo}
                onChange={(e) => setForm({ ...form, tipo: e.target.value })}
                className={fieldClass}
              >
                <option value="">Selecione...</option>
                {PROJECT_TYPES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-2 sm:col-span-2">
              <label htmlFor="mensagem" className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Mensagem
              </label>
              <textarea
                id="mensagem"
                required
                rows={4}
                value={form.mensagem}
                onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                placeholder="Conte um pouco sobre o seu projeto..."
                className={`${fieldClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-foreground px-7 py-3.5 text-sm font-semibold text-background transition-opacity hover:opacity-90 sm:col-span-2"
            >
              Enviar Mensagem
              <ArrowRight className="size-4" />
            </button>
          </form>
        </Reveal>

        <Reveal delay={200} className="mt-8">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-3 bg-primary px-7 py-5 text-base font-bold uppercase tracking-wide text-primary-foreground transition-opacity hover:opacity-90"
          >
            <MessageCircle className="size-6" />
            Falar Agora no WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  )
}
