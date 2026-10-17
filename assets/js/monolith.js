// =========================================================================
// ANDRIANSYAH // EXECUTIVE MONOLITH PORTFOLIO JAVASCRIPT
// Dynamic Telemetry, Interactive Shell, Modal Drawer, Toast & Bilingual i18n
// =========================================================================

// --- 0. BILINGUAL DICTIONARY (INDONESIAN & ENGLISH) ---
const I18N = {
  id: {
    nav: {
      overview: "Overview",
      experience: "Pengalaman",
      architecture: "Keahlian & Stack",
      credentials: "Sertifikasi",
      inquire: "Inisialisasi"
    },
    hero: {
      badge: "Enterprise Systems Dossier",
      headlinePrefix: "Architecting",
      headlineAccent: "Resilient Cloud",
      headlineSuffix: "Infrastructure.",
      bio: "Insinyur Sistem & Keamanan Jaringan berpengalaman merancang ekosistem komputasi berkinerja tinggi. Mengintegrasikan perimeter keamanan fisik enterprise, virtualisasi multi-node Proxmox, orkestrasi Kubernetes terdistribusi, serta automasi GitOps zero-downtime.",
      ctaContact: "Hubungi Langsung",
      ctaDownload: "Download CV PDF",
      ctaLinkedin: "Profil LinkedIn"
    },
    stats: {
      expLabel: "Experience Track",
      expValue: "5+ Tahun",
      expSub: "Infrastruktur & Telekomunikasi",
      sloLabel: "Service Reliability",
      sloSub: "Target Production SLO & MTTR",
      networkLabel: "Core Network",
      networkSub: "MikroTik, Fortigate & VLAN Routing",
      gitopsLabel: "Deployment Logic",
      gitopsSub: "Automated Declarative Sync"
    },
    exp: {
      sectionTag: "// REKAM JEJAK",
      title: "Riwayat Karir & Eksekusi Lapangan",
      subtitle: "Rekam jejak kepemimpinan infrastruktur, transformasi sistem mission-critical, dan mitigasi bottleneck konektivitas enterprise.",
      dikaPeriod: "Aug 2025 — Sekarang",
      dikaBullet1: "<strong>CI/CD Pipelines:</strong> Merancang dan mengimplementasikan pipeline continuous integration & continuous deployment menyeluruh berbasis <strong>GitHub Actions</strong> untuk memangkas intervensi manual saat build image kontainer, linting, testing, dan deployment bertingkat.",
      dikaBullet2: "<strong>Containerization & Portability:</strong> Menstandarisasi aplikasi monolitik dan microservices ke dalam <strong>Docker Container</strong> teroptimasi, menjamin reliabilitas dan konsistensi mutlak antara lingkungan staging dan produksi.",
      dikaBullet3: "<strong>Kubernetes & GitOps:</strong> Mengorkestrasi cluster <strong>Kubernetes</strong> dengan continuous delivery berbasis GitOps menggunakan <strong>ArgoCD</strong> guna memastikan declarative state synchronization tanpa down-time.",
      dikaBullet4: "<strong>Observability Terpadu:</strong> Menghubungkan metrik telemetry melalui <strong>Prometheus</strong> serta membangun visualization dashboard analitis interaktif di <strong>Grafana</strong> untuk deteksi anomali server real-time.",
      dikaBullet5: "<strong>Infrastruktur Telemarketing (Zero-to-One):</strong> Insinyur kunci perancang infrastruktur telemarketing dari scratch — meliputi topologi fisik, isolasi VLAN, alokasi bandwidth, hingga routing microservices.",
      dikaNetPeriod: "Okt 2024 — Aug 2025",
      dikaNetDesc: "Memimpin audit redesain topologi jaringan eksisting, mengoptimasi alur routing table, serta memasang perimeter security <strong>Fortigate</strong> (firewall policies, IPS filtration) dan segmentasi VLAN antar-divisi guna mereduksi ancaman pergerakan lateral.",
      caturTitle: "Pengajar Teknis (TKJ)",
      caturPeriod: "Aug 2019 — Okt 2024",
      caturDesc: "Membimbing ratusan siswa dalam simulasi dan lab riil switching, routing MikroTik, serta mengarsiteki sistem high-load <strong>Moodle CBT</strong> yang bertahan dari ribuan simultaneous request siswa tanpa freeze saat ujian nasional."
    },
    skills: {
      sectionTag: "// KEMAMPUAN INTI",
      title: "Keahlian Sistem & Arsitektur Cloud",
      subtitle: "Fondasi teknis holistik mencakup level hardware fisik, hypervisor, orkestrasi container, hingga audit keamanan."
    },
    edu: {
      unindra: "Teknik Informatika (Sep 2019 — Okt 2020)",
      higher: "Perguruan Tinggi",
      smk: "Teknik Komputer dan Jaringan (Jul 2017 — Jun 2019)",
      vocational: "Pendidikan Kejuruan"
    },
    cert: {
      sectionTag: "// VERIFIKASI KREDENSIAL",
      title: "Sertifikasi & Lisensi Resmi",
      subtitle: "Kredensial industri terverifikasi secara global oleh penyedia perangkat jaringan dan keamanan terkemuka.",
      mtcnaDesc: "Kompetensi tingkat profesional dalam konfigurasi dasar RouterOS, subnetting, bandwidth management, firewall NAT, dan wireless routing.",
      mtcreDesc: "Penguasaan mendalam protokol routing lanjutan OSPF, multiple area routing, VPN tunnel encapsulation (EoIP, IPIP, PPTP, L2TP), dan routing filter.",
      nse4Desc: "Keahlian arsitektur keamanan gateway korporat: deployment FortiOS, inspeksi traffic SSL terenkripsi, filter antivirus perimeter, serta high-availability failover cluster."
    },
    lang: {
      idLevel: "Penutur Asli (Native)",
      enLevel: "Tingkat Profesional (Professional)"
    },
    contact: {
      title: "Siap Membangun Infrastruktur Skala Enterprise?",
      desc: "Terbuka untuk diskusi posisi <strong>DevOps Engineer</strong>, <strong>Site Reliability Engineer (SRE)</strong>, <strong>Cloud Infrastructure Architect</strong>, maupun konsultasi arsitektur jaringan high-availability.",
      emailBtn: "Kirim Email Langsung (andrisyh9012@gmail.com)",
      linkedinBtn: "Terhubung di LinkedIn",
      downloadBtn: "Download CV PDF"
    }
  },
  en: {
    nav: {
      overview: "Overview",
      experience: "Experience",
      architecture: "Capabilities & Stack",
      credentials: "Credentials",
      inquire: "Inquire"
    },
    hero: {
      badge: "Enterprise Systems Dossier",
      headlinePrefix: "Architecting",
      headlineAccent: "Resilient Cloud",
      headlineSuffix: "Infrastructure.",
      bio: "Systems & Network Security Engineer experienced in designing high-performance computing ecosystems. Seamlessly integrating physical enterprise perimeters, multi-node Proxmox virtualization, distributed Kubernetes orchestration, and zero-downtime GitOps automation.",
      ctaContact: "Get in Touch",
      ctaDownload: "Download CV PDF",
      ctaLinkedin: "LinkedIn Profile"
    },
    stats: {
      expLabel: "Experience Track",
      expValue: "5+ Years",
      expSub: "Infrastructure & Telecom",
      sloLabel: "Service Reliability",
      sloSub: "Target Production SLO & MTTR",
      networkLabel: "Core Network",
      networkSub: "MikroTik, Fortigate & VLAN Routing",
      gitopsLabel: "Deployment Logic",
      gitopsSub: "Automated Declarative Sync"
    },
    exp: {
      sectionTag: "// TRACK RECORD",
      title: "Professional Career & Field Execution",
      subtitle: "Proven track record of infrastructure leadership, mission-critical systems transformation, and enterprise network bottleneck mitigation.",
      dikaPeriod: "Aug 2025 — Present",
      dikaBullet1: "<strong>End-to-End CI/CD Automation:</strong> Designed and deployed comprehensive CI/CD pipelines with <strong>GitHub Actions</strong>, eliminating manual build overhead, accelerating containerization, multi-tier linting, and automated production cutover.",
      dikaBullet2: "<strong>Containerization & Portability:</strong> Standardized monolithic legacy stacks and microservices into hardened <strong>Docker Containers</strong>, achieving absolute portability across staging and high-traffic clusters.",
      dikaBullet3: "<strong>Kubernetes & GitOps Orchestration:</strong> Provisioned enterprise <strong>Kubernetes</strong> clusters coupled with declarative continuous delivery via <strong>ArgoCD</strong>, guaranteeing zero drift and zero downtime deployments.",
      dikaBullet4: "<strong>Unified Full-Stack Observability:</strong> Integrated system telemetry via <strong>Prometheus</strong> and crafted actionable operational dashboards on <strong>Grafana</strong> for real-time anomaly detection.",
      dikaBullet5: "<strong>Telemarketing Infrastructure (Zero-to-One):</strong> Principal architect engineering the high-throughput VoIP telemarketing cluster from the ground up, with strict VLAN segmentation, QoS traffic policing, and microservices routing.",
      dikaNetPeriod: "Oct 2024 — Aug 2025",
      dikaNetDesc: "Led comprehensive network topology redesign, optimized routing table efficiency, implemented enterprise <strong>FortiGate</strong> security policies (IPS filtering), and structured VLAN departmental zoning to contain lateral threats.",
      caturTitle: "Technical Networking Instructor",
      caturPeriod: "Aug 2019 — Oct 2024",
      caturDesc: "Mentored hundreds of students in advanced MikroTik routing and switching labs, while engineering a high-concurrency <strong>Moodle CBT</strong> examination cluster that sustained thousands of simultaneous student sessions without freezing."
    },
    skills: {
      sectionTag: "// CORE CAPABILITIES",
      title: "Systems Engineering & Cloud Architecture",
      subtitle: "Comprehensive full-spectrum expertise ranging from physical hardware and boundary firewalls to cloud-native container platforms."
    },
    edu: {
      unindra: "Informatics Engineering (Sep 2019 — Oct 2020)",
      higher: "Higher Education",
      smk: "Computer Network Engineering (Jul 2017 — Jun 2019)",
      vocational: "Vocational Secondary"
    },
    cert: {
      sectionTag: "// CREDENTIAL VERIFICATION",
      title: "Official Certifications & Licenses",
      subtitle: "Globally verified industry credentials issued by market-leading enterprise network & security vendors.",
      mtcnaDesc: "Professional competency in foundational RouterOS configuration, subnetting, bandwidth policing, firewall NAT, and wireless routing.",
      mtcreDesc: "Advanced mastery in OSPF dynamic routing, multi-area topology, VPN tunnel encapsulation (EoIP, IPIP, PPTP, L2TP), and routing filters.",
      nse4Desc: "Corporate gateway security architecture: FortiOS enterprise deployment, SSL inspection, perimeter antivirus, and HA failover clusters."
    },
    lang: {
      idLevel: "Native Speaker",
      enLevel: "Professional Working Proficiency"
    },
    contact: {
      title: "Ready to Architect Resilient Enterprise Infrastructure?",
      desc: "Open for discussions regarding <strong>DevOps Engineer</strong>, <strong>Site Reliability Engineer (SRE)</strong>, <strong>Cloud Infrastructure Architect</strong> roles, or high-availability consulting engagements.",
      emailBtn: "Dispatch Direct Email (andrisyh9012@gmail.com)",
      linkedinBtn: "Connect on LinkedIn",
      downloadBtn: "Download Official CV PDF"
    }
  }
};

let currentLang = localStorage.getItem('site_lang') || 'id';

document.addEventListener('DOMContentLoaded', () => {
  initUTCClock();
  initTelemetryFlux();
  initTerminalCLI();
  initCertDetailsModal();
  initCopyHandlers();
  initSmoothScroll();
  applyLanguage(currentLang);
});

// Switch Language Function
window.toggleLang = () => {
  currentLang = currentLang === 'id' ? 'en' : 'id';
  localStorage.setItem('site_lang', currentLang);
  applyLanguage(currentLang);
  showToast(currentLang === 'id' ? 'Bahasa diubah ke Bahasa Indonesia' : 'Language switched to English');
};

function applyLanguage(lang) {
  const dict = I18N[lang] || I18N.id;
  
  // Update toggle button text
  const labelEl = document.getElementById('lang-label');
  if (labelEl) {
    labelEl.textContent = lang === 'id' ? 'EN' : 'ID';
  }

  // Update HTML lang attribute
  document.documentElement.lang = lang;

  // Traverse all elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const value = getNestedValue(dict, key);
    if (value !== undefined) {
      el.innerHTML = value;
    }
  });
}

function getNestedValue(obj, path) {
  return path.split('.').reduce((acc, part) => acc && acc[part], obj);
}

// 1. Live UTC Datacenter Clock
function initUTCClock() {
  const clockEl = document.getElementById('monolith-clock');
  if (!clockEl) return;
  function update() {
    const now = new Date();
    const utc = now.toISOString().replace('T', ' ').substring(0, 19) + ' UTC';
    clockEl.textContent = utc;
  }
  update();
  setInterval(update, 1000);
}

// 2. Real-time Telemetry Flux (Latency, CPU, RAM)
function initTelemetryFlux() {
  const latencyEl = document.getElementById('stat-latency');
  const cpuEl = document.getElementById('stat-cpu');
  const ramEl = document.getElementById('stat-ram');

  setInterval(() => {
    if (latencyEl) {
      const ping = Math.floor(10 + Math.random() * 5);
      latencyEl.textContent = `${ping}ms`;
    }
    if (cpuEl) {
      const cpu = (14.2 + (Math.random() * 3.6 - 1.8)).toFixed(1);
      cpuEl.textContent = `${cpu}%`;
    }
    if (ramEl) {
      const ram = (62.1 + (Math.random() * 1.8 - 0.9)).toFixed(1);
      ramEl.textContent = `${ram}%`;
    }
  }, 3500);
}

// 3. Interactive Shell & CLI Terminal Simulator
function initTerminalCLI() {
  const inputEl = document.getElementById('cli-input');
  const outputEl = document.getElementById('cli-output');
  const formEl = document.getElementById('cli-form');
  if (!inputEl || !outputEl || !formEl) return;

  const COMMANDS = {
    help: `Available commands:
  • <span class="text-blue-400">status</span>      : Query production cluster, hypervisor, and perimeter status
  • <span class="text-blue-400">skills</span>      : Output technical stack, architecture proficiencies & tools
  • <span class="text-blue-400">experience</span>  : View chronology of engineering roles at PT DIKA & SMK
  • <span class="text-blue-400">certs</span>       : List verified licenses (MTCRE, MTCNA, Fortinet NSE4)
  • <span class="text-blue-400">contact</span>     : Output direct communication channels and PGP
  • <span class="text-blue-400">download</span>    : Retrieve official CV PDF
  • <span class="text-blue-400">clear</span>       : Flush terminal output viewport`,

    status: `<span class="text-blue-300 font-bold">SYSTEM OVERVIEW // AP-SOUTHEAST-3 (BEKASI):</span>
  ├── Kubernetes Orchestrator : <span class="text-emerald-400 font-semibold">Active // Zero CrashLoopBackOff</span>
  ├── ArgoCD GitOps Engine     : <span class="text-emerald-400 font-semibold">Healthy (In-Sync, 0 Drift)</span>
  ├── Virtualization Pool      : <span class="text-emerald-400 font-semibold">Proxmox VE Cluster // Ceph HA</span>
  ├── Network Gateway          : <span class="text-emerald-400 font-semibold">Fortigate Next-Gen Firewall & IPS Active</span>
  └── Production Reliability   : <span class="text-emerald-400 font-bold">99.98% SLO Nominal</span>`,

    skills: `<span class="text-blue-300 font-bold">TECHNICAL SPECIALIZATION MATRIX:</span>
  • <strong>DevOps &amp; Cloud:</strong> Kubernetes, ArgoCD GitOps, Docker Containerization, GitHub Actions CI/CD
  • <strong>Perimeter Defense:</strong> Fortigate NGFW, IPS Rules, MikroTik RouterOS, VLAN Trunking, Zero-Trust
  • <strong>Hypervisor &amp; Systems:</strong> Proxmox VE, Debian, RHEL, Linux Hardening, Moodle CBT Engine
  • <strong>Observability:</strong> Prometheus Exporters, Grafana Telemetry, Alertmanager, Node-Exporter`,

    experience: `<span class="text-blue-300 font-bold">CAREER RECORD:</span>
  1. <strong class="text-white">PT DIKA</strong> (Aug 2025 – Present) : DevOps Engineer
     [CI/CD Pipelines, Kubernetes, ArgoCD GitOps, Prometheus/Grafana, Proxmox VE, Linux Hardening]
  2. <strong class="text-white">PT DIKA</strong> (Okt 2024 – Aug 2025) : Network Engineer
     [Fortigate Firewall, IPS Policy, VLAN Trunking, Telephony/VoIP Network Architecture]
  3. <strong class="text-white">SMK Catur Global</strong> (Aug 2019 – Okt 2024) : IT &amp; Networking Instructor
     [MikroTik Lab Simulation, Campus LAN/WLAN, Moodle CBT Examination Cluster Deployment]`,

    certs: `<span class="text-blue-300 font-bold">VERIFIED CLEARANCES:</span>
  [01] <strong>MikroTik MTCRE</strong> (Certified Routing Engineer) - Valid through 2026
  [02] <strong>MikroTik MTCNA</strong> (Certified Network Associate) - Valid through 2026
  [03] <strong>Fortinet NSE 4</strong> (Network Security Expert 4) - Enterprise Security Specialization`,

    contact: `<span class="text-blue-300 font-bold">COMMUNICATION ENDPOINTS:</span>
  • Email    : <a href="mailto:andrisyh9012@gmail.com" class="text-white underline hover:text-blue-400">andrisyh9012@gmail.com</a>
  • GitHub   : <a href="https://github.com/sudo-p3rziv4l" target="_blank" class="text-white underline hover:text-blue-400">github.com/sudo-p3rziv4l</a>
  • WhatsApp : <a href="https://wa.me/6287899481932" target="_blank" class="text-white underline hover:text-blue-400">+62 878-9948-1932</a>
  • Phone    : <a href="tel:087899481932" class="text-white underline hover:text-blue-400">0878-9948-1932</a>
  • LinkedIn : <a href="https://linkedin.com/in/andrian-syah9012" target="_blank" class="text-white underline hover:text-blue-400">linkedin.com/in/andrian-syah9012</a>
  • Location : Bekasi, Jawa Barat, Indonesia (Open for Remote / On-Site)`,

    download: () => {
      return `<span class="text-blue-300 font-bold">&gt;&gt; SELECT CURRICULUM VITAE DOSSIER:</span><br>` +
             `  • [1] <a href="assets/docs/CV_Andriansyah_EN.pdf" download="CV_Andriansyah_EN.pdf" class="text-white underline hover:text-blue-400 font-semibold">English Version (CV_Andriansyah_EN.pdf)</a><br>` +
             `  • [2] <a href="assets/docs/CV_Andriansyah_ID.pdf" download="CV_Andriansyah_ID.pdf" class="text-white underline hover:text-emerald-400 font-semibold">Versi Bahasa Indonesia (CV_Andriansyah_ID.pdf)</a>`;
    }
  };

  formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const raw = inputEl.value.trim();
    if (!raw) return;

    const cmd = raw.toLowerCase();
    inputEl.value = '';

    const cmdLine = document.createElement('div');
    cmdLine.className = 'text-blue-400';
    cmdLine.innerHTML = `&gt; <span class="text-slate-400">exec:</span> <span class="text-white font-semibold">${escapeHtml(raw)}</span>`;
    outputEl.appendChild(cmdLine);

    if (cmd === 'clear') {
      outputEl.innerHTML = '';
      return;
    }

    const outLine = document.createElement('div');
    outLine.className = 'text-slate-300 pl-3 border-l-2 border-blue-500/40 my-1.5 text-xs font-mono leading-relaxed';

    if (COMMANDS[cmd]) {
      outLine.innerHTML = typeof COMMANDS[cmd] === 'function' ? COMMANDS[cmd]() : COMMANDS[cmd];
    } else {
      outLine.innerHTML = `<span class="text-rose-400">sh: command not recognized: ${escapeHtml(cmd)}</span>. Type <button type="button" class="text-blue-400 underline font-semibold" onclick="runCliCommand('help')">'help'</button> for directives.`;
    }

    outputEl.appendChild(outLine);
    outputEl.scrollTop = outputEl.scrollHeight;
  });

  window.runCliCommand = (cmdText) => {
    inputEl.value = cmdText;
    formEl.dispatchEvent(new Event('submit'));
    inputEl.focus();
  };
}

// 4. Certification Modal Dialog
function initCertDetailsModal() {
  const modal = document.getElementById('cert-modal');
  const title = document.getElementById('cert-modal-title');
  const org = document.getElementById('cert-modal-org');
  const desc = document.getElementById('cert-modal-desc');
  const meta = document.getElementById('cert-modal-meta');
  const closeBtn = document.getElementById('cert-modal-close');

  if (!modal || !closeBtn) return;

  const CERTS = {
    mtcre: {
      title: 'MikroTik Certified Routing Engineer (MTCRE)',
      org: 'MikroTik Certified Training Partner',
      desc: 'Sertifikasi tingkat mahir perancangan routing dinamis skala korporat, mencakup implementasi protokol OSPF multi-area, BGP peering antar autonomous systems, traffic engineering, tunneling (EoIP, IPIP, GRE, L2TP/IPsec), serta failover link berdaya tahan tinggi.',
      meta: 'AUTHENTICATION: VERIFIED MIKROTIK PORTAL // LEVEL: ENGINEER'
    },
    mtcna: {
      title: 'MikroTik Certified Network Associate (MTCNA)',
      org: 'MikroTik Training Institute',
      desc: 'Sertifikasi fondasi konfigurasi MikroTik RouterOS, manajemen bandwidth bertingkat (Simple Queues, Queue Tree, PCQ), arsitektur firewall (Filter Rules, NAT, Mangle), Wireless Access Point deployment, serta DHCP & DNS security.',
      meta: 'AUTHENTICATION: VERIFIED MIKROTIK PORTAL // LEVEL: ASSOCIATE'
    },
    nse4: {
      title: 'Fortinet Network Security Expert 4 (NSE 4)',
      org: 'Fortinet Training Institute',
      desc: 'Spesialisasi arsitektur keamanan gateway korporat: konfigurasi FortiOS, inspeksi traffic SSL/TLS terenkripsi, filter antivirus perimeter, intrusion prevention system (IPS), zero trust network access (ZTNA), dan virtual domain segmentation.',
      meta: 'AUTHENTICATION: FORTINET CERTIFIED // LEVEL: EXPERT'
    }
  };

  let lastFocusedTrigger = null;

  window.showCert = (key) => {
    const d = CERTS[key];
    if (!d) return;
    lastFocusedTrigger = document.activeElement;
    title.textContent = d.title;
    org.textContent = d.org;
    desc.textContent = d.desc;
    meta.textContent = d.meta;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.classList.add('overflow-hidden');
    closeBtn.focus();
  };

  const hide = () => {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.classList.remove('overflow-hidden');
    if (lastFocusedTrigger && typeof lastFocusedTrigger.focus === 'function') {
      lastFocusedTrigger.focus();
    }
  };

  closeBtn.addEventListener('click', hide);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) hide();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) hide();
  });
}

// 5. Copy to Clipboard with Modern Toast
function initCopyHandlers() {
  window.copyText = (content, btn) => {
    navigator.clipboard.writeText(content).then(() => {
      showToast(`Copied to clipboard: ${content}`);
      if (btn) {
        const orig = btn.innerHTML;
        btn.innerHTML = `<span class="material-symbols-outlined text-sm text-emerald-400">check</span> <span>Tersalin!</span>`;
        setTimeout(() => { btn.innerHTML = orig; }, 2000);
      }
    }).catch(err => {
      console.error(err);
      showToast(`Gagal menyalin: ${content}`);
    });
  };
}

function showToast(msg) {
  let toast = document.getElementById('monolith-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'monolith-toast';
    toast.setAttribute('role', 'status');
    toast.setAttribute('aria-live', 'polite');
    toast.className = 'fixed bottom-6 right-6 z-50 px-4 py-3 rounded-2xl bg-monolith-900/95 border border-white/20 text-white font-mono text-xs shadow-2xl backdrop-blur-xl flex items-center gap-2 transform translate-y-12 opacity-0 transition-all duration-300';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span class="material-symbols-outlined text-base text-blue-400" aria-hidden="true">info</span> <span>${escapeHtml(msg)}</span>`;
  toast.classList.remove('translate-y-12', 'opacity-0');
  toast.classList.add('translate-y-0', 'opacity-100');

  setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-12', 'opacity-0');
  }, 2800);
}

// 6. Smooth Scrolling for Anchor Links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// 7. CV Dropdown Controller (Hover & Click Handler)
window.toggleCvDropdown = (btn) => {
  const container = btn.closest('.dropdown-cv');
  if (!container) return;
  const menu = container.querySelector('.cv-dropdown-menu');
  if (!menu) return;

  const isCurrentlyOpen = menu.classList.contains('menu-active');

  // Close all open dropdowns first
  document.querySelectorAll('.cv-dropdown-menu').forEach(m => {
    m.classList.remove('menu-active');
  });
  document.querySelectorAll('.dropdown-cv').forEach(c => {
    c.classList.remove('active');
  });
  document.querySelectorAll('.dropdown-cv button').forEach(b => {
    b.setAttribute('aria-expanded', 'false');
  });

  if (!isCurrentlyOpen) {
    menu.classList.add('menu-active');
    container.classList.add('active');
    btn.setAttribute('aria-expanded', 'true');
  }
};

document.addEventListener('click', (e) => {
  if (!e.target.closest('.dropdown-cv')) {
    document.querySelectorAll('.cv-dropdown-menu').forEach(m => {
      m.classList.remove('menu-active');
    });
    document.querySelectorAll('.dropdown-cv').forEach(c => {
      c.classList.remove('active');
    });
    document.querySelectorAll('.dropdown-cv button').forEach(b => {
      b.setAttribute('aria-expanded', 'false');
    });
  }
});

// Helper: Escape HTML
function escapeHtml(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag)
  );
}
