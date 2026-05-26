import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";

export default function Services() {
  const servicesList = [
    {
      title: "Mobile Application Development",
      description: "Engineering fluid, native, and cross-platform mobile apps for Android and iOS devices designed to deliver engaging user experiences.",
      capabilities: ["Native iOS (Swift) & Android (Kotlin)", "Cross-Platform (React Native / Flutter)", "Offline Sync & Real-time Databases"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: "36px", height: "36px" }}>
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      )
    },
    {
      title: "Web Application Development",
      description: "Building responsive, robust, and search-optimized web systems utilizing advanced modern architectures to achieve excellent performance.",
      capabilities: ["Next.js & React Frameworks", "RESTful & GraphQL API Integrations", "Single Page Applications & SSR Engines"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: "36px", height: "36px" }}>
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      )
    },
    {
      title: "Government Digital Solutions",
      description: "Developing digital-first administrative solutions in cooperation with public departments to drive transparency and modernization.",
      capabilities: ["E-Governance Portals & Services", "Administrative Grievance Trackers", "Civic Portal Integration Systems"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: "36px", height: "36px" }}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      )
    },
    {
      title: "Dashboard & Monitoring Systems",
      description: "Implementing data analytics pipelines and graphical dashboards to provide real-time indicators for tracking operational performance.",
      capabilities: ["Real-time Data Streaming Views", "Interactive Analytical Charting", "Custom Alerting & Notifications"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: "36px", height: "36px" }}>
          <path d="M3 3v18h18" />
          <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
        </svg>
      )
    },
    {
      title: "Cloud-Based Platforms",
      description: "Structuring scalable, high-availability cloud architecture to secure databases and application pipelines for high-traffic environments.",
      capabilities: ["AWS / Firebase Architecture Design", "Scalable Database Sharding & Backups", "Docker & Kubernetes Deployment"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: "36px", height: "36px" }}>
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
        </svg>
      )
    },
    {
      title: "E-Commerce Solutions",
      description: "Developing online marketplaces equipped with secure transaction layers, inventory monitors, and optimized customer checkout tunnels.",
      capabilities: ["Custom Storefront Implementations", "Secure Multi-Method Payments", "Inventory & Order Control Systems"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: "36px", height: "36px" }}>
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
      )
    },
    {
      title: "Smart Management Systems",
      description: "Optimizing internal operations with ERP, CRM, and bespoke HRM tools designed to automate tasks and secure private company records.",
      capabilities: ["User Roles & Permission Structures", "Automated Billing & Reporting Modules", "HR & Task Assignment Dashboards"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: "36px", height: "36px" }}>
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      )
    },
    {
      title: "UI/UX & Digital Branding",
      description: "Developing modern interface architectures that bridge the gap between creative visual designs and optimized product goals.",
      capabilities: ["Interactive Component Wireframing", "Consistent Component Library Styling", "User Research & Interaction Audits"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: "36px", height: "36px" }}>
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
          <path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" />
        </svg>
      )
    }
  ];

  return (
    <>
      <Navbar />
      
      <main className="animate-fade-in">
        {/* Banner header */}
        <section className="section" style={{ padding: "80px 0 40px 0", borderBottom: "1px solid var(--border)", backgroundColor: "var(--surface)" }}>
          <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
            <span className="section-subtitle">Our Specializations</span>
            <h1 style={{ fontSize: "2.8rem", marginBottom: "16px" }}>Technical Solutions We Deliver</h1>
            <p style={{ fontSize: "1.1rem", margin: "0" }}>
              Nexis Tech Solutions (Private) Limited provides future-ready platforms that drive optimization, scalability, and impact for enterprise and public governance.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section">
          <div className="container">
            <div className="grid-2" style={{ rowGap: "40px", columnGap: "30px" }}>
              {servicesList.map((service, index) => (
                <div key={index} className="card" style={{ padding: "40px", justifyContent: "flex-start" }}>
                  <div style={{ display: "flex", gap: "20px", alignItems: "flex-start", marginBottom: "20px" }}>
                    <div style={{ color: "var(--accent)", padding: "12px", backgroundColor: "var(--background)", borderRadius: "10px", display: "inline-flex" }}>
                      {service.icon}
                    </div>
                    <div style={{ alignSelf: "center" }}>
                      <h3 style={{ fontSize: "1.3rem", margin: "0", fontWeight: "700" }}>{service.title}</h3>
                    </div>
                  </div>
                  
                  <p style={{ fontSize: "0.98rem", marginBottom: "24px", lineHeight: "1.6" }}>
                    {service.description}
                  </p>
                  
                  <div style={{ marginTop: "auto", borderTop: "1px solid var(--border)", paddingTop: "20px" }}>
                    <h4 style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-primary)", marginBottom: "12px", fontWeight: "700" }}>
                      Core Capabilities:
                    </h4>
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                      {service.capabilities.map((capability, i) => (
                        <li key={i} style={{ display: "flex", gap: "8px", fontSize: "0.92rem", color: "var(--text-secondary)" }}>
                          <span style={{ color: "var(--accent)" }}>✓</span>
                          <span>{capability}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="section-alt" style={{ textAlign: "center" }}>
          <div className="container" style={{ maxWidth: "600px" }}>
            <h2>Need a Bespoke Solution?</h2>
            <p style={{ marginBottom: "24px" }}>
              We collaborate with administration leaders, businesses, and platform founders to map requirements into high-availability digital assets.
            </p>
            <Link href="/contact" className="btn btn-primary">
              Discuss Your Project
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
