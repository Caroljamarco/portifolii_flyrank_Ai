import profilePhoto from '../assets/profile.jpg'
import heroBg from '../assets/hero_bg_variant_A.svg'

export default function Hero() {
  return (
    <section id="hero" className="mx-auto max-w-7xl px-6 py-12 md:px-8">
      <div className="grid gap-10 md:grid-cols-[55%_45%] justify-items-start items-start">
        <div className="space-y-6">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-primary">
            Front-end developer
          </p>
          <h1 className="text-3xl font-heading font-bold leading-tight text-ink sm:text-4xl lg:text-5xl">
            I turn planned layouts into responsive, functional web interfaces, with a focus on DOM manipulation to create interactive experiences.
          </h1>
          <p className="max-w-xl text-base font-body leading-7 text-ink/85">
            Switching careers into front-end development — I dig in, stick with it, and don&apos;t stop until it works.
          </p>
          <a
            href="mailto:karoltaqua2009@hotmail.com"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent"
          >
            Email me
          </a>
        </div>

        <div className="relative w-full max-w-md">
          <div className="absolute -left-6 -top-6 h-[calc(100%+3rem)] w-[calc(100%+3rem)] overflow-hidden rounded-[2.5rem]">
            <img
              src={heroBg}
              alt="Decorative purple background"
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 h-full w-full object-contain opacity-20"
            />
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-slate-100 shadow-sm z-10">
            <div className="relative h-full overflow-hidden rounded-[1.75rem] border border-black/5 bg-white p-2">
              <img
                src={profilePhoto}
                alt="Profile"
                className="block h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
