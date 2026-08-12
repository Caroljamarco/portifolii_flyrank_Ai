import ProjectCard from './ProjectCard'

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-7xl px-6 py-12 md:px-8">
      <div className="mb-10 space-y-3">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-primary">Case studies</p>
        <h2 className="text-3xl font-heading font-semibold text-slate-950 sm:text-4xl">Work that shows how I build, not just what I shipped.</h2>
      </div>

      <div className="grid gap-8">
        <ProjectCard
          title="CO2 Emissions Calculator"
          stack="Vanilla JavaScript"
          problem="Bootcamp challenge needed reliable city-distance lookup without relying on one fragile API."
          decision="Built a layered fallback: external API, fixed distance table, then Haversine formula, plus real-time DOM feedback with loading state, color-coded results, and transport highlighting."
          outcome="Works offline and without an API key, while showing interactive DOM moments like selected transport highlighting and live result updates."
          
          liveUrl="#"
          repoUrl="#"
        />
      </div>
    </section>
  )
}
