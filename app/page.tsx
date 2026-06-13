"use client";

import React, { useState, useEffect, useRef, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, X, ChevronRight, Terminal, Server, Code2, Database, Globe, Layers, ArrowUpRight, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

// ── Web3Forms Config ────────────────────────────────────────────────
const W3F_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "YOUR_ACCESS_KEY";

// ── Animations ──────────────────────────────────────────────────────
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } } };
const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };

// ── Typing Hook ──────────────────────────────────────────────────────
function useTyping(words: string[], speed = 80, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const word = words[idx % words.length];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplay(word.slice(0, display.length + 1));
        if (display.length + 1 === word.length) setTimeout(() => setDeleting(true), pause);
      } else {
        setDisplay(display.slice(0, -1));
        if (display.length === 0) { setDeleting(false); setIdx(i => i + 1); }
      }
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [display, deleting, idx, words, speed, pause]);
  return display;
}

// ── Floating Particles ───────────────────────────────────────────────
function Particles() {
  const [dots, setDots] = useState<Array<{ id: number; x: number; y: number; size: number; dur: number; delay: number }>>([]);

  useEffect(() => {
    setDots(Array.from({ length: 18 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      dur: Math.random() * 8 + 6,
      delay: Math.random() * 4,
    })));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {dots.map(d => (
        <motion.div
          key={d.id}
          className="absolute rounded-full"
          style={{ left: `${d.x}%`, top: `${d.y}%`, width: d.size, height: d.size, background: "var(--cyan)", opacity: 0.15 }}
          animate={{ y: [0, -24, 0], opacity: [0.1, 0.4, 0.1] }}
          transition={{ duration: d.dur, delay: d.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

// ── Data ─────────────────────────────────────────────────────────────
const ROLES = ["Web Developer", "React Developer", "Frontend Developer", "JavaScript Dev"];

const SKILLS = [
  { name: "React / JSX", icon: <Layers size={16} />, level: 50, cat: "Frontend" },
  { name: "JavaScript (ES6+)", icon: <Code2 size={16} />, level: 30, cat: "Language" },
  { name: "Vite / Bundler (Learing)", icon: <Terminal size={16} />, level: 10, cat: "Tooling" },
  { name: "CSS / Tailwind", icon: <Globe size={16} />, level: 30, cat: "Styling" },
  { name: "Firebase / Auth (Learning)", icon: <Server size={16} />, level: 20, cat: "Backend" },
  { name: "REST API", icon: <Database size={16} />, level: 20, cat: "Integration" },
  { name: "Docker (Learning)", icon: <Server size={16} />, level: 20, cat: "DevOps" },
  { name: "Git / GitHub", icon: <Code2 size={16} />, level: 50, cat: "Tooling" },
];

const PROJECTS = [
  {
    id: 1,
    title: "Grow.it",
    tagline: "Habit Tracker with Cozy Garden Theme",
    stack: ["React", "Vite", "Gemini AI", "Web Audio API", "Docker"],
    description: "Aplikasi habit tracker berbasis web dengan tema taman digital. Setiap kebiasaan direpresentasikan sebagai tanaman yang tumbuh seiring konsistensi. Dilengkapi AI Zen Master (Google Gemini 2.0), Pomodoro timer, streak heatmap, efek suara sintetis, dan sistem Compassionate Productivity.",
    features: ["AI Zen Master (Gemini 2.0 Flash)", "4 plant growth phases", "Pomodoro Focus Mode", "Streak Heatmap & Statistics", "Web Audio API sound effects", "Docker + Google Cloud Run deploy"],
    github: "https://github.com/mhmmdzlfnn/Grow.it",
    live: "https://grow-it-773439353729.asia-southeast2.run.app/",
    color: "#00D4AA",
    emoji: "🌱",
  },
  {
    id: 2,
    title: "FinTrack",
    tagline: "Personal Finance Tracker App",
    stack: ["React", "Vite", "Supabase", "Recharts", "CSS"],
    description: "Aplikasi manajemen keuangan pribadi berbasis web untuk melacak pemasukan, pengeluaran, dan target tabungan secara real-time. Dilengkapi visualisasi grafik interaktif, simulasi compound interest, dan sistem keamanan autentikasi.",
    features: ["User authentication (Supabase)", "Income & expense tracking", "Savings Goal & target tracker", "Interactive financial analytics (Recharts)", "Compound interest investment calculator", "Responsive design with Dark/Light mode theme"],
    github: "https://github.com/mhmmdzlfnn/FinTrack",
    preview: "/fintrack-preview.png",
    color: "#6C63FF",
    emoji: "💰",
  },
  {
    id: 3,
    title: "KIW-Photo",
    tagline: "Platform Manajemen Foto berbasis Web",
    stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    description: "Aplikasi web untuk manajemen dan berbagi foto secara kolaboratif. Dibangun bersama tim dan telah memperoleh pengakuan resmi Hak Kekayaan Intelektual (HKI) dari Direktorat Jenderal Kekayaan Intelektual Republik Indonesia.",
    features: ["Photo upload & management", "Collaborative team project", "HKI Certified by DJKI RI", "Web-based platform", "User-friendly interface"],
    github: "https://github.com/SulthanAndyno/KIW-Photo",
    live: "https://kiw-photo.netlify.app",
    hki: "/sertifikat-hki-kiw-photo.pdf",
    color: "#F59E0B",
    emoji: "📸",
  },
];

const CERTS = [
  { title: "Front End Web Development", issuer: "Dicoding Indonesia", date: "April 2026", icon: "🏆" },
];

// ── Project Modal ────────────────────────────────────────────────────
function ProjectModal({ project, onClose }: { project: typeof PROJECTS[0]; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = "auto"; };
  }, []);
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      style={{ background: "rgba(10,15,30,0.9)", backdropFilter: "blur(16px)" }}
      onClick={onClose}>
      <motion.div initial={{ opacity: 0, scale: 0.92, y: 24 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.92, y: 24 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="glass-strong rounded-3xl w-full max-w-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div className="p-6 border-b flex items-start justify-between gap-4" style={{ borderColor: "var(--border)" }}>
          <div className="flex items-center gap-4">
            <span className="text-4xl">{project.emoji}</span>
            <div>
              <h3 className="text-2xl font-bold" style={{ color: "var(--text)" }}>{project.title}</h3>
              <p className="text-sm mt-0.5" style={{ color: "var(--text-muted)" }}>{project.tagline}</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-full transition-colors flex-shrink-0"
            style={{ background: "var(--border)", color: "var(--text-muted)" }}>
            <X size={18} />
          </button>
        </div>
        {/* Body */}
        <div className="p-6 space-y-6">
          {/* Preview Image */}
          {project.preview && (
            <div className="w-full rounded-2xl overflow-hidden" style={{ border: `1px solid ${project.color}44` }}>
              <img src={project.preview} alt={`${project.title} preview`} className="w-full h-auto object-cover" />
            </div>
          )}
          {/* Description */}
          <div className="p-4 rounded-2xl" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
            <p className="leading-relaxed text-sm" style={{ color: "var(--text-muted)" }}>{project.description}</p>
          </div>
          {/* Stack */}
          <div>
            <h4 className="font-semibold text-sm mb-3 font-mono" style={{ color: project.color }}>// Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.stack.map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
          {/* Features */}
          <div>
            <h4 className="font-semibold text-sm mb-3 font-mono" style={{ color: project.color }}>// Key Features</h4>
            <div className="space-y-2">
              {project.features.map(f => (
                <div key={f} className="flex items-center gap-2 text-sm" style={{ color: "var(--text-muted)" }}>
                  <ChevronRight size={14} style={{ color: project.color }} />
                  {f}
                </div>
              ))}
            </div>
          </div>
          {/* CTA */}
          <a href={project.github} target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm transition-all"
            style={{ background: project.color, color: "#0A0F1E" }}>
            <Github size={16} /> View on GitHub
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ── Main ─────────────────────────────────────────────────────────────
// ── Contact Section ──────────────────────────────────────────────────
function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("loading");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: W3F_ACCESS_KEY,
          name: form.name,
          email: form.email,
          message: form.message,
          subject: `Portfolio Contact: ${form.name}`,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputStyle = {
    background: "var(--surface)",
    border: "1px solid var(--border-2)",
    color: "var(--text)",
    borderRadius: "0.75rem",
    padding: "0.75rem 1rem",
    width: "100%",
    fontSize: "0.875rem",
    outline: "none",
    transition: "border-color 0.2s",
  } as React.CSSProperties;

  return (
    <motion.section id="contact" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}
      className="relative rounded-3xl overflow-hidden"
      style={{ background: "linear-gradient(135deg, var(--surface) 0%, #0D1B2E 100%)", border: "1px solid var(--border-2)" }}>
      <Particles />
      <div className="relative z-10 p-8 md:p-12">
        {/* Header */}
        <div className="text-center mb-10">
          <motion.p variants={fadeUp} className="font-mono text-sm mb-2" style={{ color: "var(--cyan)" }}>// Let's connect</motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-black mb-3" style={{ color: "var(--text)" }}>
            Ada project yang mau <span className="gradient-text">kita bangun bersama?</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-sm max-w-md mx-auto" style={{ color: "var(--text-muted)" }}>
            Kirim pesan langsung — saya akan balas secepatnya!
          </motion.p>
        </div>

        {/* Form + Info side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Left — Info */}
          <motion.div variants={fadeUp} className="flex flex-col justify-center gap-6">
            {[
              { icon: <Mail size={18} />, label: "Email", value: "muhammadzulfanaulia@gmail.com", href: "mailto:muhammadzulfanaulia@gmail.com" },
              { icon: <Github size={18} />, label: "GitHub", value: "github.com/mhmmdzlfnn", href: "https://github.com/mhmmdzlfnn" },
              { icon: <Linkedin size={18} />, label: "LinkedIn", value: "Muhammad Zulfan Aulia", href: "https://www.linkedin.com/in/muhammad-zulfan-aulia" },
            ].map(item => (
              <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl glass card-hover"
                style={{ border: "1px solid var(--border)", textDecoration: "none" }}>
                <span className="p-2 rounded-lg flex-shrink-0" style={{ background: "var(--cyan-dim)", color: "var(--cyan)" }}>
                  {item.icon}
                </span>
                <div>
                  <p className="text-xs font-mono mb-0.5" style={{ color: "var(--text-muted)" }}>{item.label}</p>
                  <p className="text-sm font-medium" style={{ color: "var(--text)" }}>{item.value}</p>
                </div>
                <ArrowUpRight size={14} className="ml-auto flex-shrink-0" style={{ color: "var(--text-faint)" }} />
              </a>
            ))}
          </motion.div>

          {/* Right — Form */}
          <motion.div variants={fadeUp}>
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                  className="h-full flex flex-col items-center justify-center gap-4 p-8 rounded-2xl text-center"
                  style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                  <CheckCircle size={48} style={{ color: "var(--cyan)" }} />
                  <h3 className="font-bold text-xl" style={{ color: "var(--text)" }}>Pesan Terkirim! 🎉</h3>
                  <p className="text-sm" style={{ color: "var(--text-muted)" }}>Terima kasih! Saya akan segera membalas.</p>
                  <button onClick={() => setStatus("idle")} className="text-sm font-mono" style={{ color: "var(--cyan)" }}>
                    Kirim pesan lain →
                  </button>
                </motion.div>
              ) : (
                <motion.form key="form" ref={formRef} onSubmit={handleSubmit}
                  className="p-6 rounded-2xl flex flex-col gap-4"
                  style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-mono mb-1.5" style={{ color: "var(--text-muted)" }}>Nama *</label>
                    <input name="name" value={form.name} onChange={handleChange} placeholder="Nama kamu"
                      required style={inputStyle}
                      onFocus={e => (e.target as HTMLElement).style.borderColor = "var(--cyan)"}
                      onBlur={e => (e.target as HTMLElement).style.borderColor = "var(--border-2)"} />
                  </div>
                  {/* Email */}
                  <div>
                    <label className="block text-xs font-mono mb-1.5" style={{ color: "var(--text-muted)" }}>Email *</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="email@kamu.com"
                      required style={inputStyle}
                      onFocus={e => (e.target as HTMLElement).style.borderColor = "var(--cyan)"}
                      onBlur={e => (e.target as HTMLElement).style.borderColor = "var(--border-2)"} />
                  </div>
                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono mb-1.5" style={{ color: "var(--text-muted)" }}>Pesan *</label>
                    <textarea name="message" value={form.message} onChange={handleChange} placeholder="Ceritain project atau ide kamu..."
                      required rows={4} style={{ ...inputStyle, resize: "none" }}
                      onFocus={e => (e.target as HTMLElement).style.borderColor = "var(--cyan)"}
                      onBlur={e => (e.target as HTMLElement).style.borderColor = "var(--border-2)"} />
                  </div>
                  {/* Error */}
                  {status === "error" && (
                    <div className="flex items-center gap-2 text-sm p-3 rounded-lg" style={{ background: "#ff000022", color: "#ff6b6b", border: "1px solid #ff000044" }}>
                      <AlertCircle size={14} /> Gagal kirim. Coba lagi atau email langsung.
                    </div>
                  )}
                  {/* Submit */}
                  <button type="submit" disabled={status === "loading"}
                    className="flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all glow-cyan"
                    style={{ background: "var(--cyan)", color: "#0A0F1E", opacity: status === "loading" ? 0.7 : 1 }}>
                    {status === "loading" ? (
                      <span className="flex items-center gap-2">
                        <Loader2 size={16} className="animate-spin" />
                        <span>Mengirim...</span>
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send size={16} />
                        <span>Kirim Pesan</span>
                      </span>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

// ── Main ─────────────────────────────────────────────────────────────
export default function Home() {

  const role = useTyping(ROLES);
  const [activeProject, setActiveProject] = useState<typeof PROJECTS[0] | null>(null);
  const [skillsVisible, setSkillsVisible] = useState(false);
  const skillsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setSkillsVisible(true); }, { threshold: 0.2 });
    if (skillsRef.current) obs.observe(skillsRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <main className="min-h-screen grid-bg" style={{ background: "var(--bg)" }}>
      {/* ── NAV ── */}
      <nav className="sticky top-0 z-40 flex justify-between items-center px-6 py-4 max-w-5xl mx-auto"
        style={{ background: "rgba(10,15,30,0.8)", backdropFilter: "blur(20px)" }}>
        <span className="font-mono font-bold text-lg gradient-text">ZA_</span>
        <div className="flex items-center gap-6">
          {["about","skills","projects","contact"].map(s => (
            <a key={s} href={`#${s}`} className="nav-link hidden md:block capitalize">{s}</a>
          ))}
          <a href="#contact"
            className="px-4 py-2 rounded-full text-sm font-semibold transition-all glow-cyan"
            style={{ background: "var(--cyan)", color: "#0A0F1E" }}>
            Hire Me
          </a>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 pb-20">

        {/* ── HERO ── */}
        <section className="relative pt-16 pb-20 overflow-hidden" id="about">
          <Particles />
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
            {/* Text */}
            <motion.div initial="hidden" animate="visible" variants={stagger} className="flex-1">
              <motion.div variants={fadeUp} className="flex items-center gap-2 mb-4">
                <span className="tag">Available for Work</span>
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "var(--cyan)" }} />
              </motion.div>

              <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-black mb-3 leading-tight" style={{ color: "var(--text)" }}>
                Muhammad<br />
                <span className="gradient-text">Zulfan Aulia</span>
              </motion.h1>

              <motion.div variants={fadeUp} className="flex items-center gap-2 text-xl md:text-2xl font-mono mb-6" style={{ color: "var(--text-muted)" }}>
                <span style={{ color: "var(--cyan)" }}>&gt;</span>
                <span>{role}</span>
                <span className="cursor">|</span>
              </motion.div>

              <motion.p variants={fadeUp} className="text-base leading-relaxed mb-8 max-w-md" style={{ color: "var(--text-muted)" }}>
              Seorang mahasiswa Telkom University yang sedang aktif meningkatkan & membangun skill di bidang Web Developer.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
                <a href="#projects"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all glow-cyan"
                  style={{ background: "var(--cyan)", color: "#0A0F1E" }}>
                  View Projects <ChevronRight size={16} />
                </a>
                <a href="https://github.com/mhmmdzlfnn" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold glass transition-all hover:border-[var(--cyan)]"
                  style={{ color: "var(--text)" }}>
                  <Github size={16} /> GitHub
                </a>
              </motion.div>

              <motion.div variants={fadeUp} className="flex gap-4 mt-8">
                {[
                  { icon: <Github size={18} />, href: "https://github.com/mhmmdzlfnn", label: "GitHub" },
                  { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/muhammad-zulfan-aulia", label: "LinkedIn" },
                  { icon: <Mail size={18} />, href: "mailto:muhammadzulfanaulia@gmail.com", label: "Email" },
                ].map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="p-3 rounded-full glass transition-all"
                    style={{ color: "var(--text-muted)" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "var(--cyan)"; (e.currentTarget as HTMLElement).style.borderColor = "var(--cyan)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "var(--text-muted)"; (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; }}>
                    {s.icon}
                  </a>
                ))}
              </motion.div>
            </motion.div>

            {/* Photo */}
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="relative flex-shrink-0">
              <div className="animated-border rounded-full p-1">
                <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden" style={{ background: "var(--surface)" }}>
                  <img src="/zulfan.png" alt="Muhammad Zulfan Aulia" className="w-full h-full object-cover" />
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* ── SKILLS ── */}
        <motion.section ref={skillsRef} id="skills" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger} className="mb-20">
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-2">
            <Terminal size={20} style={{ color: "var(--cyan)" }} />
            <h2 className="text-2xl font-bold" style={{ color: "var(--text)" }}>Tech Stack</h2>
          </motion.div>

          <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SKILLS.map((sk, i) => (
              <motion.div key={sk.name} variants={fadeUp}
                className="glass rounded-2xl p-5 card-hover"
                style={{ border: "1px solid var(--border)" }}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2" style={{ color: "var(--text)" }}>
                    <span style={{ color: "var(--cyan)" }}>{sk.icon}</span>
                    <span className="font-medium text-sm">{sk.name}</span>
                  </div>
                  <span className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>{sk.level}%</span>
                </div>
                <div className="skill-bar-bg">
                  <div className="skill-bar-fill" style={{ width: skillsVisible ? `${sk.level}%` : "0%", transitionDelay: `${i * 0.05}s` }} />
                </div>
                <span className="text-xs mt-2 block" style={{ color: "var(--text-faint)" }}>{sk.cat}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* ── PROJECTS ── */}
        <motion.section id="projects" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger} className="mb-20">
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-2">
            <Code2 size={20} style={{ color: "var(--cyan)" }} />
            <h2 className="text-2xl font-bold" style={{ color: "var(--text)" }}>Projects</h2>
          </motion.div>

          <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECTS.map(p => (
              <motion.div key={p.id} variants={fadeUp}
                className="glass rounded-2xl overflow-hidden card-hover cursor-pointer"
                style={{ border: "1px solid var(--border)" }}
                onClick={() => p.live ? window.open(p.live, "_blank") : setActiveProject(p)}>
                {/* Color bar */}
                <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${p.color}, transparent)` }} />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{p.emoji}</span>
                      <div>
                        <h3 className="font-bold text-lg" style={{ color: "var(--text)" }}>{p.title}</h3>
                        <p className="text-xs" style={{ color: p.color }}>{p.tagline}</p>
                      </div>
                    </div>
                    {p.live && <span className="text-xs font-mono px-2 py-0.5 rounded-full" style={{ background: `${p.color}22`, color: p.color, border: `1px solid ${p.color}44` }}>🟢 Live</span>}
                  </div>
                  <p className="text-sm leading-relaxed mb-5 line-clamp-3" style={{ color: "var(--text-muted)" }}>{p.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.stack.slice(0, 4).map(t => <span key={t} className="tag" style={{ color: p.color, borderColor: `${p.color}44`, background: `${p.color}11` }}>{t}</span>)}
                  </div>
                  <div className="flex items-center justify-between pt-4" style={{ borderTop: "1px solid var(--border)" }}>
                    <a href={p.github} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs font-mono transition-colors"
                      style={{ color: "var(--text-muted)" }}
                      onClick={e => e.stopPropagation()}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = p.color}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "var(--text-muted)"}>
                      <Github size={12} /> GitHub
                    </a>
                    {p.live ? (
                      <a href={p.live} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs font-semibold"
                        style={{ color: p.color }}
                        onClick={e => e.stopPropagation()}>
                        Live Demo <ExternalLink size={12} />
                      </a>
                    ) : (
                      <button className="flex items-center gap-1 text-xs font-semibold" style={{ color: p.color }}>
                        Detail <ExternalLink size={12} />
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* ── CERTIFICATIONS ── */}
        <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger} className="mb-20">
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-2">
            <Server size={20} style={{ color: "var(--cyan)" }} />
            <h2 className="text-2xl font-bold" style={{ color: "var(--text)" }}>Certifications & Achievements</h2>
          </motion.div>
          <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* HKI Card */}
            <motion.div variants={fadeUp}
              className="glass rounded-2xl p-6 card-hover"
              style={{ border: "1px solid #F59E0B44", background: "linear-gradient(135deg, var(--surface) 0%, #F59E0B08 100%)" }}>
              <div className="flex items-start gap-4">
                <span className="text-3xl">📜</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h3 className="font-bold text-sm" style={{ color: "var(--text)" }}>Hak Kekayaan Intelektual (HKI)</h3>
                    <span className="text-xs font-mono px-2 py-0.5 rounded-full flex-shrink-0" style={{ background: "#F59E0B22", color: "#F59E0B", border: "1px solid #F59E0B44" }}>🏅 Resmi DJKI RI</span>
                  </div>
                  <p className="text-xs mb-1" style={{ color: "#F59E0B" }}>KIW-Photo · Kolaborasi Tim</p>
                  <p className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>Direktorat Jenderal Kekayaan Intelektual, Republik Indonesia — 2026</p>
                  <a href="/sertifikat-hki-kiw-photo.pdf" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg transition-all"
                    style={{ background: "#F59E0B22", color: "#F59E0B", border: "1px solid #F59E0B44" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#F59E0B33"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#F59E0B22"; }}>
                    <ExternalLink size={12} /> Lihat Sertifikat
                  </a>
                </div>
              </div>
            </motion.div>
            {/* Ongoing Card */}
            <motion.div variants={fadeUp} className="glass rounded-2xl p-6 flex items-center gap-4" style={{ border: "1px solid var(--border)" }}>
              <span className="text-3xl">🚧</span>
              <div>
                <p className="font-semibold" style={{ color: "var(--text)" }}>On Going...</p>
                <p className="text-sm font-mono" style={{ color: "var(--text-muted)" }}>Sedang dalam proses — stay tuned!</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* ── CONTACT ── */}
        <ContactSection />

      </div>

      {/* ── FOOTER ── */}
      <footer className="border-t py-8" style={{ borderColor: "var(--border)" }}>
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-2">
          <span className="font-mono font-bold gradient-text">ZA_</span>
          <p className="text-xs font-mono" style={{ color: "var(--text-faint)" }}>
            © {new Date().getFullYear()} Muhammad Zulfan Aulia
          </p>
          <div className="flex gap-4">
            {[
              { icon: <Github size={16} />, href: "https://github.com/mhmmdzlfnn" },
              { icon: <Linkedin size={16} />, href: "https://www.linkedin.com/in/muhammad-zulfan-aulia" },
              { icon: <Mail size={16} />, href: "mailto:muhammadzulfanaulia@gmail.com" },
            ].map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                className="transition-colors" style={{ color: "var(--text-faint)" }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "var(--cyan)"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "var(--text-faint)"}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </footer>

      {/* ── MODAL ── */}
      <AnimatePresence>
        {activeProject && <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />}
      </AnimatePresence>
    </main>
  );
}
