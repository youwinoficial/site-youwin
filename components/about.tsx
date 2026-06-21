import Image from "next/image"
import { Reveal } from "@/components/reveal"

const STATS = [
  { value: "22+", label: "Anos de experiência" },
  { value: "1200+", label: "Projetos entregues" },
  { value: "7Bi+", label: "Visualizações geradas" },
]

export function About() {
  return (
    <section id="sobre" className="relative border-t border-border py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 md:px-8 lg:grid-cols-2 lg:gap-16">
        <Reveal className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden border border-border">
            <Image
              src="/images/youwin-sobre.jpeg"
              alt="Youssef Jabbour, editor de vídeo da YOUWIN, operando uma câmera de cinema"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>
          <div className="absolute -bottom-6 -right-2 hidden bg-primary px-6 py-4 text-primary-foreground sm:block md:-right-6">
            <p className="font-heading text-2xl font-bold uppercase leading-none">YOUWIN</p>
            <p className="mt-1 text-xs uppercase tracking-widest opacity-80">Pós Produção</p>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Sobre Mim
            </p>
            <h2 className="text-balance font-heading text-3xl font-bold uppercase leading-tight tracking-tight md:text-5xl">
              Prazer, sou Youssef Jabbour
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Sou editor de vídeo e especialista em pós-produção, apaixonado por
                transformar imagens brutas em histórias que emocionam e convertem.
                Há anos ajudo marcas, criadores e produtores de eventos a elevarem
                o nível dos seus conteúdos.
              </p>
              <p>
                Meu trabalho une técnica e criatividade: edição com ritmo, color
                grading cinematográfico, motion graphics e sound design — tudo
                pensado para entregar resultados profissionais e memoráveis.
              </p>
            </div>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="font-heading text-3xl font-bold text-foreground md:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs leading-snug text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
