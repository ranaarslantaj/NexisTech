import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export default function Terms() {
  const termsList = [
    "Users must use services lawfully and responsibly.",
    "Unauthorized access or misuse of systems is strictly prohibited.",
    "Nexis Tech Solutions (Private) Limited reserves the right to update services, parameters, and policies without prior notice.",
    "All intellectual property, software, source code, branding, and design content remain the property of Nexis Tech Solutions (Private) Limited.",
    "Users are responsible for maintaining the strict confidentiality of their account information, access credentials, and keys."
  ];

  return (
    <>
      <Navbar />
      
      <main className="animate-fade-in">
        <section className="section" style={{ padding: "80px 0 40px 0", borderBottom: "1px solid var(--border)", backgroundColor: "var(--surface)" }}>
          <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
            <span className="section-subtitle">Legal Agreement</span>
            <h1 style={{ fontSize: "2.8rem", marginBottom: "16px" }}>Terms & Conditions</h1>
            <p style={{ fontSize: "1.1rem", margin: "0" }}>
              Please read these terms carefully before accessing or using services provided by Nexis Tech Solutions (Private) Limited.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container" style={{ maxWidth: "720px" }}>
            <div style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--border-radius)", padding: "40px", boxShadow: "var(--shadow)" }}>
              <h2 style={{ fontSize: "1.5rem", marginBottom: "20px", borderBottom: "1px solid var(--border)", paddingBottom: "12px" }}>
                Service Use Guidelines
              </h2>
              <p style={{ fontSize: "0.98rem", marginBottom: "24px" }}>
                By accessing or using services provided by Nexis Tech Solutions (Private) Limited, you agree to comply with and be bound by the following terms. Continued use of our applications, web portals, or consultation services constitutes acceptance of these terms.
              </p>
              
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "16px", marginBottom: "24px" }}>
                {termsList.map((term, index) => (
                  <li key={index} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                    <span style={{
                      backgroundColor: "var(--accent-light)",
                      color: "var(--accent)",
                      width: "24px",
                      height: "24px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.8rem",
                      fontWeight: "700",
                      flexShrink: 0,
                      marginTop: "2px"
                    }}>
                      {index + 1}
                    </span>
                    <span style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: "1.6" }}>
                      {term}
                    </span>
                  </li>
                ))}
              </ul>
              
              <div style={{ backgroundColor: "var(--background)", borderRadius: "8px", padding: "20px", marginTop: "40px", border: "1px solid var(--border)" }}>
                <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", margin: "0", lineHeight: "1.5" }}>
                  <strong>Note:</strong> These Terms and Conditions apply to all developers, clients, and partners working with Nexis Tech Solutions (Private) Limited. For inquiries regarding custom agreements or specific project licensing, please email us directly at contact@nexistechsolutions.com.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
