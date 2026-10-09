import { useReveal } from '../hooks/useReveal'
import { data } from '../data'

export default function Skills() {
  const ref = useReveal()

  return (
    <section id="skills" className="py-24 px-6 bg-surface/50">
      <div className="max-w-4xl mx-auto">
        <div ref={ref} className="reveal">
          <p className="font-mono text-accent text-sm uppercase tracking-widest mb-2">02. skills</p>
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Tech Stack</h2>
          <p className="text-muted mb-12 max-w-xl">
            Tools and technologies I work with. This list will keep growing as I keep learning.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {data.skills.map((skill) => (
              <div
                key={skill.name}
                className="card-border p-5 flex flex-col items-center gap-3 cursor-default group"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-10 h-10 group-hover:scale-110 transition-transform duration-200"
                  style={skill.name === 'GitHub' ? { filter: 'invert(1)' } : {}}
                />
                <span className="text-muted text-xs font-mono group-hover:text-accent transition-colors">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
