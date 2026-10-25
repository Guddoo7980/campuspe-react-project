import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Header,
  Hero,
  Opportunity,
  Resume,
  Colleges,
  Employers,
  Support,
  Footer,
} from "./StaticSections.jsx";

const partners = [
  { id: "ginserv", alt: "GINSERV Nurturing Ventures" },
  { id: "startup", alt: "Startup Karnataka" },
  { id: "crest", alt: "Karnataka partner seal" },
  { id: "talents", alt: "TalentSpotify" },
  { id: "radiant", alt: "Radiant Info" },
  { id: "dpiit", alt: "DPIIT Startup India" },
];
const phones = [
  {
    name: "Student job discovery",
    file: "phone-1.png",
    width: 154,
    height: 321,
  },
  { name: "Post a job form", file: "phone-2.png", width: 180, height: 379 },
  {
    name: "CampusPe discovery dashboard",
    file: "phone-3.png",
    width: 226,
    height: 474,
  },
  { name: "My applications", file: "phone-4.png", width: 180, height: 380 },
  {
    name: "College course discovery",
    file: "phone-5.png",
    width: 155,
    height: 324,
  },
];

function SectionBadge({ children }) {
  return <div className="eyebrow badge">✦ {children}</div>;
}

function PartnersCarousel() {
  return (
    <section
      className="partners section-glow"
      aria-label="Our trusted partners"
    >
      <div className="stats">
        <div>
          <span aria-hidden="true">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              <circle cx="9" cy="7" r="4" />
              <path d="M2 22v-3a7 7 0 0 1 14 0v3M17 3a4 4 0 0 1 0 8M19 15a6 6 0 0 1 3 6" />
            </svg>
          </span>
          <b>800+</b>
          <small>Students</small>
        </div>
        <div>
          <span aria-hidden="true">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            >
              <path d="M3 22V7l9-5 9 5v15H3Z" />
              <path d="M8 22v-6h8v6M7 9h2v3H7zM11 9h2v3h-2zM15 9h2v3h-2z" />
            </svg>
          </span>
          <b>130+</b>
          <small>Colleges</small>
        </div>
        <div>
          <span aria-hidden="true">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="7" width="20" height="15" rx="2" />
              <path d="M8 7V5a4 4 0 0 1 8 0v2M2 13h20M10 13v2h4v-2" />
            </svg>
          </span>
          <b>100+</b>
          <small>Jobs &amp; Internships</small>
        </div>
        <div>
          <span aria-hidden="true">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            >
              <path d="M12 2 21 6v6c0 6-4 9-9 11-5-2-9-5-9-11V6l9-4Z" />
              <path d="m8 12 3 3 5-6" />
            </svg>
          </span>
          <b>100%</b>
          <small>Safe &amp; Trusted</small>
        </div>
      </div>
      <p>Trusted by partners across India</p>
      <div className="partner-viewport">
        <div className="partner-track actual-logos">
          {[0, 1].map((copy) => (
            <div
              className="partner-logo-group"
              key={copy}
              aria-hidden={copy === 1}
            >
              {partners.map((p) => (
                <div className="partner-logo photo-logo" key={p.id}>
                  <img
                    src={`/assets/${p.id}.png`}
                    alt={copy === 0 ? p.alt : ""}
                    draggable={false}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function relativeOffset(index, active, total) {
  let d = index - active;
  if (d > 2) d -= total;
  if (d < -2) d += total;
  return d;
}
function PhoneCarousel() {
  const [active, setActive] = useState(2),
    [paused, setPaused] = useState(false);
  const touchStart = useRef(null);
  const next = useCallback(() => setActive((i) => (i + 1) % phones.length), []);
  const prev = useCallback(
    () => setActive((i) => (i + phones.length - 1) % phones.length),
    [],
  );
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 4300);
    return () => clearInterval(timer);
  }, [paused, next]);
  return (
    <section
      className="app-showcase"
      id="app"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="center-heading">
        <h2>Checkout Our App Interface Look</h2>
        <p>
          Experience the power of a unified campus ecosystem right in your
          pocket. <b>CampusPe</b> offers a tailored interface for every user:
          students can explore trending courses, colleges can showcase their
          campus life, and companies can post job vacancies directly to a pool
          of qualified candidates.
        </p>
      </div>
      <div
        className="phone-stage"
        aria-label="Five interactive CampusPe app screens"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") next();
          if (e.key === "ArrowLeft") prev();
        }}
        onTouchStart={(e) => {
          touchStart.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          if (touchStart.current !== null) {
            const diff = e.changedTouches[0].clientX - touchStart.current;
            if (Math.abs(diff) > 35) (diff < 0 ? next : prev)();
            touchStart.current = null;
          }
        }}
      >
        {phones.map((p, i) => {
          const offset = relativeOffset(i, active, phones.length);
          const klass = offset === 0 ? "active" : `offset-${offset}`;
          return (
            <div
              key={p.file}
              className={`phone reference-phone ${klass}`}
              style={{
                width: p.width,
                height: p.height,
                "--main-scale": 226 / p.width,
                "--side-scale": 180 / p.width,
                "--outer-scale": 155 / p.width,
                "--mobile-scale": 200 / p.width,
                "--mobile-side-scale": 145 / p.width,
              }}
              role="img"
              aria-label={p.name}
              aria-hidden={offset !== 0}
            >
              <img
                src={`/assets/${p.file}`}
                alt=""
                width={p.width}
                height={p.height}
                draggable={false}
              />
            </div>
          );
        })}
      </div>
      <div className="phone-controls">
        <button aria-label="Previous phone" onClick={prev}>
          ‹
        </button>
        <div className="carousel-dots">
          {phones.map((p, i) => (
            <button
              key={p.file}
              className={i === active ? "active" : ""}
              onClick={() => setActive(i)}
              aria-label={`Show ${p.name}`}
              aria-pressed={i === active}
            />
          ))}
        </div>
        <button aria-label="Next phone" onClick={next}>
          ›
        </button>
      </div>
    </section>
  );
}

function DownloadShowcase() {
  return (
    <section
      className="download-section section-glow refined-download"
      id="download"
    >
      <div className="download-copy">
        <h2>Download App Now</h2>
        <p>
          Elevate your academic journey with CampusPe, the all-in-one digital
          ecosystem designed to bridge the gap between education and industry.
          Whether you're a student seeking your next big internship, a college
          looking to empower your cohort, or a company scouting for top-tier
          talent, CampusPe streamlines the connection. Your career doesn't start
          at graduation—it starts here.
        </p>
        <div className="store-buttons">
          <a href="#ready" aria-label="Get it on Google Play">
            <span className="play-logo">▶</span>
            <small>
              GET IT ON
              <br />
              <b>Google Play</b>
            </small>
          </a>
          <a href="#ready" aria-label="Download on the App Store">
            <span className="apple-logo">●</span>
            <small>
              Download on the
              <br />
              <b>App Store</b>
            </small>
          </a>
        </div>
      </div>
      <div
        className="download-reference"
        role="img"
        aria-label="Two overlapping CampusPe app phones from the design reference"
      >
        <img
          src="/assets/download-phones-reference.png"
          width="598"
          height="322"
          alt="CampusPe app screens shown on two angled smartphones"
          draggable={false}
        />
      </div>
    </section>
  );
}

const blogPosts = [
  {
    id: "career-profile",
    category: "For Students",
    title: "How to build a career-ready student profile",
    summary:
      "Present your skills, projects and experience so relevant opportunities can find you.",
    content: [
      "Start with an accurate education section, including your course, graduation year and areas of interest. Keep your contact details up to date.",
      "Describe two or three meaningful projects. For each one, explain the problem, what you contributed and the tools you used. Specific examples tell a stronger story than a long list of keywords.",
      "Update your profile as you gain new skills. Tailor your resume to each opportunity, and track applications so you can follow up at the right time.",
    ],
  },
  {
    id: "college-research",
    category: "For Students",
    title: "A practical checklist for comparing colleges",
    summary:
      "Evaluate programs, fees and outcomes with a consistent set of questions.",
    content: [
      "Compare the curriculum and eligibility requirements first. Check whether the program covers the subjects and practical work that matter for your goals.",
      "Look beyond headline fees: review tuition, accommodation, transport and scholarship eligibility. Ask for current, official information from the institution.",
      "Review placement support, internships, campus facilities and student services. Speak with current students where possible and confirm important details directly with the college.",
    ],
  },
  {
    id: "campus-hiring",
    category: "For Employers",
    title: "Make campus hiring simpler and more focused",
    summary:
      "A structured process can help teams spend less time coordinating and more time evaluating fit.",
    content: [
      "Start with a clear role description that separates essential skills from skills candidates can learn on the job. Explain location, work mode and selection stages.",
      "Use consistent evaluation criteria across applicants. Short, practical assessments can reveal relevant ability while keeping the process fair.",
      "Communicate timelines and outcomes clearly. A shared shortlist and interview schedule keeps candidates, recruiters and college teams aligned.",
    ],
  },
];
function BlogsPage() {
  const [selected, setSelected] = useState(null);
  return (
    <main className="blogs-page" id="blogs-page">
      <div className="blogs-shell">
        <div className="eyebrow badge">✦ CAMPUSPE INSIGHTS</div>
        {selected ? (
          <article className="blog-article">
            <button className="blog-back" onClick={() => setSelected(null)}>
              ← All Blogs
            </button>
            <p className="blog-category">{selected.category}</p>
            <h1>{selected.title}</h1>
            <p className="blog-lead">{selected.summary}</p>
            {selected.content.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <button className="btn" onClick={() => setSelected(null)}>
              Explore more articles →
            </button>
          </article>
        ) : (
          <>
            <h1>
              CampusPe Blogs<span>.</span>
            </h1>
            <p className="blogs-intro">
              Practical insights for students, colleges and employers. Explore
              guides on opportunities, education and hiring.
            </p>
            <div className="blog-grid">
              {blogPosts.map((post, i) => (
                <article className="blog-card" key={post.id}>
                  <div className={`blog-art blog-art-${i}`}>
                    {["🎓", "🏛️", "💼"][i]}
                  </div>
                  <div className="blog-card-body">
                    <span>{post.category}</span>
                    <h2>{post.title}</h2>
                    <p>{post.summary}</p>
                    <button
                      onClick={() => {
                        setSelected(post);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
                      Read article →
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
}

function ActionModal({ title, onClose }) {
  const ref = useRef(null);
  useEffect(() => {
    ref.current?.focus();
    const f = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", f);
    return () => document.removeEventListener("keydown", f);
  }, [onClose]);
  return (
    <div
      className="modal-backdrop"
      role="presentation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="action-dialog"
        role="dialog"
        aria-modal="true"
        aria-label={title}
        tabIndex={-1}
        ref={ref}
      >
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close dialog"
        >
          ×
        </button>
        <div className="dialog-icon">✦</div>
        <h2>{title}</h2>
        <p>
          This part of the CampusPe experience is ready for integration. Connect
          your live application, registration flow, policy page, or app-store
          URL to activate this feature.
        </p>
        <button className="btn" onClick={onClose}>
          Got it
        </button>
      </div>
    </div>
  );
}

function AuthModal({ initialMode, onClose }) {
  const [mode, setMode] = useState(
    initialMode === "Sign Up" ? "signup" : "signin",
  );
  const [name, setName] = useState(""),
    [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
    [confirm, setConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false),
    [error, setError] = useState(""),
    [notice, setNotice] = useState("");
  const emailRef = useRef(null);
  useEffect(() => {
    emailRef.current?.focus();
    const key = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", key);
    return () => document.removeEventListener("keydown", key);
  }, [onClose]);
  const switchMode = (next) => {
    setMode(next);
    setError("");
    setNotice("");
    setPassword("");
    setConfirm("");
  };
  const submit = (e) => {
    e.preventDefault();
    setError("");
    setNotice("");
    if (mode === "signup" && name.trim().length < 2) {
      setError("Please enter your full name.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Enter a valid Gmail or other email address.");
      return;
    }
    if (password.length < 8) {
      setError("Password must have at least 8 characters.");
      return;
    }
    if (mode === "signup" && confirm !== password) {
      setError("Passwords do not match.");
      return;
    }
    setNotice(
      mode === "signin"
        ? "Sign-in form verified. Connect an authentication service to securely sign in."
        : "Sign-up form verified. Connect an authentication service to create your account.",
    );
    setPassword("");
    setConfirm("");
  };
  return (
    <div
      className="modal-backdrop auth-backdrop"
      role="presentation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="auth-dialog"
        role="dialog"
        aria-modal="true"
        aria-label={mode === "signin" ? "Sign In" : "Sign Up"}
      >
        <div className="auth-brand-panel">
          <div className="auth-brand-logo">
            ✧ CampusPe<span>.</span>
          </div>
          <div className="auth-brand-copy">
            <div className="auth-orbit">✦</div>
            <h2>
              Connect
              <br />
              10X Faster.
            </h2>
            <p>
              One place for students, colleges and employers to discover new
              possibilities.
            </p>
          </div>
          <div className="auth-brand-bottom">
            ✦ Your next opportunity starts here
          </div>
        </div>
        <div className="auth-form-panel">
          <button
            className="auth-close"
            aria-label="Close sign-in or sign-up"
            onClick={onClose}
          >
            ×
          </button>
          <div className="auth-form-top">
            <div className="auth-mini-logo">✧ CampusPe</div>
            <div className="auth-tabs" role="tablist" aria-label="Account form">
              <button
                type="button"
                role="tab"
                aria-selected={mode === "signin"}
                className={mode === "signin" ? "selected" : ""}
                onClick={() => switchMode("signin")}
              >
                Sign In
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={mode === "signup"}
                className={mode === "signup" ? "selected" : ""}
                onClick={() => switchMode("signup")}
              >
                Sign Up
              </button>
            </div>
          </div>
          <h2>{mode === "signin" ? "Welcome back!" : "Create your account"}</h2>
          <p className="auth-subtitle">
            {mode === "signin"
              ? "Enter your email and password to continue."
              : "Get started with CampusPe in a few simple steps."}
          </p>
          <form onSubmit={submit} noValidate>
            {mode === "signup" && (
              <label className="auth-field">
                Full name
                <input
                  type="text"
                  autoComplete="name"
                  placeholder="Your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </label>
            )}
            <label className="auth-field">
              Gmail / Email ID
              <input
                ref={emailRef}
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder="name@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <label className="auth-field">
              Password
              <div className="auth-password-field">
                <input
                  type={showPassword ? "text" : "password"}
                  autoComplete={
                    mode === "signin" ? "current-password" : "new-password"
                  }
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  minLength={8}
                  required
                />
                <button
                  type="button"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  onClick={() => setShowPassword((v) => !v)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </label>
            {mode === "signup" && (
              <label className="auth-field">
                Confirm password
                <input
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  placeholder="Re-enter password"
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  minLength={8}
                  required
                />
              </label>
            )}
            {mode === "signup" && (
              <p className="auth-hint">
                Use at least 8 characters for your password.
              </p>
            )}
            {error && (
              <p className="auth-error" role="alert">
                {error}
              </p>
            )}
            {notice && (
              <p className="auth-notice" role="status">
                {notice}
              </p>
            )}
            <button className="btn auth-submit" type="submit">
              {mode === "signin" ? "Sign In →" : "Create Account →"}
            </button>
          </form>
          <p className="auth-switch">
            {mode === "signin"
              ? "Don't have an account? "
              : "Already have an account? "}
            <button
              onClick={() =>
                switchMode(mode === "signin" ? "signup" : "signin")
              }
            >
              {mode === "signin" ? "Sign Up" : "Sign In"}
            </button>
          </p>
          <p className="auth-security">
            🔒 UI preview only — credentials are not transmitted or saved.
          </p>
        </div>
      </div>
    </div>
  );
}

const modalLabels = [
  "Sign In",
  "Sign Up",
  "Join Waitlist",
  "Post a Job",
  "List Your College",
  "Google Play",
  "App Store",
  "Privacy Policy",
  "Terms & Conditions",
  "Refund & Cancellation Policy",
  "Cookie Policy",
  "Grievance Redressal",
  "Job & Internship Disclaimer",
  "View all policies",
  "Careers",
  "Fee Collection",
];

export default function App() {
  const [dialog, setDialog] = useState(""),
    [menuOpen, setMenuOpen] = useState(false),
    [resumeFile, setResumeFile] = useState(""),
    [blogsOpen, setBlogsOpen] = useState(
      typeof window !== "undefined" && window.location.hash === "#blogs",
    );
  useEffect(() => {
    const change = () => setBlogsOpen(window.location.hash === "#blogs");
    window.addEventListener("hashchange", change);
    return () => window.removeEventListener("hashchange", change);
  }, []);
  useEffect(() => {
    const nav = document.querySelector("#nav");
    const toggle = document.querySelector(".menu-toggle");
    if (!nav || !toggle) return;
    nav.classList.toggle("open", menuOpen);
    toggle.setAttribute("aria-expanded", String(menuOpen));
    toggle.textContent = menuOpen ? "×" : "☰";
  }, [menuOpen]);
  const rootClick = (e) => {
    if (e.target.closest(".menu-toggle")) {
      e.preventDefault();
      setMenuOpen((v) => !v);
      return;
    }
    const chip = e.target.closest(".filter-chips button");
    if (chip) {
      const panel = chip.closest(".opportunity-panel");
      panel
        .querySelectorAll(".filter-chips button")
        .forEach((b) => b.classList.toggle("selected", b === chip));
      const value = chip.textContent.trim();
      panel.querySelectorAll(".feed-job").forEach((job, i) => {
        job.style.display =
          value === "All" ||
          (value === "Colleges" && i === 0) ||
          (["Jobs", "Internships"].includes(value) && i === 1) ||
          (value === "Freelance" && i === 2)
            ? ""
            : "none";
      });
      return;
    }
    const anchor = e.target.closest("a");
    if (!anchor) return;
    const label = (anchor.textContent || "").trim();
    if (anchor.getAttribute("href") === "#blogs") {
      e.preventDefault();
      setBlogsOpen(true);
      setMenuOpen(false);
      window.history.pushState(null, "", "#blogs");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (modalLabels.some((x) => label.includes(x))) {
      e.preventDefault();
      setDialog(label);
      return;
    }
    if (blogsOpen && anchor.hash) {
      setBlogsOpen(false);
      requestAnimationFrame(() =>
        setTimeout(
          () =>
            document
              .querySelector(anchor.hash)
              ?.scrollIntoView({ behavior: "smooth" }),
          0,
        ),
      );
    }
    if (anchor.hash) setMenuOpen(false);
  };
  const onChange = (e) => {
    if (e.target.id === "resumeInput") {
      const file = e.target.files?.[0];
      if (file) {
        if (file.size > 10 * 1024 * 1024) {
          setDialog("File exceeds the 10 MB demo limit");
          e.target.value = "";
          return;
        }
        setResumeFile(file.name);
      }
    }
  };
  const onDrop = (e) => {
    if (e.target.closest(".upload-card")) {
      e.preventDefault();
      const file = e.dataTransfer?.files?.[0];
      if (file) setResumeFile(file.name);
    }
  };
  return (
    <div
      onClickCapture={rootClick}
      onChangeCapture={onChange}
      onDragOver={(e) => {
        if (e.target.closest(".upload-card")) e.preventDefault();
      }}
      onDrop={onDrop}
    >
      <Header />
      {blogsOpen ? (
        <BlogsPage />
      ) : (
        <main id="top">
          <div className="hero-intro section-glow">
            <Hero />
            <PartnersCarousel />
          </div>
          <Opportunity />
          <Resume />
          <Colleges />
          <Employers />
          <PhoneCarousel />
          <DownloadShowcase />
          <Support />
          <Footer />
        </main>
      )}
      {resumeFile && (
        <div className="upload-toast" role="status">
          ✓ Selected: {resumeFile} (demo)
        </div>
      )}
      {dialog &&
        (dialog === "Sign In" || dialog === "Sign Up" ? (
          <AuthModal
            key={dialog}
            initialMode={dialog}
            onClose={() => setDialog("")}
          />
        ) : (
          <ActionModal title={dialog} onClose={() => setDialog("")} />
        ))}
    </div>
  );
}
