import Image from "next/image"
import { Play } from "lucide-react"
import { Reveal } from "@/components/reveal"

const PROJECTS = [
  {
    title: "Nego do Borel - Me Solta",
    category: "Videoclipe",
    description: "O clipe do hit Me Solta, lançado em 2018 por Nego do Borel em parceria com o DJ Rennan da Penha, foi indicado ao Grammy Latino em 2019. A produção concorreu na categoria Melhor Vídeo Musical Versão Curta, destacando-se pela repercussão do trabalho audiovisual",
    image: "/images/nego-borel.JPG",
    href: "https://youtu.be/FY3m6hMyh3g?is=hvkI0W8kjKA9Fo-u",
  },
  {
    title: "MC Fioti - A Luz do luar feat MC Ju Bronx e MC Vagninho",
    category: "Videoclipe",
    description:
      "Edição completa do videoclipe: cortes sincronizados com a batida, ritmo dinâmico, e transições que sustentam a narrativa visual da música.",
    image: "/images/portfolio-videoclipe-yt.jpg",
    href: "https://youtu.be/ou-a5GE_yyI",
  },
  {
    title: "Carteirinha Cheia - Governo do Estado de São Paulo",
    category: "Comercial",
    description:
      "Comercial institucional produzido para o Governo do Estado de São Paulo, com edição dinâmica, ritmo envolvente e acabamento profissional alinhado à comunicação oficial.",
    image: "/images/portfolio-comercial-sp.jpg",
    href: "https://youtu.be/BIlB-gs2FII",
  },
  {
    title: "Netflix - Passinho a Passinho",
    category: "Puclicidade",
    description: "Passinho a Passinho foi uma jogada de marketing genial da Netflix para promover a série Sintonia, hit brasileiro criado pelo KondZilla. No clipe oficial, o funkeiro MC Doni ensina a galera da quebrada a assinar o serviço de forma prática, garantindo que ninguém ficasse de fora das aventuras dele e dos amigos Nando e Rita na Vila Áurea.",
    image: "/images/IMG_0433.jpeg",
    href: "https://youtu.be/5Ca6ZSwLPKY?is=zqAoEak99G4pIP4H",
  },
  {
    title: "Kevinho - Olha a Explosão",
    category: "Videoclipe",
    description: "Trabalho de montagem e edição para a KondZilla no videoclipe que superou a marca de 1 bilhão de views. Foco total no desenvolvimento de um ritmo dinâmico, cortes precisos em sincronia com o beat e construção de uma estética visual pop de alto engajamento.",
    image: "/images/portfolio-corporativo.png",
    href: "https://youtu.be/3yd_eoMOvqk?is=DyBzAEisL-qCEg-d",
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
