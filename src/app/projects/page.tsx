import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";

export default function Projects() {
  return (
    <>
      <Navbar />
      
      <main className="animate-fade-in">
        {/* Header Section */}
        <section className="section" style={{ padding: "80px 0 40px 0", borderBottom: "1px solid var(--border)", backgroundColor: "var(--surface)" }}>
          <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
            <span className="section-subtitle">Case Studies</span>
            <h1 style={{ fontSize: "2.8rem", marginBottom: "16px" }}>Digital Governance Initiatives</h1>
            <p style={{ fontSize: "1.1rem", margin: "0" }}>
              Explore how we develop secure, scalable software platforms in coordination with district administrations to improve digital governance, tracking, and monitoring.
            </p>
          </div>
        </section>

        {/* Case Study 1: WeWatch */}
        <section className="section">
          <div className="container">
            <div className="grid-2" style={{ alignItems: "center", gap: "60px" }}>
              <div>
                <span className="section-subtitle" style={{ color: "var(--accent)" }}>Featured Web Portal</span>
                <h2 style={{ fontSize: "2.2rem", margin: "10px 0 20px 0" }}>WeWatch Portal</h2>
                <p style={{ fontSize: "1.05rem", marginBottom: "20px" }}>
                  District administrations face challenges in maintaining unified visual metrics and logging parameters for public operations. WeWatch is a central web dashboard developed to integrate reporting lines into a single screen.
                </p>
                <p style={{ fontSize: "1.05rem", marginBottom: "24px" }}>
                  By providing administrative officers with real-time statistics, geographical coordinates, and digital logs, WeWatch ensures high accountability and data-driven coordination across governance campaigns.
                </p>
                
                <div style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)", borderRadius: "10px", padding: "24px", marginBottom: "30px" }}>
                  <h4 style={{ fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "12px", fontWeight: "700" }}>Key Technical Features</h4>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                    <li style={{ display: "flex", gap: "8px", fontSize: "0.92rem", color: "var(--text-secondary)" }}>
                      <strong style={{ color: "var(--text-primary)" }}>• High-Performance Analytics:</strong> Real-time rendering of telemetry and operational charts.
                    </li>
                    <li style={{ display: "flex", gap: "8px", fontSize: "0.92rem", color: "var(--text-secondary)" }}>
                      <strong style={{ color: "var(--text-primary)" }}>• Multi-Level Auth:</strong> Secure access levels tailored for field staff, supervisors, and commissioners.
                    </li>
                    <li style={{ display: "flex", gap: "8px", fontSize: "0.92rem", color: "var(--text-secondary)" }}>
                      <strong style={{ color: "var(--text-primary)" }}>• Dynamic Audit Trails:</strong> Automatic immutable logging of changes to ensure strict data validation.
                    </li>
                  </ul>
                </div>
              </div>
              
              <div style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--border-radius)", padding: "40px", display: "flex", flexDirection: "column", gap: "24px", boxShadow: "var(--shadow)" }}>
                {/* Visual Representation of Dashboard */}
                <h3 style={{ borderBottom: "1px solid var(--border)", paddingBottom: "12px", margin: "0", fontSize: "1.2rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span>WeWatch Central Control</span>
                  <span style={{ fontSize: "0.75rem", background: "var(--background)", padding: "4px 8px", borderRadius: "4px" }}>Live Status</span>
                </h3>
                
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <div style={{ background: "var(--background)", height: "40px", borderRadius: "6px", width: "100%", padding: "10px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                      <span style={{ width: "8px", height: "8px", background: "#4caf50", borderRadius: "50%" }}></span>
                      <span style={{ fontSize: "0.85rem", fontWeight: "600" }}>System Online</span>
                    </div>
                    <span style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>99.9% Uptime</span>
                  </div>
                  
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                    <div style={{ background: "var(--background)", padding: "16px", borderRadius: "6px", display: "flex", flexDirection: "column", gap: "4px" }}>
                      <span style={{ fontSize: "0.75rem", color: "var(--text-secondary)" }}>Active Portals</span>
                      <span style={{ fontSize: "1.4rem", fontWeight: "800", color: "var(--accent)" }}>12+ Dist.</span>
                    </div>
                    <div style={{ background: "var(--background)", padding: "16px", borderRadius: "6px", display: "flex", flexDirection: "column", gap: "4px" }}>
                      <span style={{ fontSize: "0.75rem", color: "var(--text-secondary)" }}>Data Nodes</span>
                      <span style={{ fontSize: "1.4rem", fontWeight: "800", color: "var(--accent)" }}>1.2M+ Logs</span>
                    </div>
                  </div>
                  
                  {/* Mock dashboard line segments represent chart logs */}
                  <div style={{ background: "var(--background)", borderRadius: "6px", padding: "20px", display: "flex", flexDirection: "column", gap: "12px" }}>
                    <span style={{ fontSize: "0.75rem", color: "var(--text-secondary)", fontWeight: "600" }}>Traffic Distribution</span>
                    <div style={{ display: "flex", gap: "4px", height: "60px", alignItems: "flex-end" }}>
                      <div style={{ background: "var(--accent)", width: "100%", height: "40%", borderRadius: "2px" }}></div>
                      <div style={{ background: "var(--accent)", width: "100%", height: "60%", borderRadius: "2px" }}></div>
                      <div style={{ background: "var(--accent)", width: "100%", height: "85%", borderRadius: "2px" }}></div>
                      <div style={{ background: "var(--accent)", width: "100%", height: "50%", borderRadius: "2px" }}></div>
                      <div style={{ background: "var(--accent)", width: "100%", height: "70%", borderRadius: "2px" }}></div>
                      <div style={{ background: "var(--accent)", width: "100%", height: "95%", borderRadius: "2px" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study 2: WeCare */}
        <section className="section-alt">
          <div className="container">
            <div className="grid-2" style={{ alignItems: "center", gap: "60px" }}>
              <div style={{ backgroundColor: "var(--background)", border: "1px solid var(--border)", borderRadius: "var(--border-radius)", padding: "40px", display: "flex", flexDirection: "column", gap: "24px", boxShadow: "var(--shadow)", order: 2 }}>
                {/* Visual Representation of Mobile App */}
                <div style={{ maxWidth: "260px", width: "100%", margin: "0 auto", border: "8px solid var(--text-primary)", borderRadius: "30px", padding: "16px 12px", background: "var(--surface)", display: "flex", flexDirection: "column", gap: "16px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid var(--border)", paddingBottom: "8px" }}>
                    <span style={{ fontSize: "0.8rem", fontWeight: "700" }}>WeCare</span>
                    <span style={{ width: "6px", height: "6px", background: "var(--accent)", borderRadius: "50%" }}></span>
                  </div>
                  
                  <div style={{ flexGrow: 1, display: "flex", flexDirection: "column", gap: "12px" }}>
                    <div style={{ height: "48px", background: "var(--background)", borderRadius: "8px", padding: "10px", display: "flex", alignItems: "center", gap: "10px" }}>
                      <div style={{ width: "24px", height: "24px", background: "var(--accent-light)", borderRadius: "4px" }}></div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "2px", flexGrow: 1 }}>
                        <div style={{ height: "8px", background: "var(--border)", width: "60%", borderRadius: "4px" }}></div>
                        <div style={{ height: "6px", background: "var(--border)", width: "40%", borderRadius: "3px" }}></div>
                      </div>
                    </div>
                    
                    <div style={{ height: "48px", background: "var(--background)", borderRadius: "8px", padding: "10px", display: "flex", alignItems: "center", gap: "10px" }}>
                      <div style={{ width: "24px", height: "24px", background: "var(--accent-light)", borderRadius: "4px" }}></div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "2px", flexGrow: 1 }}>
                        <div style={{ height: "8px", background: "var(--border)", width: "70%", borderRadius: "4px" }}></div>
                        <div style={{ height: "6px", background: "var(--border)", width: "50%", borderRadius: "3px" }}></div>
                      </div>
                    </div>
                    
                    <div style={{ background: "var(--accent)", color: "var(--background)", padding: "10px", borderRadius: "8px", textAlign: "center", fontSize: "0.8rem", fontWeight: "600", marginTop: "12px" }}>
                      Submit Feedback
                    </div>
                  </div>
                  
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <div style={{ width: "40px", height: "4px", background: "var(--border)", borderRadius: "2px" }}></div>
                  </div>
                </div>
              </div>
              
              <div style={{ order: 1 }}>
                <span className="section-subtitle" style={{ color: "var(--accent)" }}>Featured Mobile Platform</span>
                <h2 style={{ fontSize: "2.2rem", margin: "10px 0 20px 0" }}>WeCare Application</h2>
                <p style={{ fontSize: "1.05rem", marginBottom: "20px" }}>
                  Developed in coordination with district governance programs, WeCare is a citizen-focused welfare and administrative feedback mobile application. It enables administrators to map, register, and evaluate field tasks with geographic telemetry.
                </p>
                <p style={{ fontSize: "1.05rem", marginBottom: "24px" }}>
                  With optimized layouts built for Android devices, it functions effectively even under constrained mobile bandwidth, ensuring inclusive coverage in remote areas.
                </p>
                
                <div style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)", borderRadius: "10px", padding: "24px" }}>
                  <h4 style={{ fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "12px", fontWeight: "700" }}>Key Technical Features</h4>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                    <li style={{ display: "flex", gap: "8px", fontSize: "0.92rem", color: "var(--text-secondary)" }}>
                      <strong style={{ color: "var(--text-primary)" }}>• GPS Coordinates Mapping:</strong> Validated geopoint tagging for administrative updates.
                    </li>
                    <li style={{ display: "flex", gap: "8px", fontSize: "0.92rem", color: "var(--text-secondary)" }}>
                      <strong style={{ color: "var(--text-primary)" }}>• Lightweight & Faster:</strong> Heavily compressed JSON payload structure to minimize data consumption.
                    </li>
                    <li style={{ display: "flex", gap: "8px", fontSize: "0.92rem", color: "var(--text-secondary)" }}>
                      <strong style={{ color: "var(--text-primary)" }}>• Secure Submissions:</strong> End-to-end token validation preventing spoofed report submissions.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Banner CTA */}
        <section className="section" style={{ textAlign: "center" }}>
          <div className="container" style={{ maxWidth: "600px" }}>
            <h2>Ready to Deploy a Digital Project?</h2>
            <p style={{ marginBottom: "30px" }}>
              Our engineers possess deep knowledge in optimizing custom databases, responsive web pages, and cross-platform mobile apps.
            </p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
              <Link href="/contact" className="btn btn-primary">
                Work With Us
              </Link>
              <Link href="/services" className="btn btn-secondary">
                View Services
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
