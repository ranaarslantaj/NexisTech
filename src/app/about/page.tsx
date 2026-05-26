import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";

export default function About() {
  return (
    <>
      <Navbar />
      
      <main className="animate-fade-in">
        {/* Banner Section */}
        <section className="section" style={{ padding: "80px 0 40px 0", borderBottom: "1px solid var(--border)", backgroundColor: "var(--surface)" }}>
          <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
            <span className="section-subtitle">Who We Are</span>
            <h1 style={{ fontSize: "2.8rem", marginBottom: "16px" }}>About Nexis Tech Solutions</h1>
            <p style={{ fontSize: "1.1rem", margin: "0" }}>
              Nexis Tech Solutions (Private) Limited specializes in building modern software architectures that empower growth, streamline operations, and support governance.
            </p>
          </div>
        </section>

        {/* Corporate Profile */}
        <section className="section">
          <div className="container">
            <div className="grid-2" style={{ gap: "60px", alignItems: "flex-start" }}>
              <div>
                <span className="section-subtitle">Overview</span>
                <h2 style={{ fontSize: "2rem", margin: "10px 0 20px 0" }}>Company Profile</h2>
                <p>
                  Welcome to Nexis Tech Solutions (Private) Limited. We are a modern technology company focused on software development, digital transformation, automation, and innovative IT solutions.
                </p>
                <p>
                  Our team leverages modern development frameworks and security standards to deliver robust digital platforms. We coordinate with public administrations and corporate clients to architect software that empowers digital governance, analytics, and operational growth.
                </p>
                
                <div style={{ display: "flex", gap: "20px", marginTop: "32px", flexWrap: "wrap" }}>
                  <div style={{ flex: "1 1 200px", background: "var(--surface)", border: "1px solid var(--border)", padding: "20px", borderRadius: "10px" }}>
                    <span style={{ fontSize: "2rem", fontWeight: "800", color: "var(--accent)" }}>SECP</span>
                    <p style={{ fontSize: "0.88rem", margin: "8px 0 0 0", fontWeight: "600", color: "var(--text-primary)" }}>
                      Corporate ID No. 0331157
                    </p>
                  </div>
                  <div style={{ flex: "1 1 200px", background: "var(--surface)", border: "1px solid var(--border)", padding: "20px", borderRadius: "10px" }}>
                    <span style={{ fontSize: "2rem", fontWeight: "800", color: "var(--accent)" }}>PK</span>
                    <p style={{ fontSize: "0.88rem", margin: "8px 0 0 0", fontWeight: "600", color: "var(--text-primary)" }}>
                      Headquarters in Punjab
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--border-radius)", padding: "40px", boxShadow: "var(--shadow)" }}>
                  <span className="section-subtitle" style={{ fontSize: "0.78rem" }}>Our Commitment</span>
                  <h3 style={{ fontSize: "1.4rem", margin: "10px 0 16px 0" }}>Mission Statement</h3>
                  <blockquote style={{ fontSize: "1.05rem", color: "var(--text-primary)", fontStyle: "italic", borderLeft: "3px solid var(--accent)", paddingLeft: "16px", marginBottom: "20px", lineHeight: "1.6" }}>
                    “To deliver secure, scalable, and future-ready technology solutions that empower businesses, organizations, and government departments across Pakistan.”
                  </blockquote>
                  <p style={{ fontSize: "0.95rem", margin: "0" }}>
                    We aim to build modern, reliable, and innovative digital solutions that contribute towards organizational growth, smart governance, and digital transformation across the region.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CEO Message Detail */}
        <section className="section-alt">
          <div className="container" style={{ maxWidth: "800px" }}>
            <div style={{ textAlign: "center", marginBottom: "50px" }}>
              <span className="section-subtitle">Leadership Statement</span>
              <h2>CEO’s Message</h2>
            </div>
            
            <div style={{ backgroundColor: "var(--background)", border: "1px solid var(--border)", borderRadius: "var(--border-radius)", padding: "50px", boxShadow: "var(--shadow)" }}>
              <p style={{ fontSize: "1.1rem", fontWeight: "500", color: "var(--text-primary)", lineHeight: "1.8", marginBottom: "24px" }}>
                At Nexis Tech Solutions (Private) Limited, we believe technology is not only about software — it is about creating meaningful impact, solving real-world challenges, and improving systems for the future.
              </p>
              <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: "1.7", marginBottom: "20px" }}>
                Our vision is to build modern, reliable, and innovative digital solutions that contribute towards organizational growth, smart governance, and digital transformation across Pakistan.
              </p>
              <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: "1.7", marginBottom: "24px" }}>
                Through dedication, creativity, and continuous innovation, our team is committed to delivering excellence in every project we undertake. We sincerely thank our clients, partners, and supporters for their trust and confidence in Nexis Tech Solutions.
              </p>
              
              <div style={{ borderTop: "1px solid var(--border)", paddingTop: "24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
                <div>
                  <h4 style={{ fontSize: "1.15rem", margin: "0", color: "var(--text-primary)" }}>Muneer Ahmad</h4>
                  <p style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--text-secondary)", margin: "4px 0 0 0" }}>
                    CEO – Nexis Tech Solutions (Private) Limited
                  </p>
                </div>
                {/* Clean graphic badge to represent official signed seal */}
                <div style={{ border: "1px solid var(--accent)", color: "var(--accent)", padding: "6px 14px", borderRadius: "4px", fontSize: "0.78rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                  Verified Signature
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECP Detail & Security Block */}
        <section className="section" style={{ textAlign: "center" }}>
          <div className="container" style={{ maxWidth: "600px" }}>
            <h2>Corporate Registration</h2>
            <p style={{ marginBottom: "24px" }}>
              Nexis Tech Solutions (Private) Limited is registered with the Securities and Exchange Commission of Pakistan (SECP) under Corporate Unique Identification Number **0331157**.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Connect with Our Team
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
