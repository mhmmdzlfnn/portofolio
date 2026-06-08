# 🌐 Muhammad Zulfan Aulia — Portfolio

> Personal portfolio website built with **Next.js 16**, **Tailwind CSS**, and **Framer Motion**.  
> Dark theme · Glassmorphism · Smooth animations · EmailJS contact form.

---

## ✨ Features

- 🌙 **Dark Mode** — deep navy background with cyan & purple accents
- 🎞️ **Framer Motion Animations** — smooth fade, slide, and float effects
- 💌 **Contact Form** — powered by EmailJS, no backend required
- 📱 **Responsive** — works on mobile, tablet, and desktop
- ⚡ **Fast** — built with Next.js 16 Turbopack
- 🧠 **Typing Animation** — dynamic role display in hero section
- 🔗 **Live Project Links** — direct link to deployed apps

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Email | EmailJS |
| Icons | Lucide React |
| Font | Inter + JetBrains Mono |
| Deploy | Vercel / GitHub Pages |

---

## 📂 Project Structure

```
portofolio-main/
├── app/
│   ├── page.tsx        # Main portfolio page
│   ├── layout.tsx      # Root layout + SEO metadata
│   └── globals.css     # Design tokens & global styles
├── public/
│   ├── zulfan.png      # Profile photo
│   └── fintrack-preview.png  # FinTrack screenshot
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone repo
git clone https://github.com/mhmmdzlfnn/portofolio.git
cd portofolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📧 Setup EmailJS (Contact Form)

1. Daftar gratis di [emailjs.com](https://emailjs.com)
2. Buat **Email Service** → hubungkan ke Gmail
3. Buat **Email Template** dengan variabel `{{name}}`, `{{email}}`, `{{message}}`
4. Buka `app/page.tsx` dan isi di bagian ini:

```ts
const EJ_SERVICE  = "YOUR_SERVICE_ID";
const EJ_TEMPLATE = "YOUR_TEMPLATE_ID";
const EJ_PUBLIC   = "YOUR_PUBLIC_KEY";
```

---

## 🌍 Sections

| Section | Description |
|---|---|
| **Hero** | Name, typing animation, profile photo, social links |
| **Tech Stack** | Skills with animated progress bars |
| **Projects** | Grow.it (live) & FinTrack with modals |
| **Certifications** | On Going... |
| **Contact** | EmailJS form + social info cards |

---

## 📦 Projects Showcased

### 🌱 Grow.it
Habit tracker dengan tema taman digital, AI Zen Master (Gemini 2.0), Pomodoro, streak heatmap, dan efek suara sintetis.
- 🔗 Live: [grow-it-773439353729.asia-southeast2.run.app](https://grow-it-773439353729.asia-southeast2.run.app/)
- 📁 Repo: [github.com/mhmmdzlfnn/Grow.it](https://github.com/mhmmdzlfnn/Grow.it)

### 💰 FinTrack
Aplikasi manajemen keuangan pribadi dengan Firebase Auth, expense tracking, dan analytics dashboard.
- 📁 Repo: [github.com/mhmmdzlfnn/FinTrack](https://github.com/mhmmdzlfnn/FinTrack)

---

## 📬 Contact

| Platform | Link |
|---|---|
| Email | muhammadzulfanaulia@gmail.com |
| GitHub | [github.com/mhmmdzlfnn](https://github.com/mhmmdzlfnn) |
| LinkedIn | [linkedin.com/in/muhammad-zulfan-aulia](https://www.linkedin.com/in/muhammad-zulfan-aulia) |

---

## 📄 License

MIT © 2026 Muhammad Zulfan Aulia
