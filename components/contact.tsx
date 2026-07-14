"use client"

import { useState, type FormEvent } from "react"
import { ArrowUpRight, MessageCircle } from "lucide-react"
import { WHATSAPP_NUMBER } from "@/lib/site"
import { Reveal } from "@/components/reveal"

const PROJECT_TYPES = ["Videoclipe", "Publicidade", "Conteúdo para redes sociais", "Documentário", "Evento / Aftermovie", "Outro"]

export function Contact() {
  const [form, setForm] = useState({ nome: "", tipo: "", prazo: "", mensagem: "" })

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    const text = ["Olá! Vim pelo site da YOUWIN e gostaria de iniciar um projeto.", `Nome: ${form.nome}`, `Tipo de projeto: ${form.tipo || "Não informado"}`, `Prazo: ${form.prazo || "A definir"}`, `Briefing: ${form.mensagem}`].join("\n")
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer")
  }

  const fieldClass = "w-full border-b border-border bg-transparent px-0 py-4 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"

  return (
    <section id="contato" className="section-shell">
      <div className="mx-auto max-w-7xl border-x border-border/70 px-4 py-24 md:px-8 md:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <p className="section-kicker">04 · Próximo corte</p>
            <h2 className="section-title mt-5">Tem uma história<br /><span className="text-primary">para montar?</span></h2>
            <p className="mt-7 max-w-md text-pretty leading-relaxed text-muted-foreground">Preencha o essencial. O formulário prepara uma mensagem organizada e abre a conversa diretamente no WhatsApp.</p>
            <div className="mt-10 flex items-center gap-3 border-t border-border/70 pt-6 text-xs uppercase tracking-[0.16em] text-muted-foreground"><MessageCircle className="size-4 text-primary" /> Resposta direta pelo WhatsApp</div>
          </Reveal>

          <Reveal delay={120}>
            <form onSubmit={handleSubmit} className="border-t border-border/70">
              <label className="block border-b border-border/70 py-5" htmlFor="nome"><span className="field-label">01 · Seu nome</span><input id="nome" required value={form.nome} onChange={(event) => setForm({ ...form, nome: event.target.value })} placeholder="Como posso chamar você?" className={fieldClass} /></label>
              <div className="grid sm:grid-cols-2">
                <label className="block border-b border-border/70 py-5 sm:border-r sm:pr-6" htmlFor="tipo"><span className="field-label">02 · Tipo de projeto</span><select id="tipo" required value={form.tipo} onChange={(event) => setForm({ ...form, tipo: event.target.value })} className={fieldClass}><option value="">Selecione</option>{PROJECT_TYPES.map((type) => <option key={type} value={type}>{type}</option>)}</select></label>
                <label className="block border-b border-border/70 py-5 sm:pl-6" htmlFor="prazo"><span className="field-label">03 · Prazo desejado</span><input id="prazo" value={form.prazo} onChange={(event) => setForm({ ...form, prazo: event.target.value })} placeholder="Ex.: 30 dias" className={fieldClass} /></label>
              </div>
              <label className="block border-b border-border/70 py-5" htmlFor="mensagem"><span className="field-label">04 · Briefing</span><textarea id="mensagem" required rows={4} value={form.mensagem} onChange={(event) => setForm({ ...form, mensagem: event.target.value })} placeholder="Conte a ideia, duração e formatos necessários." className={`${fieldClass} resize-none`} /></label>
              <button type="submit" className="cut-button group mt-7 w-full justify-between sm:w-auto">Preparar mensagem <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
