<div align="center">

# 🌐 ANDRIANSYAH — CLOUD & INFRASTRUCTURE SYSTEMS ARCHITECT
### Executive Interactive Web Portfolio & Engineering Dossier

[![Live Site](https://img.shields.io/badge/Production-Live-00ff88?style=for-the-badge&logo=vercel&logoColor=black)](https://github.com/sudo-p3rziv4l/CV_Andriansyah)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![JavaScript](https://img.shields.io/badge/Vanilla_JS-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

<p align="center">
  <strong>High-performance, accessibility-focused, and zero-runtime-dependency interactive portfolio website built for DevOps, Network, and Infrastructure Engineering showcasing.</strong>
</p>

[Explore Live Demo](#-local-development) • [Features](#-key-features) • [Architecture](#-directory-structure) • [Deployment](#-deployment-to-vercel)

---

</div>

## 📌 Overview

Website portofolio interaktif ini dirancang dengan estetika **Executive Monolith Dark Theme** terinspirasi dari arsitektur *Stripe* dan *Apple Engineering*. Dibangun menggunakan **HTML5 semantik**, **Tailwind CSS modern**, dan **Vanilla JavaScript murni** tanpa *framework overhead*, menghasilkan kecepatan rendering instan, skor aksesibilitas tinggi, serta performa maksimal saat diakses dari perangkat mobile maupun desktop.

---

## ✨ Key Features

- **🌐 Full Bilingual Support (ID / EN)**:
  - Tombol switcher instan `[translate] EN / ID` di navigation bar atas tanpa reload halaman.
  - State bahasa otomatis tersimpan secara persisten di `localStorage`.
- **📥 Dual-Language Curriculum Vitae Dropdown**:
  - Pilihan download CV interaktif dengan dukungan *hover* (desktop) dan *touch/click* (mobile):
    - 🇬🇧 **English Version** (`assets/docs/CV_Andriansyah_EN.pdf`)
    - 🇮🇩 **Versi Bahasa Indonesia** (`assets/docs/CV_Andriansyah_ID.pdf`)
- **💻 Interactive Monolith CLI Emulator**:
  - Simulator terminal shell di bagian bawah yang merespons perintah UNIX-style: `help`, `status`, `skills`, `experience`, `certs`, `contact`, `download`, dan `clear`.
  - Dilengkapi tombol direct shortcut untuk eksekusi perintah cepat.
- **📜 Verified Credentials & Interactive Modal**:
  - Kartu sertifikasi resmi industri terverifikasi (**MikroTik MTCNA**, **MikroTik MTCRE**, dan **Fortinet NSE 4**) lengkap dengan dialog detail silabus dan status audit kriptografis.
  - Dilengkapi *accessibility focus trap* dan navigasi keyboard (dukungan tombol `Esc`).
- **⏱️ Live Telemetry & UTC Clock**:
  - Clock datacenter real-time berbasis UTC ISO-8601 di header status bar.
  - Simulasi jitter telemetri performa sistem (*latency*, *CPU load*, *RAM utilization*).
- **📋 Ergonomic Copy-to-Clipboard**:
  - Tombol satu-klik untuk menyalin alamat email dan nomor WhatsApp/telepon dengan visual floating HUD toast notification (`role="status"`).
- **♿ Web Interface Guidelines Compliant**:
  - Aksesibilitas keyboard penuh dengan *skip-to-content link*.
  - Dukungan `@media (prefers-reduced-motion: reduce)`.
  - Zero Cumulative Layout Shift (CLS) dengan explicit image dimensions dan eager decoding.

---

## 📂 Directory Structure

```text
E:\andre\aplikasi gue\CV andre\
├── index.html                   # Entrypoint utama web portofolio
├── vercel.json                  # Konfigurasi Vercel (clean URLs, rewrites, caching, headers)
├── .gitignore                   # Aturan pengabaian file sementara / OS
├── README.md                    # Dokumentasi repositori
│
└── assets/                      # Seluruh aset statis modular
    ├── css/
    │   └── style.css            # Custom CSS (gradient borders, noise effect, motion rules)
    ├── docs/
    │   ├── CV_Andriansyah_EN.pdf # Official CV - English version
    │   └── CV_Andriansyah_ID.pdf # Official CV - Versi Bahasa Indonesia
    ├── images/
    │   ├── andrian.jpg          # Foto profil portrait resolusi tinggi
    │   └── favicon/
    │       ├── favicon.ico      # Favicon format ICO
    │       └── favicon.png      # Favicon format PNG
    └── js/
        └── monolith.js          # Client runtime (i18n, CLI emulator, modal, dropdown)
```

---

## 🛠️ Tech Stack & Foundations

| Domain | Teknologi / Konfigurasi |
| :--- | :--- |
| **Markup & Semantics** | HTML5, WAI-ARIA Accessible Roles (`role="dialog"`, `role="log"`, `role="status"`) |
| **Styling & Layout** | Tailwind CSS CDN, Flexbox, CSS Grid Bento, Custom Motion Queries |
| **Typography** | Plus Jakarta Sans, Space Grotesk, JetBrains Mono, Google Material Symbols |
| **Client Scripting** | Vanilla JavaScript (ES6+), Event Delegation, DOM State Controller |
| **Hosting & CI/CD** | Vercel Edge Network, HTTP/2, Static Cache Headers, Clean URLs |

---

## 🚀 Local Development

Untuk menjalankan dan melihat portofolio di lingkungan lokal:

### Opsi 1: Menggunakan Node.js `serve` (Rekomendasi)
```bash
# Jalankan web server lokal di port 3000
npx serve -l 3000
```
Buka peramban di: `http://localhost:3000`

### Opsi 2: Menggunakan Python 3
```bash
python -m http.server 3000
```

### Opsi 3: Menggunakan VS Code Live Server
Klik kanan pada file `index.html` > pilih **"Open with Live Server"**.

---

## 🌐 Deployment to Vercel

Project ini sudah dilengkapi konfigurasi `vercel.json` dengan *clean URLs*, *security headers*, dan optimasi cache aset.

### Deploy via Vercel CLI:
```bash
# Login dan inisialisasi deployment
npx vercel

# Deploy ke production
npx vercel --prod
```

### Deploy via GitHub Integration:
1. Hubungkan repositori GitHub ini ke dashboard [Vercel](https://vercel.com).
2. Pilih framework preset: **Other** (Statis).
3. Root Directory: `./`.
4. Klik **Deploy** — Vercel akan otomatis mengenali `index.html` dan `vercel.json`.

---

## 👨‍💻 Profile & Contacts

**Andriansyah**  
*DevOps Engineer • Network Engineer • Sysadmin • Infrastructure Architect*  
Bekasi & Jakarta, Indonesia

- 📧 **Email**: [andrisyh9012@gmail.com](mailto:andrisyh9012@gmail.com)
- 💼 **LinkedIn**: [linkedin.com/in/andrian-syah9012](https://linkedin.com/in/andrian-syah9012)
- 🐙 **GitHub**: [@sudo-p3rziv4l](https://github.com/sudo-p3rziv4l)
- 📱 **WhatsApp / Tel**: [+62 878-9948-1932](https://wa.me/6287899481932)

---

<div align="center">
  <sub>Designed &amp; Engineered with Precision by Andriansyah. © 2026 All Rights Reserved.</sub>
</div>
