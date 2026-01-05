import Navbar from "@/components/navbar"
import Hero from "@/components/hero"

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
      </main>
      <footer className="border-t">
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-muted-foreground flex flex-col md:flex-row items-center md:justify-between gap-4">
          <p>© {new Date().getFullYear()} KarmicDD. All rights reserved.</p>
          <nav className="flex items-center gap-4">
            <a href="#" className="hover:text-foreground">
              About
            </a>
            <a href="#" className="hover:text-foreground">
              Legal
            </a>
            <a href="#" className="hover:text-foreground">
              Privacy
            </a>
          </nav>
        </div>
      </footer>
    </>
  )
}
