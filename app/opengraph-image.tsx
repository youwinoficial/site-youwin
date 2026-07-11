import { ImageResponse } from "next/og"
import { readFile } from "node:fs/promises"
import { join } from "node:path"

export const alt = "YOUWIN | Edição Profissional de Vídeos"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function OpenGraphImage() {
  const logoData = await readFile(
    join(process.cwd(), "public/images/youwin-marcadagua.png"),
  )
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0f0f0f",
          backgroundImage:
            "radial-gradient(circle at 50% 32%, rgba(197,32,42,0.28), rgba(15,15,15,0) 60%)",
          padding: "80px",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} alt="YOUWIN" width={760} height={326} />
        <div
          style={{
            marginTop: 40,
            fontSize: 40,
            fontWeight: 600,
            color: "#f5f5f5",
            textAlign: "center",
            letterSpacing: "0.04em",
          }}
        >
          Edição Profissional de Vídeos
        </div>
        <div
          style={{
            marginTop: 18,
            fontSize: 26,
            color: "#a3a3a3",
            textAlign: "center",
          }}
        >
          Pós-produção • Motion Graphics • Color Grading • Videoclipes
        </div>
      </div>
    ),
    { ...size },
  )
}
