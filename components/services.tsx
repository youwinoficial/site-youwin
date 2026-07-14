import { Reveal } from "@/components/reveal"

const STAGES = [
  { code: "01", title: "Montagem", description: "Estrutura, ritmo e emoção construídos frame a frame para manter a atenção." },
  { code: "02", title: "Color", description: "Cor como linguagem: atmosfera, consistência e identidade visual para cada projeto." },
  { code: "03", title: "Motion", description: "Tipografia, grafismos e movimentos que informam sem disputar com a narrativa." },
  { code: "04", title: "Sound", description: "Trilha, efeitos e mixagem para dar peso, espaço e presença a cada corte." },
  { code: "05", title: "Delivery", description: "Versões e formatos preparados para campanhas, plataformas e redes sociais." },
]

export function Services() {
  return (
    <section id="servicos" className="section-shell">
      <div className="mx-auto max-w-7xl border-x border-border/70 px-4 py-24 md:px-8 md:py-32">
        <Reveal className="grid gap-8 md:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="section-kicker">02 · Processo</p>
            <h2 className="section-title mt-5">Uma linha.<br /><span className="text-primary">Muitas camadas.</span></h2>
          </div>
          <p className="max-w-lg self-end text-pretty leading-relaxed text-muted-foreground md:justify-self-end">Da primeira seleção à entrega final, cada etapa responde à mesma ideia: fazer a história funcionar.</p>
        </Reveal>

        <div className="relative mt-16 border-t border-border/70">
          <div className="absolute left-0 top-0 h-px w-1/5 bg-primary" aria-hidden="true" />
          {STAGES.map((stage, index) => (
            <Reveal key={stage.title} delay={index * 60} className="group grid gap-5 border-b border-border/70 py-7 transition-colors hover:bg-card md:grid-cols-[0.2fr_0.65fr_1fr] md:items-center md:px-5">
              <span className="font-mono text-xs text-primary">{stage.code}:00:00</span>
              <h3 className="font-heading text-3xl font-medium uppercase tracking-tight transition-transform duration-300 group-hover:translate-x-2 md:text-4xl">{stage.title}</h3>
              <p className="max-w-lg text-sm leading-relaxed text-muted-foreground">{stage.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
