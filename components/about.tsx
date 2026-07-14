import Image from "next/image"
import { Reveal } from "@/components/reveal"

const STATS = [
  { value: "22+", label: "anos de experiência" },
  { value: "1.200+", label: "projetos entregues" },
  { value: "7 bi+", label: "visualizações geradas" },
]

export function About() {
  return (
    <section id="sobre" className="section-shell">
      <div className="mx-auto max-w-7xl border-x border-border/70 px-4 py-24 md:px-8 md:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20">
          <Reveal className="relative">
            <div className="relative aspect-[4/5] overflow-hidden bg-card">
              <Image src="/images/youwin-sobre.jpeg" alt="Youssef Jabbour, editor e especialista em pós-produção da YOUWIN" fill className="object-cover object-top grayscale-[0.2] transition duration-700 hover:grayscale-0" sizes="(max-width: 1024px) 100vw, 42vw" />
              <div className="absolute inset-0 ring-1 ring-inset ring-border/70" />
              <div className="frame-corners" aria-hidden="true" />
              <span className="absolute bottom-5 left-5 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-foreground/80">PROFILE_01 · YJ</span>
            </div>
          </Reveal>

          <div className="flex flex-col justify-between">
            <Reveal>
              <p className="section-kicker">03 · Direção de montagem</p>
              <h2 className="section-title mt-5">Experiência para<br /><span className="text-muted-foreground">saber o que tirar.</span></h2>
              <div className="mt-8 max-w-2xl border-l border-primary pl-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                <p>Sou Youssef Jabbour, editor e especialista em pós-produção. Há mais de 22 anos transformo material bruto em histórias com ritmo, clareza e presença.</p>
                <p className="mt-5">Meu trabalho combina montagem, color grading, motion graphics e sound design para criar filmes que funcionam — na música, na publicidade e na cultura.</p>
              </div>
            </Reveal>

            <Reveal delay={160} className="mt-14 grid border-y border-border/70 sm:grid-cols-3">
              {STATS.map((stat) => (
                <div key={stat.label} className="border-b border-border/70 py-6 last:border-b-0 sm:border-b-0 sm:border-r sm:px-5 sm:last:border-r-0">
                  <p className="font-heading text-4xl font-medium uppercase tracking-tight md:text-5xl">{stat.value}</p>
                  <p className="mt-2 text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
