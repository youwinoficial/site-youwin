import { ArrowUp, AtSign, MessageCircle } from "lucide-react"
import { INSTAGRAM_URL, NAV_LINKS, whatsappLink } from "@/lib/site"
import { Wordmark } from "@/components/wordmark"

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 bg-card">
      <div className="mx-auto max-w-7xl border-x border-border/70 px-4 md:px-8">
        <div className="grid gap-10 border-b border-border/70 py-14 md:grid-cols-[1.3fr_0.7fr] md:items-end md:py-20">
          <div>
            <p className="section-kicker">YOUWIN · Pós-produção</p>
            <Wordmark className="mt-6 text-[clamp(4rem,14vw,11rem)] leading-none tracking-[-0.06em]" />
          </div>
          <p className="max-w-sm text-pretty leading-relaxed text-muted-foreground md:justify-self-end">Histórias montadas com intenção, ritmo e acabamento — de São Paulo para qualquer tela.</p>
        </div>

        <div className="grid gap-8 py-10 md:grid-cols-3 md:items-center">
          <nav className="flex flex-wrap gap-x-6 gap-y-3" aria-label="Rodapé">{NAV_LINKS.map((link) => <a key={link.href} href={link.href} className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-primary">{link.label}</a>)}</nav>
          <div className="flex items-center gap-3 md:justify-center">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="social-link"><MessageCircle className="size-4" /></a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-link"><AtSign className="size-4" /></a>
          </div>
          <a href="#home" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-primary md:justify-self-end">Voltar ao início <ArrowUp className="size-4" /></a>
        </div>

        <div className="flex flex-col gap-2 border-t border-border/70 py-5 text-[0.62rem] uppercase tracking-[0.14em] text-muted-foreground sm:flex-row sm:justify-between"><p>© {new Date().getFullYear()} YOUWIN</p><p>Edição · Color · Motion · Sound</p></div>
      </div>
    </footer>
  )
}
