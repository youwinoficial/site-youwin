"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { Volume2, VolumeX } from "lucide-react"

// IDs dos vídeos do YouTube presentes no portfólio.
// O reel embaralha essa lista e vai tocando um após o outro.
const REEL_VIDEO_IDS = [
  "FY3m6hMyh3g", // Nego do Borel - Me Solta
  "ou-a5GE_yyI", // MC Fioti - A Luz do Luar
  "BIlB-gs2FII", // Carteirinha Cheia - Gov. SP
  "5Ca6ZSwLPKY", // Netflix - Passinho a Passinho
  "3yd_eoMOvqk", // Kevinho - Olha a Explosão
]

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// Carrega o script da API de IFrame do YouTube uma única vez.
let ytApiPromise: Promise<void> | null = null
function loadYouTubeApi(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve()
  if ((window as any).YT?.Player) return Promise.resolve()
  if (ytApiPromise) return ytApiPromise

  ytApiPromise = new Promise<void>((resolve) => {
    const prev = (window as any).onYouTubeIframeAPIReady
    ;(window as any).onYouTubeIframeAPIReady = () => {
      prev?.()
      resolve()
    }
    const tag = document.createElement("script")
    tag.src = "https://www.youtube.com/iframe_api"
    document.head.appendChild(tag)
  })
  return ytApiPromise
}

export function ShowreelPlayer() {
  const containerRef = useRef<HTMLDivElement>(null)
  const playerRef = useRef<any>(null)
  const playlistRef = useRef<string[]>([])
  const indexRef = useRef(0)
  const [muted, setMuted] = useState(true)
  const [ready, setReady] = useState(false)

  const playNext = useCallback(() => {
    const player = playerRef.current
    if (!player) return
    indexRef.current = (indexRef.current + 1) % playlistRef.current.length
    // Ao dar a volta na lista, reembaralha para manter a aleatoriedade.
    if (indexRef.current === 0) {
      playlistRef.current = shuffle(REEL_VIDEO_IDS)
    }
    player.loadVideoById(playlistRef.current[indexRef.current])
  }, [])

  useEffect(() => {
    let cancelled = false
    playlistRef.current = shuffle(REEL_VIDEO_IDS)

    loadYouTubeApi().then(() => {
      if (cancelled || !containerRef.current) return
      const YT = (window as any).YT
      playerRef.current = new YT.Player(containerRef.current, {
        videoId: playlistRef.current[0],
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          modestbranding: 1,
          rel: 0,
          playsinline: 1,
          disablekb: 1,
          fs: 0,
          iv_load_policy: 3,
        },
        events: {
          onReady: (e: any) => {
            e.target.mute()
            e.target.playVideo()
            setReady(true)
          },
          onStateChange: (e: any) => {
            // 0 = ENDED
            if (e.data === 0) playNext()
          },
        },
      })
    })

    return () => {
      cancelled = true
      playerRef.current?.destroy?.()
      playerRef.current = null
    }
  }, [playNext])

  const toggleMute = useCallback(() => {
    const player = playerRef.current
    if (!player) return
    if (muted) {
      player.unMute()
      player.setVolume(100)
      setMuted(false)
    } else {
      player.mute()
      setMuted(true)
    }
  }, [muted])

  return (
    <div className="group relative mt-14 aspect-video w-full overflow-hidden border border-border md:mt-20">
      {/* Player do YouTube (a div é substituída pelo iframe) */}
      <div className="absolute inset-0 h-full w-full">
        <div ref={containerRef} className="h-full w-full" />
      </div>

      {/* Camada para impedir cliques diretos no iframe e manter o visual */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent"
      />

      {/* Loading state */}
      {!ready && (
        <div className="absolute inset-0 flex items-center justify-center bg-card">
          <span className="font-heading text-sm font-medium uppercase tracking-[0.25em] text-muted-foreground">
            Carregando Showreel...
          </span>
        </div>
      )}

      {/* Botão de som */}
      <button
        type="button"
        onClick={toggleMute}
        aria-label={muted ? "Ativar som" : "Desativar som"}
        className="absolute bottom-5 right-5 flex size-11 items-center justify-center rounded-full bg-background/70 text-foreground backdrop-blur-sm transition-colors hover:bg-primary hover:text-primary-foreground"
      >
        {muted ? <VolumeX className="size-5" /> : <Volume2 className="size-5" />}
      </button>

      <div className="absolute bottom-5 left-5 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-foreground/70">
        <span className="size-2 animate-pulse rounded-full bg-primary" />
        Showreel 2026
      </div>
    </div>
  )
}
