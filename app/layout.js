import { Plus_Jakarta_Sans, Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata = {
  title: "Atul Kumar Singh — AI Automation Engineer",
  description: "I build AI-powered automation systems connecting LLMs, APIs, and business workflows. Available for full-time roles and freelance projects.",
  keywords: ["AI Automation Engineer", "n8n", "LLM Pipelines", "Workflow Developer", "AI Integration"],
  openGraph: {
    title: "Atul Kumar Singh — AI Automation Engineer",
    description: "Production-grade automation systems. n8n · OpenAI · LangChain · APIs",
    url: "https://atulbhojal-ai.github.io",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${syne.variable} ${jetBrainsMono.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
