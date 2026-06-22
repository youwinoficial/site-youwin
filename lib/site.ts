// Número de WhatsApp da YOUWIN (formato internacional, somente dígitos)
export const WHATSAPP_NUMBER = "5511963442015"

// E-mail oficial da YOUWIN
export const CONTACT_EMAIL = "youwin.oficial@gmail.com"

// Instagram pessoal
export const INSTAGRAM_URL = "https://instagram.com/youssef_jabbour"

export const WHATSAPP_MESSAGE =
  "Olá! Vim pelo site da YOUWIN e gostaria de solicitar um orçamento para edição de vídeo."

export function whatsappLink(message: string = WHATSAPP_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Sobre Mim", href: "#sobre" },
  { label: "Contato", href: "#contato" },
] as const
