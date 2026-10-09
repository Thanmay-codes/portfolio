import { Mail, Github, Linkedin } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'
import { data } from '../data'

export default function Contact() {
  const ref = useReveal()

  return (
    <section id="contact" className="py-24 px-6 bg-surface/50">
      <div className="max-w-2xl mx-auto text-center">
        <div ref={ref} className="reveal">
          <p className="font-mono text-accent text-sm uppercase tracking-widest mb-2">04. contact</p>
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Get In Touch</h2>
          <p className="text-muted mb-10 leading-relaxed">
            Whether you want to collaborate on a project, have a question, or just want to say hi —
            my inbox is open. I'll try my best to get back to you!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href={`mailto:${data.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-bg font-semibold rounded-full hover:bg-accent-dim transition-colors text-sm"
            >
              <Mail size={16} />
              Say Hello
            </a>
            <a
              href={data.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-text font-semibold rounded-full hover:border-accent hover:text-accent transition-all text-sm"
            >
              <Github size={16} />
              GitHub
            </a>
            <a
              href={data.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-text font-semibold rounded-full hover:border-accent hover:text-accent transition-all text-sm"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
