import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = ['About', 'Skills', 'Projects', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-bg/95 backdrop-blur-md border-b border-border shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="font-mono text-accent font-semibold text-lg tracking-tight">
          &lt;Thanmay /&gt;
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-muted hover:text-accent text-sm font-medium transition-colors duration-200"
              >
                {link}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://github.com/Thanmay-codes"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded-full border border-accent text-accent text-sm font-medium hover:bg-accent hover:text-bg transition-all duration-200"
            >
              GitHub
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-muted hover:text-accent transition-colors"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-surface border-t border-border px-6 py-4 flex flex-col gap-4">
          {links.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-muted hover:text-accent text-sm font-medium transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
