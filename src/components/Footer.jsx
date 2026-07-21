export default function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white px-6 py-6 text-sm text-slate-600 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="inline-flex items-center gap-3 rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-slate-950">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
            AC
          </span>
          <span className="text-sm font-semibold">AC</span>
        </div>
        <p>© {new Date().getFullYear()} AC. Built for recruiters who want to email first.</p>
      </div>
    </footer>
  )
}
