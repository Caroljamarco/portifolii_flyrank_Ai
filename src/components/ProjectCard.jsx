import co2Demo from '../assets/co2-demo.gif'

export default function ProjectCard({
  title,
  stack,
  problem,
  decision,
  outcome,
  screenshotSrc,
  liveUrl,
  repoUrl,
}) {
  const isCo2 = title === 'CO2 Emissions Calculator'
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200/70 bg-white/90 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative overflow-hidden rounded-t-3xl h-72">
        {isCo2 ? (
          <>
            <img
              src={co2Demo}
              alt={`Demo for ${title}`}
              className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute left-0 right-0 top-0 flex items-center gap-2 px-3 py-2 bg-slate-100/80 backdrop-blur-sm">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" aria-hidden />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" aria-hidden />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400" aria-hidden />
            </div>
          </>
        ) : (
          <img
            src={screenshotSrc}
            alt={`Screenshot for ${title}`}
            className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
          />
        )}
      </div>

      <div className="space-y-5 p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-2xl font-heading font-semibold text-slate-950">{title}</h3>
            <p className="mt-2 text-sm text-slate-600">A recruiter-focused case study with process-first storytelling.</p>
          </div>
          <span className="inline-flex rounded-full bg-accent/15 px-3 py-1.5 text-sm font-semibold text-accent">
            {stack}
          </span>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-3xl bg-slate-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Problem</p>
            <p className="mt-2 text-sm leading-6 text-slate-700">{problem}</p>
          </div>
          <div className="rounded-3xl bg-slate-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Decision</p>
            <p className="mt-2 text-sm leading-6 text-slate-700">{decision}</p>
          </div>
          <div className="rounded-3xl bg-slate-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Outcome</p>
            <p className="mt-2 text-sm leading-6 text-slate-700">{outcome}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {!isCo2 && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent"
            >
              View live
            </a>
          )}
          <a
            href={repoUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-accent hover:text-accent"
          >
            View repo
          </a>
        </div>
      </div>
    </article>
  )
}
