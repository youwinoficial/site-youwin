import { ArrowDown, ArrowUpRight } from "lucide-react"
import { whatsappLink } from "@/lib/site"
import { ShowreelPlayer } from "@/components/showreel-player"

const CREDENTIALS = [
  ["22+", "anos editando histórias"],
  ["7 bi+", "visualizações geradas"],
  ["Grammy", "Latino — indicação"],
]

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-24 md:pt-32">
      <div className="editorial-grid pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 border-x border-border/70 px-4 pb-14 pt-12 md:px-8 md:pb-20 md:pt-20 lg:grid-cols-[1.5fr_0.5fr] lg:gap-20">
          <div>
            <div className="flex items-center gap-3 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
              <span className="h-px w-8 bg-primary" />
              Estúdio de pós-produção · São Paulo
            </div>
            <h1 className="mt-8 max-w-5xl text-balance font-heading text-[clamp(3.4rem,9vw,8.4rem)] font-medium uppercase leading-[0.82] tracking-[-0.045em]">
              Do material
              <span className="block text-outline">bruto à história</span>
              <span className="block text-primary">que fica.</span>
            </h1>
          </div>

          <div className="flex flex-col justify-end border-l border-border/70 pl-6 md:pl-8">
            <p className="text-pretty text-base leading-relaxed text-muted-foreground">
              Montagem, cor, motion e som articulados em uma narrativa precisa para música, marcas e cultura.
            </p>
            <div className="mt-8 flex flex-col gap-3">
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="cut-button group">
                Iniciar um projeto
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a href="#portfolio" className="inline-flex items-center gap-3 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-foreground transition-colors hover:text-primary">
                Ver trabalhos <ArrowDown className="size-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="grid border-x border-t border-border/70 md:grid-cols-3">
          {CREDENTIALS.map(([value, label], index) => (
            <div key={label} className="flex items-end justify-between border-b border-border/70 p-5 md:border-b-0 md:border-r md:p-6 md:last:border-r-0">
              <span className="font-heading text-3xl font-medium uppercase md:text-4xl">{value}</span>
              <span className="max-w-28 text-right text-[0.65rem] uppercase leading-relaxed tracking-[0.16em] text-muted-foreground">{label}</span>
              <span className="sr-only">Credencial {index + 1}</span>
            </div>
          ))}
        </div>

        <div className="border-x border-border/70 px-4 py-8 md:px-8 md:py-12">
          <ShowreelPlayer />
        </div>
      </div>
    </section>
  )
}
