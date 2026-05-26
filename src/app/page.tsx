import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      
      <main className="animate-fade-in">
        {/* 1. Hero Section */}
        <section className="section" style={{ padding: "120px 0 80px 0" }}>
          <div className="container grid-2" style={{ alignItems: "center" }}>
            <div>
              <span className="section-subtitle">Nexis Tech Solutions</span>
              <h1 style={{ lineHeight: "1.15", margin: "12px 0 24px 0" }}>
                Creating Impact through Future-Ready Technology
              </h1>
              <p style={{ fontSize: "1.15rem", marginBottom: "32px", maxWidth: "540px" }}>
                We specialize in engineering robust mobile applications, enterprise web portals, governance systems, and digital automation platforms tailored for modern organizations and government administrations.
              </p>
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <Link href="/contact" className="btn btn-primary">
                  Get in Touch
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ width: "16px", height: "16px" }}
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12,5 19,12 12,19" />
                  </svg>
                </Link>
                <Link href="/services" className="btn btn-secondary">
                  Explore Services
                </Link>
              </div>
            </div>
            
            <div style={{ display: "flex", justifyContent: "center", position: "relative" }}>
              {/* Premium Abstract SVG Graphic representing digital connectivity */}
              <svg
                viewBox="0 0 400 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: "100%", maxWidth: "380px", height: "auto", opacity: "0.85" }}
              >
                <circle cx="200" cy="200" r="160" stroke="var(--border)" strokeWidth="1" strokeDasharray="4 4" />
                <circle cx="200" cy="200" r="100" stroke="var(--border)" strokeWidth="1" />
                <circle cx="200" cy="200" r="40" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="6 2" />
                
                {/* Floating nodes */}
                <circle cx="120" cy="120" r="6" fill="var(--text-primary)" />
                <line x1="200" y1="200" x2="120" y2="120" stroke="var(--border)" strokeWidth="1.5" />
                
                <circle cx="280" cy="150" r="8" fill="var(--accent)" />
                <line x1="200" y1="200" x2="280" y2="150" stroke="var(--accent)" strokeWidth="1" />
                
                <circle cx="150" cy="280" r="5" fill="var(--text-secondary)" />
                <line x1="200" y1="200" x2="150" y2="280" stroke="var(--border)" strokeWidth="1" />
                
                <circle cx="270" cy="270" r="7" fill="var(--text-primary)" />
                <line x1="200" y1="200" x2="270" y2="270" stroke="var(--border)" strokeWidth="1.5" />
                
                {/* Center Core */}
                <circle cx="200" cy="200" r="12" fill="var(--accent)" />
                <circle cx="200" cy="200" r="6" fill="var(--surface)" />
              </svg>
            </div>
          </div>
        </section>

        {/* 2. Project Spotlights (WeWatch & WeCare) */}
        <section className="section-alt">
          <div className="container">
            <div className="section-title-wrapper">
              <span className="section-subtitle">Innovation in Action</span>
              <h2>Digital Governance & Monitoring</h2>
              <p>
                We are proud developers of pioneering systems built in coordination with administration initiatives to enhance monitoring, transparency, and civic support.
              </p>
            </div>
            
            <div className="grid-2">
              {/* WeWatch Spotlight */}
              <div className="card" style={{ gap: "20px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span
                    style={{
                      background: "var(--accent-light)",
                      color: "var(--accent)",
                      fontSize: "0.8rem",
                      fontWeight: "700",
                      padding: "6px 14px",
                      borderRadius: "20px",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Web Portal
                  </span>
                  <span style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>Digital Administration</span>
                </div>
                
                <div>
                  <h3 style={{ fontSize: "1.6rem", marginBottom: "12px" }}>WeWatch Portal</h3>
                  <p style={{ fontSize: "0.98rem", marginBottom: "0" }}>
                    A centralized real-time administrative web dashboard deployed for district monitoring. WeWatch provides officials with unified visibility, statistics, data logs, and performance tracking across public initiatives.
                  </p>
                </div>
                
                <div style={{ marginTop: "auto", paddingTop: "10px" }}>
                  <Link href="/projects" className="btn-link">
                    Learn about WeWatch
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ width: "16px", height: "16px", marginLeft: "6px" }}
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12,5 19,12 12,19" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* WeCare Spotlight */}
              <div className="card" style={{ gap: "20px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span
                    style={{
                      background: "var(--accent-light)",
                      color: "var(--accent)",
                      fontSize: "0.8rem",
                      fontWeight: "700",
                      padding: "6px 14px",
                      borderRadius: "20px",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Mobile Platform
                  </span>
                  <span style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>District Initiative</span>
                </div>
                
                <div>
                  <h3 style={{ fontSize: "1.6rem", marginBottom: "12px" }}>WeCare Application</h3>
                  <p style={{ fontSize: "0.98rem", marginBottom: "0" }}>
                    Developed to support community-centric initiatives, WeCare serves as a reliable portal for governance administration, ensuring efficient response tracking, public welfare monitoring, and digital coordination.
                  </p>
                </div>
                
                <div style={{ marginTop: "auto", paddingTop: "10px" }}>
                  <Link href="/projects" className="btn-link">
                    Learn about WeCare
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ width: "16px", height: "16px", marginLeft: "6px" }}
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12,5 19,12 12,19" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Core Services Summary */}
        <section className="section">
          <div className="container">
            <div className="section-title-wrapper">
              <span className="section-subtitle">What We Do</span>
              <h2>Enterprise Technical Specializations</h2>
              <p>
                We deliver robust, custom digital products designed to streamline workflows, secure assets, and catalyze business scaling.
              </p>
            </div>
            
            <div className="grid-3">
              {/* Web Development */}
              <div className="card">
                <div style={{ color: "var(--accent)", marginBottom: "20px" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ width: "36px", height: "36px" }}
                  >
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                </div>
                <h3>Web Application Development</h3>
                <p style={{ fontSize: "0.95rem", margin: "0" }}>
                  High-performance, secure, responsive web platforms built using cutting-edge frameworks for seamless UX.
                </p>
              </div>

              {/* Mobile Development */}
              <div className="card">
                <div style={{ color: "var(--accent)", marginBottom: "20px" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ width: "36px", height: "36px" }}
                  >
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                    <line x1="12" y1="18" x2="12.01" y2="18" />
                  </svg>
                </div>
                <h3>Mobile Application Development</h3>
                <p style={{ fontSize: "0.95rem", margin: "0" }}>
                  Native and cross-platform mobile solutions targeting iOS and Android with premium fluid animations.
                </p>
              </div>

              {/* Dashboards */}
              <div className="card">
                <div style={{ color: "var(--accent)", marginBottom: "20px" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ width: "36px", height: "36px" }}
                  >
                    <path d="M3 3v18h18" />
                    <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
                  </svg>
                </div>
                <h3>Dashboard & Monitoring</h3>
                <p style={{ fontSize: "0.95rem", margin: "0" }}>
                  Real-time data visualization systems showing complex analytics with beautiful responsive charts.
                </p>
              </div>
            </div>
            
            <div style={{ textAlign: "center", marginTop: "40px" }}>
              <Link href="/services" className="btn btn-secondary">
                View All Specializations
              </Link>
            </div>
          </div>
        </section>

        {/* 4. CEO Message Section (Decent, Classy Editorial Layout) */}
        <section className="section-alt" style={{ padding: "100px 0" }}>
          <div className="container">
            <div
              style={{
                background: "var(--background)",
                borderRadius: "var(--border-radius-lg)",
                padding: "60px",
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow)",
                maxWidth: "960px",
                margin: "0 auto",
                display: "grid",
                gridTemplateColumns: "1.2fr 2fr",
                gap: "50px",
                alignItems: "center",
              }}
              className="grid-2"
            >
              <div>
                <span className="section-subtitle">Leadership</span>
                <h2 style={{ fontSize: "2rem", margin: "8px 0 20px 0", lineHeight: "1.2" }}>CEO’s Message</h2>
                <div style={{ borderLeft: "3px solid var(--accent)", paddingLeft: "16px", margin: "24px 0" }}>
                  <p style={{ fontWeight: "700", color: "var(--text-primary)", fontSize: "1.1rem", marginBottom: "4px" }}>
                    Muneer Ahmad
                  </p>
                  <p style={{ fontSize: "0.88rem", margin: "0", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    CEO & Founder
                  </p>
                </div>
              </div>
              
              <div>
                <blockquote
                  style={{
                    fontSize: "1.15rem",
                    fontWeight: "500",
                    lineHeight: "1.7",
                    color: "var(--text-primary)",
                    fontStyle: "italic",
                    marginBottom: "24px",
                    position: "relative",
                  }}
                >
                  “At Nexis Tech Solutions, we believe technology is not only about software — it is about creating meaningful impact, solving real-world challenges, and improving systems for the future.”
                </blockquote>
                <p style={{ fontSize: "1rem", margin: "0" }}>
                  Our vision is to build modern, reliable, and innovative digital solutions that contribute towards organizational growth, smart governance, and digital transformation. We sincerely thank our clients and partners for their trust and confidence in our work.
                </p>
                <div style={{ marginTop: "24px" }}>
                  <Link href="/about" className="btn-link">
                    Read the full message
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ width: "16px", height: "16px", marginLeft: "6px" }}
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12,5 19,12 12,19" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Contact CTA */}
        <section className="section" style={{ textAlign: "center" }}>
          <div className="container" style={{ maxWidth: "680px" }}>
            <span className="section-subtitle">Let's Connect</span>
            <h2 style={{ fontSize: "2.4rem", margin: "12px 0 20px 0" }}>Start Your Digital Transformation</h2>
            <p style={{ fontSize: "1.1rem", marginBottom: "32px" }}>
              Have an idea or a project in mind? Reach out to us for software development inquiries, technical audits, or digital solution partnerships.
            </p>
            <Link href="/contact" className="btn btn-primary" style={{ padding: "16px 36px", fontSize: "1rem" }}>
              Work With Us
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
