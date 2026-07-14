"use client"

import Image from "next/image"
import { useCallback, useEffect, useRef, useState } from "react"
import { Play, Volume2, VolumeX } from "lucide-react"

const REEL_VIDEO_IDS = [
  "FY3m6hMyh3g", // Nego do Borel - Me Solta
  "ou-a5GE_yyI", // MC Fioti - A Luz do Luar
  "P_Pyr5Lfy3k", // Pabllo Vittar e MC Kekel - Sente a Conexão / Colgate
  "5Ca6ZSwLPKY", // Netflix - Passinho a Passinho
  "3yd_eoMOvqk", // Kevinho - Olha a Explosão
]

const SEGMENT_MS = 10_000
const POSTER_VIDEO_ID = "P_Pyr5Lfy3k"

function shuffle<T>(items: T[]) {
  const result = [...items]
  for (let index = result.length - 1; index > 0; index--) {
    const randomIndex = Math.floor(Math.random() * (index + 1))
    ;[result[index], result[randomIndex]] = [result[randomIndex], result[index]]
  }
  return result
}

let youtubeApiPromise: Promise<void> | null = null

function loadYouTubeApi() {
  if ((window as Window & { YT?: { Player?: unknown } }).YT?.Player) {
    return Promise.resolve()
  }
  if (youtubeApiPromise) return youtubeApiPromise

  youtubeApiPromise = new Promise<void>((resolve) => {
    const youtubeWindow = window as Window & {
      onYouTubeIframeAPIReady?: () => void
    }
    const previousCallback = youtubeWindow.onYouTubeIframeAPIReady

    youtubeWindow.onYouTubeIframeAPIReady = () => {
      previousCallback?.()
      resolve()
    }

    const script = document.createElement("script")
    script.src = "https://www.youtube.com/iframe_api"
    script.async = true
    document.head.appendChild(script)
  })

  return youtubeApiPromise
}

export function ShowreelPlayer() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const playerElementRef = useRef<HTMLDivElement>(null)
  const playerRef = useRef<any>(null)
  const playlistRef = useRef<string[]>([])
  const indexRef = useRef(0)
  const positionsRef = useRef<Record<string, number>>({})
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const segmentStartedAtRef = useRef(0)
  const remainingMsRef = useRef(SEGMENT_MS)
  const shouldPlayRef = useRef(false)
  const initializedRef = useRef(false)

  const [initialized, setInitialized] = useState(false)
  const [ready, setReady] = useState(false)
  const [muted, setMuted] = useState(true)
  const [isVisible, setIsVisible] = useState(false)
  const [requiresInteraction, setRequiresInteraction] = useState(false)

  const clearSegmentTimer = useCallback(() => {
    if (!timerRef.current) return
    clearTimeout(timerRef.current)
    timerRef.current = null
  }, [])

  const disableCaptions = useCallback((player: any) => {
    try {
      player.unloadModule("captions")
      player.unloadModule("cc")
    } catch {
      // Alguns vídeos não disponibilizam o módulo de legendas.
    }
  }, [])

  const scheduleNextSegment = useCallback(
    (delay = remainingMsRef.current) => {
      clearSegmentTimer()
      remainingMsRef.current = delay
      segmentStartedAtRef.current = performance.now()

      timerRef.current = setTimeout(() => {
        const player = playerRef.current
        if (!player) return

        const videoId = playlistRef.current[indexRef.current]
        const currentTime = player.getCurrentTime?.() ?? 0
        const duration = player.getDuration?.() ?? 0
        positionsRef.current[videoId] =
          duration && currentTime >= duration - 1 ? 0 : currentTime

        indexRef.current = (indexRef.current + 1) % playlistRef.current.length
        if (indexRef.current === 0) playlistRef.current = shuffle(REEL_VIDEO_IDS)

        const nextVideoId = playlistRef.current[indexRef.current]
        const nextPosition = positionsRef.current[nextVideoId] ?? 0
        remainingMsRef.current = SEGMENT_MS
        player.loadVideoById({ videoId: nextVideoId, startSeconds: nextPosition })
        disableCaptions(player)
        scheduleNextSegment(SEGMENT_MS)
      }, delay)
    },
    [clearSegmentTimer, disableCaptions],
  )

  const pausePlayback = useCallback(() => {
    shouldPlayRef.current = false
    const player = playerRef.current
    if (timerRef.current) {
      const elapsed = performance.now() - segmentStartedAtRef.current
      remainingMsRef.current = Math.max(250, remainingMsRef.current - elapsed)
    }
    clearSegmentTimer()
    player?.pauseVideo?.()
  }, [clearSegmentTimer])

  const resumePlayback = useCallback(() => {
    const player = playerRef.current
    if (!player || document.hidden) return
    shouldPlayRef.current = true
    player.playVideo?.()
    disableCaptions(player)
    scheduleNextSegment(remainingMsRef.current)
  }, [disableCaptions, scheduleNextSegment])

  const initializePlayer = useCallback(async () => {
    if (initializedRef.current) return
    initializedRef.current = true
    setInitialized(true)
    playlistRef.current = shuffle(REEL_VIDEO_IDS)

    await loadYouTubeApi()
    if (!playerElementRef.current) return

    const YT = (window as any).YT
    playerRef.current = new YT.Player(playerElementRef.current, {
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
        cc_load_policy: 0,
      },
      events: {
        onReady: (event: any) => {
          event.target.mute()
          disableCaptions(event.target)
          setReady(true)
          if (shouldPlayRef.current && !document.hidden) resumePlayback()
          else event.target.pauseVideo()
        },
        onStateChange: (event: any) => {
          if (event.data !== 0) return
          clearSegmentTimer()
          const finishedId = playlistRef.current[indexRef.current]
          positionsRef.current[finishedId] = 0
          indexRef.current = (indexRef.current + 1) % playlistRef.current.length
          if (indexRef.current === 0) playlistRef.current = shuffle(REEL_VIDEO_IDS)
          const nextId = playlistRef.current[indexRef.current]
          remainingMsRef.current = SEGMENT_MS
          event.target.loadVideoById({
            videoId: nextId,
            startSeconds: positionsRef.current[nextId] ?? 0,
          })
          disableCaptions(event.target)
          if (shouldPlayRef.current) scheduleNextSegment(SEGMENT_MS)
        },
      },
    })
  }, [clearSegmentTimer, disableCaptions, resumePlayback, scheduleNextSegment])

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const connection = (navigator as Navigator & {
      connection?: { saveData?: boolean }
    }).connection
    setRequiresInteraction(reducedMotion || Boolean(connection?.saveData))

    const section = sectionRef.current
    if (!section) return

    const preloadObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !reducedMotion && !connection?.saveData) {
          initializePlayer()
          preloadObserver.disconnect()
        }
      },
      { rootMargin: "500px 0px" },
    )

    const visibilityObserver = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting && entry.intersectionRatio >= 0.15),
      { threshold: [0, 0.15, 0.5] },
    )

    preloadObserver.observe(section)
    visibilityObserver.observe(section)

    return () => {
      preloadObserver.disconnect()
      visibilityObserver.disconnect()
    }
  }, [initializePlayer])

  useEffect(() => {
    shouldPlayRef.current = isVisible
    if (!ready) return
    if (isVisible) resumePlayback()
    else pausePlayback()
  }, [isVisible, pausePlayback, ready, resumePlayback])

  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden) pausePlayback()
      else if (isVisible) resumePlayback()
    }
    document.addEventListener("visibilitychange", handleVisibility)
    return () => document.removeEventListener("visibilitychange", handleVisibility)
  }, [isVisible, pausePlayback, resumePlayback])

  useEffect(
    () => () => {
      clearSegmentTimer()
      playerRef.current?.destroy?.()
      playerRef.current = null
    },
    [clearSegmentTimer],
  )

  const handleStart = useCallback(() => {
    shouldPlayRef.current = true
    if (!initializedRef.current) initializePlayer()
    else if (ready) resumePlayback()
  }, [initializePlayer, ready, resumePlayback])

  const toggleMute = useCallback(() => {
    const player = playerRef.current
    if (!player) return
    if (muted) {
      player.unMute()
      player.setVolume(100)
    } else {
      player.mute()
    }
    setMuted((current) => !current)
  }, [muted])

  return (
    <div
      ref={sectionRef}
      className="group relative aspect-video w-full overflow-hidden border border-border/70 bg-card"
    >
      {!ready && (
        <Image
          src={`https://i.ytimg.com/vi/${POSTER_VIDEO_ID}/maxresdefault.jpg`}
          alt="Pabllo Vittar e MC Kekel no videoclipe publicitário Sente a Conexão, da Colgate"
          fill
          className="object-cover"
          sizes="(max-width: 1280px) 100vw, 1280px"
        />
      )}

      {initialized && (
        <div className={`absolute inset-0 ${ready ? "opacity-100" : "opacity-0"}`}>
          <div ref={playerElementRef} className="h-full w-full" />
        </div>
      )}

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-background/10 ring-1 ring-inset ring-border/70" />
      <div className="frame-corners" aria-hidden="true" />

      {!initialized && (
        <button
          type="button"
          onClick={handleStart}
          className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-foreground"
          aria-label="Reproduzir showreel"
        >
          <span className="flex size-16 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:scale-105 md:size-20">
            <Play className="size-7 translate-x-0.5 fill-current md:size-8" />
          </span>
          <span className="font-heading text-sm font-semibold uppercase tracking-[0.2em]">
            {requiresInteraction ? "Reproduzir showreel" : "Showreel pronto para reproduzir"}
          </span>
        </button>
      )}

      {initialized && !ready && (
        <div className="absolute inset-0 flex items-center justify-center bg-background/35" role="status">
          <span className="font-heading text-sm font-medium uppercase tracking-[0.25em] text-foreground">
            Carregando showreel...
          </span>
        </div>
      )}

      {ready && (
        <button
          type="button"
          onClick={toggleMute}
          aria-label={muted ? "Ativar som" : "Desativar som"}
          className="absolute bottom-5 right-5 flex size-11 items-center justify-center rounded-full bg-background/70 text-foreground backdrop-blur-sm transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          {muted ? <VolumeX className="size-5" /> : <Volume2 className="size-5" />}
        </button>
      )}

      <div className="absolute bottom-5 left-5 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-foreground/80">
        <span className={`size-2 rounded-full bg-primary ${ready && isVisible ? "animate-pulse" : ""}`} />
        Showreel 2026
      </div>
    </div>
  )
}
