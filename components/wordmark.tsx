import { cn } from "@/lib/utils"

export function Wordmark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "font-heading font-bold uppercase tracking-tight leading-none select-none",
        className,
      )}
    >
      <span className="text-foreground">YOU</span>
      <span className="text-primary">WIN</span>
    </span>
  )
}
