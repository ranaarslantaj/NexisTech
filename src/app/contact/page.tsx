import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ContactForm from "@/components/ContactForm/ContactForm";

export default function Contact() {
  return (
    <>
      <Navbar />
      
      <main className="animate-fade-in">
        {/* Banner Section */}
        <section className="section" style={{ padding: "80px 0 40px 0", borderBottom: "1px solid var(--border)", backgroundColor: "var(--surface)" }}>
          <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
            <span className="section-subtitle">Get in Touch</span>
            <h1 style={{ fontSize: "2.8rem", marginBottom: "16px" }}>Contact Nexis Tech</h1>
            <p style={{ fontSize: "1.1rem", margin: "0" }}>
              Reach out to us to schedule a product demo, request a development quote, or partner on digital transformation.
            </p>
          </div>
        </section>

        {/* Contact Form and Details Grid */}
        <section className="section">
          <div className="container">
            <div className="grid-2" style={{ gap: "60px", alignItems: "flex-start" }}>
              {/* Left Column: Direct Info & Map Mockup */}
              <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
                <div>
                  <span className="section-subtitle">Headquarters</span>
                  <h2 style={{ fontSize: "2rem", margin: "10px 0 20px 0" }}>Nexis Tech Solutions</h2>
                  
                  <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                      <div style={{ color: "var(--accent)", padding: "10px", backgroundColor: "var(--surface)", border: "1px solid var(--border)", borderRadius: "8px", display: "inline-flex" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: "20px", height: "20px" }}>
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                      </div>
                      <div>
                        <h4 style={{ fontSize: "1rem", margin: "0 0 4px 0", fontWeight: "700" }}>Office Address</h4>
                        <p style={{ fontSize: "0.95rem", margin: "0" }}>
                          136 D-Block, Near Jinnah Road, Vehari, Punjab, Pakistan
                        </p>
                      </div>
                    </div>

                    <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                      <div style={{ color: "var(--accent)", padding: "10px", backgroundColor: "var(--surface)", border: "1px solid var(--border)", borderRadius: "8px", display: "inline-flex" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: "20px", height: "20px" }}>
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                          <polyline points="22,6 12,13 2,6" />
                        </svg>
                      </div>
                      <div>
                        <h4 style={{ fontSize: "1rem", margin: "0 0 4px 0", fontWeight: "700" }}>Email Communication</h4>
                        <p style={{ fontSize: "0.95rem", margin: "0" }}>
                          <a href="mailto:contact@nexistechsolutions.com" style={{ color: "var(--accent)", textDecoration: "underline" }}>
                            contact@nexistechsolutions.com
                          </a>
                        </p>
                      </div>
                    </div>

                    <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                      <div style={{ color: "var(--accent)", padding: "10px", backgroundColor: "var(--surface)", border: "1px solid var(--border)", borderRadius: "8px", display: "inline-flex" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: "20px", height: "20px" }}>
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                      </div>
                      <div>
                        <h4 style={{ fontSize: "1rem", margin: "0 0 4px 0", fontWeight: "700" }}>Contact Hotline</h4>
                        <p style={{ fontSize: "0.95rem", margin: "0" }}>
                          <a href="tel:+923007722777" style={{ color: "var(--accent)" }}>
                            +92-300-7722777
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Styled coordinates container as visual map representation */}
                <div style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--border-radius)", padding: "30px", display: "flex", flexDirection: "column", gap: "16px", boxShadow: "var(--shadow)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: "0.85rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--accent)" }}>HQ Coordinates</span>
                    <span style={{ fontSize: "0.82rem", color: "var(--text-secondary)" }}>Vehari, Punjab</span>
                  </div>
                  
                  {/* Decorative map grid lines */}
                  <div style={{ height: "150px", border: "1px solid var(--border)", borderRadius: "8px", background: "var(--background)", position: "relative", overflow: "hidden" }}>
                    <div style={{ position: "absolute", top: "50%", left: "0", width: "100%", height: "1px", background: "var(--border)" }}></div>
                    <div style={{ position: "absolute", top: "0", left: "50%", width: "1px", height: "100%", background: "var(--border)" }}></div>
                    <div style={{ position: "absolute", top: "25%", left: "0", width: "100%", height: "1px", background: "var(--border)", opacity: "0.5" }}></div>
                    <div style={{ position: "absolute", top: "0", left: "25%", width: "1px", height: "100%", background: "var(--border)", opacity: "0.5" }}></div>
                    <div style={{ position: "absolute", top: "75%", left: "0", width: "100%", height: "1px", background: "var(--border)", opacity: "0.5" }}></div>
                    <div style={{ position: "absolute", top: "0", left: "75%", width: "1px", height: "100%", background: "var(--border)", opacity: "0.5" }}></div>
                    
                    {/* Pulsing indicator representing corporate office */}
                    <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <span style={{ width: "12px", height: "12px", background: "var(--accent)", borderRadius: "50%", border: "2px solid var(--surface)", display: "inline-block" }}></span>
                      <span style={{ fontSize: "0.72rem", background: "var(--text-primary)", color: "var(--surface)", padding: "2px 6px", borderRadius: "4px", marginTop: "6px", whiteSpace: "nowrap", fontWeight: "600" }}>
                        Nexis Tech Solutions
                      </span>
                    </div>
                  </div>
                  
                  <span style={{ fontSize: "0.82rem", color: "var(--text-secondary)", textAlign: "center", fontStyle: "italic" }}>
                    Located near Jinnah Road for convenient physical access.
                  </span>
                </div>
              </div>

              {/* Right Column: Contact Form */}
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
