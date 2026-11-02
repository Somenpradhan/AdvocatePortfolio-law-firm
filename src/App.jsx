import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  Clock3,
  Facebook,
  FileText,
  Gavel,
  HeartHandshake,
  House,
  Instagram,
  Landmark,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Play,
  Scale,
  Search,
  Shield,
  ShieldCheck,
  Sparkles,
  Twitter,
  X,
} from "lucide-react";
import {
  BrowserRouter,
  Link,
  NavLink,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

const photos = {
  hero: "/images/attorney-portrait.jpg",
  consultation: "/images/attorney-client-consultation.jpg",
  ladyJustice: "/images/lady-justice.jpg",
  legalBooks: "/images/legal-books.jpg",
  scales: "/images/legal-scales.jpg",
  injury: "/images/practice-personal-injury.jpg",
  family: "/images/practice-family-law.jpg",
  criminal: "/images/practice-criminal-defense.jpg",
  business: "/images/practice-business-law.jpg",
  property: "/images/practice-real-estate.jpg",
  estate: "/images/practice-estate-planning.jpg",
  caseInjury: "/images/case-injury.jpg",
  caseFamily: "/images/case-family.jpg",
  caseBusiness: "/images/case-results-documents.jpg",
  caseProperty: "/images/office-building.jpg",
  articleAccident: "/images/blog-courtroom.jpg",
  articleEstate: "/images/legal-books.jpg",
  articleContracts: "/images/blog-contract-signing.jpg",
  team1: "/images/team-1.jpg",
  team2: "/images/team-2.jpg",
  team3: "/images/team-3.jpg",
  team4: "/images/team-4.jpg",
  team5: "/images/team-5.jpg",
};

const practices = [
  {
    slug: "personal-injury",
    title: "Personal Injury",
    description: "Get the compensation you deserve.",
    icon: BriefcaseBusiness,
    image: photos.injury,
    intro: "An injury can bring difficult practical and financial challenges. We advocate vigorously on your behalf to help secure the rightful medical compensation and settlement you deserve.",
    topics: ["Accident investigation & claims", "Medical documentation review", "Aggressive negotiation & litigation"],
  },
  {
    slug: "family-law",
    title: "Family Law",
    description: "Compassionate support for life's transitions.",
    icon: House,
    image: photos.family,
    intro: "Family matters are deeply personal. Our approach centers on calm clarity, empathetic guidance, and protecting the best interests of you and your loved ones.",
    topics: ["Child custody & parental agreements", "Divorce & property division", "Mediation & amicable settlements"],
  },
  {
    slug: "criminal-defense",
    title: "Criminal Defense",
    description: "Protecting your rights and your future.",
    icon: Gavel,
    image: photos.criminal,
    intro: "When your freedom and reputation are on the line, having a tenacious and experienced legal advocate makes all the difference in court.",
    topics: ["Constitutional rights protection", "Case strategy & evidence discovery", "Trial defense & plea negotiations"],
  },
  {
    slug: "business-law",
    title: "Business Law",
    description: "Legal guidance for growing businesses.",
    icon: FileText,
    image: photos.business,
    intro: "Businesses need proactive, practical legal solutions. We provide clear corporate counsel to protect assets, negotiate contracts, and accelerate commercial growth.",
    topics: ["Commercial contracts & agreements", "Corporate compliance & governance", "Partnership & shareholder disputes"],
  },
  {
    slug: "real-estate-law",
    title: "Real Estate Law",
    description: "Secure transactions and dispute resolution.",
    icon: Landmark,
    image: photos.property,
    intro: "From multi-million dollar property transactions to boundary and title disputes, our team provides meticulous contract review and tenacious representation.",
    topics: ["Title verification & due diligence", "Purchase & lease negotiations", "Property litigation & zoning issues"],
  },
  {
    slug: "estate-planning",
    title: "Estate Planning",
    description: "Plan today for a brighter tomorrow.",
    icon: Shield,
    image: photos.estate,
    intro: "Preserve your wealth and ensure peace of mind for future generations with tailored wills, living trusts, and comprehensive asset protection strategies.",
    topics: ["Wills, trusts & probate management", "Asset protection & tax optimization", "Healthcare directives & power of attorney"],
  },
];

const matters = [
  {
    slug: "personal-injury-settlement",
    amount: "₹20.8 Cr",
    title: "Personal Injury Settlement",
    subtitle: "Car accident case",
    image: photos.caseInjury,
  },
  {
    slug: "child-custody-victory",
    amount: "₹7.1 Cr",
    title: "Child Custody Victory",
    subtitle: "Favorable custody agreement",
    image: photos.caseFamily,
  },
  {
    slug: "business-dispute-resolution",
    amount: "₹10 Cr",
    title: "Business Dispute Resolution",
    subtitle: "Contract dispute settled",
    image: photos.caseBusiness,
  },
  {
    slug: "real-estate-dispute",
    amount: "₹25.7 Cr",
    title: "Real Estate Dispute",
    subtitle: "Property ownership case",
    image: photos.caseProperty,
  },
];

const teamMembers = [
  { name: "Team Member 01", designation: "Advocate", image: photos.team1 },
  { name: "Team Member 02", designation: "Advocate", image: photos.team2 },
  { name: "Team Member 03", designation: "Advocate", image: photos.team3 },
  { name: "Team Member 04", designation: "Advocate", image: photos.team4 },
  { name: "Team Member 05", designation: "Advocate", image: photos.team5 },
];

const articles = [
  {
    slug: "after-a-car-accident",
    date: "12 Sep 2025",
    title: "5 Things to Know After a Car Accident",
    category: "Personal Injury",
    image: photos.articleAccident,
    intro: "An essential legal guide to protecting your health, preserving critical scene evidence, and avoiding common insurance adjuster pitfalls following a collision.",
    sections: [
      "Prioritize immediate medical evaluation and record symptoms thoroughly.",
      "Document the scene, obtain police reports, and photograph damage.",
      "Consult counsel before signing releases or providing recorded statements.",
    ],
  },
  {
    slug: "protect-assets-estate-planning",
    date: "28 Aug 2025",
    title: "How to Protect Your Assets with Estate Planning",
    category: "Estate Planning",
    image: photos.articleEstate,
    intro: "Discover the proactive legal structures—such as irrevocable trusts and healthcare directives—that protect your lifetime wealth from unnecessary probate costs.",
    sections: [
      "Audit your current assets, beneficiaries, and existing declarations.",
      "Understand probate bypass vehicles like living trusts.",
      "Update your power of attorney and healthcare proxies regularly.",
    ],
  },
  {
    slug: "business-contracts-key-clauses",
    date: "15 Aug 2025",
    title: "Business Contracts: Key Clauses to Consider",
    category: "Business Law",
    image: photos.articleContracts,
    intro: "Key contractual provisions every founder and business leader must examine to avoid costly litigation and protect commercial intellectual property.",
    sections: [
      "Clarify indemnification scope and liability ceilings.",
      "Specify dispute resolution venues and governing law jurisdictions.",
      "Ensure clear milestones, breach remedies, and termination protocols.",
    ],
  },
];

const trustItems = [
  { icon: ShieldCheck, label: "Client-Focused\nApproach" },
  { icon: Landmark, label: "Experienced\nAttorneys" },
  { icon: Scale, label: "Transparent\nCommunication" },
  { icon: FileText, label: "Proven\nResults" },
];

const navItems = [
  ["Home", "/"],
  ["About", "/about"],
  ["Practice Areas", "/practice-areas"],
  ["Attorneys", "/attorneys"],
  ["Case Results", "/case-results"],
  ["Resources", "/resources"],
  ["Contact", "/contact"],
];

export function TempleLogoIcon({ size = 30, strokeWidth = 1.8, className = "", animated = false }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`temple-logo-svg ${animated ? "is-animated" : ""} ${className}`}
      aria-hidden="true"
    >
      {/* Triangular Roof Pediment */}
      <path
        d="M6 16.5 L22 5.5 L38 16.5 Z"
        className="temple-roof"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      {/* Upper Entablature Architrave */}
      <line
        x1="4"
        y1="17.2"
        x2="40"
        y2="17.2"
        className="temple-beam"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      {/* Lower Subbeam */}
      <line
        x1="7"
        y1="19.8"
        x2="37"
        y2="19.8"
        className="temple-subbeam"
        stroke="currentColor"
        strokeWidth={strokeWidth * 0.85}
        strokeLinecap="round"
      />
      {/* 4 Classical Pillars */}
      <line
        x1="10.5"
        y1="20.2"
        x2="10.5"
        y2="34.2"
        className="temple-col temple-col-1"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <line
        x1="18.2"
        y1="20.2"
        x2="18.2"
        y2="34.2"
        className="temple-col temple-col-2"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <line
        x1="25.8"
        y1="20.2"
        x2="25.8"
        y2="34.2"
        className="temple-col temple-col-3"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <line
        x1="33.5"
        y1="20.2"
        x2="33.5"
        y2="34.2"
        className="temple-col temple-col-4"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      {/* Stepped Base: Top step */}
      <line
        x1="7"
        y1="34.8"
        x2="37"
        y2="34.8"
        className="temple-base-top"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      {/* Stepped Base: Bottom Foundation */}
      <line
        x1="4"
        y1="38.2"
        x2="40"
        y2="38.2"
        className="temple-base-bottom"
        stroke="currentColor"
        strokeWidth={strokeWidth * 1.15}
        strokeLinecap="round"
      />
    </svg>
  );
}

export const Logo = React.forwardRef(function Logo(
  { light = false, hideNavLogo = false, dockPulse = false, className = "", onClick },
  ref
) {
  return (
    <Link
      ref={ref}
      className={`brand ${light ? "brand-light" : ""} ${hideNavLogo ? "is-hidden-for-intro" : ""} ${dockPulse ? "has-dock-pulse" : ""} ${className}`}
      to="/"
      aria-label="Rivera and Company Attorneys At Law"
      onClick={onClick}
    >
      <span className="brand-mark" aria-hidden="true">
        <TempleLogoIcon size={26} strokeWidth={1.8} />
      </span>
      <span className="brand-copy">
        <strong>
          RIVERA <span className="ampersand">&amp;</span> CO.
        </strong>
        <small>ATTORNEYS AT LAW</small>
      </span>
    </Link>
  );
});

function StartingIntroOverlay({ isOpen, navLogoRef, onComplete }) {
  const [isToggled, setIsToggled] = useState(false);
  const [isFloating, setIsFloating] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [floatStyle, setFloatStyle] = useState({});
  const splashLogoRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setIsToggled(false);
      setIsFloating(false);
      setIsFadingOut(false);
      setFloatStyle({});
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => {
      if (e.key === "Escape") {
        handleSkip();
      } else if ((e.key === "Enter" || e.key === " ") && !isToggled) {
        e.preventDefault();
        handleToggle();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, isToggled]);

  const handleToggle = () => {
    if (isToggled || isFloating) return;
    setIsToggled(true);

    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        const ctx = new AudioCtx();
        const now = ctx.currentTime;
        [523.25, 659.25, 783.99].forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = "sine";
          osc.frequency.setValueAtTime(freq, now + idx * 0.08);
          gain.gain.setValueAtTime(0.06, now + idx * 0.08);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.08 + 0.6);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now + idx * 0.08);
          osc.stop(now + idx * 0.08 + 0.65);
        });
      }
    } catch {
      // Audio playback allowed on user action
    }

    // Give user time to enjoy the toggle switch slide before floating
    setTimeout(() => {
      if (!splashLogoRef.current || !navLogoRef.current) {
        handleSkip();
        return;
      }

      const splashRect = splashLogoRef.current.getBoundingClientRect();
      const navRect = navLogoRef.current.getBoundingClientRect();

      const deltaX = navRect.left - splashRect.left;
      const deltaY = navRect.top - splashRect.top;
      const scale = navRect.width / splashRect.width;

      setFloatStyle({
        transform: `translate3d(${deltaX}px, ${deltaY}px, 0) scale(${scale})`,
        transition: "transform 0.95s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.95s cubic-bezier(0.22, 1, 0.36, 1)",
        transformOrigin: "top left",
      });
      setIsFloating(true);
      setIsFadingOut(true);

      setTimeout(() => {
        onComplete();
      }, 960);
    }, 240);
  };

  const handleSkip = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      onComplete();
    }, 250);
  };

  if (!isOpen) return null;

  return (
    <div className={`intro-splash-screen ${isFadingOut ? "is-fading-out" : ""}`}>
      {/* Background ambient lighting and Lady Justice watermark */}
      <div className="splash-ambient-bg" aria-hidden="true">
        <div className="splash-radial-aura" />
        <div className="splash-mesh-glow" />
        <div className="splash-watermark splash-watermark-statue">
          <img
            src="/images/lady-justice-transparent.png"
            alt=""
            className="splash-statue-watermark-img"
          />
        </div>
      </div>

      {/* Top status bar */}
      <div className="splash-topbar">
        <span className="splash-badge">ESTABLISHED 2014 &bull; RIVERA &amp; CO.</span>
        <button type="button" className="splash-skip-btn" onClick={handleSkip}>
          Skip Intro <ArrowRight size={13} />
        </button>
      </div>

      {/* Center stage with hero logo and toggle */}
      <div className="splash-center-stage">
        {/* Floating Logo Component */}
        <div
          ref={splashLogoRef}
          className={`splash-hero-logo ${isFloating ? "is-floating" : ""}`}
          style={isFloating ? floatStyle : { transformOrigin: "top left" }}
          onClick={!isToggled ? handleToggle : undefined}
          role="button"
          tabIndex={0}
          title="Click to toggle and enter firm"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") handleToggle();
          }}
        >
          <div className="splash-logo-mark">
            <TempleLogoIcon size={58} strokeWidth={1.8} animated={!isFloating} />
            <div className="splash-mark-glow" />
          </div>
          <div className="splash-logo-copy">
            <strong className="splash-firm-name">
              RIVERA <span className="ampersand">&amp;</span> CO.
            </strong>
            <small className="splash-firm-subtitle">ATTORNEYS AT LAW</small>
          </div>
        </div>

        {/* Interactive Luxury Toggle Control */}
        <div className={`splash-toggle-card ${isToggled ? "is-toggled" : ""}`}>
          <div className="splash-toggle-header">
            <span className="splash-pill-caption">✦ RIVERA &amp; CO. ✦</span>
            <h2 className="splash-invitation-title">Dedicated Legal Excellence</h2>
            <p className="splash-invitation-sub">
              {isToggled ? "Access granted • Docking to chambers..." : "Toggle switch or tap crest to enter website"}
            </p>
          </div>

          <button
            type="button"
            className={`luxury-intro-toggle ${isToggled ? "is-active" : ""}`}
            onClick={handleToggle}
            role="switch"
            aria-checked={isToggled}
            aria-label="Toggle to enter website"
          >
            <span className="toggle-track">
              <span className="toggle-slider-handle">
                <Scale size={18} strokeWidth={2.2} />
                <span className="handle-sparkle" />
              </span>
              <span className={`toggle-track-text ${isToggled ? "is-entered" : ""}`}>
                {isToggled ? (
                  <>✦ ACCESS GRANTED ✦</>
                ) : (
                  <>
                    <span>SLIDE TO ENTER</span>
                    <span className="track-chevron">➔</span>
                  </>
                )}
              </span>
            </span>
            <span className="toggle-halo" />
          </button>

          <p className="splash-hint-text">
            {isToggled ? (
              <span className="active-glow-text">✦ Docking logo to navigation... ✦</span>
            ) : (
              <span>Click switch or tap crest &bull; Press Enter</span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

function ScrollReset() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

function SiteHeader({ navLogoRef, hideNavLogo, dockPulse, onReplayIntro }) {
  const [announcement, setAnnouncement] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [term, setTerm] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const searchRef = useRef(null);
  const normalizedTerm = term.trim().toLowerCase();

  const searchItems = useMemo(
    () =>
      [
        ...practices.map((item) => ({ title: item.title, subtitle: "Practice Area", to: `/practice/${item.slug}` })),
        ...articles.map((item) => ({ title: item.title, subtitle: "Legal Insight", to: `/insights/${item.slug}` })),
        { title: "About Rivera & Co.", subtitle: "Our Firm & Values", to: "/about" },
        { title: "Meet the Attorneys", subtitle: "Legal Team", to: "/attorneys" },
        { title: "Featured Case Results", subtitle: "Track Record", to: "/case-results" },
        { title: "Schedule a Consultation", subtitle: "Contact Us", to: "/contact" },
      ].filter((item) => !normalizedTerm || `${item.title} ${item.subtitle}`.toLowerCase().includes(normalizedTerm)),
    [normalizedTerm]
  );

  useEffect(() => {
    setMobileOpen(false);
    setSearchOpen(false);
    setTerm("");
  }, [location.pathname]);

  useEffect(() => {
    if (searchOpen) searchRef.current?.focus();
    const handleKey = (event) => {
      if (event.key === "Escape") {
        setSearchOpen(false);
        setMobileOpen(false);
      }
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [searchOpen]);

  return (
    <>
      {announcement && (
        <aside className="announcement" aria-label="Announcement banner">
          <div className="announcement-content">
            <Scale size={14} className="announcement-icon" aria-hidden="true" />
            <span className="announcement-text">For modern website design contact us</span>
            <Link to="/contact" className="announcement-btn">
              Get a Free Quote <ArrowRight size={12} />
            </Link>
          </div>
          <button className="announcement-close" onClick={() => setAnnouncement(false)} aria-label="Dismiss banner">
            <X size={15} />
          </button>
        </aside>
      )}
      <header className="site-header">
        <div className="nav-shell">
          <Logo ref={navLogoRef} hideNavLogo={hideNavLogo} dockPulse={dockPulse} />
          <nav className={`main-nav ${mobileOpen ? "is-open" : ""}`} aria-label="Main navigation">
            {navItems.map(([label, to]) => (
              <NavLink key={to} to={to} end={to === "/"} onClick={() => setMobileOpen(false)}>
                {label}
              </NavLink>
            ))}
            {mobileOpen && (
              <div className="mobile-nav-cta-wrap">
                <Link className="button button-gold mobile-nav-cta" to="/contact" onClick={() => setMobileOpen(false)}>
                  Schedule a Consultation <ArrowRight size={14} />
                </Link>
              </div>
            )}
          </nav>
          <div className="nav-actions">
            <button
              className="icon-button intro-replay-btn"
              type="button"
              aria-label="Replay intro animation"
              title="Replay intro animation"
              onClick={onReplayIntro}
            >
              <Sparkles size={17} />
            </button>
            <button
              className="icon-button search-toggle"
              type="button"
              aria-label="Search website"
              aria-expanded={searchOpen}
              onClick={() => setSearchOpen((open) => !open)}
            >
              <Search size={18} />
            </button>
            <Link className="button button-gold nav-cta" to="/contact">
              Schedule a Consultation <ArrowRight size={14} />
            </Link>
            <button
              className="icon-button menu-toggle"
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((open) => !open)}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
        {searchOpen && (
          <div className="search-panel">
            <div className="search-inner">
              <Search size={18} aria-hidden="true" />
              <input
                ref={searchRef}
                value={term}
                onChange={(event) => setTerm(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" && searchItems[0]) navigate(searchItems[0].to);
                }}
                placeholder="Search practice areas, case results, articles..."
                aria-label="Search website"
              />
              <button className="icon-button" onClick={() => setSearchOpen(false)} aria-label="Close search">
                <X size={18} />
              </button>
            </div>
            <div className="search-results">
              {searchItems.length ? (
                searchItems.slice(0, 7).map((item) => (
                  <Link key={item.to} to={item.to} onClick={() => setSearchOpen(false)}>
                    <div>
                      <strong>{item.title}</strong>
                      <small>{item.subtitle}</small>
                    </div>
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </Link>
                ))
              ) : (
                <p className="no-search-results">No matches found. Try searching for "Injury", "Contracts", or "About".</p>
              )}
            </div>
          </div>
        )}
      </header>
    </>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-width footer-main">
        <div className="footer-brand">
          <Logo light />
          <p className="footer-tagline">People. Rights. Results.</p>
          <div className="social-links" aria-label="Social media profiles">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={15} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <Instagram size={15} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <Facebook size={15} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="X Twitter">
              <Twitter size={15} />
            </a>
          </div>
        </div>
        <div className="footer-col">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/practice-areas">Practice Areas</Link>
          <Link to="/attorneys">Attorneys</Link>
          <Link to="/case-results">Case Results</Link>
          <Link to="/resources">Blog</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="footer-col">
          <h3>Practice Areas</h3>
          {practices.map((item) => (
            <Link to={`/practice/${item.slug}`} key={item.slug}>
              {item.title}
            </Link>
          ))}
          <Link to="/practice-areas">Civil Litigation</Link>
        </div>
        <div className="footer-col">
          <h3>Resources</h3>
          <Link to="/insights">Articles</Link>
          <Link to="/resources">FAQs</Link>
          <Link to="/#team">Meet Our Team</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
        </div>
        <div className="footer-col footer-contact-col">
          <h3>Contact Us</h3>
          <span>
            <MapPin size={15} className="footer-icon" aria-hidden="true" />
            123 Legal Avenue, Zirakpur, Punjab 140603, India
          </span>
          <span>
            <Phone size={15} className="footer-icon" aria-hidden="true" />
            +91 98765 43210
          </span>
          <span>
            <Mail size={15} className="footer-icon" aria-hidden="true" />
            hello@riveralegal.com
          </span>
          <span>
            <Clock3 size={15} className="footer-icon" aria-hidden="true" />
            Mon – Sat: 9 AM – 6 PM
          </span>
        </div>
      </div>
      <div className="footer-bottom page-width">
        <p>© {new Date().getFullYear()} Rivera &amp; Co. All rights reserved.</p>
        <div className="footer-bottom-links">
          <Link to="/privacy">Privacy Policy</Link>
          <span>|</span>
          <Link to="/terms">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}

function SectionHeading({ eyebrow, title, action, to }) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {action && (
        <Link className="text-link" to={to}>
          {action} <ArrowRight size={14} />
        </Link>
      )}
    </div>
  );
}

function PracticeCard({ item }) {
  const cardRef = useRef(null);
  const [inkOrigin, setInkOrigin] = useState("left");
  const [isHovered, setIsHovered] = useState(false);
  const Icon = item.icon;

  const handleMouseEnter = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const origin = x > rect.width / 2 ? "right" : "left";
    setInkOrigin(origin);
    setIsHovered(true);
  };

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const xPercent = ((e.clientX - rect.left) / rect.width) * 100;
    const yPercent = ((e.clientY - rect.top) / rect.height) * 100;
    cardRef.current.style.setProperty("--mouse-x", `${xPercent}%`);
    cardRef.current.style.setProperty("--mouse-y", `${yPercent}%`);
  };

  const handleMouseLeave = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const origin = x > rect.width / 2 ? "right" : "left";
    setInkOrigin(origin);
    setIsHovered(false);
  };

  return (
    <Link
      ref={cardRef}
      className={`practice-card ${isHovered ? "is-inked" : ""}`}
      to={`/practice/${item.slug}`}
      style={{ "--ink-origin": inkOrigin }}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="floating-ink-container" aria-hidden="true">
        <div className="ink-base-wash" />
        <div className="ink-wave ink-wave-back" />
        <div className="ink-wave ink-wave-front" />
        <div className="ink-droplet droplet-1" />
        <div className="ink-droplet droplet-2" />
        <div className="ink-droplet droplet-3" />
      </div>
      <span className="practice-icon">
        <Icon size={24} strokeWidth={1.4} aria-hidden="true" />
      </span>
      <h3 className="practice-title">{item.title}</h3>
      <p className="practice-description">{item.description}</p>
      <span className="circle-arrow" aria-hidden="true">
        <ArrowRight size={13} />
      </span>
    </Link>
  );
}

function HomePage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero" id="home">
        <div className="hero-background-art">
          <div className="hero-photo-layer" style={{ backgroundImage: `url("${photos.hero}")` }} role="img" aria-label="Senior Advocate seated at his law desk" />
          <div className="hero-overlay-shade" />
          <div className="hero-elements-layer">
            <p className="script-badge-hero">Your Rights<br />Our Priority</p>
          </div>
        </div>

        <div className="page-width hero-layout-container">
          <div className="hero-content">
            <p className="eyebrow eyebrow-light hero-eyebrow">
              <span>EXPERIENCE</span>
              <span className="dot-divider">•</span>
              <span>INTEGRITY</span>
              <span className="dot-divider">•</span>
              <span>RESULTS</span>
            </p>
            <h1 className="hero-title">
              Trusted Legal<br />
              Representation<br />
              for Life’s Most<br />
              Important Matters
            </h1>
            <p className="hero-lede">
              We are a full-service law firm providing strategic, practical and client-focused legal solutions for individuals, families and businesses.
            </p>
            <div className="hero-actions">
              <Link className="button button-gold hero-cta-btn" to="/contact">
                Schedule a Consultation <ArrowRight size={15} />
              </Link>
              <Link className="video-button" to="/our-approach">
                <span className="play-icon-wrap">
                  <Play size={12} fill="currentColor" />
                </span>
                <span>Watch Our Video</span>
              </Link>
            </div>
            <div className="trust-row">
              {trustItems.map(({ icon: Icon, label }) => (
                <div className="trust-item" key={label}>
                  <div className="trust-icon-box">
                    <Icon size={20} strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRACTICE AREAS */}
      <section className="practice-section section-pad" id="practice-areas">
        <div className="page-width">
          <SectionHeading
            eyebrow="OUR PRACTICE AREAS"
            title="Comprehensive Legal Solutions"
            action="View All Practice Areas"
            to="/practice-areas"
          />
          <div className="practice-grid">
            {practices.map((practice) => (
              <PracticeCard key={practice.slug} item={practice} />
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT RIVERA & CO. */}
      <section className="about-section" id="about">
        <div className="about-photo-wrap">
          <img src={photos.consultation} alt="Attorney meeting with client in firm conference room" loading="lazy" />
          <p className="script-note about-script-overlay">Real People<br />Real Solutions</p>
        </div>
        <div className="about-copy-wrap">
          <p className="eyebrow">ABOUT RIVERA &amp; CO.</p>
          <h2>Dedicated to Your Rights and Future</h2>
          <p className="body-copy">
            With years of experience and a results-driven approach, our attorneys provide personalized legal counsel to help you navigate complex challenges. We are committed to delivering practical solutions and standing by your side every step of the way.
          </p>
          <Link className="button button-gold about-learn-btn" to="/about">
            Learn More About Us <ArrowRight size={14} />
          </Link>
        </div>
        <div className="stats-column">
          <div className="stat">
            <strong>10+</strong>
            <small>Years of Experience</small>
          </div>
          <div className="stat">
            <strong>1,000+</strong>
            <small>Clients Served</small>
          </div>
          <div className="stat">
            <strong>95%</strong>
            <small>Client Satisfaction</small>
          </div>
          <div className="stat">
            <strong>20+</strong>
            <small>Legal Professionals</small>
          </div>
        </div>
      </section>

      {/* FEATURED CASE RESULTS */}
      <section className="results-section section-pad" id="case-results">
        <div className="page-width results-layout">
          <div className="results-intro">
            <p className="eyebrow">FEATURED CASE RESULTS</p>
            <h2>Proven Results for Our Clients</h2>
            <p className="results-note">Amounts shown as approximate INR equivalents.</p>
          </div>
          <div className="results-content">
            <Link className="text-link results-link" to="/case-results">
              View All Case Results <ArrowRight size={14} />
            </Link>
            <div className="case-grid">
              {matters.map((matter, index) => (
                <Link className="case-card" key={matter.slug} to={`/case-results/${matter.slug}`}>
                  <span className="case-image">
                    <img src={matter.image} alt={matter.title} loading="lazy" />
                    <span className="case-index">CASE {String(index + 1).padStart(2, "0")}</span>
                  </span>
                  <span className="case-info">
                    <strong className="case-amount">{matter.amount}</strong>
                    <span className="case-title">{matter.title}</span>
                    <small className="case-subtitle">{matter.subtitle}</small>
                  </span>
                  <span className="case-arrow" aria-hidden="true">
                    <ArrowRight size={13} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OUR TEAM */}
      <section className="team-section section-pad" id="team">
        <div className="page-width">
          <div className="team-heading">
            <div>
              <p className="eyebrow">OUR TEAM</p>
              <h2>The People Behind Your Advocate</h2>
            </div>
            <Link className="text-link" to="/attorneys">
              Meet the Full Team <ArrowRight size={14} />
            </Link>
          </div>
          <div className="team-grid">
            {teamMembers.map((member) => (
              <article className="team-card" key={member.image}>
                <div className="team-photo">
                  <img src={member.image} alt={member.name} loading="lazy" />
                </div>
                <div className="team-card-info">
                  <p className="team-designation">{member.designation}</p>
                  <h3>{member.name}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* LEGAL INSIGHTS */}
      <section className="insights-section section-pad" id="insights">
        <div className="page-width insights-layout">
          <div className="insights-intro">
            <p className="eyebrow">LEGAL INSIGHTS</p>
            <h2>Knowledge That Empowers</h2>
            <Link className="text-link desktop-only-link" to="/insights">
              View All Insights <ArrowRight size={14} />
            </Link>
          </div>
          <div className="insights-grid">
            {articles.map((article) => (
              <Link className="article-card" to={`/insights/${article.slug}`} key={article.slug}>
                <span className="article-image">
                  <img src={article.image} alt={article.title} loading="lazy" />
                </span>
                <div className="article-body">
                  <span className="article-date">{article.date}</span>
                  <h3 className="article-title">{article.title}</h3>
                  <span className="article-circle-arrow" aria-hidden="true">
                    <ArrowRight size={13} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* LET'S WORK TOGETHER / CONSULTATION CTA */}
      <section className="consultation-cta">
        <div className="page-width cta-inner">
          <div className="cta-copy">
            <p className="eyebrow eyebrow-light">LET’S WORK TOGETHER</p>
            <h2>Book a Consultation Today</h2>
            <p>Get expert legal advice tailored to your unique needs.</p>
          </div>
          <div className="cta-actions">
            <Link className="button button-gold" to="/contact">
              Schedule a Consultation <ArrowRight size={15} />
            </Link>
            <a className="button button-outline" href="tel:+919876543210">
              <Phone size={14} /> Call Us Now
            </a>
          </div>
          <p className="cta-script">
            Justice Today<br />
            A Brighter Tomorrow
          </p>
        </div>
      </section>
    </>
  );
}

function PageHero({ eyebrow, title, description, image, compact = false }) {
  return (
    <section className={`page-hero ${compact ? "page-hero-compact" : ""}`} style={image ? { "--page-hero-image": `url("${image}")` } : undefined}>
      <div className="page-width page-hero-inner">
        <p className="eyebrow eyebrow-light">{eyebrow}</p>
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </div>
    </section>
  );
}

function Breadcrumbs({ items }) {
  return (
    <nav className="breadcrumbs page-width" aria-label="Breadcrumb">
      <Link to="/">Home</Link>
      {items.map((item) => (
        <React.Fragment key={item.label}>
          <span aria-hidden="true">/</span>
          {item.to ? <Link to={item.to}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}
        </React.Fragment>
      ))}
    </nav>
  );
}

function PracticeListPage() {
  return (
    <>
      <PageHero
        eyebrow="HOW WE CAN HELP"
        title="Our Practice Areas"
        description="Comprehensive legal guidance tailored to individuals, families, and commercial enterprises."
        image={photos.scales}
      />
      <section className="interior-section page-width">
        <div className="practice-detail-grid">
          {practices.map(({ slug, title, description, icon: Icon, image }) => (
            <Link className="practice-detail-card" to={`/practice/${slug}`} key={slug}>
              <div className="practice-detail-img">
                <img src={image} alt={title} loading="lazy" />
              </div>
              <div className="practice-detail-content">
                <Icon size={24} className="practice-detail-icon" aria-hidden="true" />
                <h2>{title}</h2>
                <p>{description}</p>
                <span className="text-link">
                  Explore this practice <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

function PracticePage() {
  const { slug } = useParams();
  const item = practices.find((practice) => practice.slug === slug);
  if (!item) return <NotFound />;
  const Icon = item.icon;

  return (
    <>
      <Breadcrumbs items={[{ label: "Practice Areas", to: "/practice-areas" }, { label: item.title }]} />
      <PageHero eyebrow="PRACTICE AREA" title={item.title} description={item.description} image={item.image} />
      <section className="detail-layout page-width">
        <article className="detail-main">
          <Icon className="detail-icon" size={32} aria-hidden="true" />
          <h2>Strategic Legal Counsel Shaped Around Your Needs</h2>
          <p>{item.intro}</p>
          <h3>How We Can Assist You</h3>
          <ul>
            {item.topics.map((topic) => (
              <li key={topic}>{topic}</li>
            ))}
          </ul>
          <p className="legal-note">
            This page provides general informational overview and does not constitute formal legal counsel. For specific case evaluation, contact our office for a confidential consultation.
          </p>
          <Link className="button button-gold" to="/contact">
            Discuss Your Matter <ArrowRight size={15} />
          </Link>
        </article>
        <aside className="detail-aside">
          <p className="eyebrow">START A CONVERSATION</p>
          <h2>Have questions about your situation?</h2>
          <p>Contact our senior attorneys for an initial review of your case files and legal requirements.</p>
          <Link className="text-link" to="/contact">
            Request a Consultation <ArrowRight size={15} />
          </Link>
        </aside>
      </section>
      <section className="related-section page-width">
        <h2>Explore Other Practice Areas</h2>
        <div className="related-links">
          {practices
            .filter((practice) => practice.slug !== slug)
            .slice(0, 3)
            .map((practice) => (
              <Link to={`/practice/${practice.slug}`} key={practice.slug}>
                {practice.title} <ArrowUpRight size={15} />
              </Link>
            ))}
        </div>
      </section>
    </>
  );
}

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT RIVERA &amp; CO."
        title="Dedicated to Your Rights and Future"
        description="A legacy of rigorous advocacy, client empathy, and unyielding legal integrity."
        image={photos.consultation}
      />
      <section className="detail-layout page-width">
        <article className="detail-main">
          <h2>People. Rights. Results.</h2>
          <p>
            At Rivera &amp; Co., we believe premium legal representation combines sharp strategic intellect with deep client empathy. Our attorneys bring decades of collective experience in navigating complex litigations, high-stakes transactions, and sensitive family matters.
          </p>
          <p>
            We take pride in transparent communication, ensuring you always know where your case stands, what options exist, and the realistic timeline ahead.
          </p>
          <h3>Our Guiding Principles</h3>
          <ul>
            <li><strong>Client-First Commitment:</strong> Tailored strategies designed for your unique personal or commercial objectives.</li>
            <li><strong>Uncompromising Integrity:</strong> Honest assessments, transparent fee structures, and ethical representation.</li>
            <li><strong>Results-Oriented Tenacity:</strong> Relentless preparation and skilled advocacy both at negotiation tables and in courtroom trials.</li>
          </ul>
          <Link className="button button-gold" to="/contact">
            Schedule a Confidential Consultation <ArrowRight size={15} />
          </Link>
        </article>
        <aside className="detail-aside">
          <p className="eyebrow">OUR APPROACH</p>
          <h2>Strategic Counsel. Personal Commitment.</h2>
          <p>Learn how our structured intake and litigation preparation delivers consistent advantages.</p>
          <Link className="text-link" to="/our-approach">
            Explore Our Approach <ArrowRight size={15} />
          </Link>
        </aside>
      </section>
    </>
  );
}

function AttorneysPage() {
  return (
    <>
      <PageHero
        eyebrow="OUR TEAM"
        title="Meet Our Attorneys"
        description="Experienced advocates committed to upholding justice and delivering measurable results."
        image={photos.hero}
      />
      <section className="interior-section page-width">
        <div className="attorneys-grid">
          <div className="attorney-card">
            <div className="attorney-photo">
              <img src={photos.hero} alt="Senior Partner Advocate" />
            </div>
            <div className="attorney-bio">
              <p className="eyebrow">MANAGING PARTNER</p>
              <h2>Advocate Carlos Rivera</h2>
              <p className="attorney-specialty">Personal Injury &amp; Corporate Litigation</p>
              <p>
                With over 15 years of courtroom experience, Carlos Rivera leads the firm's complex litigation group, successfully securing multi-million dollar outcomes for clients across civil and commercial disputes.
              </p>
              <div className="attorney-contact-quick">
                <a href="mailto:c.rivera@riveralegal.com"><Mail size={14} /> c.rivera@riveralegal.com</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="team-section attorneys-team-section section-pad">
        <div className="page-width">
          <div className="team-heading">
            <div>
              <p className="eyebrow">OUR TEAM</p>
              <h2>Meet the Advocates</h2>
            </div>
          </div>
          <div className="team-grid">
            {teamMembers.map((member) => (
              <article className="team-card" key={member.image}>
                <div className="team-photo">
                  <img src={member.image} alt={member.name} loading="lazy" />
                </div>
                <div className="team-card-info">
                  <p className="team-designation">{member.designation}</p>
                  <h3>{member.name}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function CaseResultsPage() {
  return (
    <>
      <PageHero
        eyebrow="OUR TRACK RECORD"
        title="Proven Case Results"
        description="Explore how our thorough preparation and dedicated counsel have delivered favorable outcomes for our clients."
        image={photos.caseInjury}
      />
      <section className="interior-section page-width">
        <div className="case-directory">
          {matters.map((matter) => (
            <Link className="case-directory-card" to={`/case-results/${matter.slug}`} key={matter.slug}>
              <div className="case-dir-img">
                <img src={matter.image} alt={matter.title} loading="lazy" />
              </div>
              <div className="case-dir-content">
                <span className="case-dir-amount">{matter.amount}</span>
                <h2>{matter.title}</h2>
                <p>{matter.subtitle}</p>
                <span className="text-link">
                  View Matter Details <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

function CaseDetailPage() {
  const { slug } = useParams();
  const matter = matters.find((item) => item.slug === slug);
  if (!matter) return <NotFound />;

  return (
    <>
      <Breadcrumbs items={[{ label: "Case Results", to: "/case-results" }, { label: matter.title }]} />
      <PageHero eyebrow={matter.amount} title={matter.title} description={matter.subtitle} image={matter.image} />
      <section className="detail-layout page-width">
        <article className="detail-main">
          <h2>Summary of Matter Resolution</h2>
          <p>
            In this significant proceeding, Rivera &amp; Co. represented the client through intensive document discovery, expert depositions, and multi-party negotiation. Our strategic framework established clear liability, leading to a successful resolution of {matter.amount}.
          </p>
          <p className="legal-note">
            Disclaimer: Prior case settlements and verdicts do not guarantee similar outcomes in future matters. Every legal proceeding depends on its specific facts, evidence, and jurisdiction.
          </p>
          <Link className="button button-gold" to="/contact">
            Schedule a Case Review <ArrowRight size={15} />
          </Link>
        </article>
        <aside className="detail-aside">
          <p className="eyebrow">REPRESENTATION INQUIRY</p>
          <h2>Discuss your case with our partners</h2>
          <Link className="text-link" to="/contact">
            Request an Appointment <ArrowRight size={15} />
          </Link>
        </aside>
      </section>
    </>
  );
}

function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="LEGAL INSIGHTS &amp; PUBLICATIONS"
        title="Knowledge That Empowers"
        description="Comprehensive analysis and practical legal guidance from our practicing attorneys."
        image={photos.articleContracts}
      />
      <section className="interior-section page-width">
        <div className="insights-directory">
          {articles.map((article) => (
            <Link className="article-card" to={`/insights/${article.slug}`} key={article.slug}>
              <span className="article-image">
                <img src={article.image} alt={article.title} loading="lazy" />
              </span>
              <div className="article-body">
                <span className="article-date">{article.date} · {article.category}</span>
                <h3 className="article-title">{article.title}</h3>
                <span className="article-circle-arrow" aria-hidden="true">
                  <ArrowUpRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

function ArticlePage() {
  const { slug } = useParams();
  const article = articles.find((item) => item.slug === slug);
  if (!article) return <NotFound />;

  return (
    <>
      <Breadcrumbs items={[{ label: "Legal Insights", to: "/insights" }, { label: article.title }]} />
      <PageHero eyebrow={`${article.category} · ${article.date}`} title={article.title} image={article.image} />
      <article className="article-detail page-width">
        <p className="article-lede">{article.intro}</p>
        <h2>Key Legal Considerations</h2>
        <ol>
          {article.sections.map((section) => (
            <li key={section}>{section}</li>
          ))}
        </ol>
        <p className="article-caveat">
          Note: This publication is provided for general informational purposes only and does not constitute formal legal counsel. For actionable advice regarding your jurisdiction, please consult a qualified attorney.
        </p>
        <Link className="button button-gold" to="/contact">
          Consult an Attorney <ArrowRight size={15} />
        </Link>
      </article>
    </>
  );
}

function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="CLIENT RESOURCES"
        title="Helpful Guides &amp; FAQs"
        description="Practical guidelines and answers to frequent questions regarding legal preparation."
      />
      <section className="interior-section page-width">
        <div className="resource-list">
          <div className="resource-card">
            <span><FileText size={24} aria-hidden="true" /></span>
            <div>
              <h2>How to Prepare for Your Legal Consultation</h2>
              <p>Gather relevant agreements, timestamps, communications, and compile a clear summary of your core objectives before meeting your lawyer.</p>
            </div>
            <ArrowUpRight size={18} aria-hidden="true" />
          </div>
          <div className="resource-card">
            <span><FileText size={24} aria-hidden="true" /></span>
            <div>
              <h2>Understanding Attorney-Client Privilege</h2>
              <p>Learn how confidential communications with your licensed legal team are protected by law from disclosure.</p>
            </div>
            <ArrowUpRight size={18} aria-hidden="true" />
          </div>
        </div>
      </section>
    </>
  );
}

function ApproachPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Our Approach" }]} />
      <PageHero
        eyebrow="OUR METHODOLOGY"
        title="Strategic Counsel. Focused Execution."
        description="How Rivera &amp; Co. crafts winning strategies from day one."
        image={photos.consultation}
      />
      <section className="detail-layout page-width">
        <article className="detail-main">
          <h2>A Rigorous, Four-Step Process</h2>
          <ol className="approach-list">
            <li>
              <strong>Thorough Case Assessment:</strong> In-depth evaluation of documents, evidence, and risk exposures.
            </li>
            <li>
              <strong>Custom Strategic Roadmap:</strong> Defining realistic legal remedies, timelines, and costs.
            </li>
            <li>
              <strong>Tenacious Negotiation:</strong> Pursuing optimal out-of-court settlements where favorable.
            </li>
            <li>
              <strong>Trial-Ready Advocacy:</strong> Aggressive representation before courts and arbitral panels.
            </li>
          </ol>
          <Link className="button button-gold" to="/contact">
            Request an Evaluation <ArrowRight size={15} />
          </Link>
        </article>
      </section>
    </>
  );
}

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef(null);

  const onSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    formRef.current?.reset();
  };

  return (
    <>
      <PageHero
        eyebrow="GET IN TOUCH"
        title="Schedule a Consultation"
        description="Reach out to our legal team. We look forward to reviewing your inquiry promptly and confidentially."
      />
      <section className="contact-layout page-width">
        <div className="contact-intro">
          <p className="eyebrow">RIVERA &amp; CO.</p>
          <h2>Dedicated to Protecting Your Interests</h2>
          <p>
            Visit our office or reach out via phone or email to schedule an in-person or virtual consultation with our attorneys.
          </p>
          <div className="contact-detail">
            <MapPin size={18} />
            <span>
              <strong>Office Location</strong>
              <small>123 Legal Avenue, Zirakpur, Punjab 140603, India</small>
            </span>
          </div>
          <div className="contact-detail">
            <Phone size={18} />
            <span>
              <strong>Phone</strong>
              <small><a href="tel:+919876543210">+91 98765 43210</a></small>
            </span>
          </div>
          <div className="contact-detail">
            <Mail size={18} />
            <span>
              <strong>Email</strong>
              <small><a href="mailto:hello@riveralegal.com">hello@riveralegal.com</a></small>
            </span>
          </div>
          <div className="contact-detail">
            <Clock3 size={18} />
            <span>
              <strong>Office Hours</strong>
              <small>Monday – Saturday: 9:00 AM – 6:00 PM</small>
            </span>
          </div>
        </div>

        <div className="contact-form-panel">
          <p className="eyebrow">CONFIDENTIAL INQUIRY</p>
          <h2>How Can We Help You?</h2>
          <form ref={formRef} onSubmit={onSubmit}>
            <label htmlFor="contact-name">
              Full Name
              <input id="contact-name" name="name" autoComplete="name" required placeholder="John Doe" />
            </label>
            <div className="form-row">
              <label htmlFor="contact-email">
                Email Address
                <input id="contact-email" name="email" type="email" autoComplete="email" required placeholder="john@example.com" />
              </label>
              <label htmlFor="contact-phone">
                Phone Number
                <input id="contact-phone" name="phone" type="tel" autoComplete="tel" placeholder="+91 98765 43210" />
              </label>
            </div>
            <label htmlFor="contact-practice">
              Practice Area
              <select id="contact-practice" name="practice" defaultValue="">
                <option value="" disabled>Select a Practice Area</option>
                {practices.map((practice) => (
                  <option key={practice.slug} value={practice.title}>
                    {practice.title}
                  </option>
                ))}
                <option value="other">Other Legal Matters</option>
              </select>
            </label>
            <label htmlFor="contact-message">
              Brief Description of Matter
              <textarea id="contact-message" name="message" rows="4" placeholder="Briefly describe your situation..." required />
            </label>
            <button className="button button-gold" type="submit">
              Submit Consultation Request <ArrowRight size={15} />
            </button>
            {submitted && (
              <p className="form-feedback" role="status">
                <Check size={16} /> Thank you. Your consultation request has been submitted. Our office will contact you within 24 hours.
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  );
}

function PolicyPage({ type }) {
  const content = {
    privacy: {
      eyebrow: "PRIVACY POLICY",
      title: "Privacy Policy",
      description: "How Rivera & Co. handles and protects client confidential information.",
      sections: [
        "Rivera & Co. is committed to preserving the privacy of our clients and site visitors in accordance with global data protection standards.",
        "Any information submitted through this website is stored securely and used solely for direct communication and representation assessments.",
        "We never sell or disclose your personal or contact details to third-party marketing services.",
      ],
    },
    terms: {
      eyebrow: "TERMS OF USE",
      title: "Terms of Service",
      description: "Conditions governing use of the Rivera & Co. digital portfolio.",
      sections: [
        "The content published on this website is for general informational awareness and does not form an attorney-client relationship until formal engagement is signed.",
        "Case outcomes, verdicts, and settlements presented reflect historical facts and do not predict identical results in any future dispute.",
        "Reproduction of firm media, text, or branding without prior written consent is strictly prohibited.",
      ],
    },
  }[type];

  return (
    <>
      <PageHero eyebrow={content.eyebrow} title={content.title} description={content.description} />
      <article className="article-detail page-width">
        {content.sections.map((section, idx) => (
          <p key={idx}>{section}</p>
        ))}
      </article>
    </>
  );
}

function NotFound() {
  return (
    <section className="not-found page-width">
      <p className="eyebrow">404 · PAGE NOT FOUND</p>
      <h1>Page Not Found</h1>
      <p>The page you requested could not be found or has moved.</p>
      <Link className="button button-gold" to="/">
        Return to Home <ArrowRight size={15} />
      </Link>
    </section>
  );
}

function SiteRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/practice-areas" element={<PracticeListPage />} />
      <Route path="/practice/:slug" element={<PracticePage />} />
      <Route path="/attorneys" element={<AttorneysPage />} />
      <Route path="/case-results" element={<CaseResultsPage />} />
      <Route path="/case-results/:slug" element={<CaseDetailPage />} />
      <Route path="/resources" element={<ResourcesPage />} />
      <Route path="/insights" element={<InsightsPage />} />
      <Route path="/insights/:slug" element={<ArticlePage />} />
      <Route path="/our-approach" element={<ApproachPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/privacy" element={<PolicyPage type="privacy" />} />
      <Route path="/terms" element={<PolicyPage type="terms" />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function App() {
  const location = useLocation();
  const navLogoRef = useRef(null);

  // Always show the intro toggle on every page load / refresh
  const [introActive, setIntroActive] = useState(true);
  const [hideNavLogo, setHideNavLogo] = useState(true);
  const [dockPulse, setDockPulse] = useState(false);

  useEffect(() => {
    const title =
      location.pathname === "/"
        ? "Rivera & Co. — Trusted Legal Representation"
        : `${location.pathname.split("/").filter(Boolean).at(-1)?.replaceAll("-", " ") || "Home"} | Rivera & Co.`;
    document.title = title.replace(/\b\w/g, (letter) => letter.toUpperCase());
  }, [location.pathname]);

  const handleIntroComplete = () => {
    setHideNavLogo(false);
    setDockPulse(true);
    setTimeout(() => {
      setIntroActive(false);
    }, 150);
    setTimeout(() => {
      setDockPulse(false);
    }, 1500);
  };

  const handleReplayIntro = () => {
    setHideNavLogo(true);
    setIntroActive(true);
  };

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <ScrollReset />
      <StartingIntroOverlay
        isOpen={introActive}
        navLogoRef={navLogoRef}
        onComplete={handleIntroComplete}
      />
      <SiteHeader
        navLogoRef={navLogoRef}
        hideNavLogo={hideNavLogo}
        dockPulse={dockPulse}
        onReplayIntro={handleReplayIntro}
      />
      <main id="main-content">
        <SiteRoutes />
      </main>
      <Footer />
    </>
  );
}

export default function AppRoot() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
