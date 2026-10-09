import { useState, useEffect } from 'react'
import { Github, Mail, ArrowDown } from 'lucide-react'
import { data } from '../data'

const taglines = data.taglines

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = taglines[index]
    let timeout

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40)
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false)
      setIndex((index + 1) % taglines.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, index])

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#00bfff 1px, transparent 1px), linear-gradient(90deg, #00bfff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Glow blob */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-2xl">
        <p className="font-mono text-accent text-sm mb-4 tracking-widest uppercase">
          Hello, world! I'm
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-text mb-4 tracking-tight">
          {data.name}
        </h1>
        <div className="h-10 flex items-center justify-center mb-6">
          <span className="text-xl md:text-2xl font-mono text-accent">
            {displayed}
            <span className="animate-blink ml-0.5">|</span>
          </span>
        </div>
        <p className="text-muted text-base md:text-lg leading-relaxed mb-10 max-w-lg mx-auto">
          {data.bio}
        </p>

        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a
            href="#projects"
            className="px-6 py-2.5 bg-accent text-bg font-semibold rounded-full hover:bg-accent-dim transition-colors duration-200 text-sm"
          >
            View Projects
          </a>
          <a
            href={data.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 border border-border text-text font-semibold rounded-full hover:border-accent hover:text-accent transition-all duration-200 text-sm flex items-center gap-2"
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            href={`mailto:${data.email}`}
            className="px-6 py-2.5 border border-border text-text font-semibold rounded-full hover:border-accent hover:text-accent transition-all duration-200 text-sm flex items-center gap-2"
          >
            <Mail size={16} />
            Email Me
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <a href="#about" className="absolute bottom-10 text-muted hover:text-accent transition-colors animate-bounce">
        <ArrowDown size={20} />
      </a>
    </section>
  )
}
