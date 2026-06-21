import Image from "next/image"
import { Play } from "lucide-react"
import { Reveal } from "@/components/reveal"

const PROJECTS = [
  {
    title: "Nego do Borel - Me Solta",
    category: "Videoclipe",
    description: "O clipe do hit Me Solta, lançado em 2018 por Nego do Borel em parceria com o DJ Rennan da Penha, foi indicado ao Grammy Latino em 2019. A produção concorreu na categoria Melhor Vídeo Musical Versão Curta, destacando-se pela repercussão do trabalho audiovisual",
    image: "/images/portfolio-videoclipe.png",
    href: "https://youtu.be/FY3m6hMyh3g?is=hvkI0W8kjKA9Fo-u",
  },
  {
    title: "Videoclipe",
    category: "Videoclipe",
    description: "Videoclipe editado com cortes no ritmo da música e colorização cinematográfica.",
    image: "/images/portfolio-evento.png",
    href: "https://youtu.be/ou-a5GE_yyI",
  },
  {
    title: "Comercial — Sneaker Drop",
    category: "Marca",
    description: "Vídeo de produto premium com motion graphics e sound design.",
    image: "/images/portfolio-marca.png",
    href: "https://youtube.com",
  },
  {
    title: "Reels — Criador de Conteúdo",
    category: "Redes Sociais",
    description: "Série de vídeos verticais otimizados para engajamento.",
    image: "/images/portfolio-redes.png",
    href: "https://youtube.com",
  },
  {
    title: "Brand Film — Corporativo",
    category: "Institucional",
    description: "Filme institucional com narrativa limpa e visual sofisticado.",
    image: "/images/portfolio-corporativo.png",
    href: "https://youtube.com",
  },
  {
    title: "Documentário — Atleta",
    category: "Documentário",
    description: "Storytelling emocional com colorização teal & orange.",
    image: "/images/portfolio-documentario.png",
    href: "https://youtube.com",
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="relative border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Portfólio
            </p>
            <h2 className="text-balance font-heading text-3xl font-bold uppercase leading-tight tracking-tight md:text-5xl">
              Projetos selecionados
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Uma amostra de trabalhos em videoclipes, eventos, marcas e conteúdo digital.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <Reveal as="article" key={project.title} delay={i * 70}>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block overflow-hidden border border-border bg-card transition-colors hover:border-primary/60"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 bg-background/80 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-widest text-foreground backdrop-blur-sm">
                    {project.category}
                  </span>
                  <span className="absolute right-4 top-4 flex size-11 items-center justify-center rounded-full bg-primary/90 text-primary-foreground opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <Play className="size-4 translate-x-0.5 fill-current" />
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="font-heading text-lg font-semibold uppercase leading-snug tracking-tight">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Assistir no YouTube
                    <Play className="size-3.5 fill-current" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
