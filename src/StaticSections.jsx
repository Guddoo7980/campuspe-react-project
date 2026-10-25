import React from "react";
export function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top">
        <span className="spark">✧</span>CampusPe
        <span className="brand-dot">.</span>
      </a>
      <nav id="nav">
        <a href="#colleges">Colleges</a>
        <a href="#employers">Employers</a>
        <a href="#jobs">Jobs</a>
        <a href="#blogs">Blogs</a>
      </nav>
      <div className="nav-actions">
        <a href="#resume">Sign In</a>
        <a href="#ready" className="btn btn-small">
          Sign Up
        </a>
      </div>
      <button
        className="menu-toggle"
        aria-label="Toggle menu"
        aria-expanded="false"
      >
        ☰
      </button>
    </header>
  );
}

export function Hero() {
  return (
    <section className="hero section-glow">
      <div className="hero-topline">
        <div className="floating-note note-left">
          <b>🟢 WhatsApp Alert</b>
          <strong>Get notified on whatsapp</strong>
          <span>You'll get all important updates on your whatsapp</span>
        </div>
        <div className="eyebrow">🤖 &nbsp; AI-Powered Campus Assistant</div>
        <div className="floating-note note-right">
          <b>⚡ Resume Builder</b>
          <strong>Build Your Resume</strong>
          <span>
            Our resume builder gives you dynamic options to build better &amp;
            faster resume that gets you hired
          </span>
        </div>
      </div>
      <h1>
        Connect <em>10X Faster.</em>
      </h1>
      <p className="hero-sub">
        One platform connecting students, colleges &amp; employers — faster.
      </p>
      <h3 className="hero-question">
        <span>✦</span> What are you looking for? <span>✦</span>
      </h3>

      <div className="hero-activity" aria-label="Recent CampusPe activity">
        <div className="activity-card">
          <div className="activity-avatars" aria-hidden="true">
            <i>AK</i>
            <i>PR</i>
            <i>SN</i>
          </div>
          <div className="activity-detail">
            <strong>
              <span className="activity-fire">🔥</span> 142 students matched
              today
            </strong>
            <small>Just now · IIT, BITS, VIT</small>
          </div>
        </div>
        <div className="activity-card activity-recruiter">
          <span className="activity-company" aria-hidden="true">
            💼
          </span>
          <div className="activity-detail">
            <strong>
              <span>Radiant Info</span> shortlisted 8 interns
            </strong>
            <small>● Verified recruiter · 2 days ago</small>
          </div>
        </div>
      </div>

      <div className="hero-cards">
        <article className="hero-card college-hero-card">
          <div className="pill-row">
            <span className="circle-icon">🏛</span>
            <span className="outline-pill">Coming Soon</span>
          </div>
          <h2>College</h2>
          <p>Explore colleges, courses, fees, placements &amp; more</p>
          <ul>
            <li>Search by course, location, fees</li>
            <li>Connect directly with colleges</li>
            <li>Improve student placements</li>
          </ul>
          <div className="hero-card-art campus-art" aria-hidden="true">
            ▴
          </div>
          <a className="btn card-cta" href="#colleges">
            Join Waitlist ♧
          </a>
        </article>
        <article className="hero-card featured jobs-hero-card">
          <div className="pill-row">
            <span className="circle-icon">🎓</span>
            <span className="outline-pill">Available Now</span>
          </div>
          <h2>I'm Looking for a Job</h2>
          <p>Upload your resume. We'll find jobs that fit you.</p>
          <ul>
            <li>Jobs from 1000+ sources</li>
            <li>AI powered matching</li>
            <li>WhatsApp &amp; email alerts</li>
          </ul>
          <div className="hero-card-art resume-art" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />⌕
          </div>
          <a className="btn card-cta" href="#resume">
            Explore Jobs →
          </a>
        </article>
        <article className="hero-card hiring-hero-card">
          <div className="pill-row">
            <span className="circle-icon">💼</span>
            <span className="outline-pill">Coming Soon</span>
          </div>
          <h2>I'm Hiring</h2>
          <p>
            Connect with colleges and find candidates — from students to
            graduates.
          </p>
          <ul>
            <li>Connect directly with colleges</li>
            <li>Find the right candidates</li>
            <li>Simplify your hiring</li>
          </ul>
          <div className="hero-card-art hiring-art" aria-hidden="true">
            &lt;/&gt;
          </div>
          <a className="btn card-cta" href="#employers">
            Join Waitlist ♧
          </a>
        </article>
      </div>
    </section>
  );
}

export function Opportunity() {
  return (
    <section className="feature-section opportunity section-glow" id="jobs">
      <div className="feature-copy">
        <div className="eyebrow badge">✦ 01 · OPPORTUNITY DISCOVERY</div>
        <h2>
          Stop searching.
          <br />
          <em>Start getting matched.</em>
        </h2>
        <p>
          Tell CampusPe your skills, preferences and goals. We continuously
          monitor company career pages and job sources, find opportunities that
          match you, and notify you when they appear.
        </p>
        <div className="steps">
          <div>
            <span>01</span>
            <b>Set your preferences</b>
            <small>
              Tell us what you're looking for, from colleges and courses to
              jobs, internships and gigs.
            </small>
            <i>Smart Profile</i>
          </div>
          <div>
            <span>02</span>
            <b>Discover relevant opportunities</b>
            <small>
              Explore colleges and career opportunities matched to your profile,
              interests and goals.
            </small>
            <i>AI Ranked</i>
          </div>
          <div>
            <span>03</span>
            <b>Get notified when something fits</b>
            <small>
              Get notified when a relevant college or opportunity is found, so
              you can act early.
            </small>
            <i>Instant Alerts</i>
          </div>
        </div>
        <a href="#resume" className="btn">
          Explore opportunities →
        </a>
      </div>
      <div className="opportunity-panel mock-panel">
        <div className="feed-head">
          <div className="app-icon">✦</div>
          <div>
            <b>CampusPe Opportunity Feed</b>
            <small>Colleges &amp; opportunities matched to you</small>
          </div>
          <span className="new-matches">+ 12 new matches today</span>
        </div>
        <div className="filter-chips">
          <button className="selected">All</button>
          <button>Colleges</button>
          <button>Jobs</button>
          <button>Internships</button>
          <button>Freelance</button>
          <button>Part-time</button>
        </div>
        <div className="feed-list">
          <div className="feed-job">
            <span className="job-logo">♜</span>
            <div>
              <b>
                IIM Bangalore <small>Top College</small>
              </b>
              <p>📍 MBA &nbsp; ◉ Bengaluru &nbsp; ★ 9.3+</p>
              <small>
                India's premier management institute with global exposure...
              </small>
            </div>
            <a href="#resume">View Details</a>
          </div>
          <div className="feed-job">
            <span className="job-logo google">G</span>
            <div>
              <b>
                Product Intern <small>Internship</small>
              </b>
              <p>📍 Bengaluru &nbsp; ◇ Hybrid &nbsp; ₹ 35K/mo</p>
              <small>
                Work on real products, learn from top engineers and build...
              </small>
            </div>
            <a href="#resume">Apply Now</a>
          </div>
          <div className="feed-job">
            <span className="job-logo">▣</span>
            <div>
              <b>
                Marketing Gig <small>Freelance</small>
              </b>
              <p>📍 Remote &nbsp; ◉ Freelance &nbsp; ₹ 10K - ₹ 25K</p>
              <small>
                Create content, grow communities and gain experience...
              </small>
            </div>
            <a href="#resume">View Details</a>
          </div>
        </div>
        <a className="feed-link" href="#resume">
          View all matched opportunities →
        </a>
        <small className="panel-foot">Curated for you · Updated daily</small>
      </div>
      <p className="opportunity-handnote" aria-hidden="true">
        ↶ &nbsp; A mix of colleges, jobs,
        <br />
        internships and gigs — all in one place.
      </p>
    </section>
  );
}

export function Resume() {
  return (
    <section className="resume-section section-glow" id="resume">
      <div className="eyebrow badge">
        ✦ TRY IT LIVE &nbsp; <span>v2.4 AI Engine</span>
      </div>
      <h2>
        Upload your resume.
        <br />
        <em>Find jobs that fit.</em>
      </h2>
      <p>
        Upload once. CampusPe reads your skills, experience, and preferences —
        <br className="desktop-only" /> then finds relevant jobs across 1,000+
        sources.
      </p>
      <div className="upload-card">
        <div className="match-rate">
          ✦ 98% Match Rate <small>AI semantic ranking</small>
        </div>
        <div className="upload-icon">⇧</div>
        <h3>Upload your resume</h3>
        <p>
          PDF, DOC, or DOCX · Up to 10MB · We'll use it to understand your
          skills &amp; experience.
        </p>
        <label className="btn upload-btn" htmlFor="resumeInput">
          Upload resume ➜
        </label>
        <input id="resumeInput" type="file" accept=".pdf,.doc,.docx" hidden />
        <span id="fileFeedback">or drag and drop your file here</span>
        <div className="file-tags">PDF &nbsp; DOC &nbsp; DOCX</div>
        <div className="ats-pill">
          ✧ ATS Compliant <small>Standardized parser</small>
        </div>
      </div>
      <div className="resume-benefits">
        <div>
          ✅ <b>Resume analyzed</b>
          <small>Ready in 8s</small>
        </div>
        <div>
          ☑️ <b>Skills matched</b>
          <small>Deep taxonomy</small>
        </div>
        <div>
          ☑️ <b>Experience matched</b>
          <small>Contextual similarity</small>
        </div>
        <div>
          ☑️ <b>1,000+ sources searched</b>
          <small>Real-time aggregation</small>
        </div>
      </div>
    </section>
  );
}

export function Colleges() {
  return (
    <section
      className="feature-section college-section section-glow"
      id="colleges"
    >
      <div className="feature-copy">
        <div className="eyebrow badge">✦ 02 · FOR COLLEGES</div>
        <h2>
          Get Discovered
          <br />
          by{" "}
          <em>
            Students and
            <br />
            Recruiters.
          </em>
        </h2>
        <p>
          Put your college in front of students searching for the right course
          and recruiters looking for the right talent. CampusPe helps you build
          your presence, attract enquiries and connect with opportunities.
        </p>
        <a href="#ready" className="btn">
          List Your College →
        </a>
      </div>
      <div className="process-list">
        <div className="process-card">
          <span>01</span>
          <div>
            <small>VERIFIED PROFILE</small>
            <h3>Build your college profile</h3>
            <p>
              Showcase your college, courses, fees, campus, placements and
              achievements in one structured profile that students and
              recruiters can discover.
            </p>
          </div>
          <div className="process-meta">
            <i>☑ NAAC A++ Ready</i>
            <i>98% Match</i>
          </div>
        </div>
        <div className="process-card">
          <span>02</span>
          <div>
            <small>DIRECT ENROLL</small>
            <h3>Students discover and connect</h3>
            <p>
              Students searching for colleges can discover your profile, explore
              your courses and fees, and connect directly with your admission
              team.
            </p>
          </div>
          <div className="process-meta">
            <i>✉ Direct Enquiries</i>
            <i>● WHATSAPP / CHAT</i>
            <small>Avg. response: &lt;15 min</small>
          </div>
        </div>
        <div className="process-card">
          <span>03</span>
          <div>
            <small>CAMPUS RECRUITING</small>
            <h3>Recruiters discover your College</h3>
            <p>
              Companies hiring fresh talent can discover your college, explore
              your talent and connect with your placement team.
            </p>
          </div>
          <div className="process-meta">
            <i>♧ 500+ Hiring Partners</i>
            <i>⚖ Connect Directly</i>
          </div>
        </div>
        <div className="process-card">
          <span>04</span>
          <div>
            <small>LIVE HUB</small>
            <h3>Track placements in real time</h3>
            <p>
              Track students, interviews, offers and placements from one
              centralized dashboard.
            </p>
          </div>
          <div className="process-meta">
            <i>● LIVE PLACEMENTS</i>
            <i>Students · Interviews · Offers</i>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Employers() {
  return (
    <section
      className="feature-section employer-section section-glow"
      id="employers"
    >
      <div className="feature-copy">
        <div className="eyebrow badge">✦ 03 · FOR EMPLOYERS</div>
        <h2>
          Stop running
          <br />
          campus drives.
          <br />
          <em>
            Start hiring the right
            <br />
            people.
          </em>
        </h2>
        <p>
          Post a role in minutes and reach relevant candidates without the time,
          travel and coordination of traditional hiring. CampusPe helps you
          discover, match and connect with talent from colleges and beyond.
        </p>
        <a href="#ready" className="btn">
          Post a Job →
        </a>
      </div>
      <div className="process-list">
        <div className="process-card">
          <span>01</span>
          <div>
            <h3>
              Post a role in minutes <small>INSTANT SETUP</small>
            </h3>
            <p>
              Define your skills, location and hiring requirements. Reach
              relevant candidates across the CampusPe network.
            </p>
          </div>
          <div className="process-meta">
            <i>✧ 5 Min Deployment</i>
            <i>500+ Campus Network</i>
          </div>
        </div>
        <div className="process-card">
          <span>02</span>
          <div>
            <h3>
              Receive a matched shortlist <small>INSTANT SETUP</small>
            </h3>
            <p>
              Get candidates matched to your role by skills, experience,
              location and hiring requirements.
            </p>
          </div>
          <div className="process-meta">
            <i>◉ Zero CV Clutter</i>
            <i>Tier 1–Tier 3 Parity</i>
          </div>
        </div>
        <div className="process-card">
          <span>03</span>
          <div>
            <h3>
              Connect with candidates directly <small>INSTANT SETUP</small>
            </h3>
            <p>
              Message, schedule interviews, and move candidates through your
              pipeline — all in one place.
            </p>
          </div>
          <div className="process-meta">
            <i>▣ In-App Scheduling</i>
            <i>1-Click Video / Chat</i>
          </div>
        </div>
        <div className="process-card">
          <span>04</span>
          <div>
            <h3>
              Reduce your time-to-hire <small>INSTANT SETUP</small>
            </h3>
            <p>
              Find matched candidates, connect with them and move from shortlist
              to offer in one streamlined workflow.
            </p>
          </div>
          <div className="process-meta">
            <i>⚡ &lt;2 DAYS</i>
            <i>57% Faster Hiring</i>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Download() {
  return (
    <section className="download-section section-glow">
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
          <a href="#ready">
            <span>▶</span>
            <small>
              GET IT ON
              <br />
              <b>Google Play</b>
            </small>
          </a>
          <a href="#ready">
            <span>●</span>
            <small>
              Download on the
              <br />
              <b>App Store</b>
            </small>
          </a>
        </div>
      </div>
      <div className="download-phones">
        <div className="tilted-phone rear">
          <div className="mini-top">CampusPe</div>
          <div className="mini-blue"></div>
          <div className="mini-card"></div>
          <div className="mini-card"></div>
          <div className="mini-card"></div>
        </div>
        <div className="tilted-phone front">
          <div className="mini-top">CampusPe</div>
          <div className="mini-blue">Discover opportunities</div>
          <div className="mini-card"></div>
          <div className="mini-card"></div>
          <div className="mini-card"></div>
        </div>
      </div>
    </section>
  );
}

export function Support() {
  return (
    <section className="support-section">
      <div className="support-card">
        <h2>Still have questions?</h2>
        <p>
          Our support team is here to help you succeed. Get in
          <br className="desktop-only" /> touch anytime.
        </p>
        <div>
          <a className="btn" href="mailto:contactus@campuspe.com">
            Contact Support ↗
          </a>
          <a
            className="btn btn-outline"
            href="mailto:contactus@campuspe.com?subject=Schedule%20a%20Call"
          >
            Schedule a Call ☎
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer id="ready">
      <div className="ready-banner">
        <div>
          <h2>Ready for what’s next?</h2>
          <p>
            Discover colleges, find opportunities, list your institution, or
            start hiring with CampusPe.
          </p>
        </div>
        <div className="ready-actions">
          <a className="btn" href="#colleges">
            Explore Colleges →
          </a>
          <a className="btn" href="#jobs">
            Find Opportunities →
          </a>
          <a className="btn btn-outline" href="#colleges">
            List Your College →
          </a>
          <a className="btn btn-outline" href="#employers">
            Post a Job →
          </a>
        </div>
      </div>
      <div className="footer-grid">
        <div className="footer-about">
          <a className="brand" href="#top">
            <span className="spark">✧</span>CampusPe
            <span className="brand-dot">.</span>
          </a>
          <p>From choosing a college to finding your next opportunity.</p>
          <p>
            CampusPe connects students, colleges and employers in one place.
          </p>
        </div>
        <div>
          <h4>For Students</h4>
          <a href="#colleges">Explore Colleges</a>
          <a href="#jobs">Find Opportunities</a>
          <a href="#resume">Internships</a>
          <a href="#jobs">Full-time Jobs</a>
          <a href="#jobs">Part-time &amp; Gigs</a>
          <a href="#resume">Application Tracker</a>
        </div>
        <div>
          <h4>For Colleges</h4>
          <a href="#colleges">List Your College</a>
          <a href="#colleges">Admissions</a>
          <a href="#colleges">Fee Collection</a>
          <a href="#colleges">Placements</a>
        </div>
        <div>
          <h4>For Employers</h4>
          <a href="#employers">Post a Job</a>
          <a href="#employers">Find Talent</a>
          <a href="#employers">Campus Hiring</a>
        </div>
        <div>
          <h4>Company</h4>
          <a href="#top">About Us</a>
          <a href="mailto:contactus@campuspe.com">Contact Us</a>
          <a href="#blogs">Blogs</a>
          <a href="#ready">Careers</a>
        </div>
        <div>
          <h4>Legal &amp; Policies</h4>
          <a href="#ready">Privacy Policy</a>
          <a href="#ready">Terms &amp; Conditions</a>
          <a href="#ready">Refund &amp; Cancellation Policy</a>
          <a href="#ready">Cookie Policy</a>
          <a href="#ready">Grievance Redressal</a>
          <a href="#ready">Job &amp; Internship Disclaimer</a>
          <a className="blue-link" href="#ready">
            View all policies →
          </a>
          <div className="legal-note">
            Separate user, institution and employer terms can live inside the
            full Policies page.
          </div>
        </div>
      </div>
      <div className="footer-contact">
        <a href="mailto:contactus@campuspe.com">
          ✉ &nbsp;contactus@campuspe.com
        </a>
        <a href="tel:+916362604644">☎ &nbsp;+91 6362604644</a>
        <span>🟢 Students · Colleges · Employers</span>
      </div>
      <div className="footer-bottom">
        <span>
          © 2026 CampusPe Technologies Pvt. Ltd. &nbsp; Privacy &nbsp; Terms
          &nbsp; Grievance
        </span>
        <span>▣ &nbsp; ◎ &nbsp; ◉ &nbsp; f &nbsp; ◉ &nbsp; ▶</span>
      </div>
    </footer>
  );
}
