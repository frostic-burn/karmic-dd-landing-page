"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              aria-hidden
              className="h-7 w-7 rounded-md bg-[var(--brand-blue)] flex items-center justify-center text-[var(--color-card)] font-semibold"
            >
              K
            </div>
            <Link href="#" className="font-semibold tracking-tight text-xl" aria-label="KarmicDD home">
              KarmicDD
            </Link>
          </div>

          <nav aria-label="Primary" className="hidden md:flex items-center gap-6 text-sm">
            <Link href="#" className="hover:text-[var(--brand-blue)] transition-colors">
              Features
            </Link>
            <Link href="#" className="hover:text-[var(--brand-blue)] transition-colors">
              Reports
            </Link>
            <Link href="#" className="hover:text-[var(--brand-blue)] transition-colors">
              Process
            </Link>
            <Link href="#" className="hover:text-[var(--brand-blue)] transition-colors">
              About
            </Link>
            <Link href="#" className="hover:text-[var(--brand-blue)] transition-colors">
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link
              href="#startup-signin"
              className={cn(
                "inline-flex h-9 items-center rounded-md px-3 text-sm font-medium shadow-sm",
                "bg-[var(--brand-blue)] text-primary-foreground hover:opacity-90 transition",
              )}
            >
              Sign in as Startup
            </Link>
            <Link
              href="#investor-signin"
              className={cn(
                "inline-flex h-9 items-center rounded-md px-3 text-sm font-medium shadow-sm",
                "bg-[var(--brand-green)] text-primary-foreground hover:opacity-90 transition",
              )}
            >
              Sign in as Investor
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
