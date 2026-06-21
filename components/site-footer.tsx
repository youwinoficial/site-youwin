import { AtSign, Film, MessageCircle } from "lucide-react"
import { NAV_LINKS, whatsappLink } from "@/lib/site"
import { Wordmark } from "@/components/wordmark"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row">
          <div className="max-w-sm">
            <Wordmark className="text-3xl" />
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Edição profissional de vídeos, pós-produção e conteúdo criativo para
              marcas, criadores e eventos.
            </p>
          </div>

          <nav className="flex flex-col gap-3" aria-label="Rodapé">
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Navegação
            </span>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-foreground/80 transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Redes
            </span>
            <div className="flex items-center gap-3">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex size-10 items-center justify-center border border-border text-foreground/80 transition-colors hover:border-primary hover:text-primary"
              >
                <MessageCircle className="size-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex size-10 items-center justify-center border border-border text-foreground/80 transition-colors hover:border-primary hover:text-primary"
              >
                <AtSign className="size-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="flex size-10 items-center justify-center border border-border text-foreground/80 transition-colors hover:border-primary hover:text-primary"
              >
                <Film className="size-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} YOUWIN. Todos os direitos reservados.</p>
          <p>Edição Profissional de Vídeos</p>
        </div>
      </div>
    </footer>
  )
}
