"use client"

import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { Send } from "lucide-react"

function ChatbotBar() {
  const [value, setValue] = useState("")
  const prompts = [
    "Summarize compliance red flags for a new fintech startup.",
    "Generate a due diligence checklist for angel investors.",
    "Compare regulatory filings between two companies.",
  ]

  return (
    <div className="mx-auto max-w-7xl px-6 pb-16">
      <div className="mx-auto w-full max-w-3xl rounded-xl border bg-card shadow-xl ring-2 ring-[var(--brand-blue)]/20">
        <div className="border-b bg-gradient-to-r from-[var(--brand-blue)]/5 to-[var(--brand-green)]/5 px-4 py-3">
          <h3 className="text-sm font-semibold flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-[var(--brand-blue)] animate-pulse"></span>
            KarmicDD Assistant
          </h3>
          <p className="text-xs text-muted-foreground">Your AI partner for startup due diligence.</p>
        </div>

        <div className="flex flex-col px-4 py-3">
          {/* Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault()
              setValue("")
            }}
            className="flex items-center gap-2"
          >
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Ask about compliance, investors, or reports…"
              className="h-10 flex-1 rounded-md border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-[var(--brand-blue)]"
              aria-label="Ask KarmicDD Assistant"
            />
            <button
              type="submit"
              className="inline-flex h-10 items-center justify-center rounded-md bg-[var(--brand-blue)] px-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
              aria-label="Send"
              title="Send"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>

          <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
            {prompts.map((prompt) => (
              <button
                key={prompt}
                type="button"
                onClick={() => setValue(prompt)}
                className="rounded-md bg-muted px-3 py-2 text-left text-muted-foreground transition hover:bg-accent"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute right-0 top-10 h-56 w-56 rounded-full blur-3xl opacity-40"
          style={{ background: "radial-gradient(closest-side, var(--brand-blue) 0%, transparent 70%)" }}
        />
        <div
          className="absolute right-20 top-44 h-40 w-40 rounded-full blur-3xl opacity-30"
          style={{ background: "radial-gradient(closest-side, var(--brand-green) 0%, transparent 70%)" }}
        />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-6 px-6 pt-4 pb-4 md:grid-cols-2 md:pt-6 md:pb-6">
        <div>
          <h1 className="text-pretty text-3xl font-semibold leading-snug md:text-4xl">
            {"Chat-with AI to create, manage work & conduct Due-Diligence"}
          </h1>
          <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">
            {
              "Transform your investment process with KarmicDD's matching, comprehensive financial analysis, and belief-based compatibility scoring. Built for the Indian startup ecosystem."
            }
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="#get-started"
              className={cn(
                "inline-flex h-10 items-center rounded-md px-4 text-sm font-medium shadow-sm",
                "bg-[var(--brand-blue)] text-primary-foreground transition hover:opacity-90",
              )}
            >
              Get Started
            </Link>
            <Link
              href="#learn-more"
              className={cn(
                "inline-flex h-10 items-center rounded-md border px-4 text-sm font-medium",
                "bg-secondary text-secondary-foreground transition hover:bg-accent",
              )}
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="relative">
          <Image
            src="/images/design-mode/creative.png"
            alt="Analytics and due diligence illustration"
            width={560}
            height={420}
            className="h-auto w-full max-w-md md:max-w-lg drop-shadow-xl mx-auto md:ml-auto"
            priority
          />
        </div>
      </div>

      <ChatbotBar />
    </section>
  )
}
