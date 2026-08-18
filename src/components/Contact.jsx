import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-4xl px-6 py-16 md:px-8">
      <div className="rounded-[2.5rem] border border-slate-200/70 bg-slate-950/95 px-8 py-12 text-center text-white shadow-xl shadow-slate-900/10">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">Let&apos;s connect</p>
        <h2 className="mt-4 text-3xl font-heading font-semibold leading-tight sm:text-4xl">Want to talk about how I could fit your team?</h2>

        <div className="mx-auto mt-8 flex max-w-md flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a href="https://calendly.com/caroljamarco/30min" target="_blank" rel="noopener noreferrer" className="w-full rounded-full bg-accent px-6 py-3 text-center text-sm font-semibold text-slate-950 transition hover:opacity-90 sm:w-auto">Book a call</a>
          <a href="https://drive.google.com/file/d/1KBfnqk5NqNDv86kzEaQpE-jg5EOpCIhY/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="w-full rounded-full border border-white/30 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto">Download CV</a>
        </div>

        <form onSubmit={handleSubmit} className="mx-auto mt-8 flex max-w-md flex-col gap-4 text-left">
          <input type="text" name="name" placeholder="Your name" value={form.name} onChange={handleChange} required className="rounded-xl bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-accent" />
          <input type="email" name="email" placeholder="Your email" value={form.email} onChange={handleChange} required className="rounded-xl bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-accent" />
          <textarea name="message" placeholder="Your message" value={form.message} onChange={handleChange} required rows={4} className="rounded-xl bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-accent" />
          <button type="submit" disabled={status === "sending"} className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-slate-950 transition hover:bg-accent hover:text-white disabled:cursor-not-allowed disabled:opacity-60">{status === "sending" ? "Sending..." : "Send message"}</button>
          {status === "success" && <p className="text-sm text-green-400" role="status">Message sent! I&apos;ll get back to you soon.</p>}
          {status === "error" && <p className="text-sm text-red-400" role="alert">Something went wrong. Please try emailing me directly instead.</p>}
        </form>

        <div className="mt-10 flex items-center justify-center gap-6">
          <a href="mailto:karoltaqua2009@hotmail.com" aria-label="Email" className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20">
            <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16v16H4V4zm1.21 2.57 6.29 4.71 6.29-4.71H5.21zM5 18h14V8.83l-7 5.25-7-5.25V18z" /></svg>
          </a>
          <a href="https://github.com/Caroljamarco" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20">
            <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.744.082-.729.082-.729 1.205.085 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.304 3.492.997.108-.776.418-1.304.76-1.604-2.665-.304-5.466-1.333-5.466-5.933 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.524.117-3.176 0 0 1.008-.323 3.3 1.23A11.51 11.51 0 0 1 12 6.844a11.48 11.48 0 0 1 3.003.404c2.29-1.553 3.297-1.23 3.297-1.23.655 1.653.243 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.803 5.626-5.475 5.922.43.371.815 1.103.815 2.222 0 1.606-.015 2.898-.015 3.292 0 .319.216.694.825.576C20.565 22.092 24 17.592 24 12.297 24 5.67 18.63.297 12 .297z" /></svg>
          </a>
          <a href="https://www.linkedin.com/in/ana-carolina-jamarco/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20">
            <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM3.5 9h1v10h-1V9zm4 0h1v1.5c.3-.5 1.2-1.5 2.7-1.5 2.9 0 3.3 1.9 3.3 4.4V19h-1V13.6c0-1.5-.1-3.4-2.1-3.4-2.1 0-2.4 1.6-2.4 3.3V19h-1V9z" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
}