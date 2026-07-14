import Image from "next/image"
import { ArrowUpRight, Play } from "lucide-react"
import { Reveal } from "@/components/reveal"

const PROJECTS = [
  { title: "Kevinho — Olha a Explosão", category: "Videoclipe", proof: "1 bilhão+ de views", description: "Montagem para KondZilla com ritmo dinâmico, cortes precisos no beat e estética pop de alto engajamento.", image: "/images/IMG_0434.jpeg", href: "https://youtu.be/3yd_eoMOvqk?is=DyBzAEisL-qCEg-d", featured: true },
  { title: "Nego do Borel — Me Solta", category: "Videoclipe", proof: "Indicado ao Grammy Latino", description: "O hit com DJ Rennan da Penha concorreu a Melhor Vídeo Musical Versão Curta no Grammy Latino de 2019.", image: "/images/nego-borel.JPG", href: "https://youtu.be/FY3m6hMyh3g?is=hvkI0W8kjKA9Fo-u", featured: true },
  { title: "Pabllo Vittar & MC Kekel — Sente a Conexão", category: "Publicidade · Colgate", proof: "Campanha musical", description: "Ritmo, cor e coreografia conectados à identidade vibrante da campanha Colgate.", image: "https://i.ytimg.com/vi/P_Pyr5Lfy3k/maxresdefault.jpg", href: "https://youtu.be/P_Pyr5Lfy3k" },
  { title: "Netflix — Passinho a Passinho", category: "Publicidade", proof: "Campanha Sintonia", description: "Conteúdo musical criado para apresentar a assinatura da Netflix ao público de Sintonia.", image: "/images/IMG_0433.jpeg", href: "https://youtu.be/5Ca6ZSwLPKY?is=zqAoEak99G4pIP4H" },
  { title: "MC Fioti — A Luz do Luar", category: "Videoclipe", proof: "Montagem musical", description: "Cortes sincronizados, ritmo dinâmico e transições que sustentam a narrativa da música.", image: "/images/portfolio-videoclipe-yt.jpg", href: "https://youtu.be/ou-a5GE_yyI" },
  { title: "Ministério da Saúde", category: "Institucional", proof: "Utilidade pública", description: "Edição focada em impacto visual e sensibilidade para uma mensagem forte de conscientização.", image: "/images/IMG_0437.png", href: "https://vimeo.com/11844750" },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="section-shell">
      <div className="mx-auto max-w-7xl border-x border-border/70 px-4 py-24 md:px-8 md:py-32">
        <Reveal className="grid gap-8 border-b border-border/70 pb-12 md:grid-cols-[1fr_0.55fr] md:items-end">
          <div>
            <p className="section-kicker">01 · Trabalhos selecionados</p>
            <h2 className="section-title mt-5">Cada corte<br /><span className="text-muted-foreground">tem uma intenção.</span></h2>
          </div>
          <p className="max-w-md text-pretty leading-relaxed text-muted-foreground md:justify-self-end">
            Uma seleção de projetos em que montagem, ritmo e acabamento transformaram conteúdo em resultado cultural e comercial.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-x-5 gap-y-14 md:grid-cols-12">
          {PROJECTS.map((project, index) => {
            const featured = project.featured
            const span = featured ? "md:col-span-6" : index === 2 || index === 5 ? "md:col-span-7" : "md:col-span-5"
            return (
              <Reveal as="article" key={project.title} delay={(index % 2) * 90} className={span}>
                <a href={project.href} target="_blank" rel="noopener noreferrer" className="project-frame group block">
                  <div className={`relative overflow-hidden ${featured ? "aspect-[4/3]" : "aspect-video"}`}>
                    <Image src={project.image} alt={`Frame do projeto ${project.title}`} fill className="object-cover transition duration-700 ease-out group-hover:scale-[1.025] group-hover:saturate-[1.08]" sizes={featured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 58vw"} />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/10" />
                    <div className="frame-corners" aria-hidden="true" />
                    <span className="absolute left-4 top-4 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-foreground/80">SEQ_{String(index + 1).padStart(2, "0")}</span>
                    <span className="absolute bottom-4 right-4 flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform duration-300 group-hover:scale-110"><Play className="size-4 translate-x-px fill-current" /></span>
                  </div>
                  <div className="grid gap-4 border-x border-b border-border/70 p-5 sm:grid-cols-[1fr_auto] sm:items-start md:p-6">
                    <div>
                      <div className="flex flex-wrap items-center gap-3 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-primary"><span>{project.category}</span><span className="h-px w-5 bg-border" /><span className="text-muted-foreground">{project.proof}</span></div>
                      <h3 className="mt-4 text-balance font-heading text-2xl font-medium uppercase leading-none tracking-tight md:text-3xl">{project.title}</h3>
                      <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                    </div>
                    <ArrowUpRight className="size-5 text-muted-foreground transition-colors group-hover:text-primary" />
                  </div>
                </a>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
