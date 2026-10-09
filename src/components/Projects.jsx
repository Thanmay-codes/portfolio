import { Github, ExternalLink } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'
import { data } from '../data'

export default function Projects() {
  const ref = useReveal()

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div ref={ref} className="reveal">
          <p className="font-mono text-accent text-sm uppercase tracking-widest mb-2">03. projects</p>
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Things I've Built</h2>
          <p className="text-muted mb-12 max-w-xl">
            A few projects I've worked on. More coming soon as I keep building!
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {data.projects.map((project) => (
              <div
                key={project.title}
                className="card-border p-6 flex flex-col justify-between gap-4"
              >
                <div>
                  <h3 className="text-text font-semibold text-lg mb-2">{project.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{project.description}</p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-xs text-accent bg-accent/10 px-2 py-1 rounded-md border border-accent/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted hover:text-accent transition-colors flex items-center gap-1 text-sm"
                      >
                        <Github size={15} /> Code
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted hover:text-accent transition-colors flex items-center gap-1 text-sm"
                      >
                        <ExternalLink size={15} /> Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* "More coming" placeholder */}
            <div className="card-border p-6 flex flex-col items-center justify-center gap-3 border-dashed opacity-50 hover:opacity-70 transition-opacity">
              <span className="text-3xl">🚧</span>
              <p className="text-muted text-sm text-center">More projects coming soon...</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
