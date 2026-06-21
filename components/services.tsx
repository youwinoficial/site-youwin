import { Scissors, Palette, Sparkles, AudioLines, Share2 } from "lucide-react"
import { Reveal } from "@/components/reveal"

const SERVICES = [
  {
    icon: Scissors,
    title: "Edição Profissional",
    description:
      "Cortes precisos, ritmo e narrativa que prendem a atenção do início ao fim do vídeo.",
  },
  {
    icon: Palette,
    title: "Color Grading",
    description:
      "Colorização cinematográfica que define a atmosfera e dá identidade visual ao seu material.",
  },
  {
    icon: Sparkles,
    title: "Motion Graphics",
    description:
      "Animações, lower-thirds e elementos gráficos que elevam a produção a outro nível.",
  },
  {
    icon: AudioLines,
    title: "Sound Design",
    description:
      "Mixagem, trilha e efeitos sonoros que tornam cada cena imersiva e impactante.",
  },
  {
    icon: Share2,
    title: "Conteúdo para Redes Sociais",
    description:
      "Reels, Shorts e vídeos verticais otimizados para engajamento e crescimento.",
  },
]

export function Services() {
  return (
    <section id="servicos" className="relative border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            O que eu faço
          </p>
          <h2 className="text-balance font-heading text-3xl font-bold uppercase leading-tight tracking-tight md:text-5xl">
            Serviços de pós-produção completos
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal
              key={service.title}
              delay={i * 80}
              className="group relative bg-card p-8 transition-colors duration-300 hover:bg-secondary"
            >
              <div className="flex size-12 items-center justify-center bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="size-6" />
              </div>
              <h3 className="mt-6 font-heading text-xl font-semibold uppercase tracking-tight">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <span className="absolute left-0 top-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </Reveal>
          ))}

          <div className="hidden items-center justify-center bg-card p-8 lg:flex">
            <p className="font-heading text-lg font-medium uppercase tracking-tight text-muted-foreground">
              + projeto sob medida para a sua marca
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
