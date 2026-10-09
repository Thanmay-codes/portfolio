import { Github, Code2, Terminal, Zap } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'
import { data } from '../data'

const highlights = [
  { icon: <Code2 size={20} className="text-accent" />, label: 'Clean Code', desc: 'Writing readable, maintainable code is a priority.' },
  { icon: <Terminal size={20} className="text-accent" />, label: 'Linux First', desc: 'Living in the terminal on Arch Linux.' },
  { icon: <Zap size={20} className="text-accent" />, label: 'Fast Learner', desc: 'Always picking up new technologies and concepts.' },
]

export default function About() {
  const ref = useReveal()

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div ref={ref} className="reveal">
          <p className="font-mono text-accent text-sm uppercase tracking-widest mb-2">01. about</p>
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-12">Who am I?</h2>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Text side */}
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                Hey! I'm <span className="text-text font-semibold">Thanmay</span>, a developer
                based on the internet 🌍. I enjoy writing Python scripts, building web pages,
                and exploring how things work under the hood.
              </p>
              <p>
                I use <span className="text-text font-medium">Arch Linux</span> as my daily driver
                and spend a lot of time in the terminal. I believe in learning by doing — every
                project teaches something new.
              </p>
              <p>
                Right now, I'm focused on improving my JavaScript and building real-world projects
                to add to my portfolio.
              </p>
              <a
                href={data.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent hover:underline text-sm mt-2"
              >
                <Github size={16} />
                Check out my GitHub
              </a>
            </div>

            {/* Highlights */}
            <div className="space-y-4">
              {highlights.map((h) => (
                <div key={h.label} className="card-border p-5 flex gap-4 items-start">
                  <div className="mt-0.5">{h.icon}</div>
                  <div>
                    <p className="text-text font-semibold text-sm mb-1">{h.label}</p>
                    <p className="text-muted text-sm">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
