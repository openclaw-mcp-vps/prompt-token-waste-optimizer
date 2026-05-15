import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Prompt Token Waste Optimizer — Eliminate Expensive AI Tokens',
  description: 'Analyze AI prompts to identify and remove unnecessary tokens that inflate costs without affecting output quality.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="abcec768-a1f1-4b15-8a0e-4afa69ab34f6"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  )
}
